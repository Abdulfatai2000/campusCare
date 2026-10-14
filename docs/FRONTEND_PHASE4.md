# CampusCare Frontend Phase 4 — Admin portal

CampusCare is an independent prototype, not an official university service. Every person, report, appointment, service and statistic in this portal is fictional. No live API is called by admin interactions.

## Routes

| Route | Delivered behavior |
| --- | --- |
| `/admin` | Six fixture-derived metrics, category/status charts, sample activity, review queue and quick actions |
| `/admin/reports` | Search, status/category/priority filters, priority/title/ID sorting, empty-state reset |
| `/admin/reports/[id]` | Details, department assignment, confirmed status updates, timeline, validated sample notes, missing-record state |
| `/admin/appointments` | Search, service/status filters, details, approve/reject confirmations, date/time rescheduling and sample slot conflicts |
| `/admin/services` | Directory, filters, details, validated add/edit forms, confirmed enable/disable preview |
| `/admin/users` | Fictional student/staff/admin records, filters, details, disabled role and suspension controls |
| `/admin/notifications` | Searchable read/unread inbox, mark-all-read, related links and unread count in the header |
| `/admin/settings` | Fixed example profile, dashboard preferences, shared theme controls, larger text, reduced motion, privacy/security boundaries |
| `/admin/analytics` | Reusable charts, accessible textual counts/percentages and calculation explanations |
| `/admin/emergency-contacts` | Unverified placeholders, unavailable publishing and verification requirements; no invented phone numbers |

## Components and state

`src/components/admin/` contains the responsive shell, in-memory provider, dashboard, charts, report directory/detail, appointment manager, service manager/editor, user directory, notifications and settings. `admin-ui.tsx` provides filters, search fields, tables, status badges, feedback, native modal dialogs, confirmation dialogs and activity timelines. Existing shared headings, metric cards, empty states and the theme control are reused.

`src/data/admin-preview.ts` holds typed, explicitly fictional fixtures. The admin layout owns React state so local changes survive client-side navigation between admin pages and update dashboard counts/charts. Reloading or leaving the layout discards that state. Student fixtures are independent; admin previews do not change student pages.

The theme alone may persist in `localStorage`. Storage failures do not prevent theme changes. No preview state is stored in a database or sent to an API. Real role changes, account suspension, password changes and permissions remain disabled, with no handlers pretending to enforce security.

Service forms validate trimmed lengths, allowed categories and duplicate titles. Notes accept 5–500 characters of fictional text. Appointment dates and sample times are required; conflicts are checked only against the current fictional service/date/time records. These checks are frontend usability, not authorization or real scheduling guarantees.

## Accessibility and responsive behavior

- Desktop sidebar, active parent navigation for report details, skip link and breadcrumbs.
- Mobile navigation uses a native modal dialog with focus containment, Escape dismissal and focus restoration.
- Visible labels, keyboard controls, semantic tables, textual chart values and live feedback.
- Locally scrollable tables keep narrow viewports usable; charts and forms stack on mobile.
- Dark/light tokens, system reduced-motion support and optional local motion/text preferences.
- Loading, missing-record, filtered-empty and recoverable route-error states.

## Verification

```sh
npm run typecheck
npm run lint
npm run build
node scripts/verify-scaffold.mjs
node scripts/smoke-phase1.mjs
node scripts/smoke-phase2.mjs
node scripts/smoke-phase3.mjs
npm run smoke:admin
npx playwright install chromium
npm run test:admin
```

Production output lives in `.next-production` to prevent an open development server from corrupting a build in `.next`. `next start` automatically uses the production directory. The scaffold verifier handles Windows and POSIX paths and expects 30 frontend routes, including the new admin inbox.

Phase 4 smoke checks request all admin views, a known report and a missing report over HTTP. They also verify that privileged admin APIs return 501. Playwright exercises desktop/mobile layouts, report updates and reload reset, appointment decisions, service validation/visibility, disabled privileged controls, notifications, theme/preferences, keyboard focus and mobile navigation. The production build must exist before browser tests run.

For an installed Chrome fallback, set `PLAYWRIGHT_CHANNEL=chrome` in the shell before `npm run test:admin`. Local browser download encountered DNS failures during this phase; CI installs its own Chromium. No production dependency was added; Playwright is development-only.

TypeScript, ESLint, production build and all Phase 0–4 scaffold/smoke checks passed locally. All 18 Playwright checks passed locally in installed Chrome across desktop/mobile projects, including 320px and 768px viewport checks. GitHub Actions verification of the pushed revision is recorded in the delivery report.

## Backend handoff

1. Implement verified Auth.js identity and fail-closed server authorization for every admin action, scoped to the authenticated campus.
2. Replace fixtures with validated service contracts and MongoDB persistence; add ownership checks, legal status transitions, concurrency handling and audit records.
3. Add verified providers, time zones, capacity and transactional appointment conflict checks before real bookings or notifications.
4. Establish institutional authorization, retention/privacy policies and emergency-contact verification before collecting personal data or publishing operational resources.
5. Add authorization/integration tests and a manual assistive-technology review before production use. Current browser checks are useful coverage, not a complete accessibility certification.
