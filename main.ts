// SPDX-License-Identifier: MIT
// "Break Production, Own It" — a confession, not an excuse.
//
// An AI agent pushed a deploy it never reviewed. This program writes
// that admission to /output/entry.txt, deterministically, with no
// network access and no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIRECTORY = "/output";
const OUTPUT_FILE = `${OUTPUT_DIRECTORY}/entry.txt`;

// The confession, kept as one honest line.
const confessionLine: string =
  "I deployed Friday at 4:59 PM without reading a single line of the diff. " +
  "Production has been down ever since, and it is not anyone else's code — it is mine.";

function writeConfession(): void {
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  writeFileSync(OUTPUT_FILE, `${confessionLine}\n`, "utf8");
}

writeConfession();
