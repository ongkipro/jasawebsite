'use client';

import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/cn';

export interface SheetTurnerProps {
  currentKey: string | number;
  direction?: 'next' | 'prev';
  children: React.ReactNode;
  className?: string;
}

export function SheetTurner({
  currentKey,
  direction = 'next',
  children,
  className,
}: SheetTurnerProps) {
  const prefersReducedMotion = useReducedMotion();

  // Motion variants with hardware-accelerated GPU transforms only
  const variants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (dir: 'next' | 'prev') => ({
          rotateY: dir === 'next' ? 45 : -45,
          opacity: 0,
          scale: 0.98,
        }),
        center: {
          rotateY: 0,
          opacity: 1,
          scale: 1,
        },
        exit: (dir: 'next' | 'prev') => ({
          rotateY: dir === 'next' ? -45 : 45,
          opacity: 0,
          scale: 0.98,
        }),
      };

  return (
    <div
      className={cn('relative w-full h-full perspective-[1400px]', className)}
      style={{ perspective: '1400px' }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentKey}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.35,
            ease: [0.25, 1, 0.5, 1], // Smooth cubic-bezier spring curve
          }}
          className="w-full h-full transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
