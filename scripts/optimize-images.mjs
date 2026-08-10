/**
 * Redimensiona i recomprimeix les imatges de `public/assets/` per a web.
 *
 *   node scripts/optimize-images.mjs            → aplica els canvis
 *   node scripts/optimize-images.mjs --dry-run  → només informa
 *
 * Els originals de càmera (fins a 8256 px) no aporten res a un microsite mòbil:
 * es redueixen al costat llarg definit a MAX_EDGE i es reencoden amb mozjpeg.
 * Mai s'amplia una imatge més petita que el límit (`withoutEnlargement`).
 *
 * Els plànols (`planols/`) es deixen intactes: són PNG de línia, ja petits, i
 * reencodar-los en perdria la nitidesa.
 */
import sharp from 'sharp';
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Sense això, a Windows sharp manté obert el fitxer d'entrada i sobreescriure'l falla amb EPERM.
sharp.cache(false);

const MAX_EDGE = 2000;
const JPEG_QUALITY = 82;
const TARGETS = ['public/assets/renders', 'public/assets/fotografies'];
const DRY_RUN = process.argv.includes('--dry-run');

const mb = (n) => (n / 1048576).toFixed(2).padStart(7) + ' MB';

let before = 0, after = 0, touched = 0;

for (const dir of TARGETS) {
  const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));
  console.log(`\n=== ${dir} ===`);

  for (const file of files) {
    const src = path.join(dir, file);
    const sizeBefore = (await stat(src)).size;
    const meta = await sharp(src).metadata();
    const longEdge = Math.max(meta.width, meta.height);

    before += sizeBefore;

    // `failOn: 'none'` evita que un JPEG truncat aturi tot el lot; `unlimited`
    // cal per als originals de càmera de 45 MP.
    const buf = await sharp(src, { failOn: 'none', unlimited: true })
      .rotate() // aplica l'orientació EXIF abans d'esborrar-la
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();

    // Si el reencodat no guanya res (imatge ja optimitzada), deixa-la com està.
    if (buf.length >= sizeBefore) {
      after += sizeBefore;
      console.log(`  ·  ${file.padEnd(28)} ${mb(sizeBefore)}  (sense canvis)`);
      continue;
    }

    after += buf.length;
    touched++;
    const newMeta = await sharp(buf).metadata();
    console.log(
      `  ✓  ${file.padEnd(28)} ${mb(sizeBefore)} → ${mb(buf.length)}` +
      `   ${meta.width}×${meta.height} → ${newMeta.width}×${newMeta.height}`
    );

    // El buffer ja és complet a memòria, així que sobreescriure l'origen és segur.
    if (!DRY_RUN) await writeFile(src, buf);
  }
}

console.log(
  `\n${DRY_RUN ? '[dry-run] ' : ''}${touched} imatges optimitzades  ·  ` +
  `${mb(before)} → ${mb(after)}  (−${(100 - (after / before) * 100).toFixed(0)} %)`
);
