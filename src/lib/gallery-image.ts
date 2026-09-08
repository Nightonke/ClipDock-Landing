import manifest from '../generated/gallery-variants.json';
import { mediaUrl } from '../config/media';

// Only gallery metadata enters the hydrated React bundle.
export function galleryImage(src: string, sizes: string) {
  const entries = (manifest as Record<string, { src: string; width: number }[]>)[src];
  if (!entries?.length) return { src: mediaUrl(src) };
  return { src: mediaUrl(entries[0].src), srcSet: entries.map(v => `${mediaUrl(v.src)} ${v.width}w`).join(', '), sizes };
}
