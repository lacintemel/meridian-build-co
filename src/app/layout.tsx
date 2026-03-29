import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Meridian Build Co. | Architecture & Construction Excellence",
  description:
    "Premium architecture and construction services. Building tomorrow's landmarks with precision, innovation, and uncompromising quality.",
  keywords: [
    "construction",
    "architecture",
    "commercial construction",
    "infrastructure",
    "project management",
    "building",
    "development",
  ],
  openGraph: {
    title: "Meridian Build Co. | Architecture & Construction Excellence",
    description:
      "Premium architecture and construction services. Building tomorrow's landmarks with precision, innovation, and uncompromising quality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-obsidian)] text-[var(--color-platinum)] min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
