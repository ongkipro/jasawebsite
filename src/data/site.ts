// Konfigurasi situs + katalog 7 layanan (PRD §4) + portfolio.
// Nanti konten portfolio/layanan pindah ke Sanity; file ini jadi fallback/seed.

export const site = {
  name: 'JASAWEBSITE.co',
  byline: 'by VOLUM',
  tagline: 'Website cantik yang menjual.',
  description:
    'Jasa pembuatan website premium untuk bisnis Indonesia — toko online, Shopify, company profile, website sales, custom web, plus Meta Ads & Google Ads.',
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
  timeline?: string; // estimasi durasi pengerjaan
  idealFor?: string; // cocok untuk siapa
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
    priceFrom: 'Mulai Rp 9 jt',
    timeline: '2–4 minggu',
    idealFor: 'Brand yang mau lepas dari marketplace dan punya toko sendiri.',
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
    priceFrom: 'Mulai Rp 15 jt',
    timeline: '3–5 minggu',
    idealFor: 'Brand D2C yang serius scaling dan butuh CRO tinggi.',
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
    priceFrom: 'Mulai Rp 6 jt',
    timeline: '1–3 minggu',
    idealFor: 'Perusahaan atau jasa yang butuh kredibilitas dan menang tender.',
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
    priceFrom: 'Mulai Rp 8 jt',
    timeline: '2–4 minggu',
    idealFor: 'Produk high-ticket, coaching, atau jasa dengan closing panjang.',
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
    priceFrom: 'Sesuai scope',
    timeline: 'Sesuai scope',
    idealFor: 'Kebutuhan khusus: dashboard, marketplace, atau tool internal.',
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
    priceFrom: 'Rp 3,5 jt/bln + ad spend',
    timeline: 'Bulanan (retainer)',
    idealFor: 'Produk visual atau impulse yang butuh demand generation.',
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
    priceFrom: 'Rp 3,5 jt/bln + ad spend',
    timeline: 'Bulanan (retainer)',
    idealFor: 'Produk atau jasa dengan demand pencarian yang aktif.',
    type: 'retainer',
  },
];

export type Work = {
  slug: string;
  title: string;
  client: string;
  category: string;
  result?: string;
  year?: string;
  tags?: string[];
  cover?: string; // path/URL media (dummy sementara — ganti aset case study sendiri)
};

// Cover lokal (webp, di /public/works/) — ⚠️ dummy, ganti dengan screenshot/media case asli.
const cover = (seed: string) => `/works/${seed}.webp`;

