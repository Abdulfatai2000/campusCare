import type { UserRole } from "@/types/domain";
export interface SessionIdentity {userId:string;role:UserRole;campusId:string|null}
/**
 * Phase 0 SECURITY BOUNDARY:
 * No test session or fake administrator is ever returned.
 * Auth.js configuration, login and session resolution are implemented in Phase 3.
 */
export async function resolveSession():Promise<SessionIdentity|null>{return null;}
