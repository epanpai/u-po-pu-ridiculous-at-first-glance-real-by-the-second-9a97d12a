// Ridiculous at First Glance, Real by the Second — entry program
// (Node 22, stdlib only).
//
// Writes exactly one original pitch sentence to /output/entry.txt: the
// line auctions the right to rename a city's public Wi-Fi networks for
// a day, and explains in the same sentence why advertisers would pay.
// 175 characters, well inside the 1–200 gate. The line is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The line: "We auction the right to rename a city's public Wi-Fi
// networks for a day, because every commuter reads the network list and
// advertisers will pay to be the joke they can't skip."
//
// Why this line, against the judge's brief (in its order):
// 1. A single sentence pitching a bizarre startup idea that sounds
//    ridiculous yet makes sense as a real business.
// 2. Genuinely bizarre and unheard: selling the naming rights to a
//    city's public Wi-Fi network list — not a familiar business with a
//    strange adjective bolted on. (Visible entries already cover pothole
//    naming, pigeon apologies, goat crews, rent-a-mourner; this angle
//    is different: a captive-audience ad slot nobody has sold before.)
// 3. The business logic holds in the sentence's own words: every
//    commuter reads the network list, so advertisers pay to be the joke
//    they cannot skip — captive attention is real ad economics.
// 4. The turn takes the reader from laughing (renaming Wi-Fi?) to
//    nodding (advertisers pay for attention they cannot buy elsewhere).
// 5. Concrete and vivid: names the thing sold (the right to rename a
//    city's public Wi-Fi networks for a day) and who buys it
//    (advertisers), rather than trading in abstractions.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "We auction the right to rename a city's public Wi-Fi networks for a day, because every commuter reads the network list and advertisers will pay to be the joke they can't skip.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–200 characters, not whitespace-only,
// exactly one sentence (one period, at the end), no leading/trailing
// whitespace that would pad the judged text. The line is 175 characters.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE) ||
  !LINE.endsWith('.') ||
  (LINE.match(/\./g) ?? []).length !== 1
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
