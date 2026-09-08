'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '@/types/portfolio';
import { Badge } from '@/components/ui/Badge';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';

export interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#fbfbfa] border border-[#d5d5cd] shadow-2xl rounded-xs p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Galeri"
          className="absolute top-5 right-5 p-2 text-[#4b4b4b] hover:text-[#111111] hover:bg-[#ebebe3] rounded-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-[#e5e5df] pb-4 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="mono">{item.categoryLabel}</Badge>
            <Badge variant="outline">{item.industry}</Badge>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
            {item.clientName}
          </h2>
        </div>

        {/* Full Image Showcase Frame */}
        <div className="my-5 overflow-hidden rounded-xs border border-[#d5d5cd] bg-[#111111] shadow-lg">
          {/* Browser Bar */}
          <div className="flex items-center justify-between border-b border-[#2d2d2d] bg-[#1a1a1a] px-3.5 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="font-mono text-[10px] text-[#888888] truncate max-w-xs sm:max-w-md">
              {item.liveUrl || `https://jasawebsite.co/portfolio/${item.id}`}
            </div>
            <div className="w-8" />
          </div>
          <div className="relative max-h-[440px] overflow-y-auto bg-[#0a0a0a]">
            <img
              src={item.desktopImage}
              alt={`${item.clientName} Full Screenshot`}
              width={1200}
              height={700}
              className="w-full h-auto object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {item.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs"
            >
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#4b4b4b]">
                {metric.label}
              </div>
              <div className="font-serif text-2xl font-bold text-[#c23b22] my-0.5">
                {metric.value}
              </div>
              {metric.detail && (
                <div className="font-sans text-xs text-[#4b4b4b]">
                  {metric.detail}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Challenge and Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-xs sm:text-sm leading-relaxed">
          <div className="space-y-2 p-4 bg-[#ebebe3]/40 border border-[#e5e5df] rounded-xs">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#c23b22] flex items-center gap-1.5">
              <span>●</span>
              <span>Tantangan Bisnis Klien</span>
            </div>
            <p className="text-[#4b4b4b]">{item.challenge}</p>
          </div>

          <div className="space-y-2 p-4 bg-[#f4f4ef] border border-[#e5e5df] rounded-xs">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
              <span>Solusi Rekayasa JasaWebsite.co by ONG</span>
            </div>
            <p className="text-[#4b4b4b]">{item.solution}</p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="my-5 flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-xs text-[#4b4b4b] mr-2">Arsitektur:</span>
          {item.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="font-mono text-[11px] px-2 py-0.5 bg-[#ebebe3] text-[#111111] rounded-xs border border-[#d5d5cd]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live URL Link if available */}
        {item.liveUrl && (
          <div className="my-4">
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#111111] hover:text-[#c23b22] underline underline-offset-4"
            >
              <span>Kunjungi Website Live ({item.liveUrl})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Tear Off Voucher CTA inside Modal */}
        <div className="mt-6 pt-4 border-t border-[#e5e5df]">
          <TearOffVoucher
            title={`Konsultasi Konsep Serupa: ${item.clientName}`}
            code={item.voucherCode}
            perks="Diskusi Blueprint Arsitektur Mirip Studi Kasus Ini Bersama Lead Engineer"
            intentParams={{
              portfolioTitle: item.clientName,
              ref: item.voucherCode,
            }}
          />
        </div>
      </div>
    </div>
  );
}
