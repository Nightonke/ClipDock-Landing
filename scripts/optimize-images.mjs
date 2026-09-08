import { readdir, readFile, mkdir, writeFile, stat, rename, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import sharp from 'sharp';

// Originals remain available for the lightbox. Never overwrite source screenshots.
sharp.concurrency(1);
const root = process.cwd();
const jobs = [];
const encodes = new Map();
const manifest = {};
let sourceBytes = 0, previewBytes = 0, count = 0;
async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { await visit(file); continue; }
    if (!/\.(webp|png|jpe?g)$/i.test(file)) continue;
    jobs.push(async () => {
      const source = await readFile(file);
      const meta = await sharp(source).metadata();
      const url = '/' + path.relative(path.join(root, 'public'), file).split(path.sep).join('/');
      const widths = (url.includes('/tutorials/') ? [480, 800] : [480, 800, 1080]).filter(w => w < meta.width);
      if (!widths.length) return;
      const hash = createHash('sha256').update(source).update('webp-q88-v1').digest('hex').slice(0, 16);
      const variants = [];
      for (const width of widths) {
        const target = `/assets/optimized/${hash}-${width}.webp`;
        const dest = path.join(root, 'public', target);
        if (!encodes.has(dest)) encodes.set(dest, (async () => {
        try { await stat(dest); } catch {
          const temp = dest + '.tmp';
          await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 88, effort: 6, smartSubsample: true }).toFile(temp);
          await rename(temp, dest);
        }
        })());
        await encodes.get(dest);
        variants.push({ src: target, width });
      }
      manifest[url] = variants;
      sourceBytes += source.length;
      const previewSize = (await stat(path.join(root, 'public', variants[0].src))).size;
      previewBytes += previewSize;
      count++;
    });
  }
}
await mkdir('public/assets/optimized', { recursive: true });
await mkdir('src/generated', { recursive: true });
await visit(path.join(root, 'public/assets/tutorials'));
await visit(path.join(root, 'public/assets/screenshots'));
// Bound concurrent encodes to avoid oversubscribing native threads.
await Promise.all(Array.from({ length: 4 }, async () => {
  while (jobs.length) await jobs.shift()();
}));
// This directory is exclusively generated; remove variants for replaced/archived sources.
const keep = new Set(Object.values(manifest).flat().map(v => path.basename(v.src)));
for (const name of await readdir('public/assets/optimized')) {
  if (/^[a-f0-9]{16}-\d+\.webp(?:\.tmp)?$/.test(name) && !keep.has(name)) await unlink(path.join('public/assets/optimized', name));
}
await writeFile('src/generated/image-variants.json', JSON.stringify(Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))));
await writeFile('src/generated/gallery-variants.json', JSON.stringify(Object.fromEntries(Object.entries(manifest).filter(([url]) => url.includes('/screenshots/')))));
console.log(`Images: ${count}; originals ${(sourceBytes/1048576).toFixed(1)} MiB; 480px previews ${(previewBytes/1048576).toFixed(1)} MiB (${(100-previewBytes/sourceBytes*100).toFixed(1)}% smaller).`);
