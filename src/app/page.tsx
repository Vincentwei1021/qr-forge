import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QRGenerator from "@/components/QRGenerator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QRGenerator />
        <FAQ />
        {/* About */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About QR Forge</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              QR Forge is a free, privacy-first QR code generator built for speed. No sign-ups, no
              tracking, no limits. Your QR codes are generated entirely in your browser — we never
              see your data. Built by developers, for everyone.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "QR Forge",
            url: "https://qr-forge.vercel.app",
            description:
              "Free online QR code generator. Create custom QR codes with colors, sizes, and formats. Download PNG or SVG instantly — no sign-up required.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            browserRequirements: "Requires a modern web browser",
          }),
        }}
      />
    </>
  );
}
