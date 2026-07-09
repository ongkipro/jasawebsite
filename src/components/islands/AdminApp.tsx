// Admin panel (PRD §30): Dashboard · Leads · Clients · Projects · Invoices.
// UI Tailwind — struktur siap migrasi shadcn/ui penuh (DataTable dst.) nanti.
import { useEffect, useMemo, useState } from 'react';

/* ── Types ── */
type Lead = {
  id: string; name: string; contact: string; email: string | null;
  service: string | null; budgetRange: string | null; message: string | null;
  status: string; createdAt: number;
};
type Client = {
  id: string; name: string; company: string | null; email: string | null;
  phone: string | null; country: string; createdAt: number;
};
type Project = {
  id: string; clientId: string | null; title: string; service: string;
  stack: string | null; status: string; progress: number; pic: string | null; createdAt: number;
};
type Invoice = {
  id: string; number: string; clientId: string | null; projectId: string | null;
  items: string; currency: string; subtotal: number | null; tax: number | null;
  total: number | null; status: string; dueDate: number | null; createdAt: number;
};

const LEAD_STATUSES = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'] as const;
const PROJECT_STATUSES = ['discovery', 'design', 'build', 'review', 'launch', 'done'] as const;
const INVOICE_STATUSES = ['draft', 'sent', 'paid', 'overdue'] as const;
const TABS = ['Dashboard', 'Leads', 'Clients', 'Projects', 'Invoices'] as const;
type Tab = (typeof TABS)[number];

/* ── Helpers ── */
async function api<T>(path: string, init?: RequestInit): Promise<T | null> {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  const json = (await res.json().catch(() => null)) as { ok: boolean; data?: T } | null;
  return json?.ok ? (json.data as T) : null;
}

function fmtDate(unix: number): string {
  return new Date(unix * 1000).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
}

function fmtMoney(v: number | null, currency: string): string {
  if (v == null) return '—';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(v);
}

const input =
  'w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm focus:border-accent';
const btn =
  'rounded-lg bg-text px-4 py-2 text-sm font-medium text-bg disabled:opacity-60';
const badge = 'rounded-full border border-line bg-bg px-2 py-1 text-xs';

/* ── Login ── */
function Login({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError('');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
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
        <input name="email" type="email" required placeholder="Email" autoComplete="email" className={input} />
        <input name="password" type="password" required placeholder="Password" autoComplete="current-password" className={input} />
        {error && <p role="alert" className="text-sm text-accent">{error}</p>}
        <button type="submit" disabled={loading} className={`${btn} w-full py-3`}>
          {loading ? 'Masuk…' : 'Masuk'}
        </button>
      </form>
    </div>
  );
}

