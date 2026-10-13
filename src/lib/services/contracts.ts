import type { AppointmentStatus, IssueStatus } from "@/types/domain";
/** Service contracts for Phase 3 implementations. API routes intentionally return 501 until authorized services exist. */
export interface IssueOperations {
 listByStudent(userId:string,campusId:string):Promise<unknown[]>;
 assign(issueId:string,staffId:string,adminId:string,campusId:string):Promise<void>;
 changeStatus(issueId:string,status:IssueStatus,adminId:string,campusId:string):Promise<void>;
}
export interface AppointmentOperations {
 request(serviceId:string,studentId:string,requestedFor:Date):Promise<string>;
 transition(appointmentId:string,status:AppointmentStatus,adminId:string):Promise<void>;
}
export interface NotificationPublisher {
 publish(userId:string,title:string,body:string):Promise<void>;
}
