// GET /api/admin/leads — list lead (query: status, page, limit) (PRD §32.3)
import type { APIRoute } from 'astro';
import { desc, eq, count } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { getSession } from '@/lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals, url }) => {
  const env = locals.runtime.env;
  const session = await getSession(env, request);
  if (!session) return err('UNAUTHORIZED', 'Login diperlukan');

  const status = url.searchParams.get('status');
  const page = Math.max(1, Number(url.searchParams.get('page') ?? 1));
  const limit = Math.min(100, Math.max(1, Number(url.searchParams.get('limit') ?? 20)));

  const db = getDb(env);
  const where = status ? eq(schema.lead.status, status as never) : undefined;

  const [items, total] = await Promise.all([
    db.query.lead.findMany({
      where,
      orderBy: desc(schema.lead.createdAt),
      limit,
      offset: (page - 1) * limit,
    }),
    db.select({ n: count() }).from(schema.lead).where(where),
  ]);

  return ok({ items, total: total[0]?.n ?? 0, page, limit });
};
