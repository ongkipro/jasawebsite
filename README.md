# JasaWebsite.co by ONG · Living Digital Brochure (`jasawebsite.co`)

Full-stack website, e-commerce, and digital systems development platform presented as an **Interactive, Tactile, SEO-Friendly Living Digital Brochure (Buku Lembar-per-Lembar)**.

**Master Tagline:** *"Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh"*  
*(Website & Digital Systems Built for Business Growth)*  

Built with **Next.js 16 App Router (`output: 'export'`)**, **Tailwind CSS v4**, **Motion (Framer Motion)**, strict TypeScript, static Programmatic SEO (pSEO), and direct-to-WhatsApp conversion via **Tear-Off Perforated Vouchers**.

---

## ⚡ Core Value Propositions

- **The Living Digital Brochure:** Antarmuka taktil buku fisik lembar-per-lembar (2-page open spread di desktop dengan *spine crease shadow*, swipeable single-sheet di mobile dengan gestur thumb swipe `drag="x"`, bookmark ribbon tabs, and corner dog-ear curl).
- **100% SEO-Friendly (Zero Unindexable Canvas):** Tidak seperti flipbook biasa yang terkunci di PDF/Canvas, setiap lembar di Ong-OS adalah URL HTML mandiri (`/folio/[slug]`) dengan Schema.org JSON-LD lengkap yang di-prerender saat build time.
- **5 Core Solution Pillars:**
  1. *Company Profile Website* (Kredibilitas, Portofolio & Inquiry B2B — Mulai Rp 2,9 jt)
  2. *Sales & Lead Generation Website* (Mesin Konversi Iklan Meta/Google ke Leads WhatsApp — Mulai Rp 3,5 jt)
  3. *Toko Online Mandiri* (Bebas Potongan Komisi 10% Marketplace, 100% Hak Milik Kode — Mulai Rp 3,9 jt)
  4. *Shopify Custom Storefront* (Tema Mewah, QRIS Otomatis & Cek Ongkir Kurir Se-Indonesia — Mulai Rp 6,9 jt)
  5. *Custom Web Application & Systems* (CRM, Mini ERP, Portal Klien, Dashboard — Mulai Rp 15 jt+)
  6. *Supporting: Maintenance Care & Ads Scaling* (Proteksi Performa, Ads LP & Geo-Targeting — Mulai Rp 2,5 jt/bln)
