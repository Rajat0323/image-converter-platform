export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import PngToJpgClient from "./PngToJpgClient";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – High Quality Online Free Tool",
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
    title: "PNG to JPG Converter – Free & High Quality",
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
      {/* TOOL (NO CHANGE) */}
      <PngToJpgClient />

      {/* SEO CONTENT */}
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
          upload, share, and use on websites.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Why convert PNG to JPG?
        </h3>

        <ul className="list-disc ml-6">
          <li>Reduce image file size without noticeable quality loss</li>
          <li>Improve website loading speed</li>
          <li>Better compatibility across devices and browsers</li>
          <li>Perfect for social media and email sharing</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">
          Why use ImageFormatConverter?
        </h3>

        <ul className="list-disc ml-6">
          <li>100% free PNG to JPG conversion</li>
          <li>No signup or watermark</li>
          <li>High-quality JPG output</li>
          <li>Fast and secure online processing</li>
        </ul>
      </section>

      {/* FAQ SCHEMA (IMPORTANT FOR GOOGLE TRUST) */}
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
                    "Upload your PNG image, click the Convert button, and download the JPG image instantly.",
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
                    "Our converter maintains high image quality while reducing file size for better performance.",
                },
              },
              {
                "@type": "Question",
                name: "Are my images safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, all image processing happens securely and files are not stored on our servers.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
