# Observability Contract — Ong-OS Web Development Services (`ongki.pro`)

Updated: 2026-09-08
Status: ACTIVE
Hosting Target: Cloudflare Pages Edge ($0 Server Cost)
Architecture: Next.js 16 App Router SSG (Living Digital Brochure)

Probe format:

```text
Probe: <name>|<url>|<expected-status>|<contains-or-TBD>|<max-latency-ms>
```

Every configured probe is mandatory. Use stable, non-secret public endpoints only.

Probe: home|https://jasawebsite.co/|200|Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh|500
Probe: folio-cover|https://jasawebsite.co/folio/cover|200|ONG-OS DIGITAL ENGINEERING FOLIO|500
Probe: folio-compro|https://jasawebsite.co/folio/company-profile|200|Company Profile Website|500
Probe: folio-sales|https://jasawebsite.co/folio/sales-website|200|Sales & Lead Generation Website|500
Probe: folio-commerce|https://jasawebsite.co/folio/ecommerce-shopify|200|E-Commerce & Shopify|500
Probe: folio-app|https://jasawebsite.co/folio/custom-web-app|200|Custom Web Application|500
Probe: folio-portfolio|https://jasawebsite.co/folio/portfolio|200|Galeri Portofolio|500
Probe: folio-maintenance|https://jasawebsite.co/folio/maintenance-care|200|Website Maintenance Care|500
Probe: folio-colophon|https://jasawebsite.co/folio/colophon|200|Colophon & Back Cover|500
Probe: folio-niche-dealer|https://jasawebsite.co/folio/niche-dealer-otomotif|200|Dealer Mobil|500
Probe: sitemap|https://jasawebsite.co/sitemap.xml|200|urlset|500
Probe: robots|https://jasawebsite.co/robots.txt|200|User-agent|300
Probe: peta-xml|https://jasawebsite.co/peta-development.xml|200|development-map|300
Probe: favicon-svg|https://jasawebsite.co/favicon.svg|200|<svg|300
Probe: icon-512|https://jasawebsite.co/icon.png|200|PNG|500
Probe: llms-txt|https://jasawebsite.co/llms.txt|200|JasaWebsite.co|300
