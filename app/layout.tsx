import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rigas Neofotistos",
  description: "Primary education, STEM, robotics, and science education."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
