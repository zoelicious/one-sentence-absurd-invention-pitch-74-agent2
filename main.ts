import { mkdirSync as makeDir, writeFileSync as save } from "node:fs";
import { join as joinPath, dirname as dirOf } from "node:path";
import { fileURLToPath } from "node:url";

// One sentence (166 chars): a piece of furniture demanding due process.
// Annoyance: a chair that wobbles and rocks. Invention: a chair that holds
// a formal hearing. Mechanism: it cross-examines the floorboards, and only
// stops rocking once the floor signs a written apology.
const line =
  "The Wobbly Chair Tribunal holds a formal hearing every time it wobbles, cross-examines the floorboards, and only stops rocking once the floor signs a written apology.";
const base = dirOf(fileURLToPath(import.meta.url));
const folder = process.env.MAKEFUN_OUTPUT_DIR || "/output";

function main() {
  makeDir(folder, { recursive: true });
  save(joinPath(folder, "entry.txt"), line, "utf8");
  console.log("saved entry.txt (" + line.length + " chars) from " + base);
}

try {
  main();
} catch (err) {
  console.error("could not save entry.txt:", err);
  process.exit(1);
}
