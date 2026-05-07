/**
 * Renders React Email templates to HTML and uploads them
 * to SendGrid as dynamic templates.
 *
 * Usage: npx tsx scripts/upload-to-sendgrid.ts
 *
 * Requires SENDGRID_API_KEY in .env
 */
import client from "@sendgrid/client";
import { render } from "@react-email/components";
import * as fs from "fs";
import * as path from "path";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  console.error("Missing SENDGRID_API_KEY in environment");
  process.exit(1);
}

client.setApiKey(SENDGRID_API_KEY);

interface TemplateConfig {
  name: string;
  subject: string;
  module: string; // filename in emails/ without extension
}

// Register templates here — add a new entry for each email you build
const templates: TemplateConfig[] = [
  {
    name: "Welcome Email",
    subject: "Welcome aboard!",
    module: "welcome",
  },
];

async function createOrUpdateTemplate(config: TemplateConfig) {
  // Import and render the React Email component to HTML
  const templateModule = await import(
    path.resolve(__dirname, `../emails/${config.module}.tsx`)
  );
  const Component = templateModule.default;
  const html = await render(Component({}));

  // Check if template already exists by name
  const [, existingTemplates] = await client.request({
    url: "/v3/templates",
    method: "GET",
    qs: { generations: "dynamic", page_size: 200 },
  });

  const existing = (existingTemplates as any).result?.find(
    (t: any) => t.name === config.name
  );

  let templateId: string;

  if (existing) {
    templateId = existing.id;
    console.log(`Found existing template "${config.name}" (${templateId})`);
  } else {
    // Create new dynamic template
    const [, created] = await client.request({
      url: "/v3/templates",
      method: "POST",
      body: { name: config.name, generation: "dynamic" },
    });
    templateId = (created as any).id;
    console.log(`Created template "${config.name}" (${templateId})`);
  }

  // Create a new version with the rendered HTML
  const [, version] = await client.request({
    url: `/v3/templates/${templateId}/versions`,
    method: "POST",
    body: {
      name: `${config.name} - ${new Date().toISOString()}`,
      subject: config.subject,
      html_content: html,
      active: 1,
    },
  });

  console.log(
    `  ✓ Uploaded version for "${config.name}" → template_id: ${templateId}`
  );
  return templateId;
}

async function main() {
  console.log(`Uploading ${templates.length} template(s) to SendGrid...\n`);

  const results: Record<string, string> = {};

  for (const config of templates) {
    try {
      const id = await createOrUpdateTemplate(config);
      results[config.module] = id;
    } catch (err: any) {
      console.error(
        `  ✗ Failed "${config.name}":`,
        err?.response?.body || err.message
      );
    }
  }

  console.log("\n--- Template IDs (use these in your FastAPI backend) ---");
  for (const [module, id] of Object.entries(results)) {
    console.log(`  ${module}: ${id}`);
  }
}

main();
