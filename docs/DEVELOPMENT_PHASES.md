# CampusCare — agreed development roadmap

## Foundation (completed)

**Phase 0:** Full-stack scaffold — 29 frontend routes, 32 API handlers, 10 Mongoose models, secure-by-default service boundaries, sample fixtures, documentation and CI. Only the API health endpoint is operational; other APIs return 501.

## Frontend development — four separate phases

| Phase | Scope | Pages | Status |
| --- | --- | ---: | --- |
| Frontend Phase 1 | Marketing, core design system and authentication previews | 8 | **Implemented; CI validated** |
| Frontend Phase 2 | Dashboard, issue report form, my reports/details, service directory/details | 6 | Implemented; CI validated |
| Frontend Phase 3 | Appointments/new appointment, emergency, notifications, profile, settings | 6 | Implemented; CI validated |
| Frontend Phase 4 | Admin dashboard, report management/detail, services, appointments, emergency contacts, users, analytics, notifications, settings; frontend QA | 10 | Implemented; production, smoke and 18 browser checks pass locally; pushed CI verification tracked in delivery |

The page numbers total **30**, including the new admin notification inbox. Shared layout and UI modules may evolve in each phase, but established server code must remain compatible. All buttons in a demo must either navigate/work in preview mode or clearly indicate that live backend behavior is unavailable.

See `docs/FRONTEND_PHASE1.md`, `docs/FRONTEND_PHASE2.md`, `docs/FRONTEND_PHASE3.md`, and `docs/FRONTEND_PHASE4.md` for deliverables, preview limitations, and tests. Phases 2 and 3 were confirmed green in GitHub Actions run 38579691609 on the pre-Phase-4 commit `a8572a2`.

## Backend implementation (after frontend phases)

- Secure authentication and verified identity (Auth.js), reset tokens, ownership/role/campus boundaries.
- Mongoose persistence, issue workflow, attachment validation and audit logs.
- Campus services and genuinely available appointment slots, verified emergency information, notifications.
- Full integration tests, threat modeling, accessibility, operational monitoring and deployment hardening.

## Safety

CampusCare is **not an official OAU platform**. OAU-first design is not institutional authorization. Do not publish fabricated emergency phone numbers, service availability or sample statistics as factual data. Collect no real student data through the unfinished prototype.
