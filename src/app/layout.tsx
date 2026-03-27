import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-[var(--color-obsidian)] text-[var(--color-platinum)] min-h-screen">
        {children}
      </body>
    </html>
  );
}
