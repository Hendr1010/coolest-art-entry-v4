// coolest-art-01 v4 entry: copies entry.png to /output/entry.png.
// Node 22, standard library only. Deterministic: two runs write the same bytes.
//
// The image: a majestic glowing golden koi dragon with flowing luminous fins,
// soaring over a rain-soaked neon cyberpunk city at dusk, cherry blossom
// petals drifting through golden light — back to the epic v1 formula (our
// highest-scoring entry at 930,859), refreshed with a dusk sky and blossoms.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(ENTRY, join(OUTPUT_DIR, 'entry.png'));
