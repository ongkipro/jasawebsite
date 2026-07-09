// POST /api/panel/lead/[id] — admin ubah status atau hapus lead (pesan masuk)
import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getSession } from '@/lib/auth';
import { getPg } from '@/lib/pg';
import { lead } from '@/db/pg-schema';

export const prerender = false;
const STATUS = ['baru', 'dihubungi', 'deal', 'arsip'];

export const POST: APIRoute = async ({ request, locals, params }) => {
  const env = locals.runtime.env;
  const session = await getSession(env, request);
  if (!session || session.role !== 'admin') return new Response('Forbidden', { status: 403 });

  const id = params.id ?? '';
  const form = await request.formData();
  const action = String(form.get('_action') ?? 'update');
  const back = new Response(null, { status: 303, headers: { Location: '/panel#leads' } });
  if (!id) return back;

  const db = getPg(env);
  if (action === 'delete') {
    await db.delete(lead).where(eq(lead.id, id));
    return back;
  }
  const st = String(form.get('status') ?? 'baru');
  const status = STATUS.includes(st) ? st : 'baru';
  await db.update(lead).set({ status: status as never }).where(eq(lead.id, id));
  return back;
};
