/// <reference types="astro/client" />

type Env = {
  DB: D1Database;
  BUCKET: R2Bucket;
  CACHE: KVNamespace;
  SITE_URL: string;
  DEFAULT_LOCALE: string;
  WHATSAPP_NUMBER: string;
  AUTH_SECRET: string;
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  SANITY_WEBHOOK_SECRET?: string;
  // Postgres (client portal) — dev/VPS via DATABASE_URL; prod Workers via Hyperdrive
  DATABASE_URL?: string;
  HYPERDRIVE?: { connectionString: string };
  ADMIN_INVITE_CODE?: string; // kode undangan registrasi admin (fallback: AUTH_SECRET)
};

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
