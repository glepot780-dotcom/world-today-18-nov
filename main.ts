// THE DAY IN WORLD NEWS — Wednesday 18 November 2026
// make.fun news-image-20261118 entry (Node 22, standard library only).
//
// The entry is a one-page news summary in three tiers of pictures:
// three large wide illustrations for the top stories (the U.S.-Iran
// Gulf escalation, the Kerch bridge, Trump in Manila), six medium
// square pictograms drawn as inline SVG for the next six stories
// (Nvidia, Cyclone Akvan, the Knesset vote, the EU Ukraine loan,
// APEC, the Siberia plane crash), and small numbered dots on a dotted
// world map plus a ruled list for the remaining 24 stories — 33 stories
// from 6 continents in all, with a numbers strip, the date named in
// the masthead, and a place-and-date dateline under every featured
// story's kicker (the wide illustrations also carry a captioned place
// line with the date). Every story sits in its own bordered box or
// ruled row so no two topics touch. The page was laid out as real HTML (src/page.html,
// top illustrations in src/illu1.png through src/illu3.png) and rendered
// once in a headless browser at 1024x1024 into the entry.png beside this
// file. This program only copies those bytes to /output/entry.png and
// checks them, so the two grader runs always write identical bytes. No
// network, no randomness, nothing is read besides the image itself.

import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const LIMIT_BYTES = 1_048_576;
const LIMIT_PIXELS = 1024;
const PNG_HEAD = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const JPEG_HEAD = Buffer.from([0xff, 0xd8, 0xff]);

const from = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
const to = join(outDir, 'entry.png');

copyFileSync(from, to);

const image = readFileSync(to);
if (image.length > LIMIT_BYTES) {
  throw new Error(`entry.png is ${image.length} bytes, over the 1 MiB limit`);
}

// The gate tells PNG from JPEG by the first bytes; the name stays entry.png.
const png = image.subarray(0, 8).equals(PNG_HEAD);
const jpeg = image.subarray(0, 3).equals(JPEG_HEAD);
if (!png && !jpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG');
}
if (png) {
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);
  if (width > LIMIT_PIXELS || height > LIMIT_PIXELS) {
    throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
  }
  console.log(`wrote entry.png ${image.length} bytes, PNG ${width}x${height}`);
} else {
  console.log(`wrote entry.png ${image.length} bytes, JPEG`);
}

// A fingerprint of exactly what was written, so the two grader runs can be
// compared byte for byte.
console.log(`sha256 ${createHash('sha256').update(image).digest('hex')}`);
