import Link from "next/link";
import { IssueDraftForm } from "@/components/issues/issue-draft-form";
import { IssueDirectory } from "@/components/issues/issue-directory";
import { ServiceDirectory } from "@/components/services/service-directory";
import { AppointmentDraftForm } from "@/components/appointments/appointment-draft-form";
import { AppointmentDirectory } from "@/components/appointments/appointment-directory";
import { EmergencyDirectory } from "@/components/emergency/emergency-directory";
import { NotificationPreview } from "@/components/notifications/notification-preview";
import { ProfilePreview } from "@/components/profile/profile-preview";
import { StudentSettings } from "@/components/settings/student-settings";
import { StudentDashboard } from "@/components/dashboard/student-dashboard";
import { StudentIssueDetailView } from "@/components/issues/issue-detail-view";
import { StudentServiceDetailView } from "@/components/services/service-detail-view";
import { Bell, Info, ShieldAlert, Users, Plus } from "lucide-react";
import { PageHeading } from "@/components/shared/page-heading";
import { EmptyState } from "@/components/shared/empty-state";
import { previewIssues, previewServices, previewAppointments, previewEmergencyContacts } from "@/data/preview";
type StudentPage = "dashboard" | "report-issue" | "my-reports" | "services" | "appointments" | "appointments-new" | "emergency" | "notifications" | "profile" | "settings";
const descriptions:Record<StudentPage,{eyebrow:string,title:string,description:string}>={
 "dashboard":{eyebrow:"01 / Your campus",title:"A better day starts here.",description:"Your campus at a glance. Explore the student experience with labeled sample information."},
 "report-issue":{eyebrow:"02 / Report an issue",title:"Spot something? Speak up.",description:"Share information about maintenance and safety concerns. The submission flow will be activated when secure services are ready."},
 "my-reports":{eyebrow:"03 / My reports",title:"Stay in the loop.",description:"A single place to check the progress of your campus requests."},
 "services":{eyebrow:"04 / Student services",title:"Find the help you need.",description:"Browse example campus services and discover how booking and support could work."},
 "appointments":{eyebrow:"05 / Appointments",title:"Plan your next visit.",description:"Appointment scheduling will depend on participating service providers and their verified availability."},
 "appointments-new":{eyebrow:"05 / Request appointment",title:"Make time for what matters.",description:"The future booking flow will verify service availability before accepting requests."},
 "emergency":{eyebrow:"06 / Emergency support",title:"Help should be easy to find.",description:"Official campus emergency phone numbers must be confirmed with the university before publication."},
 "notifications":{eyebrow:"07 / Notifications",title:"Stay informed.",description:"Updates about report decisions, bookings, and new campus information will appear here."},
 "profile":{eyebrow:"08 / Profile",title:"Your campus identity.",description:"Manage your campus account information when secure sign-in is available."},
 "settings":{eyebrow:"09 / Preferences",title:"Make it work for you.",description:"Personalize your CampusCare experience when persistent accounts are connected."}
};
const field=(label:string,placeholder:string) => <label className="field" key={label}>{label}<input disabled placeholder={placeholder}/></label>;
export function StudentPreviewPage({page}:{page:StudentPage}){
 const meta=descriptions[page];
 return <><PageHeading {...meta}/>
 {page==="dashboard"&&<StudentDashboard/>}
 {page==="report-issue"&&<IssueDraftForm/>}
 {page==="my-reports"&&<IssueDirectory/>}
 {page==="services"&&<ServiceDirectory/>}
 {page==="appointments"&&<AppointmentDirectory/>}
 {page==="appointments-new"&&<AppointmentDraftForm/>}
 {page==="emergency"&&<EmergencyDirectory/>}
 {page==="notifications"&&<NotificationPreview/>}
 {page==="profile"&&<ProfilePreview/>}
 {page==="settings"&&<StudentSettings/>}
 </>;
}
export function StudentIssueDetail({id}:{id:string}){return <StudentIssueDetailView id={id}/>;}
export function StudentServiceDetail({id}:{id:string}){return <StudentServiceDetailView id={id}/>;}
