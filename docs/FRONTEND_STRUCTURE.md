# Frontend Structure — Phase 0

## Marketing routes (4)
`/`, `/features`, `/about`, `/contact`.

## Authentication previews (4)
`/auth/login`, `/auth/signup`, `/auth/forgot-password`, `/auth/reset-password`.

Forms are disabled: they do not collect credentials until real Auth.js backend functionality is implemented.

## Student workspace (12)
`/dashboard`, `/report-issue`, `/my-reports`, `/my-reports/[id]`, `/services`, `/services/[id]`, `/appointments`, `/appointments/new`, `/emergency`, `/notifications`, `/profile`, `/settings`.

## Campus admin workspace (9)
`/admin`, `/admin/reports`, `/admin/reports/[id]`, `/admin/services`, `/admin/appointments`, `/admin/emergency-contacts`, `/admin/users`, `/admin/analytics`, `/admin/settings`.

## Reuse
- `src/components/layout`: site header/footer, theme toggle, workspace shell.
- `src/components/shared`: headings, metrics, report and service cards, empty states.
- `src/components/dashboard` / `src/components/admin`: page assemblies.
- `src/components/ui`: minimal design primitives; `components.json` supports later shadcn installation.
- `src/data/preview.ts`: no real data.

Next phase: build full interaction-level frontend with feedback, forms, keyboard navigation, loading/error/empty states, and responsive QA.
