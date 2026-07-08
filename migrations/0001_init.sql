-- Migration 0001: skema awal (PRD §16.1)
-- Apply lokal : pnpm db:migrate:local
-- Apply remote: pnpm db:migrate:remote

CREATE TABLE app_user (
  id            TEXT PRIMARY KEY,
  name          TEXT,
  email         TEXT NOT NULL UNIQUE,
  role          TEXT NOT NULL DEFAULT 'staff',
  password_hash TEXT,
  active        INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE lead (
  id            TEXT PRIMARY KEY,
  name          TEXT NOT NULL,
  contact       TEXT NOT NULL,
  email         TEXT,
  service       TEXT,
  budget_range  TEXT,
  message       TEXT,
  source        TEXT NOT NULL DEFAULT 'form',
  utm           TEXT,
  status        TEXT NOT NULL DEFAULT 'new',
  assigned_to   TEXT REFERENCES app_user(id),
  notes         TEXT NOT NULL DEFAULT '[]',
  created_at    INTEGER NOT NULL DEFAULT (unixepoch())
);
CREATE INDEX idx_lead_status  ON lead(status);
CREATE INDEX idx_lead_created ON lead(created_at);

CREATE TABLE client (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  company    TEXT,
  email      TEXT,
  phone      TEXT,
  country    TEXT NOT NULL DEFAULT 'ID',
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
);

CREATE TABLE project (
  id         TEXT PRIMARY KEY,
  client_id  TEXT REFERENCES client(id),
  title      TEXT NOT NULL,
  service    TEXT NOT NULL,
  stack      TEXT,
  status     TEXT NOT NULL DEFAULT 'discovery',
  progress   INTEGER NOT NULL DEFAULT 0,
  pic        TEXT,
  milestones TEXT NOT NULL DEFAULT '[]',
  links      TEXT,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
);
CREATE INDEX idx_project_client ON project(client_id);

CREATE TABLE invoice (
  id         TEXT PRIMARY KEY,
  number     TEXT NOT NULL UNIQUE,
  client_id  TEXT REFERENCES client(id),
  project_id TEXT REFERENCES project(id),
  items      TEXT NOT NULL,
  currency   TEXT NOT NULL DEFAULT 'IDR',
  subtotal   REAL,
  tax        REAL,
  total      REAL,
  status     TEXT NOT NULL DEFAULT 'draft',
  due_date   INTEGER,
  pdf_key    TEXT,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
);
CREATE INDEX idx_invoice_client ON invoice(client_id);
