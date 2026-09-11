import type { Metadata } from 'next';
import foliosData from '@/data/folios.json';
import { siteConfig } from '@/data/siteConfig';
import { BookFolioRenderer } from '@/components/book/BookFolioRenderer';

export const dynamic = 'force-static';

const pageUrl = `${siteConfig.url}/shopify`;
const pageTitle = 'Jasa Pembuatan Website Shopify Profesional & Bespoke Storefront Indonesia';
const pageDescription =
  'Jasa pembuatan website Shopify profesional kustom dari nol. Desain bespoke eksklusif, loading sub-detik, integrasi pembayaran QRIS & kurir lokal se-Indonesia, SEO Google optimal, serta setup sinyal iklan Meta CAPI & Google Ads.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'jasa pembuatan website shopify',
    'jasa custom website shopify dari nol',
    'shopify developer indonesia',
    'shopify agency indonesia',
    'jasa toko online shopify profesional',
    'jasa integrasi payment gateway dan kurir shopify',
    'jasa setup meta pixel capi google ads shopify',
    'jasa bikin toko shopify d2c brand',
    'jasa optimasi kecepatan shopify',
    'shopify partner indonesia',
    'jasa buat web shopify terima beres',
  ],
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
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 675,
        alt: 'Jasa Pembuatan Website Shopify Profesional by Ong-OS',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
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

export default function ShopifyPage() {
  const shopifyIndex = foliosData.findIndex((f) => f.slug === 'shopify');
  const initialIndex = shopifyIndex !== -1 ? shopifyIndex : 4;

  const shopifyStructuredSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}/#service`,
        name: pageTitle,
        description: pageDescription,
        serviceType: 'Shopify E-Commerce Web Development & Ads Signal Engineering',
        provider: {
          '@type': 'ProfessionalService',
          '@id': `${siteConfig.url}/#service`,
          name: siteConfig.name,
          telephone: `+${siteConfig.phone}`,
          email: siteConfig.email,
          url: siteConfig.url,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Paket Jasa Pembuatan Website Shopify',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Shopify Bespoke Storefront (Custom dari Nol)',
              description:
                'Storefront Shopify custom dari nol, desain unik brand, integrasi QRIS & kurir lokal se-Indonesia.',
              price: '6900000',
              priceCurrency: 'IDR',
              availability: 'https://schema.org/InStock',
            },
            {
              '@type': 'Offer',
              name: 'Shopify Scale-Up & Full Growth Engine',
              description:
                'Storefront custom dari nol, Meta Pixel CAPI server-side, Google Ads Enhanced Conversions, GA4, dan Google Merchant Center Sync.',
              price: '12900000',
              priceCurrency: 'IDR',
              availability: 'https://schema.org/InStock',
            },
            {
              '@type': 'Offer',
              name: 'Shopify Enterprise & Multi-Market Expansion',
              description:
                'Arsitektur enterprise multi-market, multi-currency global ekspor, integrasi kargo & WMS/ERP.',
              price: '24900000',
              priceCurrency: 'IDR',
              availability: 'https://schema.org/InStock',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}/#faq`,
        name: 'Pertanyaan Umum Jasa Pembuatan Website Shopify Indonesia',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Apakah website Shopify bisa menerima pembayaran QRIS dan Virtual Account lokal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ya, tentu bisa. Kami mengintegrasikan payment gateway resmi seperti Midtrans, Xendit, atau Doku sehingga toko Shopify Anda langsung bisa menerima pembayaran QRIS (semua e-wallet dan mobile banking), Virtual Account Bank (BCA, Mandiri, BRI, BNI), dan Kartu Kredit secara otomatis.',
            },
          },
          {
            '@type': 'Question',
            name: 'Bagaimana dengan hitungan ongkos kirim kurir Indonesia (JNE, SiCepat, J&T)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kami mengatur sistem kalkulasi ongkir real-time otomatis hingga tingkat kecamatan di seluruh Indonesia melalui integrasi kurir lokal terverifikasi, sehingga pembeli Anda tidak perlu konfirmasi ongkir manual ke admin WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Mengapa harus custom dari nol dan bukan menggunakan tema template biasa?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tema template pasaran umumnya lambat karena bloatware, tampilannya mirip dengan ribuan toko lain, dan kaku saat ingin disesuaikan dengan alur konversi brand Anda. Dengan development custom dari nol, toko Anda memiliki visual eksklusif, loading sub-detik yang disukai Google & pembeli di HP, serta tingkat konversi iklan yang jauh lebih tinggi.',
            },
          },
          {
            '@type': 'Question',
            name: 'Apakah sudah termasuk setup tracking Meta Ads (Pixel & CAPI) dan Google Ads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ya. Pada paket Growth Engine, kami memasang Meta Conversions API (CAPI) server-side untuk memastikan data konversi tidak bocor akibat adblocker atau kebijakan privasi iOS, serta mengintegrasikan Google Ads Enhanced Conversions, GA4, dan sinkronisasi Google Merchant Center.',
            },
          },
        ],
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
            name: 'Jasa Pembuatan Website Shopify',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id="shopify-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyStructuredSchema) }}
      />
      <BookFolioRenderer initialSpreadIndex={initialIndex} />
    </>
  );
}
