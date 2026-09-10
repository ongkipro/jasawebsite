# Canonical Task Queue: Ong-OS Digital Brochure Engine (`ongki.pro`)
## Full-Stack Feature Delivery & Multi-Layer Execution Backlog

> **Orchestration Standard:** Governed by `full-stack-development` lifecycle.  
> **Status:** `100% COMPLETE & VERIFIED (RELEASE READY)`  
> **Target Stack:** Next.js 16 (App Router, React 19, TypeScript), Tailwind CSS v4, Motion (Framer Motion), SSG Export (`output: 'export'`)  
> **Hosting Target:** Cloudflare Pages / Vercel Edge ($0 Server Cost, Global CDN)  
> **Quality Invariant:** Every deliverable must strictly pass static typecheck (`npx tsc --noEmit`), linting (`npm run lint`), deterministic static compilation (`npm run build`), and Lighthouse performance verification (Target 100/100, CLS = 0, FCP < 0.3s).

---

## Cross-Layer Contract Map & Execution Record

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              CROSS-LAYER CONTRACT MATRIX                               │
├──────────────────────┬───────────────────────────────┬─────────────────────────────────┤
│ Application Layer    │ Canonical Contract / Source   │ Activated Specialist Owner      │
├──────────────────────┼───────────────────────────────┼─────────────────────────────────┤
│ Product & Offerings  │ `docs/spec/01-BRD.md` & `PRD` │ `product-intelligence` / Core   │
│ Architecture/Runtime │ Next.js 16 SSG `output:export`│ `nextjs-development`            │
│ UI State & Motion    │ Warm Swiss Monograph Tokens   │ `design-taste` + `ui-validation`│
│ Static Data Store    │ TypeScript Zod in `src/types` │ `postgres-drizzle` (Static JSON)│
│ Conversion Protocol  │ Perforated Voucher + WhatsApp │ `application-security`          │
│ SEO & Structured Data│ Schema.org JSON-LD Graph      │ `seo-website-builder`           │
│ Testing & Assurance  │ Zero-error static & UI smokes │ `testing-engineering`           │
│ Performance Budget   │ Lighthouse 100/100, CLS = 0   │ `web-perf`                      │
│ CI/CD Deployment     │ GitHub Actions to Cloudflare  │ `github-actions`                │
└──────────────────────┴───────────────────────────────┴─────────────────────────────────┘
```

---

## Phase 1: Environment, Tooling & Static Data Layer

- [x] **TASK-01: Bootstrap Next.js 16 + Tailwind CSS v4 + TypeScript + Motion**
  - **Owner:** `nextjs-development` + `native-first`
  - **Scope:**
    - Initialize clean Next.js 16 App Router scaffold with TypeScript (`package.json`, `tsconfig.json`, `next.config.ts`).
    - Configure `output: 'export'`, `images: { unoptimized: true }` for zero-server Cloudflare Pages compatibility.
    - Install core dependencies: `motion` (Framer Motion), `lucide-react`, `clsx`, `tailwind-merge`.
  - **Acceptance Criteria:** `npm run dev` starts cleanly on `localhost:3000`; Next.js 16 App Router renders minimal root page.
  - **Verification:** Run `npx tsc --noEmit` -> 0 errors. Run `npm run build` -> creates static `out/` directory.

- [x] **TASK-02: Warm Swiss Monograph Design System Tokens & Global CSS**
  - **Owner:** `design-taste` + `ui-validation`
  - **Scope:**
    - Configure Tailwind CSS v4 in `src/app/globals.css` with Warm Swiss Monograph color tokens:
      - Archival Paper Off-White: `#fbfbfa`
      - Deep Charcoal Ink: `#111111`
      - Editorial Hairline Border: `#e5e5e0` / `#d8d8d3`
      - Stamp Red Vermillion Accent: `#c23b22`
      - Spine Shadow Gradient: `linear-gradient(to right, rgba(0,0,0,0.12), transparent)`
    - Establish typographic scale: Serif Monumental Display for headlines, Monospace Technical for indices, Sans Clean for body copy.
    - Setup perforated tear-off dashed borders (`dashed-border-perforated`) and paper noise overlay.
  - **Acceptance Criteria:** CSS classes compile without warnings; design tokens accessible via standard Tailwind utilities.
  - **Verification:** Inspect compiled stylesheet; verify zero CSS bloat.

