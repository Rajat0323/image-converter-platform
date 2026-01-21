import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "JPG to WEBP Converter – Free Online JPG to WEBP Tool",
  description:
    "Convert JPG to WEBP online for free. Reduce image size with high quality output. Secure, fast and works on all devices.",
  alternates: {
    canonical: "/jpg-to-webp",
  },
};

export default function Page() {
  return (
    <>
      <ImageUpload
        title="JPG to WEBP Converter"
        apiEndpoint="/api/jpg-to-webp"
        accept="image/jpeg"
        outputFileName="converted.webp"
      />

      {/* SEO CONTENT */}
      <section className="mt-20 space-y-6 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold text-gray-900">
          JPG to WEBP Converter Online
        </h2>
        <p>
          Convert JPG images to WEBP format to significantly reduce file size
          while maintaining excellent image quality. WEBP images load faster and
          improve website performance.
        </p>
        <h3 className="text-xl font-semibold text-gray-900">
          Benefits of JPG to WEBP
        </h3>
        <ul className="list-disc ml-6">
          <li>Smaller image size</li>
          <li>Faster page load speed</li>
          <li>Modern image format support</li>
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
                name: "Why convert JPG to WEBP?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "WEBP images are smaller and load faster than JPG images, improving performance.",
                },
              },
              {
                "@type": "Question",
                name: "Is JPG to WEBP safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, all conversions happen securely in your browser.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
