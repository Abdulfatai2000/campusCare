"use client";
import { useState, type FormEvent } from "react";
import { previewServices } from "@/data/preview";
export function AppointmentDraftForm(){
 const [service,setService]=useState("");
 const [date,setDate]=useState("");
 const [notes,setNotes]=useState("");
 const [message,setMessage]=useState("");
 const today=new Date().toLocaleDateString("en-CA");
 function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setMessage("Preview only: your request was not booked or sent. No provider availability has been confirmed.");}
 return <section className="surface" style={{padding:26,maxWidth:760}}>
  <p className="notice" style={{marginBottom:24}}>Interactive scheduling preview only. No offices, appointment slots or availability have been verified. Do not include personal medical details.</p>
  <form className="form-grid" onSubmit={submit}>
   <label className="field">Example service<select required value={service} onChange={e=>setService(e.target.value)}><option value="">Choose an example service</option>{previewServices.map(x=><option key={x.id} value={x.id}>{x.title}</option>)}</select></label>
   <label className="field">Preferred date (not a reserved slot)<input required type="date" min={today} value={date} onChange={e=>setDate(e.target.value)}/></label>
   <label className="field">Optional notes<textarea maxLength={500} value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Describe the kind of assistance you would like (no sensitive details)"/></label>
   <button type="submit" className="button">Review request preview</button>
   <button type="button" className="button button-outline" onClick={()=>{setService("");setDate("");setNotes("");setMessage("");}}>Clear form</button>
   {message&&<p className="notice" role="status">{message}</p>}
  </form>
 </section>;
}
