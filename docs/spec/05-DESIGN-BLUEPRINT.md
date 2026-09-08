# 05. Studio Design Blueprint & Folio Spread Architecture
## Ong-OS Web Development Services (`ongki.pro`) · Tactile Digital Brochure Layout, 2-Page Spreads, Portfolio Gallery & Motion Schematics

> **Core Objective:** Mengabadikan arsitektur visual dan cetak biru tata letak lembar (*spread & sheet architecture*) untuk seluruh halaman di `ongki.pro` dalam format **Buku / Brosur Digital Interaktif (Living Folio)**.

---

## 1. Global Folio Shell Blueprint (`src/components/book/BookShell.tsx`)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [1] TOP FOLIO RUNNING HEADER (Monospace Technical Index, Studio Mark, Sound & Zoom)   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌─────────────────────────────────┬─────────────────────────────────┐ ┌────────────┐  │
│  │ LEFT PAGE SHEET (HALAMAN KIRI)  │ RIGHT PAGE SHEET (HALAMAN KANAN)│ │ BOOKMARK   │  │
│  │                                 │                                 │ │ RIBBON     │  │
│  │ • Editorial Problem & Context   │ • Technical Solution & Proof    │ │ INDEX TABS │  │
│  │ • Monospace Sub-header          │ • High-Res Visual Artifact      │ │            │  │
│  │ • Architectural Deep-Dive       │ • Impact Metrics                │ │ [00] COVER │  │
│  │ • Service Tiers / Filters       │ • Perforated WhatsApp Voucher   │ │ [01] COMPRO│  │
│  │                                 │                                 │ │ [02] SALES │  │
│  │                                 │                                 │ │ [03] COMM  │  │
│  │                                 │                                 │ │ [04] APPS  │  │
│  │                                 │                                 │ │ [05] GALERI│  │
│  │                                 │                                 │ │ [06] CARE  │  │
│  │ FOLIO HAL. 04                   │ FOLIO HAL. 05                   │ │ [07] INDEX │  │
│  └─────────────────────────────────┴─────────────────────────────────┘ └────────────┘  │
│                   ▲                                 ▲                                  │
│                   └────── DYNAMIC SPINE SHADOW ─────┘                                  │
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [2] BOTTOM NAV BAR: [← Lembar Sebelumnya]  [●●●●● Progress Indicator]  [Lembar Selanjutnya →]│
│ [3] MOBILE VIEW: Auto-switches to SingleSheetView with fluid thumb swipe (drag="x")    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Spread-by-Spread Blueprint

```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                  MASTER FOLIO SPREAD DIRECTORY (ONG-OS LIVING BROCHURE)              │
├───────────┬─────────────────────────────────┬────────────────────────────────────────┤
│ Spread    │ Route                           │ Primary Scope & Content Focus          │
├───────────┼─────────────────────────────────┼────────────────────────────────────────┤
│ Spread 00 │ `/` & `/folio/cover`            │ Front Cover & Table of Contents (TOC)  │
│ Spread 01 │ `/folio/company-profile`        │ Core 01: Company Profile Website       │
│ Spread 02 │ `/folio/sales-website`          │ Core 02: Sales & Lead Gen Website      │
│ Spread 03 │ `/folio/ecommerce-shopify`      │ Core 03 & 04: E-Commerce & Shopify     │
│ Spread 04 │ `/folio/custom-web-app`         │ Core 05: Custom Web Apps & Systems     │
│ Spread 05 │ `/folio/portfolio`              │ GALERI PORTOFOLIO & SHOWCASE PROYEK    │
│ Spread 06 │ `/folio/maintenance-care`       │ Website Maintenance Care & Add-Ons     │
│ Spread 07 │ `/folio/colophon`               │ 30+ Niches Index, Colophon & Back Cover│
└───────────┴─────────────────────────────────┴────────────────────────────────────────┘
```

---

