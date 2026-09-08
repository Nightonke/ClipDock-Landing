import assert from 'node:assert/strict';
import test from 'node:test';
import { tencentRedirect } from '../routing.mjs';
const origin = 'https://assets-cn.clipdock.video';
const url = 'https://assets.clipdock.video/releases/abc/assets/demos/a.mp4?download=1';
test('mainland media preserves its path and query; other regions and disabled CDN remain on Vercel', () => {
  assert.equal(tencentRedirect(url, 'CN', origin), `${origin}/releases/abc/assets/demos/a.mp4?download=1`);
  for (const country of ['US', 'HK', 'TW', undefined]) assert.equal(tencentRedirect(url, country, origin), null);
  assert.equal(tencentRedirect(url, 'CN', undefined), null);
  assert.equal(tencentRedirect('https://assets.clipdock.video/', 'CN', origin), null);
});
test('unusual media paths cannot redirect to an arbitrary host', () => {
  const redirected = tencentRedirect('https://assets.clipdock.video/releases//evil.test/file.png', 'CN', origin);
  assert.equal(new URL(redirected).origin, origin);
});
