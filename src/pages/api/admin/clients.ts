// GET/POST /api/admin/clients (PRD §32.3)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { desc } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { requireSession, isResponse } from '@/lib/guard';

export const prerender = false;

const Input = z.object({
  name: z.string().min(2).max(120),
  company: z.string().max(160).optional().or(z.literal('')),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().max(30).optional().or(z.literal('')),
  country: z.enum(['ID', 'MY']).default('ID'),
});

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const items = await getDb(env).query.client.findMany({
    orderBy: desc(schema.client.createdAt),
    limit: 200,
  });
  return ok({ items });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const parsed = Input.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return err('VALIDATION', 'Data tidak valid');

  const id = crypto.randomUUID();
  await getDb(env).insert(schema.client).values({
    id,
    name: parsed.data.name,
    company: parsed.data.company || null,
    email: parsed.data.email || null,
    phone: parsed.data.phone || null,
    country: parsed.data.country,
  });
  return ok({ id });
};
