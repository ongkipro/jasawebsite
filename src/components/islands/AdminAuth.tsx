// Auth admin panel (login + register) — toggle mode, show/hide password, kode undangan.
import { useState } from 'react';

type Mode = 'login' | 'register';

const Eye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const EyeOff = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);
const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function AdminAuth({ initialMode = 'login' }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPw, setShowPw] = useState(false);
  const isRegister = mode === 'register';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(`/api/panel/auth/${mode}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        window.location.href = '/panel';
        return;
      }
      setError(data.error ?? 'Terjadi kesalahan. Coba lagi.');
    } catch {
      setError('Tidak bisa terhubung ke server.');
    } finally {
      setLoading(false);
    }
  }

  const input =
    'w-full border-0 border-b border-line bg-transparent pb-2 pt-1 text-base text-text outline-none transition-colors placeholder:text-muted/50 focus:border-accent';

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 flex gap-1 rounded-full border border-line p-1 text-sm font-medium">
        <button type="button" onClick={() => { setMode('login'); setError(''); }} className={`flex-1 rounded-full py-2 transition-colors ${!isRegister ? 'bg-text text-bg' : 'text-muted hover:text-text'}`}>
          Masuk
        </button>
        <button type="button" onClick={() => { setMode('register'); setError(''); }} className={`flex-1 rounded-full py-2 transition-colors ${isRegister ? 'bg-text text-bg' : 'text-muted hover:text-text'}`}>
          Daftar
        </button>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        {isRegister && <input name="name" required placeholder="Nama admin" className={input} autoComplete="name" />}
        <input name="email" type="email" required placeholder="Email" className={input} autoComplete="email" />

        <div className="relative">
          <input
            name="password"
            type={showPw ? 'text' : 'password'}
            required
            minLength={isRegister ? 8 : undefined}
            placeholder={isRegister ? 'Password (min. 8 karakter)' : 'Password'}
            className={`${input} pr-9`}
            autoComplete={isRegister ? 'new-password' : 'current-password'}
          />
          <button type="button" onClick={() => setShowPw((s) => !s)} className="absolute bottom-2 right-0 text-muted transition-colors hover:text-text" aria-label={showPw ? 'Sembunyikan password' : 'Lihat password'} tabIndex={-1}>
            {showPw ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {isRegister && <input name="invite" required placeholder="Kode undangan admin" className={input} autoComplete="off" />}

        {error && (
          <p role="alert" className="border-l-2 border-accent bg-surface/60 py-2 pl-3 text-sm text-accent">{error}</p>
        )}

        <button type="submit" disabled={loading} className="btn-fill mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-text px-7 py-3.5 font-medium text-bg disabled:opacity-70">
          {loading ? (<><Spinner /> Memproses…</>) : isRegister ? 'Daftar admin ↗' : 'Masuk ↗'}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        {isRegister ? 'Sudah punya akun admin? ' : 'Belum punya akun admin? '}
        <button type="button" className="link-line text-text" onClick={() => { setMode(isRegister ? 'login' : 'register'); setError(''); }}>
          {isRegister ? 'Masuk' : 'Daftar'}
        </button>
      </p>
    </div>
  );
}
