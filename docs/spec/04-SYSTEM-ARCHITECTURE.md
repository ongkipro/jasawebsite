# 04. System Architecture & Technical Specification
## Ong-OS Web Development Services (`ongki.pro`) · Next.js 16 SSG + Motion Digital Brochure Engine

---

### 1. High-Level Architecture Topology

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              SYSTEM ARCHITECTURE TOPOLOGY                              │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│   [ Client Device / Mobile ] ─── HTTPS / HTTP/3 ───> [ Cloudflare Global Edge (300+ PoPs)│
│                                                              │                         │
│                                                     [ Static Asset Cache ]             │
│                                                     (Pre-rendered HTML, Sub-50ms TTFB) │
│                                                     (100/100 Core Web Vitals)          │
│                                                              │                         │
│  ┌───────────────────────────────────────────────────────────┴──────────────────────┐  │
│  │                     Next.js 16 App Router SSG Content Engine                     │  │
│  ├──────────────────────────────────────────────────────────────────────────────────┤  │
│  │  • File-Based Semantic Routes (App Router):                                      │  │
│  │    ├── `app/page.tsx` (Front Cover Folio & Master Dossier Entrypoint)            │  │
│  │    ├── `app/folio/[slug]/page.tsx` (Dynamic SSG Folio Sheets / Spreads)          │  │
│  │    │     - `folio/01-manifesto`                                                  │  │
│  │    │     - `folio/02-sow-capabilities`                                           │  │
│  │    │     - `folio/03-shopify-d2c`                                                │  │
│  │    │     - `folio/04-platform-migration`                                         │  │
│  │    │     - `folio/05-case-studies`                                               │  │
│  │    │     - `folio/06-niche-directory`                                            │  │
│  │    │     - `folio/niche-[niche]` (30+ Industry Verticals)                         │  │
│  │    ├── `app/sitemap.ts` (Dynamic XML Sitemap Generator)                          │  │
│  │    └── `app/robots.ts` (Search Engine Directives)                                │  │
│  │                                                                                  │  │
│  │  • Tactile Book & Motion Container (`src/components/book/`):                     │  │
│  │    ├── `BookShell.tsx` (Root client wrapper with keyboard arrow listener)        │  │
│  │    ├── `SpreadView.tsx` (2-Page Open Book Desktop Layout with Spine Crease)      │  │
│  │    ├── `SingleSheetView.tsx` (Mobile Touch-Swipeable Folio Sheet with Physics)   │  │
│  │    ├── `SheetTurner.tsx` (Motion 3D rotateY & perspective transition engine)     │  │
│  │    ├── `BookmarkRibbon.tsx` (Interactive quick jump tabs on book right edge)     │  │
│  │    ├── `DogEarPeel.tsx` (Corner hover fold effect & affordance)                  │  │
│  │    └── `TearOffVoucher.tsx` (Perforated WhatsApp coupon with ink stamp)          │  │
│  │                                                                                  │  │
│  │  • Static Typed Data Layer (`src/data/`):                                        │  │
│  │    ├── `folios.json` (Core brochure sheets metadata, order, titles, slugs)       │  │
│  │    ├── `capabilities.json` (5 Scope of Work Archetypes)                          │  │
│  │    ├── `niches.json` (30+ Industries data, copy, features, Schema markup)       │  │
│  │    ├── `portfolio.json` (Case studies, images, impact metrics)                   │  │
│  │    ├── `faqs.json` (Categorized architectural FAQs)                              │  │
│  │    └── `siteConfig.ts` (Master metadata, WhatsApp routing number, canonical base)│  │
│  │                                                                                  │  │
│  │  • Warm Swiss Editorial UI System:                                               │  │
│  │    ├── Tailwind CSS v4 (Warm off-white paper #fbfbfa, charcoal ink #111111)      │  │
│  │    ├── Lucide React (Clean structural icons)                                     │  │
│  │    └── Motion (Hardware-accelerated GPU 3D page curl & sheet flip)               │  │
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

### 2. Static Dynamic Sheet Pre-Rendering (`generateStaticParams`)

Setiap lembar buku dikompilasi secara deterministik menjadi HTML statis pada saat `next build`:
```typescript
// app/folio/[slug]/page.tsx
import { folios } from '@/data/folios.json';
import { niches } from '@/data/niches.json';

export async function generateStaticParams() {
  const coreFolios = folios.map((f) => ({ slug: f.slug }));
  const nicheFolios = niches.map((n) => ({ slug: `niche-${n.slug}` }));
  return [...coreFolios, ...nicheFolios];
}
```
**Karakteristik Kunci:**
- Hasil kompilasi berupa file HTML murni di folder `.next/standalone` atau `out/` untuk Cloudflare Pages Edge.
- Zero database query pada saat user atau bot Google membuka halaman.
- Waktu respon (TTFB) < 50ms di seluruh dunia.

---

### 3. Component Hierarchy & Separation of Concerns

```text
src/
├── app/
│   ├── layout.tsx                    # Root HTML5 shell, Google Fonts, JSON-LD Master Schema
│   ├── page.tsx                      # Front Cover Folio
│   ├── folio/
│   │   └── [slug]/
│   │       ├── page.tsx              # Server Component rendering semantic HTML sheet
│   │       └── layout.tsx            # Folio frame layout (BookShell client wrapper)
│   ├── sitemap.ts                    # Dynamic XML sitemap
│   └── robots.ts                     # Crawler directives
│
├── components/
│   ├── book/                         # Tactile Book Motion System ('use client')
│   │   ├── BookShell.tsx             # Master book container, keyboard & touch listeners
│   │   ├── SpreadView.tsx            # Two-page open spread layout (Desktop)
│   │   ├── SingleSheetView.tsx       # Single-sheet swipeable card (Mobile)
│   │   ├── SheetTurner.tsx           # Motion 3D perspective turn engine
│   │   ├── SpineCrease.tsx           # Center folding shadow with gradient depth
│   │   ├── BookmarkRibbon.tsx        # Vertical edge tabs for rapid section jumping
│   │   ├── FolioCounter.tsx          # Rolling mechanical page number [HAL. 03/12]
│   │   ├── DogEarPeel.tsx            # Corner curl hover affordance
│   │   └── TearOffVoucher.tsx        # Perforated CTA voucher with stamp imprint
│   │
│   ├── sheets/                       # Semantic HTML Sheet Content (Server Components)
│   │   ├── CoverSheet.tsx            # Front cover with studio embossing & manifesto
│   │   ├── TocSheet.tsx              # Table of contents index
│   │   ├── ComproSheet.tsx           # Pillar 01: Company Profile Website
│   │   ├── SalesSheet.tsx            # Pillar 02: Sales & Lead Generation Website
│   │   ├── CommerceSheet.tsx         # Pillar 03 & 04: E-Commerce & Shopify Flagship
│   │   ├── CustomAppSheet.tsx        # Pillar 05: Custom Web Apps & Systems
│   │   ├── PortfolioGallerySheet.tsx # Spread 05: Galeri Portofolio & Case Studies
│   │   ├── MaintenanceSheet.tsx      # Spread 06: Maintenance Care & Add-Ons
│   │   ├── NicheCatalogSheet.tsx     # 30+ Industry vertical directory
│   │   └── ColophonSheet.tsx         # Back cover & studio contact
│   │
│   └── ui/                           # Atoms & Primitives
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── InkStamp.tsx              # Certified studio wax/ink seal
│       └── PortfolioModal.tsx        # Lightbox full-screen gallery modal
│
├── data/                             # Typed JSON Data Stores
│   ├── folios.json
│   ├── services.json
│   ├── niches.json
│   ├── portfolio.json
│   ├── faqs.json
│   └── siteConfig.ts
│
└── lib/                              # Utilities
    ├── whatsapp.ts                   # Contextual WhatsApp URL intent generator
    └── seo.ts                        # JSON-LD Schema.org builder
```

---

### 4. Technical Invariants & Quality Standards

1. **Dual-Layer Rendering (RSC + Motion):** Konten teks dirender oleh React Server Components (RSC) untuk menjamin 100% crawlability oleh search engine. Komponen Motion hanya bertindak sebagai client-side presentation shell.
2. **GPU-Accelerated Animations:** Seluruh animasi lembaran buku hanya memanipulasi `transform` (`rotateY`, `translate3d`) dan `opacity`. Nol layout reflow.
3. **Accessibility Contract:** Wajib menghormati `prefers-reduced-motion` dengan beralih ke instant cross-fade tanpa efek putar 3D.

---

### 5. Anti-AI Slop Engineering & Design Guardrails

Untuk mencegah jebakan template murahan dan output AI yang generik/hambar (*AI Slop*), arsitektur menetapkan tiga batasan mutlak:

1. **Anti-Visual Slop:**
   - **Dilarang keras:** Efek lingkaran neon kabur (*glow mesh blobs* `blur-3xl bg-purple-500/20`), bentuk 3D melayang (*floating isometric cubes*), atau template futuristik gelap yang generik.
   - **Wajib:** Estetika *Warm Swiss Monograph Editorial Book*. Warna kertas arsip (*off-white paper* `#fbfbfa`), tinta arang pekat (*charcoal* `#111111`), garis tipis taktil (*hairline* `#e5e5e0`), aksen stempel tinta merah tua (*vermillion* `#c23b22`), serta kedalaman bayangan lipatan buku tengah (*spine crease*).
   - **Visual Artifak Nyata:** Menggunakan mockup perangkat presisi (frame MacBook/iPhone) dan diagram skematik SVG bersih, bukan ilustrasi kartun generik atau foto stok AI robot salaman.

2. **Anti-Copywriting Slop:**
   - **Kata-kata yang Diharamkan:** *"Empower your business"*, *"Unlock unprecedented potential"*, *"Seamlessly integrated cutting-edge solutions"*, *"Revolutionary digital transformation"*.
   - **Wajib:** Naskah tajam berbasis realitas bisnis konkret (biaya perolehan prospek / CPL, konversi checkout, akurasi data tracking Meta CAPI, kecepatan akses di 4G, eliminasi komisi marketplace 15%).
   - **Harga Terbuka (Price Anchoring):** Menampilkan harga dasar yang jujur dan transparan di lembar publik tanpa jebakan "Hubungi Kami".

3. **Anti-Code Slop (Senior Dev Discipline):**
   - **Zero Library Bloat:** Dilarang menggunakan package flipbook canvas berat (`turn.js`, `pdf.js`, `stPageFlip`) yang merusak SEO dan membebani browser.
   - **Native-First:** Hindari state manager berlebihan (Redux, MobX, Zustand) hanya untuk navigasi lembar buku. Gunakan React local state + Motion URL sync.
   - **100% SEO-Indexable SSG:** Setiap lembar memiliki file HTML fisik tersendiri di folder `out/` yang siap di-crawl mesin pencari.


