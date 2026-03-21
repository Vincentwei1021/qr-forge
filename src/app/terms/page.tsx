import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | QR Forge",
  description: "QR Forge terms of service — the rules governing the use of our free QR code generator.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="animate-fade-in px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: March 21, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing and using QR Forge at{" "}
                <strong className="text-foreground">qr.toolboxlite.com</strong>, you agree to be bound by these Terms
                of Service. If you do not agree, please do not use the service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Description of Service</h2>
              <p className="mt-2">
                QR Forge provides a free, browser-based QR code generator. QR codes are generated entirely on your
                device — no data is sent to or stored on our servers during the generation process.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Acceptable Use</h2>
              <p className="mt-2">You agree not to use QR Forge to:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Generate QR codes linking to malicious, illegal, or fraudulent content</li>
                <li>Attempt to disrupt or overload the service</li>
                <li>Scrape, crawl, or automate access to the service in a way that degrades performance for others</li>
                <li>Violate any applicable local, state, national, or international law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Intellectual Property</h2>
              <p className="mt-2">
                The QR codes you generate are yours. The QR Forge website design, branding, and code are owned by us
                and protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Disclaimer of Warranties</h2>
              <p className="mt-2">
                QR Forge is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                either express or implied. We do not guarantee that the service will be uninterrupted, error-free, or
                that generated QR codes will be scannable in all conditions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-2">
                To the fullest extent permitted by law, QR Forge and its operators shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Changes to Terms</h2>
              <p className="mt-2">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                posting. Continued use of the service constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                For questions about these Terms, please use the feedback widget on our website.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
