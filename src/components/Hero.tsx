export default function Hero() {
  return (
    <section className="px-4 pb-8 pt-16 text-center sm:px-6 sm:pb-12 sm:pt-24">
      <div className="mx-auto max-w-2xl">
        <div className="animate-fade-up mb-4 inline-flex items-center rounded-full border border-brand/20 bg-brand-muted px-3 py-1 text-xs font-medium text-brand">
          ✦ 100% Free &amp; Private — No Sign-up
        </div>
        <h1 className="animate-fade-up-1 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Free <span className="text-brand">QR Code</span> Generator
        </h1>
        <p className="animate-fade-up-2 mt-4 text-lg text-muted-foreground sm:text-xl">
          Create custom QR codes instantly. Choose colors, size, and format,
          then download as PNG or SVG. The fastest free QR code maker on the web.
        </p>
        <div className="animate-fade-up-3 mt-6">
          <a
            href="#generator"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground shadow-sm transition-all hover:brightness-110 active:scale-[0.97]"
          >
            Start Creating
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
