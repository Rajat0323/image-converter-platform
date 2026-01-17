import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Image Format Converter – PNG, JPG, WEBP Online Free",
  description:
    "Free online image format converter. Convert PNG to JPG, JPG to PNG, PNG to WEBP, JPG to WEBP and WEBP to JPG instantly. Fast, secure and mobile friendly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Google Analytics */}
        <Analytics />

        {/* App Content */}
        {children}
      </body>
    </html>
  );
}
