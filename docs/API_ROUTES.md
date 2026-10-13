# API route contract (Phase 0)

Except `GET /api/health`, all of these endpoints currently respond with **HTTP 501**, with `{data:null,error:{code:"NOT_IMPLEMENTED",message:"…"}}`.

## Authentication
- `GET/POST /api/auth/[...nextauth]` (reserved Auth.js route).
- `POST /api/auth/register`
- `POST /api/auth/password-reset/request`
- `POST /api/auth/password-reset/complete`

## Student resources
- `GET/PATCH /api/users/me`
- `GET /api/dashboard`
- `GET /api/notifications`
- `PATCH /api/notifications/[id]/read`
- `GET/POST /api/issues`
- `GET/PATCH /api/issues/[id]`
- `GET /api/issues/[id]/history`
- `POST /api/issues/[id]/attachments`
- `GET /api/services`, `GET /api/services/[id]`
- `GET/POST /api/appointments`
- `GET /api/appointments/[id]`, `POST /api/appointments/[id]/cancel`
- `GET /api/emergency-contacts`

## Admin resources
- `GET /api/admin/stats`
- `GET /api/admin/reports`
- `PATCH /api/admin/reports/[id]/assign`, `PATCH /api/admin/reports/[id]/status`
- `GET/POST /api/admin/services`, `PATCH /api/admin/services/[id]`
- `GET /api/admin/appointments`, `PATCH /api/admin/appointments/[id]`
- `GET/POST /api/admin/emergency-contacts`, `PATCH /api/admin/emergency-contacts/[id]`
- `GET /api/admin/users`, `PATCH /api/admin/users/[id]`
- `GET /api/admin/analytics`

## Health
- `GET /api/health`: 200 with `scaffold-only` status, not a claim that the database is healthy.

For later versions: authentication first, Zod validation, tenant and ownership checks, throttling, auditing, standardized errors, and contract tests. Avoid exposing fake data as successful server responses.
