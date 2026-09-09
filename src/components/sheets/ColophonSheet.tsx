import React from 'react';
import { ShieldCheck, Award, PhoneCall, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { InkStamp } from '@/components/ui/InkStamp';
import { TearOffVoucher } from '@/components/book/TearOffVoucher';
import { siteConfig } from '@/data/siteConfig';

export function ColophonSheet() {
  return (
    <article className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e5e5df] pb-2">
        <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest font-bold text-[#111111]">
          <Award className="w-3.5 h-3.5 text-[#c23b22]" />
          <span>STUDIO COLOPHON & INVARIANTS</span>
        </div>
        <Badge variant="mono">FINAL FOLIO</Badge>
      </div>

      <div className="space-y-1">
        <h1 className="font-serif text-2xl font-bold text-[#111111]">
          Komitmen Kejujuran Rekayasa Teknis
        </h1>
        <p className="font-sans text-xs text-[#4b4b4b] leading-relaxed">
          Setiap proyek yang dirilis oleh {siteConfig.name} terikat pada 4 standar keunggulan tanpa kompromi:
        </p>
      </div>

      {/* 4 Invariants Grid */}
      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="p-2.5 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-0.5">
          <div className="font-bold text-[#111111] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>100% Repositori</span>
          </div>
          <p className="text-[10px] text-[#4b4b4b]">
            Source code diserahkan penuh ke GitHub Anda tanpa penguncian.
          </p>
        </div>

        <div className="p-2.5 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-0.5">
          <div className="font-bold text-[#111111] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Global Edge Cloud</span>
          </div>
          <p className="text-[10px] text-[#4b4b4b]">
            Infrastruktur Cloud modern terdistribusi global dengan proteksi keamanan dan uptime 99.9%.
          </p>
        </div>

        <div className="p-2.5 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-0.5">
          <div className="font-bold text-[#111111] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Sub-Detik TTFB</span>
          </div>
          <p className="text-[10px] text-[#4b4b4b]">
            Garansi skor Google Lighthouse 95–100 Hijau di seluruh layar HP.
          </p>
        </div>

        <div className="p-2.5 bg-[#f4f4ef] border border-[#d5d5cd] rounded-xs space-y-0.5">
          <div className="font-bold text-[#111111] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Zero Plugin Bloat</span>
          </div>
          <p className="text-[10px] text-[#4b4b4b]">
            Kode bersih modern tanpa plugin pihak ketiga yang rawan crash.
          </p>
        </div>
      </div>

      {/* Ink Stamp */}
      <div className="py-1 flex justify-center">
        <InkStamp
          text="RESMI & BERGARANSI"
          subtext="100% KEPEMILIKAN PENUH · TANPA BIAYA TERSEMBUNYI"
          date="2026"
        />
      </div>

      {/* Official Customer Service Contact Information */}
      <div className="p-3 bg-[#ebebe3] border border-[#d5d5cd] rounded-xs space-y-2 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[#d5d5cd] pb-1.5">
          <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px]">
            Layanan Pelanggan & Konsultasi Langsung
          </span>
          <span className="text-[10px] text-[#c23b22] font-semibold">CALL / WHATSAPP</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <a
            href={`tel:+${siteConfig.phone}`}
            className="flex items-center justify-between p-2 bg-[#fbfbfa] hover:bg-[#f4f4ef] rounded-xs border border-[#e5e5df] transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#c23b22]" />
              <span className="text-[#4b4b4b]">Call / WA:</span>
            </div>
            <span className="font-bold text-[#111111]">
              {siteConfig.phoneDisplay}
            </span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center justify-between p-2 bg-[#fbfbfa] hover:bg-[#f4f4ef] rounded-xs border border-[#e5e5df] transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#111111]" />
              <span className="text-[#4b4b4b]">Email:</span>
            </div>
            <span className="font-bold text-[#111111]">
              {siteConfig.email}
            </span>
          </a>
        </div>
      </div>

      {/* Master WhatsApp Consultation Voucher */}
      <TearOffVoucher
        title="Konsultasi Strategis Langsung Bersama Lead Engineer"
        code="ONG-MASTER-BRIEF"
        perks="Diskusi Arsitektur Kustom, Pemetaan Kebutuhan Sistem & Estimasi SOW Transparan"
        intentParams={{
          serviceName: 'Konsultasi Master SOW Studio',
          ref: 'ONG-MASTER-BRIEF',
        }}
      />
    </article>
  );
}
