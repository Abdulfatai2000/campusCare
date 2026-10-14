"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { IssueCard } from "@/components/shared/issue-card";
import { previewIssues } from "@/data/preview";
export function IssueDirectory(){
 const [query,setQuery]=useState("");
 const [status,setStatus]=useState("all");
 const issues=useMemo(()=>previewIssues.filter(issue=>(status==="all"||issue.status===status)&&[issue.title,issue.location,issue.category,issue.id].some(text=>text.toLowerCase().includes(query.toLowerCase().trim()))),[query,status]);
 return <section>
  <div className="notice" style={{marginBottom:20}}>Sample reports only. These are not your personal records.</div>
  <div className="surface" style={{padding:16,display:"flex",flexWrap:"wrap",gap:14,alignItems:"end",marginBottom:20}}>
   <label className="field" style={{flex:"1 1 220px"}}>Search sample reports<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search title, location or category"/></label>
   <label className="field" style={{flex:"1 1 180px"}}>Status<select value={status} onChange={e=>setStatus(e.target.value)}><option value="all">All statuses</option><option value="pending">Pending</option><option value="in_review">In review</option><option value="in_progress">In progress</option><option value="resolved">Resolved</option></select></label>
   <Link href="/report-issue" className="button">Report an issue</Link>
  </div>
  <p className="small muted" role="status">{issues.length} matching example {issues.length===1?"report":"reports"}</p>
  {issues.length?<div className="preview-list">{issues.map(issue=><IssueCard key={issue.id} issue={issue}/>)}</div>:<div className="surface" style={{padding:28}}><h2>No matching reports</h2><p className="muted">Try another keyword or status filter.</p><button type="button" className="button button-outline" onClick={()=>{setQuery("");setStatus("all");}}>Clear filters</button></div>}
 </section>;
}
