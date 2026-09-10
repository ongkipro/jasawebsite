'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/cn';
import { DogEarPeel } from '@/components/book/DogEarPeel';
import { BookOpen, Tag, ChevronDown, Check } from 'lucide-react';

export interface SingleSheetViewProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  folioNumber?: string;
  leftLabel?: string;
  rightLabel?: string;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  className?: string;
}

export function SingleSheetView({
  leftContent,
  rightContent,
  folioNumber = 'FOLIO 01',
  leftLabel = 'Ringkasan',
  rightLabel = 'Paket & Estimasi',
  onPrevPage,
  onNextPage,
  hasPrev = true,
  hasNext = true,
  className,
}: SingleSheetViewProps) {
  const reducedMotion = useReducedMotion();
  // Active mobile sub-page (0: Left/Narrative, 1: Right/SOW & Voucher)
  const [activeSubSheet, setActiveSubSheet] = useState<0 | 1>(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        setDropdownOpen(false);
        dropdownRef.current?.querySelector('button')?.focus();
      }
    }
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [dropdownOpen]);

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 45;
    if (info.offset.x < -swipeThreshold) {
      if (activeSubSheet === 0 && rightContent) {
        setActiveSubSheet(1);
      } else if (hasNext && onNextPage) {
        setActiveSubSheet(0);
        onNextPage();
      }
    } else if (info.offset.x > swipeThreshold) {
      if (activeSubSheet === 1) {
        setActiveSubSheet(0);
      } else if (hasPrev && onPrevPage) {
        setActiveSubSheet(1);
        onPrevPage();
      }
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={reducedMotion ? 0 : 0.15}
      onDragEnd={handleDragEnd}
      className={cn(
        'relative w-full max-w-md mx-auto h-full flex-1 min-h-0 flex flex-col justify-between p-3 sm:p-4 bg-[#fbfbfa] border border-[#d5d5cd] rounded-sm book-elevation select-text overflow-hidden touch-pan-y',
        className
      )}
    >
      {/* Top Mobile Header & Sub-Page Dropdown Selector */}
      <div className="flex-shrink-0 flex items-center justify-between border-b border-[#e5e5df] pb-2 text-[11px] font-mono select-none relative z-30">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22] shrink-0" />
          <span className="text-[#c23b22] font-bold text-[11px] tracking-wider truncate">
            {folioNumber}
          </span>
        </div>

        {/* Interactive Dropdown Selector for 2-Page Sub Sheets */}
        {rightContent ? (
          <div ref={dropdownRef} className="relative inline-block text-left shrink-0">
            <button
              type="button"
              data-testid="subsheet-dropdown-trigger"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              className="flex items-center gap-1.5 px-2 py-1 bg-[#ebebe3] hover:bg-[#d5d5cd] border border-[#d5d5cd] rounded-xs text-[10px] font-semibold text-[#111111] transition-colors cursor-pointer"
            >
              {activeSubSheet === 0 ? (
                <>
                  <BookOpen className="w-3 h-3 text-[#c23b22]" />
                  <span>{leftLabel}</span>
                </>
              ) : (
                <>
                  <Tag className="w-3 h-3 text-[#c23b22]" />
                  <span>{rightLabel}</span>
                </>
              )}
              <ChevronDown
                className={cn(
                  'w-3 h-3 text-[#4b4b4b] transition-transform duration-150',
                  dropdownOpen && 'rotate-180'
                )}
              />
            </button>

            {dropdownOpen && (
              <div
                role="group" aria-label="Select page"
                className="absolute right-0 mt-1 w-44 bg-[#fbfbfa] border border-[#d5d5cd] rounded-xs shadow-xl z-50 overflow-hidden font-mono text-[10px] animate-in fade-in zoom-in-95 duration-100 divide-y divide-[#e5e5df]"
              >
                <div className="px-2.5 py-1.5 bg-[#ebebe3]/70 text-[9px] text-[#4b4b4b] uppercase font-bold tracking-wider">
                  Select Page
                </div>
                <button
                  type="button"
                  data-testid="subsheet-item-0"
                  onClick={() => {
                    setActiveSubSheet(0);
                    setDropdownOpen(false);
                    dropdownRef.current?.querySelector('button')?.focus();
                  }}
                  className={cn(
                    'w-full flex items-center justify-between px-2.5 py-2 text-left transition-colors cursor-pointer',
                    activeSubSheet === 0
                      ? 'bg-[#111111] text-[#fbfbfa]'
                      : 'hover:bg-[#ebebe3] text-[#111111]'
                  )}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-bold truncate">{leftLabel}</span>
                  </div>
                  {activeSubSheet === 0 && (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                  )}
                </button>
                <button
                  type="button"
                  data-testid="subsheet-item-1"
                  onClick={() => {
                    setActiveSubSheet(1);
                    setDropdownOpen(false);
                    dropdownRef.current?.querySelector('button')?.focus();
                  }}
                  className={cn(
                    'w-full flex items-center justify-between px-2.5 py-2 text-left transition-colors cursor-pointer',
                    activeSubSheet === 1
                      ? 'bg-[#111111] text-[#fbfbfa]'
                      : 'hover:bg-[#ebebe3] text-[#111111]'
                  )}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Tag className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-bold truncate">{rightLabel}</span>
                  </div>
                  {activeSubSheet === 1 && (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          <span className="text-[10px] font-mono text-[#4b4b4b] uppercase">
            SINGLE SHEET
          </span>
        )}
      </div>

      {/* Sheet Content Body with Internal Smooth Scroll */}
      <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-3 pr-0.5">
        <AnimatePresence initial={false} mode="wait">
          {activeSubSheet === 0 ? (
            <motion.div
              key="mobile-sheet-left"
              initial={{ opacity: 0, x: reducedMotion ? 0 : -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reducedMotion ? 0 : 8 }}
              transition={{ duration: reducedMotion ? 0 : 0.18 }}
              className="space-y-4"
            >
              {leftContent}
            </motion.div>
          ) : (
            <motion.div
              key="mobile-sheet-right"
              initial={{ opacity: 0, x: reducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reducedMotion ? 0 : -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.18 }}
              className="space-y-4"
            >
              {rightContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Folio Footer Mobile */}
      <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2 text-[9px] font-mono text-[#4b4b4b] select-none">
        <span className="text-[9px] text-[#4b4b4b]">
          ← GESER UNTUK BALIK LEMBAR →
        </span>
        <span className="text-[#111111] font-semibold">
          {rightContent ? `HALAMAN ${activeSubSheet + 1}/2` : 'HALAMAN TUNGGAL'}
        </span>
      </div>

      {/* Bottom-Right Corner Dog Ear */}
      {activeSubSheet === 1 && hasNext && onNextPage && (
        <DogEarPeel
          position="bottom-right"
          onClick={() => {
            setActiveSubSheet(0);
            onNextPage();
          }}
          label="Next Folio →"
        />
      )}
      {activeSubSheet === 0 && rightContent && (
        <DogEarPeel
          position="bottom-right"
          onClick={() => setActiveSubSheet(1)}
          label={`${rightLabel} →`}
        />
      )}
      {activeSubSheet === 1 && (
        <DogEarPeel
          position="bottom-left"
          onClick={() => setActiveSubSheet(0)}
          label={`← ${leftLabel}`}
        />
      )}
      {activeSubSheet === 0 && hasPrev && onPrevPage && (
        <DogEarPeel
          position="bottom-left"
          onClick={() => {
            setActiveSubSheet(1);
            onPrevPage();
          }}
          label="← Previous Folio"
        />
      )}
    </motion.div>
  );
}
