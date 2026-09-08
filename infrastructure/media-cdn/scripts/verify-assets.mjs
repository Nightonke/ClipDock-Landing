import { readdir, readFile, stat } from 'node:fs/promises';
const releases = new URL('../public/releases/', import.meta.url);
const names = await readdir(releases);
if (!names.length) throw new Error('Run npm run media:prepare in the website repository first');
for (const name of names) {
  const dir = new URL(`${name}/`, releases);
  const manifest = JSON.parse(await readFile(new URL('manifest.json', dir), 'utf8'));
  for (const file of manifest.files) {
    const info = await stat(new URL(`assets/${file.path}`, dir));
    if (info.size !== file.bytes) throw new Error(`Invalid asset: ${file.path}`);
  }
  console.log(`Verified release ${name}: ${manifest.files.length} assets`);
}
