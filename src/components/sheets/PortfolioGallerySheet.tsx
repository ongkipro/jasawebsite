'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Maximize2, Laptop, Smartphone, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import { PortfolioModal } from '@/components/ui/PortfolioModal';
import portfolioData from '@/data/portfolio.json';
import { PortfolioItem, PortfolioCategory } from '@/types/portfolio';

const allProjects = portfolioData as unknown as PortfolioItem[];

const categories: { key: PortfolioCategory; label: string }[] = [
  { key: 'all', label: 'Semua Proyek' },
  { key: 'company-profile', label: 'Company Profile' },
  { key: 'sales-website', label: 'Sales Website' },
  { key: 'shopify', label: 'Shopify D2C' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'custom-app', label: 'Custom App' },
];

export function PortfolioGallerySheetLeft({
  selectedId,
  onSelectProject,
}: {
  selectedId: string;
  onSelectProject: (id: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const filteredProjects = allProjects.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <article className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-[#c23b22] inline-block rounded-xs" />
          <h1 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">
            Portofolio Terpilih
          </h1>
        </div>
        <Badge variant="mono">{filteredProjects.length} PROYEK</Badge>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-1">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategory(cat.key)}
            className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-xs transition-colors cursor-pointer ${
              activeCategory === cat.key
                ? 'bg-[#111111] text-[#fbfbfa] font-bold'
                : 'bg-[#f4f4ef] text-[#4b4b4b] hover:bg-[#ebebe3] border border-[#d5d5cd]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Cards List */}
      <div className="space-y-2.5 pr-1">
        {filteredProjects.map((item) => {
          const isSelected = item.id === selectedId;
          const primaryMetric = item.metrics[0];

          return (
            <button
              type="button"
              aria-pressed={isSelected}
              aria-label={`Pilih proyek ${item.clientName}`}
              key={item.id}
              onClick={() => onSelectProject(item.id)}
              className={`w-full p-3 rounded-xs border cursor-pointer transition-all text-left ${
                isSelected
                  ? 'bg-[#f4f4ef] border-[#111111] shadow-xs translate-x-1'
                  : 'bg-[#fbfbfa] border-[#d5d5cd] hover:border-[#111111]/60 hover:bg-[#f4f4ef]/60'
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-serif text-sm font-bold text-[#111111]">
                  {item.clientName}
                </span>
                {primaryMetric && (
                  <span className="font-mono text-xs font-bold">
                    <span className="stabilo-yellow text-[#111111]">
                      {primaryMetric.label}: {primaryMetric.value}
                    </span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-[10px] text-[#4b4b4b]">
                  {item.categoryLabel}
                </span>
                <span className="text-[#d5d5cd]">•</span>
                <span className="font-mono text-[10px] text-[#4b4b4b]">
                  {item.industry}
                </span>
              </div>

              <p className="font-sans text-[11px] text-[#4b4b4b] mt-1.5 line-clamp-2 leading-relaxed">
                {item.solution}
              </p>
            </button>
          );
        })}
      </div>
    </article>
  );
}

export function PortfolioGallerySheetRight({
  selectedId,
}: {
  selectedId: string;
}) {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedItem: PortfolioItem =
    allProjects.find((p) => p.id === selectedId) || allProjects[0];

  return (
    <article className="space-y-4">
      {/* Top Header & Viewport Switcher */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          DETAIL PROYEK
        </span>

        <div className="flex items-center gap-1 bg-[#ebebe3] p-0.5 rounded-xs border border-[#d5d5cd]">
          <button
            type="button"
            aria-pressed={viewportMode === 'desktop'}
            onClick={() => setViewportMode('desktop')}
            className={`p-1 rounded-xs transition-colors cursor-pointer ${
              viewportMode === 'desktop'
                ? 'bg-[#111111] text-[#fbfbfa]'
                : 'text-[#4b4b4b] hover:text-[#111111]'
            }`}
            title="Desktop View"
          >
            <Laptop className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            aria-pressed={viewportMode === 'mobile'}
            onClick={() => setViewportMode('mobile')}
            className={`p-1 rounded-xs transition-colors cursor-pointer ${
              viewportMode === 'mobile'
                ? 'bg-[#111111] text-[#fbfbfa]'
                : 'text-[#4b4b4b] hover:text-[#111111]'
            }`}
            title="Mobile View"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mockup Frame Preview Container */}
      <div className="relative p-4 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-3">
        {/* Device frame header */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#4b4b4b] border-b border-[#d5d5cd] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="ml-2 font-bold text-[#111111]">
              {selectedItem.clientName}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 text-[#c23b22] hover:text-[#9c2a15] font-semibold transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Fullscreen</span>
          </button>
        </div>

        {/* Mockup Presentation Canvas with Real Screenshot */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Buka galeri ${selectedItem.clientName}`}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setIsModalOpen(true);
            }
          }}
          onClick={() => setIsModalOpen(true)}
          className="relative w-full h-44 sm:h-48 bg-[#111111] rounded-xs border border-[#d5d5cd] overflow-hidden cursor-pointer group"
        >
          <img
            src={viewportMode === 'desktop' ? selectedItem.desktopImage : selectedItem.mobileImage}
            alt={`Portofolio Website ${selectedItem.clientName} - ${selectedItem.categoryLabel} (${viewportMode})`}
            width={640}
            height={360}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          {/* Bottom info banner overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 flex flex-col justify-between transition-opacity group-hover:from-black/90">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#fbfbfa] bg-black/70 px-2 py-0.5 rounded-xs border border-white/20">
                {viewportMode === 'desktop' ? 'DESKTOP MOCKUP' : 'MOBILE MOCKUP'}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/90 bg-[#c23b22] px-2 py-0.5 rounded-xs font-semibold shadow-xs inline-flex items-center gap-1">
                <Maximize2 className="w-2.5 h-2.5" />
                <span>Fullscreen</span>
              </span>
            </div>

            <div className="space-y-0.5">
              <div className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#fbfbfa] transition-colors flex items-center justify-between">
                <span>{selectedItem.clientName}</span>
                {selectedItem.liveUrl && (
                  <span className="font-mono text-[10px] text-[#c23b22] bg-white/90 px-1.5 py-0.5 rounded-xs font-bold">
                    LIVE
                  </span>
                )}
              </div>
              <p className="font-sans text-[11px] text-white/80 line-clamp-1">
                {selectedItem.industry} • {selectedItem.categoryLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-3 gap-2 font-mono">
          {selectedItem.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-2 bg-[#fbfbfa] border border-[#d5d5cd] rounded-xs text-center"
            >
              <div className="text-[9px] uppercase tracking-wider text-[#4b4b4b]">
                {metric.label}
              </div>
              <div className="text-sm font-bold text-[#c23b22]">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech tags and demo link */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex flex-wrap gap-1 text-[10px] font-mono">
          {selectedItem.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-1.5 py-0.5 bg-[#ebebe3] text-[#111111] rounded-xs border border-[#d5d5cd]"
            >
              {tech}
            </span>
          ))}
        </div>

        {selectedItem.liveUrl && (
          <a
            href={selectedItem.liveUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 font-mono text-xs text-[#111111] hover:text-[#c23b22] underline"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Perforated Tear-off Voucher */}
      <TearOffVoucher
        title={`Konsultasi Konsep: ${selectedItem.clientName}`}
        code={selectedItem.voucherCode}
        perks="Diskusi Blueprint Desain & Arsitektur Mirip Studi Kasus Terpilih"
        intentParams={{
          portfolioTitle: selectedItem.clientName,
          ref: selectedItem.voucherCode,
        }}
      />

      {/* Post-Portfolio Bridge: Next Step Navigation */}
      <div className="p-2.5 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px]">
        <span className="text-[#4b4b4b] text-center sm:text-left">
          Ingin website dengan standar serupa untuk bisnis Anda?
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          <Link
            href="/folio/sales-website"
            className="px-2 py-1 bg-[#111111] hover:bg-[#c23b22] text-[#fbfbfa] rounded-xs font-semibold transition-colors text-center"
          >
            Sales Web (Mulai 3,5jt) →
          </Link>
          <Link
            href="/folio/company-profile"
            className="px-2 py-1 bg-[#fbfbfa] hover:bg-[#ebebe3] text-[#111111] border border-[#d5d5cd] rounded-xs font-semibold transition-colors text-center"
          >
            Compro (Mulai 2,9jt) →
          </Link>
        </div>
      </div>

      {/* Full-screen Lightbox Modal */}
      <PortfolioModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </article>
  );
}
