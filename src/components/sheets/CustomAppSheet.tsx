import React from 'react';
import { Cpu, Check, Layers, Star, Database, Package, Users, LineChart } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'custom-web-app')!;

export function CustomAppSheetLeft() {
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
            Keterbatasan Software Standar:
          </span>
          <p>{service.problemStatement}</p>
        </div>

        <p>{service.solutionNarrative}</p>
      </div>

      {/* Ready Modules */}
      <div className="space-y-2 pt-2 border-t border-[#e5e5df]">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#111111]" />
          <span>Modul Sistem Siap Rekayasa:</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-mono text-[#333333]">
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <Database className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
            <span>CRM &amp; Sales Pipeline</span>
          </div>
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <Package className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
            <span>Mini ERP &amp; Stok Gudang</span>
          </div>
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <Users className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
            <span>Portal Klien / Dealer Khusus</span>
          </div>
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <LineChart className="w-3.5 h-3.5 text-[#c23b22] shrink-0" />
            <span>Dashboard Grafik Real-Time</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function CustomAppSheetRight() {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111] flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>SIMULASI INVESTASI CUSTOM WEB APP</span>
        </span>
        <Badge variant="outline">FULL-STACK</Badge>
      </div>

      <p className="font-sans text-[11px] text-[#4b4b4b] italic -mt-1">
        *Setiap sistem aplikasi unik mengikuti SOP bisnis Anda. Nilai di bawah adalah estimasi dasar; penawaran pasti disusun setelah sesi bedah alur kerja dan draft blueprint SOW.
      </p>

      {/* Tiers List (Editorial Open Ledger - Tanpa Box Frame Kaku) */}
      <div className="divide-y divide-[#e5e5df]">
        {service.tiers.map((tier) => (
          <div
            key={tier.id}
            className={`py-2.5 sm:py-3 transition-all ${
              tier.isRecommended
                ? 'bg-[#f5f5ee] -mx-2 sm:-mx-3 px-2 sm:px-3 rounded-xs border-l-2 border-[#c23b22]'
                : 'px-0'
            }`}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm sm:text-base font-bold text-[#111111]">
                  {tier.name}
                </span>
                {tier.isRecommended && (
                  <Badge variant="vermillion" size="sm" className="gap-1">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    REKOMENDASI SISTEM
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

            <div className="font-mono text-[10px] text-[#666666] mt-0.5 mb-1.5">
              Sprint: {tier.timeline} · Sasaran: {tier.targetClients}
            </div>

            <ul className="space-y-0.5 text-[11px] text-[#4b4b4b]">
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
          tier: 'Sistem Operasional Bisnis Terpadu (Rp 25jt)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}
