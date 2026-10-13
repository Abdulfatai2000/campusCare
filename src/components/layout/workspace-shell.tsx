"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Bell, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { adminNavigation, studentNavigation } from "@/constants/navigation";
export function WorkspaceShell({children,role}:{children:React.ReactNode;role:"student"|"admin"}) {
  const pathname=usePathname();
  const navigation=role==="student"?studentNavigation:adminNavigation;
  const label=role==="student"?"Student workspace":"Campus operations";
  const nav=<>{navigation.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined} style={pathname===item.href?{color:"var(--accent)",background:"var(--surface-2)"}:{}}><item.icon size={17}/>{item.label}</Link>)}</>;
  return <div className="workspace">
    <aside className="workspace-aside"><Link href="/" className="logo">campus<span>care.</span></Link><div><span className="eyebrow" style={{paddingLeft:12}}>{label}</span><nav className="side-nav" aria-label={label}>{nav}</nav></div><div className="aside-note">PHASE 0 PREVIEW<br/>Sample content only. No live campus system is connected.</div></aside>
    <div className="workspace-main">
      <header className="workspace-topbar"><div style={{display:"flex",gap:15,alignItems:"center"}}><details className="mobile-workspace-menu"><summary aria-label="Open workspace navigation"><Menu size={20}/></summary><nav aria-label="Workspace navigation">{nav}</nav></details><span className="eyebrow">{label} / Preview</span></div><div style={{display:"flex",gap:10,alignItems:"center"}}><Link className="button button-outline small" href={role==="student"?"/admin":"/dashboard"}>{role==="student"?"Admin preview":"Student preview"} ↗</Link><Link href="/notifications" aria-label="Notifications preview" className="theme-button"><Bell size={16}/></Link><ThemeToggle/></div></header>
      <div className="workspace-content"><div className="preview-banner"><strong>Interactive layout preview:</strong> demo information only. Sign-in, reporting, booking and administration will be connected in later phases.</div>{children}<div className="small muted" style={{marginTop:45,borderTop:"1px solid var(--border)",paddingTop:20}}><Link href="/" style={{display:"inline-flex",alignItems:"center",gap:8}}><ArrowLeft size={14}/> Return to website</Link> · CampusCare is not an official university service.</div></div>
    </div>
  </div>;
}
