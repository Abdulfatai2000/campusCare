import type { IssueSummary, CampusServiceSummary, AppointmentSummary, EmergencyContactSummary } from "@/types/domain";
/** SAMPLE FIXTURES ONLY — never represent real campus data. */
export const previewIssues: IssueSummary[] = [
  { id:"DEMO-CC-001",title:"Broken study hall lighting",category:"Facilities",location:"Example Study Hall",status:"in_progress",createdAt:"Sample date",priority:"medium" },
  { id:"DEMO-CC-002",title:"Water supply interruption",category:"Utilities",location:"Example Hall of Residence",status:"in_review",createdAt:"Sample date",priority:"high" },
  { id:"DEMO-CC-003",title:"Damaged walkway",category:"Maintenance",location:"Example Campus Walkway",status:"pending",createdAt:"Sample date",priority:"medium" }
];
export const previewServices: CampusServiceSummary[] = [
  { id:"health", title:"Health services",category:"Wellbeing",description:"Find healthcare support and request a consultation.",icon:"heart" },
  { id:"student-support", title:"Student support",category:"Campus life",description:"Get help navigating campus services and resources.",icon:"users" },
  { id:"maintenance",title:"Maintenance desk",category:"Facilities",description:"Report repairs and request assistance with facilities.",icon:"wrench" },
  { id:"advising",title:"Academic guidance",category:"Academics",description:"Explore advising sessions and study-support options.",icon:"book" }
];
export const previewAppointments: AppointmentSummary[] = [
  {id:"DEMO-APT-001",service:"Student support consultation",date:"Example schedule · 10:00 AM",status:"requested"},
  {id:"DEMO-APT-002",service:"Campus health guidance",date:"Example schedule · 2:00 PM",status:"confirmed"}
];
export const previewEmergencyContacts: EmergencyContactSummary[] = [
  {label:"Campus security",detail:"Number pending verification",verified:false},
  {label:"Campus health centre",detail:"Number pending verification",verified:false},
  {label:"Emergency services",detail:"Use locally verified emergency contacts",verified:false}
];
