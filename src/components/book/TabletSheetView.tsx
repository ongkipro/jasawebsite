'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { cn } from '@/lib/cn';
import { DogEarPeel } from '@/components/book/DogEarPeel';
import { BookOpen, Layers } from 'lucide-react';

export interface TabletSheetViewProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftFolioNumber?: string;
  rightFolioNumber?: string;
  onPrevPage?: () => void;
  onNextPage?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  className?: string;
}

export function TabletSheetView({
  leftContent,
  rightContent,
  leftFolioNumber = 'FOLIO 00',
  rightFolioNumber = 'FOLIO 01',
  onPrevPage,
  onNextPage,
  hasPrev = true,
  hasNext = true,
  className,
}: TabletSheetViewProps) {
  // Active tablet sub-sheet (0: Left sheet, 1: Right sheet)
  const [activeSubSheet, setActiveSubSheet] = useState<0 | 1>(0);

  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
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
        'relative w-full max-w-3xl mx-auto h-full flex-1 min-h-0 flex flex-col justify-between p-4 sm:p-6 bg-[#fbfbfa] border border-[#d5d5cd] rounded-sm book-elevation select-text overflow-hidden touch-pan-y',
        className
      )}
    >
      {/* Top Tablet Header with Sub-Page Tabs */}
      <div className="flex-shrink-0 flex items-center justify-between border-b border-[#e5e5df] pb-2.5 text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#111111] tracking-wider text-[11px] sm:text-xs">
            JASAWEBSITE.CO <span className="text-[#c23b22]">by ONG</span>
          </span>
          <span className="text-[#d5d5cd]">/</span>
          <span className="text-[#c23b22] font-bold text-[11px] sm:text-xs">
            {activeSubSheet === 0 ? leftFolioNumber : rightFolioNumber}
          </span>
        </div>

        {/* 2-Page Sub Tab Switcher for Tablet */}
        {rightContent && (
          <div className="flex items-center gap-1 bg-[#ebebe3] p-1 rounded-xs border border-[#d5d5cd]">
            <button
              type="button"
              onClick={() => setActiveSubSheet(0)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1 rounded-xs font-semibold text-[11px] transition-all cursor-pointer',
                activeSubSheet === 0
                  ? 'bg-[#111111] text-[#fbfbfa] shadow-xs'
                  : 'text-[#4b4b4b] hover:text-[#111111]'
              )}
            >
              <BookOpen className="w-3 h-3" />
              <span>Page 1: Overview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSubSheet(1)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1 rounded-xs font-semibold text-[11px] transition-all cursor-pointer',
                activeSubSheet === 1
                  ? 'bg-[#111111] text-[#fbfbfa] shadow-xs'
                  : 'text-[#4b4b4b] hover:text-[#111111]'
              )}
            >
              <Layers className="w-3 h-3" />
              <span>Page 2: Pricing &amp; SOW</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Tablet Sheet Animated Body */}
      <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-4 my-auto pr-1">
        <AnimatePresence mode="wait">
          {activeSubSheet === 0 ? (
            <motion.div
              key="tablet-left"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {leftContent}
            </motion.div>
          ) : (
            <motion.div
              key="tablet-right"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {rightContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Tablet Footer with Swipe Indicator */}
      <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-3 text-[10px] font-mono text-[#4b4b4b] select-none">
        <div className="flex items-center gap-2">
          <span className="text-[#c23b22] font-bold">●</span>
          <span>USAP KIRI / KANAN UNTUK MEMBALIK</span>
        </div>
        <div>
          <span>TABLET VIEW · GLOBAL EDGE CLOUD</span>
        </div>
      </div>

      {/* Dog Ear Peel Navigation */}
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
          label="Page 2: Pricing &amp; SOW →"
        />
      )}
      {activeSubSheet === 1 && (
        <DogEarPeel
          position="bottom-left"
          onClick={() => setActiveSubSheet(0)}
          label="← Page 1: Overview"
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