- [x] **TASK-03: TypeScript Domain Interfaces & Schema Contracts (`src/types/`)**
  - **Owner:** `nextjs-development` + `full-stack-development`
  - **Scope:**
    - Create `src/types/folio.ts`: Sequential folio metadata, slug, spread orientation (`left` | `right` | `single`), title, subtitle.
    - Create `src/types/service.ts`: Service offerings, proposal tiers (`Starter`, `Business/Growth ⭐`, `Pro/Corporate`), price anchors, deliverables list.
    - Create `src/types/portfolio.ts`: Case study schema (client name, industry, category, metrics, preview images, live URL, tech stack tags).
    - Create `src/types/niche.ts`: 30+ industry verticals (slug, title, icon, pain points, core solutions, Schema type, sample ROI).
    - Create `src/types/config.ts`: Site configuration (brand name, WhatsApp number, domain, social links).
  - **Acceptance Criteria:** 100% strict TypeScript typing across all data models; zero `any`.
  - **Verification:** `npx tsc --noEmit` passes with 0 errors.

- [x] **TASK-04: Static Data Layer Implementation (`src/data/`)**
  - **Owner:** `full-stack-development`
  - **Scope:**
    - `src/data/siteConfig.ts`: Master configuration, contact details, official WhatsApp routing number.
    - `src/data/folios.json`: Master order of living brochure spreads (Cover, Compro, Sales, Commerce/Shopify, Web App, Portfolio, Maintenance, Colophon).
    - `src/data/services.json`: Detailed 5 Core Offerings, proposal tiers, pricing matrices, deliverables, and timelines.
    - `src/data/portfolio.json`: Curated case studies (Summarecon Makassar, Nocturne Atelier, Traktor Nusa B2B, Logis-Track ERP).
    - `src/data/niches.json`: 30+ Indonesian industry niches for programmatic SEO.
    - `src/data/faqs.json`: Common technical and business questions & authoritative answers.
  - **Acceptance Criteria:** All JSON and TS files match their respective TypeScript interfaces in `src/types/`.
  - **Verification:** Import data into a test script or node runner; assert validation success.

- [x] **TASK-05: Contextual WhatsApp Conversion & UTM Generator (`src/lib/whatsapp.ts`)**
  - **Owner:** `application-security` + `full-stack-development`
  - **Scope:**
    - Implement `buildWhatsAppUrl()` generating URL-safe, context-aware pre-filled messages:
      - Folio Sheet source (`ref`)
      - Chosen Service / Tier (`tier`)
      - Specific Niche industry (`niche`)
      - Case study reference (`portfolio`)
      - Campaign UTM attribution (`utm_source`, `utm_medium`, `utm_campaign`)
  - **Acceptance Criteria:** Clicking any voucher generates a valid `https://wa.me/62812xxxx?text=...` URI with cleanly formatted text.
  - **Verification:** Unit test URL generator with mock parameters; verify output formatting and character encoding.

---

## Phase 2: Tactile Book Shell & Motion Interaction Layer

- [x] **TASK-06: Master Book Shell & State Machine (`src/components/book/BookShell.tsx`)**
  - **Owner:** `nextjs-development` + `ui-validation`
  - **Scope:**
    - Client-side master container managing `currentPageIndex`, `totalPages`, `isReducedMotion`, and `viewMode` (`spread` | `single`).
    - Global keyboard navigation listeners (`ArrowLeft`, `ArrowRight`, `Home`, `End`).
    - Dynamic URL synchronizer (updates `/folio/[slug]` via browser history without causing unneeded page reloads).
  - **Acceptance Criteria:** Pressing left/right arrow keys advances or reverses folio sheets smoothly; current page number updates in header.
  - **Verification:** Manual keyboard navigation test on desktop browser.

- [x] **TASK-07: Desktop Two-Page Open Spread (`SpreadView.tsx` & `SpineCrease.tsx`)**
  - **Owner:** `design-taste` + `ui-validation`
  - **Scope:**
    - Two-page horizontal open spread (`w-1/2 left` + `w-1/2 right`) with book aspect ratio (`16:10` or `1.414:1`).
    - Implement `SpineCrease.tsx`: Realistic central spine shadow gradient simulating physical book depth and curvature.
    - Monospace running headers (technical index, studio monogram, current date) and footers (page numbers, breadcrumb).
  - **Acceptance Criteria:** Spread renders cleanly on desktop viewports (`>= 1024px`) with tactile book physical appearance.
  - **Verification:** Browser visual inspection at `1440px` and `1920px`.

