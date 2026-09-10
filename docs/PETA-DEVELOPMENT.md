# Page-by-Page Development Map

Updated: 2026-09-11. This is a development catalog, not a search-engine sitemap or deployment report.

The canonical machine-readable map is [peta-development.xml](peta-development.xml). It covers 32 canonical content pages plus the retained `/folio/cover` alias (33 public content URLs), and nine supporting/error endpoint entries. Its XML namespace is a vocabulary identifier, not a claim that a downloadable XSD exists.

Each content entry records its URL/canonical, source route, client entry, content components, data and metadata source, exported HTML path, schema types, and current SEO title. Service/niche entries include prices and voucher context from the actual data. The public XML is an identical compatibility copy; maintain the `docs/` map first and synchronize that copy. XML is for development; `sitemap.xml` remains the crawler discovery artifact.

Run `npm run build`, then `npm run test:map`. The check validates XML syntax, route coverage, file references, canonical policy, titles, price/tier data, and equality of the public copy. Build/runtime truth remains in [ARCHITECTURE.md](../ARCHITECTURE.md); tasks and release state remain in the root canonical documents.

| Canonical route | Current SEO title | Content component(s) |
| --- | --- | --- |
| `/` | Jasa Pembuatan Website Profesional & Toko Online Indonesia | `sheets/CoverSheet.tsx` + `sheets/TocSheet.tsx` |
| `/folio/company-profile` | Jasa Pembuatan Website Company Profile Korporat & B2B | `sheets/ComproSheet.tsx` |
| `/folio/sales-website` | Jasa Pembuatan Landing Page Iklan Sales & Leads WhatsApp | `sheets/SalesSheet.tsx` |
| `/folio/ecommerce-shopify` | Jasa Pembuatan Toko Online Shopify & E-Commerce Mandiri | `sheets/CommerceSheet.tsx` |
| `/folio/custom-web-app` | Jasa Pembuatan Web Application Custom, CRM & Mini ERP | `sheets/CustomAppSheet.tsx` |
| `/folio/portfolio` | Portofolio Jasa Pembuatan Website & Studi Kasus Sistem Live | `sheets/PortfolioGallerySheet.tsx` |
| `/folio/maintenance-care` | Jasa Maintenance Website, Monitoring Uptime & Setup Ads | `sheets/MaintenanceSheet.tsx` |
| `/folio/colophon` | Direktori Jasa Pembuatan Website 24 Sektor Industri Bisnis | `sheets/NicheCatalogSheet.tsx` + `sheets/ColophonSheet.tsx` |
| `/folio/niche-dealer-otomotif` | Jasa Pembuatan Website Dealer Mobil & Showroom Otomotif | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-rental-mobil-bus-pariwisata` | Jasa Pembuatan Website Rental Mobil & Bus Pariwisata | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-bengkel-mobil-body-repair` | Jasa Pembuatan Website Bengkel Mobil & Body Repair | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-alat-berat-mesin` | Jasa Pembuatan Website Alat Berat & Mesin Industri | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-pabrik-manufaktur-b2b` | Jasa Pembuatan Website Pabrik & Manufaktur Industri B2B | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-percetakan-packaging-kemasan` | Jasa Pembuatan Website Percetakan & Packaging Kemasan | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-developer-properti` | Jasa Pembuatan Website Developer Properti & Real Estate | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-kontraktor-arsitek` | Jasa Pembuatan Website Kontraktor & Desain Arsitek | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-klinik-kesehatan` | Jasa Pembuatan Website Klinik Medis & Fasilitas RS | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-distributor-alkes-farmasi` | Jasa Pembuatan Website Distributor Alkes & Farmasi B2B | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-kantor-hukum-advokat` | Jasa Pembuatan Website Kantor Hukum & Advokat Pengacara | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-konsultan-pajak-akuntan` | Jasa Pembuatan Website Konsultan Pajak & Kantor Akuntan | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-konsultan-it-cctv-keamanan` | Jasa Pembuatan Website IT Solution & Sistem Keamanan | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-brand-fashion-d2c` | Jasa Pembuatan Website Brand Fashion & Toko Apparel D2C | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-brand-skincare-kosmetik` | Jasa Pembuatan Website Brand Skincare & Kosmetik BPOM | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-restoran-cafe-fnb` | Jasa Pembuatan Website Restoran, Cafe & Bisnis Kuliner | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-event-organizer-wedding-planner` | Jasa Pembuatan Website Wedding Planner & Event Organizer | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-ekspedisi-logistik-cargo` | Jasa Pembuatan Website Ekspedisi & Logistik Cargo B2B | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-ekspor-komoditas-hasil-bumi` | Jasa Pembuatan Website Eksportir Komoditas Hasil Bumi | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-sekolah-universitas-bimbel` | Jasa Pembuatan Website Sekolah, Kampus & Lembaga Bimbel | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-tour-travel-umroh` | Jasa Pembuatan Website Travel Umroh & Wisata Halal Haji | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-cleaning-service-pest-control` | Jasa Pembuatan Website Cleaning Service & Pest Control | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-agribisnis-peternakan-modern` | Jasa Pembuatan Website Agribisnis & Peternakan Modern | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |
| `/folio/niche-koperasi-keuangan-mikro` | Jasa Pembuatan Website Koperasi Simpan Pinjam & Finansial | `sheets/NicheDetailSheet.tsx` + `sheets/NicheDetailSheet.tsx` |

`/folio/cover` uses the cover components through `src/app/folio/[slug]/page.tsx`, exports `out/folio/cover.html`, and canonicalizes to `/`. It is excluded from the 32-URL sitemap.
