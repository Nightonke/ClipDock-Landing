import QRCode from 'qrcode';
import { readFile, writeFile } from 'node:fs/promises';
const { download: downloadQrUrl } = JSON.parse(await readFile(new URL('../src/config/store-links.json', import.meta.url), 'utf8'));

// Stable first-party destination. Both stores are available without JavaScript.
await writeFile(new URL('../public/download-qr.svg', import.meta.url), await QRCode.toString(downloadQrUrl, { type: 'svg', errorCorrectionLevel: 'M', margin: 4, width: 180 }));