- [x] **TASK-08: Mobile Single Tactile Sheet View (`SingleSheetView.tsx`)**
  - **Owner:** `ui-validation`
  - **Scope:**
    - Single-sheet vertical layout optimized for mobile screens (`< 1024px`, specifically `360px` to `430px`).
    - Gesture handling: Thumb swipe left (`drag="x"`) to advance, swipe right to go back, with rubber-band spring resistance.
    - Sticky bottom controller with page indicator capsules and previous/next arrows.
  - **Acceptance Criteria:** Mobile user can swipe smoothly between sheets with zero horizontal page scroll or layout breakdown.
  - **Verification:** Mobile responsive emulation test via Chrome DevTools touch simulation.

- [x] **TASK-09: 3D Sheet Turn Motion (`SheetTurner.tsx`)**
  - **Owner:** `nextjs-development` + `web-perf`
  - **Scope:**
    - Hardware-accelerated 3D `rotateY` perspective transform using Motion (`perspective: 1200px`, `transformOrigin: left center` / `right center`).
    - Zero layout reflow: animations strictly bound to `transform` and `opacity`.
    - Strict `prefers-reduced-motion` compliance: immediately falls back to instant opacity cross-fade.
  - **Acceptance Criteria:** 60–120 FPS animation framerate; zero layout jank; respects accessibility OS settings.
  - **Verification:** Chrome DevTools Performance Profiler showing 60+ FPS during page flips.

- [x] **TASK-10: Bookmark Ribbon Navigation & Corner Dog-Ear Curl (`BookmarkRibbon.tsx`, `DogEarPeel.tsx`)**
  - **Owner:** `design-taste` + `ui-validation`
  - **Scope:**
    - `BookmarkRibbon.tsx`: Tactile vertical tabs protruding from the right edge of the book (`Cover`, `Compro`, `Sales`, `Commerce`, `Apps`, `Galeri`, `Care`, `Index`) for instant section jumping.
    - `DogEarPeel.tsx`: Interactive bottom-right and bottom-left corner curl affordance that expands slightly on mouse hover to invite clicking.
  - **Acceptance Criteria:** Clicking any ribbon tab animates the book directly to the target folio; hovering corner shows realistic paper peel.
  - **Verification:** Visual and interaction test in browser.

- [x] **TASK-11: Perforated Tear-off Voucher & Ink Stamp (`TearOffVoucher.tsx`, `InkStamp.tsx`)**
  - **Owner:** `design-taste` + `application-security`
  - **Scope:**
    - `TearOffVoucher.tsx`: Tactile paper coupon with dashed perforated perimeter, scissor icon `✂️`, starting price badge, and micro-jiggle hover animation.
    - `InkStamp.tsx`: Certified studio seal with realistic ink bleed and slightly tilted angle (`-4deg`) signifying engineering authenticity.
    - Click handler: triggers visual tear-off separation effect before opening the pre-filled WhatsApp link in a new tab.
  - **Acceptance Criteria:** Hovering over voucher reveals interactive affordance; clicking opens contextual WhatsApp chat.
  - **Verification:** Click voucher, inspect target URL parameters.

---

## Phase 3: Semantic Folio Sheets & Portfolio Showcase (Server Components)

- [x] **TASK-12: Folio 00 (Front Cover & Table of Contents)**
  - **Owner:** `nextjs-development` + `design-taste`
  - **Scope:**
    - Render monumental typography headline *"Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh"*.
    - Technical badges: Lighthouse 100/100, $0 Edge Hosting, 100% GitHub Code Handover.
    - Table of Contents with direct jump links to all 5 core services, portfolio gallery, and niche catalogue.
  - **Acceptance Criteria:** Renders semantic HTML5 `<article>` with `h1`, `h2`, `nav`; 100% accessible.
  - **Verification:** Check DOM output in static build.

- [x] **TASK-13: Folio 01 (Company Profile Website)**
  - **Owner:** `nextjs-development` + `content`
  - **Scope:**
    - Left page: Business problem, B2B corporate credibility, legalities, and trust architecture.
    - Right page: Tier cards (Starter Rp 2,9jt, Business ⭐ Rp 4,9jt, Corporate Rp 8,9jt+), deliverables list, and perforated voucher.
  - **Acceptance Criteria:** Contains complete copy from `06-CONTENT-COPYWRITING-PACK.md`; voucher pre-fills Compro WhatsApp message.
  - **Verification:** Static HTML contains complete editorial text.

