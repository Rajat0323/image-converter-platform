import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "JPG to WEBP Converter Online – Reduce Image Size",
  description:
    "Convert JPG to WEBP online for free. Compress JPEG images without losing quality. Best tool for website optimization.",
};

export default function JpgToWebpPage() {
  return (
    <ImageUpload
      title="JPG to WEBP Converter"
      apiEndpoint="/api/jpg-to-webp"
      accept="image/jpeg"
      outputFileName="converted.webp"
    />
  );
}
