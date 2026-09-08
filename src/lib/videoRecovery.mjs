/** Recover a failed media request without retrying forever or losing the playhead. */
export function attachVideoRecovery(video, show, timers = globalThis) {
  let attempts = 0;
  let position = 0;
  let restoring = false;
  let timer;
  let generation = 0;
  const clear = () => { timers.clearTimeout(timer); timer = undefined; };
  const failed = () => { clear(); show('failed'); };
  const play = () => {
    const current = generation;
    video.muted = true;
    video.play().catch((error) => {
      if (current !== generation || error.name === 'AbortError') return;
      if (!video.error) failed(); // Autoplay denial needs a user gesture, not more requests.
    });
  };
  const reload = () => {
    clear();
    restoring = true;
    show('retrying');
    video.load();
    // Also bound a request that never produces metadata, an error, or a waiting event.
    timer = timers.setTimeout(retry, 15000);
    play();
  };
  function retry() {
    clear();
    if (!video.getAttribute('src')) return;
    if (attempts >= 3) { failed(); return; }
    attempts += 1;
    show('retrying');
    timer = timers.setTimeout(reload, attempts * 1000);
  }
  video.addEventListener('error', () => {
    // Network/read and decode errors may recover after reloading. Unsupported media won't.
    if (video.error && ![2, 3].includes(video.error.code)) { failed(); return; }
    retry();
  });
  video.addEventListener('loadedmetadata', () => {
    if (!restoring) return;
    if (position > 0 && Number.isFinite(video.duration)) {
      video.currentTime = Math.min(position, Math.max(0, video.duration - 0.1));
    }
    restoring = false;
  });
  video.addEventListener('timeupdate', () => {
    if (restoring || video.error) return;
    if (!video.paused && Math.abs(video.currentTime - position) > 0.01) {
      clear();
      show('idle');
    }
    position = video.currentTime;
  });
  video.addEventListener('waiting', () => {
    if (timer === undefined && !video.paused) timer = timers.setTimeout(retry, 15000);
  });
  video.addEventListener('ended', () => { clear(); show('idle'); });
  return {
    reset() {
      generation += 1;
      clear();
      attempts = 0;
      position = 0;
      restoring = false;
      show('idle');
    },
    retry() {
      generation += 1;
      attempts = 0;
      if (!restoring && Number.isFinite(video.currentTime) && video.currentTime > 0) position = video.currentTime;
      reload();
    },
  };
}
