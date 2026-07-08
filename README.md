# JASAWEBSITE.co — by VOLUM

> Website agency: **Astro + React islands** di **Cloudflare Pages/Workers**, DB **D1**, storage **R2**, cache **KV**.
> PRD lengkap: `~/Documents/work/prd/prd-jasawebsite-co-by-volum.md`

## Stack
- **Frontend:** Astro 5 (SSG/SSR) + React islands + Tailwind v4 + GSAP + Lenis
- **Backend:** Astro endpoints di Cloudflare Workers
- **DB:** D1 (SQLite) via Drizzle ORM · **Storage:** R2 · **Cache/rate-limit:** KV
- **Anti-spam:** honeypot + Turnstile (aktif otomatis bila secret di-set)
- **Email:** Resend (skip bila `RESEND_API_KEY` kosong — aman untuk dev)

## Development
```bash
pnpm install
cp .dev.vars.example .dev.vars          # isi AUTH_SECRET
pnpm db:migrate:local                    # apply migration ke D1 lokal
pnpm dev                                 # → http://localhost:4321
```

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
src/pages/            rute publik + /admin + /api
src/components/islands/  GSAP motion, ContactForm, AdminApp
src/data/site.ts      7 layanan + portfolio (nanti → Sanity)
src/db/schema.ts      Drizzle: lead/client/project/invoice/app_user
src/lib/              db, auth (PBKDF2+HMAC), guard, api helpers
migrations/           SQL D1
```

## TODO (fase berikutnya)
- [ ] shadcn/ui penuh di admin (DataTable, Dialog)
- [ ] Sanity CMS untuk portfolio/blog + webhook revalidate
- [ ] Konten real: harga IDR/MYR, copywriting, media case study
- [ ] i18n ms/en + toggle currency
- [ ] Tracking: Meta Pixel/CAPI + GA4 (consent-gated)
- [ ] Lighthouse CI gate di GitHub Actions
