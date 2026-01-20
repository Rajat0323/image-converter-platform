import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";
import Script from "next/script";

/* =========================
   Metadata (SEO + Favicon)
   ========================= */
export const metadata: Metadata = {
  title: "Image Converter Platform",
  description: "Convert PNG, JPG, WEBP images online for free",
  icons: {
    icon: "/favicon.ico",
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
      <head>
        {/* =========================
            Google Analytics 4
           ========================= */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              debug_mode: true,
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          {/* NAVBAR */}
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
