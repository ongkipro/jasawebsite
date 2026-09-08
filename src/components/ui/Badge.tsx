import React from 'react';
import { cn } from '@/lib/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'vermillion' | 'outline' | 'mono';
  size?: 'sm' | 'md';
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-[#ebebe3] text-[#111111] border border-[#d5d5cd]',
    vermillion: 'bg-[#c23b22]/10 text-[#c23b22] border border-[#c23b22]/25',
    outline: 'bg-transparent text-[#4b4b4b] border border-[#d5d5cd]',
    mono: 'bg-[#111111] text-[#fbfbfa] font-mono',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider uppercase',
    md: 'text-xs px-2.5 py-1 tracking-wider uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium rounded-sm select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
