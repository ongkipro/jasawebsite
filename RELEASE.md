# Release Manifest — JasaWebsite.co by ONG (`jasawebsite.co`)

Release-ID: REL-20260909-008
Base: 58b071e
Environment: production
Declared-Risk: R0
Rollback-Ref: HEAD~1
Rollback-Command: git revert HEAD --no-edit
Backup-Proof: NOT_REQUIRED
Status: RELEASED_VERIFIED

## Contract & Deployment Evidence

- **Live Production URL:** [https://jasawebsite.co](https://jasawebsite.co)
- **Vercel Project:** `ongkipro/jwco` (`prj_M3dsY8tssCiR2RL9OIxUtFFZsmet`)
- **Framework & Runtime:** Next.js 16.3.4 App Router SSG (Turbopack, Tailwind CSS v4, Motion 13.2.0, Lucide React 1.16.0)
- **Edge Deployment & CDN:** Vercel Edge Singapore (`sin1`) + Cloudflare Pages
- **HTTP/2 & SSL Security:** A+ HSTS Enabled (`max-age=63072000`), Full HTTPS encryption
- **Live Probes Verified:**
  - `GET /` -> HTTP 200 (text/html, TTFB: 0.17s)
  - `GET /folio/cover` -> HTTP 200 (text/html)
  - `GET /folio/company-profile` -> HTTP 200 (text/html)
  - `GET /folio/sales-website` -> HTTP 200 (text/html)
  - `GET /folio/ecommerce-shopify` -> HTTP 200 (text/html)
  - `GET /folio/custom-web-app` -> HTTP 200 (text/html)
  - `GET /folio/portfolio` -> HTTP 200 (text/html)
  - `GET /folio/maintenance-care` -> HTTP 200 (text/html)
  - `GET /folio/colophon` -> HTTP 200 (text/html)
  - `GET /sitemap.xml` -> HTTP 200 (application/xml, 33 indexed URLs verified)
  - `GET /robots.txt` -> HTTP 200 (text/plain, User-agent: *, Allow: /)
  - `GET /peta-development.xml` -> HTTP 200 (application/xml, manifest verified)
  - `GET /llms.txt` -> HTTP 200 (text/plain, standard AI context feed)
  - `GET /images/portfolio/elfy-desktop.webp` -> HTTP 200 (image/webp, 71KB)
  - `GET /images/portfolio/elfy-mobile.webp` -> HTTP 200 (image/webp, 37KB)
- **Key Architectural & Branding Highlights:**
  - **ELFY Malaysia International D2C Flagship Portfolio Expansion:**
    - Live commercial case study integrated: `https://elfy.my` (Kuala Lumpur, Malaysia).
    - Authentic desktop & mobile WebP screenshots captured via headless Chrome (<100KB total).
    - Showcase strip in `CommerceSheet.tsx` upgraded to 5 active live brands in responsive `grid-cols-5`.
    - Total curated portfolio expanded to 11 live verified projects across Indonesia and Malaysia.
  - **High-Fill Obsidian Squircle `.ONG` Monogram Favicon Suite:**
    - High-density luxury obsidian squircle (`#0e0f12`, radius 112px on 512px canvas) filling the entire 1:1 tab canvas, eliminating empty negative space.
    - Scaled ultra-bold `ONG` lettering (size 187px) with glowing vermillion red baseline dot (`#ff453a`, radius 33px) for 100% legibility in real 16x16 & 32x32 browser tabs.
    - Dynamic SVG favicon (`/favicon.svg`) with fine luminous perimeter border (`rgba(255,255,255,0.2)`).
    - Multi-resolution raster favicon suite (`public/icon.png`, `public/icon-light.png`, `public/icon-dark.png`, `public/favicon-32x32.png`, `public/favicon-16x16.png`, `public/favicon.ico`).
    - iOS-compliant luxury obsidian `apple-touch-icon.png` (180x180) preventing black-box transparency glitch on Apple devices.
  - **Mobile Input & Catalog Search Polish (Commit `904c076`):**
    - Enforced `text-base md:text-xs` on mobile search inputs to prevent iOS Safari auto-zoom viewport distortion.
    - Added instant real-time filtering to the top-to-bottom sector directory list in `NicheCatalogSheet`.
    - Balanced Folio 05 layout in `TocSheet` with structured 2-line title/subtitle hierarchy.
  - **Concise Executive Copywriting:** Tightened all deliverables bullet points, sprints, and target clients across all 5 core service offerings; eliminated verbose rambling text stretching to sides.
  - **Zero Horizontal Scroll Guaranteed:** Complete removal of `overflow-x-auto whitespace-nowrap` on category pills; category filters now wrap vertically (`flex-wrap gap-1`).
  - **Niche Directory Open Editorial Ledger:** Redesigned directory from squished 2-column cards to an open hairline ledger (`divide-y divide-[#e5e5df]`) with top-to-bottom vertical flow, unclipped industry names, category, recommended pillar, and price tags (`[01]` to `[24]`).
  - **Negative Margin Elimination:** Removed `-mx-2 sm:-mx-3` across all recommended tiers in Compro, Sales, Commerce, Custom App, and Maintenance sheets.
  - **Page-by-Page Development Map & Manifest:** Published `docs/PETA-DEVELOPMENT.md` (& root `PETA-DEVELOPMENT.md`) and `docs/peta-development.xml` (& `public/peta-development.xml`) cataloging all 33 semantic routes, 8 core spreads, 24 industry niche sheets, component sources, vouchers, and SEO metadata.
- **Customer Hotline:** Call & WhatsApp `+62 838-3044-1495` (`6283830441495`), Email: `get@ongki.pro`




