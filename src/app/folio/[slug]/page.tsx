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
    title: 'Brosur Digital Layanan Jasa Pembuatan Website Indonesia',
    description:
      'Dossier dan living brochure resmi studio rekayasa website modern, e-commerce, dan sistem digital terpadu untuk bisnis Indonesia oleh JasaWebsite.co by ONG.',
    keywords: [
      'jasa pembuatan website',
      'brosur digital web developer',
      'software house indonesia',
      'full stack web developer',
    ],
  },
  'company-profile': {
    title: 'Jasa Pembuatan Website Company Profile Korporat & B2B',
    description:
      'Bangun kredibilitas resmi perusahaan yang meyakinkan klien korporat, mitra bisnis, dan tender resmi. Loading sub-detik, SEO teroptimasi, tanpa biaya server bulanan.',
    keywords: [
      'jasa pembuatan website company profile',
      'bikin web profil perusahaan',
      'website korporat b2b indonesia',
      'website tender b2b',
    ],
  },
  'sales-website': {
    title: 'Jasa Pembuatan Landing Page Sales & Leads WhatsApp Berkonversi Tinggi',
    description:
      'Corong konversi traffic iklan Meta Ads & Google Ads menjadi leads WhatsApp pembeli unit bernilai tinggi. Untuk dealer mobil, mesin industri, dan kontraktor.',
    keywords: [
      'jasa landing page sales',
      'landing page whatsapp leads',
      'jasa bikin landing page iklan',
      'website dealer mesin kontraktor',
    ],
  },
  'ecommerce-shopify': {
    title: 'Jasa Pembuatan Toko Online & Toko Shopify D2C Indonesia',
    description:
      'Toko online mandiri & Shopify D2C terintegrasi Payment Gateway (QRIS, VA) dan API kurir otomatis Indonesia tanpa potongan komisi marketplace.',
    keywords: [
      'jasa pembuatan toko online',
      'jasa bikin web shopify indonesia',
      'website ecommerce qris kurir',
      'shopify developer indonesia',
    ],
  },
  'custom-web-app': {
    title: 'Jasa Pembuatan Custom Web Application, CRM & Mini ERP Perusahaan',
    description:
      'Rekayasa sistem digital operasional kustom: CRM, mini ERP, customer portal, dan dashboard performa sesuai SOP unik bisnis Anda. Full-stack & scalable.',
    keywords: [
      'jasa web application custom',
      'jasa pembuatan crm indonesia',
      'bikin sistem mini erp perusahaan',
      'software house custom dashboard',
    ],
  },
  portfolio: {
    title: 'Portofolio & Studi Kasus Jasa Pembuatan Website Terpercaya',
    description:
      'Showcase karya dan studi kasus terverifikasi website company profile, landing page sales, toko online, dan sistem digital dengan bukti metrik pertumbuhan bisnis riil.',
    keywords: [
      'portofolio web developer',
      'studi kasus pembuatan website',
      'contoh website company profile',
      'hasil karya jasa bikin web',
    ],
  },
  'maintenance-care': {
    title: 'Jasa Maintenance Website, Keamanan & Optimasi Server-Side CAPI',
    description:
      'Layanan perlindungan performa, monitoring uptime 24/7, backup rutin, pembaruan keamanan, dan add-on teknis Server-Side CAPI & programmatic SEO.',
    keywords: [
      'jasa maintenance website',
      'pemeliharaan website profesional',
      'optimasi website capi meta',
      'backup security website',
    ],
  },
  colophon: {
    title: 'Direktori Solusi Web 30+ Industri & Kontak Resmi Studio',
    description:
      'Katalog lengkap solusi website untuk 30+ ceruk industri spesifik Indonesia dan komitmen rekayasa teknis studio. Hubungi Call / WhatsApp untuk konsultasi proyek.',
    keywords: [
      'direktori jasa website indonesia',
      'kontak jasawebsite co by ong',
      'konsultasi pembuatan website whatsapp',
      'daftar industri jasa web',
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageUrl = `${siteConfig.url}/folio/${slug}`;
  const defaultImage = {
    url: '/og-image.jpg',
    width: 1200,
    height: 675,
    alt: `${siteConfig.name} - Jasa Pembuatan Website & Sistem Digital Indonesia`,
    type: 'image/jpeg',
  };

  // Check if niche programmatic SEO page
  if (slug.startsWith('niche-')) {
    const nicheSlug = slug.replace('niche-', '');
    const niche = nichesData.find((n) => n.slug === nicheSlug);
    if (!niche) return { title: 'Industri Tidak Ditemukan' };

    const pageTitle = `Jasa Pembuatan Website ${niche.industryName} | Mulai ${niche.startingPrice}`;
    const pageDesc = `${niche.headline}. Solusi web performa sub-detik tanpa biaya server bulanan untuk ${niche.targetMarket}. Hubungi via Call / WhatsApp.`;

    return {
      title: pageTitle,
      description: pageDesc,
      keywords: [
        `jasa pembuatan website ${niche.industryName.toLowerCase()}`,
        `website ${niche.industryName.toLowerCase()}`,
        `jasa bikin web ${niche.slug.replace(/-/g, ' ')}`,
        'jasa pembuatan website profesional',
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
        siteName: siteConfig.name,
        title: `${pageTitle} | ${siteConfig.name}`,
        description: pageDesc,
        images: [
          {
            ...defaultImage,
            alt: `Jasa Pembuatan Website ${niche.industryName} - ${siteConfig.name}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${pageTitle} | ${siteConfig.name}`,
        description: pageDesc,
        images: ['/og-image.jpg'],
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
      siteName: siteConfig.name,
      title: `${pageTitle} | ${siteConfig.name}`,
      description: pageDesc,
      images: [defaultImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} | ${siteConfig.name}`,
      description: pageDesc,
      images: ['/og-image.jpg'],
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
