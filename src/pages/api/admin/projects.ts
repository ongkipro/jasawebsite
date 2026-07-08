// GET/POST /api/admin/projects (PRD §32.3)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { desc } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { requireSession, isResponse } from '@/lib/guard';

export const prerender = false;

const Input = z.object({
  client_id: z.string().uuid().optional().or(z.literal('')),
  title: z.string().min(2).max(160),
  service: z.string().min(2).max(60),
  stack: z.string().max(60).optional().or(z.literal('')),
  pic: z.string().max(80).optional().or(z.literal('')),
});

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const items = await getDb(env).query.project.findMany({
    orderBy: desc(schema.project.createdAt),
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
  await getDb(env).insert(schema.project).values({
    id,
    clientId: parsed.data.client_id || null,
    title: parsed.data.title,
    service: parsed.data.service,
    stack: parsed.data.stack || null,
    pic: parsed.data.pic || null,
  });
  return ok({ id });
};
