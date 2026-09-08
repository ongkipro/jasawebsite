import React from 'react';
import { Check, Target, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'sales-website')!;

export function SalesSheetLeft() {
  return (
    <article className="space-y-5">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">{service.pillarNumber}</Badge>
        <Badge variant="vermillion">{service.category}</Badge>
      </div>

      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
          {service.headline}
        </h2>
        <div className="font-mono text-xs font-semibold text-[#c23b22]">
          Investasi Terjangkau: {service.startingPriceAnchor}
        </div>
      </div>

      {/* Distinction from Compro */}
      <div className="p-3 bg-[#ebebe3]/40 border-l-2 border-[#111111] rounded-r-xs space-y-1.5">
        <span className="font-mono text-[11px] font-bold text-[#111111] block uppercase tracking-wider">
          Pemisahan Fundamental dari Company Profile:
        </span>
        <p className="text-xs sm:text-sm text-[#4b4b4b] leading-relaxed">
          {service.problemStatement}
        </p>
      </div>

      {/* The Funnel Diagram */}
      <div className="p-3 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-2 font-mono text-[11px]">
        <div className="flex items-center gap-1.5 font-bold text-[#111111] uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>Alur Corong Konversi (Traffic-to-Lead):</span>
        </div>
        <div className="flex flex-wrap items-center gap-1 text-[#4b4b4b] text-[10px]">
          <span className="bg-[#fbfbfa] px-1.5 py-0.5 border border-[#d5d5cd] rounded-xs">
            1. Iklan Ads
          </span>
          <span>→</span>
          <span className="bg-[#fbfbfa] px-1.5 py-0.5 border border-[#d5d5cd] rounded-xs">
            2. Landing Page
          </span>
          <span>→</span>
          <span className="bg-[#fbfbfa] px-1.5 py-0.5 border border-[#d5d5cd] rounded-xs">
            3. Spek / Unit
          </span>
          <span>→</span>
          <span className="bg-[#fbfbfa] px-1.5 py-0.5 border border-[#d5d5cd] rounded-xs text-[#c23b22] font-bold">
            4. WA Lead
          </span>
          <span>→</span>
          <span className="bg-[#111111] text-[#fbfbfa] px-1.5 py-0.5 rounded-xs font-bold">
            5. Closing SPK
          </span>
        </div>
      </div>

      {/* Ideal For */}
      <div className="space-y-2 pt-2 border-t border-[#e5e5df]">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
          <Target className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>Sangat Cocok Untuk:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {service.idealFor.map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 bg-[#f4f4ef] text-[#111111] rounded-xs border border-[#d5d5cd]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function SalesSheetRight() {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          PILIHAN INVESTASI SOW & DELIVERABLES
        </span>
        <Badge variant="outline">3 PILIHAN TIER</Badge>
      </div>

      {/* Tiers List */}
      <div className="space-y-3">
        {service.tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-3 sm:p-3.5 rounded-xs border transition-all ${
              tier.isRecommended
                ? 'bg-[#f4f4ef] border-[#111111] shadow-xs'
                : 'bg-[#fbfbfa] border-[#d5d5cd]'
            }`}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm sm:text-base font-bold text-[#111111]">
                  {tier.name}
                </span>
                {tier.isRecommended && (
                  <Badge variant="vermillion" size="sm">
                    BEST VALUE
                  </Badge>
                )}
              </div>
              <span className="font-mono text-xs font-bold text-[#c23b22]">
                {tier.investment}
              </span>
            </div>

            <div className="font-mono text-[10px] text-[#4b4b4b] mt-0.5 mb-2">
              Sprint: {tier.timeline} · Sasaran: {tier.targetClients}
            </div>

            <ul className="space-y-1 text-[11px] text-[#4b4b4b]">
              {tier.deliverables.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Perforated Tear-off Voucher */}
      <TearOffVoucher
        title={service.voucherTitle}
        code={service.voucherCode}
        perks={service.voucherPerks}
        startingPrice={service.startingPriceAnchor}
        intentParams={{
          serviceName: service.title,
          tier: 'Growth ⭐ (Rp 8,9jt)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}
