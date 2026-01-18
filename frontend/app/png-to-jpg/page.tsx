import type { Metadata } from "next";
import PngToJpgClient from "./PngToJpgClient";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Free Online PNG to JPG Tool",
  description:
    "Convert PNG to JPG online for free. High-quality PNG to JPG converter with instant download. No signup, no watermark, secure & fast.",
  keywords: [
    "png to jpg",
    "png to jpg converter",
    "convert png to jpg online",
    "free png to jpg",
    "png to jpeg",
    "image format converter",
  ],
  alternates: {
    canonical: "https://imageformatconverter.in/png-to-jpg",
  },
  openGraph: {
    title: "PNG to JPG Converter – Free Online Tool",
    description:
      "Convert PNG images to JPG instantly. Secure, fast and free PNG to JPG converter.",
    url: "https://imageformatconverter.in/png-to-jpg",
    siteName: "ImageFormatConverter",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="container">
      {/* TOOL UI */}
      <PngToJpgClient />

      {/* SEO CONTENT */}
      <section className="mt-20 space-y-6 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold text-gray-900">
          PNG to JPG Converter Online
        </h2>

        <p>
          Our PNG to JPG converter allows you to convert PNG images into JPG
          format instantly. PNG images are usually larger in size because they
          store lossless data and support transparency. JPG images use smart
          compression to reduce file size while maintaining excellent visual
          quality.
        </p>

        <p>
          By converting PNG to JPG, you can significantly reduce image size,
          improve website loading speed, and ensure better compatibility across
          devices, browsers, and platforms.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Why convert PNG to JPG?
        </h3>
        <ul className="list-disc ml-6">
          <li>Smaller image file size</li>
          <li>Faster website loading</li>
          <li>Better device and browser support</li>
          <li>Ideal for photos and web images</li>
          <li>No quality loss for most use cases</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">
          How to convert PNG to JPG online
        </h3>
        <ol className="list-decimal ml-6">
          <li>Upload your PNG image</li>
          <li>Click the “Convert to JPG” button</li>
          <li>Download your converted JPG image instantly</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-900">
          PNG vs JPG comparison
        </h3>
        <p>
          PNG offers lossless quality and transparency but results in larger
          file sizes. JPG provides smaller file sizes with excellent visual
          quality, making it ideal for web usage, photos, and faster loading
          times.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          <p>
            <strong>Is PNG to JPG conversion free?</strong><br />
            Yes, our PNG to JPG converter is completely free with no limits.
          </p>

          <p>
            <strong>Is my image secure?</strong><br />
            Yes. Files are processed securely and never stored on our servers.
          </p>

          <p>
            <strong>Will image quality be reduced?</strong><br />
            JPG compression is optimized to preserve visual quality while
            reducing file size.
          </p>

          <p>
            <strong>Can I use this tool on mobile?</strong><br />
            Yes, the PNG to JPG converter works perfectly on mobile devices.
          </p>
        </div>
      </section>

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I convert PNG to JPG?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Upload your PNG image, click Convert to JPG, and download the converted image instantly.",
                },
              },
              {
                "@type": "Question",
                "name": "Is PNG to JPG conversion free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, this PNG to JPG converter is 100% free with no signup required.",
                },
              },
              {
                "@type": "Question",
                "name": "Are my files safe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Yes, all files are processed securely and deleted automatically.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
