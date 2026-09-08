# Release Manifest — JasaWebsite.co by ONG (`jasawebsite.co`)

Release-ID: REL-20260908-002
Base: 31aff6a
Environment: production
Declared-Risk: R0
Rollback-Ref: HEAD~1
Rollback-Command: git revert HEAD --no-edit
Backup-Proof: NOT_REQUIRED
Status: RELEASED_VERIFIED

## Contract & Deployment Evidence

- **Live Production URL:** [https://jasawebsite.co](https://jasawebsite.co)
- **Vercel Deployment URL:** [https://jwco.vercel.app](https://jwco.vercel.app)
- **Vercel Project:** `ongkipro/jwco` (`prj_M3dsY8tssCiR2RL9OIxUtFFZsmet`)
- **Framework & Runtime:** Next.js 16.3.4 App Router SSG (Turbopack, Tailwind CSS v4, Motion 13.2.0)
- **DNS & CDN:** Cloudflare (DNS Only / Proxy -> `76.76.21.21`), Vercel Edge Singapore (`sin1`)
- **Probes Verified:**
  - `GET /` -> HTTP 200 (text/html)
  - `GET /folio/cover` -> HTTP 200 (text/html)
  - `GET /folio/company-profile` -> HTTP 200 (text/html)
  - `GET /folio/sales-website` -> HTTP 200 (text/html)
  - `GET /folio/niche-dealer-otomotif` -> HTTP 200 (text/html)
  - `GET /sitemap.xml` -> HTTP 200 (application/xml)
  - `GET /robots.txt` -> HTTP 200 (text/plain)
  - `GET /og-image.jpg` -> HTTP 200 (image/jpeg)
- **SEO & Structured Data:** Active Schema.org JSON-LD graph (`ProfessionalService`, `LocalBusiness`, `OfferCatalog`, `BreadcrumbList`)
- **Customer Hotline:** Call & WhatsApp `+62 838-3044-1495` (`6283830441495`), Email: `get@ongki.pro`
