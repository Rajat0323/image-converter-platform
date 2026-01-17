import sharp from "sharp";

/**
 * Convert image buffer to target format
 * @param inputBuffer - uploaded image buffer
 * @param outputFormat - jpeg | png | webp
 */
export async function convertImage(
  inputBuffer: Buffer,
  outputFormat: "jpeg" | "png" | "webp"
): Promise<Buffer> {
  try {
    return await sharp(inputBuffer)
      .toFormat(outputFormat)
      .toBuffer();
  } catch (error) {
    console.error("Image conversion failed:", error);
    throw new Error("Image conversion failed");
  }
}
