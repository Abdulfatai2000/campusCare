# Authentication and security blueprint

Phase 0 does not authenticate anyone, does not store credentials, and has no functioning admin controls. Account preview inputs are disabled and mutating backend handlers return 501.

## Planned foundations
- Auth.js v5 configured with appropriate secure, trusted identity provider(s).
- Password hashing via bcryptjs, no plaintext storage.
- Email verification and abuse-resistant reset-token flow.
- Server-side session resolution and authorization per route.
- Roles `student`, `campus_admin`, and `super_admin`. Admin membership must never be granted by user-submitted registration fields.
- Tenant isolation by authenticated campusId, explicit owner checks for student reports.
- Request body parsing via Zod, rate limiting, CSRF handling where applicable, audit logging, image-content checks, safe uploads.
- Least-privilege credentials and server-only environment variables.
- No real emergency numbers until officially confirmed.

## Data minimization
Student reports may expose safety, health or private details. Limit access, apply retention policies, avoid sensitive logs, and get explicit institutional authorization before production use.

## Security acceptance tests
Unauthorized mutations fail; students cannot read others' reports; campus admins cannot access other campuses; guessed IDs cannot bypass checks; approval actions write audit records; old sessions revoke cleanly.
