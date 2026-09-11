'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import foliosData from '@/data/folios.json';

export interface BookmarkRibbonProps {
  currentSpreadIndex: number;
  onSelectSpread: (spreadIndex: number) => void;
  className?: string;
}

export function BookmarkRibbon({
  currentSpreadIndex,
  onSelectSpread,
  className,
}: BookmarkRibbonProps) {
  return (
    <nav
      aria-label="Bookmark Index Tabs"
      className={cn(
        'hidden lg:flex flex-col gap-1 absolute right-[-28px] top-12 z-40 select-none',
        className
      )}
    >
      {foliosData.map((folio, index) => {
        const isActive = currentSpreadIndex === index;
        const isShopify = folio.slug === 'shopify';
        const targetUrl = folio.slug === 'cover' ? '/' : `/folio/${folio.slug}`;

        return (
          <Link
            key={folio.id}
            href={targetUrl}
            onClick={(e) => {
              if (
                !e.metaKey &&
                !e.ctrlKey &&
                !e.shiftKey &&
                !e.altKey &&
                e.button === 0
              ) {
                e.preventDefault();
                onSelectSpread(index);
              }
            }}
            title={folio.title}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'group relative flex items-center justify-center font-mono font-bold text-[9px] tracking-wider transition-all duration-200 cursor-pointer rounded-r-xs',
              isShopify
                ? isActive
                  ? 'bg-[#111111] text-[#fbfbfa] w-9 min-h-[52px] translate-x-1 shadow-md border-r-2 border-r-amber-400'
                  : 'bg-[#f5f5ee] text-[#111111] hover:bg-[#ebebe3] w-8 min-h-[48px] hover:translate-x-1 border-r border-t border-b border-[#111111]/40 font-extrabold shadow-2xs'
                : isActive
                  ? 'bg-[#111111] text-[#fbfbfa] w-8.5 min-h-[46px] translate-x-1 shadow-md'
                  : 'bg-[#ebebe3] text-[#4b4b4b] hover:bg-[#d5d5cd] hover:text-[#111111] w-7 min-h-[42px] hover:translate-x-1 border-r border-t border-b border-[#d5d5cd]'
            )}
          >
            {/* Vertical rotated text */}
            <span className="rotate-90 whitespace-nowrap flex items-center gap-0.5">
              {isShopify && <span className="text-amber-500 text-[8px]">★</span>}
              <span>{folio.ribbonLabel}</span>
            </span>

            {/* Hover tooltip popping out to the LEFT towards book interior */}
            <div className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#111111] text-[#fbfbfa] text-[10px] font-mono whitespace-nowrap rounded-xs shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-150 z-50 flex items-center gap-1.5">
              {isShopify && <span className="text-amber-400 font-bold">★ FEATURED ·</span>}
              <span>{folio.title}</span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[5px] border-l-[#111111]" />
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
