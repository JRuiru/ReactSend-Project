/**
 * Renders React Email templates and uploads them to SendGrid
 * as dynamic templates.
 *
 * Usage:
 *   npm run deploy              # deploy all templates
 *   npm run deploy -- welcome   # deploy a single template
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

const MAP_PATH = path.resolve(__dirname, "../template-map.json");

interface TemplateEntry {
  name: string;
  subject: string;
  module: string;
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
    path.resolve(__dirname, `../emails/templates/${entry.module}.tsx`)
  );
  const Component = mod.default;
  const html = await render(Component());

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

  // Create a new active version
  await sgClient.request({
    method: "POST",
    url: `/v3/templates/${templateId}/versions`,
    body: {
      active: 1,
      name: `${key} — ${new Date().toISOString()}`,
      subject: entry.subject,
      html_content: html,
    },
  });

  console.log(`  ✓ Deployed "${entry.name}"`);
  return templateId!;
}

async function main() {
  const map = loadMap();
  const target = process.argv[2]; // optional: deploy a single template

  const keys = target ? [target] : Object.keys(map);

  if (target && !map[target]) {
    console.error(`Template "${target}" not found in template-map.json`);
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

  console.log("\n--- Template IDs (for your FastAPI backend) ---");
  for (const key of keys) {
    if (map[key].sendgrid_template_id) {
      console.log(`  ${key}: ${map[key].sendgrid_template_id}`);
    }
  }
  console.log();
}

main();
