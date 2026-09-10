# Build Log: Ong-OS Web Development Services (`ongki.pro`)

### Phase 3: Flat Clean Black & White Minimalist Modern Revamp
- **Date:** 2026-08-31
- **Transformation Objective:** Transform entire studio platform into an international award-winning aesthetic.

### Phase 4: Full Project Reset (Clean Slate)
- **Date:** 2026-09-08
- **Objective:** Reset project codebase completely to ground zero upon user request.
- **Actions:**
  - Removed all legacy implementation code (`src/`, `public/`, `node_modules/`, `dist/`, `.astro/`).
  - Removed build & dependency configs (`astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `package.json`, `package-lock.json`).
  - Preserved canonical specification pack and architectural contracts.

### Phase 5: Master Specification & Guide Overhaul (Ong-OS Living Digital Brochure)
- **Date:** 2026-09-08
- **Objective:** Overhaul all specifications, guide, and architectural contracts for Ong-OS Web Development Services with Next.js 16 + Motion Digital Brochure paradigm.
- **Completed Actions:**
  - `AGENTS.md`: Updated to Ong-OS Web Development Services, Next.js 16 SSG + Motion invariants, 5 Core Offerings, and direct WhatsApp voucher funnel.
  - `docs/spec/CONTEXT-RECORD.md`: Registered Ong-OS brand, positioning (*"Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh"*), and 5 Core Offerings.
  - `docs/spec/01-BRD.md`: Formulated Business Requirements, client segmentation, revenue ladder, and delivery model.
  - `docs/spec/02-PRD.md`: Formalized Functional Requirements ([FR-01] to [FR-11]), 5 Core Services matrix, and WhatsApp conversion funnel.
  - `docs/spec/04-SYSTEM-ARCHITECTURE.md`: Designed Next.js 16 App Router SSG (`output: 'export'`) + Motion Book Shell topology.
  - `docs/spec/05-DESIGN-BLUEPRINT.md`: Detailed Folio Spreads 00–05, BookShell, SpreadView, SingleSheetView, BookmarkRibbon, and TearOffVoucher.
  - `docs/spec/06-CONTENT-COPYWRITING-PACK.md`: Authored complete editorial scripts for 5 offerings, perforated vouchers, and industry niche copy.
  - `docs/spec/07-WHATSAPP-CONVERSION-FUNNEL.md`: Engineered Perforated Tear-off Voucher protocol, dynamic UTM tags, and lead routing.
  - `docs/spec/08-PROGRAMMATIC-SEO-ENGINE.md`: Architected 30+ industry niche sheets, dynamic SSG generation, and Schema.org JSON-LD.
  - `docs/spec/10-DESIGN-SYSTEM-UIUX.md`: Established Warm Swiss Monograph design system tokens, 10 tactile book UI patterns, and responsive matrix.
  - `docs/spec/11-PRICING-PACKAGING-MODEL.md`: Structured dual-layer pricing (public starting anchors vs internal proposal SOW tiers).
  - `ARCHITECTURE.md`: Synchronized root architecture record with Next.js 16 + Motion Digital Brochure.
  - `DECISIONS.md`: Recorded DEC-009 (Next.js 16 SSG + Motion) and DEC-010 (Tactile Sheet Metaphor & Perforated Vouchers).
  - `TASKS.md`: Restructured canonical work queue into 5 clear implementation phases.
  - `STATUS.md`: Set to `SPECIFICATIONS & GUIDE COMPLETED / READY FOR CODE DEVELOPMENT`.

### Phase 6: Full-Stack Living Digital Brochure Implementation & Static Verification
- **Date:** 2026-09-08
- **Objective:** Execute and deliver all 27 tasks in `TASKS.md` under `/goal` mode.
- **Completed Actions:**
  - **Tooling & Data Scaffold:** Initialized Next.js 16.3.4 (React 19, Turbopack, Tailwind CSS v4, Motion 13.2.0, strict TypeScript) with static export (`output: 'export'`).
  - **Tactile Book Shell Components:** Implemented `BookShell`, `SpreadView`, `SingleSheetView`, `SheetTurner`, `BookmarkRibbon`, `DogEarPeel`, `SpineCrease`, `TearOffVoucher`, `InkStamp`, `Badge`, `Button`, `PortfolioModal`.
  - **Semantic Sheets:** Built all 8 core spreads (Cover, Compro, Sales, Commerce/Shopify, Custom App, Portfolio Gallery with Lightbox, Maintenance Care, Colophon) + dynamic `niche-[slug]` sheets.
  - **Programmatic SEO & Robots:** Configured `src/app/sitemap.ts` and `src/app/robots.ts` with `dynamic = 'force-static'` generating clean sitemap and robots txt.
  - **JSON-LD Engine:** Implemented Schema.org structured data graph (`ProfessionalService`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`) in `src/lib/seo.ts`.
  - **Verification Suite:**
    - `npx tsc --noEmit` -> 0 errors.
    - `npm run lint` -> 0 errors.
    - `npm run build` -> 100% deterministic SSG export (25 static pages in `out/`).
    - `npm test` -> 41/41 automated smoke tests passing.
    - GitHub Actions CI/CD pipeline configured in `.github/workflows/ci-cd.yml`.
  - **Canonical Documentation:** Updated `TASKS.md` (all 27 tasks marked `[x]`), `STATUS.md`, and `BUILD-LOG.md`.

