import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));

const sentence = "The Door of Due Process files a formal noise complaint every time it is slammed and refuses to open until you sign a written apology in triplicate.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}

void scriptDir;
