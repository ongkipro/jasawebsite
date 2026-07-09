// POST /api/panel/auth/register — daftar admin baru (butuh kode undangan) → set session
import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getPg } from '@/lib/pg';
import { adminUser } from '@/db/pg-schema';
import { hashPassword, createSessionCookie } from '@/lib/auth';

export const prerender = false;

function jsonRes(data: unknown, status = 200, cookie?: string) {
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (cookie) headers['set-cookie'] = cookie;
  return new Response(JSON.stringify(data), { status, headers });
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const secure = new URL(request.url).protocol === 'https:';
  const body = (await request.json().catch(() => null)) as
    | { name?: string; email?: string; password?: string; invite?: string }
    | null;

  const code = env.ADMIN_INVITE_CODE ?? env.AUTH_SECRET;
  if (String(body?.invite ?? '') !== code) {
    return jsonRes({ error: 'Kode undangan admin salah.' }, 403);
  }

  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim().toLowerCase();
  const password = String(body?.password ?? '');
  if (name.length < 2 || !email.includes('@') || password.length < 8) {
    return jsonRes({ error: 'Data tidak valid (password minimal 8 karakter).' }, 400);
  }

  const db = getPg(env);
  const exist = await db.select({ id: adminUser.id }).from(adminUser).where(eq(adminUser.email, email)).limit(1);
  if (exist.length) return jsonRes({ error: 'Email admin sudah terdaftar. Silakan masuk.' }, 409);

  const passwordHash = await hashPassword(password);
  const [a] = await db.insert(adminUser).values({ name, email, passwordHash }).returning({ id: adminUser.id });
  const cookie = await createSessionCookie(env, { userId: a.id, role: 'admin' }, secure);
  return jsonRes({ ok: true }, 200, cookie);
};
