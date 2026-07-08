// GET/PATCH /api/admin/leads/:id (PRD §32.3)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { getSession } from '@/lib/auth';

export const prerender = false;

const Patch = z.object({
  status: z.enum(['new', 'contacted', 'qualified', 'proposal', 'won', 'lost']).optional(),
  assigned_to: z.string().nullable().optional(),
  notes: z.array(z.object({ author: z.string(), text: z.string(), at: z.number() })).optional(),
});

export const GET: APIRoute = async ({ request, locals, params }) => {
  const env = locals.runtime.env;
  if (!(await getSession(env, request))) return err('UNAUTHORIZED', 'Login diperlukan');

  const db = getDb(env);
  const item = await db.query.lead.findFirst({ where: eq(schema.lead.id, params.id!) });
  if (!item) return err('NOT_FOUND', 'Lead tidak ditemukan');
  return ok(item);
};

export const PATCH: APIRoute = async ({ request, locals, params }) => {
  const env = locals.runtime.env;
  if (!(await getSession(env, request))) return err('UNAUTHORIZED', 'Login diperlukan');

  const parsed = Patch.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return err('VALIDATION', 'Data tidak valid');

  const db = getDb(env);
  const existing = await db.query.lead.findFirst({ where: eq(schema.lead.id, params.id!) });
  if (!existing) return err('NOT_FOUND', 'Lead tidak ditemukan');

  const patch: Record<string, unknown> = {};
  if (parsed.data.status) patch.status = parsed.data.status;
  if (parsed.data.assigned_to !== undefined) patch.assignedTo = parsed.data.assigned_to;
  if (parsed.data.notes) patch.notes = JSON.stringify(parsed.data.notes);

  await db.update(schema.lead).set(patch).where(eq(schema.lead.id, params.id!));
  const updated = await db.query.lead.findFirst({ where: eq(schema.lead.id, params.id!) });
  return ok(updated);
};
