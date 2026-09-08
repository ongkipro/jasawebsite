import React from 'react';
import { cn } from '@/lib/cn';

export interface InkStampProps {
  text?: string;
  subtext?: string;
  date?: string;
  className?: string;
}

export function InkStamp({
  text = 'CERTIFIED ARCHITECTURE',
  subtext = 'LIGHTHOUSE 100/100 · GLOBAL EDGE CLOUD',
  date = '2026',
  className,
}: InkStampProps) {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center p-2.5 border-2 border-[#c23b22]/80 text-[#c23b22] font-mono select-none rounded-xs transform -rotate-3 hover:rotate-0 transition-transform duration-300 opacity-90',
        className
      )}
      style={{
        maskImage:
          'radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0.6) 100%)',
      }}
    >
      <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold border-b border-[#c23b22]/40 pb-1 w-full justify-center">
        <span>★</span>
        <span>{text}</span>
        <span>★</span>
      </div>
      <div className="text-[8px] tracking-wider uppercase font-semibold pt-1">
        {subtext}
      </div>
      <div className="text-[7px] tracking-widest text-[#c23b22]/70 pt-0.5">
        VERIFIED · {date} · ONG-OS
      </div>
    </div>
  );
}