### Spread 00: Front Cover & Table of Contents (`/` & `/folio/cover`)
```text
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ HALAMAN KIRI: FRONT COVER BROSUR       │ HALAMAN KANAN: TABLE OF CONTENTS (TOC) │
├────────────────────────────────────────┼────────────────────────────────────────┤
│                                        │                                        │
│  [ ONG-OS MONOGRAM EMBOSSING ]         │ DAFTAR ISI DOSSIER (FOLIO INDEX):      │
│  ONG-OS WEB DEVELOPMENT SERVICES       │                                        │
│                                        │ 01/ Company Profile Website (Kredibilitas)│
│  "Website dan Sistem Digital           │ 02/ Sales & Lead Generation (Dealer/B2B)│
│   untuk Bisnis yang Ingin Bertumbuh."  │ 03/ E-Commerce & Shopify D2C Flagship  │
│                                        │ 04/ Custom Web Applications & Systems  │
│  Dossier resmi studio rekayasa web,    │ 05/ GALERI PORTOFOLIO & PROYEK TERPILIH│
│  e-commerce & sistem digital terpadu.  │ 06/ Website Maintenance Care & Add-Ons │
│                                        │ 07/ Direktori 30+ Niche & Back Cover   │
│  • 100/100 Google Lighthouse Certified │                                        │
│  • Sub-second TTFB on Cloudflare Edge  │ [ CARA MEMBACA: ]                      │
│  • $0 Server Hosting Selamanya         │ • Klik sudut halaman untuk membalik lembar│
│  • 100% Repositori GitHub Milik Anda   │ • Gunakan tombol panah keyboard ← →    │
│                                        │ • Swipe jempol kiri/kanan pada layar HP│
│  FOLIO NO. 00 · COVER                  │ FOLIO NO. 01 · TABLE OF CONTENTS       │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

---

### Spread 01: Company Profile Website (`/folio/company-profile`)
```text
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ HALAMAN KIRI: STRATEGI & KREDIBILITAS  │ HALAMAN KANAN: TIERS & PERFORATED VOUCHER│
├────────────────────────────────────────┼────────────────────────────────────────┤
│ [ 01 / COMPANY PROFILE WEBSITE ]       │ PILIHAN INVESTASI & RUANG LINGKUP:     │
│                                        │                                        │
│ Bangun kredibilitas resmi yang mampu   │ • Starter (Mulai Rp 2,9 jt):           │
│ meyakinkan klien korporat & tender B2B.│   One-page, 3-5 section, Edge hosting. │
│                                        │ • Business ⭐ [Most Popular] (Rp 4,9 jt):│
│ Masalah Bisnis:                        │   Multi-page 5-7 hal, CMS, Schema SEO. │
│ Website lama terlihat kaku, lambat di  │ • Corporate (Rp 8,9 jt - Rp 15 jt+):   │
│ HP, dan membuat reputasi PT diragukan. │   Multi-language, karir, Lighthouse 100│
│                                        │                                        │
│ Deliverables Kunci:                    │ ┌- - - - - - - - - - - - - - - - - - ┐ │
│ • Next.js 16 SSG sub-detik di Edge     │ ┊ [ VOUCHER ] KONSULTASI COMPRO      ┊ │
│ • 100% Repositori GitHub diserahkan    │ ┊ Kode: ONG-COMPRO-2026              ┊ │
│ • Gratis domain .com / .id 1 tahun     │ ┊ [ ✂️ TEAR OFF & CHAT VIA WA ➜ ]    ┊ │
│ • WhatsApp Smart Router terpasang      │ └- - - - - - - - - - - - - - - - - - ┘ │
│                                        │                                        │
│ FOLIO HAL. 02                          │ FOLIO HAL. 03                          │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

---

