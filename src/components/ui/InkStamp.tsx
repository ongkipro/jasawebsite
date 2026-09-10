import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface InkStampProps {
  text?: string;
  subtext?: string;
  date?: string;
  className?: string;
}

export function InkStamp({
  text = 'WEB ENGINEERING',
  subtext = 'STATIC HTML · GLOBAL EDGE CLOUD',
  date = '2026',
  className,
}: InkStampProps) {
  return (
    <div
      className={cn(
        'inline-flex flex-col items-center justify-center p-2.5 border-2 border-[#c23b22]/80 text-[#c23b22] font-mono select-none rounded-xs transform -rotate-3 hover:rotate-0 transition-transform duration-300',
        className
      )}

    >
      <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold border-b border-[#c23b22]/40 pb-1 w-full justify-center">
        <Star className="w-2.5 h-2.5 fill-current shrink-0" />
        <span>{text}</span>
        <Star className="w-2.5 h-2.5 fill-current shrink-0" />
      </div>
      <div className="text-[8px] tracking-wider uppercase font-semibold pt-1">
        {subtext}
      </div>
      <div className="text-[7px] tracking-widest text-[#9c2a15] pt-0.5">
        STUDIO · {date} · ONG-OS
      </div>
    </div>
  );
}
