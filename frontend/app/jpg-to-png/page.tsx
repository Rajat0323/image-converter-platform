import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "JPG to PNG Converter Online – Free & Secure",
  description:
    "Convert JPG to PNG online easily. Free JPEG to PNG converter with high quality output. Fast, secure and browser-based.",
  alternates: {
    canonical: "/jpg-to-png",
  },
};

export default function JpgToPngPage() {
  return (
    <>
      <ImageUpload
        title="JPG to PNG Converter"
        apiEndpoint="/api/jpg-to-png"
        accept="image/jpeg"
        outputFileName="converted.png"
      />

      {/* SEO CONTENT */}
      <section className="mt-20 space-y-6 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold text-gray-900">
          JPG to PNG Converter Online
        </h2>
        <p>
          This JPG to PNG converter helps you convert JPEG images into PNG format
          instantly. PNG images support lossless quality and transparency, making
          them ideal for design and editing purposes.
        </p>
        <h3 className="text-xl font-semibold text-gray-900">
          Why convert JPG to PNG?
        </h3>
        <ul className="list-disc ml-6">
          <li>Lossless image quality</li>
          <li>Supports transparent backgrounds</li>
          <li>Better for editing and graphics</li>
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
                name: "How do I convert JPG to PNG?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Upload your JPG image, click Convert, and download the PNG file instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Is JPG to PNG conversion free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, this JPG to PNG converter is completely free with no signup required.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
