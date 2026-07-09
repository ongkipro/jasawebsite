// POST /api/panel/project — admin tambah project untuk client
import type { APIRoute } from 'astro';
import { getSession } from '@/lib/auth';
import { getPg } from '@/lib/pg';
import { project } from '@/db/pg-schema';

export const prerender = false;
const STATUS = ['baru', 'proses', 'review', 'selesai'];

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const session = await getSession(env, request);
  if (!session || session.role !== 'admin') return new Response('Forbidden', { status: 403 });

  const form = await request.formData();
  const clientId = String(form.get('clientId') ?? '');
  const title = String(form.get('title') ?? '').trim();
  const service = String(form.get('service') ?? '').trim();
  const st = String(form.get('status') ?? 'baru');
  const status = STATUS.includes(st) ? st : 'baru';
  const progress = Math.max(0, Math.min(100, Math.round(Number(form.get('progress') ?? 0)) || 0));

  const back = new Response(null, { status: 303, headers: { Location: '/panel#c-' + clientId } });
  if (!clientId || !title) return back;

  const db = getPg(env);
  await db.insert(project).values({ clientId, title, service: service || null, status: status as never, progress });
  return back;
};
