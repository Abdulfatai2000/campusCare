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

## Marketing V2: route separation and prepared enforcement contract

Public discovery routes are `/`, `/features`, `/about`, `/contact` and disabled `/auth/*` previews. Marketing navigation must not link directly to operational student or admin routes. This is an information-architecture decision, **not an authorization boundary**.

Student and admin route groups currently render fictional, public frontend previews. Their layouts are intentionally preserved so existing demonstrations remain functional. `resolveSession()` still returns `null`; no localStorage flag, sample identity or client redirect grants access. Operational APIs remain unavailable (501). Local admin interactions update only in-memory examples.

Before replacing fictional data, integrate the following server-enforced contract:

| Entry point | Required check before reading or changing real data |
| --- | --- |
| `(student)/layout.tsx` | Resolve the verified server session; redirect missing identity to login with a validated local return path |
| `(admin)/layout.tsx` | Resolve the server session and require an authorized administrative role; deny non-admin access |
| Student data services and handlers | Recheck identity, authenticated campus and resource ownership independently of layout checks |
| Administrative services and handlers | Recheck administrative membership, campus scope and allowed action on every operation |
| Dynamic IDs, uploads and appointments | Validate the requested resource belongs to the authorized scope; enforce ownership, transitions and booking concurrency server-side |

Use the existing `SessionIdentity`, `canAccessCampus`, `canEditIssue` and `isAuthorizedAdmin` contracts as integration inputs, not as a claim that route enforcement exists today. Never derive authority from submitted role/campus fields. A protected layout cannot replace handler/service authorization, and a client-side router guard is insufficient.

Backend acceptance gates: unauthenticated access is rejected; student-to-admin escalation and cross-campus/owner access fail; guessed IDs do not disclose records; changes are audited; revoked sessions stop working. Real data must not be introduced until these checks pass. Marketing V2 adds no authentication implementation or live data collection.
