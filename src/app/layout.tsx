import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { generateMasterSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Jasa Pembuatan Website & Sistem Digital Indonesia | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Jasa pembuatan website profesional & sistem digital full-stack untuk bisnis Indonesia. Company profile, landing page sales, toko online Shopify, & custom web app CRM/ERP. Cepat, aman, tanpa biaya server bulanan. Konsultasi langsung via Call / WhatsApp.',
  keywords: [
    'Jasa Pembuatan Website',
    'Jasa Bikin Website Profesional',
    'Jasa Pembuatan Website Company Profile',
    'Jasa Landing Page Sales & Leads',
    'Jasa Pembuatan Toko Online E-Commerce',
    'Jasa Pembuatan Website Shopify Indonesia',
    'Jasa Web Application Custom CRM ERP',
    'Software House Indonesia',
    'Jasa Web Developer Indonesia',
    'Jasa Bikin Website Surabaya Jakarta',
    'Website Cepat Tanpa Biaya Server Bulanan',
    'Digital Brochure Living Folio',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'id-ID': siteConfig.url,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Jasa Pembuatan Website & Sistem Digital Indonesia | ${siteConfig.name}`,
    description:
      'Jasa pembuatan website profesional & sistem digital full-stack untuk bisnis Indonesia. Company profile, landing page sales, toko online Shopify, & custom web app. Konsultasi langsung via Call / WhatsApp.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: `${siteConfig.name} - Jasa Pembuatan Website & Sistem Digital Indonesia`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Jasa Pembuatan Website & Sistem Digital Indonesia | ${siteConfig.name}`,
    description:
      'Website & sistem digital full-stack untuk bisnis Indonesia. Cepat, aman, tanpa biaya server bulanan. Hubungi via Call / WhatsApp.',
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
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#fbfbfa',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const masterSchema = generateMasterSchema();

  return (
    <html
      lang="id"
      className={`${inter.variable} ${newsreader.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(masterSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#f3f3ee] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#fbfbfa]">
        {children}
      </body>
    </html>
  );
}
