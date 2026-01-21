import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "WEBP to JPG Converter Online – Free Tool",
  description:
    "Convert WEBP to JPG online easily. Free WEBP to JPEG image converter compatible with all devices.",
  alternates: {
    canonical: "/webp-to-jpg",
  },
};

export default function WebpToJpgPage() {
  return (
    <>
      <ImageUpload
        title="WEBP to JPG Converter"
        apiEndpoint="/api/webp-to-jpg"
        accept="image/webp"
        outputFileName="converted.jpg"
      />

      {/* SEO CONTENT */}
      <section className="mt-20 space-y-6 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold text-gray-900">
          WEBP to JPG Converter Online
        </h2>
        <p>
          Some applications do not support WEBP images. Converting WEBP to JPG
          ensures compatibility across all devices and platforms.
        </p>
        <h3 className="text-xl font-semibold text-gray-900">
          When to convert WEBP to JPG?
        </h3>
        <ul className="list-disc ml-6">
          <li>For older device compatibility</li>
          <li>For image editing tools</li>
          <li>For universal sharing</li>
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
                name: "Is WEBP to JPG conversion safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, your images are processed securely without being stored.",
                },
              },
              {
                "@type": "Question",
                name: "Does JPG work on all devices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, JPG is universally supported on all devices and browsers.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