/* ── Leads ── */
function LeadsTab({ leads, reload }: { leads: Lead[]; reload: () => void }) {
  async function setStatus(id: string, status: string) {
    await api(`/api/admin/leads/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
    reload();
  }
  async function convert(id: string) {
    await api(`/api/admin/leads/${id}/convert`, { method: 'POST' });
    reload();
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">Leads</h2>
        <a href="/api/admin/leads/export" className="text-sm text-accent hover:underline">Export CSV</a>
      </div>
      {leads.length === 0 ? (
        <p className="mt-6 text-muted">Belum ada lead. 🎣</p>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-muted">
              <tr>
                <th className="px-3 py-2">Nama</th><th className="px-3 py-2">Kontak</th>
                <th className="px-3 py-2">Layanan</th><th className="px-3 py-2">Budget</th>
                <th className="px-3 py-2">Status</th><th className="px-3 py-2">Masuk</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} className="border-t border-line">
                  <td className="px-3 py-2 font-medium">{l.name}</td>
                  <td className="px-3 py-2">{l.contact}</td>
                  <td className="px-3 py-2 text-muted">{l.service ?? '—'}</td>
                  <td className="px-3 py-2 text-muted">{l.budgetRange ?? '—'}</td>
                  <td className="px-3 py-2">
                    <select value={l.status} onChange={(e) => void setStatus(l.id, e.target.value)} className={badge}>
                      {LEAD_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-3 py-2 text-muted">{fmtDate(l.createdAt)}</td>
                  <td className="px-3 py-2">
                    {l.status !== 'won' && (
                      <button onClick={() => void convert(l.id)} className="text-xs text-wa hover:underline">
                        → Client
                      </button>
                    )}
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

/* ── Clients ── */
function ClientsTab({ clients, reload }: { clients: Client[]; reload: () => void }) {
  async function create(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    await api('/api/admin/clients', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
    });
    form.reset();
    reload();
  }
  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Clients</h2>
      <form onSubmit={create} className="mt-4 grid gap-2 rounded-xl border border-line p-4 sm:grid-cols-5">
        <input name="name" required placeholder="Nama *" className={input} />
        <input name="company" placeholder="Company" className={input} />
        <input name="email" type="email" placeholder="Email" className={input} />
        <input name="phone" type="tel" placeholder="Phone/WA" className={input} />
        <div className="flex gap-2">
          <select name="country" className={input}>
            <option value="ID">ID</option>
          </select>
          <button type="submit" className={btn}>+</button>
        </div>
      </form>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-muted">
            <tr>
              <th className="px-3 py-2">Nama</th><th className="px-3 py-2">Company</th>
              <th className="px-3 py-2">Kontak</th><th className="px-3 py-2">Negara</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="border-t border-line">
                <td className="px-3 py-2 font-medium">{c.name}</td>
                <td className="px-3 py-2 text-muted">{c.company ?? '—'}</td>
                <td className="px-3 py-2 text-muted">{c.phone ?? c.email ?? '—'}</td>
                <td className="px-3 py-2">{c.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Projects ── */
function ProjectsTab({ projects, clients, reload }: { projects: Project[]; clients: Client[]; reload: () => void }) {
  const clientName = (id: string | null) => clients.find((c) => c.id === id)?.name ?? '—';

  async function create(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    await api('/api/admin/projects', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
    });
    form.reset();
    reload();
  }
  async function patch(id: string, body: Record<string, unknown>) {
    await api(`/api/admin/projects/${id}`, { method: 'PATCH', body: JSON.stringify(body) });
    reload();
  }

  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Projects</h2>
      <form onSubmit={create} className="mt-4 grid gap-2 rounded-xl border border-line p-4 sm:grid-cols-4">
        <input name="title" required placeholder="Judul project *" className={input} />
        <input name="service" required placeholder="Layanan *" className={input} />
        <select name="client_id" className={input}>
          <option value="">— klien —</option>
          {clients.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <div className="flex gap-2">
          <input name="stack" placeholder="Stack" className={input} />
          <button type="submit" className={btn}>+</button>
        </div>
      </form>
      <div className="mt-4 space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="rounded-xl border border-line p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-medium">{p.title}</p>
                <p className="text-xs text-muted">
                  {clientName(p.clientId)} · {p.service}{p.stack ? ` · ${p.stack}` : ''}
                </p>
              </div>
              <select value={p.status} onChange={(e) => void patch(p.id, { status: e.target.value })} className={badge}>
                {PROJECT_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <input
                type="range" min={0} max={100} step={5} defaultValue={p.progress}
                onMouseUp={(e) => void patch(p.id, { progress: Number((e.target as HTMLInputElement).value) })}
                onTouchEnd={(e) => void patch(p.id, { progress: Number((e.target as HTMLInputElement).value) })}
                className="w-full accent-[--color-accent]"
                aria-label={`Progress ${p.title}`}
              />
              <span className="w-12 text-right text-sm text-muted">{p.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Invoices ── */
function InvoicesTab({ invoices, clients, projects, reload }: {
  invoices: Invoice[]; clients: Client[]; projects: Project[]; reload: () => void;
}) {
  const [items, setItems] = useState([{ desc: '', qty: 1, price: 0 }]);
  const clientName = (id: string | null) => clients.find((c) => c.id === id)?.name ?? '—';

  async function create(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    await api('/api/admin/invoices', {
      method: 'POST',
      body: JSON.stringify({
        client_id: fd.get('client_id') || '',
        project_id: fd.get('project_id') || '',
        currency: fd.get('currency') || 'IDR',
        tax: Number(fd.get('tax') || 0),
        items: items.filter((i) => i.desc),
      }),
    });
    form.reset();
    setItems([{ desc: '', qty: 1, price: 0 }]);
    reload();
  }
  async function setStatus(id: string, status: string) {
    await api(`/api/admin/invoices/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
    reload();
  }

  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Invoices</h2>
      <form onSubmit={create} className="mt-4 space-y-2 rounded-xl border border-line p-4">
        <div className="grid gap-2 sm:grid-cols-4">
          <select name="client_id" className={input}>
            <option value="">— klien —</option>
            {clients.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select name="project_id" className={input}>
            <option value="">— project —</option>
            {projects.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
          </select>
          <select name="currency" className={input}>
            <option value="IDR">IDR</option>
          </select>
          <input name="tax" type="number" min={0} placeholder="Pajak (nominal)" className={input} />
        </div>
        {items.map((item, i) => (
          <div key={i} className="grid gap-2 sm:grid-cols-[1fr_80px_140px]">
            <input
              value={item.desc} placeholder="Deskripsi item"
              onChange={(e) => setItems((prev) => prev.map((it, j) => (j === i ? { ...it, desc: e.target.value } : it)))}
              className={input}
            />
            <input
              type="number" min={1} value={item.qty} aria-label="Qty"
              onChange={(e) => setItems((prev) => prev.map((it, j) => (j === i ? { ...it, qty: Number(e.target.value) } : it)))}
              className={input}
            />
            <input
              type="number" min={0} value={item.price} aria-label="Harga" placeholder="Harga"
              onChange={(e) => setItems((prev) => prev.map((it, j) => (j === i ? { ...it, price: Number(e.target.value) } : it)))}
              className={input}
            />
          </div>
        ))}
        <div className="flex gap-2">
          <button type="button" onClick={() => setItems((p) => [...p, { desc: '', qty: 1, price: 0 }])} className="rounded-lg border border-line px-3 py-2 text-sm">
            + item
          </button>
          <button type="submit" className={btn}>Buat Invoice</button>
        </div>
      </form>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-muted">
            <tr>
              <th className="px-3 py-2">No</th><th className="px-3 py-2">Klien</th>
              <th className="px-3 py-2">Total</th><th className="px-3 py-2">Status</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t border-line">
                <td className="px-3 py-2 font-medium">{inv.number}</td>
                <td className="px-3 py-2 text-muted">{clientName(inv.clientId)}</td>
                <td className="px-3 py-2">{fmtMoney(inv.total, inv.currency)}</td>
                <td className="px-3 py-2">
                  <select value={inv.status} onChange={(e) => void setStatus(inv.id, e.target.value)} className={badge}>
                    {INVOICE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <a href={`/admin/invoice/${inv.id}`} target="_blank" rel="noopener" className="text-xs text-accent hover:underline">
                    Print/PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Dashboard ── */
function DashboardTab({ leads, projects, invoices }: { leads: Lead[]; projects: Project[]; invoices: Invoice[] }) {
  const stats = useMemo(() => {
    const weekAgo = Date.now() / 1000 - 7 * 86400;
    const outstanding = invoices
      .filter((i) => i.status === 'sent' || i.status === 'overdue')
      .reduce((sum, i) => sum + (i.total ?? 0), 0);
    return {
      newLeads: leads.filter((l) => l.createdAt > weekAgo).length,
      activeProjects: projects.filter((p) => p.status !== 'done').length,
      outstanding,
    };
  }, [leads, projects, invoices]);

  return (
    <div>
      <h2 className="font-display text-xl font-semibold">Dashboard</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-line p-5">
          <p className="text-3xl font-semibold text-accent">{stats.newLeads}</p>
          <p className="mt-1 text-sm text-muted">Lead baru (7 hari)</p>
        </div>
        <div className="rounded-xl border border-line p-5">
          <p className="text-3xl font-semibold text-accent">{stats.activeProjects}</p>
          <p className="mt-1 text-sm text-muted">Project aktif</p>
        </div>
        <div className="rounded-xl border border-line p-5">
          <p className="text-3xl font-semibold text-accent">{fmtMoney(stats.outstanding, 'IDR')}</p>
          <p className="mt-1 text-sm text-muted">Invoice outstanding</p>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        {projects.filter((p) => p.status !== 'done').slice(0, 5).map((p) => (
          <div key={p.id} className="flex items-center gap-3 rounded-xl border border-line p-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{p.title}</p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface">
                <div className="h-full bg-accent transition-all" style={{ width: `${p.progress}%` }} />
              </div>
            </div>
            <span className="text-sm text-muted">{p.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Shell ── */
function Panel() {
  const [tab, setTab] = useState<Tab>('Dashboard');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  async function reload() {
    const [l, c, p, i] = await Promise.all([
      api<{ items: Lead[] }>('/api/admin/leads'),
      api<{ items: Client[] }>('/api/admin/clients'),
      api<{ items: Project[] }>('/api/admin/projects'),
      api<{ items: Invoice[] }>('/api/admin/invoices'),
    ]);
    if (l) setLeads(l.items);
    if (c) setClients(c.items);
    if (p) setProjects(p.items);
    if (i) setInvoices(i.items);
  }

  useEffect(() => { void reload(); }, []);

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    location.reload();
  }

  return (
    <div className="mx-auto max-w-6xl py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold">
          JASAWEBSITE.co <span className="text-xs text-muted">Admin</span>
        </p>
        <button onClick={logout} className="text-sm text-muted hover:text-text">Keluar</button>
      </div>
      <nav className="mt-6 flex flex-wrap gap-1 border-b border-line" aria-label="Tab admin">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm ${tab === t ? 'border-b-2 border-accent font-medium text-text' : 'text-muted hover:text-text'}`}
          >
            {t}
          </button>
        ))}
      </nav>
      <div className="mt-6">
        {tab === 'Dashboard' && <DashboardTab leads={leads} projects={projects} invoices={invoices} />}
        {tab === 'Leads' && <LeadsTab leads={leads} reload={reload} />}
        {tab === 'Clients' && <ClientsTab clients={clients} reload={reload} />}
        {tab === 'Projects' && <ProjectsTab projects={projects} clients={clients} reload={reload} />}
        {tab === 'Invoices' && <InvoicesTab invoices={invoices} clients={clients} projects={projects} reload={reload} />}
      </div>
    </div>
  );
}

export default function AdminApp({ authed }: { authed: boolean }) {
  const [isAuthed, setIsAuthed] = useState(authed);
  return isAuthed ? <Panel /> : <Login onSuccess={() => setIsAuthed(true)} />;
}
