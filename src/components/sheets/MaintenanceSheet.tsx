import React from 'react';
import { Wrench, Check, PlusCircle, Megaphone, Target, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'maintenance-care')!;

const addOns = [
  {
    title: 'Landing Page Promo Iklan Cepat (Single Campaign)',
    price: 'Mulai Rp 350rb / hal',
    tag: 'ADS LP',
    description: 'Halaman promo taktis khusus kampanye iklan harian/mingguan untuk uji produk, flash sale, atau tes penawaran cepat tanpa ribet.',
  },
  {
    title: 'Landing Page Interaktif Modern (Motion Animation)',
    price: 'Mulai Rp 3,5jt',
    tag: 'PREMIUM LP',
    description: 'Landing page direct-response beranimasi interaktif halus (Motion GPU-accelerated), storytelling visual memikat & struktur konversi tinggi.',
  },
  {
    title: 'Dynamic Geo-Targeting Logic (Deteksi Lokasi Kota)',
    price: 'Rp 1,5jt – Rp 3jt',
    tag: 'SMART GEO',
    description: 'Logika otomatis menyapa pengunjung sesuai kota asal (misal: "Halo Warga Surabaya, Promo Khusus Hari Ini...") untuk mendongkrak konversi iklan lokal.',
  },
  {
    title: 'Perisai Anti-COD Fiktif & Bot Shield',
    price: 'Rp 1,5jt – Rp 3jt',
    tag: 'ANTI-RTS',
    description: 'Proteksi formulir toko online dari order iseng, bot, & kompetitor nakal untuk memangkas tingkat retur (RTS) paket COD hingga 80%.',
  },
  {
    title: 'Setup Kampanye Meta Ads (Facebook & Instagram)',
    price: 'Rp 2,5jt – Rp 5jt',
    tag: 'META ADS',
    description: 'Setup Business Manager resmi, pixel & Server-Side CAPI, riset audiens tertarget, copywriting direct-response, dan funnel retargeting.',
  },
  {
    title: 'Setup Kampanye Google Ads (Search & PMax)',
    price: 'Rp 2,5jt – Rp 5jt',
    tag: 'GOOGLE ADS',
    description: 'Setup Google Ads, riset kata kunci niat beli tinggi (high commercial intent), GTM Enhanced Conversions, teks iklan, & negatif keyword.',
  },
  {
    title: 'Dominasi Google Lokal (50+ Halaman Kota Otomatis)',
    price: 'Rp 4,5jt – Rp 8,5jt',
    tag: 'LOCAL SEO',
    description: 'Jaring calon pembeli lokal yang lagi butuh mendesak di Google lewat puluhan landing page kota/kecamatan otomatis tanpa biaya iklan berulang.',
  },
  {
    title: 'Server-Side Meta CAPI & Google Tag Manager (GTM)',
    price: 'Rp 2,5jt – Rp 4jt',
    tag: 'TRACKING',
    description: 'Bypass pemblokir pelacak iOS 14+ via Cloudflare Server Gateway untuk akurasi data pembelian dan optimasi algoritma ROAS iklan berbayar.',
  },
];

export function MaintenanceSheetLeft() {
  return (
    <article className="space-y-3.5 pb-2">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">{service.pillarNumber}</Badge>
        <Badge variant="outline">{service.category}</Badge>
      </div>

      <div className="space-y-1">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
          {service.headline}
        </h2>
        <div className="font-mono text-xs font-bold text-[#c23b22]">
          Simulasi Investasi: {service.startingPriceAnchor}
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
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="font-serif text-sm font-bold text-[#111111]">
                  {tier.name}
                </span>
                {tier.isRecommended && (
                  <Badge variant="vermillion" size="sm">
                    POPULER
                  </Badge>
                )}
              </div>
              <span className="font-mono text-xs font-bold text-[#c23b22] shrink-0">
                {tier.investment}
              </span>
            </div>

            <ul className="mt-2 space-y-1 text-[11px] text-[#4b4b4b]">
              {tier.deliverables.slice(0, 4).map((item, i) => (
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
    <article className="space-y-3.5 pb-2">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111] flex items-center gap-1.5">
          <Megaphone className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>SETUP IKLAN & MODUL ADD-ON STRATEGIS</span>
        </span>
        <Badge variant="outline">EXPANSION & GROWTH</Badge>
      </div>

      {/* Add-ons list with scrollbar for containment */}
      <div className="space-y-2 max-h-[360px] sm:max-h-[380px] lg:max-h-[400px] overflow-y-auto paper-scrollbar pr-1">
        {addOns.map((addon, idx) => (
          <div
            key={idx}
            className="p-2.5 bg-[#fbfbfa] hover:bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-1 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
              <span className="font-serif text-xs font-bold text-[#111111] flex items-center gap-1.5 flex-wrap">
                <PlusCircle className="w-3 h-3 text-[#c23b22] shrink-0" />
                <span>{addon.title}</span>
                {addon.tag && (
                  <span className="font-mono text-[9px] font-semibold px-1.5 py-0.2 bg-[#ebebe3] text-[#4b4b4b] border border-[#d5d5cd] rounded-2xs">
                    {addon.tag}
                  </span>
                )}
              </span>
              <span className="font-mono text-[11px] font-bold text-[#c23b22] shrink-0 pl-4.5 sm:pl-0">
                {addon.price}
              </span>
            </div>
            <p className="font-sans text-[11px] text-[#4b4b4b] leading-relaxed pl-4.5">
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
          tier: 'Scale & Ads Management Retainer ⭐ (Rp 4,5jt – Rp 7,5jt/bln)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}

