# CampusCare — agreed development roadmap

## Foundation (completed)

**Phase 0:** Full-stack scaffold — 29 frontend routes, 32 API handlers, 10 Mongoose models, secure-by-default service boundaries, sample fixtures, documentation and CI. Only the API health endpoint is operational; other APIs return 501.

## Frontend development — four separate phases

| Phase | Scope | Pages | Status |
| --- | --- | ---: | --- |
| Frontend Phase 1 | Marketing, core design system and authentication previews | 8 | **Implemented; CI validated** |
| Frontend Phase 2 | Dashboard, issue report form, my reports/details, service directory/details | 6 | Next |
| Frontend Phase 3 | Appointments/new appointment, emergency, notifications, profile, settings | 6 | Planned |
| Frontend Phase 4 | Admin dashboard, report management/detail, services, appointments, emergency contacts, users, analytics, settings; final frontend QA | 9 | Planned |

The page numbers total **29**. Shared layout and UI modules may evolve in each phase, but established server code must remain compatible. All buttons in a demo must either navigate/work in preview mode or clearly indicate that live backend behavior is unavailable.

See `docs/FRONTEND_PHASE1.md` for the completed eight-page deliverables and tests.

## Backend implementation (after frontend phases)

- Secure authentication and verified identity (Auth.js), reset tokens, ownership/role/campus boundaries.
- Mongoose persistence, issue workflow, attachment validation and audit logs.
- Campus services and genuinely available appointment slots, verified emergency information, notifications.
- Full integration tests, threat modeling, accessibility, operational monitoring and deployment hardening.

## Safety

CampusCare is **not an official OAU platform**. OAU-first design is not institutional authorization. Do not publish fabricated emergency phone numbers, service availability or sample statistics as factual data. Collect no real student data through the unfinished prototype.
