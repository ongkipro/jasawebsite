// Auth admin sederhana (PRD §30.5): session cookie HMAC-signed + PBKDF2 password.
// 2 role: admin | staff. Web Crypto only — jalan native di Workers.

const SESSION_COOKIE = 'jw_session';
const SESSION_TTL = 60 * 60 * 24 * 7; // 7 hari

const enc = new TextEncoder();

function toHex(buf: ArrayBuffer): string {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function hmac(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return toHex(await crypto.subtle.sign('HMAC', key, enc.encode(data)));
}

export async function hashPassword(password: string, salt?: string): Promise<string> {
  const s = salt ?? toHex(crypto.getRandomValues(new Uint8Array(16)).buffer);
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, [
    'deriveBits',
  ]);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(s), iterations: 100_000, hash: 'SHA-256' },
    key,
    256,
  );
  return `${s}:${toHex(bits)}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt] = stored.split(':');
  if (!salt) return false;
  return (await hashPassword(password, salt)) === stored;
}

export type Role = 'admin' | 'staff' | 'client';
export type Session = { userId: string; role: Role };

export async function createSessionCookie(env: Env, session: Session, secure = true): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL;
  const payload = `${session.userId}.${session.role}.${exp}`;
  const sig = await hmac(env.AUTH_SECRET, payload);
  const value = `${payload}.${sig}`;
  const flags = `HttpOnly;${secure ? ' Secure;' : ''} SameSite=Lax; Path=/; Max-Age=${SESSION_TTL}`;
  return `${SESSION_COOKIE}=${value}; ${flags}`;
}

export function clearSessionCookie(secure = true): string {
  return `${SESSION_COOKIE}=; HttpOnly;${secure ? ' Secure;' : ''} SameSite=Lax; Path=/; Max-Age=0`;
}

export async function getSession(env: Env, request: Request): Promise<Session | null> {
  const cookie = request.headers.get('cookie') ?? '';
  const match = cookie.match(new RegExp(`${SESSION_COOKIE}=([^;]+)`));
  if (!match) return null;
  const parts = match[1].split('.');
  if (parts.length !== 4) return null;
  const [userId, role, expStr, sig] = parts;
  const payload = `${userId}.${role}.${expStr}`;
  if ((await hmac(env.AUTH_SECRET, payload)) !== sig) return null;
  if (Number(expStr) < Math.floor(Date.now() / 1000)) return null;
  if (role !== 'admin' && role !== 'staff' && role !== 'client') return null;
  return { userId, role };
}
