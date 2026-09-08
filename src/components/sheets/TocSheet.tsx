import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
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

      {/* Directory list of spreads */}
      <div className="space-y-3 font-mono text-xs">
        {foliosData.slice(1).map((folio, index) => (
          <div
            key={folio.id}
            className="p-2.5 rounded-xs border border-transparent hover:border-[#d5d5cd] hover:bg-[#f4f4ef] transition-colors"
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[#c23b22] font-bold">
                  ( 0{index + 1} )
                </span>
                <span className="font-serif text-sm font-bold text-[#111111]">
                  {folio.title}
                </span>
              </div>
              <span className="text-[#4b4b4b] text-[10px] hidden sm:inline">
                {folio.leftFolioNumber}–{folio.rightFolioNumber}
              </span>
            </div>
            <p className="font-sans text-[11px] text-[#4b4b4b] mt-0.5 line-clamp-1">
              {folio.description}
            </p>
          </div>
        ))}
      </div>

      {/* Instructions callout */}
      <div className="p-3.5 bg-[#ebebe3]/60 border border-[#d5d5cd] rounded-xs space-y-1.5 font-mono text-[11px] text-[#4b4b4b]">
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