- [x] **TASK-14: Folio 02 (Sales & Lead Generation Website)**
  - **Owner:** `nextjs-development` + `storefront-ux`
  - **Scope:**
    - Left page: Traffic-to-Lead funnel blueprint (Traffic Ads ➜ LP ➜ Spec ➜ Offer ➜ WA Lead) for dealers, heavy machinery, property, B2B.
    - Right page: Tier cards (Starter Rp 5,9jt, Growth ⭐ Rp 8,9jt, Pro Rp 14,9jt+), conversion deliverables (Meta CAPI, Google Ads Signal), and perforated voucher.
  - **Acceptance Criteria:** Clearly highlights separation from traditional company profile; voucher pre-fills Sales Website intent.
  - **Verification:** Validate markup and voucher routing.

- [x] **TASK-15: Folio 03 (E-Commerce Website & Shopify Development)**
  - **Owner:** `nextjs-development` + `storefront-development`
  - **Scope:**
    - Left page: Custom E-Commerce Engine (Direct sales, Midtrans/Xendit QRIS/VA, API Kurir Indo per kecamatan, $0 server cost).
    - Right page: Shopify D2C Flagship (Shopify Starter Rp 3,9jt, Growth ⭐ Rp 6,9jt, Custom Liquid Rp 12,9jt+, Headless Rp 20jt+), and two perforated vouchers.
  - **Acceptance Criteria:** Accurately represents both direct custom e-commerce and Shopify paths.
  - **Verification:** Validate deliverables table and voucher links.

- [x] **TASK-16: Folio 04 (Custom Web Application & Systems)**
  - **Owner:** `nextjs-development` + `admin-product-ux`
  - **Scope:**
    - Left page: Workflow automation philosophy (CRM, Mini ERP, Customer Portal, Internal SaaS, Stock Management).
    - Right page: Tier cards (MVP Rp 15jt, Business System ⭐ Rp 25jt, Advanced Rp 50jt+, Enterprise), tech stack tags, and perforated voucher.
  - **Acceptance Criteria:** Explains enterprise-grade full-stack systems clearly for non-technical business owners.
  - **Verification:** Check layout and voucher routing.

- [x] **TASK-17: Folio 05 (Galeri Portofolio & Showcase Proyek Terpilih - `/folio/portfolio`)**
  - **Owner:** `design-taste` + `ui-validation`
  - **Scope:**
    - Left page: Curated case studies deck with filter tabs (`Semua`, `Company Profile`, `Sales & Leads`, `E-Commerce`, `Shopify`, `Custom App`). Display verified metrics (Summarecon CPL -42%, Nocturne +48% checkout, etc.).
    - Right page: Interactive Project Inspector with high-res mockup preview, Desktop/Mobile viewport switcher, architecture specs, demo link, and WhatsApp design inquiry voucher.
    - `PortfolioModal.tsx`: Full-screen Lightbox view displaying full-page scroll screenshot, architectural deep-dive, and live client URL.
  - **Acceptance Criteria:** Clicking category filters updates project list; switching viewport toggles mockup frame; clicking preview opens lightbox.
  - **Verification:** Interactive test in browser across desktop and mobile.

- [x] **TASK-18: Folio 06 (Website Maintenance Care & Add-Ons - `/folio/maintenance-care`)**
  - **Owner:** `nextjs-development` + `content`
  - **Scope:**
    - Left page: 24/7 Care Retainer Plans (Basic Care Rp 300-500rb, Business Care ⭐ Rp 750rb-1,5jt, Pro Care Rp 2jt+/bln).
    - Right page: Strategic Add-On Modules (Server-Side Meta CAPI, Programmatic SEO 30+ Pages, Copywriting, AI Chatbot) & Perforated Retainer Voucher.
  - **Acceptance Criteria:** Clear deliverables and monthly SLAs; transparent scope boundaries.
  - **Verification:** Validate content and voucher routing.

- [x] **TASK-19: Dynamic Niche Folio Sheets (`/folio/[slug]` for 30+ Industries)**
  - **Owner:** `seo-website-builder` + `nextjs-development`
  - **Scope:**
    - Implement dynamic route `src/app/folio/[slug]/page.tsx` with `generateStaticParams()` reading `niches.json`.
    - Generate unique sheet for each of 30+ industries (Dealer Mobil, Alat Berat, Properti, Kontraktor, Klinik Medis, Kantor Hukum, Skincare, etc.).
    - Inject industry-specific pain points, recommended architecture, and custom WhatsApp voucher.
  - **Acceptance Criteria:** 30+ distinct HTML files pre-rendered in static build; each route accessible via `/folio/niche-[slug]`.
  - **Verification:** Inspect `out/folio/` directory post-build; verify 30+ subdirectories generated.

