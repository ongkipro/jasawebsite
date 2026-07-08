// POST /api/admin/auth/setup — buat user admin PERTAMA (sekali pakai).
// Guard: header x-setup-secret harus == AUTH_SECRET, dan hanya jalan bila belum ada user.
// curl -X POST https://.../api/admin/auth/setup \
//   -H "x-setup-secret: $AUTH_SECRET" -H "Content-Type: application/json" \
//   -d '{"name":"Owner","email":"admin@jasawebsite.co","password":"..."}'
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { count } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { hashPassword } from '@/lib/auth';

export const prerender = false;

const Input = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(10, 'Password minimal 10 karakter'),
});

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;

  if (request.headers.get('x-setup-secret') !== env.AUTH_SECRET) {
    return err('UNAUTHORIZED', 'Secret salah');
  }

  const db = getDb(env);
  const existing = await db.select({ n: count() }).from(schema.appUser);
  if ((existing[0]?.n ?? 0) > 0) return err('FORBIDDEN', 'Setup sudah dilakukan');

  const parsed = Input.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return err('VALIDATION', 'Data tidak valid');

  const id = crypto.randomUUID();
  await db.insert(schema.appUser).values({
    id,
    name: parsed.data.name,
    email: parsed.data.email,
    role: 'admin',
    passwordHash: await hashPassword(parsed.data.password),
  });

  return ok({ id, email: parsed.data.email, role: 'admin' });
};
