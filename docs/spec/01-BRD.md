# 01. Business Requirements Document (BRD)
## Ong-OS Web Development Services · Strategic Positioning, Product Architecture & Revenue Model

---

### 1. Executive Business Objective & Positioning
Membangun platform **Ong-OS Web Development Services** (`ongki.pro`) sebagai studio rekayasa digital full-stack terdepan di Indonesia. 

**Bukan Sekadar Jasa Pembuatan Website:**
> *"Full-Stack Web Development untuk membantu bisnis membangun presence, menghasilkan leads, menjual produk, dan menjalankan proses bisnis secara digital."*

**Tagline & Core Value:**
> **"Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh"**  
> *(Website & Digital Systems Built for Business Growth)*

**Strategi Posisi Pasar (The Sweet Spot):**
* **Bukan Jasa Website Murah:** Tidak melayani perang harga komoditas template murahan yang menarik customer paling sensitif harga.
* **Bukan Software House Elitis yang Lambat & Mahal:** Mengambil posisi di tengah: *Professional Full-Stack Engineering* dengan harga yang masuk akal dan terjangkau untuk bisnis Indonesia yang sedang bertumbuh (Growing UMKM & SMB ticket Rp 5–20 juta, dengan eskalasi Corporate & Enterprise Rp 20–100 juta+).
* **Format Presentasi Digital Brochure:** Disajikan dalam bentuk **Buku / Brosur Digital Taktil Lembar-per-Lembar** yang 100% SEO-friendly, membedakan Ong-OS secara visual dan wibawa dari agensi biasa.

---

### 2. The 5 Core Offerings & Solution Architecture

Klien membeli berdasarkan **masalah bisnis** yang ingin mereka selesaikan, bukan nama teknologi (React, Node, DB). Ong-OS membagi layanannya ke dalam **5 Pilar Utama**:

```text
                           ONG-OS WEB DEVELOPMENT
                                     │
      ┌──────────────────────────────┼──────────────────────────────┐
      ▼                              ▼                              ▼
[ 1. Company Profile ]     [ 2. Sales & Leads ]           [ 3. E-Commerce ]
Kredibilitas, Profil PT,   Traffic to Leads, Dealer,      Katalog, Cart, Checkout,
CV, B2B, Lembaga           Mesin, Properti, Kontraktor    Direct Sales & Payment
(Rp 2,9jt – Rp 8,9jt+)     (Rp 5,9jt – Rp 14,9jt+)        (Rp 7,9jt – Rp 19,9jt+)
                                     │
      ┌──────────────────────────────┴──────────────────────────────┐
      ▼                                                             ▼
[ 4. Shopify Development ]                        [ 5. Custom Web Application ]
Custom Liquid 2.0, Indo Kurir/QRIS,               Full-Stack Digital Systems: CRM, ERP,
Headless Storefront (Rp 3,9jt – Rp 20jt+)         Portal, Dashboard, SaaS (Rp 15jt – Rp 50jt+)
```

#### Detail 5 Layanan:
1. **Company Profile Website:** Untuk UMKM, PT, CV, kontraktor, supplier, klinik, yayasan. Tujuan: membangun kredibilitas, menampilkan portofolio, dan mendapatkan inquiry B2B.
2. **Sales & Lead Generation Website (Pemisahan Fundamental dari Compro):** Model dealer kendaraan/alat berat, properti, distributor, kontraktor. Flow: *Traffic Ads ➜ Landing Page ➜ Spec ➜ Offer ➜ WhatsApp / Form ➜ Sales Team*.
3. **E-Commerce Website:** Transaksi langsung (*Traffic ➜ Product ➜ Cart ➜ Checkout ➜ Payment Midtrans/Xendit ➜ Shipping API ➜ Fulfillment*).
4. **Shopify Development:** Layanan tersendiri untuk brand D2C ritel (Liquid 2.0 kustom, integrasi kurir lokal & QRIS, migrasi WooCommerce, hingga headless Hydrogen).
5. **Custom Web Application (Full-Stack Systems):** Solusi sistem digital tingkat lanjut (CRM, ERP, portal dealer, booking platform, SaaS internal).

---

### 3. Client Segmentation & Revenue Ladder

```text
REVENUE LADDER (CLIENT JOURNEY):
Company Profile (Rp 2,9 – 8,9 jt)
       ↓
Sales Website (Rp 5,9 – 14,9 jt)  ⭐⭐⭐⭐⭐ (Primary Money Maker)
       ↓
E-Commerce / Shopify (Rp 3,9 – 19,9 jt) ⭐⭐⭐⭐⭐ (Primary Money Maker)
       ↓
Custom Application (Rp 15 – 50 jt+) ⭐⭐⭐⭐⭐ (High Ticket)
       ↓
Enterprise Development (Rp 50 jt+)
       ↓
Recurring Services: Maintenance (Rp 300rb–2jt+/bln) + SEO + Tracking + AI/Automation
```

#### Segmentasi Target:
* **UMKM (Budget Rp 2,9 – 7,9 jt):** Pintu masuk klien (*Lead Generator*) via Company Profile & Simple Sales LP.
* **Growing Business / SMB (Budget Rp 7,9 – 20 jt) — CORE MARKET ONG-OS:** Sales Website, E-Commerce Business, Shopify Growth. Kebutuhan nyata, siklus keputusan cepat, kemampuan bayar baik.
* **Corporate (Budget Rp 15 – 50 jt+):** Dealer, distributor portal, corporate portal, custom dashboard.
* **Enterprise (Budget Rp 50 jt+):** Request for Proposal (RFP) kustom, integrasi multi-sistem, SLA khusus.

---

### 4. Supporting & Recurring Growth Services

Agar margin sehat, add-ons dan maintenance tidak digratiskan melainkan menjadi sumber **recurring revenue**:
* **Website Maintenance Care:** Basic Care (Rp 300–500rb/bln), Business Care (Rp 750rb–1,5jt/bln ⭐), Pro Care (Rp 2jt+/bln).
* **Tracking & Analytics:** GA4, GTM, Meta Pixel CAPI, TikTok Events API, server-side tracking.
* **SEO & Growth:** Technical SEO, Local SEO Google Maps, Programmatic SEO.
* **Automation & AI Integration:** WhatsApp lead routing automation, CRM sync, AI Customer Service agent.

---

### 5. Delivery Model di Era AI: The Ong-OS Web Engine

Target produksi internal: bukan membuat ulang setiap website dari 0 (`1 client = 1 website dari nol`), melainkan membangun **Ong-OS Web Engine** dengan arsitektur modul reusable:
* Reusable UI Components & Design Tokens
* Reusable CMS & Admin Primitives
* Reusable Form & Lead Capture Routing
* Reusable Payment & Shipping Connectors

AI digunakan untuk akselerasi requirements, UI generation, refactoring, SEO copy, dan QA testing, sehingga:
> **Cost per project turun seiring bertambahnya klien, sementara kecepatan delivery meningkat dan profit margin terjaga tinggi.**


