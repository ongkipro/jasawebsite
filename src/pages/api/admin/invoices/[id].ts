// PATCH /api/admin/invoices/:id — update status (PRD §32.3)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { requireSession, isResponse } from '@/lib/guard';

export const prerender = false;

const Patch = z.object({
  status: z.enum(['draft', 'sent', 'paid', 'overdue']).optional(),
  due_date: z.number().int().nullable().optional(),
});

export const PATCH: APIRoute = async ({ request, locals, params }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const parsed = Patch.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return err('VALIDATION', 'Data tidak valid');

  const db = getDb(env);
  const existing = await db.query.invoice.findFirst({ where: eq(schema.invoice.id, params.id!) });
  if (!existing) return err('NOT_FOUND', 'Invoice tidak ditemukan');

  const patch: Record<string, unknown> = {};
  if (parsed.data.status) patch.status = parsed.data.status;
  if (parsed.data.due_date !== undefined) patch.dueDate = parsed.data.due_date;

  await db.update(schema.invoice).set(patch).where(eq(schema.invoice.id, params.id!));
  const updated = await db.query.invoice.findFirst({ where: eq(schema.invoice.id, params.id!) });
  return ok(updated);
};
