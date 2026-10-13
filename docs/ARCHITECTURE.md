# Architecture

## Layers
1. **Next.js App Router** in `src/app`: route groups `(marketing)`, `(auth)`, `(student)`, `(admin)` share independently styled shells.
2. **Components** in `src/components`: reusable cards, headings, navigation, preview pages and UI primitives.
3. **Backend** in `src/app/api`: typed route handlers with consistent response envelopes via `src/lib/api/response.ts`.
4. **Validation and authorization**: `src/lib/validations` (Zod), `src/lib/permissions` and `src/lib/auth` (currently fail-closed).
5. **Data**: `src/models` for 10 Mongoose schemas, cached lazy connector `src/lib/db/mongoose.ts`.
6. **Sample UI**: `src/data/preview.ts`, clearly labeled and separate from real records.

## Intended request path
Authenticated student / admin → validated JSON → session authorization → campus or ownership check → service layer → MongoDB → audit event/notification → normalized result.

Every resource query must be tenant-scoped. Never authorize with campus IDs taken solely from client input. Super admin access requires explicit policy. The preview has no production credentials or writes.

## Runtime
Node.js runtime for API; Next.js + TypeScript + Tailwind v4 for UI. Motion is installed for later frontend work. Cloudinary, Resend, Auth.js are declared as dependencies but not configured as live services.
