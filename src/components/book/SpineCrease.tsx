import React from 'react';
import { cn } from '@/lib/cn';

export interface SpineCreaseProps {
  className?: string;
}

export function SpineCrease({ className }: SpineCreaseProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 pointer-events-none z-20 flex justify-center',
        className
      )}
    >
      {/* Central binding seam hairline */}
      <div className="w-[1px] h-full bg-[#111111]/15" />
      {/* Dynamic left and right shadow gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/8 via-transparent to-black/8" />
    </div>
  );
}
