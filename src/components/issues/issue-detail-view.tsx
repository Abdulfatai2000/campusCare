import Link from "next/link";
import { MapPin, ArrowLeft, Clock3, CheckCircle2, CircleDot } from "lucide-react";
import { PageHeading } from "@/components/shared/page-heading";
import { previewIssues } from "@/data/preview";
const stages=["pending","in_review","in_progress","resolved"] as const;
const labels:Record<string,string>={pending:"Pending",in_review:"In review",in_progress:"In progress",resolved:"Resolved",rejected:"Rejected"};
export function StudentIssueDetailView({id}:{id:string}){
 const issue=previewIssues.find(x=>x.id===id);
 if(!issue)return <><PageHeading eyebrow="03 / Reports / Detail" title="Example report not found" description="No matching sample record exists. This preview never exposes private report information."/><Link href="/my-reports" className="button button-outline"><ArrowLeft size={16}/> Back to reports</Link></>;
 const current=stages.indexOf(issue.status as typeof stages[number]);
 return <section>
  <PageHeading eyebrow="03 / Reports / Detail" title={issue.title} description="Illustrative status history for a sample issue. No campus team has reviewed or received this report."/>
  <div className="notice" style={{marginBottom:22}}>DEMO REPORT · Status milestones are visual examples, not actual events or timestamps.</div>
  <div className="surface" style={{padding:26,maxWidth:850}}>
   <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:18}}><span className="chip">{labels[issue.status]}</span><span className="chip">{issue.priority} priority</span><span className="chip">{issue.category}</span></div>
   <p style={{display:"flex",alignItems:"center",gap:8}}><MapPin size={17}/>{issue.location}</p>
   <p className="small muted">Reference: {issue.id} · Created: {issue.createdAt}</p>
   <h2 style={{fontSize:23,margin:"32px 0 14px"}}>Illustrative progress</h2>
   {issue.status==="rejected"?<p className="notice">Example status: Rejected. Real decisions will require an authorized campus reviewer.</p>:<ol style={{listStyle:"none",padding:0,margin:0,display:"grid",gap:12}}>{stages.map((stage,index)=><li key={stage} className="preview-item"><div style={{display:"flex",alignItems:"center",gap:12}}>{index<current?<CheckCircle2 color="var(--accent)" size={20}/>:index===current?<CircleDot color="var(--accent)" size={20}/>:<Clock3 color="var(--muted)" size={20}/>}<div><strong>{labels[stage]}</strong><p>{index<current?"Example milestone passed":index===current?"Current sample status":"Not reached in this sample"}</p></div></div><span className="small muted">{index<=current?"Demo":"Future"}</span></li>)}</ol>}
   <div className="notice" style={{marginTop:22}}>Attachments, comments, assigned staff, and real status timestamps will require secure backend authorization.</div>
  </div>
  <Link href="/my-reports" className="button button-outline" style={{marginTop:22}}><ArrowLeft size={16}/> All example reports</Link>
 </section>;
}
