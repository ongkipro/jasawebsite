// Konfigurasi situs + katalog 7 layanan (PRD §4) + portfolio.
// Nanti konten portfolio/layanan pindah ke Sanity; file ini jadi fallback/seed.

export const site = {
  name: 'JASAWEBSITE.co',
  byline: 'by VOLUM',
  tagline: 'Website cantik yang menjual.',
  description:
    'Jasa pembuatan website premium untuk Indonesia & Malaysia — toko online, Shopify, company profile, website sales, custom web, plus Meta Ads & Google Ads.',
  email: 'halo@jasawebsite.co',
};

export function waLink(number: string, service?: string): string {
  const text = encodeURIComponent(
    `Halo JASAWEBSITE.co, saya tertarik${service ? ` layanan ${service}` : ' konsultasi website'}.`,
  );
  return `https://wa.me/${number}?text=${text}`;
}

export type Service = {
  slug: string;
  title: string;
  short: string;
  problem: string;
  solution: string;
  deliverables: string[];
  priceFrom?: string;
  type: 'project' | 'retainer';
};

export const services: Service[] = [
  {
    slug: 'website-toko-online',
    title: 'Website Toko Online',
    short: 'Toko online siap terima order & di-scale via ads.',
    problem:
      'Jualan hanya lewat marketplace berarti margin terpotong, data pembeli bukan milik Anda, dan brand sulit tumbuh.',
    solution:
      'Kami bangun toko online milik Anda sendiri — katalog, checkout, payment gateway lokal, ongkir, dan WhatsApp order — dioptimasi untuk conversion.',
    deliverables: [
      'Katalog produk + cart & checkout',
      'Payment gateway (Midtrans/Xendit)',
      'Integrasi ongkir (RajaOngkir/Biteship)',
      'WhatsApp order + CRO dasar (upsell, trust badge)',
      'SEO on-page',
    ],
    priceFrom: 'mulai Rp X jt',
    type: 'project',
  },
  {
    slug: 'shopify-development',
    title: 'Shopify Development',
    short: 'Store premium dengan CRO tinggi — spesialisasi kami.',
    problem:
      'Theme bawaan Shopify terlihat generik dan meninggalkan conversion di atas meja.',
    solution:
      'Custom theme development + fitur CRO terbukti: cart upsell, free-shipping bar, countdown, sticky cart, bundle & quantity breaks.',
    deliverables: [
      'Setup store + theme development (Dawn/Horizon base atau custom)',
      'CRO features (upsell, free-shipping bar, countdown, sticky cart)',
      'Apps integration & migrasi',
      'Shopify Markets (multi-currency cross-border)',
    ],
    priceFrom: 'mulai Rp X jt',
    type: 'project',
  },
  {
    slug: 'company-profile',
    title: 'Company Profile',
    short: 'Profil perusahaan profesional yang membangun trust.',
    problem:
      'Perusahaan tanpa website kredibel kalah tender dan kalah kepercayaan sebelum sempat presentasi.',
    solution:
      'Compro profesional: profil, layanan, portfolio, blog, multi-bahasa — mudah di-maintain tim Anda.',
    deliverables: [
      'Home, About, Layanan, Portfolio, Blog, Contact',
      'Multi-bahasa (ID/EN)',
      'SEO + integrasi WhatsApp/email',
    ],
    priceFrom: 'mulai Rp X jt',
    type: 'project',
  },
  {
    slug: 'website-sales',
    title: 'Website Sales',
    short: 'Mesin closing: sales page + profiling + funnel.',
    problem:
      'Produk high-ticket butuh lebih dari brosur — butuh narasi yang meyakinkan dan funnel yang mengarahkan.',
    solution:
      'Sales page panjang (storytelling) digabung company profiling untuk kredibilitas, lead form multi-step, tracking penuh.',
    deliverables: [
      'Sales page storytelling (problem-agitate-solve)',
      'Company profiling terintegrasi',
      'Lead form multi-step + funnel tracking',
      'Integrasi CRM/WhatsApp/email automation',
    ],
    priceFrom: 'mulai Rp X jt',
    type: 'project',
  },
  {
    slug: 'custom-web',
    title: 'Custom Web',
    short: 'Web app & solusi bespoke sesuai kebutuhan.',
    problem: 'Kebutuhan khusus tidak bisa dijawab template — butuh solusi yang dirancang dari nol.',
    solution:
      'Design & build custom: web app, dashboard, integrasi API, tool interaktif — full-stack modern.',
    deliverables: [
      'Desain & build custom sesuai brief',
      'Integrasi API / database / auth',
      'Dashboard & fitur bespoke',
    ],
    priceFrom: 'sesuai scope',
    type: 'project',
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    short: 'Scale sales & lead lewat Facebook + Instagram Ads.',
    problem:
      'Boost post asal-asalan membakar budget tanpa hasil yang bisa diukur.',
    solution:
      'Setup Business Manager & pixel/Conversions API yang benar, struktur campaign teruji, retargeting funnel, dan laporan ROAS bulanan.',
    deliverables: [
      'Setup BM + Pixel/Conversions API',
      'Audience & campaign structure + retargeting funnel',
      'Creative direction',
      'Laporan bulanan (ROAS, CPL, CTR)',
    ],
    priceFrom: 'retainer/bulan + ad spend',
    type: 'retainer',
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    short: 'Tangkap demand aktif — orang yang sedang mencari.',
    problem:
      'Calon pembeli mencari produk Anda di Google setiap hari — dan menemukan kompetitor.',
    solution:
      'Riset keyword, Search/Performance Max sesuai tujuan, landing page cepat untuk Quality Score tinggi, conversion tracking akurat.',
    deliverables: [
      'Riset keyword + setup Search/PMax/Display/YouTube',
      'Landing page alignment',
      'Conversion tracking (GA4 + Google Ads)',
      'Laporan bulanan (CPC, conversion, cost/conv)',
    ],
    priceFrom: 'retainer/bulan + ad spend',
    type: 'retainer',
  },
];

export type Work = {
  slug: string;
  title: string;
  client: string;
  category: string;
  result?: string;
  cover?: string; // path/URL media
};

// Portfolio — mulai dari PetCue (§6.1); tambah case seiring waktu
export const works: Work[] = [
  {
    slug: 'petcue',
    title: 'PetCue — D2C Pet Brand',
    client: 'PetCue.co',
    category: 'Shopify',
    result: 'Custom CRO theme: cart upsell, bundle, sticky cart',
  },
  // TODO: tambah case study berikutnya (target: 1 per layanan)
];
