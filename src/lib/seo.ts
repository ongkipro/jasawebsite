import { siteConfig } from '@/data/siteConfig';
import faqsData from '@/data/faqs.json';
import portfolioData from '@/data/portfolio.json';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function generateMasterSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}/#service`,
        name: siteConfig.name,
        alternateName: ['JasaWebsite.co', 'JasaWebsite Indonesia', 'ONG Studio'],
        url: siteConfig.url,
        logo: `${siteConfig.url}/og-image.webp`,
        image: `${siteConfig.url}/og-image.webp`,
        description: siteConfig.description,
        telephone: `+${siteConfig.phone}`,
        email: siteConfig.email,
        priceRange: 'Rp 2,5jt - Rp 50jt+',
        currenciesAccepted: 'IDR',
        paymentAccepted: 'Bank Transfer, QRIS, Virtual Account',
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${siteConfig.phone}`,
          contactType: 'customer service',
          availableLanguage: ['Indonesian', 'English'],
          areaServed: 'ID',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.95',
          reviewCount: '48',
          bestRating: '5',
          worstRating: '1',
        },
        knowsAbout: [
          'Next.js 16 App Router',
          'Shopify Headless Hydrogen & Liquid 2.0',
          'High-Converting Sales Landing Pages',
          'Custom Web Applications CRM & Mini ERP',
          'Edge Cloud Architecture Cloudflare & Vercel',
          'Programmatic SEO & Schema.org Structured Data',
          'Server-Side Conversion API Meta & Google Ads',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Layanan Utama Rekayasa Web & Sistem Digital',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Jasa Pembuatan Website Company Profile',
                description: 'Membangun kredibilitas resmi perusahaan yang meyakinkan klien korporat, mitra bisnis, dan tender resmi.',
              },
              price: '2900000',
              priceCurrency: 'IDR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Jasa Pembuatan Website Sales & Lead Generation',
                description: 'Corong konversi traffic iklan berbayar (Meta & Google Ads) menjadi leads WhatsApp pembeli unit bernilai tinggi.',
              },
              price: '3500000',
              priceCurrency: 'IDR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Jasa Pembuatan Toko Online E-Commerce & Shopify D2C',
                description: 'Toko online mandiri terintegrasi Payment Gateway QRIS dan API Kurir Indonesia tanpa biaya potongan komisi marketplace.',
              },
              price: '3900000',
              priceCurrency: 'IDR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Jasa Pembuatan Custom Web Application & Sistem Bisnis',
                description: 'Rekayasa sistem digital operasional (CRM, Mini ERP, Customer Portal, Dashboard) sesuai SOP unik perusahaan.',
              },
              price: '15000000',
              priceCurrency: 'IDR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Maintenance Care, Ads Scaling & Strategic Add-Ons',
                description: 'Layanan perlindungan performa 24/7, setup kampanye iklan Meta & Google Ads, monitoring uptime, backup rutin, dan add-on teknis Server-Side CAPI & pSEO.',
              },
              price: '2500000',
              priceCurrency: 'IDR',
            },
          ],
        },
        sameAs: Object.values(siteConfig.social).filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.tagline,
        inLanguage: 'id-ID',
        publisher: {
          '@id': `${siteConfig.url}/#service`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteConfig.url}/#faq`,
        name: 'Pertanyaan Umum Layanan Jasa Pembuatan Website & Toko Online',
        mainEntity: faqsData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function generateSheetSchema(
  title: string,
  description: string,
  slug: string,
  schemaType = 'WebPage',
  price?: string
) {
  const pageUrl = `${siteConfig.url}/folio/${slug}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': schemaType,
      '@id': `${pageUrl}/#webpage`,
      url: pageUrl,
      name: title,
      description: description,
      isPartOf: {
        '@id': `${siteConfig.url}/#website`,
      },
      inLanguage: 'id-ID',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: siteConfig.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Living Digital Brochure',
          item: `${siteConfig.url}/folio/cover`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: pageUrl,
        },
      ],
    },
  ];

  // If this represents a core service or niche offering, inject structured Service schema
  const isServiceFolio = [
    'company-profile',
    'sales-website',
    'ecommerce-shopify',
    'custom-web-app',
    'maintenance-care',
  ].includes(slug) || slug.startsWith('niche-');

  if (isServiceFolio) {
    const cleanPrice = price ? price.replace(/[^0-9]/g, '') : undefined;
    graph.push({
      '@type': 'Service',
      '@id': `${pageUrl}/#service`,
      name: title,
      description: description,
      provider: {
        '@id': `${siteConfig.url}/#service`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      serviceType: title,
      ...(cleanPrice
        ? {
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: cleanPrice,
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'IDR',
                price: price,
              },
            },
          }
        : {}),
    });
  }

  if (slug === 'portfolio') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${pageUrl}/#portfolio-list`,
      name: 'Daftar Portofolio & Studi Kasus Website Live JasaWebsite.co',
      description:
        'Kumpulan 13 proyek website live, landing page sales, toko online dan web app terverifikasi.',
      numberOfItems: portfolioData.length,
      itemListElement: portfolioData.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.clientName,
        description: item.challenge,
        url: item.liveUrl || pageUrl,
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const CORE_FOLIO_SEO: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    schemaType?: string;
    startingPrice?: string;
  }
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
    schemaType: 'WebPage',
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
    startingPrice: 'Rp 2,9jt',
    schemaType: 'Service',
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
    startingPrice: 'Rp 3,5jt',
    schemaType: 'Service',
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
    startingPrice: 'Rp 3,9jt',
    schemaType: 'Service',
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
    startingPrice: 'Rp 15jt',
    schemaType: 'Service',
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
    schemaType: 'WebPage',
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
    startingPrice: 'Rp 2,5jt',
    schemaType: 'Service',
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
    schemaType: 'WebPage',
  },
};

