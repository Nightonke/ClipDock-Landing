import { geolocation, next } from '@vercel/functions';
import { tencentRedirect } from './routing.mjs';

export default function middleware(request: Request) {
  const url = new URL(request.url);
  if (url.hostname === 'www.clipdock.video') {
    url.hostname = 'clipdock.video';
    return Response.redirect(url, 308);
  }
  const destination = tencentRedirect(request.url, geolocation(request).country, process.env.TENCENT_CDN_ORIGIN);
  if (!destination) return next({ headers: { 'X-Media-CDN': 'vercel' } });
  return new Response(null, {
    status: 307,
    headers: {
      Location: destination,
      'Cache-Control': 'private, no-store',
      'X-Media-CDN': 'tencent-hong-kong',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export const config = { matcher: '/:path*' };