- [x] **TASK-20: Folio Colophon & Back Cover (`/folio/colophon`)**
  - **Owner:** `design-taste` + `content`
  - **Scope:**
    - Left page: 30+ Industry Verticals clickable directory index.
    - Right page: Studio colophon, engineering invariants (100% GitHub Code Ownership, $0 Hosting, Sub-second speed guarantee), and master WhatsApp consultation voucher.
  - **Acceptance Criteria:** Concludes the living brochure with authority and high conversion CTA.
  - **Verification:** Check markup and voucher routing.

---

## Phase 4: Programmatic SEO, Metadata & Structured Data Graph

- [x] **TASK-21: Dynamic XML Sitemap & Robots Engine (`app/sitemap.ts`, `app/robots.ts`)**
  - **Owner:** `seo-website-builder`
  - **Scope:**
    - `src/app/sitemap.ts`: Automatically generate entries for root, all core folio spreads, and all 30+ niche sheets with correct `lastModified` and `priority`.
    - `src/app/robots.ts`: Allow full search indexing, point to `/sitemap.xml`.
  - **Acceptance Criteria:** `out/sitemap.xml` and `out/robots.txt` exist in build output with valid XML syntax.
  - **Verification:** Run XML validation on generated sitemap.

- [x] **TASK-22: OpenGraph, Twitter Cards & Dynamic Metadata (`generateMetadata()`)**
  - **Owner:** `seo-website-builder` + `nextjs-development`
  - **Scope:**
    - Implement `generateMetadata()` for dynamic routes `/folio/[slug]`.
    - Set title template: `%s · Ong-OS Web Development Services`.
    - Set contextual meta descriptions, canonical URLs, and OpenGraph/Twitter summary cards.
  - **Acceptance Criteria:** Every folio sheet contains complete semantic `<head>` metadata.
  - **Verification:** Inspect `<head>` tags in static HTML output.

- [x] **TASK-23: Schema.org JSON-LD Structured Data Engine**
  - **Owner:** `seo-website-builder` + `application-security`
  - **Scope:**
    - Implement `src/lib/seo.ts` to output structured JSON-LD graphs:
      - `ProfessionalService` & `LocalBusiness` for root and core service sheets.
      - `FAQPage` schema on sheets with FAQ content.
      - `BreadcrumbList` on all sub-folio sheets.
  - **Acceptance Criteria:** Google Rich Results Test valid with 0 errors and 0 warnings.
  - **Verification:** Run Schema.org validator on sample generated HTML.

---

## Phase 5: Automated Testing, Performance SLA & CI/CD Pipeline

- [x] **TASK-24: Automated Behavioral & Static Verification Tests**
  - **Owner:** `testing-engineering`
  - **Scope:**
    - Setup smoke test suite verifying:
      - All routes defined in `folios.json` and `niches.json` build successfully without 404s.
      - WhatsApp URL generator produces valid parameters without unencoded characters.
      - Schema.org JSON-LD scripts are present and valid JSON.
  - **Acceptance Criteria:** Test runner completes with 100% pass rate.
  - **Verification:** Run `npm test` or verification smoke script.

- [x] **TASK-25: Core Web Vitals & Performance Audit**
  - **Owner:** `web-perf` + `ui-validation`
  - **Scope:**
    - Audit static assets, image dimensions, font loading strategy (`next/font` with swap).
    - Verify zero CLS (Cumulative Layout Shift = 0) during 3D sheet turns and viewport resizes.
    - Measure First Contentful Paint (FCP < 0.3s) and TTFB on simulated 4G mobile.
  - **Acceptance Criteria:** Google Lighthouse Mobile score >= 95 in Performance, 100 in Accessibility, 100 in Best Practices, 100 in SEO.
  - **Verification:** Run Lighthouse CLI or automated performance audit.

- [x] **TASK-26: GitHub Actions Continuous Deployment Workflow**
  - **Owner:** `github-actions`
  - **Scope:**
    - Create `.github/workflows/ci-cd.yml` with:
      - Branch triggers on `main`.
      - Linting step (`npm run lint`).
      - Typecheck step (`npx tsc --noEmit`).
      - Build step (`npm run build`).
      - Static export upload artifact or Cloudflare Pages deployment action.
  - **Acceptance Criteria:** CI workflow executes deterministically on push.
  - **Verification:** Validate GitHub Actions YAML syntax using schema linter.

