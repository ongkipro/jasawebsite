// sitemap.xml — dari route statis + layanan + portfolio (PRD §19)
import type { APIRoute } from 'astro';
import { services, works } from '@/data/site';

export const prerender = true;

const BASE = 'https://jasawebsite.co';

export const GET: APIRoute = () => {
  const urls = [
    '/',
    '/layanan',
    '/portfolio',
    '/harga',
    '/tentang',
    '/kontak',
    ...services.map((s) => `/layanan/${s.slug}`),
    ...works.map((w) => `/portfolio/${w.slug}`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${BASE}${u}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
