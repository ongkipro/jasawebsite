'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layers, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';
import nichesData from '@/data/niches.json';

const CATEGORIES = [
  'Semua Sektor',
  'Otomotif & Transportasi',
  'Industri & Manufaktur',
  'Properti & Konstruksi',
  'Kesehatan & Farmasi',
  'Jasa Profesional',
  'Retail, Fashion & D2C',
  'Kuliner & F&B',
  'Logistik & Ekspor',
  'Pendidikan & Finansial',
];

export function NicheCatalogSheet() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Sektor');

  const filteredNiches = useMemo(() => {
    return nichesData.filter((niche) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        niche.industryName.toLowerCase().includes(q) ||
        niche.targetMarket.toLowerCase().includes(q) ||
        niche.recommendedPillar.toLowerCase().includes(q) ||
        (niche.category && niche.category.toLowerCase().includes(q)) ||
        niche.slug.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === 'Semua Sektor'
          ? true
          : selectedCategory === 'Otomotif & Transportasi'
          ? niche.category.includes('Otomotif')
          : selectedCategory === 'Industri & Manufaktur'
          ? niche.category.includes('Industri') || niche.category.includes('Manufaktur')
          : selectedCategory === 'Properti & Konstruksi'
          ? niche.category.includes('Properti') || niche.category.includes('Konstruksi')
          : selectedCategory === 'Kesehatan & Farmasi'
          ? niche.category.includes('Kesehatan') || niche.category.includes('Medis') || niche.category.includes('Farmasi')
          : selectedCategory === 'Jasa Profesional'
          ? niche.category.includes('Profesional') || niche.category.includes('Hukum')
          : selectedCategory === 'Retail, Fashion & D2C'
          ? niche.category.includes('Retail') || niche.category.includes('Fashion')
          : selectedCategory === 'Kuliner & F&B'
          ? niche.category.includes('Kuliner') || niche.category.includes('F&B')
          : selectedCategory === 'Logistik & Ekspor'
          ? niche.category.includes('Logistik') || niche.category.includes('Ekspor')
          : selectedCategory === 'Pendidikan & Finansial'
          ? niche.category.includes('Pendidikan') || niche.category.includes('Keuangan') || niche.category.includes('Agribisnis') || niche.category.includes('Fasilitas')
          : true;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <article className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          <Layers className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>DIREKTORI CERUK INDUSTRI (pSEO)</span>
        </div>
        <Badge variant="mono">{nichesData.length} SEKTOR TERVERIFIKASI</Badge>
      </div>

      <p className="font-sans text-xs text-[#4b4b4b] leading-relaxed">
        Setiap industri memiliki alur konversi dan tantangan operasional unik. Pilih sektor bisnis Anda untuk membuka lembar spesifikasi teknis, catatan lapangan engineer, dan estimasi SOW:
      </p>

      {/* QUICK JUMP DROPDOWN SELECTOR & SEARCH BAR */}
      <div className="space-y-2 pt-0.5">
        {/* Quick Dropdown Selector for Fast Switching */}
        <div className="relative flex items-center">
          <select
            aria-label="Pilih langsung spesifikasi sektor industri"
            onChange={(e) => {
              if (e.target.value) {
                router.push(`/folio/niche-${e.target.value}`);
              }
            }}
            defaultValue=""
            className="w-full appearance-none px-3 py-1.5 bg-[#ebebe3] hover:bg-[#d5d5cd] border border-[#d5d5cd] rounded-xs font-mono text-xs text-[#111111] font-semibold transition-colors cursor-pointer focus:outline-none focus:border-[#111111] pr-8"
          >
            <option value="" disabled>
              Pilih Langsung Sektor Industri ({nichesData.length} Pilihan)...
            </option>
            {nichesData.map((n, i) => (
              <option key={n.id} value={n.slug}>
                [{i + 1 < 10 ? `0${i + 1}` : i + 1}] {n.industryName} — Mulai {n.startingPrice}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#4b4b4b] absolute right-2.5 pointer-events-none" />
        </div>

        {/* Instant Search Bar */}
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 text-[#4b4b4b] absolute left-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari sektor: dealer, alkes, kargo, pabrik, katering, hukum..."
            className="w-full pl-8 pr-3 py-1.5 bg-[#fbfbfa] border border-[#d5d5cd] rounded-xs text-xs font-mono text-[#111111] placeholder:text-[#4b4b4b]/60 focus:outline-none focus:border-[#111111]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2 text-xs font-mono text-[#4b4b4b] hover:text-[#111111] px-1"
            >
              ×
            </button>
          )}
        </div>

        {/* Category Filter Pills (Wrapping Vertically - Tanpa Horizontal Scroll) */}
        <div className="flex flex-wrap items-center gap-1 font-mono text-[10px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-2 py-0.5 rounded-xs transition-colors cursor-pointer border',
                selectedCategory === cat
                  ? 'bg-[#111111] text-[#fbfbfa] border-[#111111] font-semibold'
                  : 'bg-[#f4f4ef] text-[#4b4b4b] hover:text-[#111111] border-[#d5d5cd]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Open Ledger List - Alur Vertikal Murni (Tanpa Box Kaku & Tanpa Scroll Kanan Kiri) */}
      <div
        className="divide-y divide-[#e5e5df] max-h-[290px] sm:max-h-[330px] lg:max-h-[360px] overflow-y-auto paper-scrollbar overscroll-contain pr-1"
        style={{ touchAction: 'pan-y' }}
      >
        {filteredNiches.length > 0 ? (
          filteredNiches.map((niche, idx) => (
            <Link
              key={niche.id}
              href={`/folio/niche-${niche.slug}`}
              className="py-2 sm:py-2.5 px-1 hover:bg-[#f5f5ee] transition-colors rounded-xs group block space-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="text-[#c23b22] font-mono text-xs font-bold shrink-0">
                    [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#c23b22] transition-colors break-words">
                    {niche.industryName}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto pl-6 sm:pl-0">
                  <span className="font-mono text-[10.5px] font-bold text-[#111111] bg-[#ebebe3] group-hover:bg-[#d5d5cd] px-1.5 py-0.5 rounded-xs border border-[#d5d5cd] transition-colors">
                    Mulai {niche.startingPrice}
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#c23b22] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline shrink-0" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-mono text-[#666666] pl-6">
                <span className="text-[#4b4b4b]">{niche.category}</span>
                <span>·</span>
                <span className="text-[#111111] font-medium">{niche.recommendedPillar}</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-4 text-center bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs font-mono text-xs text-[#4b4b4b] space-y-1 my-2">
            <p>Tidak ada sektor industri yang cocok dengan pencarian Anda.</p>
            <p className="text-[10px]">
              Industri unik Anda belum tercantum? Diskusikan kebutuhan arsitektur kustom bersama lead engineer kami via WhatsApp.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