### Spread 02: Sales & Lead Generation Website (`/folio/sales-website`)
```text
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ HALAMAN KIRI: ARSITEKTUR CORONG LEADS  │ HALAMAN KANAN: TIERS & PERFORATED VOUCHER│
├────────────────────────────────────────┼────────────────────────────────────────┤
│ [ 02 / SALES & LEAD GENERATION ]       │ PILIHAN INVESTASI & RUANG LINGKUP:     │
│                                        │                                        │
│ Mesin Perekrut Leads WhatsApp Pembeli  │ • Starter (Mulai Rp 5,9 jt):           │
│ Ber-tiket Tinggi untuk Dealer & Mesin. │   1 Core Offer LP, direct-response copy│
│                                        │ • Growth ⭐ [Best Value] (Rp 8,9 jt):   │
│ Alur Konversi Teruji:                  │   Multi-funnel, katalog unit, Meta CAPI│
│ Traffic Iklan ➜ Landing Page ➜ Spek   │ • Pro (Rp 14,9 jt+):                   │
│ Unit ➜ Simulasi ➜ WA Lead ➜ Closing.   │   Kalkulator kredit, multi-cabang kota │
│                                        │                                        │
│ Ideal Untuk:                           │ ┌- - - - - - - - - - - - - - - - - - ┐ │
│ Dealer Mobil/Motor, Alat Berat B2B,    │ ┊ [ VOUCHER ] BLUEPRINT SALES LEADS  ┊ │
│ Properti Real Estate, Kontraktor.      │ ┊ Kode: ONG-SALES-LEADS              ┊ │
│                                        │ ┊ [ ✂️ TEAR OFF & CHAT VIA WA ➜ ]    ┊ │
│                                        │ └- - - - - - - - - - - - - - - - - - ┘ │
│ FOLIO HAL. 04                          │ FOLIO HAL. 05                          │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

---

### Spread 03: E-Commerce & Shopify Development (`/folio/ecommerce-shopify`)
```text
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ HALAMAN KIRI: DIRECT ONLINE COMMERCE   │ HALAMAN KANAN: SHOPIFY D2C & VOUCHER   │
├────────────────────────────────────────┼────────────────────────────────────────┤
│ [ 03 / CUSTOM E-COMMERCE ENGINE ]      │ [ 04 / SHOPIFY D2C STOREFRONT ]        │
│                                        │                                        │
│ Jual produk langsung tanpa ketergan-   │ Toko online brand ritel kelas atas     │
│ tungan komisi marketplace 10-15%.      │ dengan Liquid 2.0 tanpa bloat plugin.  │
│                                        │                                        │
│ • Midtrans/Xendit QRIS & VA Otomatis   │ • Shopify Starter (Mulai Rp 3,9 jt)    │
│ • Cek Ongkir Kurir Indo per Kecamatan  │ • Shopify Growth ⭐ (Rp 6,9 jt)        │
│ • WhatsApp Order Notification & PDF    │ • Custom Liquid Theme (Rp 12,9 jt+)    │
│ • Mulai Rp 7,9 jt – Rp 19,9 jt+        │ • Headless Hydrogen (Rp 20 jt+)        │
│                                        │                                        │
│ ┌- - - - - - - - - - - - - - - - - - ┐ │ ┌- - - - - - - - - - - - - - - - - - ┐ │
│ ┊ [ VOUCHER ] TOKO ONLINE E-COMMERCE ┊ │ ┊ [ VOUCHER ] SPRINT SHOPIFY D2C     ┊ │
│ ┊ [ ✂️ TEAR OFF & CHAT VIA WA ➜ ]    ┊ │ ┊ [ ✂️ TEAR OFF & CHAT VIA WA ➜ ]    ┊ │
│ └- - - - - - - - - - - - - - - - - - ┘ │ └- - - - - - - - - - - - - - - - - - ┘ │
│ FOLIO HAL. 06                          │ FOLIO HAL. 07                          │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

---

