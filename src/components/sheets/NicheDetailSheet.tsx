'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, AlertCircle, ChevronDown, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import nichesData from '@/data/niches.json';
import { NicheItem } from '@/types/niche';

export function NicheDetailSheetLeft({ niche }: { niche: NicheItem }) {
  const router = useRouter();

  return (
    <article className="space-y-3.5">
      {/* Back Link and Quick Dropdown Switcher Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5e5df] pb-2">
        <Link
          href="/folio/colophon"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#4b4b4b] hover:text-[#c23b22] transition-colors"
          title="Kembali ke Direktori 12+ Ceruk Industri"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Direktori 12+ Sektor</span>
        </Link>

        {/* Inline Quick Selector Dropdown */}
        <div className="relative inline-flex items-center">
          <select
            aria-label="Pilih ceruk industri lain"
            value={niche.slug}
            onChange={(e) => {
              if (e.target.value) {
                router.push(`/folio/niche-${e.target.value}`);
              }
            }}
            className="appearance-none pl-6 pr-6 py-1 bg-[#ebebe3] hover:bg-[#d5d5cd] border border-[#d5d5cd] rounded-xs font-mono text-[10px] text-[#111111] font-semibold transition-colors cursor-pointer focus:outline-none"
          >
            {nichesData.map((item, idx) => (
              <option key={item.id} value={item.slug}>
                [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}] {item.industryName}
              </option>
            ))}
          </select>
          <Layers className="w-3 h-3 text-[#c23b22] absolute left-2 pointer-events-none" />
          <ChevronDown className="w-3 h-3 text-[#4b4b4b] absolute right-1.5 pointer-events-none" />
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">{niche.recommendedPillar}</Badge>
        <Badge variant="outline">SKEMA: {niche.schemaType}</Badge>
      </div>

      <div className="space-y-1">
        <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] leading-tight">
          {niche.industryName}
        </h1>
        <p className="font-serif italic text-xs sm:text-sm text-[#4b4b4b] leading-snug">
          {niche.headline}
        </p>
      </div>

      {/* Target Market */}
      <div className="p-2.5 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd] font-mono text-[11px]">
        <span className="font-bold text-[#111111]">Sasaran Pasar: </span>
        <span className="text-[#4b4b4b]">{niche.targetMarket}</span>
      </div>

      {/* Pain Points */}
      <div className="space-y-1.5 pt-1">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#c23b22] flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Tantangan Khusus Sektor Ini:</span>
        </div>
        <ul className="space-y-1 text-xs text-[#4b4b4b]">
          {niche.painPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-1.5 bg-[#ebebe3]/50 p-2 rounded-xs">
              <span className="text-[#c23b22] font-bold shrink-0">•</span>
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
    <article className="space-y-3.5">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          FITUR REKAYASA & PROPOSAL
        </span>
        <span className="font-mono text-xs font-bold text-[#c23b22]">
          Mulai {niche.startingPrice}
        </span>
      </div>

      {/* Key Features */}
      <div className="space-y-1.5">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
          Fitur Utama yang Dibangun:
        </div>
        <ul className="space-y-1.5 text-xs text-[#4b4b4b]">
          {niche.keyFeatures.map((feat, i) => (
            <li
              key={i}
              className="flex items-start gap-2 p-2 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd]"
            >
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
