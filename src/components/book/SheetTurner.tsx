'use client';

import React, { useSyncExternalStore } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/cn';

export interface SheetTurnerProps {
  currentKey: string | number;
  direction?: 'next' | 'prev';
  children: React.ReactNode;
  className?: string;
}

function subscribeDesktop(callback: () => void) {
  const mql = window.matchMedia('(min-width: 1024px)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getDesktopSnapshot() {
  return window.matchMedia('(min-width: 1024px)').matches;
}

function getServerSnapshot() {
  return true;
}

const emptySubscribe = () => () => {};
const getClientMounted = () => true;
const getServerMounted = () => false;

export function SheetTurner({
  currentKey,
  direction = 'next',
  children,
  className,
}: SheetTurnerProps) {
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    getServerSnapshot
  );
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    getClientMounted,
    getServerMounted
  );

  // Responsive glide offsets: subtle tactile displacement
  // Desktop: +36px / -24px, Mobile & Tablet: +24px / -16px
  const enterOffset = isDesktop ? 36 : 24;
  const exitOffset = isDesktop ? 24 : 16;

  // Luxury Editorial Paper Glide variants: 2D GPU composited, 100% crisp typography
  const variants = prefersReducedMotion
    ? {
        enter: { opacity: 0, x: 0, zIndex: 2 },
        center: { opacity: 1, x: 0, zIndex: 2, pointerEvents: 'auto' as const },
        exit: { opacity: 0, x: 0, zIndex: 1, pointerEvents: 'none' as const },
      }
    : {
        enter: (dir: 'next' | 'prev') => ({
          x: dir === 'next' ? enterOffset : -enterOffset,
          opacity: 0,
          zIndex: 2,
        }),
        center: {
          x: 0,
          opacity: 1,
          zIndex: 2,
          pointerEvents: 'auto' as const,
        },
        exit: (dir: 'next' | 'prev') => ({
          x: dir === 'next' ? -exitOffset : exitOffset,
          opacity: 0,
          zIndex: 1,
          pointerEvents: 'none' as const,
        }),
      };

  const transition = prefersReducedMotion
    ? { duration: 0.15, ease: 'linear' as const }
    : {
        duration: 0.30,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Luxury Apple/Kinfolk cubic-bezier
      };

  return (
    <div
      className={cn(
        'relative w-full h-full grid grid-cols-1 grid-rows-1 overflow-hidden select-text',
        className
      )}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentKey}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="col-start-1 row-start-1 w-full h-full min-h-0 flex flex-col relative"
          style={{
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Paper Edge Drop Shadow (Leading edge elevation during glide) */}
          {isMounted && !prefersReducedMotion && (
            <motion.div
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute inset-y-0 z-20',
                direction === 'next'
                  ? 'left-0 w-10 -translate-x-full bg-gradient-to-l from-black/16 via-black/8 to-transparent'
                  : 'right-0 w-10 translate-x-full bg-gradient-to-r from-black/16 via-black/8 to-transparent'
              )}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 0.30,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          )}

          {/* Spine Shadow Sweep: Central gutter depth flash as sheet lands flat on desktop spread */}
          {isMounted && !prefersReducedMotion && (
            <motion.div
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 z-30 bg-gradient-to-r from-transparent via-black/[0.12] to-transparent mix-blend-multiply"
              initial={{ opacity: 0, scaleX: 1.4 }}
              animate={{ opacity: [0, 0.28, 0], scaleX: [1.4, 1, 0.75] }}
              transition={{
                duration: 0.34,
                times: [0, 0.45, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          )}

          {/* Spine Shadow Sweep: Binding edge settle on mobile & tablet */}
          {isMounted && !prefersReducedMotion && (
            <motion.div
              aria-hidden="true"
              className={cn(
                'block lg:hidden pointer-events-none absolute inset-y-0 z-30 mix-blend-multiply w-10',
                direction === 'next'
                  ? 'left-0 bg-gradient-to-r from-black/[0.14] via-black/[0.05] to-transparent'
                  : 'right-0 bg-gradient-to-l from-black/[0.14] via-black/[0.05] to-transparent'
              )}
              initial={{ opacity: 0, scaleX: 1.3 }}
              animate={{ opacity: [0, 0.24, 0], scaleX: [1.3, 1, 0.8] }}
              transition={{
                duration: 0.34,
                times: [0, 0.45, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          )}

          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
