# Backend Structure — Phase 0

`src/app/api/**/route.ts` defines 32 route handlers. `src/lib/api/response.ts` enforces:
- Success: `{data:T,error:null}`.
- Failure: `{data:null,error:{code,message}}`.
- No-store headers for API responses.

Every route except `GET /api/health` returns HTTP **501 NOT_IMPLEMENTED** and does not mutate data. The health response identifies the app as scaffold-only, with databaseConnected:false and authEnabled:false.

Important supporting files:
- `src/lib/db/mongoose.ts`: lazy cached connection, requiring MONGODB_URI.
- `src/lib/auth/session.ts`: always null until valid Auth.js integration.
- `src/lib/permissions/access.ts`: ownership/campus guards.
- `src/lib/validations/schemas.ts`: Zod shape and input length constraints.
- `src/lib/services/contracts.ts`: planned service responsibilities.
- `src/lib/security/password.ts`: bcrypt password helpers, not hooked to endpoints.

Do not replace 501 with fake successful API writes. For the implementation phase: validate requests, authenticate, scope by campus, enforce ownership/RBAC, persist, audit, and test.
