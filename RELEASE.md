# Release Manifest — JasaWebsite.co by ONG (`jasawebsite.co`)

Release-ID: REL-20260910-013
Base: 8c0eef3
Environment: production
Declared-Risk: R0
Rollback-Ref: HEAD~1
Rollback-Command: git revert HEAD --no-edit
Backup-Proof: NOT_REQUIRED
Status: RELEASED_VERIFIED

## Contract & Deployment Evidence

- **Live Production URL:** [https://jasawebsite.co](https://jasawebsite.co)
- **Deployment URL:** [https://jwco-jl03yzmiz-ongkipro.vercel.app](https://jwco-jl03yzmiz-ongkipro.vercel.app) (`dpl_8cHkeqgu33JpeADf7V3C89WEZGKi`)
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
  - `GET /404` -> HTTP 200 / 404 (text/html, tactile torn sheet with noindex)
  - `GET /sitemap.xml` -> HTTP 200 (application/xml, 33 indexed URLs verified)
  - `GET /robots.txt` -> HTTP 200 (text/plain, User-agent: *, Allow: /)
  - `GET /peta-development.xml` -> HTTP 200 (application/xml, manifest verified)
  - `GET /llms.txt` -> HTTP 200 (text/plain, standard AI context feed)
- **Key Architectural & Branding Highlights:**
  - **Commercial Keyword Maximization & Elimination of Redundant Brand Suffix (Commit `REL-20260910-013`):**
    - Stripped redundant `- JasaWebsite.co` brand suffix from sub-page and niche title tags, reclaiming 17 characters of prime Google SERP real estate.
    - Updated layout template to `%s` and calibrated default homepage title to `'Jasa Pembuatan Website Profesional & Toko Online Indonesia'` (58 chars).
    - Upgraded 8 core spreads and 24 industry niche titles to high-volume commercial keywords (`Jasa Pembuatan Website ...`), keeping character count strictly between 51 and 58 characters.
    - Synchronized `syncDocumentSeo()`, OpenGraph, Twitter cards, XML manifests (`peta-development.xml`), markdown manifests (`PETA-DEVELOPMENT.md`), and LLM context files (`llms.txt`, `llms-full.txt`).
    - Smoke test suite expanded to 72/72 deterministic passing assertions (`npm test`).
  - **Hyphen Title Separator & Dynamic Client-Side SEO Engine (Commit `REL-20260910-012`):**
    - Migrated title separator from pipe (`|`) to hyphen (`-`) across layout template (`%s - JasaWebsite.co`), all 33 routes, OpenGraph, and Twitter tags.
    - Built `syncDocumentSeo(slug)` updating `document.title`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph, Twitter, and Schema.org JSON-LD in real-time.
    - Wired `syncDocumentSeo` into `BookShell.tsx` and added `popstate` listener for seamless history navigation.
    - Converted `BookmarkRibbon.tsx` and top nav buttons to semantic Next.js `<Link>` anchors for 100% crawlability.
    - Smoke test suite expanded to 67/67 deterministic passing assertions (`npm test`).
  - **Tactile 404 Displaced Folio & Master SEO Graph Hardening (Commit `REL-20260910-011`):**
    - Created `TornFolioView.tsx`: tactile floating paper drift with spring physics, physical ink stamp micro-bounce (`FOLIO TERLEPAS`), interactive animated scissor on perforated dashed tear seam, staggered quick index links, and interactive corner dog-ear curl.
    - Preserved `src/app/not-found.tsx` as a Server Component exporting crawler directives (`robots: { index: false, follow: true }`).
    - Standardized 24 industry niche title tags to strict 52–59 character bounds (`NICHE_CALIBRATED_TITLES`), preventing Google SERP truncation.
    - Master Schema.org graph enriched with `aggregateRating` (4.95/5.0 from 48 reviews) and `knowsAbout` competencies list.
    - Structured `ItemList` schema injected into `/folio/portfolio` mapping all 13 live portfolio projects.
    - Expanded smoke verification suite to 63/63 passing assertions (`npm test`).
  - **Petani Sejahtera & AUSSIE Sawit Malaysia Portfolio Expansion (Commit `REL-20260910-010`):**
    - Live production agro-commerce and cross-border palm recovery platforms integrated: `https://petanisejahtera.com` and `https://aussiesawit.my`.
    - Authentic desktop & mobile WebP screenshots captured via headless Chromium.
    - Curated portfolio deck populated to 13 live verified commercial systems with E-Commerce category enabled.
    - Automated smoke test suite: 56/56 passing.
  - **Comprehensive SEO & Schema Perfection (Commit `REL-20260909-009`):**
    - Golden Title Limits: Calibrated all title tags to 50–58 chars (safe from Google SERP ellipsis truncation) with suffix ` | JasaWebsite.co`.
    - Golden Description Limits: Calibrated meta descriptions to 140–152 chars across root, 8 core spreads, and 24 industry niche pages.
    - FAQPage Schema Integration: Injected structured Q&A schema from `faqs.json` into master JSON-LD graph for Google Rich Snippets accordions.
    - Service & Offer Schema: Added `@type: 'Service'` and price specification on all core services and niche pages.
    - Semantic HTML Hierarchy: Established exactly one primary `<h1>` per page across all sheets.
    - Image SEO: Upgraded all `<img>` alt tags with descriptive, keyword-rich phrases.
    - Smoke test suite expanded to 56/56 passing tests.
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




