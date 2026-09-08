# Architecture & Engineering Invariants — Ong-OS Living Digital Brochure (`ongki.pro`)

**Last Updated:** 2026-09-08  
**Brand & Studio:** Ong-OS Web Development Services  
**Master Tagline:** *"Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh"*  
**Stack:** Next.js 16 (App Router, React 19, TypeScript), Tailwind CSS v4, Motion (Framer Motion), SSG Export (`output: 'export'`), Lucide React  
**Hosting Infrastructure:** Cloudflare Pages / Vercel Edge ($0 Server Cost, Global Edge CDN, sub-50ms TTFB)  

---

## 1. System Topology & Dual-Layer Architecture

The platform adopts a **Dual-Layer Architecture**:
1. **Semantic Server Layer (RSC):** Every folio sheet is a standalone canonical route (`/folio/[slug]`) pre-rendered to semantic HTML5 (`<article>`, `<h1>`-`<h6>`, `<p>`) at build time via `generateStaticParams()`. Search engine bots (Googlebot, Bing) crawl 100% of the content without executing client JavaScript.
2. **Tactile Client Presentation Layer (Motion Shell):** Client-side React components wrap the semantic content inside an interactive, GPU-accelerated book simulator featuring 3D sheet turning, realistic center spine crease depth, mobile thumb swipe physics, bookmark ribbons, and perforated tear-off vouchers.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                SYSTEM ARCHITECTURE MAP                                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   [ Client Browser / Mobile / Crawler ] ── HTTPS ──> [ Cloudflare Global Edge CDN ]    │
│                                                                │                       │
│                                                    [ Static HTML/CSS Edge Cache ]      │
│                                                    (Pre-rendered HTML per Sheet)       │
│                                                    (Sub-50ms TTFB, 100/100 Lighthouse) │
│                                                                │                       │
│  ┌─────────────────────────────────────────────────────────────┴────────────────────┐  │
│  │                    Next.js 16 App Router SSG Content Engine                      │  │
│  ├──────────────────────────────────────────────────────────────────────────────────┤  │
│  │  • File-Based Semantic Sheet Routes:                                             │  │
│  │    ├── `app/page.tsx` (Front Cover Folio & Master Dossier Entrypoint)            │  │
│  │    ├── `app/folio/[slug]/page.tsx` (Dynamic SSG Folio Sheets via static params)  │  │
│  │    │     - `folio/cover` (Front Cover & Table of Contents)                       │  │
│  │    │     - `folio/company-profile` (Pillar 01: Kredibilitas & Reposisi B2B)      │  │
│  │    │     - `folio/sales-website` (Pillar 02: Traffic to Leads Dealer/Mesin/Prop) │  │
│  │    │     - `folio/ecommerce-shopify` (Pillar 03 & 04: Direct Sales & Shopify)    │  │
│  │    │     - `folio/custom-web-app` (Pillar 05: Workflow Automation, CRM & Portal) │  │
│  │    │     - `folio/portfolio` (Galeri Portofolio & Case Studies Showcase)         │  │
│  │    │     - `folio/maintenance-care` (Retainer Care Plans & Add-On Modules)       │  │
│  │    │     - `folio/colophon` (30+ Industry Directory, Studio Colophon & Back)     │  │
│  │    │     - `folio/niche-[niche]` (30+ Individual Programmatic SEO Sheets)        │  │
│  │    ├── `app/sitemap.ts` (Dynamic XML Sitemap Generator)                          │  │
│  │    └── `app/robots.ts` (Search Engine Directives)                                │  │
│  │                                                                                  │  │
│  │  • Tactile Book Motion Shell (`src/components/book/`):                           │  │
│  │    ├── `BookShell.tsx` (State manager, keyboard listeners, touch swipe engine)   │  │
│  │    ├── `SpreadView.tsx` (2-Page Open Book Desktop Layout with Spine Crease)      │  │
│  │    ├── `SingleSheetView.tsx` (Mobile Touch-Swipeable Folio Sheet with Physics)   │  │
│  │    ├── `SheetTurner.tsx` (Motion 3D rotateY & perspective transition engine)     │  │
│  │    ├── `SpineCrease.tsx` (Realistic central book binding gradient shadow)        │  │
│  │    ├── `BookmarkRibbon.tsx` (Vertical edge tabs for instant section jumping)     │  │
│  │    ├── `DogEarPeel.tsx` (Interactive corner fold hover affordance)               │  │
│  │    └── `TearOffVoucher.tsx` (Perforated WhatsApp coupon with ink stamp)          │  │
│  │                                                                                  │  │
│  │  • Semantic Folio Content Sheets (`src/components/sheets/`):                     │  │
│  │    ├── `CoverSheet.tsx`, `TocSheet.tsx`, `ComproSheet.tsx`, `SalesSheet.tsx`     │  │
│  │    ├── `CommerceSheet.tsx`, `CustomAppSheet.tsx`, `PortfolioGallerySheet.tsx`    │  │
│  │    ├── `MaintenanceSheet.tsx`, `NicheCatalogSheet.tsx`, `ColophonSheet.tsx`      │  │
│  │                                                                                  │  │
│  │  • Static Typed Data Layer (`src/data/`):                                        │  │
│  │    ├── `siteConfig.ts`, `folios.json`, `services.json`, `portfolio.json`         │  │
│  │    ├── `niches.json` (30+ Industries data, copy, Schema markup)                  │  │
│  │    └── `faqs.json` (Architectural and business FAQs)                             │  │
│  │                                                                                  │  │
│  │  • Warm Swiss Editorial UI Tokens:                                               │  │
│  │    ├── Tailwind CSS v4 (Warm paper #fbfbfa, charcoal #111111, border #e5e5e0)    │  │
│  │    ├── Lucide React (Clean structural geometric icons)                           │  │
│  │    └── Motion (Hardware-accelerated GPU 3D transforms)                           │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                        │
│                                     │ (1-Tap Perforated Voucher Click)                 │
│                                     ▼                                                  │
│                    [ Direct WhatsApp Business Protocol ]                               │
│                      `https://wa.me/62812xxxx?text=URL_ENCODED_INTENT`                 │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Directory Structure & File Hierarchy

```text
jasawebsite/
├── .github/
│   └── workflows/
│       └── ci-cd.yml                 # Automated build, lint, and static export CI
│
├── docs/
│   ├── spec/                         # Traceable 10-Document Specification Suite
│   └── adr/                          # Architecture Decision Records
│
├── public/                           # Static assets (favicons, og-image, paper noise)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Master HTML5 document, fonts, JSON-LD Schema
│   │   ├── page.tsx                  # Front Cover Folio (Route /)
│   │   ├── folio/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx          # Dynamic SSG Sheet Pre-Renderer
│   │   │       └── layout.tsx        # Folio viewport wrapper
│   │   ├── sitemap.ts                # Programmatic XML sitemap
│   │   ├── robots.ts                 # Search crawler rules
│   │   └── globals.css               # Tailwind CSS v4 + Warm Swiss Monograph tokens
│   │
│   ├── components/
│   │   ├── book/                     # Tactile Book Motion Shell ('use client')
│   │   │   ├── BookShell.tsx         # Master state controller & URL synchronizer
│   │   │   ├── SpreadView.tsx        # Desktop two-page open spread
│   │   │   ├── SingleSheetView.tsx   # Mobile swipeable sheet
│   │   │   ├── SheetTurner.tsx       # 3D rotateY perspective transition
│   │   │   ├── SpineCrease.tsx       # Center folding shadow
│   │   │   ├── BookmarkRibbon.tsx    # Vertical tab index
│   │   │   ├── DogEarPeel.tsx        # Corner curl hover effect
│   │   │   ├── FolioCounter.tsx      # Mechanical folio index indicator
│   │   │   └── TearOffVoucher.tsx    # Perforated dashed coupon with micro-jiggle
│   │   │
│   │   ├── sheets/                   # Semantic HTML Sheet Content (Server Components)
│   │   │   ├── CoverSheet.tsx        # Folio 00: Monumental typography & credentials
│   │   │   ├── TocSheet.tsx          # Table of Contents directory
│   │   │   ├── ComproSheet.tsx       # Pillar 01: Company Profile Website
│   │   │   ├── SalesSheet.tsx        # Pillar 02: Sales & Lead Gen Website
│   │   │   ├── CommerceSheet.tsx     # Pillar 03 & 04: E-Commerce & Shopify Flagship
│   │   │   ├── CustomAppSheet.tsx    # Pillar 05: Custom Web Apps & Systems
│   │   │   ├── PortfolioGallerySheet.tsx # Spread 05: Filterable Curated Portfolio Deck
│   │   │   ├── MaintenanceSheet.tsx  # Spread 06: Care Retainers & Add-Ons
│   │   │   ├── NicheCatalogSheet.tsx # Spread 07: 30+ Niches Directory
│   │   │   └── ColophonSheet.tsx     # Back Cover & Engineering Manifesto
│   │   │
│   │   └── ui/                       # Reusable UI Primitives
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── InkStamp.tsx          # Certified studio wax/ink seal
│   │       └── PortfolioModal.tsx    # Full-screen Lightbox Gallery Modal
│   │
│   ├── data/                         # Static Typed JSON Data Stores
│   │   ├── siteConfig.ts             # Brand meta, WhatsApp number, domains
│   │   ├── folios.json               # Ordered sequence of core spreads
│   │   ├── services.json             # 5 Core Offerings, tiers, deliverables
│   │   ├── portfolio.json            # Curated case studies & proof metrics
│   │   ├── niches.json               # 30+ Industry verticals & Schema types
│   │   └── faqs.json                 # Architectural and business FAQs
│   │
│   ├── types/                        # Strict TypeScript Domain Schemas
│   │   ├── folio.ts
│   │   ├── service.ts
│   │   ├── portfolio.ts
│   │   ├── niche.ts
│   │   └── config.ts
│   │
│   └── lib/                          # Pure Utilities
│       ├── whatsapp.ts               # Contextual WhatsApp URL builder
│       ├── seo.ts                    # Schema.org JSON-LD graph builder
│       └── cn.ts                     # Class name merging utility (clsx + twMerge)
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 3. Anti-AI Slop Engineering Guardrails

To prevent the generic, lazy, and superficial tropes common in AI-assisted codebases, Ong-OS enforces strict rules across three domains:

### A. Visual & Aesthetic Guardrails (Anti-Template Slop)
1. **NO Neon Glow Blobs or Purple SaaS Gradients:**
   - STRICTLY FORBIDDEN: Glowing blurred mesh circles (`blur-3xl bg-purple-500/20`), floating isometric shapes, or dark cyber-futuristic templates.
   - MANDATORY: Warm Swiss Monograph editorial aesthetic. High-contrast typography, archival paper tones (`#fbfbfa`), deep charcoal ink (`#111111`), tactile hairline rules (`#e5e5e0`), red vermillion ink stamp accents (`#c23b22`), and subtle central spine shadow depth.
2. **NO Cheesy AI-Generated Stock Imagery:**
   - FORBIDDEN: Hallucinated robots shaking human hands, fake smiling business people in suits with distorted fingers.
   - MANDATORY: Clean architectural wireframe schematics, crisp device mockups (MacBook & iPhone frames), and authentic project screenshots.
3. **Realistic Tactile Affordances:**
   - Perforated borders use CSS dashed strokes (`border-dashed border-charcoal/30`) with scissor cut guides (`✂️`).
   - Corners feature interactive curl affordance (`DogEarPeel.tsx`) inviting natural page turns.

### B. Editorial & Copywriting Guardrails (Anti-Buzzword Slop)
1. **NO Empty Buzzwords:**
   - STRICTLY BANNED WORDS: *"Empower your brand"*, *"Unlock unprecedented growth"*, *"Revolutionary synergy"*, *"Seamlessly integrated cutting-edge solutions"*, *"Next-level digital transformation"*.
2. **Punchy, Direct Business Outlines:**
   - Every paragraph speaks directly to concrete business realities: *biaya perolehan prospek (CPL)*, *konversi checkout*, *akurasi tracking CAPI*, *kecepatan akses di ponsel 4G*, *bebas ketergantungan komisi marketplace 15%*.
3. **Honest Starting Price Anchors:**
   - Transparent price anchors (*Company Profile mulai Rp 2,9 jt, Sales Website mulai Rp 5,9 jt, E-Commerce mulai Rp 7,9 jt, Shopify mulai Rp 3,9 jt, Custom Web App mulai Rp 15 jt+*).
   - No hidden pricing traps or misleading "Hubungi Kami untuk Harga" on basic tiers.

### C. Code & Performance Guardrails (Lazy Senior Dev Discipline)
1. **Zero Library Bloat (YAGNI):**
   - NO heavy Canvas-based flipbook packages (`turn.js`, `pdf.js`, `stPageFlip`) that break SEO and bundle size.
   - NO state management overkill (Redux, MobX, Zustand) for simple page index navigation. React local state + Motion URL synchronization is 100% sufficient.
   - NO axios, lodash, or moment.js. Use native `fetch`, native JavaScript array methods, and native `Intl.NumberFormat`.
2. **GPU-Accelerated Motion Invariant:**
   - All 3D flips and swipe gestures strictly animate `transform: rotateY()` and `opacity`.
   - ZERO animating of `width`, `height`, `margin`, or `top` (which trigger CPU layout recalculation and frame drops).
   - Strict `prefers-reduced-motion` compliance: immediate cross-fade fallback for users with motion sensitivity.
3. **100% Static Pre-Rendering (SSG):**
   - Every sheet has a pre-rendered HTML file output in `out/`.
   - Build-time deterministic static exports mean $0 server hosting bills on Cloudflare Pages.
