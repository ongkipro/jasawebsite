'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { cn } from '@/lib/cn';
import { DogEarPeel } from '@/components/book/DogEarPeel';
import { BookOpen, Tag } from 'lucide-react';

export interface SingleSheetViewProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  folioNumber?: string;
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
  onPrevPage,
  onNextPage,
  hasPrev = true,
  hasNext = true,
  className,
}: SingleSheetViewProps) {
  // Active mobile sub-page (0: Left/Narrative, 1: Right/SOW & Voucher)
  const [activeSubSheet, setActiveSubSheet] = useState<0 | 1>(0);

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
      dragElastic={0.15}
      onDragEnd={handleDragEnd}
      className={cn(
        'relative w-full max-w-md mx-auto h-full max-h-[calc(100dvh-155px)] sm:max-h-[calc(100dvh-135px)] min-h-0 flex flex-col justify-between p-3 sm:p-4 bg-[#fbfbfa] border border-[#d5d5cd] rounded-sm book-elevation select-text overflow-hidden touch-pan-y',
        className
      )}
    >
      {/* Top Mobile Header & Sub-Page Segmented Control */}
      <div className="flex-shrink-0 flex items-center justify-between border-b border-[#e5e5df] pb-2 text-[11px] font-mono select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c23b22]" />
          <span className="font-semibold text-[#111111] tracking-wider text-[10px]">
            JASAWEBSITE.CO
          </span>
          <span className="text-[#d5d5cd]">/</span>
          <span className="text-[#c23b22] font-bold text-[10px]">
            {folioNumber}
          </span>
        </div>

        {/* 2-Page Sub Toggle for Mobile */}
        {rightContent && (
          <div className="flex items-center gap-1 bg-[#ebebe3] p-0.5 rounded-xs border border-[#d5d5cd]">
            <button
              type="button"
              onClick={() => setActiveSubSheet(0)}
              className={cn(
                'flex items-center gap-1 px-2 py-0.5 rounded-xs font-semibold text-[10px] transition-all cursor-pointer',
                activeSubSheet === 0
                  ? 'bg-[#111111] text-[#fbfbfa] shadow-xs'
                  : 'text-[#4b4b4b] hover:text-[#111111]'
              )}
            >
              <BookOpen className="w-2.5 h-2.5" />
              <span>Ikhtisar</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSubSheet(1)}
              className={cn(
                'flex items-center gap-1 px-2 py-0.5 rounded-xs font-semibold text-[10px] transition-all cursor-pointer',
                activeSubSheet === 1
                  ? 'bg-[#111111] text-[#fbfbfa] shadow-xs'
                  : 'text-[#4b4b4b] hover:text-[#111111]'
              )}
            >
              <Tag className="w-2.5 h-2.5" />
              <span>Paket & SOW</span>
            </button>
          </div>
        )}
      </div>

      {/* Sheet Content Body with Internal Smooth Scroll */}
      <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-3 pr-0.5">
        <AnimatePresence mode="wait">
          {activeSubSheet === 0 ? (
            <motion.div
              key="mobile-sheet-left"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              {leftContent}
            </motion.div>
          ) : (
            <motion.div
              key="mobile-sheet-right"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.18 }}
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
          label="Bab Selanjutnya →"
        />
      )}
      {activeSubSheet === 0 && rightContent && (
        <DogEarPeel
          position="bottom-right"
          onClick={() => setActiveSubSheet(1)}
          label="Paket & SOW →"
        />
      )}
      {activeSubSheet === 1 && (
        <DogEarPeel
          position="bottom-left"
          onClick={() => setActiveSubSheet(0)}
          label="← Kembali"
        />
      )}
      {activeSubSheet === 0 && hasPrev && onPrevPage && (
        <DogEarPeel
          position="bottom-left"
          onClick={() => {
            setActiveSubSheet(1);
            onPrevPage();
          }}
          label="← Bab Sebelumnya"
        />
      )}
    </motion.div>
  );
}
