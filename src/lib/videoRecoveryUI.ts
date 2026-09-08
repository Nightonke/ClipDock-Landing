import { attachVideoRecovery } from './videoRecovery.mjs';

export function setupVideoRecovery(root: HTMLElement, video: HTMLVideoElement) {
  const panel = root.querySelector<HTMLElement>('.video-recovery')!;
  const status = panel.querySelector<HTMLElement>('[role="status"]')!;
  const button = panel.querySelector<HTMLButtonElement>('button')!;
  const recovery = attachVideoRecovery(video, (state: string) => {
    panel.hidden = state === 'idle';
    status.textContent = state === 'retrying' ? '视频连接中断，正在重新加载…' : '视频暂时无法播放，请重试。';
    button.hidden = state !== 'failed';
  });
  button.addEventListener('click', () => recovery.retry());
  return recovery;
}
