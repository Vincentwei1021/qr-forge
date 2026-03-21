import { Type, Palette, Download } from "lucide-react";

export default function HowTo() {
  const steps = [
    {
      icon: Type,
      title: "Enter Your Content",
      desc: "Type or paste any URL, text, email address, phone number, or Wi-Fi credentials into the input field above.",
    },
    {
      icon: Palette,
      title: "Customize Your QR Code",
      desc: "Pick PNG or SVG format, choose custom foreground and background colors, and fine-tune the size and margin with the sliders.",
    },
    {
      icon: Download,
      title: "Download Instantly",
      desc: "Hit the Download button and your QR code is saved to your device. No waiting, no sign-up — it's generated entirely in your browser.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How to Create a QR Code Online — Free &amp; Fast
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Generate a custom QR code in three simple steps with our free QR code maker.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <s.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
