"use client";
import { useMemo, useState } from "react";
import { ServiceCard } from "@/components/shared/service-card";
import { previewServices } from "@/data/preview";
export function ServiceDirectory(){
 const [query,setQuery]=useState("");
 const [category,setCategory]=useState("all");
 const categories=[...new Set(previewServices.map(x=>x.category))];
 const filtered=useMemo(()=>previewServices.filter(x=>(category==="all"||x.category===category)&&[x.title,x.category,x.description].some(v=>v.toLowerCase().includes(query.trim().toLowerCase()))),[query,category]);
 return <section>
  <div className="notice" style={{marginBottom:20}}>This is an illustrative service catalog, not a verified list of university offices or operating hours.</div>
  <div className="surface" style={{padding:16,display:"flex",flexWrap:"wrap",gap:14,marginBottom:22}}>
   <label className="field" style={{flex:"2 1 220px"}}>Find a service<input type="search" placeholder="Search service names" value={query} onChange={e=>setQuery(e.target.value)}/></label>
   <label className="field" style={{flex:"1 1 170px"}}>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option value="all">All categories</option>{categories.map(x=><option key={x}>{x}</option>)}</select></label>
  </div>
  <p role="status" className="small muted">{filtered.length} example {filtered.length===1?"service":"services"} found</p>
  {filtered.length?<div className="card-grid">{filtered.map(x=><ServiceCard key={x.id} service={x}/>)}</div>:<div className="surface" style={{padding:25}}><h2>No matching services</h2><p className="muted">Try a different keyword or category.</p><button type="button" className="button button-outline" onClick={()=>{setQuery("");setCategory("all");}}>Clear filters</button></div>}
 </section>;
}
