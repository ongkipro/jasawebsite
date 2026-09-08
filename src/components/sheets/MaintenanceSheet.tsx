import React from 'react';
import { Wrench, Check, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'maintenance-care')!;

const addOns = [
  {
    title: 'Server-Side Meta CAPI & Google Tag Manager',
    price: 'Rp 1.500.000 – Rp 3.000.000',
    description: 'Bypass pemblokir iklan iOS 14+ untuk akurasi pelacakan ROAS iklan berbayar.',
  },
  {
    title: 'Programmatic SEO Engine (30+ Landing Pages)',
    price: 'Rp 3.500.000 – Rp 7.500.000',
    description: 'Puluhan halaman pSEO ceruk industri terstruktur dengan Schema.org lengkap.',
  },
  {
    title: 'Copywriting Full Website Komersial',
    price: 'Rp 1.500.000 – Rp 3.500.000',
    description: 'Naskah website direct-response berbasis riset mendalam psikologi konversi pembeli.',
  },
  {
    title: 'AI Chatbot & WhatsApp Automation Integration',
    price: 'Rp 2.500.000 – Rp 5.000.000',
    description: 'Asisten AI cerdas untuk menjawab FAQ dan kualifikasi prospek 24/7 otomatis.',
  },
];

export function MaintenanceSheetLeft() {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">{service.pillarNumber}</Badge>
        <Badge variant="outline">{service.category}</Badge>
      </div>

      <div className="space-y-1.5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
          {service.headline}
        </h2>
        <div className="font-mono text-xs font-semibold text-[#c23b22]">
          Investasi Terukur: {service.startingPriceAnchor}
        </div>
      </div>

      {/* Retainer Tiers */}
      <div className="space-y-2.5">
        {service.tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-3 rounded-xs border transition-all ${
              tier.isRecommended
                ? 'bg-[#f4f4ef] border-[#111111] shadow-xs'
                : 'bg-[#fbfbfa] border-[#d5d5cd]'
            }`}
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm font-bold text-[#111111]">
                  {tier.name}
                </span>
                {tier.isRecommended && (
                  <Badge variant="vermillion" size="sm">
                    POPULER
                  </Badge>
                )}
              </div>
              <span className="font-mono text-xs font-bold text-[#c23b22]">
                {tier.investment}
              </span>
            </div>

            <ul className="mt-2 space-y-1 text-[11px] text-[#4b4b4b]">
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
    </article>
  );
}

export function MaintenanceSheetRight() {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111] flex items-center gap-1.5">
          <Wrench className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>MODUL REKAYASA ADD-ON STRATEGIS</span>
        </span>
        <Badge variant="outline">OPTIONAL SOW</Badge>
      </div>

      {/* Add-ons list */}
      <div className="space-y-2.5">
        {addOns.map((addon, idx) => (
          <div
            key={idx}
            className="p-3 bg-[#fbfbfa] border border-[#d5d5cd] rounded-xs space-y-1"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-serif text-xs font-bold text-[#111111] flex items-center gap-1.5">
                <PlusCircle className="w-3 h-3 text-[#c23b22]" />
                <span>{addon.title}</span>
              </span>
              <span className="font-mono text-[11px] font-bold text-[#c23b22] shrink-0">
                {addon.price}
              </span>
            </div>
            <p className="font-sans text-[11px] text-[#4b4b4b]">
              {addon.description}
            </p>
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
          tier: 'Business Care ⭐ (Rp 750rb/bln)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}
