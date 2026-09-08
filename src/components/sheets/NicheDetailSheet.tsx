'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Check,
  AlertCircle,
  ChevronDown,
  Layers,
  FileText,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import nichesData from '@/data/niches.json';
import { NicheItem } from '@/types/niche';

export function NicheDetailSheetLeft({ niche }: { niche: NicheItem }) {
  const router = useRouter();

  return (
    <article className="space-y-3 sm:space-y-3.5 pb-2">
      {/* Back Link and Quick Dropdown Switcher Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5e5df] pb-2">
        <Link
          href="/folio/colophon"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#4b4b4b] hover:text-[#c23b22] transition-colors shrink-0"
          title="Kembali ke Direktori 24 Ceruk Industri"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Direktori 24 Sektor</span>
        </Link>

        {/* Inline Quick Selector Dropdown */}
        <div className="relative inline-flex items-center w-full sm:w-auto">
          <select
            aria-label="Pilih ceruk industri lain"
            value={niche.slug}
            onChange={(e) => {
              if (e.target.value) {
                router.push(`/folio/niche-${e.target.value}`);
              }
            }}
            className="w-full sm:w-auto appearance-none pl-6 pr-6 py-1 bg-[#ebebe3] hover:bg-[#d5d5cd] border border-[#d5d5cd] rounded-xs font-mono text-[10px] text-[#111111] font-semibold transition-colors cursor-pointer focus:outline-none truncate"
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

      {/* Category & Pillar Metadata Badges */}
      <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-[#e5e5df] pb-2 text-[10px] font-mono">
        <div className="flex items-center gap-1.5">
          <Badge variant="mono">{niche.category || 'Sektor Industri'}</Badge>
          <span className="text-[#d5d5cd]">/</span>
          <span className="text-[#4b4b4b] font-medium">{niche.recommendedPillar}</span>
        </div>
        <Badge variant="outline">SKEMA: {niche.schemaType}</Badge>
      </div>

      {/* Main Title & Editorial Headline */}
      <div className="space-y-1">
        <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] leading-tight">
          {niche.industryName}
        </h1>
        <p className="font-serif italic text-xs sm:text-sm text-[#4b4b4b] leading-snug">
          {niche.headline}
        </p>
      </div>

      {/* Target Market */}
      <div className="p-2.5 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd] font-mono text-[11px] flex items-start gap-1.5">
        <span className="font-bold text-[#111111] shrink-0">Sasaran Pasar: </span>
        <span className="stabilo-yellow font-semibold text-[#111111]">{niche.targetMarket}</span>
      </div>

      {/* TACTILE FIELD ENGINEER MEMO NOTE */}
      {niche.fieldNote && (
        <div className="p-2.5 sm:p-3 bg-[#fbf7ee] border-l-3 border-[#c23b22] border-t border-r border-b border-[#e8dfc8] rounded-r-xs shadow-2xs space-y-1">
          <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-wider text-[#c23b22]">
            <FileText className="w-3 h-3" />
            <span>CATATAN LAPANGAN: {niche.fieldNote.tag}</span>
          </div>
          <p className="font-serif italic text-xs text-[#222222] leading-relaxed">
            &ldquo;{niche.fieldNote.content}&rdquo;
          </p>
        </div>
      )}

      {/* Structured Pain Points */}
      <div className="space-y-2 pt-0.5">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#c23b22] flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>3 Hambatan Lapangan di Sektor Ini:</span>
        </div>
        <div className="space-y-1.5">
          {niche.painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-[#ebebe3]/60 p-2 sm:p-2.5 rounded-xs border border-[#d5d5cd]/80 space-y-0.5"
            >
              <div className="flex items-baseline gap-1.5 text-xs font-bold text-[#111111]">
                <span className="font-mono text-[10px] text-[#c23b22]">
                  [0{i + 1}]
                </span>
                <span>{point.title}</span>
              </div>
              <p className="text-[11px] text-[#4b4b4b] leading-relaxed pl-5">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function NicheDetailSheetRight({ niche }: { niche: NicheItem }) {
  return (
    <article className="space-y-3 sm:space-y-3.5 pb-2">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          BLUEPRINT OPERASIONAL & SPESIFIKASI SOW
        </span>
        <span className="font-mono text-xs font-bold">
          <span className="stabilo-yellow text-[#111111]">
            Simulasi: Mulai {niche.startingPrice}
          </span>
        </span>
      </div>

      {/* Dynamic Conversion Flow Pipeline */}
      {niche.conversionFlow && niche.conversionFlow.length > 0 && (
        <div className="space-y-1.5">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center justify-between">
            <span>Alur Konversi & Transaksi Ideal:</span>
            <span className="text-[10px] text-[#4b4b4b]">4 TAHAP PIPELINE</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {niche.conversionFlow.map((step, idx) => (
              <div
                key={idx}
                className="p-1.5 sm:p-2 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#c23b22] font-bold">
                    <span>TAHAP {step.step}</span>
                    {idx < 3 && (
                      <ArrowRight className="w-2.5 h-2.5 text-[#d5d5cd] hidden sm:inline" />
                    )}
                  </div>
                  <div className="font-bold text-[11px] text-[#111111] mt-0.5 leading-tight">
                    {step.label}
                  </div>
                </div>
                <div className="text-[10px] text-[#4b4b4b] mt-1 leading-snug">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Structured Key Features */}
      <div className="space-y-1.5">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
          Fitur Rekayasa yang Dibangun:
        </div>
        <div className="space-y-1.5">
          {niche.keyFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-2 sm:p-2.5 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd] space-y-0.5"
            >
              <div className="flex items-start gap-1.5 text-xs font-bold text-[#111111]">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat.title}</span>
              </div>
              <p className="text-[11px] text-[#4b4b4b] leading-relaxed pl-5">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Architecture Rationale Note */}
      {niche.techRationale && (
        <div className="p-2 bg-[#ebebe3] border border-[#d5d5cd] rounded-xs font-mono text-[10px] text-[#4b4b4b] space-y-0.5">
          <div className="font-bold text-[#111111] flex items-center gap-1 text-[11px]">
            <Cpu className="w-3 h-3 text-[#c23b22]" />
            <span>Rasional Arsitektur Teknis Studio:</span>
          </div>
          <p className="leading-relaxed text-[#222222]">
            {niche.techRationale}
          </p>
        </div>
      )}

      {/* Perforated Tear-off Voucher */}
      <TearOffVoucher
        title={`Konsultasi SOW Website ${niche.industryName}`}
        code={niche.voucherCode}
        perks={`Diskusi Blueprint & Estimasi SOW Transparan untuk Sektor ${niche.industryName}`}
        startingPrice={niche.startingPrice}
        intentParams={{
          niche: niche.industryName,
          ref: niche.voucherCode,
        }}
      />
    </article>
  );
}

