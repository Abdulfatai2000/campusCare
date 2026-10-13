import type { SessionIdentity } from "@/lib/auth/session";
export function canAccessCampus(session: SessionIdentity | null,campusId:string):boolean {
 return !!session && (session.role==="super_admin" || session.campusId===campusId);
}
export function canEditIssue(session: SessionIdentity|null,ownerId:string,campusId:string):boolean {
 if(!session)return false;
 if(session.role==="super_admin")return true;
 if(session.role==="campus_admin")return session.campusId===campusId;
 return session.userId===ownerId && session.campusId===campusId;
}
export function isAuthorizedAdmin(session:SessionIdentity|null,campusId:string):boolean {
 return !!session && (session.role==="super_admin" || (session.role==="campus_admin"&&session.campusId===campusId));
}
