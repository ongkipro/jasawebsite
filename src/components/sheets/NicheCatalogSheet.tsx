import React from 'react';
import Link from 'next/link';
import { Layers } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import nichesData from '@/data/niches.json';

export function NicheCatalogSheet() {
  return (
    <article className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          <Layers className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>DIREKTORI CERUK INDUSTRI (pSEO)</span>
        </div>
        <Badge variant="mono">{nichesData.length}+ SEKTOR</Badge>
      </div>

      <p className="font-sans text-xs text-[#4b4b4b] leading-relaxed">
        Setiap industri memiliki alur transaksi dan tantangan unik. Jelajahi lembar spesifikasi teknis khusus yang telah kami optimasi untuk sektor bisnis Anda:
      </p>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
        {nichesData.map((niche, idx) => (
          <Link
            key={niche.id}
            href={`/folio/niche-${niche.slug}`}
            className="p-2.5 bg-[#f4f4ef] hover:bg-[#ebebe3] border border-[#d5d5cd] rounded-xs transition-colors group block"
          >
            <div className="flex items-baseline justify-between text-[11px] font-mono">
              <span className="text-[#c23b22] font-bold">
                [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
              </span>
              <span className="text-[10px] text-[#4b4b4b]">
                {niche.startingPrice}
              </span>
            </div>
            <div className="font-serif text-xs font-bold text-[#111111] group-hover:text-[#c23b22] transition-colors mt-0.5">
              {niche.industryName}
            </div>
            <div className="font-mono text-[9px] text-[#4b4b4b] mt-0.5 truncate">
              {niche.recommendedPillar}
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
