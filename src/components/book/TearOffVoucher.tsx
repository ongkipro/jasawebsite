'use client';

import React, { useState } from 'react';
import { Scissors, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { buildWhatsAppUrl, type WhatsAppIntentParams } from '@/lib/whatsapp';
import { InkStamp } from '@/components/ui/InkStamp';

export interface TearOffVoucherProps {
  title: string;
  code: string;
  perks: string;
  startingPrice?: string;
  intentParams?: WhatsAppIntentParams;
  className?: string;
}

export function TearOffVoucher({
  title,
  code,
  perks,
  startingPrice,
  intentParams = {},
  className,
}: TearOffVoucherProps) {
  const [isTorn, setIsTorn] = useState(false);

  const waUrl = buildWhatsAppUrl({
    ref: code,
    ...intentParams,
  });

  const handleTear = () => {
    setIsTorn(true);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsTorn(false);
    }, 350);
  };

  return (
    <div
      className={cn(
        'group relative my-2.5 sm:my-3 p-3 sm:p-3.5 bg-[#fbfbfa] border-2 border-dashed border-[#111111]/30 rounded-xs transition-all duration-200 hover:border-[#111111]/70 hover:shadow-md hover-voucher-jiggle',
        isTorn && 'opacity-75 translate-y-1 scale-[0.99]',
        className
      )}
    >
      {/* Top Perforation guide with Scissors */}
      <div className="flex flex-wrap items-center justify-between gap-1 pb-1.5 border-b border-dashed border-[#111111]/20 text-[10px] font-mono text-[#4b4b4b]">
        <div className="flex items-center gap-1.5 uppercase tracking-wider font-semibold min-w-0">
          <Scissors className="w-3 h-3 text-[#c23b22] shrink-0" />
          <span className="truncate">KONSULTASI KEBUTUHAN &amp; DRAFT SOW</span>
        </div>
        <div className="font-mono text-[9px] bg-[#111111] text-[#fbfbfa] px-1.5 py-0.5 rounded-xs font-bold shrink-0">
          KODE: {code}
        </div>
      </div>

      {/* Main Voucher Body */}
      <div className="pt-2 pb-1.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="space-y-0.5 max-w-sm min-w-0">
          <div className="font-serif text-sm sm:text-base font-bold text-[#111111] tracking-tight">
            {title}
          </div>
          <div className="font-sans text-[11px] text-[#4b4b4b] leading-tight">
            {perks}
          </div>
          {startingPrice && (
            <div className="font-mono text-[11px] font-semibold text-[#c23b22] pt-0.5">
              Simulasi: {startingPrice}
            </div>
          )}
        </div>

        {/* Small ink stamp */}
        <div className="hidden sm:block shrink-0">
          <InkStamp text="RESMI" subtext="GARANSI SOW" date="2026" className="scale-75 origin-right" />
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="mt-2 pt-2 border-t border-dashed border-[#111111]/20 flex flex-wrap items-center justify-between gap-1.5">
        <span className="font-mono text-[9.5px] text-[#4b4b4b] tracking-wider hidden sm:inline">
          POTONG DI SINI &amp; KLAIM SESI EVALUASI SOW
        </span>
        <button
          type="button"
          onClick={handleTear}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-1.5 bg-[#111111] hover:bg-[#c23b22] text-[#fbfbfa] font-mono text-[11px] font-semibold tracking-wider uppercase transition-colors duration-150 rounded-xs shadow-sm cursor-pointer"
        >
          <Scissors className="w-3.5 h-3.5" />
          <span>Robek &amp; Konsultasi SOW</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
