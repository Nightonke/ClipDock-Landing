import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile(new URL('../deployment.json', import.meta.url), 'utf8'));
execFileSync('npm', ['run', 'media:prepare'], { stdio: 'inherit' });
const staged = JSON.parse(await readFile(new URL('../.deploy/media-manifest.json', import.meta.url), 'utf8'));
if (!config.mediaBaseUrl.endsWith(`/releases/${staged.release}`)) {
  throw new Error(`Media changed to release ${staged.release}. Publish and verify the new media release, then update deployment.json before publishing pages.`);
}
const origins = [config.mediaBaseUrl];
if (config.tencentOrigin) origins.push(`${config.tencentOrigin}/releases/${staged.release}`);
for (const base of origins) {
  const published = JSON.parse(execFileSync('curl', ['--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '30', `${base}/manifest.json`], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }));
  if (published.release !== staged.release || published.files.length !== staged.files.length) throw new Error(`Media manifest mismatch at ${base}`);
  const byPath = new Map(published.files.map(file => [file.path, file]));
  for (const file of staged.files) {
    if (byPath.get(file.path)?.sha256 !== file.sha256) throw new Error(`Published asset differs: ${base}/assets/${file.path}`);
  }
  console.log(`Confirmed ${published.files.length} published assets at ${base}`);
}
execFileSync('npm', ['run', 'build'], { stdio: 'inherit', env: { ...process.env, PUBLIC_MEDIA_BASE_URL: config.mediaBaseUrl } });
execFileSync('python3', ['scripts/verify-site.py'], { stdio: 'inherit' });
