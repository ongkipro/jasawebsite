// POST /api/panel/invoice/[id] — admin update status atau hapus invoice
import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getSession } from '@/lib/auth';
import { getPg } from '@/lib/pg';
import { invoice } from '@/db/pg-schema';

export const prerender = false;
const STATUS = ['draft', 'terkirim', 'lunas', 'jatuh_tempo'];

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
    await db.delete(invoice).where(eq(invoice.id, id));
    return back;
  }
  const st = String(form.get('status') ?? 'terkirim');
  const status = STATUS.includes(st) ? st : 'terkirim';
  await db.update(invoice).set({ status: status as never }).where(eq(invoice.id, id));
  return back;
};
