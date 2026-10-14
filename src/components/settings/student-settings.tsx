"use client";
import { useState } from "react";
import { Bell, Eye, LockKeyhole, SlidersHorizontal } from "lucide-react";
export function StudentSettings(){
 const [updates,setUpdates]=useState(true);
 const [reminders,setReminders]=useState(true);
 const [reducedMotion,setReducedMotion]=useState(false);
 return <section style={{display:"grid",gap:18,maxWidth:850}}>
  <div className="notice">Settings are temporary UI previews and reset on refresh. No notification delivery or account preferences are connected to a server.</div>
  <article className="surface" style={{padding:25}}><h2 style={{display:"flex",gap:10,alignItems:"center",fontSize:22}}><Bell color="var(--accent)"/> Notification preferences</h2><p className="muted small">Demonstration toggles only. They do not control actual messages.</p><div className="form-grid">
   <label className="preview-item"><span><strong>Report updates</strong><span className="small muted" style={{display:"block"}}>Preview of report status alerts</span></span><input type="checkbox" checked={updates} onChange={e=>setUpdates(e.target.checked)}/></label>
   <label className="preview-item"><span><strong>Appointment reminders</strong><span className="small muted" style={{display:"block"}}>Preview of booking reminders</span></span><input type="checkbox" checked={reminders} onChange={e=>setReminders(e.target.checked)}/></label>
  </div></article>
  <article className="surface" style={{padding:25}}><h2 style={{display:"flex",gap:10,alignItems:"center",fontSize:22}}><Eye color="var(--accent)"/> Appearance & accessibility</h2><p className="muted">Use the theme toggle in the workspace header to change light and dark themes.</p><label className="preview-item"><span><strong>Reduce decorative motion</strong><span className="small muted" style={{display:"block"}}>Local preview preference</span></span><input type="checkbox" checked={reducedMotion} onChange={e=>setReducedMotion(e.target.checked)}/></label><p className="small muted">Your device's reduced-motion setting is respected automatically. This preview toggle does not override it.</p></article>
  <article className="surface" style={{padding:25}}><h2 style={{display:"flex",gap:10,alignItems:"center",fontSize:22}}><LockKeyhole color="var(--accent)"/> Account and privacy</h2><p className="muted">Account export, deletion, privacy choices and security controls will be available only after secure identity and backend services are implemented.</p><button type="button" className="button button-outline" onClick={()=>{setUpdates(true);setReminders(true);setReducedMotion(false);}}><SlidersHorizontal size={16}/> Reset demo preferences</button></article>
 </section>;
}
