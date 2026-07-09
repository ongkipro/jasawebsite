-- Admin panel: staff yang mengelola project & invoice client
CREATE TABLE IF NOT EXISTS admin_user (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text NOT NULL,
  email         text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  created_at    timestamptz NOT NULL DEFAULT now()
);
