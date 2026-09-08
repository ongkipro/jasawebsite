# Release Manifest — JasaWebsite.co by ONG (`jasawebsite.co`)

Release-ID: REL-20260908-003
Base: 5adb27d
Environment: production
Declared-Risk: R0
Rollback-Ref: HEAD~1
Rollback-Command: git revert HEAD --no-edit
Backup-Proof: NOT_REQUIRED
Status: RELEASED_VERIFIED

## Contract & Deployment Evidence

- **Live Production URL:** [https://jasawebsite.co](https://jasawebsite.co)
- **Vercel Deployment URL:** [https://jwco-gtkiwvxxj-ongkipro.vercel.app](https://jwco-gtkiwvxxj-ongkipro.vercel.app) (Canonical 302 -> `https://jasawebsite.co`)
- **Vercel Project:** `ongkipro/jwco` (`prj_M3dsY8tssCiR2RL9OIxUtFFZsmet`)
- **Framework & Runtime:** Next.js 16.3.4 App Router SSG (Turbopack, Tailwind CSS v4, Motion 13.2.0, Lucide React 1.16.0)
- **Edge Deployment & CDN:** Vercel Edge Singapore (`sin1`) + Cloudflare Pages
- **HTTP/2 & SSL Security:** A+ HSTS Enabled (`max-age=63072000`), Full HTTPS encryption
- **Live Probes Verified:**
  - `GET /` -> HTTP 200 (text/html, TTFB: 0.17s)
  - `GET /folio/cover` -> HTTP 200 (text/html)
  - `GET /folio/company-profile` -> HTTP 200 (text/html, TTFB: 0.43s)
  - `GET /folio/sales-website` -> HTTP 200 (text/html, TTFB: 0.48s)
  - `GET /folio/ecommerce-shopify` -> HTTP 200 (text/html)
  - `GET /folio/custom-web-app` -> HTTP 200 (text/html)
  - `GET /folio/maintenance-care` -> HTTP 200 (text/html, TTFB: 0.37s)
  - `GET /folio/niche-dealer-otomotif` -> HTTP 200 (text/html, TTFB: 0.63s)
  - `GET /sitemap.xml` -> HTTP 200 (application/xml, 33 indexed URLs verified)
  - `GET /robots.txt` -> HTTP 200 (text/plain, User-agent: *, Allow: /)
  - `GET /og-image.jpg` -> HTTP 200 (image/jpeg)
  - **Key Visual & Architectural Upgrades:**
  - **Professional Brand Favicon & App Icons:** Generated and deployed bespoke Swiss Monograph architectural folio mark with vermillion ribbon bookmark across multi-resolution ICO (`16/32/48`), PNG (`16x16`, `32x32`, `180x180`, `512x512`), and Next.js App Router metadata icons (`/icon.png`, `/apple-icon.png`, `/favicon.ico`).
  - **Zero Horizontal Scroll on Cover:** Streamlined bottom technical specs to clean monospace grid without icons, preventing side scrolling on small mobile devices.
  - **Eradication of Emoji Slop:** Migrated from emoji/Unicode glyphs (`⭐`, `✂️`, `★`, `✓`, `↗`, `▼`, `➜`) to crisp vector icons via `lucide-react` (`Star`, `Scissors`, `Check`, `Zap`, `Cloud`, `KeyRound`, `ShieldCheck`, `Database`, `Package`, `Users`, `LineChart`, `ArrowUpRight`, `Maximize2`).
  - **Open Editorial Layout:** Replaced boxy nested cards with open hairline ledgers, vermillion accent bars, and stabilo highlighter marks.
  - **Conversational Copy Overhaul:** Relaxed, high-converting business copy across all 5 core services targeting procurement, ROAS, and zero-fee D2C commerce.
  - **Maintenance Care Repositioning:** Entry tier anchored at Rp 2,5jt/bln with high-margin tactical add-ons (Ads LP, Motion LP, Dynamic Geo-Targeting, Anti-Bot/COD).
  - **Expanded Industry Catalog:** 24 commercial sectors with tactile engineering field notes.
- **Customer Hotline:** Call & WhatsApp `+62 838-3044-1495` (`6283830441495`), Email: `get@ongki.pro`
