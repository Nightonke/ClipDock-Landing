import test from 'node:test';
import assert from 'node:assert/strict';
import { attachVideoRecovery } from '../src/lib/videoRecovery.mjs';

function fixture() {
  const tasks = new Map(); let id = 0;
  const timers = { setTimeout(fn) { tasks.set(++id, fn); return id; }, clearTimeout(id) { tasks.delete(id); } };
  const video = new EventTarget();
  Object.assign(video, { currentTime: 12, duration: 34.5, paused: false, error: null, loads: 0,
    getAttribute: () => '/demo.mp4', play: () => Promise.resolve(),
    load() { this.loads++; this.currentTime = 0; this.error = null; },
  });
  let state;
  const recovery = attachVideoRecovery(video, value => state = value, timers);
  const emit = name => video.dispatchEvent(new Event(name));
  const tick = () => { const entry = tasks.entries().next().value; assert.ok(entry); tasks.delete(entry[0]); entry[1](); };
  const error = () => { video.error = { code: 2 }; emit('error'); };
  return { video, recovery, emit, tick, error, tasks, state: () => state };
}

test('network failure reloads and restores the playhead; partial progress does not renew the retry budget', () => {
  const f = fixture(); f.emit('timeupdate');
  for (let n = 0; n < 3; n++) {
    const position = f.video.currentTime;
    f.error(); f.tick(); assert.equal(f.video.loads, n + 1);
    f.emit('loadedmetadata'); assert.equal(f.video.currentTime, position);
    f.video.currentTime += 1; f.emit('timeupdate'); assert.equal(f.state(), 'idle');
  }
  f.error(); assert.equal(f.state(), 'failed'); assert.equal(f.tasks.size, 0);
  f.recovery.retry(); assert.equal(f.video.loads, 4);
  f.emit('loadedmetadata'); assert.equal(f.video.currentTime, 15);
});

test('switching sources cancels queued retries and the previous playhead', () => {
  const f = fixture(); f.emit('timeupdate'); f.error(); f.recovery.reset();
  assert.equal(f.tasks.size, 0); assert.equal(f.state(), 'idle');
  f.video.currentTime = 0; f.error(); f.tick(); f.emit('loadedmetadata');
  assert.equal(f.video.currentTime, 0);
});

test('a request that never responds is bounded and exposes manual recovery', () => {
  const f = fixture(); f.emit('waiting');
  while (f.tasks.size) f.tick();
  assert.equal(f.video.loads, 3); assert.equal(f.state(), 'failed');
});

test('unsupported media and autoplay denial expose a button without an automatic request loop', async () => {
  const f = fixture(); f.video.error = { code: 4 }; f.emit('error');
  assert.equal(f.state(), 'failed'); assert.equal(f.tasks.size, 0);
  f.video.play = () => Promise.reject({ name: 'NotAllowedError' });
  f.recovery.retry(); await Promise.resolve();
  assert.equal(f.state(), 'failed'); assert.equal(f.tasks.size, 0);
});