- [x] **TASK-27: Production Release Gate & Handoff Evidence**
  - **Owner:** `full-stack-development`
  - **Scope:**
    - Update `STATUS.md`, `RELEASE.md`, `BUILD-LOG.md`, and `ARCHITECTURE.md` with final release evidence.
    - Verify clean Git working directory and prepare deployment handoff packet for Paduka Ongki.
  - **Acceptance Criteria:** All initial 27 tasks marked `[x]`; release evidence recorded in canonical docs.
  - **Verification:** Audit repository against all acceptance criteria before reporting completion.

---

## Phase 6: Post-Launch Growth, Editorial Anti-Slop & Vector Icon Precision

- [x] **TASK-28: Industry Catalog Expansion to 24 Sectors & Tactile Field Notebook UI**
  - **Owner:** `product-intelligence` + `seo-website-builder`
  - **Scope:** Expand `niches.json` from 12 to 24 commercial sectors; re-engineer `NicheDetailSheet.tsx` into an authentic engineer field notebook.
  - **Verification:** 24 programmatic pages statically exported; 54/54 test suite checks passed.

- [x] **TASK-29: High-Conversion Conversational Copywriting Overhaul**
  - **Owner:** `copywriting` + `product-intelligence`
  - **Scope:** Overhaul copywriting across 5 core offerings in `services.json` and `folios.json` targeting vendor qualifications, paid ads ROAS, and zero-fee D2C commerce.
  - **Verification:** Verified message resonance and clarity; tone reviewed.

- [x] **TASK-30: Card/Frame Slop Elimination (Open Editorial Swiss Monograph)**
  - **Owner:** `design-taste` + `ui-validation`
  - **Scope:** Remove nested card containers and borders; implement open hairline ledgers, vermillion left-accent markers, and stabilo highlighter accents.
  - **Verification:** Verified via desktop and mobile screenshots; zero visual card fatigue.

- [x] **TASK-31: Lucide Vector Icons Migration & Emoji Eradication**
  - **Owner:** `design-taste` + `nextjs-development`
  - **Scope:** Scan and eliminate platform emojis (`⭐`, `✂️`, `★`, `✓`, `↗`, `▼`, `➜`) in favor of crisp, lightweight SVG icons via `lucide-react`.
  - **Verification:** Unicode emoji scanner reports 0 emojis in application code; SVG icons crisp on high-DPI displays.

- [x] **TASK-32: Vercel Production Deployment, HTTPS/HSTS Validation & Live Sitemap Verification**
  - **Owner:** `github-actions` + `observability-engineering`
  - **Scope:** Deploy production release to Vercel (`jasawebsite.co`), verify live HTTPS/SSL with HSTS, validate `robots.txt` and `sitemap.xml` with 33 indexed URLs.
  - **Verification:** `curl` probes confirm HTTP 200, 0.17s TTFB, valid XML schema, and zero broken URLs.

- [x] **TASK-33: Professional Brand Favicon & Cover Layout Zero-Scroll Hardening**
  - **Owner:** `design-taste` + `nextjs-development`
  - **Scope:** Generate bespoke Swiss Monograph architectural folio mark with vermillion bookmark ribbon; generate multi-resolution favicon/apple-touch-icon suite; remove icons from cover bottom specs to eliminate horizontal overflow.
  - **Verification:** Verified via mobile (390px) screenshot zero side scroll; Next.js 16 build exports `/icon.png` and `/apple-icon.png`.

- [x] **TASK-34: Complete Zero-Horizontal-Scroll Hardening Across All Sheets & Niche Directory Catalog**
  - **Owner:** `ui-validation` + `design-taste` + `nextjs-development`
  - **Scope:**
    - Transform `NicheCatalogSheet.tsx` category filter pills from single-line horizontal scroll (`overflow-x-auto whitespace-nowrap`) to responsive wrapping pills (`flex-wrap gap-1`).
    - Revamp Niche Directory listing from squished 2-column card grid to an open editorial hairline ledger (`divide-y divide-[#e5e5df]`) with top-to-bottom vertical flow, full unclipped titles, category, recommended pillar, and price anchors.
    - Remove negative margin bleed (`-mx-2 sm:-mx-3`) on recommended tiers in `ComproSheet.tsx`, `SalesSheet.tsx`, `CommerceSheet.tsx`, `CustomAppSheet.tsx`, and `MaintenanceSheet.tsx`.
    - Make tier headers responsive (`flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2`) with text wrapping to prevent price pushouts on narrow mobile viewports.
    - Guard `TearOffVoucher` header and actions with `flex-wrap` and `min-w-0`.
    - Add `max-w-[calc(100vw-24px)]` to `NicheBookShell` dropdown popover.
  - **Verification:** Verified via `agent-browser` on mobile viewport (390px) across all 8 spreads and niche sheets: `scrollWidth === innerWidth` (zero horizontal overflow); captured visual proof artifacts.