### Spread 04: Custom Web Application & Systems (`/folio/custom-web-app`)
```text
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ HALAMAN KIRI: WORKFLOW AUTOMATION      │ HALAMAN KANAN: SYSTEM TIERS & VOUCHER  │
├────────────────────────────────────────┼────────────────────────────────────────┤
│ [ 05 / CUSTOM WEB APPLICATION ]        │ PILIHAN SISTEM & INVESTASI:            │
│                                        │                                        │
│ Rekayasa Sistem Digital Mengikuti SOP  │ • MVP / 1 Core Workflow:               │
│ & Alur Kerja Nyata Perusahaan Anda.    │   Mulai Rp 15.000.000 (Surat Jalan/RFQ)│
│                                        │ • Business System ⭐ [Recommended]:    │
│ Modul Siap Bangun:                     │   Rp 25.000.000 – Rp 50.000.000        │
│ • Custom CRM & Pipeline Penjualan      │   (CRM, ERP Mini, Role Admin, Export)  │
│ • Mini ERP & Manajemen Stok Multi-Gudang • Advanced Custom SaaS:                │
│ • Portal Khusus Klien / Dealer / Mitra │   Rp 50.000.000 – Rp 100.000.000+      │
│ • Internal Dashboard & Analytics       │                                        │
│                                        │ ┌- - - - - - - - - - - - - - - - - - ┐ │
│ Tech Stack:                            │ ┊ [ VOUCHER ] AUDIT ARSITEKTUR SISTEM┊ │
│ Next.js 16 · Edge Functions · DB       │ ┊ [ ✂️ TEAR OFF & CHAT VIA WA ➜ ]    ┊ │
│ Relasional · Strict TypeScript         │ └- - - - - - - - - - - - - - - - - - ┘ │
│ FOLIO HAL. 08                          │ FOLIO HAL. 09                          │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

---

### Spread 05: Galeri Portofolio & Showcase Proyek (`/folio/portfolio`) ⭐

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ SPREAD 05: GALERI PORTOFOLIO & CURATED CASE STUDIES SHOWCASE                           │
├────────────────────────────────────────┬───────────────────────────────────────────────┤
│ HALAMAN KIRI: DECK PROYEK TERKURASI    │ HALAMAN KANAN: INTERACTIVE PROJECT INSPECTOR  │
├────────────────────────────────────────┼───────────────────────────────────────────────┤
│ [ FILTER: All | Compro | Sales | E-Com │ [ PREVIEW ARTIFAK VISUAL PROYEK ]             │
│   Shopify | Web App ]                  │                                               │
│                                        │ ┌───────────────────────────────────────────┐ │
│ 1. [ SUMMARECON MUTIARA MAKASSAR ]     │ │ [Device Switcher: 💻 Desktop / 📱 Mobile] │ │
│    Kategori: Sales & Lead Gen Website  │ │                                           │ │
│    Hasil: CPL Iklan turun 42%, 1.200+  │ │  [ Gambar Mockup Halaman Web Resolusi     │ │
│    leads KPR terverifikasi masuk WA.   │ │    Tinggi dengan Frame Kertas Mewah ]     │ │
│                                        │ │                                           │ │
│ 2. [ NOCTURNE ATELIER (PARIS/JKT) ]    │ └───────────────────────────────────────────┘ │
│    Kategori: Shopify D2C Brand Fashion │                                               │
│    Hasil: Checkout naik +48%, load     │ Klien: Summarecon Mutiara Makassar            │
│    0.3s, $0 server cost di Black Friday│ Arsitektur: Next.js 16 SSG · Meta CAPI        │
│                                        │                                               │
│ 3. [ TRAKTOR NUSA TEKNIK B2B ]         │ Metrik Bukti:                                 │
│    Kategori: B2B Machinery Catalog     │ • Loading Speed: 0.28 detik                   │
│    Hasil: 450+ RFQ tender proyek/bulan │ • Google Lighthouse: 100 / 100                │
│                                        │ • Peningkatan Leads WhatsApp: +140%           │
│ 4. [ LOGIS-TRACK INDONESIA ]           │                                               │
│    Kategori: Custom Web App / Mini ERP │ [ ↗ Buka Demo Live Proyek Ini ]               │
│    Hasil: Eliminasi 95% salah surat jln│ [ ✂️ Klaim Desain Seperti Ini via WA Voucher ]│
│                                        │                                               │
│ FOLIO HAL. 10                          │ FOLIO HAL. 11                                 │
└────────────────────────────────────────┴───────────────────────────────────────────────┘
```

- **Interactive Gallery Features:**
  - **Filter Kategori Cepat:** Pengunjung bisa memfilter portofolio berdasarkan jenis layanan yang mereka minati.
  - **Interactive Device Viewport Toggler:** Pengunjung bisa men-toggle tampilan proyek antara mode Desktop dan Mobile.
  - **Lightbox Modal View:** Klik pada preview visual membuka modal galeri layar penuh dengan perbandingan *before vs after* dan arsitektur teknis lengkap.
  - **Direct WhatsApp Intent:** Setiap kartu proyek memiliki tombol voucher WhatsApp: *"Saya tertarik dengan desain & arsitektur proyek [Nama Proyek]"*.

---

