# Release Manifest — Ong-OS Web Development Services (`ongki.pro`)

Release-ID: REL-20260908-001
Base: HEAD
Environment: production
Declared-Risk: R0
Rollback-Ref: HEAD~1
Rollback-Command: git revert HEAD --no-edit
Backup-Proof: NOT_REQUIRED
Status: SPECIFICATIONS_STAGED

## Contract

This file defines the current release boundary. It is repository truth for release-specific metadata and MUST describe only the release currently being prepared.

- `Base`: `HEAD` (Next.js 16 App Router SSG Living Digital Brochure with Motion tactile shell).
- `Declared-Risk`: `R0` (Pure static build, zero database, $0 Cloudflare Edge hosting).
- `Rollback-Ref`: `HEAD~1`
- `Rollback-Command`: `git revert HEAD --no-edit`
- `Backup-Proof`: `NOT_REQUIRED` (Zero database migration; all data in version-controlled JSON).
- `Status`: `SPECIFICATIONS_STAGED` (Ready for Phase 1 Scaffolding).
