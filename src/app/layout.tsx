import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qr-forge.vercel.app";

export const metadata: Metadata = {
  title: "Free QR Code Generator Online | QR Forge",
  description:
    "Create custom QR codes instantly — free, no sign-up. Choose colors, sizes, and download as PNG or SVG. The fastest free QR code generator online.",
  keywords: [
    "free qr code generator",
    "qr code generator online",
    "create qr code free",
    "qr code maker",
    "qr code creator",
    "custom qr code",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free QR Code Generator Online | QR Forge",
    description:
      "Create custom QR codes instantly — free, no sign-up. Choose colors, sizes, and download as PNG or SVG.",
    url: siteUrl,
    siteName: "QR Forge",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator Online | QR Forge",
    description:
      "Create custom QR codes instantly — free, no sign-up. Choose colors, sizes, and download as PNG or SVG.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
