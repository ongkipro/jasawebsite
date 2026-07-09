// POST /api/client/auth/login — masuk client + set session
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getPg } from '@/lib/pg';
import { clientUser } from '@/db/pg-schema';
import { verifyPassword, createSessionCookie } from '@/lib/auth';

export const prerender = false;

const schema = z.object({
  email: z.string().trim().email('Email tidak valid'),
  password: z.string().min(1, 'Password wajib diisi'),
});

function jsonRes(data: unknown, status = 200, cookie?: string) {
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (cookie) headers['set-cookie'] = cookie;
  return new Response(JSON.stringify(data), { status, headers });
}

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const secure = new URL(request.url).protocol === 'https:';
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return jsonRes({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid' }, 400);
  }
  const email = parsed.data.email.toLowerCase();
  const db = getPg(env);

  const [u] = await db
    .select({ id: clientUser.id, passwordHash: clientUser.passwordHash })
    .from(clientUser)
    .where(eq(clientUser.email, email))
    .limit(1);

  // Pesan sama untuk email/password salah (hindari user enumeration)
  if (!u || !(await verifyPassword(parsed.data.password, u.passwordHash))) {
    return jsonRes({ error: 'Email atau password salah.' }, 401);
  }

  const cookie = await createSessionCookie(env, { userId: u.id, role: 'client' }, secure);
  return jsonRes({ ok: true }, 200, cookie);
};
