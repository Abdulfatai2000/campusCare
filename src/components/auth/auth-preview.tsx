"use client";
import { useState,type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleHelp, Eye, EyeOff, GraduationCap, Info, Lock, Mail, ShieldCheck, Sparkles, UserRound, type LucideIcon } from "lucide-react";
import { CampusScene } from "@/components/marketing/campus-scene";
export type AuthMode="login"|"signup"|"forgot-password"|"reset-password";
const content:Record<AuthMode,{eyebrow:string;title:string;subtitle:string;cta:string;leftTitle:string;leftAccent:string}>={
 login:{eyebrow:"SIGN IN / CAMPUSCARE",title:"Welcome back.",subtitle:"Your connected campus experience starts here.",cta:"Review sign-in details",leftTitle:"A safer, smarter,",leftAccent:"more connected campus."},
 signup:{eyebrow:"JOIN THE CAMPUSCARE COMMUNITY",title:"Let’s get you started.",subtitle:"Be part of a more connected campus experience.",cta:"Review account details",leftTitle:"Built for students.",leftAccent:"Made with care."},
 "forgot-password":{eyebrow:"ACCOUNT RECOVERY / PREVIEW",title:"Forgot your password?",subtitle:"We’ll make getting back on track simple and secure once account recovery is available.",cta:"Review reset request",leftTitle:"Every step matters.",leftAccent:"Especially the safe ones."},
 "reset-password":{eyebrow:"PASSWORD RESET / PREVIEW",title:"Choose a new password.",subtitle:"Secure password resets will be available when authentication is connected.",cta:"Review new password",leftTitle:"Your campus.",leftAccent:"Your peace of mind."}
};
function Field({label,icon:Icon,children,hint}:{label:string;icon:LucideIcon;children:React.ReactNode;hint?:string}){
 return <label className="p1-auth-field"><span className="p1-auth-label">{label}</span><span className="p1-auth-input-shell"><Icon size={18} aria-hidden="true"/>{children}</span>{hint&&<span className="p1-auth-hint">{hint}</span>}</label>;
}
function PasswordInput({label,value,onChange,autoComplete="new-password",placeholder="Enter your password"}:{label:string;value:string;onChange:(v:string)=>void;autoComplete?:string;placeholder?:string}){
 const [visible,setVisible]=useState(false);
 return <div className="p1-auth-password-wrap"><span className="p1-auth-label">{label}</span><div className="p1-auth-input-shell"><Lock size={18} aria-hidden="true"/><input required minLength={8} maxLength={128} type={visible?"text":"password"} placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)} autoComplete={autoComplete}/><button type="button" className="p1-password-toggle" aria-label={visible?"Hide password":"Show password"} onClick={()=>setVisible(v=>!v)}>{visible?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></div>;
}
const roles=[{icon:ShieldCheck,title:"Report issues",detail:"Give everyday campus concerns a clearer path."},{icon:GraduationCap,title:"Discover services",detail:"Know where to look for the support you need."},{icon:Sparkles,title:"Build a better experience",detail:"Thoughtful tools for a connected community."}];
export function AuthPreview({mode}:{mode:AuthMode}){
 const meta=content[mode];
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [confirmPassword,setConfirmPassword]=useState("");
 const [remember,setRemember]=useState(true);
 const [notice,setNotice]=useState("");
 const [touched,setTouched]=useState(false);
 const isLogin=mode==="login",isSignup=mode==="signup",isForgot=mode==="forgot-password",isReset=mode==="reset-password";
 const strength=password.length>=12&&/[A-Z]/.test(password)&&/[0-9]/.test(password)?"strong":password.length>=8?"developing":"start";
 function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  setTouched(true);
  if(isSignup&&name.trim().length<2){setNotice("Please enter your full name.");return}
  if((isSignup||isReset)&&password!==confirmPassword){setNotice("The passwords do not match.");return}
  if(!isForgot&&password.length<8){setNotice("Use at least 8 characters for this preview.");return}
  if(isSignup&&password.length<12){setNotice("Use at least 12 characters for a stronger account password.");return}
  setNotice(isLogin?"This is a design preview: login is not enabled yet. No account was accessed.":isSignup?"This is a design preview: no account was created and nothing was sent.":isForgot?"This is a design preview: no reset email was sent.": "This is a design preview: your password has not changed.");
 }
 return <main className="p1-auth-backdrop"><div className="p1-auth-frame">
 <aside className="p1-auth-visual"><CampusScene className="p1-auth-scene"/><div className="p1-auth-visual-overlay"/>
 <div className="p1-auth-visual-inner"><span className="kicker"><span className="status-dot"/> OAU-FIRST / INDEPENDENT CONCEPT</span><h2>{meta.leftTitle}<br/><span className="text-accent">{meta.leftAccent}</span></h2><p>Reporting, support, safety and appointments in one student-first platform.</p>
 <div className="p1-auth-feature-list">{roles.map(item=><div className="p1-auth-feature" key={item.title}><span className="p1-feature-icon green"><item.icon size={22}/></span><div><strong>{item.title}</strong><span>{item.detail}</span></div></div>)}</div>
 <div className="p1-auth-visual-bottom"><div className="p1-auth-pulse"><HeartIcon/></div><div><strong>A better campus starts with us.</strong><span>Independently built. Thoughtfully designed.</span></div></div></div>
 </aside>
 <section className="p1-auth-panel"><div className="p1-auth-panel-inner"><div className="p1-auth-mark"><GraduationCap size={19}/> Student-first by design</div><span className="eyebrow">{meta.eyebrow}</span><h1>{meta.title}</h1><p className="p1-auth-subtitle">{meta.subtitle}</p>
 <div className="p1-auth-preview-notice"><Info size={17}/><span><b>Frontend preview only.</b> No authentication, emails or account changes are connected. Please don’t enter real passwords.</span></div>
 <form className="p1-auth-form" onSubmit={submit} noValidate={false}>
 {isSignup&&<Field label="Full name" icon={UserRound}><input required autoComplete="name" maxLength={120} placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/></Field>}
 {!isReset&&<Field label="Email address" icon={Mail}><input required type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}/></Field>}
 {(isLogin||isSignup||isReset)&&<PasswordInput label={isReset?"New password":"Password"} value={password} onChange={setPassword} autoComplete={isLogin?"current-password":"new-password"} placeholder={isLogin?"Enter your password":"At least 12 characters recommended"}/>}
 {(isSignup||isReset)&&<PasswordInput label={isSignup?"Confirm password":"Confirm new password"} value={confirmPassword} onChange={setConfirmPassword} placeholder="Re-enter your password"/>}
 {(isSignup||isReset)&&<div className="p1-password-strength" aria-live="polite"><div className={"p1-strength-bars "+strength}><span/><span/><span/></div><small>Password strength: {strength==="strong"?"Strong":strength==="developing"?"Developing":"Enter your password"}</small></div>}
 {isLogin&&<div className="p1-auth-options"><label className="p1-checkbox"><input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)}/> Remember me in a future release</label><Link href="/auth/forgot-password">Forgot password?</Link></div>}
 {isSignup&&<p className="p1-auth-fineprint"><Check size={16}/> This preview doesn’t store or send account information.</p>}
 <button type="submit" className="button p1-button p1-auth-submit">{meta.cta}<ArrowRight size={17}/></button>
 </form>
 {notice&&<div className="p1-auth-result" role="status"><Info size={18}/><span>{notice}</span></div>}
 {(isLogin||isSignup)&&<><div className="p1-auth-or"><span/> <b>OR</b> <span/></div><button type="button" className="p1-auth-social" disabled title="Google authentication is planned for the backend phase"><span className="p1-google-mark">G</span> Continue with Google <span className="p1-soon">Coming soon</span></button></>}
 <div className="p1-auth-alt">{isLogin?<>Don’t have an account? <Link href="/auth/signup">Create one <ArrowRight size={15}/></Link></>:isSignup?<>Already exploring CampusCare? <Link href="/auth/login">Sign in <ArrowRight size={15}/></Link></>:<>Remembered your password? <Link href="/auth/login">Back to sign in <ArrowRight size={15}/></Link></>}</div>
 <div className="p1-auth-panel-footer"><ShieldCheck size={19}/><div><b>Privacy comes first.</b><span>CampusCare is an independent student-built OAU-first concept, not an official university service.</span></div></div>
 </div></section></div>
 <div className="p1-auth-outer-note"><CircleHelp size={14}/> Need to reach the developer? <Link href="/contact">Contact us <ArrowLeft size={14} className="p1-back-arrow"/></Link></div>
 </main>;
}
function HeartIcon(){return <ShieldCheck size={25}/>;}
