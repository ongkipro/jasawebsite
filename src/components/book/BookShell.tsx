'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, MessageSquareCode, Home, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/cn';
import foliosData from '@/data/folios.json';
import { siteConfig } from '@/data/siteConfig';
import { SpreadView } from '@/components/book/SpreadView';
import { TabletSheetView } from '@/components/book/TabletSheetView';
import { SingleSheetView } from '@/components/book/SingleSheetView';
import { SheetTurner } from '@/components/book/SheetTurner';
import { BookmarkRibbon } from '@/components/book/BookmarkRibbon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { syncDocumentSeo } from '@/lib/seo';

export interface BookShellProps {
  initialSpreadIndex?: number;
  renderLeftSheet: (spreadIndex: number) => React.ReactNode;
  renderRightSheet?: (spreadIndex: number) => React.ReactNode;
  className?: string;
}

export function BookShell({
  initialSpreadIndex = 0,
  renderLeftSheet,
  renderRightSheet,
  className,
}: BookShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [spreadIndex, setSpreadIndex] = useState(initialSpreadIndex);
  const [prevInitialIndex, setPrevInitialIndex] = useState(initialSpreadIndex);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Synchronize state if initialSpreadIndex changes without cascading renders
  if (prevInitialIndex !== initialSpreadIndex) {
    setPrevInitialIndex(initialSpreadIndex);
    setSpreadIndex(initialSpreadIndex);
  }

  const totalSpreads = foliosData.length;
  const currentSpread = foliosData[spreadIndex] || foliosData[0];

  const navigateToSpread = useCallback(
    (newIndex: number, dir: 'next' | 'prev') => {
      if (newIndex < 0 || newIndex >= totalSpreads) return;
      setDirection(dir);
      setSpreadIndex(newIndex);
      const targetSlug = foliosData[newIndex].slug;
      const targetUrl = targetSlug === 'cover' ? '/' : `/folio/${targetSlug}`;
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ spreadIndex: newIndex }, '', targetUrl);
      }
      syncDocumentSeo(targetSlug);
    },
    [totalSpreads]
  );

  // Synchronize document title, meta tags, and schema whenever spread changes
  useEffect(() => {
    const current = foliosData[spreadIndex];
    if (current) {
      syncDocumentSeo(current.slug);
    }
  }, [spreadIndex]);

  // Support browser Back and Forward history navigation
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state && typeof e.state.spreadIndex === 'number') {
        setSpreadIndex(e.state.spreadIndex);
      } else {
        const path = window.location.pathname;
        let newIdx = 0;
        if (path === '/' || path === '/folio/cover') {
          newIdx = 0;
        } else if (path.startsWith('/folio/')) {
          const slug = path.replace('/folio/', '');
          const found = foliosData.findIndex((f) => f.slug === slug);
          if (found !== -1) newIdx = found;
        }
        setSpreadIndex(newIdx);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNext = useCallback(() => {
    if (spreadIndex < totalSpreads - 1) {
      navigateToSpread(spreadIndex + 1, 'next');
    }
  }, [spreadIndex, totalSpreads, navigateToSpread]);

  const handlePrev = useCallback(() => {
    if (spreadIndex > 0) {
      navigateToSpread(spreadIndex - 1, 'prev');
    }
  }, [spreadIndex, navigateToSpread]);

  // Keyboard Navigation Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSpread(0, 'prev');
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSpread(totalSpreads - 1, 'next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, navigateToSpread, totalSpreads]);

  const waLeadUrl = buildWhatsAppUrl({
    ref: `Folio-${currentSpread.slug}`,
    serviceName: currentSpread.title,
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
        'pt-[max(0.5rem,env(safe-area-inset-top))] pb-[max(0.5rem,env(safe-area-inset-bottom))] px-3 sm:px-4',
        className
      )}
    >
      {/* TOP TECHNICAL RUNNING NAV */}
      <header className="flex-shrink-0 flex items-center justify-between border-b border-[#d5d5cd] pb-1.5 mb-1.5 sm:pb-2 sm:mb-2 lg:mb-3 font-mono text-xs select-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToSpread(0, 'prev');
            }}
            className="flex items-center gap-1.5 font-bold tracking-wider hover:text-[#c23b22] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs">
              JASAWEBSITE.CO <span className="text-[#c23b22] font-semibold">by ONG</span>
            </span>
          </Link>
          <span className="text-[#d5d5cd]">/</span>
          <span className="text-[#4b4b4b] hidden sm:inline text-[11px]">
            LIVING DIGITAL BROCHURE
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-4">
          <Link
            href="/folio/portfolio"
            onClick={(e) => {
              e.preventDefault();
              navigateToSpread(5, spreadIndex > 5 ? 'prev' : 'next');
            }}
            className={cn(
              'hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-xs border font-mono text-[10px] sm:text-[11px] tracking-wide transition-all cursor-pointer',
              spreadIndex === 5
                ? 'bg-[#ebebe3] border-[#111111] text-[#c23b22] font-bold shadow-2xs'
                : 'bg-[#fbfbfa] hover:bg-[#ebebe3] border-[#d5d5cd] hover:border-[#111111] text-[#111111]'
            )}
            title="Buka Galeri Portofolio & Proyek Live"
          >
            <span className="text-[#c23b22] text-[9px]">✦</span>
            <span>PORTFOLIO</span>
          </Link>

          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[#4b4b4b]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>LIGHTHOUSE 100/100 · GLOBAL EDGE CLOUD</span>
          </div>

          <div className="flex items-center gap-1 bg-[#ebebe3] px-2 py-0.5 sm:py-1 rounded-xs border border-[#d5d5cd] font-semibold text-[10px] sm:text-[11px]">
            <span>FOLIO</span>
            <span className="text-[#c23b22]">{spreadIndex + 1}</span>
            <span>/</span>
            <span>{totalSpreads}</span>
          </div>
        </div>
      </header>

      {/* MAIN BOOK INTERACTION SHELL */}
      <div className="relative w-full flex-1 min-h-0 flex flex-col">
        {/* Bookmark Ribbon on Desktop Edge */}
        <BookmarkRibbon
          currentSpreadIndex={spreadIndex}
          onSelectSpread={(idx) =>
            navigateToSpread(idx, idx > spreadIndex ? 'next' : 'prev')
          }
        />

        {/* 3D Motion Turner Container */}
        <SheetTurner currentKey={spreadIndex} direction={direction} className="w-full h-full flex-1 min-h-0">
          {/* 1. Desktop Two-Page Open Spread (>= 1024px) - 1 Layar Fixed */}
          <div className="hidden lg:block w-full h-full">
            <SpreadView
              leftContent={renderLeftSheet(spreadIndex)}
              rightContent={
                renderRightSheet ? renderRightSheet(spreadIndex) : null
              }
              leftFolioNumber={currentSpread.leftFolioNumber}
              rightFolioNumber={currentSpread.rightFolioNumber}
              onPrevPage={handlePrev}
              onNextPage={handleNext}
              hasPrev={spreadIndex > 0}
              hasNext={spreadIndex < totalSpreads - 1}
            />
          </div>

          {/* 2. Tablet View (768px - 1023px) - Ergonomic Sub-page Tabbed Switcher */}
          <div className="hidden md:block lg:hidden w-full h-full flex flex-col min-h-0">
            <TabletSheetView
              leftContent={renderLeftSheet(spreadIndex)}
              rightContent={
                renderRightSheet ? renderRightSheet(spreadIndex) : null
              }
              leftFolioNumber={currentSpread.leftFolioNumber}
              rightFolioNumber={currentSpread.rightFolioNumber}
              onPrevPage={handlePrev}
              onNextPage={handleNext}
              hasPrev={spreadIndex > 0}
              hasNext={spreadIndex < totalSpreads - 1}
            />
          </div>

          {/* 3. Mobile Web View (< 768px) - Single Tactile Sheet Thumb Optimized */}
          <div className="block md:hidden w-full h-full flex flex-col min-h-0">
            <SingleSheetView
              leftContent={renderLeftSheet(spreadIndex)}
              rightContent={
                renderRightSheet ? renderRightSheet(spreadIndex) : null
              }
              folioNumber={currentSpread.leftFolioNumber}
              onPrevPage={handlePrev}
              onNextPage={handleNext}
              hasPrev={spreadIndex > 0}
              hasNext={spreadIndex < totalSpreads - 1}
            />
          </div>
        </SheetTurner>
      </div>

      {/* BOTTOM CONTROLLER & WHATSAPP ACTION BAR */}
      <footer className="flex-shrink-0 mt-1 sm:mt-2 pt-1.5 sm:pt-2.5 border-t border-[#d5d5cd] flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 font-mono text-xs select-none">
        {/* Navigation buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <button
            type="button"
            onClick={handlePrev}
            disabled={spreadIndex === 0}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-h-[34px] sm:min-h-[38px] bg-[#fbfbfa] hover:bg-[#ebebe3] disabled:opacity-35 disabled:cursor-not-allowed border border-[#d5d5cd] rounded-xs font-medium text-[11px] sm:text-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Prev</span>
          </button>

          {/* Spread dots indicator */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-1 sm:px-2">
            {foliosData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  navigateToSpread(idx, idx > spreadIndex ? 'next' : 'prev')
                }
                aria-label={`Open Folio ${idx + 1}`}
                className={cn(
                  'h-1.5 sm:h-2 rounded-full transition-all duration-200 cursor-pointer',
                  spreadIndex === idx
                    ? 'w-4 sm:w-6 bg-[#111111]'
                    : 'w-1.5 sm:w-2 bg-[#d5d5cd] hover:bg-[#4b4b4b]'
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={spreadIndex === totalSpreads - 1}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-h-[34px] sm:min-h-[38px] bg-[#111111] hover:bg-[#c23b22] disabled:opacity-35 disabled:cursor-not-allowed text-[#fbfbfa] border border-[#111111] rounded-xs font-medium text-[11px] sm:text-xs transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
            title="Chat WhatsApp Customer Service"
          >
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>WhatsApp CS →</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
