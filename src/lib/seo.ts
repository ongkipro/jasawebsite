import { siteConfig } from '@/data/siteConfig';

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
        priceRange: 'Rp 2,9jt - Rp 50jt+',
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
                name: 'Website Maintenance Care & Strategic Add-Ons',
                description: 'Layanan perlindungan performa 24/7, monitoring uptime, backup rutin, dan add-on teknis Server-Side CAPI & pSEO.',
              },
              price: '300000',
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
    ],
  };
}

export function generateSheetSchema(
  title: string,
  description: string,
  slug: string,
  schemaType = 'WebPage'
) {
  const pageUrl = `${siteConfig.url}/folio/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
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
    ],
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
