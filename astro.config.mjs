// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jasawebsite.co',
  output: 'server', // SSR di Workers; halaman statis di-prerender per-page
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' }, // link di-preload saat hover → klik terasa instan
  adapter: cloudflare({
    platformProxy: { enabled: true }, // akses binding D1/KV/R2 saat `astro dev`
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'ms', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
