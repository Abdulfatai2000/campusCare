# CampusCare frontend structure — Phase 1 handoff

## Phase 1 — finished public and auth routes (8)

- Marketing: `/`, `/features`, `/about`, `/contact`.
- Authentication UI previews: `/auth/login`, `/auth/signup`, `/auth/forgot-password`, `/auth/reset-password`.

**Status:** polished responsive pages and interaction-level previews. Auth forms support validation and password visibility but do **not** collect credentials server-side, authenticate users, send emails, change passwords or create accounts. The Contact form opens a local email draft, without claiming successful delivery.

Styling: `src/app/globals.css` (base), `src/app/phase1.css` (marketing), `src/app/phase1-auth.css` (auth). Shared components are in `src/components/marketing`, `src/components/auth` and `src/components/layout`. Browser-side theme preference is local-only.

## Frontend Phase 2 — core student routes (6)

`/dashboard`, `/report-issue`, `/my-reports`, `/my-reports/[id]`, `/services`, `/services/[id]`.

## Frontend Phase 3 — student support and account routes (6)

`/appointments`, `/appointments/new`, `/emergency`, `/notifications`, `/profile`, `/settings`.

## Frontend Phase 4 — admin portal routes (9)

`/admin`, `/admin/reports`, `/admin/reports/[id]`, `/admin/services`, `/admin/appointments`, `/admin/emergency-contacts`, `/admin/users`, `/admin/analytics`, `/admin/settings`.

## Shared architecture

- `src/components/layout`: marketing header/footer, mode toggle, existing student/admin preview shell.
- `src/components/shared`: headings, metric cards, issue/service cards and empty states.
- `src/components/dashboard` / `src/components/admin`: Phase 0 preview assemblies, for later complete redesign.
- `src/components/ui`: minimal design primitives, shadcn-compatible configuration.
- `src/data/preview.ts`: sample data only, never authentic campus facts.

### Checks

`npm run typecheck`, `npm run lint`, `npm run build`, `node scripts/verify-scaffold.mjs`, `node scripts/smoke-phase1.mjs` (after building).

`scripts/smoke-phase1.mjs` boots the production build, fetches all 8 routes and asserts a registration API cannot fake success.
