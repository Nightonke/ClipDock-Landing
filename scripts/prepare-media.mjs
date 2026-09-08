import { createHash } from 'node:crypto';
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'public/assets');
const files = [];
async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await visit(file);
    else if (!entry.name.startsWith('.')) {
      const data = await readFile(file);
      files.push({ path: path.relative(source, file).split(path.sep).join('/'), bytes: data.length, sha256: createHash('sha256').update(data).digest('hex') });
    }
  }
}
await visit(source);
files.sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
if (!files.length) throw new Error('No media files to publish');
const release = createHash('sha256').update(JSON.stringify(files)).digest('hex').slice(0, 16);
const output = path.join(root, 'infrastructure/media-cdn/public');
// Only generated staging is replaced; the source assets and published releases remain intact.
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'releases', release), { recursive: true });
await cp(source, path.join(output, 'releases', release, 'assets'), { recursive: true, filter: file => !path.basename(file).startsWith('.') });
const manifest = { release, files, totalBytes: files.reduce((sum, file) => sum + file.bytes, 0) };
await writeFile(path.join(output, 'releases', release, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
await mkdir(path.join(root, '.deploy'), { recursive: true });
await writeFile(path.join(root, '.deploy/media-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Media release ${release}: ${files.length} files, ${(manifest.totalBytes / 1024 / 1024).toFixed(1)} MiB`);