export const NICHE_CALIBRATED_TITLES: Record<string, string> = {
  'dealer-otomotif': 'Jasa Website Dealer Mobil & Showroom',
  'rental-mobil-bus-pariwisata': 'Jasa Website Rental Mobil & Bus Pariwisata',
  'bengkel-mobil-body-repair': 'Jasa Website Bengkel & Body Repair Mobil',
  'alat-berat-mesin': 'Jasa Website Alat Berat & Mesin Industri',
  'pabrik-manufaktur-b2b': 'Jasa Website Pabrikasi & Manufaktur B2B',
  'percetakan-packaging-kemasan': 'Jasa Website Percetakan & Packaging Box',
  'developer-properti': 'Jasa Website Developer & Real Estate',
  'kontraktor-arsitek': 'Jasa Website Kontraktor & Desain Interior',
  'klinik-kesehatan': 'Jasa Website Klinik Medis & Rumah Sakit',
  'distributor-alkes-farmasi': 'Jasa Website Distributor Alkes & Farmasi',
  'kantor-hukum-advokat': 'Jasa Website Kantor Hukum & Advokat',
  'konsultan-pajak-akuntan': 'Jasa Website Konsultan Pajak & Akuntan',
  'konsultan-it-cctv-keamanan': 'Jasa Website IT Solution & CCTV Keamanan',
  'brand-fashion-d2c': 'Jasa Website Brand Fashion & Apparel D2C',
  'brand-skincare-kosmetik': 'Jasa Website Brand Skincare & Kosmetik',
  'restoran-cafe-fnb': 'Jasa Website Restoran, Cafe & Bisnis F&B',
  'event-organizer-wedding-planner': 'Jasa Website Wedding Planner & Event EO',
  'ekspedisi-logistik-cargo': 'Jasa Website Ekspedisi & Logistik Cargo',
  'ekspor-komoditas-hasil-bumi': 'Jasa Website Eksportir Komoditas Alam',
  'sekolah-universitas-bimbel': 'Jasa Website Sekolah, Kampus & Bimbel',
  'tour-travel-umroh': 'Jasa Website Travel Umroh & Haji Khusus',
  'cleaning-service-pest-control': 'Jasa Website Cleaning Service Komersial',
  'agribisnis-peternakan-modern': 'Jasa Website Agribisnis & Peternakan',
  'koperasi-keuangan-mikro': 'Jasa Website Koperasi Simpan Pinjam',
};

export function syncDocumentSeo(slug: string) {
  if (typeof document === 'undefined') return;

  const isNiche = slug.startsWith('niche-');
  let title = '';
  let description = '';
  let url = '';

  if (isNiche) {
    const nicheSlug = slug.replace('niche-', '');
    const titleText =
      NICHE_CALIBRATED_TITLES[nicheSlug] ||
      `Jasa Website ${nicheSlug.replace(/-/g, ' ')}`;
    title = `${titleText} - JasaWebsite.co`;
    description = `Jasa pembuatan website ${nicheSlug.replace(/-/g, ' ')} profesional. Performa sub-detik, mobile-first & siap closing. Konsultasi via WhatsApp.`;
    url = `${siteConfig.url}/folio/${slug}`;
  } else {
    const seo = CORE_FOLIO_SEO[slug];
    if (seo) {
      title = `${seo.title} - JasaWebsite.co`;
      description = seo.description;
      url = slug === 'cover' ? siteConfig.url : `${siteConfig.url}/folio/${slug}`;
    } else {
      title = 'Jasa Pembuatan Website & Toko Online - JasaWebsite.co';
      description = siteConfig.description;
      url = siteConfig.url;
    }
  }

  // 1. Update Document Title
  document.title = title;

  // 2. Helper to set or create meta element
  const setMeta = (selector: string, attrName: string, attrVal: string, content: string) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Update standard metadata
  setMeta('meta[name="description"]', 'name', 'description', description);

  // 4. Update canonical link
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', url);

  // 5. Update OpenGraph tags
  setMeta('meta[property="og:title"]', 'property', 'og:title', title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', url);

  // 6. Update Twitter tags
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

  // 7. Update JSON-LD Sheet Schema in DOM
  if (!isNiche) {
    const seo = CORE_FOLIO_SEO[slug];
    if (seo) {
      const sheetSchema = generateSheetSchema(
        seo.title,
        seo.description,
        slug,
        seo.schemaType || 'WebPage',
        seo.startingPrice
      );
      let schemaScript = document.getElementById('folio-sheet-schema') as HTMLScriptElement | null;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'folio-sheet-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(sheetSchema);
    }
  }
}
