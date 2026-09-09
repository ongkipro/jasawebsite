import React from 'react';
import { ShoppingBag, Check, Zap, ArrowUpRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'ecommerce-shopify')!;

export function CommerceSheetLeft() {
  return (
    <article className="space-y-4 sm:space-y-4.5">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <Badge variant="mono">PILLAR 03 · COMMERCE</Badge>
        <Badge variant="outline">DUAL TRACK SOLUTION</Badge>
      </div>

      <div className="space-y-1.5">
        <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] leading-tight">
          Toko Online Brand Anda Sendiri
        </h2>
        <div className="font-mono text-xs font-semibold text-[#4b4b4b]">
          Bebas Biaya Admin 10% Marketplace:{' '}
          <span className="stabilo-green font-bold text-[#111111]">
            Toko Mandiri (0% Komisi)
          </span>{' '}
          atau <span className="font-bold text-[#111111]">Setup Resmi Shopify</span>
        </div>
      </div>

      {/* Two Clear Options: Shopify vs Toko Mandiri */}
      <div className="space-y-2.5">
        {/* Track 1: Toko Online Shopify */}
        <div className="p-2.5 sm:p-3 bg-[#fbfbfa] border border-[#d5d5cd] rounded-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-[#111111] flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <span>Opsi 1: Setup &amp; Custom Toko Shopify</span>
            </span>
            <span className="font-mono text-[9.5px] sm:text-[10px] text-[#c23b22] font-semibold">
              Ekosistem Global
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#4b4b4b] leading-relaxed font-sans">
            Bagi Anda yang ingin ekosistem e-commerce kelas dunia tanpa pusing urusan server. Kami bantu <strong>setup akun resmi Shopify dari nol</strong>, rancang <strong>custom tema &amp; desain tampilan toko yang mewah serta super nyaman di HP</strong>, plus integrasi lokal lengkap: <strong>pembayaran instan QRIS / Virtual Account</strong>, <strong>cek ongkir kurir otomatis se-Indonesia (J&amp;T, SiCepat, JNE)</strong>, dan tracking pixel iklan Meta/TikTok.
          </p>
          <div className="font-mono text-[9.5px] text-[#666666] pt-0.5 border-t border-[#e5e5df]/60">
            *Biaya langganan platform resmi Shopify (mulai ~$19–$39/bln) dibayarkan langsung ke pihak Shopify.
          </div>
        </div>

        {/* Track 2: Toko Online Mandiri (CMS Studio Pribadi) */}
        <div className="p-2.5 sm:p-3 bg-[#f4f4ef] border border-[#111111] rounded-xs space-y-1 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-[#111111] flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22]" />
              <span>Opsi 2: Toko Mandiri Bebas Komisi</span>
            </span>
            <span className="font-mono text-[9px] sm:text-[9.5px] bg-[#111111] text-[#fbfbfa] px-1.5 py-0.5 rounded-2xs font-bold shrink-0">
              100% HAK MILIK
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#4b4b4b] leading-relaxed font-sans">
            Bagi Anda yang lelah dipotong komisi 8–12% di marketplace. <strong>100% kepemilikan penuh atas website dan database pelanggan</strong> tanpa biaya sewa lisensi pihak ketiga. <strong>0% potongan komisi penjualan</strong>, uang langsung masuk rekening Anda, hitung ongkir otomatis se-kecamatan, dan orderan <strong>otomatis langsung masuk ke WhatsApp admin toko Anda</strong>.
          </p>
          <div className="font-mono text-[9.5px] text-[#666666] pt-0.5 border-t border-[#d5d5cd]">
            *Biaya sewa server/cloud hosting sangat terjangkau, transparan, dan fleksibel disesuaikan dengan volume traffic toko Anda.
          </div>
        </div>
      </div>

      {/* Feature Pills */}
      <div className="space-y-1.5 pt-2 border-t border-[#e5e5df]">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>Keunggulan Layanan Toko Online Kami:</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-mono text-[#333333]">
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <Check className="w-3 h-3 text-[#2d6a4f] shrink-0" />
            <span>Shopify &amp; Toko Mandiri</span>
          </div>
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <Check className="w-3 h-3 text-[#2d6a4f] shrink-0" />
            <span>Bebas Potongan Komisi 10%</span>
          </div>
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <Check className="w-3 h-3 text-[#2d6a4f] shrink-0" />
            <span>Bayar QRIS &amp; Transfer Bank</span>
          </div>
          <div className="flex items-center gap-1.5 py-1 border-b border-[#e5e5df]">
            <Check className="w-3 h-3 text-[#2d6a4f] shrink-0" />
            <span>Hitung Ongkir Kurir Otomatis</span>
          </div>
        </div>
      </div>

      {/* Real Client Showcase Strip */}
      <div className="pt-2 border-t border-[#e5e5df] space-y-1.5">
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#111111] flex items-center justify-between">
          <span>Karya Toko Online Klien Kami Live:</span>
          <span className="text-[#c23b22] inline-flex items-center gap-0.5">
            <span>5 Brand Aktif</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          <a
            href="https://elfy.my"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="ELFY Malaysia (Shopify Headless D2C)"
          >
            <img
              src="/images/portfolio/elfy-desktop.webp"
              alt="ELFY Malaysia"
              width={280}
              height={210}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
            />
            <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[7px] font-mono text-white text-center py-0.5 truncate px-0.5">
              elfy.my
            </span>
          </a>
          <a
            href="https://batiksmile.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Batik Smile Semarang (Toko Online Flagship)"
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
            rel="noopener noreferrer nofollow"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Beautyinu Skincare (Toko Online Brand)"
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
            rel="noopener noreferrer nofollow"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Petcue Travel Gear (Toko Online Brand)"
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
            rel="noopener noreferrer nofollow"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="Homelook Hardware (Toko Online Brand)"
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
    <article className="space-y-2.5 sm:space-y-3">
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-1.5">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111] flex items-center gap-1.5">
          <ShoppingBag className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>PILIHAN PAKET: TOKO MANDIRI &amp; SHOPIFY</span>
        </span>
        <Badge variant="vermillion">SIAP JUALAN</Badge>
      </div>

      <p className="font-sans text-[10.5px] text-[#4b4b4b] italic -mt-1">
        *Biaya pembuatan &amp; setup sistem studio. Kebutuhan server/hosting atau langganan platform disesuaikan dengan traffic &amp; skala bisnis Anda.
      </p>

      {/* Tiers List (Editorial Open Ledger - Tanpa Box Frame Kaku) */}
      <div className="divide-y divide-[#e5e5df]">
        {service.tiers.map((tier) => (
          <div
            key={tier.id}
            className={`py-2 sm:py-2.5 transition-all ${
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
                    MOST POPULAR
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

            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-mono text-[9px] sm:text-[9.5px] text-[#666666] mt-0.5 mb-1 leading-snug">
              <span className="text-[#111111] font-semibold">Sprint: {tier.timeline}</span>
              <span>·</span>
              <span className="break-words">Sasaran: {tier.targetClients}</span>
            </div>

            <ul className="space-y-0.5 text-[10px] sm:text-[10.5px] text-[#4b4b4b]">
              {tier.deliverables.slice(0, 2).map((item, i) => (
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
        className="my-1 sm:my-1.5 p-2.5 sm:p-3"
        intentParams={{
          serviceName: 'Toko Online Mandiri & Shopify',
          tier: 'Shopify Custom Storefront & Desain Mewah (Rp 6,9jt)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}
