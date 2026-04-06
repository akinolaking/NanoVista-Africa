# NanoVista Africa — nanovista.africa

Official parallax homepage for NanoVista Africa, the NanoVista franchise for Nigeria and West Africa.

## Stack
- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- motion (animate-ui engine) · Lucide React
- Paper Design tokens (TypeUI) overridden with NanoVista brand

## Brand Colours (from source screenshots)
| Token | Hex | Role |
|---|---|---|
| Green (primary) | `#8dc63f` | Nav, section bands, CTAs, headings |
| Green dark | `#6aaa1e` | Hover states |
| Teal | `#2ecc8e` | Accent sections |
| Purple | `#9b59b6` | Endorsement panel |
| Light grey | `#f4f4f4` | Footer, alt sections |
| Grey bar | `#888888` | Copyright strip |

## Parallax Section Order
1. Sticky green header (nav)
2. Hero image slider — 4 slides, real NanoVista CDN images
3. Experts / About — outlined heading + Siliflex seals
4. Parallax photo break 1 — child bending frame
5. Mission band (green) — Super Mission text
6. Endorsement split — purple + SJD/SFO/AAO logos
7. Testimonials carousel (green) — West African names
8. Parallax photo break 2 — NanoBot banner
9. True Experts band — large outlined text (green parallax)
10. White intro text
11. Browse CTA (green) — links to optixwarehouse.com.ng/store/nanoafrica/
12. Parallax photo break 3 — Find Your Store banner
13. Find Your Store — outlined text + pill CTA
14. Footer — grey, 3-col, social icons, copyright bar

## Shop URL
All collection links → https://optixwarehouse.com.ng/store/nanoafrica/

## Deploy to Vercel
```bash
npm install
vercel --prod
```
Then add domain: nanovista.africa in Vercel dashboard.

## Images
All images reference nano-vista.com CDN directly (franchise has copyright).
They load in browser — the build server cannot download them (403 at tunnel level).
