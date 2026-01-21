import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "PNG to WEBP Converter – Compress Images Online",
  description:
    "Convert PNG to WEBP online to reduce image size. Free PNG to WEBP converter with high compression and quality.",
  alternates: {
    canonical: "/png-to-webp",
  },
};

export default function PngToWebpPage() {
  return (
    <>
      <ImageUpload
        title="PNG to WEBP Converter"
        apiEndpoint="/api/png-to-webp"
        accept="image/png"
        outputFileName="converted.webp"
      />

      {/* SEO CONTENT */}
      <section className="mt-20 space-y-6 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold text-gray-900">
          PNG to WEBP Converter Online
        </h2>
        <p>
          PNG images are often large in size. Converting PNG to WEBP helps reduce
          file size without noticeable quality loss, making images ideal for web
          usage.
        </p>
        <h3 className="text-xl font-semibold text-gray-900">
          Why use WEBP format?
        </h3>
        <ul className="list-disc ml-6">
          <li>High compression efficiency</li>
          <li>Faster website performance</li>
          <li>Modern browser support</li>
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
                name: "Does WEBP reduce image quality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "WEBP maintains high image quality while reducing file size.",
                },
              },
              {
                "@type": "Question",
                name: "Is PNG to WEBP conversion free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, this PNG to WEBP converter is 100% free to use.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
