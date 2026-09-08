import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
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

      {/* Directory list of spreads (1-7 Clickable Links) */}
      <div className="space-y-1.5 sm:space-y-2 font-mono text-xs">
        {foliosData.slice(1).map((folio, index) => {
          const isPortfolio = folio.slug === 'portfolio';
          return (
            <Link
              key={folio.id}
              href={`/folio/${folio.slug}`}
              className={cn(
                'group block p-2 sm:p-2.5 rounded-xs border transition-all cursor-pointer',
                isPortfolio
                  ? 'bg-[#fbfbfa] border-[#c23b22]/40 shadow-xs hover:border-[#c23b22]'
                  : 'border-transparent hover:border-[#d5d5cd] hover:bg-[#f4f4ef]'
              )}
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#c23b22] font-bold group-hover:translate-x-0.5 transition-transform">
                    ( 0{index + 1} )
                  </span>
                  <span className="font-serif text-sm font-bold text-[#111111] group-hover:text-[#c23b22] transition-colors">
                    {folio.title}
                  </span>
                  {isPortfolio && (
                    <span className="px-1.5 py-0.5 bg-[#c23b22] text-[#fbfbfa] text-[9px] font-mono font-bold rounded-xs shrink-0">
                      BUKTI KARYA
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[#4b4b4b] text-[10px]">
                  <span className="hidden sm:inline">
                    {folio.leftFolioNumber}–{folio.rightFolioNumber}
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#d5d5cd] group-hover:text-[#c23b22] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
              <p className="font-sans text-[11px] text-[#4b4b4b] mt-0.5 line-clamp-1 group-hover:text-[#111111] transition-colors">
                {folio.description}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Consultative SOW & Pricing Transparency Banner */}
      <div className="p-3 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-2 font-mono text-[11px]">
        <div className="flex items-center justify-between border-b border-[#d5d5cd] pb-1.5">
          <span className="font-bold text-[#111111] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22]" />
            <span>ALUR KERJA SAMA MENUJU PROPOSAL PASTI</span>
          </span>
          <span className="text-[10px] text-[#c23b22] font-semibold">3 TAHAP SPRINT</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[10px] text-[#4b4b4b]">
          <div className="p-1.5 bg-[#fbfbfa] rounded-xs border border-[#e5e5df]">
            <span className="font-bold text-[#111111] block mb-0.5">1. Bedah Kebutuhan</span>
            <span className="font-sans text-[10px]">Analisis model bisnis, target audiens, & alur konversi.</span>
          </div>
          <div className="p-1.5 bg-[#fbfbfa] rounded-xs border border-[#e5e5df]">
            <span className="font-bold text-[#111111] block mb-0.5">2. Evaluasi & SOW</span>
            <span className="font-sans text-[10px]">Penyusunan lingkup teknis presisi tanpa fitur mubazir.</span>
          </div>
          <div className="p-1.5 bg-[#fbfbfa] rounded-xs border border-[#e5e5df]">
            <span className="font-bold text-[#111111] block mb-0.5">3. Rencana Anggaran</span>
            <span className="font-sans text-[10px]">Penawaran harga final mengikat & transparan (no hidden fees).</span>
          </div>
        </div>
        <p className="font-sans text-[10px] text-[#4b4b4b] italic">
          *Nilai investasi pada setiap lembar merupakan simulasi dasar (starting anchor). Biaya final disesuaikan dengan kebutuhan riil bisnis Anda.
        </p>
      </div>

      {/* Instructions callout */}
      <div className="p-3 bg-[#ebebe3]/60 border border-[#d5d5cd] rounded-xs space-y-1 font-mono text-[10px] text-[#4b4b4b]">
        <div className="font-bold text-[#111111] flex items-center gap-1.5 uppercase tracking-wider">
          <ArrowRight className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>Petunjuk Eksplorasi Brosur Digital:</span>
        </div>
        <p className="font-sans text-xs leading-relaxed">
          Gunakan tombol panah keyboard <code className="bg-[#fbfbfa] px-1 py-0.5 rounded-xs border border-[#d5d5cd]">←</code> <code className="bg-[#fbfbfa] px-1 py-0.5 rounded-xs border border-[#d5d5cd]">→</code>, klik tab pita di sisi kanan buku, atau geser layar ponsel Anda untuk membalik lembar brosur.
        </p>
      </div>
    </article>
  );
}
