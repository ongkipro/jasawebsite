// GET/POST /api/admin/invoices — nomor otomatis INV-<tahun>-NNN (PRD §32.3)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { desc, like, count } from 'drizzle-orm';
import { getDb, schema } from '@/lib/db';
import { ok, err } from '@/lib/api';
import { requireSession, isResponse } from '@/lib/guard';

export const prerender = false;

const Item = z.object({ desc: z.string().min(1), qty: z.number().positive(), price: z.number().min(0) });
const Input = z.object({
  client_id: z.string().uuid().optional().or(z.literal('')),
  project_id: z.string().uuid().optional().or(z.literal('')),
  currency: z.enum(['IDR', 'MYR']).default('IDR'),
  items: z.array(Item).min(1),
  tax: z.number().min(0).default(0), // nominal, bukan persen
  due_date: z.number().int().optional(),
});

export const GET: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const items = await getDb(env).query.invoice.findMany({
    orderBy: desc(schema.invoice.createdAt),
    limit: 200,
  });
  return ok({ items });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const s = await requireSession(env, request);
  if (isResponse(s)) return s;

  const parsed = Input.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return err('VALIDATION', 'Data tidak valid');

  const db = getDb(env);
  const year = new Date().getFullYear();
  const [{ n }] = await db
    .select({ n: count() })
    .from(schema.invoice)
    .where(like(schema.invoice.number, `INV-${year}-%`));
  const number = `INV-${year}-${String(n + 1).padStart(3, '0')}`;

  const subtotal = parsed.data.items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const total = subtotal + parsed.data.tax;

  const id = crypto.randomUUID();
  await db.insert(schema.invoice).values({
    id,
    number,
    clientId: parsed.data.client_id || null,
    projectId: parsed.data.project_id || null,
    items: JSON.stringify(parsed.data.items),
    currency: parsed.data.currency,
    subtotal,
    tax: parsed.data.tax,
    total,
    dueDate: parsed.data.due_date ?? null,
  });
  return ok({ id, number, total });
};
