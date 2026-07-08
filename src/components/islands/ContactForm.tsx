// Form kontak (PRD §8.7) → POST /api/contact (§32.2)
// Honeypot: field "company_website" harus kosong.
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
      <div role="status" className="rounded-xl bg-surface p-8 text-center">
        <p className="font-display text-2xl font-semibold text-wa">Terkirim! 🎉</p>
        <p className="mt-2 text-muted">
          Terima kasih — tim kami akan menghubungi Anda dalam 1×24 jam kerja.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-muted">Nama *</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-surface bg-bg px-4 py-3 focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-sm text-muted">No. WhatsApp *</span>
          <input
            name="contact"
            type="tel"
            required
            autoComplete="tel"
            placeholder="08xxxxxxxxxx"
            className="mt-1 w-full rounded-lg border border-surface bg-bg px-4 py-3 focus:border-accent"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm text-muted">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-surface bg-bg px-4 py-3 focus:border-accent"
        />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-muted">Layanan</span>
          <select
            name="service"
            className="mt-1 w-full rounded-lg border border-surface bg-bg px-4 py-3 focus:border-accent"
          >
            <option value="">— pilih —</option>
            {SERVICES.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-muted">Budget</span>
          <select
            name="budget_range"
            className="mt-1 w-full rounded-lg border border-surface bg-bg px-4 py-3 focus:border-accent"
          >
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
        <span className="text-sm text-muted">Ceritakan kebutuhan Anda *</span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-surface bg-bg px-4 py-3 focus:border-accent"
        />
      </label>
      {/* Honeypot — disembunyikan dari manusia */}
      <input
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {state.status === 'error' && (
        <p role="alert" className="text-sm text-accent">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={state.status === 'loading'}
        className="w-full rounded-full bg-wa px-8 py-4 font-medium text-bg transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
      >
        {state.status === 'loading' ? 'Mengirim…' : 'Kirim'}
      </button>
    </form>
  );
}
