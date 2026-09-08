import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { InkStamp } from '@/components/ui/InkStamp';
import { siteConfig } from '@/data/siteConfig';

export function CoverSheet() {
  return (
    <article className="space-y-4 sm:space-y-5">
      {/* Monogram & Studio Tag */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#111111] inline-block" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold">
            {siteConfig.name}
          </span>
        </div>
        <Badge variant="mono">VOL. 01 · 2026</Badge>
      </div>

      {/* Monumental Headline */}
      <div className="space-y-2 pt-1">
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] leading-[1.15]">
          Website dan Sistem Digital untuk{' '}
          <span className="stabilo-yellow">Bisnis yang Ingin Bertumbuh.</span>
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-[#4b4b4b] leading-snug">
          Full-Stack Web Engineering untuk kehadiran brand berwibawa, akuisisi prospek ber-ROI tinggi, dan automasi proses bisnis.
        </p>
      </div>

      {/* Positioning manifesto summary */}
      <p className="font-sans text-xs sm:text-[13px] text-[#4b4b4b] leading-relaxed">
        Bukan agensi template murahan yang lambat dan rawan malware. Bukan software house elitis yang lambat dan overpriced. JasaWebsite memposisikan diri sebagai mitra rekayasa web dan sistem digital terpercaya untuk pelaku bisnis Indonesia yang sedang bertumbuh.
      </p>

      {/* Golden Conversion Action Hub (Direct to Portfolio & Services) */}
      <div className="p-2.5 sm:p-3 bg-[#f4f4ef] border border-[#111111] rounded-xs space-y-2 shadow-xs">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="font-bold text-[#111111] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
            <span className="w-2 h-2 rounded-full bg-[#c23b22] inline-block animate-pulse" />
            <span>AKSES CEPAT BUKTI KARYA</span>
          </span>
          <span className="text-[10px] text-[#c23b22] font-bold">10+ PROYEK LIVE</span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <Link
            href="/folio/portfolio"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#111111] hover:bg-[#c23b22] text-[#fbfbfa] text-xs font-bold rounded-xs transition-colors cursor-pointer shadow-xs text-center"
          >
            <span>Lihat Portofolio &amp; Hasil Karya Live</span>
            <span>→</span>
          </Link>

          <Link
            href="/folio/company-profile"
            className="inline-flex items-center justify-center gap-1 px-3 py-2 bg-[#fbfbfa] hover:bg-[#ebebe3] text-[#111111] border border-[#d5d5cd] text-xs font-semibold rounded-xs transition-colors cursor-pointer text-center"
          >
            <span>Daftar Layanan &amp; Paket →</span>
          </Link>
        </div>
      </div>

      {/* Certified Quality Ink Stamp & Metrics */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t border-[#e5e5df]">
        <div className="shrink-0">
          <InkStamp
            text="CERTIFIED ARCHITECTURE"
            subtext="LIGHTHOUSE 100/100 · GLOBAL EDGE CLOUD"
            date="2026"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1 font-mono text-[10.5px] sm:text-[11px] text-[#4b4b4b]">
          <div className="whitespace-nowrap">• Akses: <span className="text-[#111111] font-bold">&lt; 0.3s TTFB</span></div>
          <div className="whitespace-nowrap">• Cloud: <span className="stabilo-green font-bold text-[#111111]">Global</span></div>
          <div className="whitespace-nowrap">• Aset: <span className="text-[#111111] font-bold">100% Hak Milik</span></div>
          <div className="whitespace-nowrap">• Uptime: <span className="text-[#111111] font-bold">99.9% SLA</span></div>
        </div>
      </div>
    </article>
  );
}
