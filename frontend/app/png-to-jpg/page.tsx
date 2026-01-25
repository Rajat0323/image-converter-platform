export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import PngToJpgClient from "./PngToJpgClient";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – High Quality & Free Online Tool",
  description:
    "Convert PNG to JPG online free with high quality. Fast, secure PNG to JPG converter with instant download. No signup, no watermark.",
  keywords: [
    "png to jpg",
    "png to jpg high quality",
    "png to jpg online free",
    "convert png to jpg",
    "png to jpeg converter",
    "free image converter",
    "image format converter online",
  ],
  alternates: {
    canonical: "https://www.imageformatconverter.in/png-to-jpg",
  },
  openGraph: {
    title: "PNG to JPG Converter – High Quality & Free",
    description:
      "Convert PNG images to JPG instantly with high quality. Free online PNG to JPG converter.",
    url: "https://www.imageformatconverter.in/png-to-jpg",
    siteName: "ImageFormatConverter",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="container mx-auto px-4">
      {/* ================= TOOL (NO CHANGE) ================= */}
      <PngToJpgClient />

      {/* ================= SEO CONTENT ================= */}
      <section className="mt-24 space-y-6 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold text-gray-900">
          PNG to JPG Converter Online – High Quality & Free
        </h2>

        <p>
          ImageFormatConverter provides a fast and reliable PNG to JPG converter
          that helps you convert PNG images into JPG format online for free.
          This tool works directly in your browser, ensuring your files remain
          secure and private.
        </p>

        <p>
          PNG images are often larger in size because they store lossless data
          and support transparency. Converting PNG to JPG helps reduce file size
          while maintaining excellent image quality, making images easier to
          upload, share, and use on websites, blogs, and social media platforms.
        </p>

        <p>
          Our online PNG to JPG converter is designed for speed and simplicity.
          You can convert images instantly without installing any software or
          creating an account. Whether you are a designer, developer, student,
          or casual user, this tool helps you optimize images in seconds.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Why convert PNG to JPG?
        </h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>Reduce image file size without noticeable quality loss</li>
          <li>Improve website loading speed and performance</li>
          <li>Better compatibility across devices and browsers</li>
          <li>Ideal format for emails and social media sharing</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">
          Why use ImageFormatConverter?
        </h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>100% free PNG to JPG conversion</li>
          <li>No signup or watermark</li>
          <li>High-quality JPG output</li>
          <li>Fast and secure browser-based processing</li>
        </ul>
      </section>

      {/* ================= INTERNAL LINKING ================= */}
      <section className="mt-16 text-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Related Image Conversion Tools
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a href="/jpg-to-png" className="text-blue-600 hover:underline">
              JPG to PNG Converter
            </a>{" "}
            – Convert JPG images back to PNG format with lossless quality.
          </li>

          <li>
            <a href="/png-to-webp" className="text-blue-600 hover:underline">
              PNG to WEBP Converter
            </a>{" "}
            – Compress PNG images into modern WEBP format for faster loading.
          </li>

          <li>
            <a href="/jpg-to-webp" className="text-blue-600 hover:underline">
              JPG to WEBP Converter
            </a>{" "}
            – Reduce JPG file size while keeping image clarity.
          </li>

          <li>
            <a href="/webp-to-jpg" className="text-blue-600 hover:underline">
              WEBP to JPG Converter
            </a>{" "}
            – Convert WEBP images to JPG for better compatibility.
          </li>
        </ul>
      </section>

      {/* ================= VISIBLE FAQ ================= */}
      <section className="mt-20 space-y-6 text-gray-700">
        <h3 className="text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h3>

        <div>
          <h4 className="font-semibold">
            How can I convert PNG to JPG online?
          </h4>
          <p>
            Upload your PNG image using the tool above, click the convert button,
            and download the JPG file instantly. No registration is required.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Is this PNG to JPG converter free?
          </h4>
          <p>
            Yes, ImageFormatConverter offers completely free PNG to JPG conversion
            with no signup, no watermark, and no hidden charges.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Will image quality reduce after converting PNG to JPG?
          </h4>
          <p>
            Our converter is optimized to maintain high image quality while
            reducing file size, making it suitable for professional and personal
            use.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Are my images safe and private?
          </h4>
          <p>
            Yes. All image processing happens securely in your browser, and files
            are not stored on our servers.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Can I use this PNG to JPG converter on mobile?
          </h4>
          <p>
            Absolutely. The tool works smoothly on mobile phones, tablets, and
            desktop devices without any limitations.
          </p>
        </div>
      </section>

      {/* ================= FAQ SCHEMA (SEO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How can I convert PNG to JPG online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Upload your PNG image, click the convert button, and download the JPG file instantly.",
                },
              },
              {
                "@type": "Question",
                name: "Is this PNG to JPG converter free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, ImageFormatConverter offers a completely free PNG to JPG conversion with no signup required.",
                },
              },
              {
                "@type": "Question",
                name: "Will image quality reduce after converting PNG to JPG?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The converter maintains high image quality while reducing file size.",
                },
              },
              {
                "@type": "Question",
                name: "Are my images safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, all image processing happens securely in your browser and files are not stored.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
