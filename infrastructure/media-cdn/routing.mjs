export function tencentRedirect(requestUrl, country, origin) {
  if (country !== 'CN' || !origin) return null;
  const source = new URL(requestUrl);
  if (!source.pathname.startsWith('/releases/')) return null;
  // Assign pathname separately so an encoded or double-slash path cannot change the host.
  const destination = new URL(origin);
  destination.pathname = source.pathname;
  destination.search = source.search;
  return destination.href;
}
