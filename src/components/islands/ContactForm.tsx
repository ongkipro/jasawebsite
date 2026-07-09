// Form kontak (PRD §8.7) → POST /api/contact (§32.2)
// Minimalis: field garis-bawah, tanpa box. Honeypot: "company_website" harus kosong.
import { useState } from 'react';

const SERVICES = [
  ['website-toko-online', 'Website Toko Online'],
  ['shopify-development', 'Shopify Development'],
  ['company-profile', 'Company Profile'],
  ['website-sales', 'Website Sales'],
  ['custom-web', 'Custom Web'],
  ['meta-ads', 'Meta Ads'],
  ['google-ads', 'Google Ads'],
] as const;

const BUDGETS = ['< 5jt', '5–10jt', '10–25jt', '25–50jt', '> 50jt'] as const;

type State = { status: 'idle' | 'loading' | 'success' | 'error'; message?: string };

// text-base (16px) → cegah iOS auto-zoom saat fokus di mobile
const fieldCls =
  'mt-2 w-full border-0 border-b border-line bg-transparent pb-2 text-base outline-none transition-colors placeholder:text-muted/50 focus:border-accent';
const labelCls = 'text-xs uppercase tracking-[0.15em] text-muted';

export default function ContactForm() {
  const [state, setState] = useState<State>({ status: 'idle' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: 'loading' });
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: { message: string } };
      if (json.ok) {
        form.reset();
        setState({ status: 'success' });
      } else {
        setState({ status: 'error', message: json.error?.message ?? 'Terjadi kesalahan.' });
      }
    } catch {
      setState({ status: 'error', message: 'Koneksi bermasalah. Coba lagi atau hubungi via WhatsApp.' });
    }
  }

  if (state.status === 'success') {
    return (
      <div role="status" className="border-t border-line pt-8">
        <p className="font-display text-3xl font-semibold">Terkirim. 🎉</p>
        <p className="mt-3 max-w-sm text-muted">
          Terima kasih — tim kami menghubungi Anda dalam 1×24 jam kerja.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Nama *</span>
          <input name="name" required autoComplete="name" className={fieldCls} />
        </label>
        <label className="block">
          <span className={labelCls}>No. WhatsApp *</span>
          <input name="contact" type="tel" required autoComplete="tel" placeholder="08xxxxxxxxxx" className={fieldCls} />
        </label>
      </div>

      <label className="block">
        <span className={labelCls}>Email</span>
        <input name="email" type="email" autoComplete="email" className={fieldCls} />
      </label>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Layanan</span>
          <select name="service" className={fieldCls}>
            <option value="">— pilih —</option>
            {SERVICES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelCls}>Budget</span>
          <select name="budget_range" className={fieldCls}>
            <option value="">— pilih —</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={labelCls}>Ceritakan kebutuhan Anda *</span>
        <textarea name="message" required rows={3} className={`${fieldCls} resize-none`} />
      </label>

      {/* Honeypot — disembunyikan dari manusia */}
      <input name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {state.status === 'error' && (
        <p role="alert" className="text-sm text-accent">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={state.status === 'loading'}
        className="group inline-flex items-center gap-2 font-display text-xl font-semibold transition-colors hover:text-accent disabled:opacity-60"
      >
        {state.status === 'loading' ? 'Mengirim…' : 'Kirim pesan'}
        <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
