import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "QR Code Best Practices: Size, Contrast, and Testing Guide | QR Forge",
  description: "Learn the essential best practices for creating QR codes that actually scan — covering minimum size, contrast ratios, error correction, and testing before you print.",
  keywords: ["qr code best practices", "qr code size", "qr code design", "qr code generator online", "free qr code maker"],
  alternates: { canonical: "/blog/qr-code-best-practices" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "QR Code Best Practices: Size, Contrast, and Testing Guide",
  description: "Learn the essential best practices for creating QR codes that actually scan — covering minimum size, contrast ratios, error correction, and testing before you print.",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  author: { "@type": "Organization", name: "QR Forge" },
  publisher: { "@type": "Organization", name: "QR Forge" },
};

export default function QrCodeBestPractices() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="animate-fade-in px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-brand hover:underline">&larr; Back to Blog</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            QR Code Best Practices: Size, Contrast, and Testing Guide
          </h1>
          <time className="text-sm text-muted-foreground">March 8, 2026</time>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Creating a QR code takes seconds. Creating one that reliably scans in real-world conditions — printed on packaging, displayed on a screen, slightly crinkled on a flyer — takes a bit more thought. These best practices will help you avoid the most common mistakes before you commit to a print run.
            </p>

            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Minimum Size Requirements</h2>
            <p>
              The most common reason QR codes fail to scan is that they&apos;re printed too small. As a rule of thumb, your QR code should be at least <strong className="text-foreground">2 cm × 2 cm (about 0.8 × 0.8 inches)</strong> for a scan distance of roughly 20 cm (arm&apos;s length). For larger scan distances — like a poster or storefront sign — scale proportionally.
            </p>
            <p>
              A practical formula: <strong className="text-foreground">minimum size = scan distance ÷ 10</strong>. For a sign scanned from 1 meter away, your QR code should be at least 10 cm × 10 cm.
            </p>
            <p>
              When printing, always download your QR code as an SVG file from <Link href="/" className="font-medium text-brand underline underline-offset-4 hover:text-brand/80">QR Forge</Link>. SVG is vector-based, so it scales to any size without the pixelation that ruins small PNG prints.
            </p>

            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Contrast Is Non-Negotiable</h2>
            <p>
              QR codes rely on the scanner distinguishing dark modules (squares) from a light background. The higher the contrast, the faster and more reliable the scan. The standard is <strong className="text-foreground">dark modules on a white or very light background</strong>.
            </p>
            <p>
              Avoid these common mistakes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Light-on-dark:</strong> White code on a dark background can work, but requires testing. Many scanners struggle with inverted QR codes.</li>
              <li><strong className="text-foreground">Low contrast colors:</strong> Yellow on white, light gray on white, or dark blue on black — all problematic. Aim for at least 4:1 contrast ratio.</li>
              <li><strong className="text-foreground">Busy backgrounds:</strong> Placing a QR code over a photograph or complex pattern dramatically reduces scan reliability.</li>
            </ul>
            <p>
              QR Forge lets you set custom foreground and background colors. Use this to match your brand while maintaining sufficient contrast.
            </p>

            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Error Correction Levels</h2>
            <p>
              QR codes have built-in error correction that lets them scan even when partially damaged or obscured. There are four levels:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Level L (7%):</strong> Lowest redundancy, smallest code. Use for clean digital displays.</li>
              <li><strong className="text-foreground">Level M (15%):</strong> Good balance for most uses.</li>
              <li><strong className="text-foreground">Level Q (25%):</strong> Better for environments where codes might get scuffed or wet.</li>
              <li><strong className="text-foreground">Level H (30%):</strong> Maximum redundancy. Use if you want to add a logo in the center of your QR code — the logo can cover up to 30% of the code and it still scans.</li>
            </ul>
            <p>
              For most business uses, Level M or Q is the right choice. Level H is worth it if you&apos;re adding a brand logo inside the QR code.
            </p>

            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Always Include a Quiet Zone</h2>
            <p>
              The &quot;quiet zone&quot; is the white border surrounding a QR code. It&apos;s not decorative — scanners use it to detect where the code begins and ends. The standard quiet zone is 4 modules wide (4 times the width of one small square in the code).
            </p>
            <p>
              When placing your QR code in a design, ensure there&apos;s adequate white space around it. Butting the code right up against text or a dark border frequently causes scan failures.
            </p>

            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Test Before You Print</h2>
            <p>
              This sounds obvious, but it&apos;s the step most people skip — and the most important one. Before committing to any print run, test your QR code with:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>The native iPhone camera app</li>
              <li>The native Android camera app</li>
              <li>At least one dedicated QR scanner app</li>
              <li>A printed copy at the actual output size (not just on screen)</li>
            </ul>
            <p>
              Test under realistic lighting conditions — not just at your desk under ideal light. A QR code in a restaurant or retail environment will be scanned in varying light, sometimes with glare.
            </p>

            <h2 className="text-xl font-bold text-foreground sm:text-2xl">Keep the Destination URL Short</h2>
            <p>
              The more data encoded in a QR code, the denser and more complex it becomes — making it harder to scan, especially when printed small. Keep your destination URLs as short as possible. If your URL is long, consider using a URL shortener before generating the QR code.
            </p>

            <Card className="bg-muted/50">
              <CardContent className="p-5">
                <p className="font-semibold text-foreground">Create your QR code the right way</p>
                <p className="mt-1 text-muted-foreground">
                  <Link href="/" className="font-medium underline underline-offset-4 hover:text-brand">QR Forge</Link> generates free custom QR codes with PNG and SVG download options. No sign-up required.
                </p>
              </CardContent>
            </Card>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
