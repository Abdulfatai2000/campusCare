import Link from "next/link";
import { ArrowUpRight, Github, HeartHandshake, Mail, MapPin, ShieldCheck } from "lucide-react";
export function SiteFooter(){
 const product=[["Report an issue","/report-issue"],["Book an appointment","/appointments"],["Campus services","/services"],["Emergency guide","/emergency"]] as const;
 const company=[["Our story","/about"],["Features","/features"],["Student dashboard","/dashboard"],["Contact","/contact"]] as const;
 const resources=[["Profile preview","/profile"],["Notifications","/notifications"],["Settings","/settings"],["Admin preview","/admin"]] as const;
 return <footer className="site-footer p1-footer"><div className="container">
  <div className="p1-footer-banner"><div className="p1-footer-badge"><HeartHandshake size={24}/></div><div><span className="kicker">BUILT WITH PURPOSE</span><h2>Better campus days begin with care.</h2><p>Help shape a more connected student experience, one idea at a time.</p></div><Link className="button p1-button" href="/contact">Share your idea <ArrowUpRight size={16}/></Link></div>
  <div className="p1-footer-cols"><div className="p1-footer-brand"><Link className="logo p1-logo" href="/">campus<span>care.</span></Link><p>Your campus. Your community. Your care.</p><span className="p1-independence"><ShieldCheck size={15}/> Independent OAU-first student concept</span><span className="p1-location"><MapPin size={14}/> Ile-Ife, Nigeria</span></div>
  {[{title:"Product",links:product},{title:"Explore",links:company},{title:"Resources",links:resources}].map(col=><div key={col.title}><h3>{col.title}</h3><nav className="p1-footer-links" aria-label={col.title}>{col.links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div>)}
  <div className="p1-footer-connect"><h3>Stay connected</h3><p>Have feedback, ideas or questions? We’d love to hear them.</p><a href="mailto:ojewandeabdulfatai2000@gmail.com?subject=CampusCare%20feedback" className="p1-mail"><Mail size={16}/> Send us a message <ArrowUpRight size={14}/></a><a className="p1-github" href="https://github.com/Abdulfatai2000/campusCare" target="_blank" rel="noopener noreferrer"><Github size={16}/> View on GitHub</a></div></div>
  <div className="p1-footer-bottom"><span>© {new Date().getFullYear()} CampusCare. Thoughtfully built.</span><span>Independent project. Not affiliated with or endorsed by OAU.</span></div>
 </div></footer>;
}
