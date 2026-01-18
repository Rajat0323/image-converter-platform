import "./globals.css";
import Analytics from "@/components/Analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
