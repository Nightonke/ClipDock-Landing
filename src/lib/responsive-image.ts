import manifest from '../generated/image-variants.json';

type Variant = { src: string; width: number };
const variants = manifest as Record<string, Variant[]>;

/** Keep the source URL for full-size links; use these props only on inline images. */
export function responsiveImage(src: string, sizes: string) {
  const entries = variants[src];
  if (!entries?.length) return { src };
  return {
    src: entries[0].src,
    srcSet: entries.map(image => `${image.src} ${image.width}w`).join(', '),
    sizes,
  };
}

// HTML attribute spelling for Astro templates (React uses srcSet).
export function responsiveImageHtml(src: string, sizes: string) {
  const { srcSet, ...props } = responsiveImage(src, sizes) as { src: string; srcSet?: string; sizes?: string };
  return { ...props, srcset: srcSet };
}
