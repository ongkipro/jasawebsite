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
    title: 'Brosur Digital Layanan Jasa Pembuatan Website & Toko Online',
    description:
      'Dossier resmi layanan pembuatan website profesional, landing page sales, toko online e-commerce, dan custom web application. Konsultasi draft SOW via WhatsApp.',
    keywords: [
      'jasa pembuatan website',
      'jasa website profesional',
      'brosur digital web developer',
      'software house indonesia',
      'full stack web developer',
    ],
  },
  'company-profile': {
    title: 'Jasa Pembuatan Website Company Profile Korporat & B2B',
    description:
      'Jasa bikin website profil perusahaan & korporat terpercaya. Desain elegan, loading sub-detik, SEO Google teroptimasi, dan infrastruktur Global Edge Cloud.',
    keywords: [
      'jasa pembuatan website company profile',
      'bikin web profil perusahaan',
      'website korporat b2b indonesia',
      'jasa website perusahaan',
      'website tender b2b',
    ],
  },
  'sales-website': {
    title: 'Jasa Pembuatan Landing Page Sales & Leads WhatsApp Berkonversi Tinggi',
    description:
      'Jasa pembuatan landing page iklan Meta Ads & Google Ads berkonversi tinggi untuk dealer mobil, mesin industri, kontraktor, dan properti.',
    keywords: [
      'jasa landing page sales',
      'landing page whatsapp leads',
      'jasa bikin landing page iklan',
      'landing page konversi tinggi',
      'website dealer mesin kontraktor',
    ],
  },
  'ecommerce-shopify': {
    title: 'Jasa Pembuatan Website Toko Online Shopify & E-Commerce Mandiri',
    description:
      'Jasa pembuatan toko online Shopify dan website e-commerce mandiri profesional. Setup Shopify, kustom desain tampilan, 0% komisi, QRIS, dan cek ongkir kurir otomatis.',
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
    title: 'Jasa Pembuatan Custom Web Application, CRM & Sistem Digital Perusahaan',
    description:
      'Jasa pembuatan aplikasi web custom, CRM penjualan, sistem operasional mini ERP, dan portal klien sesuai SOP unik bisnis Anda. Aman dan scalable.',
    keywords: [
      'jasa web application custom',
      'jasa pembuatan crm indonesia',
      'bikin sistem mini erp perusahaan',
      'software house custom web app',
      'software house custom dashboard',
    ],
  },
  portfolio: {
    title: 'Portofolio Proyek & Studi Kasus Jasa Pembuatan Website Terpercaya',
    description:
      'Lihat galeri portofolio website company profile, landing page sales, toko online, dan web app dengan metrik performa nyata dan bukti kepuasan klien.',
    keywords: [
      'portofolio web developer',
      'studi kasus pembuatan website',
      'contoh website company profile',
      'hasil karya jasa website',
      'hasil karya jasa bikin web',
    ],
  },
  'maintenance-care': {
    title: 'Jasa Maintenance Website, Keamanan Cloud & Optimasi CAPI',
    description:
      'Layanan pemeliharaan website profesional: proteksi keamanan, monitoring uptime 99.9%, backup cloud terdistribusi, serta integrasi Server-Side Meta CAPI.',
    keywords: [
      'jasa maintenance website',
      'pemeliharaan website profesional',
      'optimasi website capi meta',
      'jasa kelola website',
      'backup security website',
    ],
  },
  colophon: {
    title: 'Direktori Jasa Pembuatan Website 30+ Industri & Kontak Resmi Studio',
    description:
      'Solusi pembuatan website untuk 30+ ceruk industri spesifik Indonesia. Konsultasikan kebutuhan bisnis Anda dan dapatkan draft proposal SOW via WhatsApp.',
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

    const pageTitle = `Jasa Pembuatan Website ${niche.industryName} Profesional`;
    const pageDesc = `${niche.headline}. Solusi jasa pembuatan website ${niche.industryName.toLowerCase()} dengan performa sub-detik dan arsitektur Global Edge Cloud. Hubungi via Call / WhatsApp.`;

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
        siteName: 'Jasa Website',
        title: `${pageTitle} - Jasa Website`,
        description: pageDesc,
        images: [
          {
            ...defaultImage,
            alt: `${pageTitle} - Jasa Website`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${pageTitle} - Jasa Website`,
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
      siteName: 'Jasa Website',
      title: `${pageTitle} - Jasa Website`,
      description: pageDesc,
      images: [defaultImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} - Jasa Website`,
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
      niche.headline,
      slug,
      niche.schemaType
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
  const sheetSchema = generateSheetSchema(
    folio.title,
    folio.description,
    slug,
    'WebPage'
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