- **Live Production URL:** [https://jasawebsite.co](https://jasawebsite.co) (Vercel Edge Singapore, Sub-0.3s TTFB)
- **Zero Emoji Slop:** Menggunakan 100% vector SVG icons via `lucide-react` untuk tampilan presisi dan profesional di semua sistem operasi.
- **Open Editorial Layout:** Menghilangkan kotak-kotak template AI (card fatigue), beralih ke layout buku monograf Swiss dengan pembatas hairline dan stabilo highlighter.
- **Curated Portfolio Showcase:** Galeri portofolio terkurasi dengan mockup preview responsif (Desktop/Mobile) dan metrik bisnis riil.
- **Hardware-Accelerated 3D Motion (60–120 FPS):** Transisi pembalik lembar 3D super mulus menggunakan Motion dengan fallback `prefers-reduced-motion`.
- **Sub-Second Performance SLA:** SSG murni, First Contentful Paint (< 0.3s), CLS = 0, dan skor 100/100 Core Web Vitals.
- **100% Client Code Ownership:** Repositori GitHub diserahkan penuh tanpa ketergantungan agensi.
- **Tear-Off WhatsApp Vouchers:** Tombol CTA berdesain kupon sobek fisik dengan intent pesan kontekstual sesuai lembar folio yang sedang dibaca.
- **Programmatic SEO (pSEO):** 24 direktori industri komersial dikompilasi sebagai lembar brosur spesifik dengan Schema markup terstruktur.

---

## 🛠️ Tech Stack & Invariants

- **Framework:** Next.js 16 (App Router, Static Site Generation / `output: 'export'`)
- **Styling:** Tailwind CSS v4 (Warm Swiss Monograph Palette: `#fbfbfa` paper, `#111111` ink, `#e5e5e0` hairline)
- **Animation Engine:** Motion (Framer Motion, GPU-accelerated CSS transforms)
- **Icons:** Lucide React
- **Language:** Strict TypeScript (Target ES2022)
- **Data Layer:** Strictly typed static JSON (`src/data/*.json`)
- **Structured Data:** Automated Schema.org JSON-LD (`ProfessionalService`, `LocalBusiness`, `FAQPage`)
- **Deployment:** Cloudflare Pages / Vercel Edge ($0 Server Cost, Sub-50ms TTFB)

---

## 📂 Project Structure

```text
jasawebsite/
├── docs/
│   ├── spec/                        # Canonical Specification Suite (10 Documents)
│   │   ├── 01-BRD.md                # Business Requirements, Positioning & Revenue Ladder
│   │   ├── 02-PRD.md                # Functional PRD for Tactile Brochure Sheets & Services
│   │   ├── 04-SYSTEM-ARCHITECTURE.md# Next.js 16 SSG + Motion Architecture & Anti-AI Slop
│   │   ├── 05-DESIGN-BLUEPRINT.md   # Folio Spreads & Sheets Layout Schematics
│   │   ├── 06-CONTENT-COPYWRITING-PACK.md # Editorial Copywriting Pack & Niche Scripts
│   │   ├── 07-WHATSAPP-CONVERSION-FUNNEL.md # Tear-off Voucher Lead Engine & UTM Routing
│   │   ├── 08-PROGRAMMATIC-SEO-ENGINE.md    # 30+ Folio Niche Sheets & Schema Markup
│   │   ├── 10-DESIGN-SYSTEM-UIUX.md # Warm Swiss Monograph & 10 Tactile Book UI Patterns
│   │   ├── 11-PRICING-PACKAGING-MODEL.md    # Dual-Layer Pricing Matrix & SOW Tiers
│   │   └── CONTEXT-RECORD.md        # Architecture Context & Staging Record
│   └── audit/
│       ├── jasawebsite.md           # Competitor Teardown
│       └── images/                  # Audit References
│
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root HTML5 Shell, Fonts & Master Schema.org
│   │   ├── page.tsx                 # Front Cover Folio (`/`)
│   │   ├── folio/
│   │   │   └── [slug]/page.tsx      # Dynamic SSG Folio Sheets (`generateStaticParams`)
│   │   ├── sitemap.ts               # Dynamic XML Sitemap Generator
│   │   ├── robots.ts                # Search Crawler Directives
│   │   └── globals.css              # Tailwind CSS v4 + Warm Swiss Monograph Tokens
│   │
│   ├── components/
│   │   ├── book/                    # Tactile Book Motion Shell ('use client')
│   │   │   ├── BookShell.tsx        # Master book controller & keyboard/touch listeners
│   │   │   ├── SpreadView.tsx       # 2-Page open book desktop layout with spine shadow
│   │   │   ├── SingleSheetView.tsx  # Mobile swipeable sheet with gesture physics
│   │   │   ├── SheetTurner.tsx      # 3D rotateY perspective animation engine
│   │   │   ├── SpineCrease.tsx      # Realistic center book binding shadow
│   │   │   ├── BookmarkRibbon.tsx   # Quick jump section tabs on right edge
│   │   │   ├── DogEarPeel.tsx       # Corner curl hover affordance
│   │   │   ├── FolioCounter.tsx     # Mechanical folio index indicator
│   │   │   └── TearOffVoucher.tsx   # Perforated CTA voucher with micro-jiggle
│   │   │
│   │   ├── sheets/                  # Semantic HTML Sheets (Server Components)
│   │   │   ├── CoverSheet.tsx       # Folio 00: Monumental cover & manifesto
│   │   │   ├── TocSheet.tsx         # Table of contents index
│   │   │   ├── ComproSheet.tsx      # Pillar 01: Company Profile Website
│   │   │   ├── SalesSheet.tsx       # Pillar 02: Sales & Lead Gen Website
│   │   │   ├── CommerceSheet.tsx    # Pillar 03 & 04: E-Commerce & Shopify Flagship
│   │   │   ├── CustomAppSheet.tsx   # Pillar 05: Custom Web Apps & Systems
│   │   │   ├── PortfolioGallerySheet.tsx # Spread 05: Curated Portfolio Showcase
│   │   │   ├── MaintenanceSheet.tsx # Spread 06: Care Retainers & Add-Ons
│   │   │   ├── NicheCatalogSheet.tsx# Spread 07: 30+ Niches Directory
│   │   │   └── ColophonSheet.tsx    # Back Cover & Engineering Invariants
│   │   │
│   │   └── ui/                      # Atoms & Primitives
│   │       ├── Button.tsx           # Studio action button
│   │       ├── Badge.tsx            # Technical index badges
│   │       ├── InkStamp.tsx         # Certified studio wax/ink seal
│   │       └── PortfolioModal.tsx   # Full-screen Lightbox Gallery Modal
│   │
│   ├── data/                        # Static JSON Data Stores
│   │   ├── siteConfig.ts            # Global Site Metadata & WhatsApp Routing
│   │   ├── folios.json              # Core brochure sheets metadata & sequential order
│   │   ├── services.json            # 5 Core Offerings, proposal tiers & pricing
│   │   ├── portfolio.json           # Curated Case Studies & Impact Metrics
│   │   ├── niches.json              # 30+ Industry Verticals Data & Schema
│   │   └── faqs.json                # Categorized Q&A
│   │
│   ├── types/                       # Strict TypeScript Interfaces
│   │   ├── folio.ts, service.ts, portfolio.ts, niche.ts, config.ts
│   │
│   └── lib/                         # Pure Utilities
│       ├── whatsapp.ts              # Contextual WhatsApp URL & UTM generator
│       ├── seo.ts                   # JSON-LD Schema.org builder
│       └── cn.ts                    # Class name merging utility (clsx + twMerge)
│
├── ARCHITECTURE.md                  # System Boundaries & Anti-AI Slop Guardrails
├── DECISIONS.md                     # Technical Decision Register
├── PRD.md                           # Product Requirements Entrypoint
├── TASKS.md                         # Full-Stack Development Queue (27 Tasks)
├── STATUS.md                        # Project Delivery State Machine
├── BUILD-LOG.md                     # Durable Implementation Log
├── RELEASE.md                       # Production Release Manifest
├── OBSERVABILITY.md                 # Health Probes & Monitoring Contract
└── PETA-DEVELOPMENT.md              # Page-by-Page Development Map (Markdown & XML)
```

---

## 📋 Governance & Specification Reference

- **Product Requirements:** [`docs/spec/02-PRD.md`](docs/spec/02-PRD.md) (linked via [`PRD.md`](PRD.md))
- **System Architecture:** [`docs/spec/04-SYSTEM-ARCHITECTURE.md`](docs/spec/04-SYSTEM-ARCHITECTURE.md) & [`ARCHITECTURE.md`](ARCHITECTURE.md)
- **Design System & UI/UX:** [`docs/spec/10-DESIGN-SYSTEM-UIUX.md`](docs/spec/10-DESIGN-SYSTEM-UIUX.md)
- **Folio Spreads Blueprint:** [`docs/spec/05-DESIGN-BLUEPRINT.md`](docs/spec/05-DESIGN-BLUEPRINT.md)
- **Copywriting Pack:** [`docs/spec/06-CONTENT-COPYWRITING-PACK.md`](docs/spec/06-CONTENT-COPYWRITING-PACK.md)
- **Pricing & SOW Model:** [`docs/spec/11-PRICING-PACKAGING-MODEL.md`](docs/spec/11-PRICING-PACKAGING-MODEL.md)
- **WhatsApp Funnel:** [`docs/spec/07-WHATSAPP-CONVERSION-FUNNEL.md`](docs/spec/07-WHATSAPP-CONVERSION-FUNNEL.md)
- **Programmatic SEO:** [`docs/spec/08-PROGRAMMATIC-SEO-ENGINE.md`](docs/spec/08-PROGRAMMATIC-SEO-ENGINE.md)
- **Competitor Audit:** [`docs/audit/jasawebsite.md`](docs/audit/jasawebsite.md)
