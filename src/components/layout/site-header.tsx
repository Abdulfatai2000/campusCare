"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Search, X, ClipboardCheck, Building2, ShieldAlert, House, Info, Mail, type LucideIcon } from "lucide-react";
import { useEffect,useRef,useState } from "react";
import { ThemeToggle } from "./theme-toggle";
type NavLink={label:string;href:string;icon:LucideIcon};
const nav:NavLink[]=[{label:"Home",href:"/",icon:House},{label:"Services",href:"/services",icon:Building2},{label:"Report an issue",href:"/report-issue",icon:ClipboardCheck},{label:"Emergency",href:"/emergency",icon:ShieldAlert},{label:"About",href:"/about",icon:Info}];
const searchItems=[...nav,{label:"Features",href:"/features",icon:Info},{label:"Contact",href:"/contact",icon:Mail},{label:"Appointments",href:"/appointments",icon:Building2}];
export function SiteHeader(){
 const pathname=usePathname();
 const [menu,setMenu]=useState(false);
 const [query,setQuery]=useState("");
 const [focused,setFocused]=useState(false);
 const searchRef=useRef<HTMLDivElement|null>(null);
 useEffect(()=>{setMenu(false)},[pathname]);
 useEffect(()=>{const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape"){setMenu(false);setFocused(false)}};window.addEventListener("keydown",onKey);return ()=>window.removeEventListener("keydown",onKey)},[]);
 const suggestions=query.trim().length>0?searchItems.filter(x=>x.label.toLowerCase().includes(query.trim().toLowerCase())).slice(0,5):[];
 return <header className="site-header p1-site-header"><div className="container header-inner">
  <Link href="/" className="logo p1-logo" aria-label="CampusCare home">campus<span>care.</span></Link>
  <nav className="site-nav p1-site-nav" aria-label="Main navigation">{nav.map(x=><Link key={x.href} href={x.href} className={pathname===x.href?"nav-current":""} aria-current={pathname===x.href?"page":undefined}>{x.label}</Link>)}</nav>
  <div className="p1-header-tools">
   <div ref={searchRef} className="p1-search" onBlur={event=>{if(!searchRef.current?.contains(event.relatedTarget)){setFocused(false)}}}>
    <Search size={16} aria-hidden="true"/><input aria-label="Search CampusCare pages" value={query} onChange={e=>{setQuery(e.target.value);setFocused(true)}} onFocus={()=>setFocused(true)} placeholder="Find campus services..." role="combobox" aria-expanded={focused&&query.trim().length>0} aria-controls="campuscare-search-results" aria-autocomplete="list"/>
    {focused&&query.trim().length>0&&<div className="p1-search-results" id="campuscare-search-results" role="listbox">{suggestions.length?suggestions.map(x=><Link role="option" aria-selected={false} key={x.href} href={x.href} onClick={()=>{setFocused(false);setQuery("")}}><x.icon size={16}/>{x.label}<ArrowRight size={14}/></Link>):<p>No matching pages. Try “services” or “emergency”.</p>}</div>}
   </div>
   <ThemeToggle/>
   <Link className="p1-login-link" href="/auth/login">Log in</Link><Link className="button p1-button p1-header-cta" href="/auth/signup">Get started <ArrowRight size={15}/></Link>
   <button className="p1-mobile-trigger" type="button" onClick={()=>setMenu(x=>!x)} aria-label={menu?"Close navigation":"Open navigation"} aria-expanded={menu} aria-controls="campuscare-mobile-navigation">{menu?<X size={22}/>:<Menu size={22}/>}</button>
  </div>
 </div>
 {menu&&<div className="p1-mobile-nav" id="campuscare-mobile-navigation"><nav aria-label="Mobile main navigation">{nav.map(x=><Link key={x.href} href={x.href}><x.icon size={18}/>{x.label}<ArrowRight size={15}/></Link>)}<Link href="/features"><Info size={18}/>Features<ArrowRight size={15}/></Link><Link href="/contact"><Mail size={18}/>Contact<ArrowRight size={15}/></Link><Link href="/auth/login">Log in<ArrowRight size={15}/></Link><Link href="/auth/signup" className="mobile-primary">Create an account<ArrowRight size={15}/></Link></nav></div>}
 </header>;
}
