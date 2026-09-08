import { attachVideoRecovery } from './videoRecovery.mjs';

export function setupVideoRecovery(root: HTMLElement, video: HTMLVideoElement) {
  const panel = root.querySelector<HTMLElement>('.video-recovery')!;
  const status = panel.querySelector<HTMLElement>('[role="status"]')!;
  const button = panel.querySelector<HTMLButtonElement>('button')!;
  const recovery = attachVideoRecovery(video, (state: string) => {
    // Retry quietly. Only a terminal failure needs a visible action.
    panel.hidden = state !== 'failed';
    status.textContent = state === 'failed' ? (panel.dataset.failed ?? '') : '';
    button.hidden = state !== 'failed';
  });
  button.addEventListener('click', () => recovery.retry());
  return recovery;
}
