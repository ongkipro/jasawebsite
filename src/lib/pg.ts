// Koneksi Postgres (postgres-js + Drizzle). Kompatibel:
//  - dev/VPS: DATABASE_URL langsung
//  - prod Cloudflare Workers: env.HYPERDRIVE.connectionString (butuh nodejs_compat)
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/pg-schema';

let cached: ReturnType<typeof postgres> | null = null;

function connectionString(env: Env): string {
  return env.HYPERDRIVE?.connectionString ?? env.DATABASE_URL ?? '';
}

export function getPg(env: Env) {
  const url = connectionString(env);
  if (!url) throw new Error('DATABASE_URL / HYPERDRIVE belum diset');
  // Reuse koneksi antar request. prepare:false wajib untuk Hyperdrive/pgbouncer.
  if (!cached) cached = postgres(url, { max: 5, prepare: false });
  return drizzle(cached, { schema });
}

export { schema as pgSchema };
