# NanoVista Africa — nanovista.africa

Official website for NanoVista Africa — the Nigeria & West Africa franchise of NanoVista Spain.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS animations
- **Fonts**: Montserrat (headings) + Open Sans (body) via Google Fonts
- **Deployment**: Vercel (configured via vercel.json)

## Pages
| Route | Description |
|---|---|
| `/` | Homepage — hero slider, collections, mission, Africa section, testimonials, store finder CTA, learn teaser |
| `/find-a-store` | Authorised stockist locator by city |
| `/become-a-stockist` | Application page for optical professionals |
| `/collections/[slug]` | Individual collection pages (8 collections) |
| `/learn` | Eye health blog index |
| `/about` | About NanoVista Africa |
| `/contact` | Contact page with form |

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import from GitHub
3. Select repo — Vercel auto-detects Next.js
4. Set custom domain: `nanovista.africa`
5. Deploy

### Option 3 — Vercel Dashboard drag-and-drop
1. Run `npm run build` locally
2. Zip the entire project folder
3. Drag into Vercel dashboard

## Environment Variables
None required for the base site.

For future form integrations (contact/stockist forms), add:
- `RESEND_API_KEY` — for email delivery
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — for store locator map

## Customisation
- **Brand colours**: `#e30613` (red), `#1a1a1a` (dark), `#f7941d` (orange accent) — all in `globals.css` and inline
- **Store data**: Edit `app/find-a-store/page.tsx` → `stores` array
- **Collections**: Edit `app/collections/[slug]/page.tsx` → `collectionData` object
- **Hero slides**: Edit `components/HeroSlider.tsx` → `slides` array
- **Testimonials**: Edit `components/Testimonials.tsx` → `testimonials` array

## Brand Notes
- NanoVista Africa is the **official franchise** for Nigeria and West Africa
- All products are genuine NanoVista (Spain) — not grey market imports
- The site intentionally excludes product shop/cart pages per project brief
