// POST /api/panel/auth/login — login admin (JSON) → set session role admin
import type { APIRoute } from 'astro';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getPg } from '@/lib/pg';
import { adminUser } from '@/db/pg-schema';
import { verifyPassword, createSessionCookie } from '@/lib/auth';

export const prerender = false;

function jsonRes(data: unknown, status = 200, cookie?: string) {
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (cookie) headers['set-cookie'] = cookie;
  return new Response(JSON.stringify(data), { status, headers });
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const secure = new URL(request.url).protocol === 'https:';
  const body = (await request.json().catch(() => null)) as { email?: string; password?: string } | null;
  const email = String(body?.email ?? '').toLowerCase();
  const password = String(body?.password ?? '');

  const db = getPg(env);
  const [a] = await db
    .select({ id: adminUser.id, passwordHash: adminUser.passwordHash })
    .from(adminUser)
    .where(eq(adminUser.email, email))
    .limit(1);

  if (!a || !(await verifyPassword(password, a.passwordHash))) {
    return jsonRes({ error: 'Email atau password salah.' }, 401);
  }
  const cookie = await createSessionCookie(env, { userId: a.id, role: 'admin' }, secure);
  return jsonRes({ ok: true }, 200, cookie);
};