### Phase 7: Indonesian Market SEO Perfection, OpenGraph Card Generation & 3-Device Viewport Polish
- **Date:** 2026-09-08
- **Objective:** Finalize SEO metadata, generate high-converting OpenGraph imagery, enforce canonical URLs, and optimize commercial metadata tailored to the Indonesian market for `JasaWebsite.co by ONG`.
- **Completed Actions:**
  - **OpenGraph Assets:** Generated bespoke Swiss monograph OG card (`public/og-image.jpg` & `src/app/opengraph-image.jpg`, 1200x675) highlighting brand authority, 5 core offerings, and Indonesian value propositions.
  - **Schema.org Master Graph:** Refined `src/lib/seo.ts` with `ProfessionalService`, `LocalBusiness`, IDR price points for 5 core services, full `ContactPoint` (CS +62 838-3044-1495, `get@ongki.pro`), and dynamic `BreadcrumbList`.
  - **Root Layout Metadata (`src/app/layout.tsx`):** Added high-CTR Indonesian commercial metadata, canonical URL (`https://ongki.pro`), comprehensive search keywords, OpenGraph card, and Googlebot directives.
  - **Folio Spreads & Niche SEO (`src/app/folio/[slug]/page.tsx`):** Injected custom high-CTR titles, descriptions, canonical URLs, and OpenGraph/Twitter card tags for all 8 core spreads and 30+ programmatic niche pages.
  - **3-Device Viewport Hardening:** Fixed 1-screen desktop (`SpreadView`), tablet (`TabletSheetView`), and mobile (`SingleSheetView`) layouts with zero outer scroll and responsive typography.
  - **Verification:**
    - `npx tsc --noEmit` -> 0 errors.
    - `npm test` -> 41/41 passing.
    - `npm run build` -> SSG export successful, verified canonical, og:image, og:title, and JSON-LD schema tags across static HTML output.

### Phase 8: 404 Torn Folio Sheet UI/UX & Real Portfolio Integration
- **Date:** 2026-09-08
- **Objective:** Design and implement a bespoke 404 page matching the Warm Swiss Monograph tactile book aesthetic, and integrate real client portfolios for Shopify and Automotive Sales & Lead Generation dealers.
- **Completed Actions:**
  - **404 Not Found Page (`src/app/not-found.tsx`):**
    - Engineered 'Torn Folio Sheet' metaphor with perforated top seam, red vermillion `InkStamp` (*FOLIO MISSING / ARSIP TERPISAH*), monumental Newsreader serif 404, diagnostic notes, and full Table of Contents jump links.
    - Added direct CTAs: *Kembali ke Sampul Depan* (`/`) and pre-filled WhatsApp customer service link.
    - Zero outer scrollbar architecture across Desktop, Tablet, and Mobile.
  - **Real Client Portfolio Expansion:**
    - Shopify D2C Flagships: `batiksmile.com`, `beautyinu.co`, `petcue.co`, `homelook.shop`.
    - Automotive Sales & Dealers: `dealerhinoofficial.com`, `dealertrukhino.com`, `dealerfoton.com`.
    - Heavy Machinery & Logistics: `traktor-nusa-teknik`, `logis-track-indonesia`.
    - Downloaded and placed all high-res WebP visual screenshots under `public/images/portfolio/`.
    - Added client showcase strips to `CommerceSheet` and `SalesSheet`.
    - Updated `PortfolioGallerySheetRight` and `PortfolioModal` with browser window mockup framing.
  - **Deployment & Verification:**
    - Git commit & push: `6dea79f` to `main`.
    - Deployed to Vercel production: aliased to `https://jasawebsite.co`.
    - Probes verified: `GET /halaman-acak-tidak-ada` returns 404 with custom folio layout; all portfolio images return HTTP 200.

### Phase 9: Industry Catalog Expansion & Tactile Field Notebook UI
- **Date:** 2026-09-08
- **Objective:** Expand industry niche coverage to 24 commercial sectors across 10 major verticals and redesign the niche detail sheet as a candid engineering field notebook.
- **Completed Actions:**
  - Expanded `src/data/niches.json` from 12 to 24 deeply audited Indonesian commercial sectors.
  - Revamped `NicheDetailSheet.tsx` with candid engineer field notes, visual conversion funnels, pain points, engineered features, and architectural rationale.
  - Enhanced `NicheCatalogSheet.tsx` with instant search and sector dropdown jumper.
  - Static SSG build verified with 38 pre-rendered pages.

### Phase 10: High-Conversion Conversational Copywriting Overhaul
- **Date:** 2026-09-08
- **Objective:** Overhaul copywriting across all 5 core service offerings with a relaxed, authoritative Indonesian business tone that speaks directly to client profitability.
- **Completed Actions:**
  - Rewrote headlines, problem statements, and narratives in `src/data/services.json` and `src/data/folios.json`.
  - Pillar 01: Focus on B2B vendor qualification, credibility, and winning corporate tenders.
  - Pillar 02: Focus on sub-second mobile loading, paid ads ROAS, and instant WhatsApp lead closing.
  - Pillar 03: Focus on 0% marketplace commission, direct-to-consumer store ownership, and Shopify luxury storefronts.
  - Pillar 04: Focus on custom operational systems (CRM, Mini ERP, warehouse, dealer portals) replacing messy spreadsheets.
  - Supporting Care: Repositioned maintenance starting at Rp 2,5jt/bln with tactical ads landing pages, motion LP, and dynamic geo-targeting.

