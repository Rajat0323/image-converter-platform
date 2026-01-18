import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";

/* =========================
   Metadata (SEO + Favicon)
   ========================= */
export const metadata: Metadata = {
  title: "Image Converter Platform",
  description: "Convert PNG, JPG, WEBP images online for free",
  icons: {
    icon: "/favicon.ico",          // browser tab icon
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {/* NAVBAR (logo already handled inside Navbar) */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
