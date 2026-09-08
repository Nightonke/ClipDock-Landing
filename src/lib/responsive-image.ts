import manifest from '../generated/image-variants.json';
import { mediaUrl } from '../config/media';

type Variant = { src: string; width: number };
const variants = manifest as Record<string, Variant[]>;

/** Keep the source URL for full-size links; use these props only on inline images. */
export function responsiveImage(src: string, sizes: string) {
  const entries = variants[src];
  if (!entries?.length) return { src: mediaUrl(src) };
  return {
    src: mediaUrl(entries[0].src),
    srcSet: entries.map(image => `${mediaUrl(image.src)} ${image.width}w`).join(', '),
    sizes,
  };
}

// HTML attribute spelling for Astro templates (React uses srcSet).
export function responsiveImageHtml(src: string, sizes: string) {
  const { srcSet, ...props } = responsiveImage(src, sizes) as { src: string; srcSet?: string; sizes?: string };
  return { ...props, srcset: srcSet };
}
