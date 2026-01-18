import "./globals.css";

export const metadata = {
  title: "Image Format Converter",
  description: "Free online image converter tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
