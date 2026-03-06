# QR Forge — Build Task

## Overview
Build a free online QR code generator website called **QR Forge**.
Single-page app (homepage = tool page) with a clean, minimal design.

## Tech Stack
- Next.js 14+ (App Router) with TypeScript
- Tailwind CSS
- Client-side QR generation via `qrcode` npm package (for real-time preview)
- Next.js API route `/api/qr` that proxies to Agent Toolbox API as a fallback/server option

## Pages
1. **Homepage `/`** — Hero section + QR generator tool + FAQ + About section (all on one page)
2. **Blog placeholder `/blog`** — Simple "Coming Soon" page with layout

## QR Generator Features (Free)
- Input field: URL or text (required)
- Real-time QR code preview as user types (debounced ~300ms)
- Color customization: foreground color picker (default #000000), background color picker (default #ffffff)
- Size slider: 100px to 1000px (default 300)
- Margin slider: 0 to 20 (default 4)
- Format toggle: PNG / SVG
- Download button (downloads the generated QR code)
- No registration required

## QR Generator Features (Premium — UI only, not functional yet)
- Batch generation section with a "Coming Soon / Upgrade to Pro" badge
- Just the UI teaser, no actual paywall implementation

## API Route `/api/qr`
- POST endpoint
- Request body: `{ text, format?, width?, margin?, darkColor?, lightColor? }`
- Proxies to `https://api.sendtoclaw.com/v1/qr` with Bearer token from env var `TOOLBOX_API_KEY`
- Fallback: if API unreachable, generate QR server-side using the `qrcode` npm package
- Response: JSON with base64-encoded image data or SVG string

## Client-Side QR Generation
- Use `qrcode` npm package directly in the browser for instant preview
- This is the PRIMARY generation method (no API call needed for basic usage)
- The API route exists as an alternative/server-side option

## Design
- **Mobile-first**, fully responsive
- Clean, minimal, modern design
- Color scheme: Dark purple/indigo primary (#6366f1), white background, subtle grays
- Hero section: bold headline "Free QR Code Generator", subtitle, and the tool right there
- Tool section: left side = input controls, right side = QR preview (stacked on mobile)
- FAQ section: 6-8 common questions about QR codes (accordion style)
- Footer: minimal with links

## SEO Requirements
- Title: "Free QR Code Generator Online | QR Forge"
- Meta description targeting: "free qr code generator", "qr code generator online", "create qr code free", "qr code maker"
- JSON-LD structured data (WebApplication schema)
- Open Graph tags
- Canonical URL
- Sitemap.xml
- robots.txt

## Performance
- Target Lighthouse Performance > 90
- Minimal JavaScript bundle
- No unnecessary dependencies
- Use Next.js Image optimization where applicable
- Lazy load non-critical sections

## File Structure
```
src/
  app/
    layout.tsx        — Root layout with meta tags, fonts
    page.tsx          — Homepage (hero + QR tool + FAQ + about)
    blog/
      page.tsx        — Blog placeholder
    api/
      qr/
        route.ts      — API endpoint
    sitemap.ts        — Dynamic sitemap
    robots.ts         — Robots.txt
  components/
    QRGenerator.tsx   — Main QR tool component (client component)
    Hero.tsx          — Hero section
    FAQ.tsx           — FAQ accordion
    Footer.tsx        — Footer
    Header.tsx        — Navigation header
```

## Environment Variables
- `TOOLBOX_API_KEY` — Agent Toolbox API key (for the API route)
- `NEXT_PUBLIC_SITE_URL` — Site URL for SEO (default: https://qrforge.dev)

## Commands to Initialize
```bash
cd /home/ubuntu/projects/sites/qr-forge
npx create-next-app@latest . --typescript --tailwind --app --src-dir --use-npm --yes
npm install qrcode @types/qrcode
```

## Important Notes
- Keep it simple. This is an MVP.
- The QR generation should work entirely client-side. The API route is bonus.
- Make sure the download button works for both PNG and SVG formats.
- The page should be usable immediately on load — no splash screens, no modals.
- Use semantic HTML throughout.
- All text in English.
