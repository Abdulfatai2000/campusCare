# CampusCare development phases

- **Phase 0 — Full-stack scaffold (this commit):** Next.js + TypeScript config, 29 preview pages, 32 typed API routes, 10 Mongoose schemas, shared UI, mock fixture segregation, documentation and CI. No production features are claimed.
- **Phase 1 — Design system and complete frontend:** branded polished landing/auth pages, responsive student/admin workspaces, field validation, interactive demo-only flows, accessibility and animations. All non-persistent demo actions must be identified as such.
- **Phase 2 — Secure authentication and backend foundations:** Auth.js, verified sign-up, role/tenant authorization, MongoDB access, report creation and audit history.
- **Phase 3 — Services, appointments and operations:** verified provider directory, schedules, admin assignment/status, private uploads, notifications.
- **Phase 4 — Harden & launch:** tests, consent/retention, rate limiting, security review, end-to-end QA, monitoring, deployment and institution onboarding.

## Priority
An OAU-first design is not the same as an authorized OAU integration. Obtain authorization before deploying official-looking institutional information.
