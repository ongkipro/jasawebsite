# 02. Product Requirements Document (PRD)
## Ong-OS Web Development Services · Functional & Product Specifications

---

### 1. Product Vision & Architecture Overview
Platform digital **Ong-OS Web Development Services** (`ongki.pro`) berformat **Interactive Tactile Digital Brochure (Buku / Dossier Lembar-per-Lembar)** yang dibangun menggunakan **Next.js 16 App Router (SSG)**, **Tailwind CSS v4**, dan **Motion (Framer Motion)**.

Setiap lembar buku mempresentasikan solusi konkret dari **5 Layanan Utama Ong-OS**, lengkap dengan rincian fitur, arsitektur teknis, transparansi tier harga, dan alur konversi **Tear-off Perforated WhatsApp Voucher**.

---

### 2. Functional Requirements Matrix

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              FUNCTIONAL REQUIREMENTS MATRIX                            │
├────────────────────┬─────────────────────────────────┬─────────────────────────────────┤
│ Module / Folio     │ User Story & Functional Scope   │ Acceptance Criteria             │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-01]            │ Pengunjung menikmati tampilan   │ • Desktop: 2-page spread terbuka│
│ Two-Page Spread &  │ buku fisik terbuka di desktop   │ • Mobile: Single sheet + swipe  │
│ Single Sheet Flow  │ dan lembaran taktil di mobile   │ • Realistic spine crease shadow │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-02]            │ Pengunjung melihat transisi     │ • 3D rotateY sheet animation    │
│ 3D Sheet Turn      │ lembar 3D yang mulus dan alami  │ • GPU accelerated (60-120 fps)  │
│ Motion Engine      │ saat navigasi maju / mundur     │ • Fallback reduced-motion aktif │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-03]            │ Pengunjung melompat ke bab mana │ • Tab vertikal interaktif       │
│ Bookmark Ribbon    │ saja via pita pembatas buku     │ • 5 Layanan utama terindeks     │
│ & Table of Contents│ di sisi kanan layar             │ • Nomor folio update dinamis    │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-04]            │ Calon klien UMKM/PT mempelajari │ • Rincian Frontend, CMS & Tech  │
│ Folio: Company     │ paket Company Profile: Starter, │ • Starter Rp2,9jt, Business ⭐   │
│ Profile Website    │ Business ⭐, dan Corporate      │   Rp4,9jt, Corporate Rp8,9jt+   │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-05]            │ Calon klien dealer/properti/B2B │ • Rincian Traffic-to-Lead flow  │
│ Folio: Sales & Lead│ mempelajari sistem Sales Website│ • Starter Rp5,9jt, Growth ⭐    │
│ Generation Website │ (katalog, spec, lead routing)   │   Rp8,9jt, Pro Rp14,9jt+        │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-06]            │ Calon klien ritel mempelajari   │ • Rincian Cart, Checkout, PG    │
│ Folio: E-Commerce  │ toko online transaksi langsung: │ • Starter Rp7,9jt, Business ⭐   │
│ Website            │ Midtrans, Xendit, Kurir Indo    │   Rp12,9jt, Pro Rp19,9jt+       │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-07]            │ Brand D2C mempelajari layanan   │ • Liquid 2.0, Kurir, QRIS CAPI  │
│ Folio: Shopify     │ khusus Shopify: Setup, Growth ⭐│ • Starter Rp3,9jt, Growth ⭐    │
│ Development        │ Custom Liquid, Headless Hydrogen│   Rp6,9jt, Custom Rp12,9jt+     │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-08]            │ Startup & enterprise mempelajari│ • Scope Frontend, API, DB & Cloud│
│ Folio: Custom Web  │ aplikasi web kustom: CRM, ERP,  │ • MVP Rp15jt+, Business Rp25jt+ │
│ Application        │ Portal, Dashboard, SaaS         │   Advanced Rp50jt+, Custom Quote│
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-09]            │ Klien mengeksplor supporting    │ • Maintenance Care (300rb-2jt/bl)│
│ Folio: Growth &    │ services & recurring maintenance│ • SEO, CAPI Tracking, AI Agents │
│ Maintenance Care   │ untuk menjaga performa sistem   │ • Scope out-of-pocket transparan│
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-10]            │ Calon klien menekan kupon sobek │ • Border putus-putus bergetar   │
│ Tear-Off WhatsApp  │ bertema voucher fisik untuk chat│ • Pre-filled WA kontekstual     │
│ Voucher & Stamp    │ WhatsApp dengan intent spesifik │ • Stempel resmi studio Ong-OS   │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-11]            │ Calon klien 30+ industri        │ • Tiap industri = 1 lembar      │
│ pSEO Catalogue     │ menemukan lembar brosur relevan │ • 100% Crawlable via SSG        │
│ Folio Sheets       │ dengan Schema LocalBusiness     │ • Breadcrumb & navigasi buku    │
├────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ [FR-12]            │ Calon klien meninjau galeri     │ • Filter kategori interaktif    │
│ Galeri Portofolio  │ portofolio & studi kasus proyek │ • Inspector visual (Desktop/HP) │
│ & Showcase Proyek  │ dengan metrik pembuktian ROI    │ • Voucher WA klaim desain mirip │
└────────────────────┴─────────────────────────────────┴─────────────────────────────────┘
```

---

### 3. Non-Functional Requirements & Performance SLAs

1. **Performance SLA:**
   - Skor Google Lighthouse: **100 / 100** (Mobile & Desktop).
   - First Contentful Paint (FCP): **< 0.3s**.
   - Cumulative Layout Shift (CLS): **0.00** (Strict aspect ratios & image dimensions).
   - Animation Framerate: **60–120 FPS** (GPU hardware-accelerated transforms).
   - Motion Accessibility: Mendukung penuh `prefers-reduced-motion` (instant cross-fade).

2. **Security & Invariants:**
   - Zero SQL injection vulnerability (Brosur 100% statis).
   - Strict Content Security Policy (CSP) & SSL/TLS A+ Rating di Edge CDN.
   - 100% Repositori GitHub diserahkan ke klien (Anti Vendor Lock-In).

3. **SEO & Discoverability SLA:**
   - 100% Lembar terindeks dengan Schema.org JSON-LD valid (`ProfessionalService`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`).
   - Automated generation untuk `sitemap.xml` dan `robots.txt` pada saat build time.

