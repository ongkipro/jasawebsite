# Project Instructions — Ong-OS Web Development Services

## Scope

This file contains repository-specific rules only. Global safety, Git, secret-handling, native-first, and verification policy comes from the user's canonical AI policy.

## Project

- Brand & Studio: **Ong-OS Web Development Services**
- Purpose: Full-stack website, e-commerce, and web application development platform presented as an interactive, tactile, SEO-friendly **Digital Brochure / Living Folio** (buku lembar-per-lembar).
- Positioning: "Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh" (Website & Digital Systems Built for Business Growth) — bukan sekadar web murah atau agensi template, melainkan professional full-stack engineering dengan harga masuk akal untuk pasar Indonesia.
- 5 Core Offerings:
  1. Company Profile Website (Kredibilitas, Portofolio & Inquiry B2B)
  2. Sales & Lead Generation Website (Dealer, Mesin, Properti, Kontraktor, B2B Traffic-to-Lead)
  3. E-Commerce Website (Direct Online Transactions, Catalog, Cart, Checkout, PG & Courier)
  4. Shopify Development (Custom Liquid 2.0, Indonesian Payments/Courier, Headless Hydrogen)
  5. Custom Web Application (Full-Stack Systems: CRM, ERP, HR, Portal, Dashboard, SaaS)
- Category: nextjs
- Stack: Next.js 16 (App Router, TypeScript), Tailwind CSS v4, Motion (Framer Motion), Static Site Generation (SSG).
- Database: `none` (Static typed JSON data stores under `src/data/` with TypeScript/Zod validation).
- Authentication: `none` (Conversion-first direct WhatsApp communication via tear-off perforated vouchers).
- Deployment target: Cloudflare Pages / Vercel Edge ($0 server cost).

## Sources of truth

- Accepted product behavior: `PRD.md` (canonical entrypoint to `docs/spec/02-PRD.md`).
- Sole executable work queue: `TASKS.md`.
- Current implementation handoff and semantic review state: `STATUS.md`.
- Accepted technical and product constraints: `DECISIONS.md`.
- Full architecture decisions: `docs/adr/ADR-NNNN-<slug>.md` (indexed in `DECISIONS.md`).
- Current release boundary & rollback evidence: `RELEASE.md`.
- Post-deploy runtime health contract: `OBSERVABILITY.md`.
- Execution evidence and resume projection: `.delivery/`.
- Durable implementation notes: `BUILD-LOG.md`.
- Architecture and trust boundaries: `ARCHITECTURE.md`.

When design and implementation diverge, `ARCHITECTURE.md` records what the code actually does and outranks a pre-implementation `PLAN.md`.

## Engineering Invariants & Coding Guidelines

1. **Digital Brochure Architecture & 100% SEO-Friendly SSG:**
   - The platform MUST deliver a tactile book / brochure experience (sheet by sheet) while guaranteeing 100% search engine discoverability.
   - Every "sheet" (or spread) MUST have its own semantic canonical URL route (`/folio/[slug]`), pre-rendered at build time with `generateStaticParams()`.
   - Never embed content inside monolithic Canvas or unindexable PDF viewers. Content MUST render as semantic HTML5 (`<article>`, `<h1>`-`<h6>`, `<p>`, Schema.org JSON-LD) in React Server Components (RSC).

2. **Tactile Motion Engineering (GPU Hardware Accelerated):**
   - Book interactions (3D page turns, spine shadow sweeps, corner dog-ear curls, bookmark ribbons) MUST use Motion (Framer Motion) with GPU-accelerated CSS properties (`transform`, `opacity`).
   - ZERO layout reflow or jank (60–120 FPS target).
   - MUST respect `prefers-reduced-motion` media queries: fallback immediately to instant cross-fade if the user has motion sensitivities.
   - Mobile Viewport: Natural thumb-driven swipe gesture (`drag="x"` with spring physics).
   - Desktop Viewport: Two-page open spread (`SpreadView`) with realistic central spine crease shadow.

3. **5 Core Services & Modular Data Store:**
   - Data for the 5 services, tiers (Starter, Business/Growth ⭐, Pro/Corporate, Enterprise), 30+ industry niche sheets, portfolio case studies, and FAQs MUST reside in strictly typed static JSON data (`src/data/*.json` and `src/data/siteConfig.ts`).
   - Schemas are validated via TypeScript interfaces / Zod schemas in `src/types/`.

4. **Performance First (Lighthouse 100 Target):**
   - First Contentful Paint (FCP) < 0.3s, Cumulative Layout Shift (CLS) = 0.
   - Zero image bloat: modern WebP/AVIF formats with explicit width/height.
   - Zero CSS bloat: Tailwind CSS v4 utilities only.

5. **Direct-to-WhatsApp Tear-Off Conversion Funnel:**
   - Every service tier and niche sheet MUST feature a tactile tear-off voucher (*perforated coupon*) with starting price anchors and pre-filled WhatsApp routing.
   - All CTAs route through `src/lib/whatsapp.ts` generating pre-filled, contextual messages (identifying the specific service, tier, niche, and UTM referral tags).

6. **Programmatic SEO & Rich Structured Data:**
   - Every folio sheet MUST output complete metadata (`title`, `description`, `canonical`, `openGraph`, `twitter`).
   - Every service and niche sheet MUST inject valid Schema.org JSON-LD markup (`ProfessionalService`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`).



<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
