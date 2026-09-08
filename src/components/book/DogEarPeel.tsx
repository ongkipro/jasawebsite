'use client';

import React from 'react';
import { cn } from '@/lib/cn';

export interface DogEarPeelProps {
  position?: 'bottom-right' | 'bottom-left';
  onClick?: () => void;
  label?: string;
  className?: string;
}

export function DogEarPeel({
  position = 'bottom-right',
  onClick,
  label = 'Turn Page →',
  className,
}: DogEarPeelProps) {
  const isRight = position === 'bottom-right';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'group absolute bottom-0 z-30 p-2 text-xs font-mono select-none cursor-pointer focus:outline-none',
        isRight ? 'right-0' : 'left-0',
        className
      )}
    >
      <div
        className={cn(
          'relative w-8 h-8 transition-all duration-200 ease-out group-hover:w-11 group-hover:h-11',
          isRight ? 'ml-auto' : 'mr-auto'
        )}
      >
        {/* Paper fold triangle */}
        <div
          className={cn(
            'absolute inset-0 bg-[#ebebe3] border border-[#d5d5cd] shadow-md transition-transform duration-200 group-hover:scale-105',
            isRight
              ? 'rounded-tl-xs origin-bottom-right'
              : 'rounded-tr-xs origin-bottom-left'
          )}
          style={{
            clipPath: isRight
              ? 'polygon(100% 0, 0 100%, 100% 100%)'
              : 'polygon(0 0, 0 100%, 100% 100%)',
          }}
        />
        {/* Corner shadow */}
        <div
          className={cn(
            'absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity',
            isRight
              ? 'bg-gradient-to-tl from-black to-transparent'
              : 'bg-gradient-to-tr from-black to-transparent'
          )}
          style={{
            clipPath: isRight
              ? 'polygon(100% 0, 0 100%, 100% 100%)'
              : 'polygon(0 0, 0 100%, 100% 100%)',
          }}
        />
      </div>
    </button>
  );
}
