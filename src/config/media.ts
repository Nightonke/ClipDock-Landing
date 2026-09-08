/** Empty in local development; production builds use an immutable media release. */
const mediaBase = (import.meta.env.PUBLIC_MEDIA_BASE_URL ?? "").replace(/\/$/, "");

export function mediaUrl(src: string): string {
  return mediaBase && src.startsWith("/assets/") ? `${mediaBase}${src}` : src;
}
