# CampusCare — Frontend Phase 3

## Delivered routes
- `/appointments`: searchable, filterable example appointment list.
- `/appointments/new`: client-side appointment request preview; no slot is reserved.
- `/emergency`: safety guidance and deliberately unverified contact placeholders. Never invent phone numbers.
- `/notifications`: interactive fictional inbox, unread filters, mark-read actions in component state.
- `/profile`: fictional display name and example campus selectors, local component state only.
- `/settings`: local-only notification toggles and appearance guidance; actual server settings remain unavailable.

## Boundaries
This is an **independent concept, not an official OAU service**. No live university data, real identity, backend submissions, notifications, emergency dispatch, or appointments are implemented. All example state is ephemeral. Do not enter real sensitive personal information.

## Validation
GitHub Actions performs TypeScript, ESLint, production build, Phase 0 scaffold verification, Phase 1/2 smoke checks and `node scripts/smoke-phase3.mjs`. Phase 3 is only considered validated after a green latest CI run.

## Next
Frontend Phase 4 covers admin operations previews and full frontend quality assurance. Backend integration and authorization follow separately.
