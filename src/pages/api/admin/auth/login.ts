// POST /api/admin/auth/login (PRD §32.3)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err, isRateLimited } from '@/lib/api';
import { verifyPassword, createSessionCookie } from '@/lib/auth';

export const prerender = false;

const Input = z.object({ email: z.string().email(), password: z.string().min(8) });

export const POST: APIRoute = async ({ request, locals, clientAddress }) => {
  const env = locals.runtime.env;

  if (await isRateLimited(env.CACHE, `login:${clientAddress}`, { limit: 5, windowSec: 900 })) {
    return err('RATE_LIMIT', 'Terlalu banyak percobaan login.');
  }

  const parsed = Input.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return err('VALIDATION', 'Email/password tidak valid');

  const db = getDb(env);
  const user = await db.query.appUser.findFirst({
    where: eq(schema.appUser.email, parsed.data.email),
  });
  if (!user?.passwordHash || !user.active) return err('UNAUTHORIZED', 'Email atau password salah');

  const valid = await verifyPassword(parsed.data.password, user.passwordHash);
  if (!valid) return err('UNAUTHORIZED', 'Email atau password salah');

  const cookie = await createSessionCookie(env, { userId: user.id, role: user.role });
  return ok(
    { id: user.id, name: user.name, role: user.role },
    { headers: { 'Set-Cookie': cookie } },
  );
};
