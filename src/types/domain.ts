export const USER_ROLES = ["student", "campus_admin", "super_admin"] as const;
export type UserRole = (typeof USER_ROLES)[number];
export const ISSUE_STATUSES = ["pending","in_review","in_progress","resolved","rejected"] as const;
export type IssueStatus = (typeof ISSUE_STATUSES)[number];
export const ISSUE_PRIORITIES = ["low","medium","high","urgent"] as const;
export type IssuePriority = (typeof ISSUE_PRIORITIES)[number];
export const APPOINTMENT_STATUSES = ["requested","confirmed","cancelled","completed"] as const;
export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];
export interface IssueSummary {
  id: string; title: string; category: string; location: string; status: IssueStatus;
  createdAt: string; priority: IssuePriority;
}
export interface CampusServiceSummary { id: string; title: string; category: string; description: string; icon: string; }
export interface EmergencyContactSummary { label: string; detail: string; verified: boolean; }
export interface AppointmentSummary { id: string; service: string; date: string; status: AppointmentStatus; }
export type ApiSuccess<T> = { data: T; error: null };
export type ApiFailure = { data: null; error: { code: string; message: string } };
