-- Client portal (Postgres) — client_user + project + invoice
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

DO $$ BEGIN
  CREATE TYPE project_status AS ENUM ('baru', 'proses', 'review', 'selesai');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
  CREATE TYPE invoice_status AS ENUM ('draft', 'terkirim', 'lunas', 'jatuh_tempo');
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS client_user (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text NOT NULL,
  email         text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  company       text,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS project (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id  uuid NOT NULL REFERENCES client_user(id) ON DELETE CASCADE,
  title      text NOT NULL,
  service    text,
  status     project_status NOT NULL DEFAULT 'baru',
  progress   integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS invoice (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id  uuid NOT NULL REFERENCES client_user(id) ON DELETE CASCADE,
  number     text NOT NULL,
  title      text NOT NULL,
  amount     numeric(12,0) NOT NULL,
  currency   text NOT NULL DEFAULT 'IDR',
  status     invoice_status NOT NULL DEFAULT 'terkirim',
  due_date   timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_project_client ON project(client_id);
CREATE INDEX IF NOT EXISTS idx_invoice_client ON invoice(client_id);
