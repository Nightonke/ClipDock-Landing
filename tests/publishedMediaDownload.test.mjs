import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:net';
import { once } from 'node:events';
import { downloadPublishedMedia } from '../scripts/download-published-media.mjs';

async function serve(t, respond) {
  let requests = 0;
  const sockets = new Set();
  const server = createServer(socket => {
    sockets.add(socket);
    socket.on('error', () => {});
    socket.on('close', () => sockets.delete(socket));
    socket.once('data', () => respond(socket, ++requests));
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => {
    for (const socket of sockets) socket.destroy();
    return new Promise(resolve => server.close(resolve));
  });
  return { url: `http://127.0.0.1:${server.address().port}/manifest.json`, count: () => requests };
}

function reply(socket, body, status = 200, headers = '') {
  const bytes = Buffer.from(body);
  socket.end(Buffer.concat([
    Buffer.from(`HTTP/1.1 ${status} Test\r\nContent-Length: ${bytes.length}\r\nConnection: close\r\n${headers}\r\n`), bytes,
  ]));
}

const options = { retryDelayMs: 0, onRetry: () => {} };

test('connection reset (curl 56) retries and returns a complete manifest', async t => {
  const retries = [];
  const endpoint = await serve(t, (socket, attempt) => {
    if (attempt === 1) socket.resetAndDestroy();
    else reply(socket, '{"release":"verified"}');
  });
  const data = await downloadPublishedMedia(endpoint.url, { ...options, onRetry: message => retries.push(message) });
  assert.deepEqual(JSON.parse(data), { release: 'verified' });
  assert.equal(endpoint.count(), 2);
  assert.match(retries[0], /curl 56/);
});

test('partial binary data from an interrupted attempt is discarded', async t => {
  const expected = Buffer.from([0, 255, 10, 128, 1, 2, 3]);
  const endpoint = await serve(t, (socket, attempt) => {
    if (attempt === 1) socket.end('HTTP/1.1 200 OK\r\nContent-Length: 100\r\nConnection: close\r\n\r\npartial');
    else reply(socket, expected);
  });
  assert.deepEqual(await downloadPublishedMedia(endpoint.url, options), expected);
  assert.equal(endpoint.count(), 2);
});

test('a redirected CDN response with HTTP 503 retries successfully', async t => {
  const endpoint = await serve(t, (socket, attempt) => {
    if (attempt === 1) reply(socket, '', 307, 'Location: /mirror/manifest.json\r\n');
    else if (attempt === 2) reply(socket, 'unavailable', 503);
    else reply(socket, 'complete');
  });
  assert.equal((await downloadPublishedMedia(endpoint.url, options)).toString(), 'complete');
  assert.equal(endpoint.count(), 3);
});

test('missing assets fail immediately without retrying HTTP 404', async t => {
  const endpoint = await serve(t, socket => reply(socket, 'missing', 404));
  await assert.rejects(downloadPublishedMedia(endpoint.url, options), /after 1 attempt\(s\): curl 22, HTTP 404/);
  assert.equal(endpoint.count(), 1);
});

test('persistent resets stop after four attempts and identify the failed URL', async t => {
  const endpoint = await serve(t, socket => socket.resetAndDestroy());
  await assert.rejects(downloadPublishedMedia(endpoint.url, options), error => {
    assert.ok(error.message.includes(endpoint.url));
    assert.match(error.message, /after 4 attempt\(s\): curl 56/);
    return true;
  });
  assert.equal(endpoint.count(), 4);
});

test('a stalled response times out and consumes the bounded retry budget', async t => {
  const endpoint = await serve(t, () => {});
  await assert.rejects(downloadPublishedMedia(endpoint.url, { ...options, maxTime: 0.1 }), /after 4 attempt\(s\): curl 28/);
  assert.equal(endpoint.count(), 4);
});
