#!/usr/bin/env node
/**
 * build-manifest.js
 *
 * Scans the /media folder for image files and writes /media/manifest.json
 * with a sorted list of filenames. Run automatically by GitHub Actions
 * whenever you push changes to the media folder.
 *
 * Run locally: node scripts/build-manifest.js
 */

const fs = require('fs');
const path = require('path');

const MEDIA_DIR = path.join(__dirname, '..', 'media');
const OUTPUT = path.join(MEDIA_DIR, 'manifest.json');
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

if (!fs.existsSync(MEDIA_DIR)) {
  console.error('media/ folder not found at', MEDIA_DIR);
  process.exit(1);
}

const files = fs.readdirSync(MEDIA_DIR)
  .filter(function (name) {
    if (name.startsWith('.')) return false;            // skip dotfiles
    if (name === 'manifest.json') return false;        // skip the manifest itself
    const ext = path.extname(name).toLowerCase();
    return ALLOWED.has(ext);
  })
  .sort(function (a, b) {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  });

fs.writeFileSync(OUTPUT, JSON.stringify(files, null, 2) + '\n');

console.log('Wrote ' + files.length + ' image(s) to media/manifest.json');
files.forEach(function (f) { console.log('  - ' + f); });
