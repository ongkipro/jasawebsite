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

      {/* Open Editorial Navigation Band (No boxy frames, stabilo accented) */}
      <div className="py-3 my-1.5 border-y border-[#e5e5df] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-[#c23b22] inline-block animate-pulse" />
          <span className="text-[#111111] uppercase tracking-wider font-semibold">
            Bukti Karya: <span className="stabilo-yellow font-bold text-[#111111] px-1.5 py-0.5">10+ Proyek Live</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <Link
            href="/folio/portfolio"
            className="group font-serif text-sm font-bold text-[#111111] hover:text-[#c23b22] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="underline decoration-[#c23b22] decoration-2 underline-offset-4">
              Lihat Portofolio &amp; Hasil Karya
            </span>
            <span className="text-[#c23b22] group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <span className="text-[#d5d5cd]">/</span>
          <Link
            href="/folio/company-profile"
            className="text-[#4b4b4b] hover:text-[#111111] underline decoration-[#d5d5cd] underline-offset-4 transition-colors cursor-pointer"
          >
            Daftar Layanan &amp; Paket →
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

        <div className="grid grid-cols-2 gap-x-2.5 sm:gap-x-4 gap-y-1 font-mono text-[10px] sm:text-[10.5px] text-[#4b4b4b]">
          <div>Akses: <span className="text-[#111111] font-bold">&lt; 0.3s TTFB</span></div>
          <div>Cloud: <span className="stabilo-green font-bold text-[#111111]">Global Edge</span></div>
          <div>Aset: <span className="text-[#111111] font-bold">100% Hak Milik</span></div>
          <div>Uptime: <span className="text-[#111111] font-bold">99.9% SLA</span></div>
        </div>
      </div>
    </article>
  );
}
