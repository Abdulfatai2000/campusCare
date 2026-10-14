# CampusCare

**Your campus. Your community. Your care.**

An independent, student-first platform prototype for campus issue reporting, tracking, service discovery, emergency resources, appointment requests, and administrative workflows.

> **Independent OAU-first concept.** CampusCare is not affiliated with or officially endorsed by Obafemi Awolowo University. Emergency contacts, offices, schedules and administration require separate verification/authorization before real-world use.

## Project status — Frontend Phases 1–4 implemented

The repository contains **30 frontend routes**, **32 API route handlers**, **10 Mongoose models**, reusable UI components, sample fixtures, validation/security boundaries, and technical documentation.

The four public pages and four authentication pages now have full Phase 1 responsive design, navigation, accessible form previews, themes, and motion. The student and admin workspaces now provide interactive frontend previews; all data is fictional. All API routes except `/api/health` return **501 Not Implemented**. Authentication, issue submission, bookings, uploads, notifications, and privileged admin actions are not live.

## Stack

Next.js App Router · React 19 · TypeScript · Tailwind CSS v4 · Lucide React · Mongoose / MongoDB · Zod · Auth.js (planned) · shadcn-compatible UI configuration · Motion (planned) · Cloudinary and Resend (planned).

## Local development

Requires Node.js 20.9+ (22 recommended) and npm.

```bash
git clone https://github.com/Abdulfatai2000/campusCare.git
cd campusCare
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Phase 0 works without actual database/API credentials; leave the placeholders empty and don't publish secrets.

To check code quality:

```bash
npm run typecheck
npm run lint
npm run build
node scripts/verify-scaffold.mjs
node scripts/smoke-phase1.mjs # requires npm run build first
node scripts/smoke-phase2.mjs
node scripts/smoke-phase3.mjs
npm run smoke:admin
npx playwright install chromium
npm run test:admin
```

CI runs all checks automatically on each push to `main`. Marketing V2 adds `npm run smoke:marketing` for public links/content and `npm run test:e2e` for the combined marketing/admin browser suite. See [Marketing V2](docs/MARKETING_V2.md) for the public architecture, visual system, accessibility and preview boundaries.

## Main routes

| Area | URLs |
| --- | --- |
| Public | `/`, `/features`, `/about`, `/contact` |
| Auth (disabled preview) | `/auth/login`, `/auth/signup`, `/auth/forgot-password`, `/auth/reset-password` |
| Student | `/dashboard`, `/report-issue`, `/my-reports`, `/services`, `/appointments`, `/emergency`, `/notifications`, `/profile`, `/settings` |
| Campus admin (preview) | `/admin`, `/admin/reports`, `/admin/services`, `/admin/appointments`, `/admin/emergency-contacts`, `/admin/users`, `/admin/analytics`, `/admin/notifications`, `/admin/settings` |
| Health | `GET /api/health` |

Detailed dynamic routes and the 32 API endpoints are documented in `docs/FRONTEND_STRUCTURE.md` and `docs/API_ROUTES.md`.

## Directory structure

```text
src/
  app/
    (marketing)/   Public website
    (auth)/        Disabled login/signup previews
    (student)/     Student preview pages
    (admin)/       Administrative preview pages
    api/           HTTP endpoints, 501 until implementation
  components/
    ui/            Design primitives
    layout/        Site/workspace layout and navigation
    shared/        Reusable display components
    auth/          Authentication UI previews
    dashboard/     Student UI assemblies
    admin/         Admin UI assemblies
  constants/       Route navigation
  data/            Sample fixtures only
  hooks/           Client hooks
  lib/
    api/           Consistent JSON envelopes
    auth/          Fail-closed session placeholder
    db/            Lazy MongoDB connector
    permissions/   Campus and resource gates
    security/      Password-hashing helpers
    services/      Typed service contracts
    validations/   Zod schemas
  models/          10 Mongoose data schemas
  types/           Domain types
docs/              Project, architecture, API, security, design and Git documentation
scripts/           Scaffold verifier and production-route smoke test
```

## Security notes

No production administration is available. Preview screens must not be used to collect student records. Tenant access is intended to be enforced server-side from authenticated identity (not a client-supplied campusId). See `docs/AUTH_SECURITY.md`.

## Frontend roadmap (four phases)

1. **Frontend Phase 1 — Completed:** branded Home, Features, About, Contact, Login, Signup, Forgot Password, Reset Password; responsive styling, contact email-draft flow, dark/light mode and page navigation.
2. **Frontend Phase 2 — Implemented:** student dashboard, issue reporting, report tracking/details, campus services and service details.
3. **Frontend Phase 3 — Implemented:** appointment calendar and request UI, emergency directory, notifications, profile and student settings.
4. **Frontend Phase 4 — Implemented:** ten admin-portal views, local management previews, accessibility and responsive browser QA.

See [Phase 1 handoff](docs/FRONTEND_PHASE1.md), [Phase 4 handoff](docs/FRONTEND_PHASE4.md), [frontend routes](docs/FRONTEND_STRUCTURE.md), and [Git workflow](docs/GIT_WORKFLOW.md).

Backend implementation follows separately: secure Auth.js identity, MongoDB services, verified contacts, authorization and real workflows. Phase 1 UIs are not live services.
