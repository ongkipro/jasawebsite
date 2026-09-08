# Context Record: Ong-OS Web Development Services
## Staged Development Kit & Specification Suite

- **Project Slug:** `jasawebsite`
- **Brand / Studio Name:** **Ong-OS Web Development Services** (`ongki.pro`)
- **Target Category:** Full-Stack Website, E-Commerce & Web Application Development
- **Target Market:** Indonesia (UMKM, SMB, Brand, Distributor, Dealer, Professional Business, Startup, Corporate & Enterprise)
- **Auditor & Architect:** Paduka Ongki (System Architect & Full-Stack Lead)
- **Updated Date:** 08 September 2026
- **Positioning Statement:** *"Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh"* (Website & Digital Systems Built for Business Growth). Bukan jasa website murah, bukan software house elitis; fokus di sweet spot Growing SMB (Rp 5–20jt) hingga Enterprise (Rp 50jt+), dengan recurring maintenance & growth services.
- **The 5 Core Offerings:**
  1. Company Profile Website (Rp 2,9jt – Rp 8,9jt+)
  2. Sales & Lead Generation Website (Rp 5,9jt – Rp 14,9jt+)
  3. E-Commerce Website (Rp 7,9jt – Rp 19,9jt+)
  4. Shopify Development (Rp 3,9jt – Rp 20jt+)
  5. Custom Web Application / Full-Stack (Rp 15jt – Rp 50jt+ / Enterprise Custom Quote)
- **Architecture Strategy:** **Next.js 16 App Router SSG** + **Motion (Framer Motion)** + **Tailwind CSS v4**
- **UI/UX Metaphor:** **Interactive Tactile Digital Brochure (Buku Lembar-per-Lembar)** with 100% Crawlable Semantic HTML & Perforated Tear-off WhatsApp Vouchers
- **Delivery Model:** **Ong-OS Web Engine** (Reusable core components & modules + AI-assisted rapid assembly)

### Architectural Invariants:
1. **100% SEO-Friendly Sheet Routing:** Every folio sheet in the brochure is a crawlable canonical route (`/folio/[slug]`) pre-rendered via SSG `generateStaticParams()`.
2. **Tactile Motion Experience:** 3D sheet turns (`rotateY`), spine crease shadows, bookmark tabs, and fluid mobile thumb gestures via Motion.
3. **Sub-Second Performance SLA:** Lighthouse 100/100, Core Web Vitals all green, FCP < 0.3s, $0 Edge CDN hosting (Cloudflare Pages / Vercel Edge).
4. **Zero Database Dependency for Brochure:** 100% brochure content in typed static JSON (`src/data/*.json`).
5. **Contextual Tear-Off WhatsApp Funnel:** Perforated voucher slips with tier starting prices and pre-filled lead routing.