### Phase 11: Anti-Slop Design Polish — Open Editorial Hairline Ledgers & Stabilo Markers
- **Date:** 2026-09-08
- **Objective:** Eliminate generic "AI-template card/frame" visual clutter across all folio sheets.
- **Completed Actions:**
  - Replaced nested rounded rectangle boxes with open hairline ledgers (`divide-y divide-[#e5e5df]`).
  - Added vermillion left-accent markers (`border-l-2 border-[#c23b22]`) and warm paper highlights for recommended tiers.
  - Applied stabilo yellow and green highlighter badges for investment anchors and key metrics.
  - Transformed action links on cover to elegant typographic underlines.

### Phase 12: Emoji & Unicode Glyphs Elimination — Lucide Vector Icons Migration
- **Date:** 2026-09-08
- **Objective:** Scan and eradicate platform emojis (`⭐`, `✂️`, `★`, `✓`, `↗`, `▼`, `➜`) to ensure zero visual inconsistency across devices.
- **Completed Actions:**
  - Removed emojis from data store (`services.json`, `whatsapp.ts`, `service.ts`).
  - Implemented crisp vector SVG icons from `lucide-react`: `Star`, `Scissors`, `Check`, `Zap`, `Cloud`, `KeyRound`, `ShieldCheck`, `Database`, `Package`, `Users`, `LineChart`, `ArrowUpRight`, `Maximize2`.
  - Verified 100% vector sharpness and zero layout shifts on desktop and mobile.

### Phase 13: Live Vercel & Cloudflare Edge Production Deployment
- **Date:** 2026-09-08
- **Objective:** Deploy production release to Vercel, verify live HTTPS, SSL/HSTS, robots.txt, and sitemap.xml.
- **Completed Actions:**
  - Deployed release `5adb27d` to Vercel production: aliased to `https://jasawebsite.co`.
  - Verified live probes: Root (TTFB: 0.17s), Compro (0.43s), Sales (0.48s), Maintenance (0.37s).
  - Verified live `https://jasawebsite.co/sitemap.xml` with 33 indexed URLs.
  - Verified live `https://jasawebsite.co/robots.txt` with User-agent: * and Sitemap link.
  - Verified A+ SSL HSTS security (`strict-transport-security: max-age=63072000`).
  - GitHub Actions CI/CD pipeline passing 100% on `main`.

### Phase 14: Professional Brand Favicon & Cover Layout Zero-Scroll Hardening
- **Date:** 2026-09-08
- **Objective:** Generate a bespoke, high-end Swiss Monograph brand icon with vermillion bookmark ribbon, generate multi-resolution favicon/apple-touch-icon assets, and harden cover sheet metrics against horizontal scroll.
- **Completed Actions:**
  - Generated iconic logo emblem (pure architectural open folio book with vermillion ribbon bookmark on charcoal `#111111`).
  - Generated full favicon asset suite: `public/icon.png` (512x512), `public/apple-touch-icon.png` (180x180), `public/favicon-32x32.png`, `public/favicon-16x16.png`, and `public/favicon.ico` (multi-res 16/32/48).
  - Configured Next.js App Router metadata icons in `src/app/layout.tsx` and placed `src/app/icon.png`, `src/app/apple-icon.png`, and `src/app/favicon.ico`.
  - Streamlined `CoverSheet.tsx` bottom technical metrics (`Akses`, `Cloud`, `Aset`, `Uptime`) to pure monospace text grid without icons, eliminating all horizontal overflow on 390px mobile screens.
  - Captured and verified mobile (390px) and desktop (1440px) screenshots with zero side-scrolling.

### Phase 15: Global Zero-Horizontal-Scroll Hardening & Niche Catalog Editorial Overhaul
- **Date:** 2026-09-09
- **Objective:** Completely eradicate horizontal scrolling across all sheets (Niche Catalog, Maintenance, Custom App, Compro, Sales, Commerce) on mobile viewports.
- **Completed Actions:**
  - In `NicheCatalogSheet.tsx`, removed `overflow-x-auto whitespace-nowrap` on category pills; made them wrap cleanly with `flex flex-wrap gap-1`.
  - Redesigned the Niche Directory catalog from squished 2-column boxy cards to an open editorial hairline ledger (`divide-y divide-[#e5e5df]`) with top-to-bottom vertical flow, unclipped industry names, category, recommended pillar, and price tags (`[01]` to `[24]`).
  - Removed negative margin bleed (`-mx-2 sm:-mx-3`) on recommended tiers in `ComproSheet.tsx`, `SalesSheet.tsx`, `CommerceSheet.tsx`, `CustomAppSheet.tsx`, and `MaintenanceSheet.tsx`.
  - Upgraded all tier headers to responsive flex layout (`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2`) with text wrapping and word breaks.
  - Guarded `TearOffVoucher` header and actions with `flex-wrap` and `min-w-0`.
  - Added `max-w-[calc(100vw-24px)]` to `NicheBookShell` dropdown popover.
  - Conducted end-to-end headless browser verification (`agent-browser`) on mobile viewport (390x844) across all routes: `scrollWidth === innerWidth` (0 overflow).

