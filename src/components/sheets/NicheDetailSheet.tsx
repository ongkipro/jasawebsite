import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import { NicheItem } from '@/types/niche';

export function NicheDetailSheetLeft({ niche }: { niche: NicheItem }) {
  return (
    <article className="space-y-4">
      {/* Back Link to Catalog */}
      <Link
        href="/folio/colophon"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#4b4b4b] hover:text-[#c23b22] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Kembali ke Direktori 30+ Niche</span>
      </Link>

      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">{niche.recommendedPillar}</Badge>
        <Badge variant="outline">SKEMA: {niche.schemaType}</Badge>
      </div>

      <div className="space-y-1.5">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
          {niche.industryName}
        </h1>
        <p className="font-serif italic text-sm sm:text-base text-[#4b4b4b]">
          {niche.headline}
        </p>
      </div>

      {/* Target Market */}
      <div className="p-2.5 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd] font-mono text-[11px]">
        <span className="font-bold text-[#111111]">Sasaran Pasar: </span>
        <span className="text-[#4b4b4b]">{niche.targetMarket}</span>
      </div>

      {/* Pain Points */}
      <div className="space-y-2 pt-2">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#c23b22] flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Tantangan Khusus Sektor Ini:</span>
        </div>
        <ul className="space-y-1.5 text-xs text-[#4b4b4b]">
          {niche.painPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-1.5 bg-[#ebebe3]/40 p-2 rounded-xs">
              <span className="text-[#c23b22] font-bold">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function NicheDetailSheetRight({ niche }: { niche: NicheItem }) {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          FITUR REKAYASA & PROPOSAL
        </span>
        <span className="font-mono text-xs font-bold text-[#c23b22]">
          Mulai {niche.startingPrice}
        </span>
      </div>

      {/* Key Features */}
      <div className="space-y-2">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
          Fitur Utama yang Dibangun:
        </div>
        <ul className="space-y-2 text-xs text-[#4b4b4b]">
          {niche.keyFeatures.map((feat, i) => (
            <li
              key={i}
              className="flex items-start gap-2 p-2.5 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd]"
            >
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Perforated Tear-off Voucher */}
      <TearOffVoucher
        title={`Konsultasi Website ${niche.industryName}`}
        code={niche.voucherCode}
        perks={`Diskusi Blueprint & Estimasi SOW untuk Bisnis ${niche.industryName}`}
        startingPrice={niche.startingPrice}
        intentParams={{
          niche: niche.industryName,
          ref: niche.voucherCode,
        }}
      />
    </article>
  );
}
