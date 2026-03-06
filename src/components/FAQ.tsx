"use client";

import { useState } from "react";

const faqs = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-gray-900 sm:text-base">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-5 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
