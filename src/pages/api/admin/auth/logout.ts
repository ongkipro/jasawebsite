// POST /api/admin/auth/logout
import type { APIRoute } from 'astro';
import { ok } from '@/lib/api';
import { clearSessionCookie } from '@/lib/auth';

export const prerender = false;

export const POST: APIRoute = async () =>
  ok({ loggedOut: true }, { headers: { 'Set-Cookie': clearSessionCookie() } });
