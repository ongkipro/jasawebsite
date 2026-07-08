// Helper response API — error shape konsisten (PRD §32.1)

type ErrorCode = 'VALIDATION' | 'UNAUTHORIZED' | 'FORBIDDEN' | 'RATE_LIMIT' | 'NOT_FOUND' | 'SERVER';

const STATUS: Record<ErrorCode, number> = {
  VALIDATION: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  RATE_LIMIT: 429,
  SERVER: 500,
};

export function ok(data: unknown, init?: ResponseInit): Response {
  return Response.json({ ok: true, data }, init);
}

export function err(
  code: ErrorCode,
  message: string,
  fields?: Record<string, string>,
  init?: ResponseInit,
): Response {
  return Response.json(
    { ok: false, error: { code, message, ...(fields ? { fields } : {}) } },
    { status: STATUS[code], ...init },
  );
}

/** Rate limit per-IP via KV. Return true bila melewati batas. */
export async function isRateLimited(
  kv: KVNamespace,
  key: string,
  { limit = 5, windowSec = 600 }: { limit?: number; windowSec?: number } = {},
): Promise<boolean> {
  const bucket = `rl:${key}:${Math.floor(Date.now() / 1000 / windowSec)}`;
  const count = Number((await kv.get(bucket)) ?? 0) + 1;
  await kv.put(bucket, String(count), { expirationTtl: windowSec });
  return count > limit;
}
