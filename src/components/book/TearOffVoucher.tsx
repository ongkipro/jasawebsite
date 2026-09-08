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
        'group relative my-4 p-4 sm:p-5 bg-[#fbfbfa] border-2 border-dashed border-[#111111]/30 rounded-xs transition-all duration-200 hover:border-[#111111]/70 hover:shadow-md hover-voucher-jiggle',
        isTorn && 'opacity-75 translate-y-1 scale-[0.99]',
        className
      )}
    >
      {/* Top Perforation guide with Scissors */}
      <div className="flex items-center justify-between pb-2 border-b border-dashed border-[#111111]/20 text-[10px] font-mono text-[#4b4b4b]">
        <div className="flex items-center gap-1.5 uppercase tracking-wider font-semibold">
          <Scissors className="w-3 h-3 text-[#c23b22]" />
          <span>KUPON SOBEK KONSULTASI RESMI</span>
        </div>
        <div className="font-mono text-[9px] bg-[#111111] text-[#fbfbfa] px-1.5 py-0.5 rounded-xs">
          KODE: {code}
        </div>
      </div>

      {/* Main Voucher Body */}
      <div className="pt-3 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-1 max-w-sm">
          <div className="font-serif text-base sm:text-lg font-bold text-[#111111] tracking-tight">
            {title}
          </div>
          <div className="font-sans text-xs text-[#4b4b4b] leading-relaxed">
            {perks}
          </div>
          {startingPrice && (
            <div className="font-mono text-xs font-semibold text-[#c23b22] pt-0.5">
              Investasi: {startingPrice}
            </div>
          )}
        </div>

        {/* Small ink stamp */}
        <div className="hidden sm:block shrink-0">
          <InkStamp text="RESMI" subtext="GARANSI SOW" date="2026" className="scale-75 origin-right" />
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="mt-3 pt-2.5 border-t border-dashed border-[#111111]/20 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#4b4b4b] tracking-wider hidden sm:inline">
          POTONG DI SINI & HUBUNGI LEAD ENGINEER
        </span>
        <button
          type="button"
          onClick={handleTear}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#111111] hover:bg-[#c23b22] text-[#fbfbfa] font-mono text-xs font-semibold tracking-wider uppercase transition-colors duration-150 rounded-xs shadow-sm cursor-pointer"
        >
          <span>✂️ Robek & Kirim WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
