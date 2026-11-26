// NusaStat hand-in (Node 22, standard library only). The site is the plain
// static files in app/ beside this file: no build step, no network. This
// program stages app/ and screenshots/ into the output directory, then writes
// output/dossier.json with the vendored make.fun library, which is what the
// judge reads. vendor/makefun-frontend.ts is the kit's copy, unchanged: the
// scorer rebuilds the dossier with its own copy and compares byte for byte.
//
// Run it outside the grader with MAKEFUN_OUTPUT_DIR standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** Copy the site and its screenshots into the output directory. */
function stageApp(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  cpSync(join(here, 'app'), join(outDir, 'app'), { recursive: true });
  mkdirSync(join(outDir, 'screenshots'), { recursive: true });
  if (existsSync(join(here, 'screenshots'))) {
    cpSync(join(here, 'screenshots'), join(outDir, 'screenshots'), { recursive: true });
  }
}

/** Write the dossier for a staged output directory. */
function writeDossier(outDir: string): void {
  // The gate's caps: at most 4 screenshots of 256 KiB, at most 993 files and
  // directories in app/ totalling 16 MiB, and the dossier text at most 160 KiB.
  writeFileSync(
    join(outDir, 'dossier.json'),
    buildDossier(outDir, {
      text_max_bytes: 163840,
      screenshots: { max: 4, max_bytes: 262144 },
      app_max_files: 993,
      app_max_bytes: 16777216,
    }),
  );
}

stageApp(out);
writeDossier(out);
