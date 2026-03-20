# TASK: Full Design Upgrade — Professional UI with shadcn/ui

## Objective
Completely redesign QR Forge from a "toy-looking template site" to a **professional, modern tool** using shadcn/ui components. Think Vercel/Linear design language — clean, refined, confident.

## ⚠️ CRITICAL: Preserve All Existing Functionality
- QR code generation (client-side with `qrcode` package) — all options: text, format toggle, colors, size slider, margin slider, download
- API routes: `/api/qr/route.ts` and `/api/feedback/route.ts` — DO NOT MODIFY
- Blog pages: `/blog`, `/blog/qr-code-best-practices`, `/blog/qr-codes-for-business` — update styling but keep ALL content and SEO meta
- FeedbackWidget — redesign but keep same functionality and API call
- AdSense script in layout.tsx `<head>` — KEEP AS-IS
- ALL SEO metadata, JSON-LD structured data, sitemap.ts, robots.ts — KEEP AS-IS
- `og-image.png` in public/ — keep

## Step 1: Install Dependencies

```bash
# Install shadcn/ui (use default settings, New York style)
npx shadcn@latest init --defaults

# Install components we need
npx shadcn@latest add button card input label slider tabs separator badge tooltip

# Install next-themes for dark mode
npm install next-themes

# Install lucide-react for icons (should come with shadcn)
npm install lucide-react

# Install sonner for toast notifications
npx shadcn@latest add sonner
```

If shadcn init asks questions:
- Style: New York
- Base color: Neutral
- CSS variables: Yes

## Step 2: Design System

### Color Palette
Use a **neutral-first palette** with a single accent color. NOT indigo/purple. Use a sophisticated muted blue or keep it entirely neutral (Vercel-style).

Light mode:
- Background: white (#ffffff)
- Foreground: near-black (#09090b)
- Muted backgrounds: #f4f4f5
- Borders: #e4e4e7
- Accent/Primary: neutral dark (#18181b) for buttons, or a subtle blue (#2563eb) for links only

Dark mode:
- Background: #09090b
- Foreground: #fafafa
- Muted: #27272a
- Borders: #27272a
- Cards: #0a0a0a with subtle border

### Typography
- Font: Inter (already loaded via next/font/google) — use for everything
- Headings: font-semibold or font-bold, tracking-tight
- Body: text-sm or text-base, text-muted-foreground
- NO gradient text, NO emoji animations, NO playful elements

### Spacing & Layout
- Max content width: max-w-4xl for content, max-w-6xl for full-width sections
- Generous padding: py-16 to py-24 for sections
- Clean grid layouts with proper gaps

## Step 3: Component Redesign

### Layout (`layout.tsx`)
- Wrap children with `ThemeProvider` from next-themes (attribute="class", defaultTheme="system", enableSystem)
- Add `<Toaster />` from sonner
- Keep AdSense script exactly as-is
- Keep FeedbackWidget
- Body class: use cn() for dark mode support, remove hardcoded bg-white

### Header
- Sticky, backdrop-blur, border-b
- Logo: "QR Forge" — clean text, font-bold, no color tricks
- Nav links: Generator, FAQ, Blog — text-sm, text-muted-foreground, hover:text-foreground
- Add ThemeToggle button (Sun/Moon icon, using shadcn Button variant="ghost" size="icon")
- Mobile: Use a Sheet (slide-out) for mobile nav with hamburger menu icon

### Hero Section
- Clean, minimal hero
- Large heading: "Free QR Code Generator" — text-4xl sm:text-5xl font-bold tracking-tight
- Subtitle: text-lg text-muted-foreground, max-w-2xl mx-auto
- Optional: A subtle "Scroll to generator" button or just let the tool section be right below
- NO gradient backgrounds, NO floating emojis, NO pill badges
- Maybe a very subtle dot grid pattern OR completely clean white/dark bg

### QR Generator (main tool)
This is THE core component. Must look professional and polished.

- Wrap in a Card component (or a clean bordered container)
- Left side: Controls in a clean form layout
  - Input: Use shadcn Input with Label for "URL or Text"
  - Format toggle: Use shadcn Tabs (PNG / SVG) instead of custom buttons
  - Color pickers: Keep native color inputs but style the wrapper nicely with Label
  - Size slider: Use shadcn Slider component with Label showing value
  - Margin slider: Same as size
  - Download button: shadcn Button, size="lg", full-width, with Download icon from lucide-react
- Right side: Preview area
  - Clean card/bordered area with subtle bg, centered QR preview
  - Proper loading/empty states
- The "Coming Soon - Batch Generation" teaser: Use a subtle Card with Badge

### HowTo Section
- 3-column grid on desktop, stack on mobile
- Each step: Clean card or just icon + text, no colored circles
- Use lucide icons instead of numbers (e.g., Type, Palette, Download)
- Subtle, professional

### FAQ Section
- Use shadcn Accordion-style (or keep custom but upgrade visuals)
- Install accordion if needed: `npx shadcn@latest add accordion`
- Clean borders, smooth animation
- Each item: hover state, proper spacing

### About Section
- Clean typography, good line-height
- Maybe a subtle bg-muted background

### Blog Pages
- Update Header/Footer imports (they'll get the new design automatically)
- Blog listing: Clean cards with proper hover states
- Blog articles: Keep all content, just ensure typography is clean
- Use prose-like styling for article content

### Footer
- Minimal, clean
- Copyright + nav links
- border-t, bg-transparent or bg-muted

### FeedbackWidget
- Keep floating button (bottom-right)
- Redesign the modal using shadcn Card styling
- Use shadcn Input, Textarea (install if needed: `npx shadcn@latest add textarea`)
- Use shadcn Button for submit
- Keep ALL existing logic (API call, states, etc.)

## Step 4: Dark Mode Implementation

- Use `next-themes` ThemeProvider in layout
- Create a `ThemeToggle` component using shadcn DropdownMenu or just a simple toggle Button
- All colors MUST work in both modes — use CSS variables from shadcn theme
- Test: no white text on white bg, no black text on black bg
- The QR preview area should look good in both modes

## Step 5: Micro-interactions & Polish

- Buttons: `transition-colors` on hover, subtle scale on press (`active:scale-[0.98]`)
- Cards: `transition-shadow hover:shadow-md` or `hover:border-foreground/20`
- FAQ accordion: smooth height animation
- Page load: subtle fade-in for main content (use CSS animation, not heavy JS)
- Focus rings: proper focus-visible rings on all interactive elements
- Skeleton/loading states where appropriate

## Step 6: Build & Verify

```bash
npm run build
```

Fix any TypeScript errors, build warnings, or missing imports.

## Design References
- vercel.com (clean, minimal, professional)
- linear.app (refined dark mode, great typography)
- cal.com (good use of shadcn components)

## What NOT to do
- No gradients on text or backgrounds (except very subtle ones)
- No emoji decorations or floating animations
- No bright/saturated colors as primary palette
- No heavy drop shadows
- No "template" feel — this should look custom-built
- No unnecessary dependencies or over-engineering
- Do NOT change any SEO meta, JSON-LD, or page content text
- Do NOT remove or modify API routes
- Do NOT change the qrcode generation logic
