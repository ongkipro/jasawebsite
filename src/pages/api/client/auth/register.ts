// POST /api/client/auth/register — daftar client baru + set session
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { eq } from 'drizzle-orm/pg-core/expressions';
import { getPg } from '@/lib/pg';
import { clientUser } from '@/db/pg-schema';
import { hashPassword, createSessionCookie } from '@/lib/auth';

export const prerender = false;

const schema = z.object({
  name: z.string().trim().min(2, 'Nama minimal 2 karakter'),
  email: z.string().trim().email('Email tidak valid'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
  company: z.string().trim().optional(),
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

  const existing = await db
    .select({ id: clientUser.id })
    .from(clientUser)
    .where(eq(clientUser.email, email))
    .limit(1);
  if (existing.length) return jsonRes({ error: 'Email sudah terdaftar. Silakan masuk.' }, 409);

  const passwordHash = await hashPassword(parsed.data.password);
  const [u] = await db
    .insert(clientUser)
    .values({ name: parsed.data.name, email, passwordHash, company: parsed.data.company })
    .returning({ id: clientUser.id });

  const cookie = await createSessionCookie(env, { userId: u.id, role: 'client' }, secure);
  return jsonRes({ ok: true }, 200, cookie);
};
