import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';

const output = '.next-build';
for (const required of ['index.html', '.htaccess', 'favicon.ico', 'opengraph-image.png', 'manifest.webmanifest', 'sitemap.xml', 'robots.txt']) {
  assert.ok(existsSync(join(output, required)), `Missing exported file: ${required}`);
}

const htmlFiles = readdirSync(output, { recursive: true })
  .filter((file) => typeof file === 'string' && file.endsWith('.html'));
const broken = [];

function localTargetExists(rawTarget) {
  const target = rawTarget.replace(/&amp;/g, '&').split(/[?#]/)[0];
  if (!target || !target.startsWith('/') || target.startsWith('//')) return true;
  const relative = decodeURIComponent(target.slice(1));
  if (!relative) return existsSync(join(output, 'index.html'));
  if (extname(relative)) return existsSync(join(output, relative));
  return existsSync(join(output, relative, 'index.html')) || existsSync(join(output, `${relative}.html`));
}

for (const file of htmlFiles) {
  const html = readFileSync(join(output, file), 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!localTargetExists(match[1])) broken.push(`${file}: ${match[1]}`);
  }
}

assert.deepEqual(broken, [], `Broken local references:\n${broken.join('\n')}`);
console.log(`Validated ${htmlFiles.length} exported HTML files and their local references.`);
