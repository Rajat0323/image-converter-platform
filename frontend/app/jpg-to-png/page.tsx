import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "JPG to PNG Converter Online – Free & Secure",
  description:
    "Convert JPG to PNG online easily. Free JPEG to PNG converter with high quality output. Fast, secure and browser-based.",
};

export default function JpgToPngPage() {
  return (
    <ImageUpload
      title="JPG to PNG Converter"
      apiEndpoint="/api/jpg-to-png"
      accept="image/jpeg"
      outputFileName="converted.png"
    />
  );
}
