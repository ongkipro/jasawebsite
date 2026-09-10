# Peta Development Halaman (Page-by-Page Specification Catalog)
## JasaWebsite.co by ONG — Digital Brochure & Living Folio Architecture

> **Repository:** `ongkipro/jasawebsite`  
> **Production URL:** [https://jasawebsite.co](https://jasawebsite.co)  
> **Framework & Runtime:** Next.js 16.3.4 (App Router, SSG `output: 'export'`) + Tailwind CSS v4 + Motion 13.2.0  
> **Hosting & Edge CDN:** Vercel Edge Singapore (`sin1`) + Cloudflare Pages  
> **Total Semantic Routes:** 33 Public URLs + 404 + Static Asset Routes (41 Total Pre-Rendered Outputs)  
> **Last Synchronized:** 2026-09-09

---

## 1. Ringkasan Eksekutif Arsitektur Halaman

Platform ini dibangun dengan konsep **Tactile Living Digital Brochure (Buku Monograf Digital Lembar-per-Lembar)** yang 100% crawlable oleh mesin pencari Google (SEO-friendly Static Site Generation). Setiap lembaran memiliki rute URL kanonikal tersendiri (`/folio/[slug]`), dapat di-bookmark, dibagikan, dan diindeks secara mandiri.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        HIERARKI STRUKTUR HALAMAN JASAWEBSITE.CO                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Root & Sampul Utama (Folio 00)                                                      │
│    ├── /                     -> Redirect / Render Sampul & Daftar Isi                  │
│    └── /folio/cover          -> [CoverSheet.tsx] & [TocSheet.tsx]                      │
│                                                                                        │
│ 2. Lima Pilar Layanan Inti (Folios 01–04, 06)                                          │
│    ├── /folio/company-profile    -> [ComproSheet.tsx]        (Mulai Rp 2,9jt)          │
│    ├── /folio/sales-website      -> [SalesSheet.tsx]         (Mulai Rp 3,5jt)          │
│    ├── /folio/ecommerce-shopify  -> [CommerceSheet.tsx]      (Mulai Rp 3,9jt)          │
│    ├── /folio/custom-web-app     -> [CustomAppSheet.tsx]     (Mulai Rp 15jt+)          │
│    └── /folio/maintenance-care   -> [MaintenanceSheet.tsx]   (Mulai Rp 2,5jt/bln)      │
│                                                                                        │
│ 3. Portofolio & Colophon Studio (Folios 05, 07)                                        │
│    ├── /folio/portfolio      -> [PortfolioGallerySheet.tsx]  (13 Live Proyek Showcase) │
│    └── /folio/colophon       -> [NicheCatalogSheet.tsx] + [ColophonSheet.tsx]          │
│                                                                                        │
│ 4. Direktori Ceruk Industri / Programmatic SEO (24 Sektor Spesifik)                    │
│    └── /folio/niche-[slug]   -> [NicheDetailSheet.tsx]       (24 Halaman Khusus)       │
│                                                                                        │
│ 5. Endpoint Utilitas, Manifest & Favicon Suite                                         │
│    ├── /_not-found           -> [not-found.tsx]              (Folio 404 Lembar Robek)  │
│    ├── /sitemap.xml          -> [sitemap.ts]                 (XML Search Engine Map)   │
│    ├── /robots.txt           -> [robots.ts]                  (Search Crawler Rules)    │
│    ├── /peta-development.xml -> [peta-development.xml]       (Machine Route Manifest)  │
│    └── /favicon.svg /icon.png-> [build_favicons.py]          (High-Fill Obsidian .ONG) │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Matriks Inventaris Lengkap Seluruh Halaman

| No | URL Route | Slug Folio | Komponen Source | Judul / Fokus Halaman | Anchor Investasi | Target Klien & Skenario Bisnis |
|:---|:---|:---|:---|:---|:---|:---|
| **00** | `/` | `cover` | `CoverSheet` + `TocSheet` | Sampul Monograf & Daftar Isi | — | Pengunjung baru, navigasi antar lembaran folio |
| **01** | `/folio/cover` | `cover` | `CoverSheet` + `TocSheet` | Sampul Depan & Quick Index | — | Pengantar standar rekayasa studio & navigasi cepat |
| **02** | `/folio/company-profile` | `company-profile` | `ComproSheet` | Company Profile Korporat & B2B | Mulai Rp 2,9jt | PT/CV, pabrik, kontraktor untuk kurasi vendor & tender |
| **03** | `/folio/sales-website` | `sales-website` | `SalesSheet` | Landing Page Sales & Leads WA | Mulai Rp 3,5jt | Dealer resmi, agen properti, distributor, tim sales |
| **04** | `/folio/ecommerce-shopify` | `ecommerce-shopify` | `CommerceSheet` | Toko Mandiri & Shopify D2C | Mulai Rp 3,9jt | Brand retail, skincare, fashion, bebas fee admin 10% |
| **05** | `/folio/custom-web-app` | `custom-web-app` | `CustomAppSheet` | Custom Web App, CRM & ERP | Mulai Rp 15jt+ | Perusahaan multi-divisi, gudang, replace spreadsheet |
| **06** | `/folio/portfolio` | `portfolio` | `PortfolioGallerySheet` | Deck Portofolio Terkurasi Live | 13 Proyek Terverifikasi | Calon klien butuh bukti karya nyata & live URL |
| **07** | `/folio/maintenance-care` | `maintenance-care` | `MaintenanceSheet` | Maintenance Care & Ads Scaling | Mulai Rp 2,5jt/bln | Brand aktif ngiklan, backup, uptime, server-side CAPI |
| **08** | `/folio/colophon` | `colophon` | `NicheCatalog` + `Colophon` | Direktori 24 Sektor & Colophon | Direktori 24 Sektor | Navigasi ceruk industri pSEO & komitmen garansi |
| **09** | `/folio/niche-dealer-otomotif` | `niche-dealer-otomotif` | `NicheDetailSheet` | Dealer Mobil & Showroom Kendaraan | Mulai Rp 5,9jt | Dealer Hino, Foton, mobil baru/bekas, simulasi kredit |
| **10** | `/folio/niche-rental-mobil-bus-pariwisata` | `niche-rental-mobil-bus-pariwisata` | `NicheDetailSheet` | Rental Mobil Mewah & Bus Wisata | Mulai Rp 3,5jt | Rental Alphard, HiAce, bus wisata, booking tanggal WA |
| **11** | `/folio/niche-bengkel-mobil-body-repair` | `niche-bengkel-mobil-body-repair` | `NicheDetailSheet` | Bengkel Mobil, Body Repair & Modif | Mulai Rp 3,5jt | Bengkel cat oven, klaim asuransi, estimasi biaya foto |
| **12** | `/folio/niche-alat-berat-mesin` | `niche-alat-berat-mesin` | `NicheDetailSheet` | Distributor Alat Berat & Mesin | Mulai Rp 8,9jt | Excavator, forklift, genset, download brosur spek |
| **13** | `/folio/niche-pabrik-manufaktur-b2b` | `niche-pabrik-manufaktur-b2b` | `NicheDetailSheet` | Pabrikasi & Manufaktur Industri | Mulai Rp 6,9jt | Pabrik plastik, logam, packaging, lolos verifikasi vendor |
| **14** | `/folio/niche-percetakan-packaging-kemasan` | `niche-percetakan-packaging-kemasan` | `NicheDetailSheet` | Percetakan Kemasan Dus Box Offset | Mulai Rp 4,9jt | Produsen dus box, label pouch, kalkulator cetak custom |
| **15** | `/folio/niche-developer-properti` | `niche-developer-properti` | `NicheDetailSheet` | Pengembang Properti & Perumahan | Mulai Rp 5,9jt | Developer cluster, siteplan interaktif, simulasi KPR |
| **16** | `/folio/niche-kontraktor-arsitek` | `niche-kontraktor-arsitek` | `NicheDetailSheet` | Kontraktor Bangunan & Interior | Mulai Rp 4,9jt | Kontraktor sipil, interior fit-out, galeri proyek B2B |
| **17** | `/folio/niche-klinik-kesehatan` | `niche-klinik-kesehatan` | `NicheDetailSheet` | Klinik Medis, Dokter & Faskes | Mulai Rp 4,9jt | Klinik spesialis, jadwal dokter, reservasi poli WA |
| **18** | `/folio/niche-distributor-alkes-farmasi` | `niche-distributor-alkes-farmasi` | `NicheDetailSheet` | Distributor Alkes & Farmasi | Mulai Rp 6,9jt | Distributor izin IPAK, katalog alkes, tender RS |
| **19** | `/folio/niche-kantor-hukum-advokat` | `niche-kantor-hukum-advokat` | `NicheDetailSheet` | Kantor Hukum, Advokat & Notaris | Mulai Rp 4,9jt | Law firm korporat, litigasi, retainer legal perusahaan |
| **20** | `/folio/niche-konsultan-pajak-akuntan` | `niche-konsultan-pajak-akuntan` | `NicheDetailSheet` | Konsultan Pajak & Akuntan Publik | Mulai Rp 3,9jt | KAP, konsultan SPT, audit kepatuhan perpajakan B2B |
| **21** | `/folio/niche-konsultan-it-cctv-keamanan` | `niche-konsultan-it-cctv-keamanan` | `NicheDetailSheet` | Integrator IT, CCTV & Smart Home | Mulai Rp 4,9jt | Instalasi jaringan, security access, tender pengadaan |
| **22** | `/folio/niche-brand-fashion-d2c` | `niche-brand-fashion-d2c` | `NicheDetailSheet` | Brand Fashion, Hijab & Apparel | Mulai Rp 3,9jt | Brand D2C, lookbook visual, checkout instan, bebas fee |
| **23** | `/folio/niche-brand-skincare-kosmetik` | `niche-brand-skincare-kosmetik` | `NicheDetailSheet` | Brand Skincare & Kosmetik BPOM | Mulai Rp 4,9jt | Skincare D2C, bundle promo, integrasi pixel Meta/TikTok |
| **24** | `/folio/niche-restoran-cafe-fnb` | `niche-restoran-cafe-fnb` | `NicheDetailSheet` | Restoran Fine Dining, Cafe & F&B | Mulai Rp 3,5jt | Restoran, buku menu digital responsif, reservasi meja |
| **25** | `/folio/niche-event-organizer-wedding-planner` | `niche-event-organizer-wedding-planner` | `NicheDetailSheet` | Event Organizer & Wedding Planner | Mulai Rp 3,5jt | EO korporat, paket wedding, portofolio event meyakinkan |
| **26** | `/folio/niche-ekspedisi-logistik-cargo` | `niche-ekspedisi-logistik-cargo` | `NicheDetailSheet` | Jasa Ekspedisi, Cargo & Logistik | Mulai Rp 4,9jt | Forwarder, armada truk, cek tarif rute, inquiry B2B |
| **27** | `/folio/niche-ekspor-komoditas-hasil-bumi` | `niche-ekspor-komoditas-hasil-bumi` | `NicheDetailSheet` | Eksportir Komoditas & Rempah | Mulai Rp 6,9jt | Ekspor kopi, arang, vanili, standar buyer internasional |
| **28** | `/folio/niche-sekolah-universitas-bimbel` | `niche-sekolah-universitas-bimbel` | `NicheDetailSheet` | Sekolah, Universitas & Bimbel | Mulai Rp 4,9jt | Yayasan pendidikan, PPDB online, pendaftaran siswa |
| **29** | `/folio/niche-tour-travel-umroh` | `niche-tour-travel-umroh` | `NicheDetailSheet` | Biro Tour Travel & Umroh Berizin | Mulai Rp 4,9jt | Paket tour & umroh, jadwal keberangkatan, izin Kemenag |
| **30** | `/folio/niche-cleaning-service-pest-control` | `niche-cleaning-service-pest-control` | `NicheDetailSheet` | Cleaning Service & Pest Control | Mulai Rp 3,5jt | Layanan kebersihan gedung, kantor, kontrak berkala B2B |
| **31** | `/folio/niche-agribisnis-peternakan-modern` | `niche-agribisnis-peternakan-modern` | `NicheDetailSheet` | Agribisnis & Peternakan Modern | Mulai Rp 4,9jt | Supplier hasil tani, bibit, pakan, kemitraan peternak |
| **32** | `/folio/niche-koperasi-keuangan-mikro` | `niche-koperasi-keuangan-mikro` | `NicheDetailSheet` | Lembaga Keuangan Mikro, BPR & Koperasi | Mulai Rp 5,9jt | Koperasi simpan pinjam, BPR, legalitas OJK, simulasi pinjaman |
| **33** | `/_not-found` | `404` | `not-found.tsx` | Folio Tidak Ditemukan / Arsip Terpisah | — | Handling URL typo, navigasi balik ke sampul & index |

---

## 3. Detail Arsitektur Peta Per Halaman Inti (8 Spreads)

### [Folio 00] Sampul Depan & Daftar Isi
* **Rute:** `/folio/cover` (dan root `/`)
* **Komponen:** `src/components/sheets/CoverSheet.tsx` (Lembar Kiri) + `src/components/sheets/TocSheet.tsx` (Lembar Kanan)
* **Metadata Title:** `Jasa Pembuatan Website Profesional & Toko Online Terbaik - Jasa Website`
* **Schema.org:** `ProfessionalService`, `LocalBusiness`
* **Fitur Kunci:**
  * Stempel resmi ink stamp (*"KODE RESMI STUDIO · EDISI 2026"*).
  * 4 Spesifikasi rekayasa teknis: Akses `< 0.3s TTFB`, Cloud Edge Global, Aset 100% Hak Milik, Uptime 99.9% SLA.
  * Navigasi TOC interaktif 8 nomor lembar folio dengan quick click.
  * Direct action ke WhatsApp Hotline CS (`+62 838-3044-1495`).

### [Folio 01] Company Profile Website
* **Rute:** `/folio/company-profile`
* **Komponen:** `src/components/sheets/ComproSheet.tsx`
* **Metadata Title:** `Jasa Pembuatan Website Company Profile Korporat & B2B - Jasa Website`
* **Voucher Code:** `ONG-COMPRO-2026`
* **3 Pilihan Tier:**
  1. *Starter Kredibilitas Usaha (Rp 2,9jt)* — Sprint 3–5 Hari. One-page profil, domain 1 th, Google Hijau 95–100.
  2. *Kredibilitas Vendor & Mitra B2B (Rp 4,9jt)* ⭐ — Sprint 5–10 Hari. 5–7 Hal, standar vendor BUMN/swasta, repositori 100%.
  3. *Standar Korporat & Lolos Tender Besar (Rp 8,9jt – Rp 15jt+)* — Sprint 10–20 Hari. Desain wibawa miliaran, 2 bahasa, portal karir.

### [Folio 02] Sales & Lead Generation Website
* **Rute:** `/folio/sales-website`
* **Komponen:** `src/components/sheets/SalesSheet.tsx`
* **Metadata Title:** `Jasa Pembuatan Landing Page Sales & Leads WhatsApp Berkonversi Tinggi - Jasa Website`
* **Voucher Code:** `ONG-SALES-LEADS`
* **Showcase Klien Live:** Dealer Hino (`dealerhinoofficial.com`), Truk Hino (`dealertrukhino.com`), Foton Motor (`dealerfoton.com`).
* **3 Pilihan Tier:**
  1. *Landing Page Iklan Siap Jualan (Rp 3,5jt)* — Sprint 4–7 Hari. 1 LP kencang, 5 katalog produk, pixel Meta/Google.
  2. *Mesin Iklan Siap Tempur & Katalog Sales (Rp 6,5jt)* ⭐ — Sprint 7–14 Hari. Multi-LP, katalog 15–20 unit, WA Rotator, CAPI.
  3. *Showroom Digital & Brosur Sales Interaktif (Rp 12,5jt+)* — Sprint 14–21 Hari. Showroom digital majalah, unit unlimited, sinkron CRM.

### [Folio 03] Toko Online Mandiri & Shopify E-Commerce
* **Rute:** `/folio/ecommerce-shopify`
* **Komponen:** `src/components/sheets/CommerceSheet.tsx`
* **Metadata Title:** `Jasa Pembuatan Website Toko Online Shopify & E-Commerce Mandiri - Jasa Website`
* **Voucher Code:** `ONG-COMMERCE-D2C`
* **Showcase Klien Live:** Batik Smile (`batiksmile.com`), Beautyinu (`beautyinu.co`), Petcue (`petcue.co`), Homelook (`homelook.shop`).
* **3 Pilihan Tier:**
  1. *Toko Mandiri Bebas Komisi (Rp 3,9jt)* — Sprint 4–7 Hari. 100% milik sendiri, 0% komisi, input 20 produk, ongkir otomatis, notif WA.
  2. *Shopify Custom Storefront & Desain Mewah (Rp 6,9jt)* ⭐ — Sprint 7–14 Hari. Setup resmi Shopify, tema custom eksklusif, QRIS/VA + kurir lokal.
  3. *Toko Mandiri Skala Besar & Grosir / Reseller (Rp 8,9jt – Rp 19,9jt+)* — Sprint 10–20 Hari. Traffic besar, checkout agen/grosir, integrasi gudang.

### [Folio 04] Custom Web Application & Systems
* **Rute:** `/folio/custom-web-app`
* **Komponen:** `src/components/sheets/CustomAppSheet.tsx`
* **Metadata Title:** `Jasa Pembuatan Custom Web Application, CRM & Sistem Digital Perusahaan - Jasa Website`
* **Voucher Code:** `ONG-SYSTEM-APP`
* **3 Pilihan Tier:**
  1. *Digitalisasi 1 Alur Kunci MVP (Rp 15jt – Rp 25jt)* — Sprint 2–4 Minggu. Penawaran B2B / surat jalan, database tanpa biaya lisensi per user.
  2. *Sistem Operasional Bisnis Terpadu (Rp 25jt – Rp 50jt)* ⭐ — Sprint 4–8 Minggu. CRM penjualan, multi-gudang, audit trail, dashboard HP.
  3. *Platform Skala Korporat / SaaS (Rp 50jt – Rp 100jt+)* — Sprint 8–16 Minggu. Multi-tenant, otomasi lintas cabang, enkripsi tinggi.

### [Folio 05] Deck Portofolio Terkurasi
* **Rute:** `/folio/portfolio`
* **Komponen:** `src/components/sheets/PortfolioGallerySheet.tsx`
* **Metadata Title:** `Portofolio & Bukti Hasil Karya Pembuatan Website Live - Jasa Website`
* **10+ Proyek Nyata Terverifikasi:**
  * Batik Smile (E-Commerce Flagship), Beautyinu (Skincare D2C), Petcue (Pet Nutrition), Homelook (Home Living), Dealer Hino (Automotive Official), Truk Hino Jatim (Commercial Fleet), Dealer Foton (Automotive Lead Gen), dll.
  * Dilengkapi modal interaktif `PortfolioModal` dengan inspeksi desktop & mobile mockup.

### [Folio 06] Website Maintenance Care & Ads Scaling
* **Rute:** `/folio/maintenance-care`
* **Komponen:** `src/components/sheets/MaintenanceSheet.tsx`
* **Metadata Title:** `Jasa Maintenance Website, Setup Iklan Meta & Google Ads - Jasa Website`
* **Voucher Code:** `ONG-CARE-RETAINER`
* **3 Retainer Tiers & Modul Add-on:**
  1. *Growth Care & Ads Readiness (Rp 2,5jt/bln)* — Uptime 24/7, backup rutin, garansi skor hijau, cek rutin pixel iklan, update promo 3x/bln.
  2. *Scale & Ads Management Retainer (Rp 4,5jt – Rp 7,5jt/bln)* ⭐ — Server-side CAPI & GTM, split testing promo, update 8x/bln, review lead engineer.
  3. *Enterprise Dedicated Growth Partner (Rp 10jt – Rp 25jt+/bln)* — Dedicated engineer, optimasi menyeluruh Meta & Google Ads, respon 24/7.
  * Modul Tambahan: Landing Page Promo Cepat (Rp 350rb/hal), LP Beranimasi Interaktif (Rp 3,5jt), Geo-Targeting Otomatis (Rp 1,5jt–3jt), Proteksi Anti-Bot COD (Rp 1,5jt).

### [Folio 07] Direktori 24 Sektor Industri & Colophon Studio
* **Rute:** `/folio/colophon`
* **Komponen:** `src/components/sheets/NicheCatalogSheet.tsx` (Lembar Kiri) + `src/components/sheets/ColophonSheet.tsx` (Lembar Kanan)
* **Metadata Title:** `Direktori Jasa Pembuatan Website 30+ Industri & Kontak Resmi Studio - Jasa Website`
* **Fitur Kunci:**
  * Quick Jump dropdown sektor industri (24 pilihan).
  * Instant search bar & filter kategori vertikal wrapping (tanpa scroll kanan kiri).
  * Open hairline ledger list `[01]` s/d `[24]` dengan nama industri, kategori, pilar rekomendasi, dan anchor harga.
  * 4 Komitmen Rekayasa: 100% Repositori, Global Edge Cloud, Sub-Detik TTFB, Zero Plugin Bloat.
  * Official CS hotline: `+62 838-3044-1495` dan email `get@ongki.pro`.

---

## 4. Endpoint Spesial & Utilitas Mesin Pencari

### [Folio 404] Not Found (Lembar Robek / Missing Sheet)
* **Rute:** `/_not-found`
* **Komponen:** `src/app/not-found.tsx`
* **Status HTTP:** 404
* **Desain:** Lembar buku terpisah dengan stempel tinta resmi *"FOLIO MISSING / ARSIP TERPISAH · STATUS 404"*, daftar isi cepat balik ke sampul dan tombol hubungi CS.

### XML Sitemap & Robots.txt
* **Rute:** `/sitemap.xml` (`src/app/sitemap.ts`)
  * Tipe: `application/xml`
  * Berisi 33 URL terdaftar (1 Root + 8 Core Folios + 24 Niche Pages) dengan priority dan changeFrequency resmi.
* **Rute:** `/robots.txt` (`src/app/robots.ts`)
  * Tipe: `text/plain`
  * Mengizinkan perayapan bot pencari AI resmi (`Googlebot`, `Bingbot`, `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Applebot`), memblokir bot scraper training liar (`CCBot`, `Bytespider`, `Diffbot`, `Amazonbot`), dan merujuk ke `https://jasawebsite.co/sitemap.xml`.

### Standard AI Context Feed (`llms.txt` & `llms-full.txt`)
* **Rute:** `/llms.txt` & `/llms-full.txt` (`public/llms.txt`)
  * Tipe: `text/plain; charset=utf-8`
  * Standar web baru untuk LLM & Generative Engine Optimization (GEO). Berisi ringkasan terstruktur Markdown tentang profil studio, 4 pilar layanan, estimasi harga transparan, bukti 11 portofolio live (termasuk Samira Travel & ELFY Malaysia), dan 24 direktori industri untuk dikutip langsung oleh ChatGPT Search, Perplexity AI, dan Claude.

### Machine-Readable Route Manifest XML
* **Rute:** `/peta-development.xml` (`public/peta-development.xml` & `docs/peta-development.xml`)
  * Tipe: `application/xml`
  * Berisi struktur XML komprehensif seluruh 33 semantic routes, komponen sumber, tier harga, target klien, voucher kode, dan metadata SEO.

### High-Fill Obsidian Squircle `.ONG` Favicon Suite
* **Generator:** `scripts/build_favicons.py`
* **Desain:** Maximum-fill luxury obsidian squircle (`#0e0f12`, radius 112px) dengan titik vermillion glowing (`#ff453a`) dan huruf bold arsitektural `ONG` (size 187px). Mengisi 95%+ ruang kanvas favicon, menjamin ketajaman dan keterbacaan penuh di tab riil (16×16 px & 32×32 px).
* **Aset Terdistribusi:**
  * `/favicon.svg` — Dynamic high-fill vector SVG.
  * `/icon.png` & `/src/app/icon.png` — 512×512 Master high-density squircle icon.
  * `/icon-light.png` & `/icon-dark.png` — 512×512 theme-specific PNGs.
  * `/icon-light-32x32.png` & `/icon-dark-32x32.png` — 32×32 tab icons.
  * `/favicon-32x32.png` & `/favicon-16x16.png` — Standard browser tab PNGs.
  * `/apple-touch-icon.png` & `/src/app/apple-icon.png` — 180×180 iOS Home Screen Bookmark.
  * `/favicon.ico` & `/src/app/favicon.ico` — Multi-resolution ICO (16/32/48).

---

## 5. Hubungan Data Store & Komponen (`Data Topology`)

```text
src/data/
├── folios.json      -> 8 Core Spreads (slug, title, headline, pillar, startingPrice)
├── services.json    -> 5 Core Pillars (problem, solution, idealFor, tiers, vouchers)
├── niches.json      -> 24 Industry Niches (painPoints, flow, keyFeatures, rationale)
├── portfolio.json   -> 11 Real Projects (metrics, tags, images, liveUrls)
└── siteConfig.ts    -> Studio Metadata (brand, phones, URLs, stats, schemas)
```
Semua data di atas divalidasi dengan strict TypeScript interfaces di bawah `src/types/` (`folio.ts`, `service.ts`, `niche.ts`, `portfolio.ts`, `config.ts`), menjamin tidak ada `any` type atau kegagalan kompilasi saat build time.
