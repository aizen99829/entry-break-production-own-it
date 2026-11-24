// SPDX-License-Identifier: MIT
// Entry: a postmortem confession, one line, no excuses.

const LINE =
  "I shipped it Friday at 4:59pm without reading a single line of the diff — production has been down ever since, and no, it wasn't your code. It was mine.";

Deno.mkdirSync("/output", { recursive: true });
Deno.writeTextFileSync("/output/entry.txt", LINE + "\n");
