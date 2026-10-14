"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, Plus } from "lucide-react";
import { previewAppointments } from "@/data/preview";
export function AppointmentDirectory(){
 const [query,setQuery]=useState("");
 const [status,setStatus]=useState("all");
 const filtered=useMemo(()=>previewAppointments.filter(x=>(status==="all"||x.status===status)&&[x.service,x.id,x.date].some(v=>v.toLowerCase().includes(query.trim().toLowerCase()))),[query,status]);
 return <section>
  <div className="notice" style={{marginBottom:20}}>Example appointments only. Nothing shown here is a confirmed booking with a real campus office.</div>
  <div className="surface" style={{padding:18,display:"flex",gap:14,flexWrap:"wrap",alignItems:"end",marginBottom:22}}>
   <label className="field" style={{flex:"2 1 200px"}}>Search appointments<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Service or reference"/></label>
   <label className="field" style={{flex:"1 1 160px"}}>Status<select value={status} onChange={e=>setStatus(e.target.value)}><option value="all">All statuses</option><option value="requested">Requested</option><option value="confirmed">Confirmed</option><option value="cancelled">Cancelled</option><option value="completed">Completed</option></select></label>
   <Link href="/appointments/new" className="button"><Plus size={16}/> Request preview</Link>
  </div>
  <p className="small muted" role="status">{filtered.length} sample {filtered.length===1?"appointment":"appointments"}</p>
  {filtered.length?<div className="preview-list">{filtered.map(x=><article className="preview-item" key={x.id}><div style={{display:"flex",alignItems:"center",gap:12}}><CalendarDays color="var(--accent)" size={23}/><div><strong>{x.service}</strong><p>{x.date} · {x.id}</p></div></div><span className="status">{x.status}</span></article>)}</div>:<div className="surface" style={{padding:25}}><h2>No matching appointments</h2><p className="muted">Adjust your filters to see the sample records.</p><button className="button button-outline" type="button" onClick={()=>{setQuery("");setStatus("all");}}>Reset filters</button></div>}
 </section>;
}
