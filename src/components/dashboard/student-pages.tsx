import Link from "next/link";
import { IssueDraftForm } from "@/components/issues/issue-draft-form";
import { IssueDirectory } from "@/components/issues/issue-directory";
import { ServiceDirectory } from "@/components/services/service-directory";
import { AppointmentDraftForm } from "@/components/appointments/appointment-draft-form";
import { StudentDashboard } from "@/components/dashboard/student-dashboard";
import { StudentIssueDetailView } from "@/components/issues/issue-detail-view";
import { StudentServiceDetailView } from "@/components/services/service-detail-view";
import { Bell, Info, ShieldAlert, Users } from "lucide-react";
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
 {page==="appointments"&&<><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,flexWrap:"wrap",gap:12}}><p className="small muted">Example appointments (not real bookings).</p><Link href="/appointments/new" className="button">Request appointment <Plus size={15}/></Link></div><div className="preview-list">{previewAppointments.map(x=><div className="preview-item" key={x.id}><div><strong>{x.service}</strong><p>{x.date}</p></div><span className="status">{x.status}</span></div>)}</div></>}
 {page==="appointments-new"&&<AppointmentDraftForm/>}
 {page==="emergency"&&<><div className="notice" style={{marginBottom:22,borderColor:"#e5ac5c"}}><ShieldAlert size={15} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/>Emergency numbers on this page are intentionally not populated until verified. For immediate help, contact the appropriate official emergency services available in your area.</div><div className="card-grid">{previewEmergencyContacts.map(c=><article className="card" key={c.label}><ShieldAlert color="var(--accent)" size={28}/><h3>{c.label}</h3><p>{c.detail}</p><span className="eyebrow" style={{display:"block",marginTop:24}}>AWAITING VERIFICATION</span></article>)}</div></>}
 {page==="notifications"&&<EmptyState title="Nothing here yet." description="When real accounts and server notifications are implemented, relevant updates will appear here." action={<Bell color="var(--accent)" size={27}/>}/>}
 {page==="profile"&&<div className="surface" style={{padding:28,maxWidth:670}}><div className="eyebrow">Account preview</div><h2 style={{fontSize:24}}>Your details, your control.</h2><p className="muted small">No personal account is connected. Profile management will be enabled after secure authentication.</p><div className="form-grid" style={{marginTop:22}}>{field("Full name","Sign in to view your name")}{field("University email","Sign in to view your email")}{field("Campus","Select your institution")}<button className="button" disabled>Save profile (coming soon)</button></div></div>}
 {page==="settings"&&<div className="card-grid"><div className="card"><Info color="var(--accent)" size={25}/><h3>Appearance</h3><p>Use the theme switch in the top bar to toggle dark and light themes. Your selection is saved on this device.</p></div><div className="card"><Bell color="var(--accent)" size={25}/><h3>Notifications</h3><p>Notification preferences will be available once real accounts are enabled.</p></div><div className="card"><Users color="var(--accent)" size={25}/><h3>Privacy</h3><p>Privacy controls and account export will be designed before real student data is collected.</p></div></div>}
 </>;
}
export function StudentIssueDetail({id}:{id:string}){return <StudentIssueDetailView id={id}/>;}
export function StudentServiceDetail({id}:{id:string}){return <StudentServiceDetailView id={id}/>;}
