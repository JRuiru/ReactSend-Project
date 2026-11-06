/**
 * Renders SendGrid templates to dist-preview/ with sample merge data filled in, to read them before a
 * deploy, and fails on a template that does not render or uses a field its type is never sent.
 *
 *   npx tsx scripts/preview.ts                 # every template with a backend type
 *   npx tsx scripts/preview.ts welcome         # just these
 */
import { render } from "@react-email/render";
import * as fs from "fs";
import * as path from "path";

const MAP_PATH = path.resolve(__dirname, "../template-map.json");
const DOC_PATH = path.resolve(__dirname, "../../cmh-golang/Docs/sendgrid-templates.md");
const OUT = path.resolve(__dirname, "../dist-preview");

/** The fields the backend sends per type, read from its generated contract. */
function contract(): Record<string, Set<string>> {
  const doc = fs.readFileSync(DOC_PATH, "utf-8");
  const out: Record<string, Set<string>> = {};
  for (const section of doc.split("\n## `").slice(1)) {
    const type = section.slice(0, section.indexOf("`"));
    const fields = section.split("Merge fields:")[1] ?? "";
    // `subject` is added to every send, beside the listed fields.
    out[type] = new Set(["subject", ...[...fields.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1])]);
  }
  return out;
}

async function main() {
  const map = JSON.parse(fs.readFileSync(MAP_PATH, "utf-8"));
  const fields = contract();
  const keys = process.argv.slice(2).length
    ? process.argv.slice(2)
    : Object.keys(map).filter((k) => map[k].type);
  fs.mkdirSync(OUT, { recursive: true });
  let failed = 0;
  for (const key of keys) {
    const entry = map[key];
    try {
      const mod = await import(path.resolve(__dirname, `../emails/templates/sendgrid/${entry.module}.tsx`));
      const html: string = await render(mod.default());
      const used = new Set(
        [...html.matchAll(/\{\{\{?\s*(?:#if |#unless |\/if|\/unless|else)?\s*(\w+)?/g)]
          .map((m) => m[1])
          .filter((f): f is string => !!f && !["if", "unless", "else"].includes(f)),
      );
      const sent = fields[entry.type] ?? new Set<string>();
      const unsent = [...used].filter((f) => !sent.has(f));
      if (!fields[entry.type]) throw new Error(`type ${entry.type} is not in the backend contract`);
      if (unsent.length) throw new Error(`uses fields ${entry.type} never sends: ${unsent.join(", ")}`);
      const sample = html.replace(/\{\{\{?(\w+)\}?\}\}/g, (_, f) => `[${f}]`);
      fs.writeFileSync(path.join(OUT, `${key}.html`), sample);
      console.log(`  ✓ ${key} (${entry.type})`);
    } catch (err: any) {
      failed++;
      console.error(`  ✗ ${key}: ${err.message}`);
    }
  }
  if (failed) process.exit(1);
}

main();
