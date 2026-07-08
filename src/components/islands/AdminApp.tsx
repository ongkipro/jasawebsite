// Admin skeleton (PRD §30) — login + leads inbox.
// Fase 2: migrasi penuh ke shadcn/ui (DataTable, Dialog, dst.) — struktur sudah disiapkan.
import { useEffect, useState } from 'react';

type Lead = {
  id: string;
  name: string;
  contact: string;
  email: string | null;
  service: string | null;
  budgetRange: string | null;
  message: string | null;
  status: string;
  createdAt: number;
};

const STATUSES = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'] as const;

const STATUS_COLOR: Record<string, string> = {
  new: 'bg-accent-2/20 text-accent-2',
  contacted: 'bg-yellow-500/20 text-yellow-400',
  qualified: 'bg-purple-500/20 text-purple-400',
  proposal: 'bg-orange-500/20 text-orange-400',
  won: 'bg-wa/20 text-wa',
  lost: 'bg-muted/20 text-muted',
};

function Login({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = (await res.json()) as { ok: boolean; error?: { message: string } };
    setLoading(false);
    if (json.ok) onSuccess();
    else setError(json.error?.message ?? 'Login gagal');
  }

  return (
    <div className="mx-auto max-w-sm py-20">
      <h1 className="font-display text-2xl font-semibold">Admin Login</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          autoComplete="email"
          className="w-full rounded-lg border border-surface bg-bg px-4 py-3"
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          autoComplete="current-password"
          className="w-full rounded-lg border border-surface bg-bg px-4 py-3"
        />
        {error && (
          <p role="alert" className="text-sm text-accent">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-accent px-4 py-3 font-medium text-bg disabled:opacity-60"
        >
          {loading ? 'Masuk…' : 'Masuk'}
        </button>
      </form>
    </div>
  );
}

function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/leads');
    const json = (await res.json()) as { ok: boolean; data?: { items: Lead[] } };
    if (json.ok && json.data) setLeads(json.data.items);
    setLoading(false);
  }

  useEffect(() => {
    void load();
  }, []);

  async function setStatus(id: string, status: string) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
  }

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    location.reload();
  }

  return (
    <div className="mx-auto max-w-6xl py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold">Leads</h1>
        <button onClick={logout} className="text-sm text-muted hover:text-text">
          Keluar
        </button>
      </div>
      {loading ? (
        <p className="mt-10 text-muted">Memuat…</p>
      ) : leads.length === 0 ? (
        <p className="mt-10 text-muted">Belum ada lead. 🎣</p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-muted">
              <tr>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Kontak</th>
                <th className="px-4 py-3">Layanan</th>
                <th className="px-4 py-3">Budget</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Masuk</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} className="border-t border-surface">
                  <td className="px-4 py-3 font-medium">{l.name}</td>
                  <td className="px-4 py-3">{l.contact}</td>
                  <td className="px-4 py-3 text-muted">{l.service ?? '—'}</td>
                  <td className="px-4 py-3 text-muted">{l.budgetRange ?? '—'}</td>
                  <td className="px-4 py-3">
                    <select
                      value={l.status}
                      onChange={(e) => void setStatus(l.id, e.target.value)}
                      className={`rounded-full px-2 py-1 text-xs ${STATUS_COLOR[l.status] ?? ''} bg-bg border border-surface`}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {new Date(l.createdAt * 1000).toLocaleDateString('id-ID')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function AdminApp({ authed }: { authed: boolean }) {
  const [isAuthed, setIsAuthed] = useState(authed);
  return isAuthed ? <Leads /> : <Login onSuccess={() => setIsAuthed(true)} />;
}
