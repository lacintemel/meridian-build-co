import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
      <body className="min-h-screen">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
