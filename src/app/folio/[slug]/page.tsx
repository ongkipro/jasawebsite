import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import foliosData from '@/data/folios.json';
import nichesData from '@/data/niches.json';
import { siteConfig } from '@/data/siteConfig';
import { BookFolioRenderer } from '@/components/book/BookFolioRenderer';
import { NicheBookShell } from '@/components/book/NicheBookShell';
import {
  generateSheetSchema,
  CORE_FOLIO_SEO,
  NICHE_CALIBRATED_TITLES,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const coreParams = foliosData.map((f) => ({ slug: f.slug }));
  const nicheParams = nichesData.map((n) => ({ slug: `niche-${n.slug}` }));
  return [...coreParams, ...nicheParams];
}

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

    const pageTitle =
      NICHE_CALIBRATED_TITLES[nicheSlug] || `Jasa Pembuatan Website ${niche.industryName}`;
    const pageDesc = `Jasa pembuatan website ${niche.industryName.toLowerCase()} profesional. Performa sub-detik, mobile-first & siap closing. Konsultasi via WhatsApp.`;

    return {
      title: pageTitle,
      description: pageDesc,
      keywords: [
        pageTitle.toLowerCase(),
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
        title: pageTitle,
        description: pageDesc,
        images: [
          {
            ...defaultImage,
            alt: pageTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
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
      title: pageTitle,
      description: pageDesc,
      images: [defaultImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
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
        id="folio-sheet-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sheetSchema) }}
      />
      <BookFolioRenderer initialSpreadIndex={spreadIndex} />
    </>
  );
}
