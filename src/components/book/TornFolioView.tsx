'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Home,
  ArrowRight,
  Scissors,
  MessageSquareCode,
  PhoneCall,
  FileX2,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/data/siteConfig';
import { InkStamp } from '@/components/ui/InkStamp';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SpineCrease } from '@/components/book/SpineCrease';

export interface QuickFolioLink {
  slug: string;
  folioNumber: string;
  badge: string;
  title: string;
  description: string;
}

export interface TornFolioViewProps {
  wa404Url: string;
  quickLinks: QuickFolioLink[];
}

export function TornFolioView({ wa404Url, quickLinks }: TornFolioViewProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isDogEarHovered, setIsDogEarHovered] = useState(false);

  // Motion variants with GPU-accelerated transforms
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const sheetFloatingVariants: Variants = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      }
    : {
        initial: {
          opacity: 0,
          y: -28,
          rotate: -1.8,
          scale: 0.985,
        },
        animate: {
          opacity: 1,
          y: 0,
          rotate: -0.4,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 220,
            damping: 22,
            mass: 0.8,
          },
        },
      };

  const stampVariants: Variants = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      }
    : {
        initial: {
          scale: 1.8,
          opacity: 0,
          rotate: 14,
        },
        animate: {
          scale: 1,
          opacity: 0.92,
          rotate: -3,
          transition: {
            delay: 0.38,
            type: 'spring',
            stiffness: 450,
            damping: 24,
          },
        },
      };

  const listItemVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, x: 12 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            stiffness: 280,
            damping: 24,
          },
        },
      };

  return (
    <main
      className={cn(
        'relative flex flex-col justify-between max-w-7xl mx-auto w-full transition-all select-text',
        // Fixed viewport container across Desktop and Tablet, natural bound on mobile
        'h-full h-[100dvh] max-h-[100dvh] overflow-hidden',
        // Spacing matching the BookShell architecture
        'pt-[max(0.5rem,env(safe-area-inset-top))] pb-[max(0.5rem,env(safe-area-inset-bottom))] px-3 sm:px-4 md:py-3 md:px-6 lg:py-3 lg:px-8 xl:px-12'
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
            FOLIO 404 (LEMBAR SOBEK)
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 bg-[#c23b22]/10 text-[#c23b22] px-2 py-0.5 sm:py-1 rounded-xs border border-[#c23b22]/30 font-semibold text-[10px] sm:text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22] inline-block animate-pulse" />
            <span>STATUS: E_PAGE_NOT_FOUND</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER: THE TORN / MISSING FOLIO SHEET WITH MOTION */}
      <div className="relative my-auto w-full flex-1 flex flex-col justify-center min-h-0">
        <motion.div
          variants={sheetFloatingVariants}
          initial="initial"
          animate="animate"
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  rotate: 0,
                  y: -3,
                  transition: { type: 'spring', stiffness: 300, damping: 25 },
                }
          }
          className={cn(
            'relative w-full max-w-7xl mx-auto h-full max-h-[calc(100dvh-125px)] xl:max-h-[calc(100dvh-135px)] min-h-[460px] sm:min-h-[500px]',
            'flex flex-col bg-[#fbfbfa] border border-[#d5d5cd] rounded-sm book-elevation select-text overflow-hidden'
          )}
        >
          {/* TACTILE PERFORATED TORN SEAM BANNER WITH ANIMATED RIP ACCENT */}
          <div className="flex-shrink-0 flex items-center justify-between px-3 sm:px-5 py-1.5 sm:py-2 bg-[#f4f4ef] border-b-2 border-dashed border-[#111111]/25 text-[10px] font-mono select-none">
            <div className="flex items-center gap-2 text-[#c23b22]">
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        rotate: [0, -10, 10, 0],
                        transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                      }
                }
              >
                <Scissors className="w-3.5 h-3.5 text-[#c23b22]" />
              </motion.div>
              <span className="font-bold tracking-wider uppercase">
                LEMBAR SOBEK: FOLIO TERPISAH DARI PENJILIDAN ARSIP RESMI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[#4b4b4b] text-[9px] uppercase tracking-widest">
              <span>REF: DISPLACED_FOLIO_404</span>
              <span className="text-[#d5d5cd]">/</span>
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
                {/* 404 Hero Monument & Animated Physical Ink Stamp */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif italic text-6xl xl:text-7xl font-black text-[#111111] tracking-tight leading-none select-none">
                      404
                    </span>
                    <span className="font-mono text-xs font-bold text-[#c23b22] uppercase tracking-widest pb-1">
                      [TERLEPAS]
                    </span>
                  </div>

                  <motion.div
                    variants={stampVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : {
                            scale: 1.05,
                            rotate: 0,
                            transition: { type: 'spring', stiffness: 400 },
                          }
                    }
                  >
                    <InkStamp
                      text="FOLIO TERLEPAS"
                      subtext="ARSIP TERPISAH · STATUS 404"
                      date="2026"
                      className="shrink-0 shadow-xs cursor-pointer"
                    />
                  </motion.div>
                </div>

                {/* Editorial Headline & Indonesian Explanation */}
                <div className="space-y-2">
                  <h1 className="font-serif text-2xl xl:text-3xl font-bold tracking-tight text-[#111111] leading-snug">
                    Lembar Folio Ini Terlepas dari Bundel Brosur.
                  </h1>
                  <p className="font-sans text-xs xl:text-sm text-[#4b4b4b] leading-relaxed">
                    Halaman atau tautan spesifikasi yang Anda tuju tidak
                    ditemukan dalam dossier brosur resmi studio. Lembar ini
                    mungkin telah <strong>diarsipkan</strong>, dipindahkan ke{' '}
                    <strong>nomor folio baru</strong>, atau terdapat{' '}
                    <strong>salah pengetikan (typo)</strong> pada alamat URL.
                  </p>
                </div>

                {/* Diagnostic Monograph Metadata Box with Tactile Border */}
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
                    className="w-full sm:w-auto whitespace-nowrap text-xs justify-center group"
                  >
                    <Home className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5" />
                    <span>Kembali ke Sampul (Folio 00)</span>
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    href={wa404Url}
                    isExternal
                    className="w-full sm:w-auto whitespace-nowrap text-xs justify-center group"
                  >
                    <MessageSquareCode className="w-3.5 h-3.5 text-[#c23b22] shrink-0 transition-transform group-hover:scale-110" />
                    <span>WhatsApp Tim Studio</span>
                  </Button>
                </div>
              </div>

              {/* Bottom Folio Footer Left */}
              <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2.5 text-[10px] font-mono text-[#4b4b4b] select-none">
                <span className="flex items-center gap-1 text-[#2d6a4f]">
                  <RotateCcw className="w-3 h-3" />
                  <span>PEMULIHAN ARSIP OTOMATIS</span>
                </span>
                <span>
                  OFFICIALLY ENGINEERED BY{' '}
                  <a
                    href="https://ongki.pro"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
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

              {/* Scrollable Quick Index Links with Staggered Motion */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-3 my-auto pl-2 pr-1 space-y-2"
              >
                <p className="font-sans text-xs text-[#4b4b4b] leading-relaxed pb-1">
                  Silakan pilih lembar folio resmi di bawah ini untuk melanjutkan
                  eksplorasi spesifikasi rekayasa website dan sistem digital:
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {quickLinks.map((item) => (
                    <motion.div
                      key={item.slug}
                      variants={listItemVariants}
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : {
                              x: 4,
                              transition: { type: 'spring', stiffness: 350, damping: 20 },
                            }
                      }
                    >
                      <Link
                        href={item.slug}
                        className="group block p-2.5 rounded-xs border border-[#e5e5df] hover:border-[#111111] bg-[#fbfbfa] hover:bg-[#f4f4ef] transition-colors shadow-2xs"
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
                    </motion.div>
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
              </motion.div>

              {/* Bottom Folio Footer Right */}
              <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2.5 text-[10px] font-mono text-[#4b4b4b] select-none">
                <span>100% KEPEMILIKAN PENUH</span>
                <span>GLOBAL EDGE CLOUD</span>
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
                  <span className="text-[#4b4b4b]">ARSIP TERLEPAS</span>
                </div>
                <div className="flex items-center gap-1 text-[#c23b22] font-semibold text-[9px] sm:text-[10px] bg-[#c23b22]/10 px-1.5 py-0.5 rounded-xs border border-[#c23b22]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22] inline-block animate-pulse" />
                  <span>STATUS: 404</span>
                </div>
              </div>

              {/* Hero: 404 + Ink Stamp */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif italic text-5xl sm:text-6xl font-black text-[#111111] tracking-tight leading-none select-none">
                    404
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#c23b22] uppercase tracking-widest pb-1">
                    [TERLEPAS]
                  </span>
                </div>
                <motion.div
                  variants={stampVariants}
                  initial="initial"
                  animate="animate"
                >
                  <InkStamp
                    text="FOLIO TERLEPAS"
                    subtext="ARSIP TERPISAH · STATUS 404"
                    date="2026"
                    className="scale-90 sm:scale-100 origin-left sm:origin-right"
                  />
                </motion.div>
              </div>

              {/* Text explanation */}
              <div className="space-y-1.5">
                <h1 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#111111] leading-snug">
                  Lembar Ini Terlepas dari Bundel Brosur.
                </h1>
                <p className="font-sans text-xs text-[#4b4b4b] leading-relaxed">
                  Tautan yang Anda tuju tidak ditemukan dalam dossier resmi studio.
                  Silakan kembali ke sampul utama atau buka lembar layanan di bawah.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <Button
                  variant="primary"
                  size="sm"
                  href="/"
                  className="w-full text-xs justify-center"
                >
                  <Home className="w-3.5 h-3.5 shrink-0" />
                  <span>Kembali ke Sampul (Folio 00)</span>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  href={wa404Url}
                  isExternal
                  className="w-full text-xs justify-center"
                >
                  <MessageSquareCode className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
                  <span>WhatsApp Tim Studio</span>
                </Button>
              </div>

              {/* Quick Index List */}
              <div className="pt-2 border-t border-[#e5e5df] space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#111111]">
                  <span>Indeks Lembar Brosur Resmi:</span>
                  <span className="text-[#c23b22]">6 Pilihan</span>
                </div>
                <div className="space-y-1.5">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug}
                      className="block p-2 rounded-xs border border-[#e5e5df] hover:border-[#111111] bg-[#fbfbfa] text-left transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <span className="font-mono text-[9px] text-[#c23b22] font-bold block">
                            {item.folioNumber}
                          </span>
                          <span className="font-serif text-xs font-bold text-[#111111] truncate block">
                            {item.title}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#4b4b4b] shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2 mt-2 text-[9px] font-mono text-[#4b4b4b] select-none">
              <span>ONGKI.PRO © 2026</span>
              <span>LIGHTHOUSE 100/100</span>
            </div>
          </section>

          {/* TACTILE CORNER PEEL / DOG-EAR ACCENT ON BOTTOM RIGHT */}
          <div
            onMouseEnter={() => setIsDogEarHovered(true)}
            onMouseLeave={() => setIsDogEarHovered(false)}
            className="absolute bottom-0 right-0 z-30 pointer-events-auto cursor-pointer"
            title="Lembar Arsip Terlepas · JasaWebsite.co by ONG"
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      width: isDogEarHovered ? 40 : 28,
                      height: isDogEarHovered ? 40 : 28,
                      transition: { type: 'spring', stiffness: 350, damping: 25 },
                    }
              }
              className="relative ml-auto overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-[#ebebe3] border border-[#d5d5cd] shadow-md transition-all rounded-tl-xs origin-bottom-right"
                style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
              />
              <div
                className="absolute inset-0 opacity-25 bg-gradient-to-tl from-black to-transparent"
                style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
