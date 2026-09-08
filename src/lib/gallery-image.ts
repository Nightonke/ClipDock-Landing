import manifest from '../generated/gallery-variants.json';

// Only gallery metadata enters the hydrated React bundle.
export function galleryImage(src: string, sizes: string) {
  const entries = (manifest as Record<string, { src: string; width: number }[]>)[src];
  if (!entries?.length) return { src };
  return { src: entries[0].src, srcSet: entries.map(v => `${v.src} ${v.width}w`).join(', '), sizes };
}
