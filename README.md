# CampusCare

**Your campus. Your community. Your care.**

An independent, student-first platform prototype for campus issue reporting, tracking, service discovery, emergency resources, appointment requests, and administrative workflows.

> **Independent OAU-first concept.** CampusCare is not affiliated with or officially endorsed by Obafemi Awolowo University. Emergency contacts, offices, schedules and administration require separate verification/authorization before real-world use.

## Phase 0 — scaffold status

The repository contains **29 frontend route shells**, **32 API route handlers**, **10 Mongoose models**, reusable UI components, sample fixtures, validation/security boundaries, and technical documentation.

The public website and student/admin preview routes render. All API routes except `/api/health` return **501 Not Implemented**. Authentication, issue submission, bookings, uploads, notifications, and privileged admin actions are not live.

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
```

CI runs all checks automatically on each push to `main`.

## Main routes

| Area | URLs |
| --- | --- |
| Public | `/`, `/features`, `/about`, `/contact` |
| Auth (disabled preview) | `/auth/login`, `/auth/signup`, `/auth/forgot-password`, `/auth/reset-password` |
| Student | `/dashboard`, `/report-issue`, `/my-reports`, `/services`, `/appointments`, `/emergency`, `/notifications`, `/profile`, `/settings` |
| Campus admin (preview) | `/admin`, `/admin/reports`, `/admin/services`, `/admin/appointments`, `/admin/emergency-contacts`, `/admin/users`, `/admin/analytics`, `/admin/settings` |
| Health | `GET /api/health` |

Detailed dynamic routes and the 32 API endpoints are documented in `docs/FRONTEND_STRUCTURE.md` and `docs/API_ROUTES.md`.

## Directory structure

```text
src/
  app/
    (marketing)/   Public website
    (auth)/        Disabled login/signup previews
    (student)/     Student UI route shells
    (admin)/       Administrative UI route shells
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
scripts/           Scaffold structure verifier
```

## Security notes

No production administration is available. Preview screens must not be used to collect student records. Tenant access is intended to be enforced server-side from authenticated identity (not a client-supplied campusId). See `docs/AUTH_SECURITY.md`.

## Roadmap

- **Phase 1:** Complete polished frontend interactions, responsive experience, accessibility, and safe preview workflows.
- **Phase 2:** Real authentication, database operations, role boundaries, report workflow.
- **Phase 3:** Verified services, appointments, media, and notifications.
- **Phase 4:** Security testing, production hardening, deployment and institutional onboarding.

See `docs/DEVELOPMENT_PHASES.md` and `docs/GIT_WORKFLOW.md`.

## Maintainer

Built by Ojewande Abdulfatai Ayoye (codeWande).
