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
    default: 'Jasa Pembuatan Website Profesional & Toko Online Terbaik - Jasa Website',
    template: '%s - Jasa Website',
  },
  description:
    'Jasa pembuatan website profesional, landing page sales, toko online e-commerce & custom web application untuk bisnis Indonesia. Desain premium, performa sub-detik, mobile-responsive, dan infrastruktur Global Edge Cloud. Konsultasi draft SOW via WhatsApp.',
  keywords: [
    'Jasa Pembuatan Website',
    'Jasa Website',
    'Jasa Bikin Website Profesional',
    'Jasa Pembuatan Website Company Profile',
    'Jasa Landing Page Sales & Leads',
    'Jasa Pembuatan Toko Online E-Commerce',
    'Jasa Pembuatan Website Shopify Indonesia',
    'Jasa Web Application Custom CRM ERP',
    'Software House Indonesia',
    'Jasa Web Developer Indonesia',
    'Jasa Bikin Website Surabaya Jakarta',
    'Website Cepat Global Edge Cloud',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteConfig.url,
    siteName: 'Jasa Website',
    title: 'Jasa Pembuatan Website Profesional & Toko Online Terbaik - Jasa Website',
    description:
      'Jasa pembuatan website profesional, landing page sales, toko online e-commerce & custom web application untuk bisnis Indonesia. Desain premium, performa sub-detik, mobile-responsive, dan infrastruktur Global Edge Cloud. Konsultasi draft SOW via WhatsApp.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 675,
        alt: 'Jasa Pembuatan Website Profesional & Toko Online Terbaik - Jasa Website',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Profesional & Toko Online Terbaik - Jasa Website',
    description:
      'Jasa pembuatan website profesional, landing page sales, toko online e-commerce & custom web application untuk bisnis Indonesia. Konsultasi draft SOW via WhatsApp.',
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
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#fbfbfa',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
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
      className={`h-full h-[100dvh] overflow-hidden overscroll-none ${inter.variable} ${newsreader.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(masterSchema) }}
        />
      </head>
      <body className="h-full h-[100dvh] overflow-hidden overscroll-none bg-[#f3f3ee] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#fbfbfa]">
        {children}
      </body>
    </html>
  );
}