### Spread 06: Website Maintenance Care & Add-Ons (`/folio/maintenance-care`)
```text
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ HALAMAN KIRI: RETENTION CARE PLANS     │ HALAMAN KANAN: ADD-ON ENGINEERING MENU │
├────────────────────────────────────────┼────────────────────────────────────────┤
│ [ 06 / WEBSITE MAINTENANCE CARE ]      │ [ MODUL REKAYASA ADD-ON STRATEGIS ]    │
│                                        │                                        │
│ Lindungi aset digital bisnis Anda agar │ 1. Server-Side Tracking (Meta CAPI)    │
│ selalu cepat, aman, dan tanpa error.   │    Rp 1,5 jt – Rp 3 jt (Bypass iOS 14) │
│                                        │ 2. Programmatic SEO Engine (pSEO)      │
│ Paket Perawatan:                       │    Rp 3,5 jt – Rp 7,5 jt (30+ Halaman) │
│ • Basic Care (Rp 300rb–500rb/bln):     │ 3. Copywriting Full Website            │
│   Uptime 24/7, backup cloud mingguan.  │    Rp 1,5 jt – Rp 3,5 jt               │
│ • Business Care ⭐ (Rp 750rb–1,5jt/bln):│ 4. AI Chatbot & WhatsApp Automation    │
│   Semua Basic + Audit Lighthouse + SEO │    Rp 2,5 jt – Rp 5 jt                 │
│ • Pro Care (Rp 2jt+/bln):              │                                        │
│   Dedicated engineer + CRO testing.    │ ┌- - - - - - - - - - - - - - - - - - ┐ │
│                                        │ ┊ [ VOUCHER ] PERAWATAN & ADD-ON     ┊ │
│                                        │ ┊ [ ✂️ TEAR OFF & CHAT VIA WA ➜ ]    ┊ │
│                                        │ └- - - - - - - - - - - - - - - - - - ┘ │
│ FOLIO HAL. 12                          │ FOLIO HAL. 13                          │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

---

### Spread 07: 30+ Niches Directory, Colophon & Back Cover (`/folio/colophon`)
```text
┌────────────────────────────────────────┬────────────────────────────────────────┐
│ HALAMAN KIRI: DIREKTORI 30+ CERUK      │ HALAMAN KANAN: COLOPHON & BACK COVER   │
├────────────────────────────────────────┼────────────────────────────────────────┤
│ INDEKS CERUK INDUSTRI (pSEO):          │ ONG-OS DIGITAL ENGINEERING FOLIO       │
│                                        │                                        │
│ • [01] Dealer Mobil & Motor            │ Komitmen Kejujuran Rekayasa Teknis:    │
│ • [02] Alat Berat & Mesin Industri     │ • 100% Repositori GitHub Milik Anda    │
│ • [03] Pengembang Properti             │ • $0 Biaya Server Hosting Selamanya    │
│ • [04] Kontraktor & Desain Interior    │ • Garansi Loading Sub-Detik            │
│ • [05] Klinik Medis & Dokter           │ • Zero Third-Party Plugin Lag          │
│ • [06] Kantor Hukum & Notaris          │                                        │
│ • [07] Brand Skincare & Kosmetik       │ ┌- - - - - - - - - - - - - - - - - - ┐ │
│ • [08] Ekspedisi & Logistik            │ ┊ [ VOUCHER UTAMA ]                  ┊ │
│ ... (30+ industri terindeks)           │ ┊ KONSULTASI LANGSUNG BERSAMA        ┊ │
│                                        │ ┊ SENIOR FULL-STACK LEAD VIA WA      ┊ │
│ [ Buka Halaman Spesifik Ceruk Ini ➜ ]  │ ┊ [ ✂️ TEAR OFF & CHAT SEKARANG ]    ┊ │
│                                        │ └- - - - - - - - - - - - - - - - - - ┘ │
│ FOLIO HAL. 14                          │ FOLIO HAL. 15 · BACK COVER             │
└────────────────────────────────────────┴────────────────────────────────────────┘
```

---

## 3. Responsive Adaptations (Mobile vs Desktop)

| Komponen | Tampilan Desktop (`>= 1024px`) | Tampilan Mobile (`< 1024px`) |
| :--- | :--- | :--- |
| **Buku / Spread** | 2 Halaman terbuka berdampingan (`SpreadView`) dengan bayangan lipatan tengah (*spine crease shadow*). | 1 Halaman vertikal penuh (`SingleSheetView`) dengan proporsi pas di genggaman tangan. |
| **Galeri Portofolio** | 2 Halaman: Halaman kiri daftar kartu proyek dengan filter kategori; Halaman kanan inspector visual interaktif dengan preview desktop/mobile. | Kartu proyek vertikal bertumpuk dengan preview visual swipeable dan tombol modal layar penuh. |
| **Navigasi** | Tombol panah keyboard `←` `→`, klik sudut lembar (*dog-ear*), atau klik tab pita pembatas samping. | Gestur swipe jempol horizontal kiri-kanan (`drag="x"` Motion dengan bounce physics) atau bottom sticky controller. |
| **Pita Pembatas** | Tab pita vertikal di sisi kanan buku selalu terlihat (Cover, Compro, Sales, Commerce, App, Galeri, Care, Index). | Drawer indeks mini yang bisa ditarik dari bawah atau ikon bookmark di header. |
| **Voucher WA** | Kartu voucher bergaris putus-putus dengan efek stempel tinta saat hover. | Tombol voucher lebar penuh yang mudah di-tap jempol dengan konfirmasi haptic visual. |
