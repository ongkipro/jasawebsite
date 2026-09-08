# Decision Register — jasawebsite

Updated: 2026-08-30

Record accepted decisions that materially constrain product behavior,
architecture, security, data, operations, or delivery. Repository evidence must
support each decision; AI output alone is not evidence.

| DEC-001 | SUPERSEDED | Next.js App Router with Pure SSG | Sub-second loading (<0.8s), zero server maintenance | Superseded by DEC-007 | — |
| DEC-002 | ACCEPTED | Static Typed JSON Data Stores (`src/data/`) instead of traditional SQL/NoSQL DB | Zero-DB latency, simplicity, immutability at build time, 30+ pSEO pre-rendering | `docs/spec/04-SYSTEM-ARCHITECTURE.md`, `docs/spec/08-PROGRAMMATIC-SEO-ENGINE.md` | — |
| DEC-003 | ACCEPTED | Direct WhatsApp Business Intent Routing (`wa.me`) as Primary Conversion Funnel | Eliminate form drop-offs, provide context-aware chat messages with UTM tags for immediate closing | `docs/spec/07-WHATSAPP-CONVERSION-FUNNEL.md` | — |
| DEC-004 | ACCEPTED | Static Programmatic SEO Engine (30+ Industry Verticals) with Automated Schema.org JSON-LD | Dominating Google Search long-tail keywords for niche website services without manual CMS overhead | `docs/spec/08-PROGRAMMATIC-SEO-ENGINE.md` | — |
| DEC-005 | ACCEPTED | Dedicated Shopify Professional Development Pillar (`/shopify` & sub-routes) | Capture high-ticket D2C e-commerce clients, WooCommerce migrations, and custom Liquid 2.0 theme setups | `docs/spec/02-PRD.md`, `docs/spec/11-PRICING-PACKAGING-MODEL.md` | — |
| DEC-006 | ACCEPTED | Tailwind CSS v4 + Lucide React for UI Styling | Zero CSS bloat, clean accessible interactive elements, lightning fast rendering | `docs/spec/10-DESIGN-SYSTEM-UIUX.md` | — |
| DEC-007 | SUPERSEDED | Astro 5 (`astro build`) Zero-JS by Default | Superseded by DEC-009 for advanced tactile React Motion sheet interactions | `docs/spec/04-SYSTEM-ARCHITECTURE.md` | DEC-001 |
| DEC-008 | ACCEPTED | Cardless Invisible Architecture & Bespoke SOW Model | Eliminate AI-template box clutter, rounded border overload, and commodity price cards in favor of editorial typography and SOW discovery | `docs/spec/10-DESIGN-SYSTEM-UIUX.md`, `docs/spec/11-PRICING-PACKAGING-MODEL.md` | — |
| DEC-009 | ACCEPTED | Next.js 16 App Router SSG + Motion (Framer Motion) | Enables hardware-accelerated 3D sheet-turn physics, touch-swipe gestures on mobile, and dual-layer RSC for 100% crawlable semantic HTML | `docs/spec/04-SYSTEM-ARCHITECTURE.md`, `AGENTS.md` | DEC-007 |
| DEC-010 | ACCEPTED | Tactile Folio Sheet-by-Sheet Metaphor with Perforated Vouchers | Replace conventional vertical scroll with an interactive 2-page open book spread (desktop) and swipeable sheet (mobile) plus perforated WhatsApp vouchers | `docs/spec/05-DESIGN-BLUEPRINT.md`, `docs/spec/10-DESIGN-SYSTEM-UIUX.md` | — |
| DEC-011 | ACCEPTED | High-Fill Obsidian Squircle Favicon & Vector SVG Suite | Solves low 16x16 browser tab legibility with max-fill squircle badge (#0e0f12, 112px radius, 187px font, glowing vermillion dot #ff453a) + full multi-resolution PNG/SVG/ICO suite | `src/app/layout.tsx`, `public/favicon.svg`, `scripts/build_favicons.py` | — |

Use stable IDs such as `DEC-001`. When a decision needs detailed alternatives or
consequences, add a repository-owned ADR and link it from this register. Never
rewrite history silently: mark the old decision superseded and add the new one.

