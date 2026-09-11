import React from 'react';
import {
  ShoppingBag,
  Check,
  Zap,
  ArrowUpRight,
  Star,
  ShieldCheck,
  Smartphone,
  Gauge,
  Radio,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import servicesData from '@/data/services.json';

const service = servicesData.find((s) => s.id === 'shopify')!;

export function ShopifySheetLeft() {
  return (
    <article className="space-y-3.5 sm:space-y-4">
      {/* Top running metadata badges */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <div className="flex items-center gap-1.5">
          <Badge variant="vermillion" className="gap-1 font-bold">
            <Star className="w-2.5 h-2.5 fill-current text-yellow-400" />
            FEATURED SERVICE
          </Badge>
          <Badge variant="mono">PILLAR 04 · SHOPIFY</Badge>
        </div>
        <Badge variant="outline">BESPOKE STOREFRONT</Badge>
      </div>

      {/* Main Title & Value Proposition */}
      <div className="space-y-1 sm:space-y-1.5">
        <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] leading-tight">
          Bespoke Shopify Storefront dari Nol
        </h1>
        <div className="font-mono text-xs font-semibold text-[#4b4b4b] flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span>Bukan Tema Pasaran:</span>
          <span className="stabilo-yellow font-bold text-[#111111] px-1 py-0.2">
            Performa Sub-Detik
          </span>
          <span>·</span>
          <span className="font-bold text-[#111111]">100% Sesuai Identitas Brand</span>
        </div>
      </div>

      {/* Distinction & Narrative Box */}
      <div className="p-2.5 sm:p-3 bg-[#fbfbfa] border-l-2 border-[#111111] border-y border-r border-[#d5d5cd] rounded-r-xs space-y-1.5">
        <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-[#111111] flex items-center gap-1.5 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22]" />
          <span>Mengapa Brand D2C Membutuhkan Toko Flagship Custom:</span>
        </span>
        <p className="text-[11px] sm:text-xs text-[#4b4b4b] leading-relaxed font-sans">
          Banyak toko online Shopify gagal mengonversi traffic iklan karena memakai tema template generik yang lambat, berat oleh tumpukan aplikasi pihak ketiga, dan kaku di layar ponsel. Ditambah lagi kendala teknis krusial di Indonesia: pembayaran QRIS lokal yang sulit diintegrasikan, ongkir kurir manual, serta kebocoran data piksel iklan akibat regulasi privasi iOS.
        </p>
        <p className="text-[11px] sm:text-xs text-[#111111] font-medium leading-relaxed font-sans pt-0.5 border-t border-[#e5e5df]">
          Kami merekayasa <strong>storefront Shopify custom dari nol</strong>: tampilan visual mewah setara brand internasional, navigasi jempol yang instan tanpa jeda, integrasi resmi <strong>Midtrans/Xendit (QRIS &amp; Virtual Account)</strong>, hitung ongkir otomatis se-Indonesia, dan <strong>Server-Side Ads Signal Engine</strong> yang siap mendatangkan penjualan.
        </p>
      </div>

      {/* 4 Core Pillars of Shopify Engineering */}
      <div className="space-y-1.5 pt-1.5 border-t border-[#e5e5df]">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>4 Keunggulan Rekayasa Shopify Kami:</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10.5px] sm:text-[11px] font-mono text-[#333333]">
          <div className="flex items-start gap-1.5 py-1 border-b border-[#e5e5df]">
            <Smartphone className="w-3 h-3 text-[#2d6a4f] mt-0.5 shrink-0" />
            <span>
              <strong className="text-[#111111]">Mobile-First UX:</strong> Alur beli jempol &amp; sticky add-to-cart
            </span>
          </div>
          <div className="flex items-start gap-1.5 py-1 border-b border-[#e5e5df]">
            <ShieldCheck className="w-3 h-3 text-[#2d6a4f] mt-0.5 shrink-0" />
            <span>
              <strong className="text-[#111111]">Ekosistem Lokal:</strong> QRIS, VA Bank &amp; Kurir JNE/J&amp;T/SiCepat
            </span>
          </div>
          <div className="flex items-start gap-1.5 py-1 border-b border-[#e5e5df]">
            <Gauge className="w-3 h-3 text-[#2d6a4f] mt-0.5 shrink-0" />
            <span>
              <strong className="text-[#111111]">SEO &amp; Kecepatan:</strong> PageSpeed 90+ &amp; Schema.org Produk
            </span>
          </div>
          <div className="flex items-start gap-1.5 py-1 border-b border-[#e5e5df]">
            <Radio className="w-3 h-3 text-[#c23b22] mt-0.5 shrink-0" />
            <span>
              <strong className="text-[#111111]">Signal Ads Ready:</strong> Meta CAPI, Google Ads &amp; GA4
            </span>
          </div>
        </div>
      </div>

      {/* Real Live Client Works Strip */}
      <div className="pt-1.5 border-t border-[#e5e5df] space-y-1.5">
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#111111] flex items-center justify-between">
          <span>Karya Toko Shopify Klien Kami Live:</span>
          <span className="text-[#c23b22] inline-flex items-center gap-0.5">
            <span>5 Brand D2C Terverifikasi</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          <a
            href="https://elfy.my"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group block relative aspect-[4/3] rounded-xs border border-[#d5d5cd] overflow-hidden bg-[#111111]"
            title="ELFY Malaysia (Shopify Bespoke D2C Menswear)"
          >
            <img
              src="/images/portfolio/elfy-desktop.webp"
              alt="Toko Online Shopify Flagship ELFY Malaysia D2C Menswear"
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
            title="Batik Smile Semarang (Shopify Brand Store)"
          >
            <img
              src="/images/portfolio/batiksmile-desktop.webp"
              alt="Toko Online Shopify Batik Smile Semarang Katalog Sarimbit"
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
            title="Beautyinu Skincare (Shopify D2C Brand)"
          >
            <img
              src="/images/portfolio/beautyinu-desktop.webp"
              alt="Toko Online Shopify Beautyinu Skincare Pembayaran QRIS Otomatis"
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
            title="Petcue Travel Gear (Shopify Global D2C)"
          >
            <img
              src="/images/portfolio/petcue-desktop.webp"
              alt="Toko Online Shopify Brand Petcue Travel Gear Standar Global"
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
            title="Homelook Hardware (Shopify Luxury Hardware)"
          >
            <img
              src="/images/portfolio/homelook-desktop.webp"
              alt="Toko Online Shopify Homelook Luxury Interior Hardware"
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

export function ShopifySheetRight() {
  return (
    <article className="space-y-2.5 sm:space-y-3">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-1.5">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111] flex items-center gap-1.5">
          <ShoppingBag className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>PAKET INVESTASI SHOPIFY: BESPOKE &amp; ADS READY</span>
        </span>
        <Badge variant="vermillion">TERIMA BERES</Badge>
      </div>

      <p className="font-sans text-[10.5px] text-[#4b4b4b] italic -mt-1">
        *Development custom dari nol, setup akun, integrasi payment &amp; kurir lokal, hingga aktivasi sinyal iklan Meta/Google Ads siap jualan.
      </p>

      {/* Tiers List (Editorial Open Ledger - 3 Clear Tiers) */}
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

      {/* Perforated Tear-off Voucher for Shopify */}
      <TearOffVoucher
        title={service.voucherTitle}
        code={service.voucherCode}
        perks={service.voucherPerks}
        startingPrice={service.startingPriceAnchor}
        className="my-1 sm:my-1.5 p-2.5 sm:p-3"
        intentParams={{
          serviceName: 'Jasa Pembuatan Website Shopify Profesional',
          tier: 'Shopify Scale-Up & Full Growth Engine (Rp 12,9jt)',
          ref: service.voucherCode,
        }}
      />
    </article>
  );
}
