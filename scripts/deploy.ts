/**
 * Renders React Email templates and uploads them to SendGrid
 * as dynamic templates.
 *
 * Usage:
 *   npm run deploy                          # deploy all templates
 *   npm run deploy -- client-welcome        # deploy one template
 *   npm run deploy -- client-welcome provider-booking-created
 *
 * A template with a backend `type` takes its subject from the send: the backend renders the subject
 * and passes it as the `subject` merge field, so its entry's subject is SUBJECT_FROM_SEND: the
 * send's subject, or a plain one from a backend too old to send it. The ids
 * print at the end as tfvars lines for `sendgrid_template_ids`.
 */
import "dotenv/config";
import sgClient from "@sendgrid/client";
import { render } from "@react-email/render";
import * as fs from "fs";
import * as path from "path";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  console.error("Missing SENDGRID_API_KEY — copy .env.example to .env and add your key");
  process.exit(1);
}

sgClient.setApiKey(SENDGRID_API_KEY);

const SUBJECT_FROM_SEND = "{{#if subject}}{{{subject}}}{{else}}A note from SeeMyHealth{{/if}}";

const MAP_PATH = path.resolve(__dirname, "../template-map.json");

interface TemplateEntry {
  name: string;
  subject: string;
  module: string;
  /** The backend notification type this template sends for (cmh-golang Docs/sendgrid-templates.md). */
  type?: string;
  sendgrid_template_id: string | null;
}

function loadMap(): Record<string, TemplateEntry> {
  return JSON.parse(fs.readFileSync(MAP_PATH, "utf-8"));
}

function saveMap(map: Record<string, TemplateEntry>) {
  fs.writeFileSync(MAP_PATH, JSON.stringify(map, null, 2) + "\n");
}

async function deployTemplate(key: string, entry: TemplateEntry) {
  // Dynamic import of the template
  const mod = await import(
    path.resolve(__dirname, `../emails/templates/sendgrid/${entry.module}.tsx`)
  );
  const Component = mod.default;
  const html = await render(Component());
  const text = await render(Component(), { plainText: true });

  if (entry.type && entry.subject !== SUBJECT_FROM_SEND) {
    throw new Error(`"${key}" sends for ${entry.type}, so its subject must be ${SUBJECT_FROM_SEND}`);
  }

  let templateId = entry.sendgrid_template_id;

  if (!templateId) {
    // Create new dynamic template in SendGrid
    const [, body] = await sgClient.request({
      method: "POST",
      url: "/v3/templates",
      body: { name: entry.name, generation: "dynamic" },
    });
    templateId = (body as any).id;
    console.log(`  Created template "${entry.name}" → ${templateId}`);
  } else {
    console.log(`  Updating template "${entry.name}" (${templateId})`);
  }

  // Get existing versions to update instead of creating duplicates
  const [, templateData] = await sgClient.request({
    method: "GET",
    url: `/v3/templates/${templateId}`,
  });

  // The map's name is the one SendGrid shows ("Client: …" / "Provider: …"), so a renamed entry
  // renames the template it already has rather than leaving the old name in the dashboard.
  if ((templateData as any).name !== entry.name) {
    await sgClient.request({
      method: "PATCH",
      url: `/v3/templates/${templateId}`,
      body: { name: entry.name },
    });
    console.log(`  Renamed to "${entry.name}"`);
  }
  const versions = (templateData as any).versions || [];
  const activeVersion = versions.find((v: any) => v.active === 1);

  if (activeVersion) {
    // Update existing active version
    await sgClient.request({
      method: "PATCH",
      url: `/v3/templates/${templateId}/versions/${activeVersion.id}`,
      body: {
        active: 1,
        name: `${key} — ${new Date().toISOString()}`,
        subject: entry.subject,
        html_content: html,
        plain_content: text,
      },
    });
  } else {
    // No active version yet — create one
    await sgClient.request({
      method: "POST",
      url: `/v3/templates/${templateId}/versions`,
      body: {
        active: 1,
        name: `${key} — ${new Date().toISOString()}`,
        subject: entry.subject,
        html_content: html,
        plain_content: text,
      },
    });
  }

  console.log(`  ✓ Deployed "${entry.name}"`);
  return templateId!;
}

async function main() {
  const map = loadMap();
  const targets = process.argv.slice(2); // optional: deploy only these

  const keys = targets.length ? targets : Object.keys(map);

  const unknown = keys.filter((k) => !map[k]);
  if (unknown.length) {
    console.error(`Not in template-map.json: ${unknown.join(", ")}`);
    process.exit(1);
  }

  console.log(`\nDeploying ${keys.length} template(s) to SendGrid...\n`);

  for (const key of keys) {
    try {
      const id = await deployTemplate(key, map[key]);
      map[key].sendgrid_template_id = id;
    } catch (err: any) {
      console.error(`  ✗ Failed "${key}":`, err?.response?.body || err.message);
    }
  }

  saveMap(map);

  console.log("\n--- sendgrid_template_ids (cmh-golang tfvars) ---");
  for (const key of keys) {
    const { type, sendgrid_template_id: id } = map[key];
    if (type && id) console.log(`  ${type} = "${id}"`);
  }
  console.log();
}

main();
