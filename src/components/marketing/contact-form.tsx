"use client";
import { useState,type FormEvent } from "react";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
const maxBody=1600;
export function ContactForm(){
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [topic,setTopic]=useState("Campus feedback");
 const [message,setMessage]=useState("");
 const [notice,setNotice]=useState("");
 function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  if(!name.trim()||!email.trim()||!message.trim()){setNotice("Please complete the required fields.");return;}
  if(name.trim().length<2){setNotice("Please enter at least two characters for your name.");return;}
  if(message.trim().length<15){setNotice("Please share at least 15 characters of context.");return;}
  const subject="CampusCare — "+topic;
  const body=["Hello CampusCare,","",message.trim(),"","From: "+name.trim(),"Reply to: "+email.trim()].join("\n");
  const href="mailto:ojewandeabdulfatai2000@gmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
  setNotice("Your email app will open with a draft. Please send it there; CampusCare has not submitted anything automatically.");
  window.location.href=href;
 }
 return <form className="p1-contact-form" onSubmit={submit} aria-label="Prepare an email to CampusCare"><div className="p1-form-header"><span className="p1-feature-icon green"><Mail size={24}/></span><div><h3>Send a message</h3><p>We’ll prepare an email draft for you to review and send.</p></div></div><div className="p1-form-row"><label className="p1-field">Your name <span>*</span><input required minLength={2} maxLength={90} placeholder="What should we call you?" value={name} onChange={e=>setName(e.target.value)}/></label><label className="p1-field">Email address <span>*</span><input type="email" required maxLength={254} placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}/></label></div><label className="p1-field">What’s this about?<select value={topic} onChange={e=>setTopic(e.target.value)}><option>Campus feedback</option><option>Feature suggestion</option><option>Collaboration</option><option>General enquiry</option></select></label><label className="p1-field">Your message <span>*</span><textarea required minLength={15} maxLength={maxBody} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us a little about what you have in mind..." rows={6}/></label><div className="p1-form-length">{message.length} / {maxBody}</div><button type="submit" className="button p1-button p1-submit-button">Open email draft <ArrowRight size={18}/></button><div className="p1-form-foot"><ExternalLink size={14}/> Opens your email application. No information is saved by this site.</div>{notice&&<p className="p1-inline-notice" role="status">{notice}</p>}</form>;
}
