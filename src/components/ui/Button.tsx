import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'vermillion' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-mono font-medium tracking-wide transition-all duration-150 rounded-sm select-none cursor-pointer active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-[#111111] text-[#fbfbfa] hover:bg-[#2a2a2a] border border-[#111111] shadow-sm',
    secondary:
      'bg-[#f4f4ef] text-[#111111] hover:bg-[#ebebe3] border border-[#d5d5cd]',
    vermillion:
      'bg-[#c23b22] text-[#ffffff] hover:bg-[#9c2a15] border border-[#c23b22] shadow-sm',
    ghost:
      'bg-transparent text-[#111111] hover:bg-[#ebebe3]/60 border border-transparent',
    outline:
      'bg-transparent text-[#111111] hover:bg-[#f4f4ef] border border-[#111111]',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
