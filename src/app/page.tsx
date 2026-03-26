import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QRGenerator from "@/components/QRGenerator";
import HowTo from "@/components/HowTo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { headers } from "next/headers";

/* -- FAQ data (shared between component + JSON-LD) -- */
const faqItems = [
  {
    q: "What is a QR code?",
    a: "A QR (Quick Response) code is a two-dimensional barcode that can store URLs, text, contact info, and more. It can be scanned by any smartphone camera to instantly access the encoded information.",
  },
  {
    q: "Is QR Forge completely free?",
    a: "Yes! Our QR code generator is 100% free with no limits on the number of QR codes you can create. No sign-up or account required.",
  },
  {
    q: "What formats can I download?",
    a: "You can download your QR codes in PNG (raster) or SVG (vector) format. SVG is ideal for print materials as it scales to any size without losing quality.",
  },
  {
    q: "Can I customize the colors of my QR code?",
    a: "Absolutely! Use the color pickers to set any foreground and background color. Just make sure there's enough contrast for scanners to read the code reliably.",
  },
  {
    q: "Do QR codes expire?",
    a: "Static QR codes (like the ones we generate) never expire. They encode the data directly, so they'll work forever — as long as the URL they point to is still active.",
  },
  {
    q: "What size should I use for printing?",
    a: "For print, we recommend downloading in SVG format at the largest size. A minimum of 2 × 2 cm (about 0.8 × 0.8 in) is recommended for reliable scanning at arm's length.",
  },
  {
    q: "Is my data stored or tracked?",
    a: "No. QR codes are generated entirely in your browser. We never see, store, or track the data you encode.",
  },
  {
    q: "What content can I encode?",
    a: "You can encode any text: URLs, email addresses, phone numbers, Wi-Fi credentials, plain text, and more. The maximum capacity is around 4,296 alphanumeric characters.",
  },
];

/* -- JSON-LD schemas are generated dynamically in Home() -- */

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host") || "qr.toolboxlite.com";
  const siteUrl =
    host === "toolboxlite.com" || host === "www.toolboxlite.com"
      ? "https://toolboxlite.com"
      : "https://qr.toolboxlite.com";

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "QR Forge",
    url: siteUrl,
    description:
      "Free online QR code generator. Create custom QR codes with colors, sizes, and formats. Download PNG or SVG instantly — no sign-up required.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    browserRequirements: "Requires a modern web browser",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create a Free QR Code Online",
    description: "Follow these simple steps to generate a custom QR code for free using QR Forge.",
    step: [
      { "@type": "HowToStep", name: "Enter your content", text: "Type or paste a URL, text, email address, or any content you want to encode into the input field." },
      { "@type": "HowToStep", name: "Customize your QR code", text: "Choose between PNG or SVG format, pick custom foreground and background colors, and adjust the size and margin." },
      { "@type": "HowToStep", name: "Download your QR code", text: "Click the Download button to save your QR code. It's generated instantly in your browser — no server upload needed." },
    ],
    tool: { "@type": "HowToTool", name: "QR Forge — Free QR Code Generator" },
  };

  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero />
        <QRGenerator />
        <HowTo />
        <FAQ items={faqItems} />

        {/* About */}
        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              About <span className="text-brand">QR Forge</span>
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground text-left sm:text-center">
              <p>
                <strong className="text-foreground">QR Forge</strong> is a <strong className="text-foreground">free QR code generator</strong> built for
                speed and privacy. Whether you need a QR code for a URL, email, Wi-Fi
                credentials, or plain text, our <strong className="text-foreground">online QR code maker</strong> handles it
                all — right in your browser.
              </p>
              <p>
                Unlike other QR code generators that require sign-ups or subscriptions, QR Forge
                is <strong className="text-foreground">100% free with no limits</strong>. Every QR code is generated locally
                on your device, which means your data never leaves your browser. No tracking, no
                server storage, no compromises.
              </p>
              <p>
                Export your QR codes as high-resolution <strong className="text-foreground">PNG</strong> files for digital use
                or <strong className="text-foreground">SVG</strong> vector files for flawless printing at any scale. Customize
                colors, adjust margins, and choose sizes from 100px to 1000px — all with real-time
                preview.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
