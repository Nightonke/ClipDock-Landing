import QRCode from 'qrcode';
import { readFile, writeFile } from 'node:fs/promises';
const links = JSON.parse(await readFile(new URL('../src/config/store-links.json', import.meta.url), 'utf8'));

// Stable first-party destination. Both stores are available without JavaScript.
for (const [file, url] of [['download-qr.svg', links.download], ['app-store-qr.svg', links.apple], ['google-play-qr.svg', links.google]]) {
  await writeFile(new URL(`../public/${file}`, import.meta.url), await QRCode.toString(url, { type: 'svg', errorCorrectionLevel: 'M', margin: 4, width: 180 }));
}
