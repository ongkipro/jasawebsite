// POST /api/panel/auth/logout — hapus session admin → redirect /panel
import type { APIRoute } from 'astro';
import { clearSessionCookie } from '@/lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const secure = new URL(request.url).protocol === 'https:';
  return new Response(null, { status: 303, headers: { Location: '/panel/masuk', 'set-cookie': clearSessionCookie(secure) } });
};
