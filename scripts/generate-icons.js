const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputFile = path.join(__dirname, '../src/images/logo.png');
const outputDir = path.join(__dirname, '../static/icons');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Sizes needed for PWA
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

async function generateIcons() {
  try {
    for (const size of sizes) {
      const outputFile = path.join(outputDir, `icon-${size}x${size}.png`);
      await sharp(inputFile).resize(size, size).toFile(outputFile);
      // Output file generated
    }
    // Icons generated successfully
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
