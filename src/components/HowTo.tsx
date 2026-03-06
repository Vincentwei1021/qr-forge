export default function HowTo() {
  const steps = [
    {
      num: "1",
      title: "Enter Your Content",
      desc: "Type or paste any URL, text, email address, phone number, or Wi-Fi credentials into the input field above.",
    },
    {
      num: "2",
      title: "Customize Your QR Code",
      desc: "Pick PNG or SVG format, choose custom foreground and background colors, and fine-tune the size and margin with the sliders.",
    },
    {
      num: "3",
      title: "Download Instantly",
      desc: "Hit the Download button and your QR code is saved to your device. No waiting, no sign-up — it's generated entirely in your browser.",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900">
          How to Create a QR Code Online — Free &amp; Fast
        </h2>
        <p className="mb-10 text-center text-gray-500">
          Generate a custom QR code in three simple steps with our free QR code maker.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
                {s.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
