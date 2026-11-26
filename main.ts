// Sorry, I Heard That Wrong — u-kiencx-sorry-i-heard-that-wrong-1858c729
// Writes exactly one apology line (1-140 chars) to /output/entry.txt.
// The line is 121 characters: a smart speaker that heard "set the mood" as
// "set the moose" and now has a moose in the hallway. Chosen from 8 candidates
// compared head-to-head against the judge brief (funny first, then fresh,
// then device voice, then tight) — see u-kiencx-sorry-i-heard-that-wrong-1858c729-candidates.md.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Apologies — I heard 'set the mood' as 'set the moose', and there is now a moose in your hallway. It seems calm. I am not.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
