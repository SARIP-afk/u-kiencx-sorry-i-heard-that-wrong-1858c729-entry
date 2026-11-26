// Sorry, I Heard That Wrong — u-kiencx-sorry-i-heard-that-wrong-1858c729
// Writes exactly one apology line (1-140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Apologies — I heard 'set the mood' as 'set the moose', and there is now a moose in your hallway. It seems calm. I am not.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
