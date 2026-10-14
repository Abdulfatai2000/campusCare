# CampusCare Frontend Phase 2 — student dashboard, reports and services

## Scope
The six core student routes are implemented as interactive **frontend previews**:
- `/dashboard`: fixture-derived summary metrics, sample recent issues, quick actions, service discovery.
- `/report-issue`: client-side form with required fields, length validation and clear feedback; no server submission.
- `/my-reports`: keyword search, status filtering, empty-state reset, sample report cards.
- `/my-reports/[id]`: illustrative report progress timeline, priority, category and location; missing-record state.
- `/services`: search and category filters with clear empty states.
- `/services/[id]`: service description, unverified information notice, related service links, appointment-preview navigation.

An interactive `/appointments/new` preview was also introduced early as a foundation for frontend Phase 3.

## Truthful preview boundaries
No actual OAU data, staff assignments, verified service locations, report submissions, image uploads, student identity or bookings are represented as live. Existing backend handlers continue to return HTTP 501 for unfinished workflows. Do not enter private or sensitive information into these previews.

## QA
Run `npm run typecheck`, `npm run lint`, `npm run build`, then `node scripts/smoke-phase2.mjs`. CI runs the same checks. Manually review small screens, keyboard access and screen-reader announcements before deployment.

## Next
Frontend Phase 3: appointment management, emergency guidance, notifications, profile and settings. Backend integration and campus authorization are separate later milestones.
