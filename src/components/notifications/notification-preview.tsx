"use client";
import { useState } from "react";
import { Bell, CheckCheck, Clock3 } from "lucide-react";
const examples=[
 {id:"sample-1",title:"Report update example",description:"A sample maintenance report moved to In review.",type:"Reports"},
 {id:"sample-2",title:"Appointment reminder example",description:"A sample student support appointment is shown as confirmed.",type:"Appointments"},
 {id:"sample-3",title:"CampusCare preview",description:"Notifications are illustrative and are not delivered by a university.",type:"System"}
];
export function NotificationPreview(){
 const [read,setRead]=useState<string[]>([]);
 const [filter,setFilter]=useState("all");
 const shown=examples.filter(x=>filter==="all"||filter==="unread"&&!read.includes(x.id)||filter==="read"&&read.includes(x.id));
 return <section>
  <div className="notice" style={{marginBottom:22}}>Demo inbox only. These are fictional notifications; no messages are sent or stored.</div>
  <div style={{display:"flex",gap:12,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",marginBottom:18}}>
   <label className="field">Show notifications<select value={filter} onChange={e=>setFilter(e.target.value)}><option value="all">All examples</option><option value="unread">Unread examples</option><option value="read">Read examples</option></select></label>
   <button className="button button-outline" type="button" onClick={()=>setRead(examples.map(x=>x.id))}><CheckCheck size={16}/> Mark all as read (preview)</button>
  </div>
  <p className="small muted" role="status">{examples.length-read.length} unread example notifications</p>
  {shown.length?<div className="preview-list">{shown.map(x=><article key={x.id} className="preview-item"><div style={{display:"flex",alignItems:"flex-start",gap:13}}>{read.includes(x.id)?<Clock3 color="var(--muted)" size={21}/>:<Bell color="var(--accent)" size={21}/>}<div><span className="eyebrow">{x.type} · DEMO</span><strong>{x.title}</strong><p>{x.description}</p></div></div><button type="button" className="button button-outline" disabled={read.includes(x.id)} onClick={()=>setRead(old=>[...old,x.id])}>{read.includes(x.id)?"Read":"Mark read"}</button></article>)}</div>:<div className="surface" style={{padding:28}}><h2>All caught up</h2><p className="muted">No sample notifications match this filter.</p><button type="button" className="button button-outline" onClick={()=>setFilter("all")}>View all</button></div>}
 </section>;
}
