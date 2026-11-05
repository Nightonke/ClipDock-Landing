// Reuse the existing app icon; ICO contains PNG entries at common favicon sizes.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const sizes = [32, 48, 256];
const images = await Promise.all(sizes.map(size => sharp(fileURLToPath(new URL('../public/assets/clipdock-app-icon.png', import.meta.url)))
 .resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * images.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((data, index) => {
 const entry = 6 + index * 16;
 header[entry] = header[entry + 1] = sizes[index] === 256 ? 0 : sizes[index];
 header.writeUInt16LE(1, entry + 4);
 header.writeUInt16LE(32, entry + 6);
 header.writeUInt32LE(data.length, entry + 8);
 header.writeUInt32LE(offset, entry + 12);
 offset += data.length;
});
await writeFile(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([header, ...images]));
