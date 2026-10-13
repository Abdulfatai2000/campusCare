import Link from "next/link";
import { LockKeyhole } from "lucide-react";
type Mode="login"|"signup"|"forgot-password"|"reset-password";
const labels:Record<Mode,{title:string;detail:string;button:string}> = {
  login:{title:"Welcome back.",detail:"Your connected campus workspace will live here.",button:"Sign in"},
  signup:{title:"Create your account.",detail:"Student registration will be available when secure authentication is connected.",button:"Create account"},
  "forgot-password":{title:"Reset your password.",detail:"Secure account recovery is planned for the authentication phase.",button:"Send reset link"},
  "reset-password":{title:"Choose a new password.",detail:"Password-reset verification will be available with secure authentication.",button:"Update password"}
};
export function AuthPreview({mode}:{mode:Mode}){
 const item=labels[mode];
 return <main className="centered"><section className="card auth-card"><div className="eyebrow"><LockKeyhole size={13} style={{display:"inline",marginRight:7}}/>SECURE ACCESS / PREVIEW</div><h1 style={{fontSize:35,margin:"18px 0 9px",letterSpacing:"-1px"}}>{item.title}</h1><p className="muted" style={{fontSize:14,marginBottom:24}}>{item.detail}</p><div className="notice" style={{marginBottom:22}}>Authentication is not enabled yet. This is a UI preview; no credentials are collected or submitted.</div><div className="form-grid"><label className="field">Email address<input disabled type="email" placeholder="student@university.edu" autoComplete="email"/></label>{mode!=="forgot-password"&&<label className="field">{mode==="login"?"Password":"Password"}<input disabled type="password" placeholder="••••••••" autoComplete={mode==="login"?"current-password":"new-password"}/></label>}{mode==="signup"&&<label className="field">Full name<input disabled type="text" placeholder="Your name" autoComplete="name"/></label>}<button className="button" disabled type="button">{item.button} → (coming soon)</button></div><div className="small muted" style={{marginTop:22}}>{mode==="login"?<span>New here? <Link href="/auth/signup" style={{color:"var(--accent)"}}>See sign-up preview</Link></span>:<Link href="/auth/login" style={{color:"var(--accent)"}}>Back to sign-in preview →</Link>}</div></section></main>;
}
