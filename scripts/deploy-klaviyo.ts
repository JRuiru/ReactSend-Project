/**
 * Renders React Email templates and uploads them to Klaviyo.
 *
 * Usage:
 *   npm run deploy:klaviyo              # deploy all templates
 *   npm run deploy:klaviyo -- welcome   # deploy a single template
 */
import "dotenv/config";
import { render } from "@react-email/render";
import * as fs from "fs";
import * as path from "path";

const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY;
if (!KLAVIYO_API_KEY) {
  console.error("Missing KLAVIYO_API_KEY in .env");
  process.exit(1);
}

const MAP_PATH = path.resolve(__dirname, "../klaviyo-template-map.json");
const API_BASE = "https://a.klaviyo.com/api";
const REVISION = "2024-10-15";

interface TemplateEntry {
  name: string;
  module: string;
  klaviyo_template_id: string | null;
}

function loadMap(): Record<string, TemplateEntry> {
  return JSON.parse(fs.readFileSync(MAP_PATH, "utf-8"));
}

function saveMap(map: Record<string, TemplateEntry>) {
  fs.writeFileSync(MAP_PATH, JSON.stringify(map, null, 2) + "\n");
}

async function klaviyoRequest(
  method: string,
  endpoint: string,
  body?: any
): Promise<any> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
      "Content-Type": "application/json",
      revision: REVISION,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Klaviyo ${method} ${endpoint} failed (${res.status}): ${err}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

async function deployTemplate(key: string, entry: TemplateEntry) {
  const mod = await import(
    path.resolve(__dirname, `../emails/templates/${entry.module}.tsx`)
  );
  const Component = mod.default;
  const html = await render(Component());

  let templateId = entry.klaviyo_template_id;

  if (!templateId) {
    // Create new template
    const result = await klaviyoRequest("POST", "/templates", {
      data: {
        type: "template",
        attributes: {
          name: `SeeMyHealth — ${entry.name}`,
          editor_type: "CODE",
          html,
        },
      },
    });
    templateId = result.data.id;
    console.log(`  Created "${entry.name}" → ${templateId}`);
  } else {
    // Update existing template
    await klaviyoRequest("PATCH", `/templates/${templateId}`, {
      data: {
        type: "template",
        id: templateId,
        attributes: {
          name: `SeeMyHealth — ${entry.name}`,
          html,
        },
      },
    });
    console.log(`  Updated "${entry.name}" (${templateId})`);
  }

  console.log(`  ✓ Deployed "${entry.name}"`);
  return templateId!;
}

async function main() {
  const map = loadMap();
  const target = process.argv[2];

  const keys = target ? [target] : Object.keys(map);

  if (target && !map[target]) {
    console.error(`Template "${target}" not found in klaviyo-template-map.json`);
    process.exit(1);
  }

  console.log(`\nDeploying ${keys.length} template(s) to Klaviyo...\n`);

  for (const key of keys) {
    try {
      const id = await deployTemplate(key, map[key]);
      map[key].klaviyo_template_id = id;
    } catch (err: any) {
      console.error(`  ✗ Failed "${key}":`, err.message);
    }
  }

  saveMap(map);

  console.log("\n--- Klaviyo Template IDs ---");
  for (const key of keys) {
    if (map[key].klaviyo_template_id) {
      console.log(`  ${key}: ${map[key].klaviyo_template_id}`);
    }
  }
  console.log();
}

main();
