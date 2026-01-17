import "./globals.css";
import Analytics from "@/components/Analytics";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
