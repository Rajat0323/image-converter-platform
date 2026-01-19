import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "JPG to WEBP Converter – Free Online JPG to WEBP Tool",
  description:
    "Convert JPG to WEBP online for free. Reduce image size with high quality output. Secure, fast and works on all devices.",
  alternates: {
    canonical: "https://imageformatconverter.in/jpg-to-webp",
  },
  openGraph: {
    title: "JPG to WEBP Converter – Free Online Tool",
    description:
      "Convert JPG images to WEBP format instantly with our free online converter.",
    url: "https://imageformatconverter.in/jpg-to-webp",
    siteName: "ImageFormatConverter",
    type: "website",
  },
};

export default function Page() {
  return (
    <ImageUpload
      title="JPG to WEBP Converter"
      apiEndpoint="/api/jpg-to-webp"
      accept="image/jpeg"
      outputFileName="converted.webp"
    />
  );
}
