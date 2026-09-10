'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { SpineCrease } from '@/components/book/SpineCrease';
import { DogEarPeel } from '@/components/book/DogEarPeel';

export interface SpreadViewProps {
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

export function SpreadView({
  leftContent,
  rightContent,
  leftFolioNumber = 'FOLIO 00',
  rightFolioNumber = 'FOLIO 01',
  onPrevPage,
  onNextPage,
  hasPrev = true,
  hasNext = true,
  className,
}: SpreadViewProps) {
  return (
    <div
      className={cn(
        'relative w-full max-w-7xl 2xl:max-w-[1400px] mx-auto h-full flex-1 min-h-0 flex bg-[#fbfbfa] border border-[#d5d5cd] rounded-sm book-elevation select-text overflow-hidden',
        className
      )}
    >
      {/* Central spine crease depth shadow */}
      <SpineCrease />

      {/* LEFT PAGE (HALAMAN KIRI) */}
      <div className="relative w-1/2 h-full flex flex-col justify-between p-5 lg:p-6 xl:p-8 border-r border-[#e5e5df] spine-crease-left">
        {/* Top Folio Header Left */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-[#e5e5df] pb-2.5 text-[11px] font-mono text-[#4b4b4b] select-none">
          <span className="font-semibold text-[#111111] tracking-wider">
            ONG-OS · LIVING FOLIO
          </span>
          <span className="tracking-widest">{leftFolioNumber}</span>
        </div>

        {/* Content Body Left */}
        <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-4 my-auto pr-1">
          {leftContent}
        </div>

        {/* Bottom Folio Footer Left */}
        <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2.5 text-[10px] font-mono text-[#4b4b4b] select-none">
          <span>● STATIC HTML</span>
          <span>
            OFFICIALLY ENGINEERED BY{' '}
            <a
              href="https://ongki.pro"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-bold underline underline-offset-2 hover:text-[#c23b22] transition-colors"
            >
              ONGKI.PRO
            </a>{' '}
            © 2026
          </span>
        </div>

        {/* Bottom-Left Corner Dog Ear for Previous Page */}
        {hasPrev && onPrevPage && (
          <DogEarPeel
            position="bottom-left"
            onClick={onPrevPage}
            label="← Previous Spread"
          />
        )}
      </div>

      {/* RIGHT PAGE (HALAMAN KANAN) */}
      <div className="relative w-1/2 h-full flex flex-col justify-between p-5 lg:p-6 xl:p-8 spine-crease-right">
        {/* Top Folio Header Right */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-[#e5e5df] pb-2.5 text-[11px] font-mono text-[#4b4b4b] select-none">
          <span className="tracking-widest">{rightFolioNumber}</span>
          <span className="text-[#c23b22] font-semibold tracking-wider">
            SPECIFICATIONS &amp; TIERS
          </span>
        </div>

        {/* Content Body Right */}
        <div className="flex-1 min-h-0 overflow-y-auto paper-scrollbar py-4 my-auto pl-1">
          {rightContent}
        </div>

        {/* Bottom Folio Footer Right */}
        <div className="flex-shrink-0 flex items-center justify-between border-t border-[#e5e5df] pt-2.5 text-[10px] font-mono text-[#4b4b4b] select-none">
          <span>100% KEPEMILIKAN PENUH</span>
          <span>GLOBAL EDGE CLOUD</span>
        </div>

        {/* Bottom-Right Corner Dog Ear for Next Page */}
        {hasNext && onNextPage && (
          <DogEarPeel
            position="bottom-right"
            onClick={onNextPage}
            label="Next Spread →"
          />
        )}
      </div>
    </div>
  );
}
