import React from 'react';
import { Check, ShieldCheck, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'company-profile')!;

export function ComproSheetLeft() {
  return (
    <article className="space-y-5">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">{service.pillarNumber}</Badge>
        <Badge variant="outline">{service.category}</Badge>
      </div>

      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
          {service.headline}
        </h2>
        <div className="font-mono text-xs font-semibold text-[#4b4b4b]">
          Simulasi Investasi:{' '}
          <span className="stabilo-yellow font-bold text-[#111111]">
            {service.startingPriceAnchor}
          </span>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="space-y-3 text-xs sm:text-sm text-[#4b4b4b] leading-relaxed">
        <div className="p-3 bg-[#ebebe3]/40 border-l-2 border-[#c23b22] rounded-r-xs">
          <span className="font-mono text-[11px] font-bold text-[#c23b22] block uppercase tracking-wider mb-1">
            Tantangan Bisnis:
          </span>
          <p>{service.problemStatement}</p>
        </div>

        <p>{service.solutionNarrative}</p>
      </div>

      {/* Ideal For */}
      <div className="space-y-2 pt-2 border-t border-[#e5e5df]">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Direkomendasikan Untuk:</span>
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

export function ComproSheetRight() {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          SIMULASI INVESTASI & LINGKUP KERJA
        </span>
        <Badge variant="outline">3 SIMULASI TIER</Badge>
      </div>

      <p className="font-sans text-[11px] text-[#4b4b4b] italic -mt-1">
        *Nilai di bawah adalah simulasi dasar paket standar. Biaya final ditentukan setelah evaluasi kebutuhan dan penyusunan draft Scope of Work (SOW).
      </p>

      {/* Tiers List (Editorial Open Ledger - Tanpa Box Frame Kaku) */}
      <div className="divide-y divide-[#e5e5df]">
        {service.tiers.map((tier) => (
          <div
            key={tier.id}
            className={`py-2.5 sm:py-3 transition-all ${
              tier.isRecommended
                ? 'bg-[#f5f5ee] px-2.5 sm:px-3 rounded-xs border-l-2 border-[#c23b22]'
                : 'px-1'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="font-serif text-sm sm:text-base font-bold text-[#111111] break-words">
                  {tier.name}
                </span>
                {tier.isRecommended && (
                  <Badge variant="vermillion" size="sm" className="gap-1 shrink-0">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    REKOMENDASI UTAMA
                  </Badge>
                )}
              </div>
              <span className="font-mono text-xs font-bold shrink-0">
                {tier.isRecommended ? (
                  <span className="stabilo-yellow text-[#111111] px-1 py-0.5">
                    {tier.investment}
                  </span>
                ) : (
                  <span className="text-[#c23b22]">{tier.investment}</span>
                )}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-mono text-[9.5px] sm:text-[10px] text-[#666666] mt-0.5 mb-1.5 leading-snug">
              <span className="text-[#111111] font-semibold">Sprint: {tier.timeline}</span>
              <span>·</span>
              <span className="break-words">Sasaran: {tier.targetClients}</span>
            </div>

            <ul className="space-y-0.5 text-[10.5px] sm:text-[11px] text-[#4b4b4b]">
              {tier.deliverables.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-tight">
                  <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="break-words">{item}</span>
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
          tier: 'Kredibilitas Vendor & Mitra B2B (Rp 4,9jt)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}
