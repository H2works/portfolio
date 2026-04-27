import fs from "node:fs";
import path from "node:path";

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/clean.mjs <dir>");
  process.exit(1);
}

const root = process.cwd();
const resolved = path.resolve(root, target);

fs.rmSync(resolved, { recursive: true, force: true });
fs.mkdirSync(resolved, { recursive: true });

