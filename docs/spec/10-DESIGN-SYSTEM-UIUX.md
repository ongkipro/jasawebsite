# 10. Master UI/UX & Design System Pattern Specification
## Ong-OS Web Development Services (`ongki.pro`) · Warm Swiss Monograph & Tactile Digital Brochure

> **Reference Standards:** Christie’s Auction Monograph (High-Ticket Tactile Authority) × Studio Freight (Editorial Minimalism) × Apple Design Books (Precision Print Craft) × MetaLab (Conversion Engineering).

---

## 1. Executive Design Principles: The Living Digital Brochure

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              DESIGN AUDIT: SLOP VS TACTILE FOLIO                       │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│ ❌ REJECTED: "Standard Agency Slop"       │ ✅ ADOPTED: "Tactile Digital Brochure"     │
├───────────────────────────────────────────┼────────────────────────────────────────────┤
│ • Infinite Vertical Scroll Monoton        │ • Two-Page Open Book Spread (Desktop)     │
│ • Container Box Card Overload             │ • Single Tactile Sheet with Swipe (Mobile) │
│ • Rainbow Icons & Generic Bullets         │ • Monograph Precision (Ink & Paper)       │
│ • Unindexable Canvas / PDF Flipbook       │ • 100% Semantic HTML & SSG per Folio Sheet │
│ • Fluff Fake Reviews                      │ • Verified Outcome Metrics & Audit Stamps  │
│ • Generic "Hubungi Kami" Buttons          │ • Perforated Tear-off WhatsApp Vouchers    │
└───────────────────────────────────────────┴────────────────────────────────────────────┘
```

---

## 2. Design Tokens & Visual Hierarchy

### A. Color Palette: Warm Swiss Paper & Deep Charcoal Ink
```css
/* Paper Canvas & Folio Surfaces */
--paper-canvas: #fbfbfa;       /* Warm archival paper off-white */
--paper-surface: #ffffff;      /* Crisp pure white sheet surface */
--paper-subtle: #f4f4f2;       /* Light paper tint for margins & contrast */
--ink-charcoal: #111111;       /* Deep obsidian charcoal for primary typography */
--ink-secondary: #4a4a48;      /* Warm graphite for editorial body reading */
--ink-muted: #7c7c78;          /* Muted graphite for folio numbers & running headers */

/* Structural Hairlines & Creasing */
--border-hairline: #e5e5e0;    /* 1px clean paper edge divider */
--spine-crease-shadow: linear-gradient(90deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.01) 8%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.01) 92%, rgba(0,0,0,0.06) 100%);

