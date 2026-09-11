# Current Handoff — JasaWebsite.co

Updated: 2026-09-11. Task: FEAT-SHOPIFY-01 (Dedicated Bespoke Shopify Service & Growth Engine).

## Delivery state

Shopify bespoke service sheet, dedicated SEO route, and ribbon navigation are deployed to production from `36087067f3f6e1ae575dce0297e4dd7393f1579a`, following a clean rebase on `origin/main`. Vercel deployment `dpl_AkzQdKMB8fMgYzP1MN88FUM66Cw7` is ready and aliased to `jasawebsite.co`. Working tree is verified.

The current deployment and preceding releases are documented in [RELEASE.md](file:///Users/ongki/Projects/jasawebsite/RELEASE.md). Historical completion claims in the build log do not establish the current state.

## Implemented

- Correct IDR starting-price schema and web-development service identity; remove unsupported rating and invisible FAQ markup.
- Canonical cover alias, consistent root metadata, 32 canonical sitemap entries, no fabricated modification dates, and language-alternate synchronization during navigation.
- Visible initial HTML; corrected mobile directory heading; focus outlines, touch targets, contrast, reduced motion, and transform-only corner hover.
- Native portfolio dialog with focus containment/restoration and shell keyboard isolation; searchable niche disclosure and mobile subpage focus recovery.
- Pinned browser/Lighthouse QA tooling and tests against actual generated HTML and user interactions.
- Validated page-by-page development XML: 32 canonical pages plus the cover alias, synchronized with code, built metadata, prices, and its public copy.
- Refreshed README, implementation architecture, observability, audit report, and execution log.

## Verification evidence

- Build, TypeScript, and lint passed; lint retains 11 existing raw-image warnings.
- 1,634 generated-output checks and 83 browser route/viewport cases passed, plus critical interactions.
- Independent reviewer `/root/designer` accepted the changes after verifying its reported fixes.
- Same-host mobile Lighthouse comparison: 79 → 88 performance, 91 → 100 accessibility, LCP 4.38s → 3.76s. Final local desktop: 100/100/100/100.
- npm audit reported zero known vulnerabilities. The Google PSI endpoint remained unavailable (429).
- Delivery evidence is recorded under `.delivery/runs/RUN-20260910T165913Z-139c7750.jsonl`.

See [the audit](docs/audit/2026-09-11-qa.md) for reproduction commands, artifact links, and limits. These are local measurements; the production site still serves the earlier release.

## External limitations

- PageSpeed Insights API returned 429; the public UI did not produce a completed report during the initial attempt. Google-hosted PSI and CrUX field data remain unverified.
- Search Console, Bing Webmaster, traffic, conversion reports, review evidence, and portfolio business-metric provenance were not available.
- Live responses identify Vercel. The inspected GitHub workflow succeeded while its Cloudflare deployment step was skipped. No deployment configuration was changed.
- Current code keeps separate responsive component trees and broad client imports. These are documented architecture costs, not newly introduced failures.

## Next release boundary

After user-authorized commit/push/deployment, rerun live HTTP, browser, canonical, structured-price, sitemap, and Lighthouse checks. Local validation does not certify the as-yet undeployed result.
