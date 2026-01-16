const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function convertPngToJpg(inputPath) {
  const outputFileName = Date.now() + ".jpg";
  const outputPath = path.join("output", outputFileName);

  await sharp(inputPath).jpeg({ quality: 80 }).toFile(outputPath);

  fs.unlinkSync(inputPath); // delete original PNG

  return outputFileName;
}

module.exports = convertPngToJpg;
