# Implementation Architecture — JasaWebsite.co

Updated: 2026-09-11. This records the current implementation, not performance targets from earlier design documents.

## Runtime and data

Next.js 16.3.4 App Router with React 19.2.8 builds a static export (`output: 'export'`). There is no request-time application server, database, authentication, payment processing, or submission endpoint. Static JSON under `src/data/` provides services, 24 niches, 13 portfolio entries, and folio order. Contact actions open `tel:` or `https://wa.me/` URLs.

Route pages and metadata run at build time. `BookFolioRenderer` and the sheets it imports belong to a client module graph, even when individual files omit `use client`. Next.js still pre-renders them to HTML. The entire content layer is **not** an RSC-only implementation. Separating non-interactive content from the client graph is a future architecture option, not a completed optimization.

## Routes and SEO

| Route | Rendering and purpose |
| --- | --- |
| `/` | Cover, studio introduction, links to services |
| `/folio/cover` | Retained alias; canonical and page entity point to `/` |
| Seven other core `/folio/[slug]` routes | Services, portfolio, maintenance, industry directory |
| 24 `/folio/niche-[slug]` routes | Industry-specific web-development proposals |
| `/sitemap.xml`, `/robots.txt` | Static discovery metadata |
| Unknown paths | Host must serve `404.html` with HTTP 404 |

All 33 content routes are generated. The sitemap advertises 32 canonical URLs and deliberately omits unmaintained modification dates. Metadata and social tags are emitted in HTML. Root and alias descriptions use the same definition.

`generateMasterSchema()` describes the studio and website. `generateSheetSchema()` emits a page and breadcrumb, a separate service entity for relevant routes, and an ItemList for portfolio. Display anchors such as `Rp 2,9jt` become numeric IDR minimum-price specifications; unknown formats fail the build. The client's industry schema hint is not used as the agency page's business identity. There is no unsubstantiated aggregate rating or invisible FAQ entity.

## Navigation and responsive behavior

`BookShell` owns core spread state. Core navigation updates History API and document metadata together; back/forward restores spread state. Next.js links provide real URLs, and niche navigation uses the router. Shared document updates include canonical, description, social tags, language alternate, and sheet JSON-LD.

Desktop, tablet, and mobile wrappers currently render separate component instances and hide inactive viewport wrappers with CSS. This duplicates some HTML and client work. It is a known architecture cost, not an SEO indexing guarantee. A single visible primary heading is checked in the default view of each route.

Page turns use Motion transforms and opacity after interaction; initial content is visible before hydration. Reduced-motion mode removes translation during subpage changes and disables decorative CSS animation. Scrollable sheets fit inside a fixed-height viewport.

Portfolio uses a native modal dialog, browser-managed focus containment, Escape handling, and focus restoration. Global shortcuts ignore interactive controls, modifiers, prevented events, and open dialogs. Niche/subpage dropdowns use disclosure semantics instead of incomplete ARIA menu/listbox widgets.

## Trust boundaries

Anonymous visitors can filter local data and select navigation/contact links. Search strings are rendered through React escaping; there are no user-triggered application-side writes or fetch endpoints. JSON-LD input is maintained repository content. WhatsApp messages are URL-encoded; no messages are sent by the application itself.

The preview server is loopback-only development tooling, not production infrastructure. Hosting headers, credentials, DNS, and deployment aliases remain outside this application. No secrets are needed to build or test.

## Verification and deployment

- `npm run build`: TypeScript and production static export.
- `npm test`: actual generated page/schema/link checks.
- `npm run test:ui`: local Chrome navigation, responsive, keyboard, and no-JavaScript checks.
- `npm run audit:performance`: pinned full Lighthouse; preserve JSON and device profile.
- `npm run lint`: code checks; raw preoptimized image warnings are recorded separately.

The recorded production domain is `https://jasawebsite.co`. `RELEASE.md` records a Vercel release. `.github/workflows/ci-cd.yml` contains a conditional Cloudflare Pages deployment; its latest inspected deployment step was skipped. This does not prove simultaneous hosting on both providers. No infrastructure change is part of this audit.
