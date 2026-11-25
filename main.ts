import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Absolute path derived from this file's own URL (never a relative path).
const scriptDir = dirname(fileURLToPath(import.meta.url));

// One sentence (165 chars): a piece of furniture demanding due process.
// Annoyance: a chair that wobbles and rocks. Invention: a chair that holds
// a formal hearing. Mechanism: it cross-examines the floorboards, and only
// stops rocking once the floor signs a written apology.
const sentence =
  "The Wobbly Chair Tribunal holds a formal hearing every time it wobbles, cross-examines the floorboards, and only stops rocking once the floor signs a written apology.";

try {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
  console.log("wrote entry.txt (" + sentence.length + " chars) from " + scriptDir);
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
