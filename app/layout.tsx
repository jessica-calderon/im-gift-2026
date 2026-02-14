import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " Happy Valentine's Day 2026",
  description: "A gift for Jordan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
