// POST /api/panel/auth/setup — buat admin pertama (sekali). Dilindungi AUTH_SECRET.
import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getPg } from '@/lib/pg';
import { adminUser } from '@/db/pg-schema';
import { hashPassword } from '@/lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  if (request.headers.get('x-setup-secret') !== env.AUTH_SECRET) {
    return new Response('Forbidden', { status: 403 });
  }
  const body = (await request.json().catch(() => null)) as { name?: string; email?: string; password?: string } | null;
  if (!body?.name || !body?.email || !body?.password) {
    return new Response(JSON.stringify({ error: 'name, email, password wajib' }), { status: 400 });
  }
  const db = getPg(env);
  const email = body.email.toLowerCase();
  const exist = await db.select({ id: adminUser.id }).from(adminUser).where(eq(adminUser.email, email)).limit(1);
  if (exist.length) return new Response(JSON.stringify({ ok: true, note: 'admin sudah ada' }), { status: 200 });
  const passwordHash = await hashPassword(body.password);
  await db.insert(adminUser).values({ name: body.name, email, passwordHash });
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
};
