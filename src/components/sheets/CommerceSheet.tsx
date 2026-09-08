import React from 'react';
import { ShoppingBag, Check, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'ecommerce-shopify')!;

export function CommerceSheetLeft() {
  return (
    <article className="space-y-5">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">PILLAR 03 · COMMERCE</Badge>
        <Badge variant="outline">TRANSAKSI LANGSUNG</Badge>
      </div>

      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
          Custom E-Commerce Engine
        </h2>
        <div className="font-mono text-xs font-semibold text-[#c23b22]">
          Bebas Biaya Komisi Marketplace 10–15% · $0 Hosting Server
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="space-y-3 text-xs sm:text-sm text-[#4b4b4b] leading-relaxed">
        <div className="p-3 bg-[#ebebe3]/40 border-l-2 border-[#111111] rounded-r-xs">
          <span className="font-mono text-[11px] font-bold text-[#111111] block uppercase tracking-wider mb-1">
            Masalah Ketergantungan Marketplace:
          </span>
          <p>{service.problemStatement}</p>
        </div>

        <p>
          JasaWebsite.co by ONG membangun website toko online mandiri yang mengintegrasikan alur transaksi belanja otomatis: Keranjang Belanja ➜ Payment Gateway Resmi Indonesia (QRIS, VA Bank) ➜ API Cek Ongkir Kurir per Kecamatan (J&amp;T, SiCepat, JNE) ➜ Cetak Invoice PDF &amp; Notifikasi Pesanan ke WhatsApp Pembeli.
        </p>
      </div>

      {/* Feature Pills */}
      <div className="space-y-2 pt-2 border-t border-[#e5e5df]">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>Keunggulan Toko Mandiri:</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#4b4b4b]">
          <div className="p-2 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd]">
            ✓ 0% Komisi Penjualan
          </div>
          <div className="p-2 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd]">
            ✓ Database Pelanggan 100% Milik Anda
          </div>
          <div className="p-2 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd]">
            ✓ Midtrans/Xendit QRIS Otomatis
          </div>
          <div className="p-2 bg-[#f4f4ef] rounded-xs border border-[#d5d5cd]">
            ✓ Cek Ongkir Real-Time Kurir Indo
          </div>
        </div>
      </div>

      {/* Real Client Showcase Strip */}
      <div className="pt-2 border-t border-[#e5e5df] space-y-1.5">
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#111111] flex items-center justify-between">
          <span>Karya Toko Shopify Live:</span>
          <span className="text-[#c23b22]">4 Brand Aktif ↗</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          <a
            href="https://batiksmile.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Batik Smile Semarang (Shopify Hydrogen)"
          >
            <img
              src="/images/portfolio/batiksmile-desktop.webp"
              alt="Batik Smile"
              width={280}
              height={210}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
            />
            <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[7px] font-mono text-white text-center py-0.5 truncate px-0.5">
              batiksmile.com
            </span>
          </a>
          <a
            href="https://beautyinu.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Beautyinu Skincare (Shopify D2C)"
          >
            <img
              src="/images/portfolio/beautyinu-desktop.webp"
              alt="Beautyinu"
              width={280}
              height={210}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
            />
            <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[7px] font-mono text-white text-center py-0.5 truncate px-0.5">
              beautyinu.co
            </span>
          </a>
          <a
            href="https://petcue.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Petcue Travel Gear (Shopify Global D2C)"
          >
            <img
              src="/images/portfolio/petcue-desktop.webp"
              alt="Petcue"
              width={280}
              height={210}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
            />
            <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[7px] font-mono text-white text-center py-0.5 truncate px-0.5">
              petcue.co
            </span>
          </a>
          <a
            href="https://homelook.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Homelook Hardware (Shopify Flagship)"
          >
            <img
              src="/images/portfolio/homelook-desktop.webp"
              alt="Homelook"
              width={280}
              height={210}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
            />
            <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[7px] font-mono text-white text-center py-0.5 truncate px-0.5">
              homelook.shop
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function CommerceSheetRight() {
  return (
    <article className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111] flex items-center gap-1.5">
          <ShoppingBag className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>SHOPIFY D2C & TIERS TOKO ONLINE</span>
        </span>
        <Badge variant="vermillion">BRAND FLAGSHIP</Badge>
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
                    MOST POPULAR
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
          tier: 'Shopify Growth ⭐ (Rp 6,9jt)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}
