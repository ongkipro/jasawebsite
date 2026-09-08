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

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 paper-scrollbar font-mono text-[10px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-2 py-0.5 rounded-xs whitespace-nowrap transition-colors cursor-pointer border',
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

      {/* Directory Grid with Smooth Containment Scrolling */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[260px] sm:max-h-[290px] lg:max-h-[320px] overflow-y-auto paper-scrollbar overscroll-contain pr-1"
        style={{ touchAction: 'pan-y' }}
      >
        {filteredNiches.length > 0 ? (
          filteredNiches.map((niche, idx) => (
            <Link
              key={niche.id}
              href={`/folio/niche-${niche.slug}`}
              className="p-2.5 bg-[#f4f4ef] hover:bg-[#ebebe3] border border-[#d5d5cd] rounded-xs transition-colors group block relative space-y-1"
            >
              <div className="flex items-baseline justify-between text-[11px] font-mono">
                <span className="text-[#c23b22] font-bold">
                  [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                </span>
                <span className="text-[10px] font-bold text-[#111111] bg-[#ebebe3] group-hover:bg-[#d5d5cd] px-1.5 py-0.5 rounded-xs border border-[#d5d5cd] transition-colors">
                  Mulai {niche.startingPrice}
                </span>
              </div>
              <div className="font-serif text-xs font-bold text-[#111111] group-hover:text-[#c23b22] transition-colors flex items-center justify-between">
                <span className="truncate pr-1">{niche.industryName}</span>
                <ArrowRight className="w-3 h-3 text-[#c23b22] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-[#4b4b4b] pt-0.5">
                <span className="truncate max-w-[120px] text-[#4b4b4b]">{niche.category}</span>
                <span className="text-[#111111] font-medium">{niche.recommendedPillar}</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-2 p-4 text-center bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs font-mono text-xs text-[#4b4b4b] space-y-1">
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

