/**
 * Importa el material definitiu del client (`MASTER_DEFINITIUS/`) a `public/assets/`.
 *
 *   node scripts/import-master.mjs
 *
 * Mateix criteri que optimize-images.mjs: costat llarg 2000 px i mozjpeg q82.
 * Els originals de la carpeta del client no es toquen.
 *
 * NOTA: `MASTER_DEFINITIUS/` no es versiona (són 321 MB d'originals i vídeo en
 * brut). El script es conserva com a registre de quin original del client va
 * donar cada asset; per tornar-lo a executar cal recuperar la carpeta del
 * WeTransfer del Consorci i deixar-la a l'arrel del projecte.
 */
import sharp from 'sharp';
import { stat } from 'node:fs/promises';

sharp.cache(false);

const SRC = 'MASTER_DEFINITIUS';
const MAP = [
  [`${SRC}/01. La icona del litoral/AGP1884_9122-WEB.jpg`, 'public/assets/fotografies/icona-goula-frontal.jpg'],
  [`${SRC}/02. Els orígens/afd010219916.jpg`,              'public/assets/fotografies/origens-alternadors.jpg'],
  [`${SRC}/02. Els orígens/afd010219915.jpg`,              'public/assets/fotografies/origens-calderes.jpg'],
  [`${SRC}/04. l'era brutalista/Badalona I.jpg`,           'public/assets/fotografies/badalona-i.jpg'],
  [`${SRC}/07. cmc/AGP1884_8858-WEB.jpg`,                  'public/assets/fotografies/manifesta-15-nau.jpg'],
  [`${SRC}/08. l'espai de memòria/2022_11_18_cental_termica_tres_xemeneies_besos_DSC8587.jpg`, 'public/assets/fotografies/memoria-sala-control.jpg'],
  [`${SRC}/08. l'espai de memòria/2022_11_18_cental_termica_tres_xemeneies_besos_DSC8721.jpg`, 'public/assets/fotografies/memoria-contrapicat.jpg'],
  [`${SRC}/08. l'espai de memòria/2023_02_01_tres_xemeneies_DSC2145.jpg`,                      'public/assets/fotografies/memoria-conjunt-litoral.jpg'],
];

const mb = (n) => (n / 1048576).toFixed(2) + ' MB';

for (const [src, dst] of MAP) {
  const before = (await stat(src)).size;
  await sharp(src, { failOn: 'none', unlimited: true })
    .rotate()
    .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);
  const after = (await stat(dst)).size;
  console.log(`${dst.split('/').pop().padEnd(32)} ${mb(before)} → ${mb(after)}`);
}