// Portfolio — PetCue (§6.1) + case dummy per layanan. Ganti konten & media sebelum launch.
export const works: Work[] = [
  {
    slug: 'petcue',
    title: 'PetCue — D2C Pet Brand',
    client: 'PetCue.co',
    category: 'Shopify',
    result: 'Custom CRO theme: cart upsell, bundle, sticky cart',
    year: '2025',
    tags: ['Shopify', 'CRO', 'Theme Dev'],
    cover: cover('petcue-jws'),
  },
  {
    slug: 'batik-nusantara',
    title: 'Batik Nusantara — Toko Online',
    client: 'Batik Nusantara',
    category: 'Toko Online',
    result: 'Konversi +38% setelah revamp checkout & ongkir realtime',
    year: '2025',
    tags: ['Toko Online', 'Midtrans', 'SEO'],
    cover: cover('batik-jws'),
  },
  {
    slug: 'kopi-lereng',
    title: 'Kopi Lereng — Company Profile',
    client: 'Kopi Lereng',
    category: 'Company Profile',
    result: 'Compro bilingual ID/EN untuk ekspansi ekspor',
    year: '2024',
    tags: ['Compro', 'Bilingual', 'Editorial'],
    cover: cover('kopi-jws'),
  },
  {
    slug: 'aurora-clinic',
    title: 'Aurora Clinic — Website Sales',
    client: 'Aurora Aesthetic',
    category: 'Website Sales',
    result: 'Lead form multi-step: CPL turun 41%',
    year: '2025',
    tags: ['Sales Page', 'Funnel', 'CRM'],
    cover: cover('aurora-jws'),
  },
  {
    slug: 'tanijaya-dashboard',
    title: 'TaniJaya — Custom Web App',
    client: 'TaniJaya AgriTech',
    category: 'Custom Web',
    result: 'Dashboard supply-chain realtime + auth berperan',
    year: '2024',
    tags: ['Web App', 'Dashboard', 'API'],
    cover: cover('tanijaya-jws'),
  },
  {
    slug: 'velora-scale',
    title: 'Velora — Meta & Google Ads',
    client: 'Velora Skincare',
    category: 'Performance Ads',
    result: 'ROAS 4.2x dalam 90 hari lintas Meta + Google',
    year: '2025',
    tags: ['Meta Ads', 'Google Ads', 'Tracking'],
    cover: cover('velora-jws'),
  },
  {
    slug: 'sinar-jaya-furnitur',
    title: 'Sinar Jaya — Toko Furnitur',
    client: 'Sinar Jaya',
    category: 'Toko Online',
    result: 'Katalog 300+ SKU + checkout WhatsApp',
    year: '2024',
    tags: ['Toko Online', 'Katalog', 'WhatsApp'],
    cover: cover('sinarjaya-jws'),
  },
  {
    slug: 'rumah-kriya',
    title: 'Rumah Kriya — Craft Marketplace',
    client: 'Rumah Kriya',
    category: 'Shopify',
    result: 'Migrasi marketplace → store sendiri, AOV +22%',
    year: '2025',
    tags: ['Shopify', 'Migrasi', 'CRO'],
    cover: cover('rumahkriya-jws'),
  },
  {
    slug: 'luna-beauty',
    title: 'Luna Beauty — Sales Funnel',
    client: 'Luna Beauty',
    category: 'Website Sales',
    result: 'Sales page + funnel: CVR 3.1% dari cold ads',
    year: '2025',
    tags: ['Sales Page', 'Funnel', 'Copywriting'],
    cover: cover('lunabeauty-jws'),
  },
  {
    slug: 'gading-tech',
    title: 'Gading Tech — Portal SaaS',
    client: 'Gading Technology',
    category: 'Custom Web',
    result: 'Portal pelanggan + billing self-service',
    year: '2024',
    tags: ['Web App', 'Auth', 'Billing'],
    cover: cover('gadingtech-jws'),
  },
  {
    slug: 'sawit-makmur',
    title: 'Sawit Makmur — Company Profile',
    client: 'Sawit Makmur Group',
    category: 'Company Profile',
    result: 'Compro korporat + halaman investor & karier',
    year: '2024',
    tags: ['Compro', 'Korporat', 'SEO'],
    cover: cover('sawitmakmur-jws'),
  },
  {
    slug: 'nadira-fashion',
    title: 'Nadira — Fashion Store',
    client: 'Nadira Fashion',
    category: 'Shopify',
    result: 'Store + lookbook, bounce turun 27%',
    year: '2025',
    tags: ['Shopify', 'Lookbook', 'Mobile-first'],
    cover: cover('nadira-jws'),
  },
  {
    slug: 'kliktani-marketplace',
    title: 'KlikTani — Agri Marketplace',
    client: 'KlikTani',
    category: 'Custom Web',
    result: 'Marketplace B2B petani ↔ buyer, realtime harga',
    year: '2025',
    tags: ['Marketplace', 'Realtime', 'Dashboard'],
    cover: cover('kliktani-jws'),
  },
  {
    slug: 'harum-kopi-ads',
    title: 'Harum Kopi — Google Ads',
    client: 'Harum Kopi',
    category: 'Performance Ads',
    result: 'PMax + Search: cost/conv turun 34%',
    year: '2024',
    tags: ['Google Ads', 'PMax', 'GA4'],
    cover: cover('harumkopi-jws'),
  },
  {
    slug: 'meraki-studio',
    title: 'Meraki Studio — Company Profile',
    client: 'Meraki Studio',
    category: 'Company Profile',
    result: 'Compro portfolio arsitektur + galeri interaktif',
    year: '2025',
    tags: ['Compro', 'Portfolio', 'Editorial'],
    cover: cover('meraki-jws'),
  },
];
