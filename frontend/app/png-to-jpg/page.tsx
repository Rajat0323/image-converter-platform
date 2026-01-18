import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Convert PNG to JPG Online Free",
  description:
    "Convert PNG to JPG online for free. Fast, secure PNG to JPG converter with high-quality output. No signup required.",
  alternates: {
    canonical: "/png-to-jpg",
  },
  openGraph: {
    title: "PNG to JPG Converter – Free Online Tool",
    description:
      "Convert PNG images to JPG instantly with our free and secure PNG to JPG converter.",
    url: "/png-to-jpg",
    siteName: "ImageFormatConverter",
    type: "website",
  },
};

export default function PngToJpgPage() {
  return (
    <>
      <ImageUpload
        title="PNG to JPG Converter"
        apiEndpoint="/api/png-to-jpg"
        accept="image/png"
        outputFileName="converted.jpg"
      />

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto mt-16 text-sm text-gray-600">
        <h2 className="text-lg font-semibold mb-2">
          PNG to JPG Converter Online
        </h2>
        <p>
          This PNG to JPG converter helps you convert PNG images into JPG format
          instantly. The tool works directly in your browser, ensuring your
          images remain private and secure. No signup, no watermark, and 100%
          free to use.
        </p>
      </section>
    </>
  );
}