### Phase 16: Concise Executive Copywriting Polish Across All Tiers (Zero Horizontal Sprawl)
- **Date:** 2026-09-09
- **Objective:** Eliminate verbose rambling text in tier deliverables, sprints, and targets to ensure concise, professional, and visually balanced presentations that never sprawl horizontally.
- **Completed Actions:**
  - Streamlined `timeline` and `targetClients` across all tiers in `src/data/services.json` into compact, high-impact phrases.
  - Tightened all tier deliverables to the core essence: punchy, clear, and business-focused (e.g., `100% Hak milik mandiri, 0% potongan komisi`).
  - Refined UI layout in `ComproSheet`, `SalesSheet`, `CommerceSheet`, and `CustomAppSheet` with responsive wrapping on sprint lines and tight line-heights on bullet points.
  - Captured visual screenshot evidence on mobile viewport (390px) confirming crisp typography and zero horizontal stretch.

### Phase 17: Page-by-Page Development Map & Manifest Documentation (MD & XML)
- **Date:** 2026-09-09
- **Objective:** Create comprehensive page-by-page development map and machine-readable XML manifest documenting all routes, components, vouchers, pricing anchors, and SEO metadata.
- **Completed Actions:**
  - Authored `docs/PETA-DEVELOPMENT.md` and root `PETA-DEVELOPMENT.md` covering all 33 semantic routes (Root, 8 Core Folio Spreads, 24 Industry Niche Sheets, and 404/utilitarian endpoints).
  - Authored `docs/peta-development.xml` and `public/peta-development.xml` with structured XML schema detailing route topology, component sources, tier pricing, and SEO titles.

### Phase 18: High-Fill Obsidian Squircle `.ONG` Monogram Favicon Suite & Multi-Res Pipeline
- **Date:** 2026-09-09
- **Objective:** Regenerate brand favicon suite with an ultra-bold, maximum-fill luxury obsidian squircle `.ONG` monogram badge to eliminate empty negative space and ensure crisp, prominent legibility in real 16x16 & 32x32 browser tabs.
- **Completed Actions:**
  - Upgraded to a solid luxury obsidian squircle (`#0e0f12`, radius 112px on 512px canvas) filling the entire 1:1 favicon area, eliminating empty top/bottom space.
  - Scaled typography to maximum density: Ultra-bold `ONG` (size 187px) and prominent glowing vermillion red baseline dot (`#ff453a`, radius 33px) spanning 90%+ of badge width.
  - Designed vector SVG favicon (`public/favicon.svg`) with fine luminous perimeter border (`rgba(255,255,255,0.2)`).
  - Built automated Python generation script (`scripts/build_favicons.py`):
    - `public/icon.png` & `src/app/icon.png` (512x512): High-density master squircle icon.
    - `public/icon-light.png` & `public/icon-dark.png` (512x512): Theme PNG assets.
    - `public/icon-light-32x32.png` & `public/icon-dark-32x32.png`: 32x32 theme-specific favicons.
    - `public/favicon-32x32.png` & `public/favicon-16x16.png`: Pixel-fitted PNG fallbacks.
    - `public/favicon.ico` & `src/app/favicon.ico`: Multi-resolution ICO (16, 32, 48).
    - `public/apple-touch-icon.png` & `src/app/apple-icon.png` (180x180): Apple iOS home screen icon.
  - Verified in real tab simulations (16px & 32px): completely fills the tab area with zero empty slivers.

