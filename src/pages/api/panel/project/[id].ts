// POST /api/panel/project/[id] — admin update (status/progress) atau hapus project
import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getSession } from '@/lib/auth';
import { getPg } from '@/lib/pg';
import { project } from '@/db/pg-schema';

export const prerender = false;
const STATUS = ['baru', 'proses', 'review', 'selesai'];

export const POST: APIRoute = async ({ request, locals, params }) => {
  const env = locals.runtime.env;
  const session = await getSession(env, request);
  if (!session || session.role !== 'admin') return new Response('Forbidden', { status: 403 });

  const id = params.id ?? '';
  const form = await request.formData();
  const action = String(form.get('_action') ?? 'update');
  const clientId = String(form.get('clientId') ?? '');
  const back = new Response(null, { status: 303, headers: { Location: '/panel' + (clientId ? '#c-' + clientId : '') } });
  if (!id) return back;

  const db = getPg(env);
  if (action === 'delete') {
    await db.delete(project).where(eq(project.id, id));
    return back;
  }
  const st = String(form.get('status') ?? 'baru');
  const status = STATUS.includes(st) ? st : 'baru';
  const progress = Math.max(0, Math.min(100, Math.round(Number(form.get('progress') ?? 0)) || 0));
  await db.update(project).set({ status: status as never, progress, updatedAt: new Date() }).where(eq(project.id, id));
  return back;
};
