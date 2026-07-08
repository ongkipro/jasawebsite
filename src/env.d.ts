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
};

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
