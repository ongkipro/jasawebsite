'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MessageSquareCode,
  Home,
  PhoneCall,
  Layers,
  Search,
  Check,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import nichesData from '@/data/niches.json';
import { siteConfig } from '@/data/siteConfig';
import { SpreadView } from '@/components/book/SpreadView';
import { TabletSheetView } from '@/components/book/TabletSheetView';
import { SingleSheetView } from '@/components/book/SingleSheetView';
import { SheetTurner } from '@/components/book/SheetTurner';
import { BookmarkRibbon } from '@/components/book/BookmarkRibbon';
import {
  NicheDetailSheetLeft,
  NicheDetailSheetRight,
} from '@/components/sheets/NicheDetailSheet';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { NicheItem } from '@/types/niche';

export interface NicheBookShellProps {
  currentNiche: NicheItem;
}

export function NicheBookShell({ currentNiche }: NicheBookShellProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const totalNiches = nichesData.length;
  const currentIndex = nichesData.findIndex((n) => n.slug === currentNiche.slug);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Auto focus search input when opened
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Keyboard navigation
  const navigateToNiche = useCallback(
    (index: number, dir: 'next' | 'prev') => {
      if (index < 0 || index >= totalNiches) return;
      const targetNiche = nichesData[index];
      setDirection(dir);
      router.push(`/folio/niche-${targetNiche.slug}`);
    },
    [router, totalNiches]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < totalNiches - 1) {
      navigateToNiche(currentIndex + 1, 'next');
    }
  }, [currentIndex, totalNiches, navigateToNiche]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      navigateToNiche(currentIndex - 1, 'prev');
    } else {
      router.push('/folio/colophon');
    }
  }, [currentIndex, navigateToNiche, router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Filtered niches for dropdown
  const filteredNiches = nichesData.filter(
    (n) =>
      n.industryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.targetMarket.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.recommendedPillar.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const waLeadUrl = buildWhatsAppUrl({
    ref: currentNiche.voucherCode,
    serviceName: `Website ${currentNiche.industryName}`,
  });

  return (
    <main
      className={cn(
        'relative flex flex-col justify-between max-w-7xl mx-auto w-full transition-all select-text',
        // 1-Screen Fixed Viewport Fit across Desktop, Tablet, and Mobile
        'h-full h-[100dvh] max-h-[100dvh] overflow-hidden',
        // Desktop spacing
        'lg:py-3 lg:px-8 xl:px-12',
        // Tablet spacing
        'md:py-3 md:px-6',
        // Mobile spacing with iOS safe-area support
        'pt-[max(0.5rem,env(safe-area-inset-top))] pb-[max(0.5rem,env(safe-area-inset-bottom))] px-3 sm:px-4'
      )}
    >
      {/* TOP TECHNICAL RUNNING NAV */}
      <header className="flex-shrink-0 flex items-center justify-between border-b border-[#d5d5cd] pb-1.5 mb-1.5 sm:pb-2 sm:mb-2 lg:mb-3 font-mono text-xs select-none relative z-50">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-bold tracking-wider hover:text-[#c23b22] transition-colors shrink-0"
            title="Kembali ke Sampul Depan"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs">
              JASAWEBSITE.CO <span className="text-[#c23b22] font-semibold">by ONG</span>
            </span>
          </Link>
          <span className="text-[#d5d5cd] shrink-0">/</span>

          <Link
            href="/folio/colophon"
            className="text-[#4b4b4b] hover:text-[#c23b22] transition-colors hidden sm:inline text-[11px] shrink-0"
            title="Buka Direktori Ceruk Industri"
          >
            INDUSTRY CATALOG
          </Link>

          <span className="text-[#d5d5cd] hidden sm:inline shrink-0">/</span>

          {/* INTERACTIVE NICHE SELECTOR DROPDOWN */}
          <div ref={dropdownRef} className="relative inline-block text-left">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 rounded-xs border transition-all cursor-pointer font-sans text-xs',
                dropdownOpen
                  ? 'bg-[#111111] text-[#fbfbfa] border-[#111111] shadow-sm'
                  : 'bg-[#ebebe3] hover:bg-[#d5d5cd] text-[#111111] border-[#d5d5cd]'
              )}
            >
              <Layers className="w-3 h-3 text-[#c23b22] shrink-0" />
              <span className="font-serif font-bold truncate max-w-[140px] sm:max-w-[200px] md:max-w-[260px]">
                {currentNiche.industryName}
              </span>
              <ChevronDown
                className={cn(
                  'w-3 h-3 shrink-0 transition-transform duration-200',
                  dropdownOpen && 'rotate-180 text-[#fbfbfa]'
                )}
              />
            </button>

            {/* DROPDOWN POPOVER MENU WITH SMOOTH SCROLLING */}
            {dropdownOpen && (
              <div
                role="listbox"
                className="absolute left-0 mt-1.5 w-[280px] sm:w-[340px] bg-[#fbfbfa] border border-[#d5d5cd] rounded-xs shadow-2xl z-50 overflow-hidden font-sans animate-in fade-in zoom-in-95 duration-150"
              >
                {/* Search Box Header */}
                <div className="p-2 border-b border-[#e5e5df] bg-[#ebebe3]/60">
                  <div className="relative flex items-center">
                    <Search className="w-3.5 h-3.5 text-[#4b4b4b] absolute left-2.5 pointer-events-none" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari sektor industri..."
                      className="w-full pl-8 pr-2.5 py-1.5 bg-[#fbfbfa] border border-[#d5d5cd] rounded-xs text-xs font-mono text-[#111111] placeholder:text-[#4b4b4b]/60 focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                </div>

                {/* Scrollable Niches List */}
                <div
                  className="max-h-64 overflow-y-auto paper-scrollbar overscroll-contain py-1 divide-y divide-[#f4f4ef]"
                  style={{ touchAction: 'pan-y' }}
                >
                  {filteredNiches.length > 0 ? (
                    filteredNiches.map((item, idx) => {
                      const isSelected = item.slug === currentNiche.slug;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setDropdownOpen(false);
                            if (!isSelected) {
                              router.push(`/folio/niche-${item.slug}`);
                            }
                          }}
                          className={cn(
                            'w-full text-left px-3 py-2 flex items-start justify-between gap-2 text-xs transition-colors cursor-pointer group',
                            isSelected
                              ? 'bg-[#111111] text-[#fbfbfa]'
                              : 'hover:bg-[#ebebe3] text-[#111111]'
                          )}
                        >
                          <div className="flex items-start gap-2 min-w-0">
                            <span
                              className={cn(
                                'font-mono text-[10px] shrink-0 mt-0.5',
                                isSelected ? 'text-[#c23b22]' : 'text-[#c23b22] font-semibold'
                              )}
                            >
                              [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                            </span>
                            <div className="min-w-0">
                              <div
                                className={cn(
                                  'font-serif font-bold truncate text-xs',
                                  isSelected
                                    ? 'text-[#fbfbfa]'
                                    : 'text-[#111111] group-hover:text-[#c23b22]'
                                )}
                              >
                                {item.industryName}
                              </div>
                              <div
                                className={cn(
                                  'font-mono text-[9px] truncate',
                                  isSelected ? 'text-[#ebebe3]/70' : 'text-[#4b4b4b]'
                                )}
                              >
                                {item.recommendedPillar}
                              </div>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span
                              className={cn(
                                'font-mono text-[10px] font-semibold block',
                                isSelected ? 'text-[#fbfbfa]' : 'text-[#111111]'
                              )}
                            >
                              {item.startingPrice}
                            </span>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-emerald-400 inline-block mt-0.5" />
                            )}
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="p-4 text-center text-xs text-[#4b4b4b] font-mono">
                      Tidak ada sektor yang cocok &quot;{searchQuery}&quot;
                    </div>
                  )}
                </div>

                {/* Dropdown Footer Quick Link to All Niches */}
                <div className="p-2 border-t border-[#e5e5df] bg-[#ebebe3] flex items-center justify-between text-[11px] font-mono">
                  <Link
                    href="/folio/colophon"
                    onClick={() => setDropdownOpen(false)}
                    className="text-[#c23b22] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>Lihat Semua {nichesData.length} Sektor →</span>
                  </Link>
                  <span className="text-[#4b4b4b] text-[10px]">
                    {nichesData.length} Spesifikasi Sektor
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Header Status */}
        <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
          <Link
            href="/folio/portfolio"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-xs border border-[#d5d5cd] hover:border-[#111111] bg-[#fbfbfa] hover:bg-[#ebebe3] font-mono text-[10px] sm:text-[11px] tracking-wide text-[#111111] transition-all cursor-pointer"
            title="Open Portfolio & Live Projects"
          >
            <span className="text-[#c23b22] text-[9px]">✦</span>
            <span>PORTFOLIO</span>
          </Link>

          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[#4b4b4b]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>LIGHTHOUSE 100/100 · GLOBAL EDGE CLOUD</span>
          </div>

          <div className="flex items-center gap-1 bg-[#ebebe3] px-2 py-0.5 sm:py-1 rounded-xs border border-[#d5d5cd] font-semibold text-[10px] sm:text-[11px]">
            <span className="hidden sm:inline">NICHE</span>
            <span className="text-[#c23b22]">{currentIndex + 1}</span>
            <span>/</span>
            <span>{totalNiches}</span>
          </div>
        </div>
      </header>

      {/* MAIN BOOK INTERACTION SHELL */}
      <div className="relative w-full flex-1 min-h-0 flex flex-col">
        {/* Bookmark Ribbon on Desktop Edge */}
        <BookmarkRibbon
          currentSpreadIndex={7} // Points to INDEX / Colophon tab
          onSelectSpread={(idx) => {
            const target =
              idx === 0
                ? '/'
                : idx === 7
                ? '/folio/colophon'
                : `/folio/${
                    [
                      'cover',
                      'company-profile',
                      'sales-website',
                      'ecommerce-shopify',
                      'custom-web-app',
                      'portfolio',
                      'maintenance-care',
                      'colophon',
                    ][idx]
                  }`;
            router.push(target);
          }}
        />

        {/* 3D Motion Turner Container */}
        <SheetTurner currentKey={currentNiche.slug} direction={direction} className="w-full h-full flex-1 min-h-0">
          {/* 1. Desktop Two-Page Open Spread (>= 1024px) */}
          <div className="hidden lg:block w-full h-full">
            <SpreadView
              leftContent={<NicheDetailSheetLeft niche={currentNiche} />}
              rightContent={<NicheDetailSheetRight niche={currentNiche} />}
              leftFolioNumber={`CERUK ${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}`}
              rightFolioNumber={`SPESIFIKASI · ${currentNiche.schemaType}`}
              onPrevPage={handlePrev}
              onNextPage={handleNext}
              hasPrev={true}
              hasNext={currentIndex < totalNiches - 1}
            />
          </div>

          {/* 2. Tablet View (768px - 1023px) */}
          <div className="hidden md:block lg:hidden w-full h-full flex flex-col min-h-0">
            <TabletSheetView
              leftContent={<NicheDetailSheetLeft niche={currentNiche} />}
              rightContent={<NicheDetailSheetRight niche={currentNiche} />}
              leftFolioNumber={`CERUK ${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}`}
              rightFolioNumber={`SPESIFIKASI · ${currentNiche.schemaType}`}
              onPrevPage={handlePrev}
              onNextPage={handleNext}
              hasPrev={true}
              hasNext={currentIndex < totalNiches - 1}
            />
          </div>

          {/* 3. Mobile Web View (< 768px) */}
          <div className="block md:hidden w-full h-full flex flex-col min-h-0">
            <SingleSheetView
              leftContent={<NicheDetailSheetLeft niche={currentNiche} />}
              rightContent={<NicheDetailSheetRight niche={currentNiche} />}
              folioNumber={`CERUK ${currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}`}
              onPrevPage={handlePrev}
              onNextPage={handleNext}
              hasPrev={true}
              hasNext={currentIndex < totalNiches - 1}
            />
          </div>
        </SheetTurner>
      </div>

      {/* BOTTOM CONTROLLER & WHATSAPP ACTION BAR */}
      <footer className="flex-shrink-0 mt-1 sm:mt-2 pt-1.5 sm:pt-2.5 border-t border-[#d5d5cd] flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 font-mono text-xs select-none relative z-20">
        {/* Navigation buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <Link
            href="/folio/colophon"
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[34px] sm:min-h-[38px] bg-[#fbfbfa] hover:bg-[#ebebe3] border border-[#d5d5cd] rounded-xs font-medium text-[11px] sm:text-xs transition-colors"
            title="Kembali ke Direktori Ceruk Industri"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#c23b22]" />
            <span>Catalog</span>
          </Link>

          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[34px] sm:min-h-[38px] bg-[#ebebe3] hover:bg-[#d5d5cd] border border-[#d5d5cd] rounded-xs font-medium text-[11px] sm:text-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev</span>
          </button>

          {/* Niche dots indicator */}
          <div className="hidden sm:flex items-center gap-1 px-1">
            {nichesData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 'next' : 'prev');
                  router.push(`/folio/niche-${item.slug}`);
                }}
                title={item.industryName}
                aria-label={`Open Niche ${item.industryName}`}
                className={cn(
                  'h-1.5 sm:h-2 rounded-full transition-all duration-200 cursor-pointer',
                  currentIndex === idx
                    ? 'w-5 bg-[#111111]'
                    : 'w-1.5 bg-[#d5d5cd] hover:bg-[#4b4b4b]'
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === totalNiches - 1}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[34px] sm:min-h-[38px] bg-[#111111] hover:bg-[#c23b22] disabled:opacity-35 disabled:cursor-not-allowed text-[#fbfbfa] border border-[#111111] rounded-xs font-medium text-[11px] sm:text-xs transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Global direct Call & WhatsApp CS Action Bar (Centered on Mobile, without number) */}
        <div className="flex items-center justify-center sm:justify-end gap-2 text-center w-full sm:w-auto">
          <a
            href={`tel:+${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 min-h-[34px] sm:min-h-[36px] rounded-xs border border-[#d5d5cd] bg-[#ebebe3] hover:bg-[#111111] hover:text-[#fbfbfa] text-xs font-bold text-[#111111] transition-colors cursor-pointer flex-1 sm:flex-initial"
            title="Telepon Langsung Customer Service"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#c23b22]" />
            <span>Call CS</span>
          </a>
          <a
            href={waLeadUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 min-h-[34px] sm:min-h-[36px] rounded-xs bg-[#111111] hover:bg-[#c23b22] text-[#fbfbfa] text-xs font-bold transition-colors cursor-pointer shadow-xs flex-1 sm:flex-initial"
            title={`Chat WhatsApp Konsultasi Website ${currentNiche.industryName}`}
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>WhatsApp CS →</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
