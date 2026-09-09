import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import foliosData from '@/data/folios.json';
import nichesData from '@/data/niches.json';
import { siteConfig } from '@/data/siteConfig';
import { BookFolioRenderer } from '@/components/book/BookFolioRenderer';
import { NicheBookShell } from '@/components/book/NicheBookShell';
import { generateSheetSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const coreParams = foliosData.map((f) => ({ slug: f.slug }));
  const nicheParams = nichesData.map((n) => ({ slug: `niche-${n.slug}` }));
  return [...coreParams, ...nicheParams];
}

const CORE_FOLIO_SEO: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  cover: {
    title: 'Brosur Digital Jasa Pembuatan Website',
    description:
      'Brosur digital interaktif layanan pembuatan website profesional, toko online & custom web app Indonesia. Konsultasi draft SOW via WhatsApp.',
    keywords: [
      'jasa pembuatan website',
      'jasa website profesional',
      'brosur digital web developer',
      'software house indonesia',
      'full stack web developer',
    ],
  },
  'company-profile': {
    title: 'Jasa Website Company Profile Korporat',
    description:
      'Jasa pembuatan website company profile korporat & B2B kredibel. Desain elegan, loading sub-detik, dan SEO Google optimal. Hubungi WhatsApp.',
    keywords: [
      'jasa pembuatan website company profile',
      'bikin web profil perusahaan',
      'website korporat b2b indonesia',
      'jasa website perusahaan',
      'website tender b2b',
    ],
  },
  'sales-website': {
    title: 'Jasa Landing Page Sales & Leads WhatsApp',
    description:
      'Jasa pembuatan landing page iklan Meta & Google Ads berkonversi tinggi untuk dealer, mesin, properti & kontraktor. Konsultasi via WhatsApp.',
    keywords: [
      'jasa landing page sales',
      'landing page whatsapp leads',
      'jasa bikin landing page iklan',
      'landing page konversi tinggi',
      'website dealer mesin kontraktor',
    ],
  },
  'ecommerce-shopify': {
    title: 'Jasa Pembuatan Toko Online & Shopify',
    description:
      'Jasa pembuatan toko online Shopify & e-commerce mandiri tanpa komisi. Integrasi QRIS otomatis dan kurir se-Indonesia. Hubungi via WhatsApp.',
    keywords: [
      'jasa pembuatan website shopify',
      'jasa pembuatan toko online shopify',
      'jasa bikin toko online shopify',
      'shopify developer indonesia',
      'jasa toko online mandiri',
      'jasa website e-commerce',
      'toko online qris kurir otomatis',
    ],
  },
  'custom-web-app': {
    title: 'Jasa Web Application, CRM & Mini ERP',
    description:
      'Jasa pembuatan aplikasi web custom, CRM penjualan, sistem operasional mini ERP, dan portal klien sesuai SOP bisnis Anda. Hubungi WhatsApp.',
    keywords: [
      'jasa web application custom',
      'jasa pembuatan crm indonesia',
      'bikin sistem mini erp perusahaan',
      'software house custom web app',
      'software house custom dashboard',
    ],
  },
  portfolio: {
    title: 'Portofolio & Studi Kasus Website Live',
    description:
      'Galeri portofolio website company profile, landing page sales, toko online & web app live dengan metrik nyata. Cek hasil karya studio kami.',
    keywords: [
      'portofolio web developer',
      'studi kasus pembuatan website',
      'contoh website company profile',
      'hasil karya jasa website',
      'hasil karya jasa bikin web',
    ],
  },
  'maintenance-care': {
    title: 'Jasa Maintenance Website & Iklan Ads',
    description:
      'Jasa pemeliharaan website berkala, monitoring uptime 24/7, optimasi kecepatan, serta setup iklan Meta & Google Ads. Hubungi via WhatsApp.',
    keywords: [
      'jasa maintenance website',
      'jasa setup meta ads',
      'jasa pasang iklan facebook',
      'jasa iklan google ads',
      'jasa kelola website indonesia',
      'server side capi meta google',
      'jasa optimasi website indonesia',
    ],
  },
  colophon: {
    title: 'Direktori 24 Industri & Kontak Studio',
    description:
      'Solusi pembuatan website khusus untuk 24 sektor industri di Indonesia. Konsultasikan kebutuhan bisnis Anda dan dapatkan draft SOW via WA.',
    keywords: [
      'direktori jasa website indonesia',
      'jasa website spesifik industri',
      'kontak jasa website studio',
      'konsultasi pembuatan website whatsapp',
      'daftar industri jasa web',
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageUrl = `${siteConfig.url}/folio/${slug}`;
  const defaultImage = {
    url: '/og-image.webp',
    width: 1200,
    height: 675,
    alt: `${siteConfig.name} - Jasa Pembuatan Website & Sistem Digital Indonesia`,
    type: 'image/webp',
  };

  // Check if niche programmatic SEO page
  if (slug.startsWith('niche-')) {
    const nicheSlug = slug.replace('niche-', '');
    const niche = nichesData.find((n) => n.slug === nicheSlug);
    if (!niche) return { title: 'Industri Tidak Ditemukan' };

    const pageTitle = `Jasa Website ${niche.industryName}`;
    const pageDesc = `Jasa pembuatan website ${niche.industryName.toLowerCase()} profesional. Performa sub-detik, mobile-first & siap closing. Konsultasi via WhatsApp.`;

    return {
      title: pageTitle,
      description: pageDesc,
      keywords: [
        `jasa pembuatan website ${niche.industryName.toLowerCase()}`,
        `website ${niche.industryName.toLowerCase()}`,
        `jasa bikin web ${niche.slug.replace(/-/g, ' ')}`,
        'jasa pembuatan website profesional',
        'jasa website indonesia',
        'web developer indonesia',
      ],
      alternates: {
        canonical: pageUrl,
        languages: {
          'id-ID': pageUrl,
        },
      },
      openGraph: {
        type: 'article',
        locale: 'id_ID',
        url: pageUrl,
        siteName: 'JasaWebsite.co',
        title: `${pageTitle} | JasaWebsite.co`,
        description: pageDesc,
        images: [
          {
            ...defaultImage,
            alt: `${pageTitle} - JasaWebsite.co`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${pageTitle} | JasaWebsite.co`,
        description: pageDesc,
        images: ['/og-image.webp'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  }

  // Core folio spread
  const folio = foliosData.find((f) => f.slug === slug);
  if (!folio) return { title: 'Lembar Tidak Ditemukan' };

  const customSeo = CORE_FOLIO_SEO[slug];
  const pageTitle = customSeo ? customSeo.title : `${folio.title} · ${folio.leftFolioNumber}`;
  const pageDesc = customSeo ? customSeo.description : folio.description;
  const pageKeywords = customSeo
    ? customSeo.keywords
    : ['jasa pembuatan website', 'web developer indonesia'];

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: pageKeywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        'id-ID': pageUrl,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: pageUrl,
      siteName: 'JasaWebsite.co',
      title: `${pageTitle} | JasaWebsite.co`,
      description: pageDesc,
      images: [defaultImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} | JasaWebsite.co`,
      description: pageDesc,
      images: ['/og-image.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function FolioPage({ params }: PageProps) {
  const { slug } = await params;

  // Scenario A: Individual Niche Sheet (Programmatic SEO)
  if (slug.startsWith('niche-')) {
    const nicheSlug = slug.replace('niche-', '');
    const niche = nichesData.find((n) => n.slug === nicheSlug);
    if (!niche) notFound();

    const sheetSchema = generateSheetSchema(
      niche.industryName,
      `Jasa pembuatan website ${niche.industryName.toLowerCase()} profesional. Performa sub-detik, mobile-first dan siap closing.`,
      slug,
      niche.schemaType,
      niche.startingPrice
    );

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sheetSchema) }}
        />
        <NicheBookShell currentNiche={niche} />
      </>
    );
  }

  // Scenario B: Core Folio Spread
  const spreadIndex = foliosData.findIndex((f) => f.slug === slug);
  if (spreadIndex === -1) {
    notFound();
  }

  const folio = foliosData[spreadIndex];
  const startingPrices: Record<string, string> = {
    'company-profile': 'Rp 2,9jt',
    'sales-website': 'Rp 3,5jt',
    'ecommerce-shopify': 'Rp 3,9jt',
    'custom-web-app': 'Rp 15jt',
    'maintenance-care': 'Rp 2,5jt',
  };

  const sheetSchema = generateSheetSchema(
    folio.title,
    folio.description,
    slug,
    startingPrices[slug] ? 'Service' : 'WebPage',
    startingPrices[slug]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sheetSchema) }}
      />
      <BookFolioRenderer initialSpreadIndex={spreadIndex} />
    </>
  );
}
