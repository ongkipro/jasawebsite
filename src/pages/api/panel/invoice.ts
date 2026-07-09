// POST /api/panel/invoice — admin tambah invoice untuk client
import type { APIRoute } from 'astro';
import { getSession } from '@/lib/auth';
import { getPg } from '@/lib/pg';
import { invoice } from '@/db/pg-schema';

export const prerender = false;
const STATUS = ['draft', 'terkirim', 'lunas', 'jatuh_tempo'];

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const session = await getSession(env, request);
  if (!session || session.role !== 'admin') return new Response('Forbidden', { status: 403 });

  const form = await request.formData();
  const clientId = String(form.get('clientId') ?? '');
  const number = String(form.get('number') ?? '').trim();
  const title = String(form.get('title') ?? '').trim();
  const amount = String(Math.max(0, Math.round(Number(form.get('amount') ?? 0)) || 0));
  const st = String(form.get('status') ?? 'terkirim');
  const status = STATUS.includes(st) ? st : 'terkirim';

  const back = new Response(null, { status: 303, headers: { Location: '/panel#c-' + clientId } });
  if (!clientId || !number || !title) return back;

  const db = getPg(env);
  await db.insert(invoice).values({ clientId, number, title, amount, status: status as never });
  return back;
};
