"use client";
import { useState } from "react";
import Link from "next/link";
import { UserRound, LockKeyhole, GraduationCap } from "lucide-react";
export function ProfilePreview(){
 const [name,setName]=useState("");
 const [campus,setCampus]=useState("Obafemi Awolowo University (example)");
 return <section className="surface" style={{padding:28,maxWidth:790}}>
  <div className="notice" style={{marginBottom:22}}>Profile preview only. No account is signed in. Inputs are temporary and never submitted or stored. Please use fictional details.</div>
  <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:25}}><div className="metric" style={{padding:18}}><UserRound size={30} color="var(--accent)"/></div><div><h2 style={{fontSize:24,margin:0}}>Student profile preview</h2><p className="muted small">Independent CampusCare concept</p></div></div>
  <div className="form-grid">
   <label className="field">Display name (fictional only)<input value={name} maxLength={60} onChange={e=>setName(e.target.value)} placeholder="Example Student"/></label>
   <label className="field">Campus example<select value={campus} onChange={e=>setCampus(e.target.value)}><option>Obafemi Awolowo University (example)</option><option>Other institution (future support)</option></select></label>
   <div className="notice"><GraduationCap size={16} style={{display:"inline",verticalAlign:"middle",marginRight:8}}/>Preview display: {name.trim()||"Example Student"} · {campus}</div>
   <p className="small muted"><LockKeyhole size={15} style={{display:"inline",verticalAlign:"middle",marginRight:7}}/>Verified email, student ID, profile photo and account edits require secure authentication.</p>
   <div style={{display:"flex",gap:12,flexWrap:"wrap"}}><button type="button" className="button button-outline" onClick={()=>{setName("");setCampus("Obafemi Awolowo University (example)");}}>Reset preview</button><Link href="/auth/login" className="button">View sign-in preview</Link></div>
  </div>
 </section>;
}
