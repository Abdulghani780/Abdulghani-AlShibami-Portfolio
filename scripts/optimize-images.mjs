#!/usr/bin/env node
/**
 * Image Optimization Script for Portfolio
 * Uses Sharp to optimize images to WebP/AVIF with multiple sizes
 */

import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const IMAGES_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/optimized';

const SIZES = {
  hero: [1920, 1200, 800, 400],
  project: [800, 600, 400, 300],
  avatar: [400, 300, 200, 100],
  og: [1200, 800, 600],
};

const FORMATS = [
  { format: 'webp', options: { quality: 80, effort: 6 } },
  { format: 'avif', options: { quality: 50, effort: 9 } },
];

function findImages(dir, fileList = []) {
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      findImages(fullPath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

async function optimizeImage(inputPath, relPath) {
  const ext = path.extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    console.log(`Skipping ${relPath} (unsupported format)`);
    return;
  }

  const dirName = path.dirname(relPath);
  const baseName = path.basename(relPath, ext);
  const outputDir = path.join(OUTPUT_DIR, dirName);
  mkdirSync(outputDir, { recursive: true });

  // Determine size category
  let sizes = SIZES.project;
  if (relPath.includes('hero') || relPath.includes('og-cover')) sizes = SIZES.hero;
  if (relPath.includes('profile') || relPath.includes('avatar')) sizes = SIZES.avatar;
  if (relPath.includes('og-')) sizes = SIZES.og;

  console.log(`Processing: ${relPath} → ${sizes.join(', ')}px`);

  for (const size of sizes) {
    for (const { format, options } of FORMATS) {
      const outputPath = path.join(outputDir, `${baseName}-${size}w.${format}`);
      try {
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true, fit: 'inside' })
          .toFormat(format, options)
          .toFile(outputPath);
        console.log(`  ✓ ${size}w.${format}`);
      } catch (err) {
        console.error(`  ✗ ${size}w.${format}: ${err.message}`);
      }
    }
  }
}

async function main() {
  const files = findImages(IMAGES_DIR);
  console.log(`Found ${files.length} images to optimize\n`);

  for (const file of files) {
    const relPath = path.relative(IMAGES_DIR, file);
    await optimizeImage(file, relPath);
  }

  console.log('\n✅ Image optimization complete!');
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

main().catch(console.error);