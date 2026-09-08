import { execFile, execFileSync } from 'node:child_process';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { promisify } from 'node:util';
import path from 'node:path';

const run = promisify(execFile);
const sha256 = data => createHash('sha256').update(data).digest('hex');

const config = JSON.parse(await readFile(new URL('../deployment.json', import.meta.url), 'utf8'));
const publishedMedia = JSON.parse(execFileSync('curl', ['--location', '--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '30', `${config.mediaBaseUrl}/manifest.json`], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }));
// Image encoders can produce different bytes on macOS and Linux. Verify the
// original inputs, then reuse the exact published derivatives before building.
const sourceFiles = new Map();
async function visitSource(dir, prefix = '') {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || (!prefix && entry.name === 'optimized')) continue;
    const relative = prefix + entry.name;
    if (entry.isDirectory()) await visitSource(path.join(dir, entry.name), relative + '/');
    else sourceFiles.set(relative, sha256(await readFile(path.join(dir, entry.name))));
  }
}
await visitSource('public/assets');
const originalFiles = publishedMedia.files.filter(file => !file.path.startsWith('optimized/'));
if (sourceFiles.size !== originalFiles.length || originalFiles.some(file => sourceFiles.get(file.path) !== file.sha256)) {
  throw new Error('Original media changed. Publish the new media release and update deployment.json before publishing pages.');
}
const derivatives = publishedMedia.files.filter(file => file.path.startsWith('optimized/'));
await mkdir('public/assets/optimized', { recursive: true });
await Promise.all(Array.from({ length: 8 }, async () => {
  while (derivatives.length) {
    const file = derivatives.shift();
    if (!/^optimized\/[a-f0-9]{16}-\d+\.webp$/.test(file.path)) throw new Error('Unexpected derivative path');
    const destination = path.join('public/assets', file.path);
    try { if (sha256(await readFile(destination)) === file.sha256) continue; } catch {}
    const { stdout } = await run('curl', ['--location', '--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '60', `${config.mediaBaseUrl}/assets/${file.path}`], { encoding: 'buffer', maxBuffer: 16 * 1024 * 1024 });
    if (sha256(stdout) !== file.sha256) throw new Error(`Published derivative hash mismatch: ${file.path}`);
    await writeFile(destination, stdout);
  }
}));
execFileSync('npm', ['run', 'media:prepare'], { stdio: 'inherit' });
const staged = JSON.parse(await readFile(new URL('../.deploy/media-manifest.json', import.meta.url), 'utf8'));
if (!config.mediaBaseUrl.endsWith(`/releases/${staged.release}`)) {
  throw new Error(`Media changed to release ${staged.release}. Publish and verify the new media release, then update deployment.json before publishing pages.`);
}
const origins = [config.mediaBaseUrl];
if (config.tencentOrigin) origins.push(`${config.tencentOrigin}/releases/${staged.release}`);
for (const base of origins) {
  const published = JSON.parse(execFileSync('curl', ['--location', '--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '30', `${base}/manifest.json`], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }));
  if (published.release !== staged.release || published.files.length !== staged.files.length) throw new Error(`Media manifest mismatch at ${base}`);
  const byPath = new Map(published.files.map(file => [file.path, file]));
  for (const file of staged.files) {
    if (byPath.get(file.path)?.sha256 !== file.sha256) throw new Error(`Published asset differs: ${base}/assets/${file.path}`);
  }
  console.log(`Confirmed ${published.files.length} published assets at ${base}`);
}
execFileSync('npm', ['run', 'build'], { stdio: 'inherit', env: { ...process.env, PUBLIC_MEDIA_BASE_URL: config.mediaBaseUrl } });
execFileSync('python3', ['scripts/verify-site.py'], { stdio: 'inherit' });

execFileSync('python3', ['scripts/verify-locales.py'], { stdio: 'inherit' });
