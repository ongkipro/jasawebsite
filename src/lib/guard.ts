// Guard API admin: kembalikan Session atau Response 401/403 (PRD §30.2)
import { err } from '@/lib/api';
import { getSession, type Session } from '@/lib/auth';

export async function requireSession(
  env: Env,
  request: Request,
  role?: 'admin',
): Promise<Session | Response> {
  const session = await getSession(env, request);
  if (!session) return err('UNAUTHORIZED', 'Login diperlukan');
  if (role === 'admin' && session.role !== 'admin') {
    return err('FORBIDDEN', 'Hanya admin');
  }
  return session;
}

export function isResponse(v: unknown): v is Response {
  return v instanceof Response;
}
