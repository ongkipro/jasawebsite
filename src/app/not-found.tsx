import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Home,
  ArrowRight,
  ArrowLeft,
  Scissors,
  MessageSquareCode,
  PhoneCall,
  FileX2,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { InkStamp } from '@/components/ui/InkStamp';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SpineCrease } from '@/components/book/SpineCrease';

export const metadata: Metadata = {
  title: 'Folio 404 — Lembar Tidak Ditemukan',
  description:
    'Lembar brosur digital yang Anda tuju tidak ditemukan dalam arsip dossier resmi JasaWebsite.co by ONG. Periksa indeks daftar isi atau hubungi tim studio via WhatsApp.',
  robots: {
    index: false,
    follow: true,
  },
};

interface QuickFolioLink {
  slug: string;
  folioNumber: string;
  badge: string;
  title: string;
  description: string;
}

const QUICK_FOLIO_LINKS: QuickFolioLink[] = [
  {
    slug: '/folio/cover',
    folioNumber: 'FOLIO 00–01',
    badge: 'COVER',
    title: 'Front Cover & Ringkasan Studio',
    description:
      'Living digital brochure, positioning studio, komitmen performa Lighthouse 100/100.',
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
    slug: '/folio/ecommerce-shopify',
    folioNumber: 'FOLIO 06–07',
    badge: 'COMM',
    title: 'E-Commerce & Shopify D2C',
    description:
      'Toko online mandiri terintegrasi Payment Gateway QRIS & kurir otomatis tanpa komisi.',
  },
  {
    slug: '/folio/custom-web-app',
    folioNumber: 'FOLIO 08–09',
    badge: 'APPS',
    title: 'Custom Web Application & Systems',
    description:
      'Rekayasa CRM internal, mini ERP, customer portal, dan otomatisasi alur kerja digital.',
  },
  {
    slug: '/folio/portfolio',
    folioNumber: 'FOLIO 10–11',
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

  return (
    <main
      className={cn(
        'relative flex flex-col justify-between max-w-7xl mx-auto w-full transition-all select-text',
        // 1-Screen fixed viewport fit across Desktop and Tablet, natural bound on mobile
        'h-[100dvh] max-h-[100dvh] overflow-hidden',
        // Spacing matching the BookShell architecture
        'lg:py-3 lg:px-8 xl:px-12 md:py-3.5 md:px-6 py-2 px-3 sm:px-4'
      )}
    >
      {/* TOP RUNNING NAV HEADER */}
      <header className="flex-shrink-0 flex items-center justify-between border-b border-[#d5d5cd] pb-2 mb-2 lg:mb-3 font-mono text-xs select-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-bold tracking-wider hover:text-[#c23b22] transition-colors cursor-pointer text-[#111111]"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs">
              JASAWEBSITE.CO{' '}
              <span className="text-[#c23b22] font-semibold">by ONG</span>
            </span>
          </Link>
          <span className="text-[#d5d5cd]">/</span>
          <span className="text-[#4b4b4b] hidden sm:inline text-[11px]">
            LIVING DIGITAL BROCHURE
          </span>
          <span className="text-[#d5d5cd] hidden sm:inline">/</span>
          <span className="text-[#c23b22] font-semibold text-[11px]">
            FOLIO 404
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 bg-[#c23b22]/10 text-[#c23b22] px-2 py-0.5 sm:py-1 rounded-xs border border-[#c23b22]/30 font-semibold text-[10px] sm:text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22] inline-block animate-pulse" />
            <span>STATUS: E_PAGE_NOT_FOUND</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER: THE TORN / MISSING FOLIO SHEET */}
      <div className="relative my-auto w-full flex-1 flex flex-col justify-center min-h-0">
        <div
          className={cn(
            'relative w-full max-w-7xl mx-auto h-full max-h-[calc(100dvh-125px)] xl:max-h-[calc(100dvh-135px)] min-h-[460px] sm:min-h-[500px]',
            'flex flex-col bg-[#fbfbfa] border border-[#d5d5cd] rounded-sm book-elevation select-text overflow-hidden'
          )}
        >
          {/* TACTILE PERFORATED TORN SEAM BANNER */}
          <div className="flex-shrink-0 flex items-center justify-between px-3 sm:px-5 py-1.5 sm:py-2 bg-[#f4f4ef] border-b-2 border-dashed border-[#111111]/25 text-[10px] font-mono select-none">
            <div className="flex items-center gap-2 text-[#c23b22]">
              <Scissors className="w-3.5 h-3.5 text-[#c23b22]" />
              <span className="font-bold tracking-wider uppercase">
                LEMBAR SOBEK: FOLIO TERPISAH DARI PENJILIDAN ARSIP RESMI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[#4b4b4b] text-[9px] uppercase tracking-widest">
              <span>REF: DISPLACED_FOLIO_404</span>
              <span className="text-[#d5d5cd]">|</span>
              <span>VOL. 01 · 2026</span>
            </div>
          </div>

          {/* DESKTOP VIEW: TWO-PAGE EDITORIAL SPREAD (>= 1024px) */}
          <div className="hidden lg:flex relative w-full flex-1 min-h-0">
            {/* Central Spine Crease with Torn Binding Seam */}
            <SpineCrease />
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-25 pointer-events-none border-l-2 border-dashed border-[#111111]/15"
            />

            {/* LEFT SHEET: MISSING FOLIO DOSSIER & ACTIONS */}
            <section className="relative w-1/2 h-full flex flex-col justify-between p-6 xl:p-8 border-r border-[#e5e5df] spine-crease-left overflow-hidden">
              {/* Folio Header */}
              <div className="flex-shrink-0 flex items-center justify-between border-b border-[#e5e5df] pb-2.5 text-[11px] font-mono select-none">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#111111] tracking-wider text-xs">
                    FOLIO 404
                  </span>
                  <span className="text-[#d5d5cd]">·</span>
                  <span className="text-[#4b4b4b] uppercase text-[10px] tracking-wider">
                    LEMBAR ARSIP TERPISAH
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[#c23b22] tracking-wider text-[10px] bg-[#c23b22]/10 px-2 py-0.5 rounded-xs border border-[#c23b22]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22] inline-block animate-pulse" />
                  <span>STATUS: E_PAGE_NOT_FOUND</span>
                </div>
              </div>

              {/* Scrollable Dossier Content Left */}
              <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-4 my-auto pr-2 space-y-5">
                {/* 404 Hero Monument & Official Ink Stamp */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif italic text-6xl xl:text-7xl font-black text-[#111111] tracking-tight leading-none select-none">
                      404
                    </span>
                    <span className="font-mono text-xs font-bold text-[#c23b22] uppercase tracking-widest pb-1">
                      [MISSING]
                    </span>
                  </div>
                  <InkStamp
                    text="FOLIO MISSING"
                    subtext="ARSIP TERPISAH · STATUS 404"
                    date="2026"
                    className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 shrink-0"
                  />
                </div>

                {/* Editorial Headline & Indonesian Explanation */}
                <div className="space-y-2">
                  <h1 className="font-serif text-2xl xl:text-3xl font-bold tracking-tight text-[#111111] leading-snug">
                    Lembar Folio Ini Terpisah dari Bundel Brosur.
                  </h1>
                  <p className="font-sans text-xs xl:text-sm text-[#4b4b4b] leading-relaxed">
                    Halaman atau tautan spesifikasi yang Anda tuju tidak
                    ditemukan dalam dossier brosur resmi studio. Lembar ini
                    mungkin telah <strong>diarsipkan</strong>, dipindahkan ke{' '}
                    <strong>nomor folio baru</strong>, atau terdapat{' '}
                    <strong>salah pengetikan (typo)</strong> pada alamat URL.
                  </p>
                </div>

                {/* Diagnostic Monograph Metadata Box */}
                <div className="p-3 bg-[#ebebe3]/60 border border-[#d5d5cd] rounded-xs font-mono text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#111111] pb-1 border-b border-[#d5d5cd]">
                    <span className="flex items-center gap-1.5">
                      <FileX2 className="w-3.5 h-3.5 text-[#c23b22]" />
                      <span>CATATAN DIAGNOSTIK ARSIP</span>
                    </span>
                    <span className="text-[#c23b22]">HTTP_404_NOT_FOUND</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] text-[#4b4b4b] pt-1">
                    <div>
                      • KONDISI:{' '}
                      <span className="text-[#111111] font-semibold">
                        Torn Folio Seam
                      </span>
                    </div>
                    <div>
                      • DOSSIER:{' '}
                      <span className="text-[#111111] font-semibold">
                        Vol. 01 · 2026
                      </span>
                    </div>
                    <div>
                      • SOLUSI:{' '}
                      <span className="text-[#111111] font-semibold">
                        Pilih Indeks Folio
                      </span>
                    </div>
                    <div>
                      • RESPON:{' '}
                      <span className="text-[#111111] font-semibold">
                        Sub-second TTFB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons (Single Line & Compact) */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    href="/"
                    className="w-full sm:w-auto whitespace-nowrap text-xs justify-center"
                  >
                    <Home className="w-3.5 h-3.5 shrink-0" />
                    <span>Kembali ke Sampul</span>
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    href={wa404Url}
                    isExternal
                    className="w-full sm:w-auto whitespace-nowrap text-xs justify-center"
                  >
                    <MessageSquareCode className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
                    <span>WhatsApp CS ({siteConfig.phoneDisplay})</span>
                  </Button>
                </div>
              </div>

              {/* Bottom Folio Footer Left */}
              <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2.5 text-[10px] font-mono text-[#4b4b4b] select-none">
                <span>● PEMULIHAN ARSIP OTOMATIS</span>
                <span>
                  OFFICIALLY ENGINEERED BY{' '}
                  <a
                    href="https://ongki.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-2 hover:text-[#c23b22] transition-colors"
                  >
                    ONGKI.PRO
                  </a>{' '}
                  © 2026
                </span>
              </div>
            </section>

            {/* RIGHT SHEET: QUICK INDEX / TABLE OF CONTENTS */}
            <section className="relative w-1/2 h-full flex flex-col justify-between p-6 xl:p-8 spine-crease-right overflow-hidden">
              {/* Header Right */}
              <div className="flex-shrink-0 flex items-center justify-between border-b border-[#e5e5df] pb-2.5 text-[11px] font-mono select-none">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#111111]">
                  <BookOpen className="w-3.5 h-3.5 text-[#c23b22]" />
                  <span>DAFTAR ISI & INDEKS LEMBAR RESMI</span>
                </div>
                <Badge variant="outline" size="sm">
                  6 FOLIO UTAMA
                </Badge>
              </div>

              {/* Scrollable Quick Index Links */}
              <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-3 my-auto pl-2 pr-1 space-y-2">
                <p className="font-sans text-xs text-[#4b4b4b] leading-relaxed pb-1">
                  Silakan pilih lembar folio resmi di bawah ini untuk melanjutkan
                  eksplorasi spesifikasi rekayasa website dan sistem digital:
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {QUICK_FOLIO_LINKS.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug}
                      className="group block p-2.5 rounded-xs border border-[#e5e5df] hover:border-[#111111] bg-[#fbfbfa] hover:bg-[#f4f4ef] transition-all duration-150"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2 font-mono text-[10px]">
                            <span className="text-[#c23b22] font-bold">
                              {item.folioNumber}
                            </span>
                            <span className="text-[#d5d5cd]">·</span>
                            <span className="text-[#4b4b4b] uppercase font-semibold">
                              {item.badge}
                            </span>
                          </div>
                          <h2 className="font-serif text-sm font-bold text-[#111111] group-hover:text-[#c23b22] transition-colors leading-snug truncate">
                            {item.title}
                          </h2>
                          <p className="font-sans text-[11px] text-[#4b4b4b] line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                        <div className="pt-1 text-[#4b4b4b] group-hover:text-[#111111] group-hover:translate-x-1 transition-transform shrink-0">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Direct CS Quick Banner */}
                <div className="p-2.5 mt-2 bg-[#ebebe3]/50 border border-[#d5d5cd] rounded-xs flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#4b4b4b] text-[11px]">
                    <PhoneCall className="w-3.5 h-3.5 text-[#c23b22]" />
                    <span>Perlu bantuan menemukan dokumen?</span>
                  </div>
                  <a
                    href={`tel:+${siteConfig.phone}`}
                    className="font-bold text-[#111111] hover:text-[#c23b22] transition-colors text-[11px]"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Bottom Folio Footer Right */}
              <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2.5 text-[10px] font-mono text-[#4b4b4b] select-none">
                <span>100% GITHUB HANDOVER</span>
                <span>$0 EDGE HOSTING</span>
              </div>
            </section>
          </div>

          {/* MOBILE & TABLET VIEW: SINGLE RESPONSIVE SHEET (< 1024px) */}
          <section className="flex lg:hidden relative w-full flex-1 min-h-0 flex-col overflow-hidden p-3.5 sm:p-5">
            {/* Scrollable Mobile Sheet Content */}
            <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar pr-0.5 space-y-4">
              {/* Mobile Folio Header */}
              <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2 text-[10px] sm:text-[11px] font-mono select-none">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#111111]">FOLIO 404</span>
                  <span className="text-[#d5d5cd]">/</span>
                  <span className="text-[#4b4b4b]">ARSIP TERPISAH</span>
                </div>
                <div className="flex items-center gap-1 text-[#c23b22] font-semibold text-[9px] sm:text-[10px] bg-[#c23b22]/10 px-1.5 py-0.5 rounded-xs border border-[#c23b22]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22] inline-block animate-pulse" />
                  <span>STATUS: E_PAGE_NOT_FOUND</span>
                </div>
              </div>

              {/* Hero: 404 + Ink Stamp */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif italic text-5xl sm:text-6xl font-black text-[#111111] tracking-tight leading-none select-none">
                    404
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#c23b22] uppercase tracking-widest pb-1">
                    [TORN SHEET]
                  </span>
                </div>
                <InkStamp
                  text="FOLIO MISSING"
                  subtext="ARSIP TERPISAH · STATUS 404"
                  date="2026"
                  className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 self-start sm:self-auto"
                />
              </div>

              {/* Headline & Description */}
              <div className="space-y-1.5">
                <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111111] leading-snug">
                  Lembar Folio Ini Terpisah dari Bundel Brosur.
                </h1>
                <p className="font-sans text-xs text-[#4b4b4b] leading-relaxed">
                  Halaman yang Anda tuju mungkin telah <strong>diarsipkan</strong>,
                  dipindahkan ke <strong>nomor folio baru</strong>, atau terdapat{' '}
                  <strong>salah pengetikan (typo)</strong> pada alamat URL.
                </p>
              </div>

              {/* Diagnostic Card Mobile */}
              <div className="p-2.5 bg-[#ebebe3]/60 border border-[#d5d5cd] rounded-xs font-mono text-[10px] space-y-1 text-[#4b4b4b]">
                <div className="flex items-center justify-between font-bold text-[#111111] uppercase pb-1 border-b border-[#d5d5cd]">
                  <span>DIAGNOSTIK DOKUMEN</span>
                  <span className="text-[#c23b22]">HTTP 404</span>
                </div>
                <div>• KONDISI: Lembar Terpisah dari Bundel</div>
                <div>• REKOMENDASI: Buka Daftar Isi di Bawah Ini</div>
              </div>

              {/* Mobile Direct Action Buttons (Single Line) */}
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <Button
                  variant="primary"
                  size="sm"
                  href="/"
                  className="w-full sm:w-auto whitespace-nowrap text-xs justify-center"
                >
                  <Home className="w-3.5 h-3.5 shrink-0" />
                  <span>Kembali ke Sampul</span>
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  href={wa404Url}
                  isExternal
                  className="w-full sm:w-auto whitespace-nowrap text-xs justify-center"
                >
                  <MessageSquareCode className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
                  <span>WhatsApp CS ({siteConfig.phoneDisplay})</span>
                </Button>
              </div>

              {/* Quick Index Section for Mobile */}
              <div className="pt-3 border-t border-[#e5e5df] space-y-2">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider font-bold text-[#111111]">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-[#c23b22]" />
                    <span>INDEKS LEMBAR RESMI TERSEDIA</span>
                  </span>
                  <Badge variant="outline" size="sm">
                    DAFTAR ISI
                  </Badge>
                </div>

                <div className="grid grid-cols-1 gap-1.5">
                  {QUICK_FOLIO_LINKS.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug}
                      className="group block p-2 rounded-xs border border-[#e5e5df] hover:border-[#111111] bg-[#fbfbfa] hover:bg-[#f4f4ef] transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="font-mono text-[9px] text-[#c23b22] font-semibold">
                            {item.folioNumber} · {item.badge}
                          </div>
                          <div className="font-serif text-xs font-bold text-[#111111] group-hover:text-[#c23b22] truncate">
                            {item.title}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#4b4b4b] group-hover:text-[#111111] shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Mobile Sheet Footer */}
            <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2 text-[9px] font-mono text-[#4b4b4b] select-none">
              <span>ONG-OS RECOVERY ROUTINE</span>
              <span>LIGHTHOUSE 100/100</span>
            </div>
          </section>
        </div>
      </div>

      {/* BOTTOM CONTROLLER & FOOTER */}
      <footer className="flex-shrink-0 mt-2 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#d5d5cd] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 font-mono text-xs select-none">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#4b4b4b]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-[#c23b22] font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Halaman Utama</span>
          </Link>
          <span className="text-[#d5d5cd]">|</span>
          <span className="hidden sm:inline">
            REKAYASA SISTEM DIGITAL INDONESIA
          </span>
        </div>

        <div className="flex items-center justify-center sm:justify-end gap-2.5 w-full sm:w-auto">
          <a
            href={`tel:+${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 min-h-[36px] rounded-xs border border-[#d5d5cd] bg-[#ebebe3] hover:bg-[#111111] hover:text-[#fbfbfa] text-xs font-bold text-[#111111] transition-colors cursor-pointer"
            title="Telepon Langsung Customer Service"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#c23b22]" />
            <span>Call CS</span>
          </a>
          <a
            href={wa404Url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 min-h-[36px] rounded-xs bg-[#111111] hover:bg-[#c23b22] text-[#fbfbfa] text-xs font-bold transition-colors cursor-pointer shadow-xs"
            title="Chat WhatsApp Customer Service"
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>WhatsApp CS →</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