---

### 4. Direct WhatsApp URL Intent Protocol (Tear-Off Voucher)

Setiap kupon sobek (*perforated voucher*) di lembar buku mengalirkan pesan terstruktur:
`https://wa.me/{SITE_WA}?text={ENCODED_MESSAGE}`

**Format Pesan Kontekstual Sesuai Layanan Ong-OS:**
- **Company Profile:** *"Halo Tim Ong-OS, saya tertarik konsultasi pembuatan Website Company Profile (Paket Business / Corporate). Mohon info tahapan sprint pengerjaannya. [Ref: Compro-Folio]"*
- **Sales Website:** *"Halo Tim Ong-OS, saya tertarik konsultasi pembuatan Sales & Lead Generation Website untuk bisnis saya. Mohon estimasi dan demonya. [Ref: Sales-Folio]"*
- **E-Commerce:** *"Halo Tim Ong-OS, kami ingin membangun Toko Online E-Commerce dengan payment gateway dan integrasi kurir lokal. [Ref: Ecom-Folio]"*
- **Shopify Development:** *"Halo Tim Ong-OS, saya ingin setup/custom tema Shopify D2C Brand terintegrasi kurir Indo dan QRIS. [Ref: Shopify-Folio]"*
- **Custom Web Application:** *"Halo Tim Ong-OS, kami ingin mendiskusikan kebutuhan Custom Web Application / Sistem Digital (CRM/Portal/Dashboard). Mohon info jadwal discovery call. [Ref: CustomApp-Folio]"*
- **Niche Spesifik:** *"Halo Tim Ong-OS, saya sedang membaca lembar brosur untuk industri [NAMA_INDUSTRI]. Mohon info proposal dan konsultasinya. [Ref: Niche-Folio]"*


