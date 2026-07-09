-- Lead dari form kontak (pesan masuk) — dikelola di /panel
DO $$ BEGIN
  CREATE TYPE lead_status AS ENUM ('baru', 'dihubungi', 'deal', 'arsip');
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS lead (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text NOT NULL,
  contact      text NOT NULL,
  email        text,
  service      text,
  budget_range text,
  message      text NOT NULL,
  source       text NOT NULL DEFAULT 'form',
  utm          text,
  status       lead_status NOT NULL DEFAULT 'baru',
  created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS lead_created_idx ON lead (created_at DESC);
