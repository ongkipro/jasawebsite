// POST /api/contact — submit lead (PRD §32.2)
// Validasi Zod → honeypot → rate-limit KV → (Turnstile bila dikonfigurasi) → insert Postgres → email
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { getPg } from '@/lib/pg';
import { lead } from '@/db/pg-schema';
import { ok, err, isRateLimited } from '@/lib/api';

export const prerender = false;

const LeadInput = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter').max(120),
  contact: z.string().min(8, 'Nomor WhatsApp tidak valid').max(30),
  email: z.string().email('Email tidak valid').optional().or(z.literal('')),
  service: z.string().max(60).optional().or(z.literal('')),
  budget_range: z.string().max(30).optional().or(z.literal('')),
  message: z.string().min(5, 'Pesan terlalu pendek').max(3000),
  utm: z.record(z.string()).optional(),
  source: z.enum(['form', 'whatsapp']).default('form'),
  turnstileToken: z.string().optional(),
  company_website: z.string().max(0).optional().or(z.literal('')), // honeypot
});

async function verifyTurnstile(secret: string, token: string, ip: string): Promise<boolean> {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
  });
  const json = (await res.json()) as { success: boolean };
  return json.success;
}

async function sendNotification(env: Env, lead: { name: string; contact: string; message: string; service?: string }) {
  if (!env.RESEND_API_KEY) return; // dev: skip email bila key belum di-set
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'JASAWEBSITE.co <noreply@jasawebsite.co>',
      to: ['halo@jasawebsite.co'],
      subject: `Lead baru: ${lead.name}${lead.service ? ` — ${lead.service}` : ''}`,
      text: `Nama: ${lead.name}\nKontak: ${lead.contact}\nLayanan: ${lead.service ?? '-'}\n\n${lead.message}`,
    }),
  }).catch(() => {}); // email gagal tidak boleh menggagalkan submit lead
}

export const POST: APIRoute = async ({ request, locals, clientAddress }) => {
  const env = locals.runtime.env;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return err('VALIDATION', 'Body harus JSON');
  }

  const parsed = LeadInput.safeParse(body);
  if (!parsed.success) {
    const fields = Object.fromEntries(
      parsed.error.issues.map((i) => [i.path.join('.'), i.message]),
    );
    return err('VALIDATION', 'Data tidak valid', fields);
  }
  const input = parsed.data;

  // Honeypot terisi → bot; balas sukses palsu agar bot tidak belajar
  if (input.company_website) return ok({ id: 'ok' });

  const ip = clientAddress ?? 'unknown';
  if (await isRateLimited(env.CACHE, `contact:${ip}`)) {
    return err('RATE_LIMIT', 'Terlalu banyak percobaan. Coba lagi nanti.', undefined, {
      headers: { 'Retry-After': '600' },
    });
  }

  // Turnstile — wajib bila secret dikonfigurasi (production)
  if (env.TURNSTILE_SECRET_KEY) {
    const valid =
      input.turnstileToken &&
      (await verifyTurnstile(env.TURNSTILE_SECRET_KEY, input.turnstileToken, ip));
    if (!valid) return err('FORBIDDEN', 'Verifikasi anti-spam gagal. Muat ulang halaman.');
  }

  const db = getPg(env);
  const [row] = await db
    .insert(lead)
    .values({
      name: input.name,
      contact: input.contact,
      email: input.email || null,
      service: input.service || null,
      budgetRange: input.budget_range || null,
      message: input.message,
      source: input.source,
      utm: input.utm ? JSON.stringify(input.utm) : null,
    })
    .returning({ id: lead.id });
  const id = row?.id ?? crypto.randomUUID();

  await sendNotification(env, {
    name: input.name,
    contact: input.contact,
    message: input.message,
    service: input.service || undefined,
  });

  return ok({ id });
};
