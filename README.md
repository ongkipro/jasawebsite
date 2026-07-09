# JASAWEBSITE.co — by VOLUM

> Website agency: **Astro + React islands** di **Cloudflare Pages/Workers**, DB **D1**, storage **R2**, cache **KV**.
> PRD lengkap: `~/Documents/work/prd/prd-jasawebsite-co-by-volum.md`

## Stack
- **Frontend:** Astro 5 (SSG/SSR) + React islands + Tailwind v4 + GSAP + Lenis
- **Backend:** Astro endpoints di Cloudflare Workers
- **DB:** D1 (SQLite) via Drizzle ORM · **Storage:** R2 · **Cache/rate-limit:** KV
- **Anti-spam:** honeypot + Turnstile (aktif otomatis bila secret di-set)
- **Email:** Resend (skip bila `RESEND_API_KEY` kosong — aman untuk dev)

## Desain & UX (clone Hello Monday, clean white, Bahasa Indonesia)
- **Font:** Clash Display (display, via Fontshare) + Inter (body, via Google) — di-load di `Layout.astro`.
- **Skala tipografi terkunci:** hero homepage = `.text-display`; judul halaman = komponen `PageHero`
  (`clamp(2.5rem,6vw,4.5rem)`); judul section = `SectionHeading` (`text-4xl→6xl`).
- **Container standar:** `mx-auto max-w-[90rem] px-5 md:px-10` (rata di semua halaman + header + footer).
- **Motion** (`islands/SmoothScroll.tsx`): Lenis smooth scroll, custom cursor + magnetic, SplitText reveal,
  marquee reaktif-kecepatan, parallax, clip reveal, hero word-cycler, hover portofolio (border morph organik),
  stagger. Semua hormati `prefers-reduced-motion`.
- **Header:** logo mark bulat (½ hitam-½ putih, auto-invert) + burger → overlay fullscreen.
- **Footer:** ilustrasi + kolom kontak/kantor (London & Surabaya) + back-to-top; latar cream `#f9f6f5`.
- **Wilayah:** Indonesia-only (Malaysia/MYR sudah dihapus).

> ⚠️ Aset masih **dummy** — wajib diganti sebelum launch: video hero & GIF footer (milik Hello Monday),
> logo brand strip, dan gambar portofolio (picsum). Nama klien/portofolio juga karangan.

## Development
```bash
pnpm install
cp .dev.vars.example .dev.vars          # isi AUTH_SECRET
pnpm db:migrate:local                    # apply migration ke D1 lokal
pnpm dev                                 # → http://localhost:4321
```

## Client portal (Postgres) — register/login + dashboard
Rute: `/daftar`, `/masuk` (register/login, satu island toggle) → `/dashboard`
(SSR, dilindungi session role `client`; lihat progress project + invoice sendiri).
API: `POST /api/client/auth/{register,login,logout}`.

**Dev (Postgres lokal via Docker):**
```bash
# ⚠️ port 5433 dipakai project lain (tokophi-db) → pakai 5434
docker run -d --name jws-pg -e POSTGRES_PASSWORD=devpass \
  -e POSTGRES_DB=jasawebsite -p 5434:5432 postgres:16-alpine
docker exec -i jws-pg psql -U postgres -d jasawebsite < migrations/pg/0001_client_portal.sql
# .dev.vars: DATABASE_URL=postgres://postgres:devpass@localhost:5434/jasawebsite
```

**Prod (Cloudflare Workers):** Postgres eksternal (Neon/VPS) via **Hyperdrive**
(`nodejs_compat` sudah aktif). Buat binding lalu deploy:
```bash
wrangler hyperdrive create jasawebsite-pg --connection-string="postgres://user:pass@host:5432/db"
# salin id → wrangler.toml [[hyperdrive]] binding HYPERDRIVE
```
`getPg()` (src/lib/pg.ts) otomatis pakai `HYPERDRIVE.connectionString` di prod, `DATABASE_URL` di dev.

> Skema Postgres terpisah dari D1: `src/db/pg-schema.ts` (client_user, project, invoice).
> Admin (lead/client/invoice) masih di D1. Dashboard admin utama & admin-client = fase berikutnya.

## Setup admin pertama (sekali)
```bash
curl -X POST http://localhost:4321/api/admin/auth/setup \
  -H "x-setup-secret: <AUTH_SECRET>" -H "Content-Type: application/json" \
  -d '{"name":"Owner","email":"admin@jasawebsite.co","password":"min-10-karakter"}'
# lalu login di /admin
```

## Deploy production
1. Buat resource + isi ID di `wrangler.toml`:
   ```bash
   wrangler d1 create jasawebsite
   wrangler kv namespace create CACHE
   wrangler r2 bucket create jasawebsite-assets
   ```
2. Secrets:
   ```bash
   wrangler secret put AUTH_SECRET
   wrangler secret put RESEND_API_KEY        # opsional (email lead)
   wrangler secret put TURNSTILE_SECRET_KEY  # opsional (anti-spam)
   ```
3. Ganti `WHATSAPP_NUMBER` di `wrangler.toml`.
4. Migrasi + deploy:
   ```bash
   pnpm db:migrate:remote
   pnpm deploy
   ```

## Struktur penting
```
src/pages/               rute publik (index, layanan, portfolio, harga, kontak, tentang, 404) + /admin + /api
src/components/           komponen Astro terkunci: PageHero, SectionHeading, WorkCard, WorkGrid
src/components/islands/   React/GSAP: SmoothScroll (motion), NavMenu (burger overlay), ContactForm, AdminApp
src/layouts/Layout.astro  header (logo mark + burger) + footer + slot; prop hideFooter/mainClass (dipakai 404)
src/data/site.ts          7 layanan + 15 portofolio (dummy) (nanti → CMS)
src/styles/global.css     design tokens + semua utility/animasi (hero, cursor, marquee, portofolio, footer)
src/db/schema.ts          Drizzle: lead/client/project/invoice/app_user
src/lib/                  db, auth (PBKDF2+HMAC), guard, api helpers
migrations/               SQL D1
```

## TODO (fase berikutnya)
- [ ] **Ganti aset dummy** (video hero + GIF footer + logo brand + gambar portofolio) & isi konten/klien real
- [ ] Konten harga real (IDR), copywriting, media case study
- [ ] Isi akun sosial asli di footer (masih `#`)
- [ ] **Auth client (register/login) + dashboard admin utama & admin client** — butuh keputusan DB (Postgres vs D1)
- [ ] CMS untuk portfolio/blog (mis. Sanity) + webhook revalidate
- [ ] Tracking: Meta Pixel/CAPI + GA4 (consent-gated)
- [ ] Lighthouse CI gate di GitHub Actions
