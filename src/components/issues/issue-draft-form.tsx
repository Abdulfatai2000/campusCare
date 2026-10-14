"use client";
import { useState, type FormEvent } from "react";
type Draft={category:string;title:string;location:string;description:string};
const empty:Draft={category:"",title:"",location:"",description:""};
export function IssueDraftForm(){
 const [draft,setDraft]=useState<Draft>(empty);
 const [notice,setNotice]=useState("");
 const change=(key:keyof Draft,value:string)=>{setDraft(previous=>({...previous,[key]:value}));setNotice("");};
 const submit=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  if(draft.title.trim().length<8||draft.location.trim().length<3||draft.description.trim().length<20){setNotice("Please provide a title (8+ characters), location (3+), and description (20+).");return;}
  setNotice("Preview validated. No report was submitted or saved. Live reporting requires verified campus administration.");
 };
 return <section className="surface" style={{padding:26,maxWidth:760}}>
  <p className="notice" style={{marginBottom:24}}>Interactive preview only. No information is saved or sent. Please do not enter personal or sensitive details.</p>
  <form className="form-grid" onSubmit={submit}>
   <label className="field">Category<select required value={draft.category} onChange={e=>change("category",e.target.value)}><option value="">Choose category</option>{["Facilities","Water supply","Safety","Maintenance","Accessibility","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
   <label className="field">Issue title<input required minLength={8} maxLength={120} placeholder="e.g. Broken streetlight" value={draft.title} onChange={e=>change("title",e.target.value)}/></label>
   <label className="field">Campus location<input required minLength={3} maxLength={150} placeholder="e.g. Example faculty building" value={draft.location} onChange={e=>change("location",e.target.value)}/></label>
   <label className="field">Description<textarea required minLength={20} maxLength={2000} placeholder="Describe what needs attention" value={draft.description} onChange={e=>change("description",e.target.value)}/><span className="small muted">{draft.description.length}/2000 characters</span></label>
   <button className="button" type="submit">Review preview report</button>
   <button className="button button-outline" type="button" onClick={()=>{setDraft(empty);setNotice("");}}>Clear form</button>
   {notice&&<p role="status" className="notice">{notice}</p>}
  </form>
 </section>;
}
