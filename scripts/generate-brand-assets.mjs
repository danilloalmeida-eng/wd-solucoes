import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { projects } from '../lib/projects.js';

const escapeXml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]);

function wrapTitle(title, maxLength = 24) {
  const lines = [];
  for (const word of title.split(' ')) {
    const current = lines.at(-1);
    if (!current || `${current} ${word}`.length > maxLength) lines.push(word);
    else lines[lines.length - 1] = `${current} ${word}`;
  }
  return lines.slice(0, 3);
}

function socialSvg({ eyebrow, title, accent = '#82b8ff' }) {
  const lines = wrapTitle(title);
  const lineMarkup = lines.map((line, index) => `<text x="82" y="${260 + index * 78}" fill="#f2efe8" font-family="Arial, sans-serif" font-size="68" font-weight="700" letter-spacing="-3">${escapeXml(line)}</text>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs><radialGradient id="glow" cx="78%" cy="20%" r="70%"><stop offset="0" stop-color="${accent}" stop-opacity=".30"/><stop offset="1" stop-color="#080b10" stop-opacity="0"/></radialGradient></defs>
    <rect width="1200" height="630" fill="#080b10"/><rect width="1200" height="630" fill="url(#glow)"/>
    <path d="M0 112H1200M0 518H1200" stroke="#f2efe8" stroke-opacity=".12"/>
    <text x="82" y="82" fill="${accent}" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="4">${escapeXml(eyebrow.toUpperCase())}</text>
    ${lineMarkup}
    <text x="82" y="565" fill="#a6b0bf" font-family="Arial, sans-serif" font-size="22">Engenharia digital para negócios reais</text>
    <text x="1062" y="568" fill="#f2efe8" font-family="Arial, sans-serif" font-size="34" font-weight="800" text-anchor="end">W<tspan fill="#82b8ff">&amp;</tspan>D</text>
  </svg>`;
}

function iconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512"><rect width="512" height="512" rx="92" fill="#080b10"/><circle cx="405" cy="104" r="130" fill="#82b8ff" opacity=".16"/><text x="256" y="305" fill="#f2efe8" font-family="Arial, sans-serif" font-size="176" font-weight="800" text-anchor="middle" letter-spacing="-18">W<tspan fill="#82b8ff">&amp;</tspan>D</text></svg>`;
}

await mkdir('public/icons', { recursive: true });
await mkdir('public/og', { recursive: true });

await sharp(Buffer.from(socialSvg({ eyebrow: 'W&D Soluções Integradas', title: 'Engenharia digital para negócios reais' }))).png().toFile('app/opengraph-image.png');
await sharp(Buffer.from(iconSvg(512))).png().resize(512, 512).toFile('app/icon.png');
await sharp(Buffer.from(iconSvg(180))).png().resize(180, 180).toFile('app/apple-icon.png');
await sharp(Buffer.from(iconSvg(192))).png().resize(192, 192).toFile('public/icons/icon-192.png');
await sharp(Buffer.from(iconSvg(512))).png().resize(512, 512).toFile('public/icons/icon-512.png');

const faviconPng = await sharp(Buffer.from(iconSvg(32))).png().resize(32, 32).toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader.writeUInt8(32, 6);
icoHeader.writeUInt8(32, 7);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(faviconPng.length, 14);
icoHeader.writeUInt32LE(22, 18);
await writeFile('app/favicon.ico', Buffer.concat([icoHeader, faviconPng]));

const accentColors = { lime: '#82b8ff', gold: '#c5a46d', copper: '#8da2bf', rose: '#c391aa', sky: '#82b8ff' };
await Promise.all(projects.map((project) => sharp(Buffer.from(socialSvg({ eyebrow: `Case · ${project.type}`, title: project.title, accent: accentColors[project.accent] }))).png().toFile(`public/og/case-${project.slug}.png`)));

console.log(`Generated brand assets and ${projects.length} case social images.`);
