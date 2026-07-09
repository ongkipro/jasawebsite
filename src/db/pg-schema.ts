// Skema Postgres untuk client portal (register/login + lihat project & invoice).
// Dipakai lewat Drizzle (postgres-js) — dev/VPS langsung, prod Workers via Hyperdrive.
import { pgTable, uuid, text, integer, numeric, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const projectStatus = pgEnum('project_status', ['baru', 'proses', 'review', 'selesai']);
export const invoiceStatus = pgEnum('invoice_status', ['draft', 'terkirim', 'lunas', 'jatuh_tempo']);

export const clientUser = pgTable('client_user', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  company: text('company'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const project = pgTable('project', {
  id: uuid('id').defaultRandom().primaryKey(),
  clientId: uuid('client_id')
    .notNull()
    .references(() => clientUser.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  service: text('service'),
  status: projectStatus('status').default('baru').notNull(),
  progress: integer('progress').default(0).notNull(), // 0–100
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const invoice = pgTable('invoice', {
  id: uuid('id').defaultRandom().primaryKey(),
  clientId: uuid('client_id')
    .notNull()
    .references(() => clientUser.id, { onDelete: 'cascade' }),
  number: text('number').notNull(),
  title: text('title').notNull(),
  amount: numeric('amount', { precision: 12, scale: 0 }).notNull(),
  currency: text('currency').default('IDR').notNull(),
  status: invoiceStatus('status').default('terkirim').notNull(),
  dueDate: timestamp('due_date', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// Admin panel (staff yang mengelola project & invoice client)
export const adminUser = pgTable('admin_user', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export type ClientUser = typeof clientUser.$inferSelect;
export type Project = typeof project.$inferSelect;
export type Invoice = typeof invoice.$inferSelect;
export type AdminUser = typeof adminUser.$inferSelect;
