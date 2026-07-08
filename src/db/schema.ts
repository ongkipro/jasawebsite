import { sqliteTable, text, integer, real, index } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// Data operasional di D1 (PRD §16.1). Konten publik (portfolio/layanan/blog) di Sanity.

export const appUser = sqliteTable('app_user', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  role: text('role', { enum: ['admin', 'staff'] }).notNull().default('staff'),
  passwordHash: text('password_hash'),
  active: integer('active').notNull().default(1),
});

export const lead = sqliteTable(
  'lead',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    contact: text('contact').notNull(), // WA/phone
    email: text('email'),
    service: text('service'), // slug layanan
    budgetRange: text('budget_range'),
    message: text('message'),
    source: text('source', { enum: ['form', 'whatsapp', 'ads'] }).notNull().default('form'),
    utm: text('utm'), // JSON string
    status: text('status', {
      enum: ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'],
    })
      .notNull()
      .default('new'),
    assignedTo: text('assigned_to').references(() => appUser.id),
    notes: text('notes').notNull().default('[]'), // JSON string
    createdAt: integer('created_at')
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (t) => [index('idx_lead_status').on(t.status), index('idx_lead_created').on(t.createdAt)],
);

export const client = sqliteTable('client', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company'),
  email: text('email'),
  phone: text('phone'),
  country: text('country').notNull().default('ID'), // ID | MY
  createdAt: integer('created_at')
    .notNull()
    .default(sql`(unixepoch())`),
});

export const project = sqliteTable(
  'project',
  {
    id: text('id').primaryKey(),
    clientId: text('client_id').references(() => client.id),
    title: text('title').notNull(),
    service: text('service').notNull(),
    stack: text('stack'), // shopify/wordpress/astro/next
    status: text('status', {
      enum: ['discovery', 'design', 'build', 'review', 'launch', 'done'],
    })
      .notNull()
      .default('discovery'),
    progress: integer('progress').notNull().default(0), // 0-100
    pic: text('pic'),
    milestones: text('milestones').notNull().default('[]'), // JSON: [{name,due,done}]
    links: text('links'), // JSON: {repo,deploy}
    createdAt: integer('created_at')
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (t) => [index('idx_project_client').on(t.clientId)],
);

export const invoice = sqliteTable(
  'invoice',
  {
    id: text('id').primaryKey(),
    number: text('number').notNull().unique(), // INV-2026-001
    clientId: text('client_id').references(() => client.id),
    projectId: text('project_id').references(() => project.id),
    items: text('items').notNull(), // JSON: [{desc,qty,price}]
    currency: text('currency', { enum: ['IDR', 'MYR'] }).notNull().default('IDR'),
    subtotal: real('subtotal'),
    tax: real('tax'),
    total: real('total'),
    status: text('status', { enum: ['draft', 'sent', 'paid', 'overdue'] })
      .notNull()
      .default('draft'),
    dueDate: integer('due_date'),
    pdfKey: text('pdf_key'), // R2 object key
    createdAt: integer('created_at')
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (t) => [index('idx_invoice_client').on(t.clientId)],
);