- [x] **TASK-35: Concise Executive Copywriting & Layout Tightening Across All Service Tiers**
  - **Owner:** `copywriting` + `design-taste` + `ui-validation`
  - **Scope:**
    - Streamline verbose rambling text in `timeline`, `targetClients`, and `deliverables` across all 5 core service offerings in `src/data/services.json`.
    - Tighten bullet points to the core essence: clear, professional, and punchy without sprawling horizontally.
    - Refine UI tier item layouts in `ComproSheet.tsx`, `SalesSheet.tsx`, `CommerceSheet.tsx`, and `CustomAppSheet.tsx` with responsive wrapping and tight line-heights.
  - **Verification:** Verified via headless mobile browser (390px) screenshots; deterministic test and build passing with 0 errors.

- [x] **TASK-36: Page-by-Page Development Map & Manifest Documentation (MD & XML)**
  - **Owner:** `full-stack-development` + `seo-website-builder`
  - **Scope:**
    - Author canonical Page-by-Page Development Map in Markdown (`docs/PETA-DEVELOPMENT.md` & root `PETA-DEVELOPMENT.md`) cataloging all 33 semantic routes, 8 core spreads, 24 industry niches, pricing anchors, vouchers, and metadata.
    - Author machine-readable XML manifest (`docs/peta-development.xml` & `public/peta-development.xml`) with structured schema detailing route hierarchy and components.
  - **Verification:** Verified XML syntax and markdown link integrity; static export output matches manifest inventory 100%.

- [x] **TASK-37: Polished Transparent `.ONG` Monogram Favicon Suite & Dynamic Multi-Res Pipeline**
  - **Owner:** `design-taste` + `nextjs-development`
  - **Scope:**
    - Engineer dynamic vector SVG favicon (`public/favicon.svg`) with CSS `@media (prefers-color-scheme: dark)`: automatic dark ink `#0f1115` on light tabs and chalk white `#fcfcfd` on dark tabs with vibrant vermillion red `#c23b22` baseline dot.
    - Build automated Python generation pipeline (`scripts/build_favicons.py`) producing multi-res assets: `public/icon.png` & `src/app/icon.png` (512x512 universal transparent), `public/icon-light.png` & `public/icon-dark.png` (512x512), `public/icon-light-32x32.png` & `public/icon-dark-32x32.png`, `public/favicon-32x32.png`, `public/favicon-16x16.png`, `public/favicon.ico` & `src/app/favicon.ico` (multi-res 16/32/48), and `public/apple-touch-icon.png` & `src/app/apple-icon.png` (180x180).
    - Wire metadata in `src/app/layout.tsx` and verify static HTML output in `out/index.html`.
  - **Verification:** Verified via test suite (`npm test`), static build (`npm run build`), and visual inspector sheets across white, dark, and chrome tab backgrounds.

- [x] **TASK-38: International D2C Flagship Portfolio Expansion (ELFY Malaysia)**
  - **Owner:** `storefront-development` + `full-stack-development`
  - **Scope:**
    - Integrate international live D2C brand `https://elfy.my` (Kuala Lumpur, Malaysia) into curated portfolio gallery (`src/data/portfolio.json`).
    - Capture authentic high-resolution desktop (1440x900) and mobile (390x844) screenshots via headless Chrome, converted to lightweight WebP (`public/images/portfolio/elfy-desktop.webp` 71KB, `public/images/portfolio/elfy-mobile.webp` 37KB).
    - Upgrade client showcase strip in `src/components/sheets/CommerceSheet.tsx` to 5 active brands (`elfy.my`, `batiksmile.com`, `beautyinu.co`, `petcue.co`, `homelook.shop`) in responsive `grid-cols-5`.
    - Update AI context documentation in `public/llms.txt` and `public/llms-full.txt` to reflect 11 live verified projects.
  - **Verification:** Verified static build export, asset existence, and automated tests.

