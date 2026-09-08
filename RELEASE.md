# Release Manifest — JasaWebsite.co by ONG (`jasawebsite.co`)

Release-ID: REL-20260909-001
Base: 024f23a
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
  - `GET /folio/maintenance-care` -> HTTP 200 (text/html)
  - `GET /folio/colophon` -> HTTP 200 (text/html)
  - `GET /sitemap.xml` -> HTTP 200 (application/xml, 33 indexed URLs verified)
  - `GET /robots.txt` -> HTTP 200 (text/plain, User-agent: *, Allow: /)
  - `GET /icon.png` -> HTTP 200 (image/png)
  - `GET /apple-icon.png` -> HTTP 200 (image/png)
  - `GET /favicon.ico` -> HTTP 200 (image/x-icon)
- **Key Architectural & Zero-Scroll Hardening Highlights:**
  - **Zero Horizontal Scroll Guaranteed:** Complete removal of `overflow-x-auto whitespace-nowrap` on category pills; category filters now wrap vertically (`flex-wrap gap-1`).
  - **Niche Directory Open Editorial Ledger:** Redesigned directory from squished 2-column cards to an open hairline ledger (`divide-y divide-[#e5e5df]`) with top-to-bottom vertical flow, unclipped industry names, category, recommended pillar, and price tags (`[01]` to `[24]`).
  - **Negative Margin Elimination:** Removed `-mx-2 sm:-mx-3` across all recommended tiers in Compro, Sales, Commerce, Custom App, and Maintenance sheets.
  - **Responsive Tier Headers:** Upgraded all tier headers to responsive flex layout (`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2`) with text wrapping and word breaks.
  - **TearOffVoucher Wrapping:** Headers and actions flex-wrap smoothly on narrow screens.
  - **Professional Brand Favicon Suite:** Multi-resolution icons (`16/32/48/180/512`) active and verified.
- **Customer Hotline:** Call & WhatsApp `+62 838-3044-1495` (`6283830441495`), Email: `get@ongki.pro`

