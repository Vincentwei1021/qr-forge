import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qr.toolboxlite.com";

export const metadata: Metadata = {
  title: "Free QR Code Generator Online — Create Custom QR Codes | QR Forge",
  description:
    "Create custom QR codes instantly with QR Forge — the free online QR code generator. No sign-up needed. Pick colors, sizes, and download as PNG or SVG. Fast, private, and unlimited.",
  keywords: [
    "free qr code generator",
    "qr code generator online",
    "create qr code free",
    "qr code maker",
    "qr code creator",
    "custom qr code",
    "qr code generator no sign up",
    "png svg qr code",
    "online qr code maker free",
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
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "QR Forge — Free QR Code Generator Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator Online | QR Forge",
    description:
      "Create custom QR codes instantly — free, no sign-up. Choose colors, sizes, and download as PNG or SVG.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#6366f1",
  },
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
