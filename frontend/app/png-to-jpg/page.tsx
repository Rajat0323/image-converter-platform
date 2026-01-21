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
    canonical: "/png-to-jpg",
  },
  openGraph: {
    title: "PNG to JPG Converter – Free Online Tool",
    description:
      "Convert PNG images to JPG instantly. Secure, fast and free PNG to JPG converter.",
    url: "https://www.imageformatconverter.in/png-to-jpg",
    siteName: "ImageFormatConverter",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="container">
      <PngToJpgClient />

      {/* SEO CONTENT */}
      <section className="mt-20 space-y-6 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold text-gray-900">
          PNG to JPG Converter Online
        </h2>

        <p>
          Our PNG to JPG converter allows you to convert PNG images into JPG
          format instantly. PNG images are usually larger in size because they
          store lossless data and support transparency.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Why convert PNG to JPG?
        </h3>
        <ul className="list-disc ml-6">
          <li>Smaller image file size</li>
          <li>Faster website loading</li>
          <li>Better device and browser support</li>
        </ul>
      </section>

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I convert PNG to JPG?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Upload your PNG image, click Convert to JPG, and download the converted image instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Is PNG to JPG conversion free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, this PNG to JPG converter is 100% free with no signup required.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
