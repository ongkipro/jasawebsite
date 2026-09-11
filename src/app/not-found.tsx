import React from 'react';
import type { Metadata } from 'next';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { TornFolioView, type QuickFolioLink } from '@/components/book/TornFolioView';

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan (404)',
  description:
    'Lembar arsip folio yang Anda tuju tidak ditemukan. Periksa indeks daftar isi brosur digital atau hubungi tim studio kami via WhatsApp.',
  robots: {
    index: false,
    follow: true,
  },
};

const QUICK_FOLIO_LINKS: QuickFolioLink[] = [
  {
    slug: '/',
    folioNumber: 'FOLIO 00–01',
    badge: 'COVER',
    title: 'Front Cover & Ringkasan Studio',
    description:
      'Living digital brochure, positioning studio, layanan website dan sistem bisnis.',
  },
  {
    slug: '/folio/company-profile',
    folioNumber: 'FOLIO 02–03',
    badge: 'COMPRO',
    title: 'Company Profile Website',
    description:
      'Kredibilitas resmi korporat B2B, kesiapan tender resmi, dan reposisi brand berkelas.',
  },
  {
    slug: '/folio/sales-website',
    folioNumber: 'FOLIO 04–05',
    badge: 'SALES',
    title: 'Sales & Lead Generation Website',
    description:
      'Corong konversi traffic Meta/Google Ads menjadi leads WhatsApp pembeli bernilai tinggi.',
  },
  {
    slug: '/folio/ecommerce',
    folioNumber: 'FOLIO 06–07',
    badge: 'COMM',
    title: 'Toko Online Mandiri (0% Komisi)',
    description:
      'Toko online mandiri terintegrasi Payment Gateway QRIS & kurir otomatis tanpa komisi.',
  },
  {
    slug: '/shopify',
    folioNumber: 'FOLIO 08–09',
    badge: 'SHOPIFY',
    title: 'Shopify Bespoke & Growth Engine',
    description:
      'Storefront Shopify custom dari nol, performa sub-detik, pembayaran QRIS, kurir lokal & ads tracking.',
  },
  {
    slug: '/folio/custom-web-app',
    folioNumber: 'FOLIO 10–11',
    badge: 'APPS',
    title: 'Custom Web Application & Systems',
    description:
      'Rekayasa CRM internal, mini ERP, customer portal, dan otomatisasi alur kerja digital.',
  },
  {
    slug: '/folio/portfolio',
    folioNumber: 'FOLIO 12–13',
    badge: 'GALERI',
    title: 'Galeri Portofolio & Case Studies',
    description:
      'Showcase karya terverifikasi dengan metrik pertumbuhan bisnis dan pembuktian teknis riil.',
  },
];

export default function NotFound() {
  const wa404Url = buildWhatsAppUrl({
    ref: 'Folio-404-Torn-Sheet',
    customText:
      'Halo Tim JasaWebsite.co by ONG, saya membuka brosur digital dan menemukan lembar folio yang terpisah / halaman 404. Mohon bantuan informasi spesifikasi yang sedang saya cari.',
  });

  return <TornFolioView wa404Url={wa404Url} quickLinks={QUICK_FOLIO_LINKS} />;
}
