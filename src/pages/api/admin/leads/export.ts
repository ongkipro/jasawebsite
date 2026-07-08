// GET /api/admin/leads/export — CSV (PRD §32.3)
import type { APIRoute } from 'astro';
import { desc } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { requireSession, isResponse } from '@/lib/guard';

export const prerender = false;

function csvCell(v: unknown): string {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const leads = await getDb(env).query.lead.findMany({
    orderBy: desc(schema.lead.createdAt),
  });

  const header = 'name,contact,email,service,budget_range,status,source,created_at';
  const rows = leads.map((l) =>
    [
      l.name,
      l.contact,
      l.email,
      l.service,
      l.budgetRange,
      l.status,
      l.source,
      new Date(l.createdAt * 1000).toISOString(),
    ]
      .map(csvCell)
      .join(','),
  );

  return new Response([header, ...rows].join('\n'), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="leads.csv"',
    },
  });
};