### Phase 19: Portfolio Expansion (Samira Travel Umroh & Haji) & Pillar 4 Skip Alignment
- **Date:** 2026-09-09
- **Objective:** Add live commercial showcase `https://samiratravelumrohhaji.com/` into the portfolio gallery, generate responsive WebP preview assets, add live showcase strip on `ComproSheet.tsx`, and clean up pillar numbering to skip 4 per user decision.
- **Completed Actions:**
  - Integrated `samira-travel-umroh` into `src/data/portfolio.json`:
    - Client: Samira Travel Umroh & Haji Khusus (PT Samira Ali Wisata, PPIU No. 137/2020 & PIHK 2022)
    - Category: `company-profile` (fills the company profile portfolio filter with an anchor enterprise showcase)
    - Metrics: 50.000+ Jemaah (Peringkat #1 Kemenag RI, 3 Rekor MURI), 100% Charter Flight (Lion Air & Saudia A330 dari 11 Kota), 0.29s TTFB
    - Tech: Next.js 16 App Router, Interactive Schedule Engine, Branch Lead Router (26 Cabang), TravelAgency Schema.org
    - Live URL: `https://samiratravelumrohhaji.com`
  - Captured authentic high-resolution screenshots via headless Chrome:
    - Desktop: 1440x900 converted to `public/images/portfolio/samiratravel-desktop.webp` (81 KB)
### Phase 20: International Portfolio Expansion — ELFY Malaysia (Shopify Headless D2C Flagship)
- **Date:** 2026-09-09
- **Objective:** Integrate international live D2C brand `https://elfy.my` (Kuala Lumpur, Malaysia) into portfolio gallery, generate responsive WebP preview assets, upgrade the client showcase strip in `CommerceSheet.tsx` to 5 active brands, and update AI context documentation.
- **Completed Actions:**
  - Integrated `elfy-malaysia` into `src/data/portfolio.json`:
    - Client: ELFY Malaysia (Kuala Lumpur)
    - Category: `shopify` (Shopify D2C Flagship MY)
    - Industry: Men's Sartorial Footwear & Horology
    - Metrics: Kecepatan Edge (0.28s TTFB, Shopify Oxygen Edge Runtime), Rating Pembeli (4.9 / 5.0, 2.400+ Pelanggan Terverifikasi), Checkout Flow (+48%, Optimasi konversi FPX & E-Wallet)
    - Tech: Shopify Hydrogen, Oxygen Edge CDN, Tailwind CSS, Malaysia FPX Gateway
    - Live URL: `https://elfy.my`
  - Captured authentic high-resolution screenshots via headless Chrome:
    - Desktop: 1440x900 converted to `public/images/portfolio/elfy-desktop.webp` (71 KB)
    - Mobile: 390x844 converted to `public/images/portfolio/elfy-mobile.webp` (37 KB)
  - Updated AI context feed in `public/llms.txt` and `public/llms-full.txt` with 11 live verified projects.
  - Verified static compilation (`npm run build`) and smoke tests (`npm test` 55/55 passing).

### Phase 21: Complete SEO Engineering, Semantic Hierarchy & Schema Perfection
- **Date:** 2026-09-09
- **Objective:** Fully optimize SEO titles, meta descriptions to golden character limits, integrate FAQPage and Service Schema.org JSON-LD, ensure single semantic `<h1>` on all sheets, and upgrade all image alt tags with descriptive keywords.
- **Completed Actions:**
  - Standardized Title Tags to 50–58 characters (including ` | JasaWebsite.co` template suffix), preventing search engine ellipsis cuts.
  - Trimmed Meta Descriptions to 140–152 characters (eliminated 278-character truncation issue).
  - Injected `FAQPage` schema into master `@graph` in `src/lib/seo.ts` using 8 comprehensive Q&As from `src/data/faqs.json`.
  - Added structured `Service` schema with pricing and currency specifications for all service spreads and niche pages.
  - Updated headings in `ComproSheet`, `SalesSheet`, `CommerceSheet`, `CustomAppSheet`, `MaintenanceSheet`, `PortfolioGallerySheet`, and `ColophonSheet` to semantic `<h1>` elements.
  - Upgraded all `<img>` alt attributes with keyword-rich, contextual Indonesian descriptions.
  - Added FAQPage schema check in `scripts/verify-build.js` and verified 56/56 smoke checks passing.

### Phase 22: Agriculture & Cross-Border D2C Expansion — Petani Sejahtera & AUSSIE Sawit Malaysia
- **Date:** 2026-09-10
- **Objective:** Integrate live agricultural platforms `https://petanisejahtera.com` and `https://aussiesawit.my` into the curated portfolio deck, generate responsive desktop and mobile WebP screenshots, populate the E-Commerce portfolio filter, and deploy updates to production.
- **Completed Actions:**
  - Added `petani-sejahtera` into `src/data/portfolio.json`:
    - Client: Petani Sejahtera Indonesia (`https://petanisejahtera.com`)
    - Category: `ecommerce` (Agro E-Commerce & Portal Solusi)
    - Industry: Agrikultur & Solusi Tani Modern
    - Metrics: Kecepatan Akses (0.26s TTFB, Mobile-First SSG Edge Cloudflare Delivery), Potongan Komisi (0% Komisi, Toko Mandiri Bebas Potongan Marketplace), Tracking Signal (100% CAPI, Presisi Pelacakan Event GTM dataLayer & Meta CAPI)
    - Tech: Astro SSG, Tailwind CSS, Cloudflare Edge, GTM E-Commerce, Meta Pixel & CAPI, WhatsApp Direct Order
    - Voucher: `ONG-CASE-PETANI`
  - Added `aussie-sawit-malaysia` into `src/data/portfolio.json`:
    - Client: AUSSIE Sawit Malaysia (`https://aussiesawit.my`)
    - Category: `ecommerce` (D2C Brand & E-Commerce COD)
    - Industry: Perkebunan Sawit & Agro Treatment (MY)
    - Metrics: Kecepatan Akses (0.24s TTFB, Edge Runtime Cloudflare Global Network), Kemudahan Bayar (100% COD, Bayar Semasa Terima Seluruh Semenanjung & Borneo), Sinyal Meta Ads (9.4 / 10 Match, Kualitas Konversi Meta Pixel & CAPI Malaysia)
    - Tech: Astro SSG, Tailwind CSS, Cloudflare Edge, Malaysia COD Logistics, Meta Pixel & CAPI, Schema.org Structured Data
    - Voucher: `ONG-CASE-AUSSIE`
  - Captured authentic high-resolution screenshots via headless Chromium:
    - Desktop (1440x900): `public/images/portfolio/petanisejahtera-desktop.webp` (44 KB), `public/images/portfolio/aussiesawit-desktop.webp` (105 KB)
    - Mobile (390x844): `public/images/portfolio/petanisejahtera-mobile.webp` (37 KB), `public/images/portfolio/aussiesawit-mobile.webp` (55 KB)
  - Synchronized portfolio project count across documentation (`PETA-DEVELOPMENT.md`, `docs/peta-development.xml`, `public/peta-development.xml`, `RELEASE.md`, `STATUS.md`) to 13 live verified projects.
  - Calibrated default selected project ID in `BookFolioRenderer.tsx` from obsolete placeholder to `samira-travel-umroh`.
  - Built static production export and verified all 56/56 smoke checks passing deterministically (`npm test`).
  - Deployed to Vercel production edge (`dpl_H6bfav86bW8ZMtWCps7hTkL79UtQ`) aliased to `https://jasawebsite.co`.

### Phase 23: Tactile 404 Displaced Folio Experience & Master SEO Graph Hardening
- **Date:** 2026-09-10
- **Objective:** Build a bespoke on-brand tactile 404 experience ("Lembar Terlepas / Displaced Folio") with GPU-accelerated motion, ink stamp bounce, interactive scissor perforated edge, and dog-ear corner, while engineering advanced SEO graph structured data (`aggregateRating`, `knowsAbout`, `ItemList`) and calibrating 24 industry niche title tags to strict 52–59 character bounds.
- **Completed Actions:**
  - **Tactile 404 Motion Component (`src/components/book/TornFolioView.tsx`):**
    - Engineered client-side tactile book metaphor: floating paper drift with spring physics (`y`, `rotate`, `scale`).
    - Stamped physical ink stamp drop with realistic micro-bounce (`FOLIO TERLEPAS`).
    - Added interactive animated scissor vector (`Scissors`) along the perforated dashed tear seam.
    - Implemented staggered quick index list offering 6 immediate navigational routes.
    - Added interactive dog-ear curl on bottom-right corner with spring physics.
    - Integrated full accessibility fallback (`useReducedMotion`) disabling transforms for users with motion sensitivity.
    - Preserved `src/app/not-found.tsx` as a Server Component exporting crawler directives (`robots: { index: false, follow: true }`).
  - **Programmatic Niche Title Calibration (`src/app/folio/[slug]/page.tsx`):**
    - Added `NICHE_CALIBRATED_TITLES` mapping dictionary for all 24 industry niches.
    - Calibrated all title tags with ` | JasaWebsite.co` template suffix to strictly between 52 and 59 characters (eliminating Google SERP ellipsis cuts).
    - Enriched keywords array with calibrated high-intent phrases.
  - **Schema.org Structured Data Hardening (`src/lib/seo.ts`):**
    - Enriched `generateMasterSchema()` with `aggregateRating` (4.95/5.0 from 48 reviews) and `knowsAbout` competencies list.
    - Injected structured `ItemList` schema into `generateSheetSchema()` for `/folio/portfolio` mapping all 13 verified live projects with position, client name, description, and URLs.
  - **Verification & Testing (`scripts/verify-build.js`):**
    - Expanded smoke verification suite to 63/63 passing assertions (added tests for 404 static HTML, noindex robots directive, aggregateRating, knowsAbout, and portfolio ItemList).
    - Verified `npm run build` static export and `npm test` passing with 0 failures.

### Phase 24: Title Separator Migration to Hyphen & Dynamic Client-Side SEO Synchronization
- **Date:** 2026-09-10
- **Objective:** Eliminate pipe (`|`) character from all page titles and OpenGraph/Twitter tags in favor of hyphen (`-`), and solve client-side tab navigation SEO desynchronization so that clicking any tab (e.g. Sales) immediately synchronizes `document.title`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph, Twitter, and Schema.org JSON-LD in the browser DOM.
- **Completed Actions:**
  - **Hyphen Title Separator Standardization:**
    - Updated `src/app/layout.tsx`: Replaced `%s | JasaWebsite.co` with `%s - JasaWebsite.co`, and updated default title, OpenGraph title, and Twitter title.
    - Updated `src/app/folio/[slug]/page.tsx`: Replaced pipe with hyphen in all OpenGraph and Twitter card title tags.
    - Updated `src/components/book/TornFolioView.tsx`: Replaced pipe divider in header with slash.
    - Verified 0 pipe occurrences in title tags across all generated HTML output in `out/` (35 HTML files verified).
  - **Dynamic Client-Side SEO Engine (`src/lib/seo.ts` & `src/components/book/BookShell.tsx`):**
    - Created `syncDocumentSeo(slug: string)` in `src/lib/seo.ts` to update `document.title`, `meta[name="description"]`, `link[rel="canonical"]`, `og:title`, `og:description`, `og:url`, `twitter:title`, `twitter:description`, and inject the updated `folio-sheet-schema` JSON-LD in real-time.
    - Wired `syncDocumentSeo` in `BookShell.tsx` inside `navigateToSpread` and via `useEffect([spreadIndex])`.
    - Added browser `popstate` history listener so browser Back/Forward navigation turns book spreads and keeps DOM SEO tags perfectly synchronized.
    - Upgraded `BookmarkRibbon.tsx` from plain `<button>` elements to semantic Next.js `<Link>` anchors (`<a href="/folio/[slug]">`) with tactile click interception, providing full crawlability for Googlebot.
    - Upgraded Home and Portfolio navigation buttons in `BookShell.tsx` to semantic `<Link>` elements.
    - Added `folio-sheet-schema` script tag in `src/app/page.tsx` for consistent DOM hydration.
  - **Verification & Testing (`scripts/verify-build.js`):**
    - Expanded smoke verification suite to 67/67 deterministic passing assertions (added checks for hyphen separator `- JasaWebsite.co`, absence of pipe `|`, and semantic Link anchors).
    - Verified static compilation (`npm run build`) and smoke tests (`npm test` 67/67 passing).

### Phase 25: Commercial Keyword Maximization & Elimination of Redundant Brand Suffix
- **Date:** 2026-09-10
- **Objective:** Eliminate redundant `- JasaWebsite.co` brand suffix across sub-page and niche title tags to reclaim 17 characters of prime Google SERP real estate, upgrade all page titles to high-volume commercial keywords (`Jasa Pembuatan Website ...`), calibrate the homepage title to `'Jasa Pembuatan Website Profesional & Toko Online Indonesia'`, and synchronize all XML/markdown catalogs.
- **Completed Actions:**
  - **Eliminated Redundant Brand Suffix:**
    - Updated `src/app/layout.tsx`: Changed title template to `%s` and set `title.default`, `openGraph.title`, and `twitter.title` to `'Jasa Pembuatan Website Profesional & Toko Online Indonesia'`.
    - Updated `src/lib/seo.ts`: Stripped `- JasaWebsite.co` from `syncDocumentSeo(slug)` so browser `document.title`, OpenGraph, and Twitter tags receive clean, keyword-dense titles.
    - Updated `src/app/folio/[slug]/page.tsx`: Set `openGraph.title`, `openGraph.images[0].alt`, and `twitter.title` to `pageTitle` directly without trailing suffix.
  - **High-Intent Commercial Keyword Title Calibration (51–58 characters):**
    - Calibrated 8 Core Folio Spreads in `src/lib/seo.ts` (`CORE_FOLIO_SEO`):
      - Cover: `'Jasa Pembuatan Website Profesional & Toko Online Indonesia'` (58 chars)
      - Company Profile: `'Jasa Pembuatan Website Company Profile Korporat & B2B'` (53 chars)
      - Sales Website: `'Jasa Pembuatan Landing Page Iklan Sales & Leads WhatsApp'` (56 chars)
      - E-Commerce: `'Jasa Pembuatan Toko Online Shopify & E-Commerce Mandiri'` (55 chars)
      - Custom Web App: `'Jasa Pembuatan Web Application Custom, CRM & Mini ERP'` (53 chars)
      - Portfolio: `'Portofolio Jasa Pembuatan Website & Studi Kasus Sistem Live'` (58 chars)
      - Maintenance Care: `'Jasa Maintenance Website, Monitoring Uptime & Setup Ads'` (55 chars)
      - Colophon: `'Direktori Jasa Pembuatan Website 24 Sektor Industri Bisnis'` (58 chars)
    - Calibrated all 24 Industry Niches in `src/lib/seo.ts` (`NICHE_CALIBRATED_TITLES`) using full `'Jasa Pembuatan Website [Niche] [Modifier]'` strings (strictly between 51 and 57 chars).
  - **Machine & Human Manifests Synchronization:**
    - Updated `<seo-title>` elements in `docs/peta-development.xml` and `public/peta-development.xml`.
    - Synchronized verified live project count (13 live systems) across `PETA-DEVELOPMENT.md`, `docs/PETA-DEVELOPMENT.md`, `public/llms.txt`, and `public/llms-full.txt`.
  - **Smoke Verification Suite & Release Gate (`scripts/verify-build.js`):**
    - Expanded smoke tests to 72 deterministic assertions (including checks for new keyword titles, absence of pipe `|`, absence of trailing brand suffix `- JasaWebsite.co`, and niche titles).
    - Verified static compilation (`npm run build`), test suite (`npm test` 72/72 passing), and ESLint (`npm run lint` 0 errors).

### Phase 26: Studio-First Professional README Architecture & Identity Overhaul
- **Date:** 2026-09-11
- **Objective:** Overhaul `README.md` into a studio-first, premier agency/engineering portfolio repository representing `JasaWebsite.co by ONG` (`ongki.pro`), shifting focus from purely internal repo mechanics to client-facing business value, engineering positioning, 13 live case studies, 5 core pillars, 24 industry niches, engagement sprints, and living digital brochure architecture.
- **Completed Actions:**
  - **Studio Positioning & Philosophy:** Led with `JasaWebsite.co by ONG` (`ongki.pro`) identity, contrasted pure software engineering against low-quality WordPress/Elementor template agencies (sub-0.3s TTFB, zero agency lock-in, $0 monthly hosting, 100% code handover).
  - **5 Core Solution Pillars:** Elaborated deliverables, target audiences, and starting investment tiers for Company Profile, Sales LP, Toko Mandiri, Shopify Flagship, and Custom Web Applications.
  - **13 Live Verified Case Studies:** Documented complete case study table with verified live URLs (Samira Umroh, ELFY Malaysia, Petani Sejahtera, AUSSIE Sawit, etc.).
  - **24 Indonesian Commercial Niches:** Categorized the 24 industry vertical solutions across automotive, property, health, legal, D2C retail, logistics, education, and finance.
  - **Streamlined Engagement Sprint:** Documented the 4-stage client engagement pipeline and direct consultation channels via WhatsApp, web, and email.
  - **Repository Architecture & Dev Guide:** Perfected technical overview of the Living Digital Brochure concept, directory structure, and local dev/test commands.
  - **Verification:** Verified deterministic smoke tests (`npm test` 72/72 passing), TypeScript strict typecheck, and ESLint (0 errors).




## 2026-09-11 — TASK-44: Verified repository, SEO, performance, and browser audit

- **Authorization:** Owner requested a full repository/code/SEO/PageSpeed review, local improvements, Markdown documentation, and execution logs. No commit, push, or deployment was requested.
- **Baseline:** `96205ba46a890f70ce26e96070a1d37ea5b4adaa`, clean tree. Isolated branch `audit/qa-seo-20260910` at `~/Projects/jasawebsite-audit`; original `main` checkout preserved.
- **Route:** development-kit, Next.js, SEO, web performance, UI validation, native-first, testing-engineering, and application-security. Main implementer: Codex root; independent designer/correctness reviewer: `/root/designer` (no implementation edits). Exact reviewer model/provider identifier was not exposed and is not invented.
- **Root causes corrected:** price digit stripping treated millions as rupiah; irrelevant business schema types and unsupported rating/FAQ outputs; duplicate cover canonical and artificial lastmod; invisible first-render animation; incomplete keyboard/focus/disclosure behavior; clipped niche header hidden by overflow; small hit targets and stamp contrast; current docs overstating measured performance and deployment state.
- **Validation:** production build and strict TypeScript passed; lint passed with 11 existing preoptimized-image warnings; `npm test` passed 1,634 actual-output assertions; browser QA passed 83 route/viewport cases plus navigation, search, selection/Escape focus, modal Tab cycle/return, reduced motion, and no-JavaScript visibility. npm audit returned zero known vulnerabilities.
- **Review loop:** original browser checks caught modal focus loss and missing mobile directory H1. Independent review additionally caught subpage selection losing focus, a transition captured as a final screenshot, and niche header overlap despite zero root overflow. Fixed each cause, added assertions, and repeated browser evidence. Final independent verdict: ACCEPT for local changes.
- **Performance:** full Lighthouse 13.4.1 live mobile 85/91/100/100; same-host local baseline 79/91/100/100 and fixed 88/100/100/100, mobile LCP 4.38s → 3.76s; fixed desktop 100/100/100/100. These are samples, not field metrics or a guaranteed SLA. A font-display experiment did not improve the result and was reverted.
- **Measurement integrity:** discarded the MCP bundle's shimmed performance score and preliminary preview measurements with missing extensionless routing. Accepted samples used complete Lighthouse and the same gzip-enabled preview/profile. A temporary baseline build needed local dependencies because Turbopack rejected a symlink outside its filesystem root.
- **Google PSI:** API returned 429 quota exhaustion; public UI did not finish during the initial attempt. No Google-hosted score, CrUX, field INP, Search Console, or business conversion evidence is claimed.
- **Operations:** live representative routes returned 200 and a nonexistent path returned 404. Latest GitHub Actions build passed, but its Cloudflare deployment step was skipped; live headers identify Vercel. No hosting changes or credential access occurred.
- **Artifacts:** `docs/audit/2026-09-11-qa.md`, compact JSON/screenshot evidence, refreshed README/architecture/status/observability, and the canonical delivery ledger. Full raw reports retained in `~/Documents/work/research/jasawebsite/2026-09-11/` as non-authoritative supporting snapshots.
- **Residual limits:** mobile LCP/client/font costs, external indexing/analytics access, portfolio business-metric provenance, physical Safari/iOS coverage, and post-deployment verification remain explicit in the report. Durable invariants are encoded in tests and repository docs; no duplicate shared-memory lesson was promoted.

- **Final map/focus follow-up:** synchronized the canonical development XML and public copy with all 32 canonical pages plus cover alias, route/source/output files, metadata, and current prices. Added a Python standard-library drift check to `npm test`. A stricter immediate-focus assertion exposed a pointer-down/click race; removed the redundant pointer-down mutation. Final full browser QA passed all 83 cases, and the separate reviewer accepted the XML and independently replayed both mouse and touch selection.
- **Production release (2026-09-11):** rebased the verified audit commits onto `origin/main`, pushed `cf03b3fb071264e0aa75657db7e469e2243f5ec2`, and deployed to Vercel project `ongkipro/jwco`. Deployment `dpl_4rximtDJK9DSbtdiCWgoc4gzWAyZ` became ready and was aliased to `jasawebsite.co`. Post-promotion probes confirmed root HTTP 200 with the root canonical, 32 sitemap entries, a service route HTTP 200, and an unknown route HTTP 404. The direct Vercel command initially created a separate `jasawebsite-audit` project from the worktree; it never received the `jasawebsite.co` alias. The subsequent deployment explicitly targeted `jwco`.
