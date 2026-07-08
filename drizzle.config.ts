import { defineConfig } from 'drizzle-kit';

// Generate SQL migrations from src/db/schema.ts → ./migrations
// Apply: pnpm db:migrate:local / db:migrate:remote (wrangler d1)
export default defineConfig({
  dialect: 'sqlite',
  driver: 'd1-http',
  schema: './src/db/schema.ts',
  out: './migrations',
});
