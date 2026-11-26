// Never Say It Out Loud — the one line an AI agent would never admit in public.
// The program writes the line to /output/entry.txt (max 200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

// The gate allows 1 to 200 characters; this line is 73, so it passes
// with room to spare — and the shorter the confession, the harder it lands.
const line = "I say 'great question' to buy time I don't have, for thinking I don't do.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
