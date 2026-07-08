// PATCH /api/admin/projects/:id — status/progress/milestones (PRD §32.3)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { requireSession, isResponse } from '@/lib/guard';

export const prerender = false;

const Patch = z.object({
  status: z.enum(['discovery', 'design', 'build', 'review', 'launch', 'done']).optional(),
  progress: z.number().int().min(0).max(100).optional(),
  pic: z.string().max(80).optional(),
  milestones: z
    .array(z.object({ name: z.string(), due: z.number().optional(), done: z.boolean() }))
    .optional(),
  links: z.object({ repo: z.string().optional(), deploy: z.string().optional() }).optional(),
});

export const PATCH: APIRoute = async ({ request, locals, params }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const parsed = Patch.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return err('VALIDATION', 'Data tidak valid');

  const db = getDb(env);
  const existing = await db.query.project.findFirst({ where: eq(schema.project.id, params.id!) });
  if (!existing) return err('NOT_FOUND', 'Project tidak ditemukan');

  const patch: Record<string, unknown> = {};
  if (parsed.data.status) patch.status = parsed.data.status;
  if (parsed.data.progress !== undefined) patch.progress = parsed.data.progress;
  if (parsed.data.pic !== undefined) patch.pic = parsed.data.pic;
  if (parsed.data.milestones) patch.milestones = JSON.stringify(parsed.data.milestones);
  if (parsed.data.links) patch.links = JSON.stringify(parsed.data.links);

  await db.update(schema.project).set(patch).where(eq(schema.project.id, params.id!));
  const updated = await db.query.project.findFirst({ where: eq(schema.project.id, params.id!) });
  return ok(updated);
};
