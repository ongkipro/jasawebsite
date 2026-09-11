import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';
import foliosData from '@/data/folios.json';

export function TocSheet() {
  return (
    <article className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-3">
        <h2 className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111] flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>INDEX OF SERVICES & CAPABILITIES</span>
        </h2>
        <Badge variant="outline">TABLE OF CONTENTS</Badge>
      </div>

      {/* Directory list of spreads (Clickable Links) */}
      <div className="space-y-1 sm:space-y-1.5 font-mono text-xs">
        {foliosData.slice(1).map((folio, index) => {
          const isPortfolio = folio.slug === 'portfolio';
          const isShopify = folio.slug === 'shopify';
          return (
            <Link
              key={folio.id}
              href={`/folio/${folio.slug}`}
              className={cn(
                'group block p-1.5 sm:p-2 rounded-xs border transition-all cursor-pointer',
                isShopify
                  ? 'bg-[#fbfbfa] border-[#111111] shadow-2xs hover:border-[#c23b22]'
                  : isPortfolio
                    ? 'bg-[#fbfbfa] border-[#c23b22]/40 shadow-xs hover:border-[#c23b22]'
                    : 'border-transparent hover:border-[#d5d5cd] hover:bg-[#f4f4ef]'
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0 flex-1">
                  <span className="text-[#c23b22] font-mono text-xs font-bold shrink-0 group-hover:translate-x-0.5 transition-transform">
                    ( 0{index + 1} )
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#c23b22] transition-colors leading-snug">
                    {folio.title}
                  </span>
                  {isShopify && (
                    <span className="px-1.5 py-0.5 bg-[#111111] text-[#fbfbfa] text-[8.5px] font-mono font-bold rounded-xs shrink-0 tracking-wider flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-current text-yellow-400" />
                      FEATURED
                    </span>
                  )}
                  {isPortfolio && (
                    <span className="px-1.5 py-0.5 bg-[#c23b22] text-[#fbfbfa] text-[9px] font-mono font-bold rounded-xs shrink-0 tracking-wider">
                      BUKTI KARYA
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[#4b4b4b] text-[10px] font-mono shrink-0 pt-0.5">
                  <span className="text-[9.5px] sm:text-[10px] text-[#666666] tracking-tight">
                    {folio.leftFolioNumber}–{folio.rightFolioNumber}
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#d5d5cd] group-hover:text-[#c23b22] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </div>
              <p className="font-sans text-[11px] text-[#4b4b4b] mt-1 line-clamp-2 sm:line-clamp-1 group-hover:text-[#111111] transition-colors leading-relaxed">
                {folio.description}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Consultative SOW & Workflow - Open Editorial Style */}
      <div className="pt-2 pb-1 border-t border-[#e5e5df] space-y-2 font-mono text-[11px]">
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#111111] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22]" />
            <span>Alur Menuju Proposal Pasti: <span className="stabilo-yellow font-bold text-[#111111] px-1">3 Tahap Sprint</span></span>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[10px] text-[#4b4b4b]">
          <div className="space-y-0.5 border-l border-[#d5d5cd] pl-2">
            <span className="font-bold text-[#111111] block">1. Bedah Kebutuhan</span>
            <span className="font-sans text-[10.5px]">Analisis model bisnis, target audiens, &amp; alur konversi.</span>
          </div>
          <div className="space-y-0.5 border-l border-[#d5d5cd] pl-2">
            <span className="font-bold text-[#111111] block">2. Evaluasi SOW</span>
            <span className="font-sans text-[10.5px]">Penyusunan lingkup teknis presisi tanpa fitur mubazir.</span>
          </div>
          <div className="space-y-0.5 border-l border-[#d5d5cd] pl-2">
            <span className="font-bold text-[#111111] block">3. Rencana Anggaran</span>
            <span className="font-sans text-[10.5px]">Penawaran harga final mengikat &amp; transparan (tanpa biaya tersembunyi).</span>
          </div>
        </div>
        <p className="font-sans text-[10px] text-[#666666] italic pt-0.5">
          *Nilai investasi pada setiap lembar merupakan simulasi dasar (starting anchor). Biaya final disesuaikan dengan kebutuhan riil bisnis Anda.
        </p>
      </div>

      {/* Navigation instructions line (No heavy box) */}
      <div className="pt-2 border-t border-[#e5e5df] flex items-center gap-2 font-mono text-[10.5px] text-[#666666]">
        <ArrowRight className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
        <span>
          Gunakan panah keyboard <kbd className="px-1 py-0.2 bg-[#f4f4ef] border border-[#d5d5cd] rounded-2xs text-[#111111]">←</kbd> <kbd className="px-1 py-0.2 bg-[#f4f4ef] border border-[#d5d5cd] rounded-2xs text-[#111111]">→</kbd> atau geser layar ponsel untuk membalik lembar brosur.
        </span>
      </div>
    </article>
  );
}
