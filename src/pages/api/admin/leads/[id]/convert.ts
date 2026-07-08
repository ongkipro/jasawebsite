// POST /api/admin/leads/:id/convert — Lead → Client (PRD §32.3, §30.3)
import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { requireSession, isResponse } from '@/lib/guard';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, params }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const db = getDb(env);
  const lead = await db.query.lead.findFirst({ where: eq(schema.lead.id, params.id!) });
  if (!lead) return err('NOT_FOUND', 'Lead tidak ditemukan');

  const clientId = crypto.randomUUID();
  await db.insert(schema.client).values({
    id: clientId,
    name: lead.name,
    email: lead.email,
    phone: lead.contact,
  });
  await db.update(schema.lead).set({ status: 'won' }).where(eq(schema.lead.id, params.id!));

  return ok({ clientId });
};