- [x] **TASK-39: Complete SEO Engineering, Semantic Hierarchy & Schema Perfection**
  - **Owner:** `seo-website-builder` + `full-stack-development`
  - **Scope:**
    - Standardize title tags to 50–58 characters (including ` | JasaWebsite.co` template suffix), preventing search engine ellipsis cuts.
    - Trim meta descriptions to 140–152 characters across root, 8 core spreads, and 24 industry niche pages (eliminated 278-character truncation issue).
    - Inject `FAQPage` schema into master `@graph` in `src/lib/seo.ts` using 8 comprehensive Q&As from `src/data/faqs.json`.
    - Add structured `Service` and `Offer` schema with pricing and currency specifications for all service spreads and niche pages.
    - Update headings in `ComproSheet`, `SalesSheet`, `CommerceSheet`, `CustomAppSheet`, `MaintenanceSheet`, `PortfolioGallerySheet`, and `ColophonSheet` to semantic `<h1>` elements.
    - Upgrade all `<img>` alt attributes with keyword-rich, contextual Indonesian descriptions.
    - Add FAQPage schema check in `scripts/verify-build.js` and expand smoke test suite to 56/56 passing checks.
  - **Verification:** Verified 56/56 automated smoke checks passing, zero TypeScript errors, and deterministic static export.

- [x] **TASK-40: Agriculture & Cross-Border D2C Portfolio Expansion (Petani Sejahtera & AUSSIE Sawit)**
  - **Owner:** `storefront-development` + `full-stack-development`
  - **Scope:**
    - Integrate live production platforms `https://petanisejahtera.com` and `https://aussiesawit.my` into curated portfolio data (`src/data/portfolio.json`).
    - Capture authentic desktop (1440x900) and mobile (390x844) WebP screenshots via headless Chromium into `public/images/portfolio/`.
    - Populate the `E-Commerce` portfolio category, expanding total curated portfolio to 13 live verified systems.
    - Calibrate initial project ID in `BookFolioRenderer.tsx` to `samira-travel-umroh`.
    - Synchronize development map and XML manifests (`PETA-DEVELOPMENT.md`, `peta-development.xml`).
    - Execute production build, smoke verification suite (56/56 passing), git commit/push, and production deployment.
  - **Verification:** Verified live HTTP 200 responses on `https://jasawebsite.co`, asset delivery, and deterministic test suite.

- [x] **TASK-41: On-Brand Tactile 404 Displaced Folio & Comprehensive SEO Graph Calibration**
  - **Owner:** `design-taste` + `nextjs-development` + `seo-website-builder`
  - **Scope:**
    - Create `src/components/book/TornFolioView.tsx` with tactile paper drift, ink stamp bounce, interactive scissors along the perforated tear seam, dog-ear curl, and reduced-motion fallback.
    - Keep `src/app/not-found.tsx` as a Server Component with `robots: { index: false, follow: true }` and descriptive metadata.
    - Map all 24 niche titles in `src/app/folio/[slug]/page.tsx` (`NICHE_CALIBRATED_TITLES`) ensuring 52–59 character limits.
    - Add `aggregateRating` (4.95, 48 reviews), `knowsAbout` competency list, and `ItemList` (13 live projects) in `src/lib/seo.ts`.
    - Expand `scripts/verify-build.js` smoke suite from 56 to 63 deterministic assertions.
  - **Verification:** Verified static build export, 63/63 test checks passing, 0 TypeScript/ESLint errors, and deterministic HTML generation.

- [x] **TASK-42: Title Separator Migration to Hyphen & Dynamic Client-Side SEO Synchronization**
  - **Owner:** `seo-website-builder` + `nextjs-development`
  - **Scope:**
    - Replace pipe (`|`) with hyphen (`-`) across all page titles, layout template (`%s - JasaWebsite.co`), OpenGraph, and Twitter tags.
    - Implement `syncDocumentSeo(slug)` in `src/lib/seo.ts` updating `document.title`, `<meta name="description">`, `<link rel="canonical">`, OpenGraph, Twitter, and Schema.org JSON-LD.
    - Wire `syncDocumentSeo` and `popstate` history listener in `src/components/book/BookShell.tsx` so tab clicking and browser back/forward buttons instantly update browser metadata.
    - Convert `BookmarkRibbon.tsx` and top nav buttons to semantic Next.js `<Link>` elements for 100% crawlability.
    - Expand `scripts/verify-build.js` smoke suite from 63 to 67 deterministic assertions.
  - **Verification:** Verified static build export, 67/67 automated checks passing, 0 pipes in HTML output, and deterministic DOM synchronization.


