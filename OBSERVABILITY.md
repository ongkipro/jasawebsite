# Runtime Verification — JasaWebsite.co

Updated: 2026-09-11. Static Next.js export; no application backend or configured telemetry collector was found.

## Public health probes

Run these after an authorized deployment. Latency limits below are investigation thresholds, not an advertised SLA or evidence of a configured monitoring service.

```text
Probe: home|https://jasawebsite.co/|200|JasaWebsite.co|3000
Probe: folio-cover|https://jasawebsite.co/folio/cover|200|JasaWebsite.co|3000
Probe: folio-compro|https://jasawebsite.co/folio/company-profile|200|Company Profile|3000
Probe: folio-sales|https://jasawebsite.co/folio/sales-website|200|Sales|3000
Probe: folio-commerce|https://jasawebsite.co/folio/ecommerce-shopify|200|Shopify|3000
Probe: folio-app|https://jasawebsite.co/folio/custom-web-app|200|CRM|3000
Probe: folio-portfolio|https://jasawebsite.co/folio/portfolio|200|Portofolio|3000
Probe: folio-maintenance|https://jasawebsite.co/folio/maintenance-care|200|Maintenance|3000
Probe: folio-colophon|https://jasawebsite.co/folio/colophon|200|Industri|3000
Probe: folio-niche-dealer|https://jasawebsite.co/folio/niche-dealer-otomotif|200|Dealer|3000
Probe: sitemap|https://jasawebsite.co/sitemap.xml|200|urlset|3000
Probe: robots|https://jasawebsite.co/robots.txt|200|sitemap.xml|3000
Probe: missing|https://jasawebsite.co/audit-missing-page|404|Lembar|3000
```

Also inspect canonical, the 32 canonical sitemap URLs, service prices, stylesheet/script requests, and a WhatsApp link without sending a message. A source fetch is not proof of browser interaction.

## Measurement contract

- Preserve Lighthouse version, device profile, throttling, URL, timestamp, and raw JSON. Compare before/after on the same host/profile. Local scores do not certify production scores.
- PageSpeed Insights API currently returned HTTP 429 during this audit; no PSI score or CrUX field result was obtained.
- Search Console and Bing Webmaster ownership, index coverage, search queries, and conversion attribution remain unverified. No account session or credentials were accessed.
- WhatsApp links carry contextual reference tags. They do not record a completed lead, a sent message, or a purchase. Incoming campaign query parameters are not currently persisted into this attribution model.
- Before adding tracking, define the event, owner, destination, and privacy/consent requirements. Do not count opening WhatsApp as a confirmed conversion.

## Incident handling

For blank pages or navigation errors, reproduce the exact URL/device and run the local browser QA. For 404 failures, inspect host routing rather than changing the application's not-found copy. For metadata drift, compare initial HTML with the post-navigation DOM.

Review `RELEASE.md` for the deployed artifact. A successful CI job with a skipped deployment step is not release evidence. Rollback requires the real prior deployment or commit, separate authorization, and repeated runtime probes.
