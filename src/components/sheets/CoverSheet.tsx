import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { InkStamp } from '@/components/ui/InkStamp';
import { siteConfig } from '@/data/siteConfig';

export function CoverSheet() {
  return (
    <article className="space-y-6">
      {/* Monogram & Studio Tag */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#111111] inline-block" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold">
            {siteConfig.name}
          </span>
        </div>
        <Badge variant="mono">VOL. 01 · 2026</Badge>
      </div>

      {/* Monumental Headline */}
      <div className="space-y-3 pt-2">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.1]">
          Website dan Sistem Digital untuk Bisnis yang Ingin Bertumbuh.
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#4b4b4b] leading-snug">
          Full-Stack Web Engineering untuk kehadiran brand berwibawa, akuisisi prospek ber-ROI tinggi, dan automasi proses bisnis.
        </p>
      </div>

      {/* Positioning manifesto summary */}
      <p className="font-sans text-xs sm:text-sm text-[#4b4b4b] leading-relaxed">
        Bukan agensi template murahan yang lambat dan rawan malware. Bukan software house elitis yang lambat dan overpriced. JasaWebsite.co by ONG memposisikan diri sebagai mitra rekayasa web dan sistem digital terpercaya untuk pelaku bisnis Indonesia yang sedang bertumbuh.
      </p>

      {/* Certified Quality Ink Stamp & Metrics */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#e5e5df]">
        <InkStamp
          text="CERTIFIED ARCHITECTURE"
          subtext="LIGHTHOUSE 100/100 · $0 EDGE"
          date="2026"
        />

        <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px] text-[#4b4b4b]">
          <div>• TTFB: <span className="text-[#111111] font-bold">&lt; 0.3s</span></div>
          <div>• Server: <span className="text-[#111111] font-bold">$0 / bln</span></div>
          <div>• Code: <span className="text-[#111111] font-bold">100% GitHub</span></div>
          <div>• Edge: <span className="text-[#111111] font-bold">300+ PoPs</span></div>
        </div>
      </div>
    </article>
  );
}