/* Conversion Accents */
--accent-voucher: #059669;     /* Emerald-600: Perforated WhatsApp voucher slip */
--accent-seal: #dc2626;        /* Deep wax red: Certified studio stamp / seal */
```

### B. Typographic Scale & Rhythm System
```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Typographic Role   │ Desktop / Mobile │ Family    │ Weight    │ Tracking   │ Target    │
├────────────────────┼──────────────────┼───────────┼───────────┼────────────┼───────────┤
│ Folio Title H1     │ 48px / 32px      │ Editorial │ Bold 700  │ -0.04em    │ Sheet H1  │
│ Section Head H2    │ 32px / 24px      │ Editorial │ Bold 700  │ -0.03em    │ Spread H2 │
│ SOW Feature H3     │ 20px / 18px      │ Sans      │ Semi 600  │ -0.02em    │ Item H3   │
│ Body Reading       │ 16px / 15px      │ Sans      │ Reg 400   │ -0.01em    │ Narrative │
│ Folio Index Mono   │ 11px / 10px      │ Mono      │ Med 500   │ +0.08em    │ Page Num  │
└────────────────────┴──────────────────┴───────────┴───────────┴────────────┴───────────┘
```

---

## 3. The 10 Core Folio UI/UX Pattern Recipes

### Pattern 1: Two-Page Open Spread (`SpreadView`)
- **Role:** Menghadirkan sensasi visual membaca majalah/buku fisik di atas meja pada viewport desktop (`>= 1024px`).
- **Layout:** Flex row 2 kolom berimbang (`w-1/2 left` dan `w-1/2 right`) terbungkus dalam frame bersudut halus dengan bayangan lipatan buku (*spine crease*) di tengah.

### Pattern 2: Single Tactile Sheet (`SingleSheetView`)
- **Role:** Mengakomodasi layar smartphone (`< 1024px`) dengan lembaran tunggal yang proporsional dan mudah digulir.
- **Interaksi:** Dilengkapi gestur swipe horizontal jempol (`drag="x"` Motion dengan spring physics) untuk membalik lembar ke depan atau belakang.

### Pattern 3: 3D Sheet Turn Motion (`SheetTurner`)
- **Role:** Animasi perpindahan antar lembar buku yang memukau namun ultra-ringan (60–120 FPS).
- **Spesifikasi:** Transformasi 3D CSS `rotateY` dengan `perspective(1200px)` dan `transform-origin: left/right`. Fallback instan ke cross-fade jika `prefers-reduced-motion` aktif.

### Pattern 4: Corner Dog-Ear Hover Peel (`DogEarPeel`)
- **Role:** Memberikan isyarat visual (*affordance*) bahwa sudut halaman siap untuk dibalik.
- **Interaksi:** Saat kursor mendekati sudut kanan bawah lembar buku, segitiga kertas terangkat sedikit (+3px) dengan bayangan lembut.

### Pattern 5: Interactive Bookmark Ribbon Index (`BookmarkRibbon`)
- **Role:** Pita pembatas buku di sisi kanan luar yang berfungsi sebagai navigasi bab cepat.
- **Visual:** Tab vertikal monospaced (`01 COVER`, `02 SOW`, `03 SHOPIFY`, `04 METRICS`, `05 NICHE`, `06 KONTAK`). Saat di-hover, tab bergeser keluar 4px.

### Pattern 6: Perforated Tear-Off WhatsApp Voucher (`TearOffVoucher`)
- **Role:** Mengubah tombol CTA konvensional menjadi kupon voucher sobekan fisik yang memikat calon klien.
- **Detail Visual:** Garis tepi putus-putus (*dashed 2px*), teks monospaced *"VOUCHER DISCOVERY RESMI"*, dan tombol aksi WhatsApp berstempel studio.

### Pattern 7: Certified Studio Wax/Ink Seal (`InkStamp`)
- **Role:** Stempel verifikasi keaslian performa (*"CERTIFIED LIGHTHOUSE 100/100 · ZERO JS BLOAT"*).
- **Visual:** Desain lingkaran stempel monokrom arang atau merah bata dengan kemiringan tipis (-4deg) seolah dicap manual di atas kertas.

### Pattern 8: Rolling Folio Page Counter (`FolioCounter`)
- **Role:** Menampilkan nomor halaman editorial yang bergulir vertikal secara mekanik (`[FOLIO HAL. 03 / 12]`).

### Pattern 9: Minimalist Running Header & Audio/Zoom Bar
- **Role:** Baris informasi teknis di sudut atas lembaran yang memuat judul bab berjalan (*running head*) dan opsi toggle audio sensasi kertas (*optional paper rustle*).

### Pattern 10: Keyboard Navigation Overlay (`KeyboardNav`)
- **Role:** Indikator halus di sudut bawah buku: `[Tekan ← / → untuk membalik lembar]`.

---

## 4. Mobile & Desktop Responsive Layout Matrix

| Viewport | Lebar Layar | Model Tampilan UI/UX |
| :--- | :--- | :--- |
| **Mobile** | `360px - 640px` | SingleSheetView, gesture swipe horizontal `drag="x"`, sticky bottom page controller. |
| **Tablet** | `768px - 1023px` | SingleSheetView diperluas dengan margin editorial lapang dan tab bookmark atas. |
| **Desktop** | `1024px - 1536px`| SpreadView 2-halaman terbuka berdampingan lengkap dengan spine crease dan bookmark ribbon kanan. |

---

## 5. SEO & Structured Data per Folio Sheet

Setiap lembar buku yang dirender secara SSG menyertakan Schema.org JSON-LD lengkap:
1. **Folio Cover & SOW:** Schema `ProfessionalService` + `BreadcrumbList`.
2. **Folio Niche (30+ industri):** Schema `LocalBusiness` spesifik industri dengan daftar layanan.
3. **Folio Case Studies:** Schema `Article` / `CreativeWork` dengan metrik verifikasi.

