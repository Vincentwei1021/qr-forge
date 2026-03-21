import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | QR Forge",
  description: "QR Forge privacy policy — how we handle your data when you use our free QR code generator.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="animate-fade-in px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: March 21, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-foreground">Overview</h2>
              <p className="mt-2">
                QR Forge (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website{" "}
                <strong className="text-foreground">qr.toolboxlite.com</strong>. This Privacy Policy explains how we
                collect, use, and protect information when you use our free QR code generator service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Data We Collect</h2>
              <p className="mt-2">
                <strong className="text-foreground">QR Code Generation:</strong> All QR codes are generated entirely in
                your browser. We do not see, store, or transmit the data you encode into QR codes.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Feedback:</strong> If you voluntarily submit feedback through our
                feedback widget, we collect the message content and, optionally, your email address. This data is used
                solely to improve our service.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Analytics &amp; Advertising:</strong> We use Google AdSense, which
                may use cookies and similar technologies to serve personalized ads. Google&apos;s use of advertising
                cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on
                the Internet. You may opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" className="text-foreground underline underline-offset-4 hover:text-foreground/80" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
              <p className="mt-2">
                We use essential cookies to remember your theme preference (light/dark mode). Third-party services
                like Google AdSense may set additional cookies for advertising purposes. You can control cookie
                settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Third-Party Services</h2>
              <p className="mt-2">
                We use the following third-party services:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">Google AdSense</strong> — for serving advertisements</li>
                <li><strong className="text-foreground">Vercel</strong> — for hosting and deployment</li>
              </ul>
              <p className="mt-2">
                Each of these services has its own privacy policy governing the data they collect.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Data Security</h2>
              <p className="mt-2">
                We take reasonable measures to protect any information collected. Since QR code generation happens
                entirely client-side, your encoded data is never transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Children&apos;s Privacy</h2>
              <p className="mt-2">
                Our service is not directed to children under 13. We do not knowingly collect personal information
                from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Changes to This Policy</h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                If you have questions about this Privacy Policy, please use the feedback widget on our website.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
