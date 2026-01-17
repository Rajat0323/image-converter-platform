import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "PNG to WEBP Converter – Compress Images Online",
  description:
    "Convert PNG to WEBP online to reduce image size. Free PNG to WEBP converter with high compression and quality.",
};

export default function PngToWebpPage() {
  return (
    <ImageUpload
      title="PNG to WEBP Converter"
      apiEndpoint="/api/png-to-webp"
      accept="image/png"
      outputFileName="converted.webp"
    />
  );
}
