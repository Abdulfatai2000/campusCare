import Link from "next/link";
import { ArrowRight, CalendarDays, ClipboardList, HeartHandshake, Plus, ShieldAlert, Wrench } from "lucide-react";
import { MetricCard } from "@/components/shared/metric-card";
import { IssueCard } from "@/components/shared/issue-card";
import { ServiceCard } from "@/components/shared/service-card";
import { previewIssues, previewServices, previewAppointments } from "@/data/preview";
export function StudentDashboard(){
 const inProgress=previewIssues.filter(x=>x.status==="in_progress").length;
 return <section>
  <div className="notice" style={{marginBottom:20}}>All dashboard counts and recent activity below are illustrative sample records, not real campus statistics.</div>
  <div className="metric-grid">
   <MetricCard icon={<ClipboardList size={23}/>} value={String(previewIssues.length).padStart(2,"0")} label="Example reports"/>
   <MetricCard icon={<Wrench size={23}/>} value={String(inProgress).padStart(2,"0")} label="Example in progress"/>
   <MetricCard icon={<CalendarDays size={23}/>} value={String(previewAppointments.length).padStart(2,"0")} label="Example appointments"/>
   <MetricCard icon={<HeartHandshake size={23}/>} value={String(previewServices.length).padStart(2,"0")} label="Service categories"/>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,margin:"36px 0 17px",flexWrap:"wrap"}}><h2 style={{fontSize:24,margin:0}}>Quick actions</h2><span className="eyebrow">DEMO WORKSPACE</span></div>
  <div className="card-grid">
   <Link href="/report-issue" className="card"><Plus size={29} color="var(--accent)"/><h3>Report an issue</h3><p>Try the interactive reporting form and its validation.</p><span className="eyebrow" style={{display:"block",marginTop:22}}>Try preview ↗</span></Link>
   <Link href="/appointments/new" className="card"><CalendarDays size={29} color="var(--accent)"/><h3>Request appointment</h3><p>Explore a sample request without booking a real slot.</p><span className="eyebrow" style={{display:"block",marginTop:22}}>Try preview ↗</span></Link>
   <Link href="/emergency" className="card"><ShieldAlert size={29} color="var(--accent)"/><h3>Emergency guidance</h3><p>See how verified campus contacts will be displayed.</p><span className="eyebrow" style={{display:"block",marginTop:22}}>View guidance ↗</span></Link>
  </div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,margin:"38px 0 17px"}}><h2 style={{fontSize:24,margin:0}}>Recent example reports</h2><Link className="small" href="/my-reports">View all <ArrowRight size={15} style={{display:"inline"}}/></Link></div>
  <div className="preview-list">{previewIssues.slice(0,3).map(x=><IssueCard key={x.id} issue={x}/>)}</div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,margin:"38px 0 17px"}}><h2 style={{fontSize:24,margin:0}}>Explore campus services</h2><Link className="small" href="/services">Browse all <ArrowRight size={15} style={{display:"inline"}}/></Link></div>
  <div className="card-grid">{previewServices.slice(0,3).map(x=><ServiceCard key={x.id} service={x}/>)}</div>
 </section>;
}
