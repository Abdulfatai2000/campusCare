import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, CalendarCheck, ClipboardCheck, HeartPulse, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
export default function HomePage(){
  const features=[
    {icon:<ClipboardCheck size={28}/>,title:"Report. Track. Resolve.",desc:"Report campus issues and follow updates in one place.",href:"/report-issue"},
    {icon:<ShieldCheck size={28}/>,title:"Support when it matters.",desc:"Find a verified path to the right campus contact.",href:"/emergency"},
    {icon:<CalendarCheck size={28}/>,title:"A simpler appointment.",desc:"Explore a guided way to request campus services.",href:"/appointments"},
  ];
  return <><div className="container">
    <section className="hero">
      <div><div className="eyebrow"><Sparkles size={13} style={{display:"inline",marginRight:9}}/> Built for campus life · OAU-first concept</div>
        <h1>Your campus.<br/>Your community.<br/><span className="gradient-text">Your care.</span></h1>
        <p className="lede">Small issues become big problems when nobody knows where to turn. CampusCare brings the people, information, and services that shape student life closer together.</p>
        <div style={{display:"flex",gap:12,marginTop:32,flexWrap:"wrap"}}><Link className="button" href="/dashboard">Explore the preview <ArrowRight size={17}/></Link><Link className="button button-outline" href="/features">Discover what we’re building <ArrowUpRight size={16}/></Link></div>
        <p className="small muted" style={{marginTop:25}}>Independent student-built prototype. Not an official university platform.</p>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="hero-orbit"><HeartPulse strokeWidth={1.2}/></div><div className="hero-floating"><BadgeCheck size={16} style={{display:"inline",marginRight:8}}/> CARE FOR THE PEOPLE WHO MAKE THE CAMPUS</div></div>
    </section>
    <section className="marketing-section" id="features"><div className="section-heading"><span className="eyebrow">01 / Simplify the everyday</span><h2>Campus needs, <span className="gradient-text">thoughtfully connected.</span></h2><p className="lede">One starting point for the support students need most.</p></div>
      <div className="card-grid">{features.map(item=><Card key={item.title}><div style={{color:"var(--accent)"}}>{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p><Link href={item.href} className="eyebrow" style={{display:"inline-flex",gap:6,alignItems:"center",marginTop:26}}>Explore preview <ArrowRight size={14}/></Link></Card>)}</div>
    </section>
    <section className="marketing-section" style={{borderTop:"1px solid var(--border)"}}><div className="section-heading"><span className="eyebrow">02 / How it could work</span><h2>From concern <span className="gradient-text">to clarity.</span></h2></div>
      <div className="card-grid"><Card><span className="eyebrow">STEP 01</span><h3>Describe the problem.</h3><p><Wrench size={15} style={{display:"inline"}}/> Choose a category, location, and include context.</p></Card><Card><span className="eyebrow">STEP 02</span><h3>Reach the right people.</h3><p>Authorized university staff would review and assign reports.</p></Card><Card><span className="eyebrow">STEP 03</span><h3>Stay informed.</h3><p>Track genuine status updates when live services are available.</p></Card></div>
    </section>
  </div>
  <section className="marketing-section" style={{background:"var(--surface)",borderBlock:"1px solid var(--border)"}}><div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap"}}><div><div className="eyebrow">A better campus starts with care</div><h2 style={{fontSize:"clamp(30px,4vw,50px)",maxWidth:660,letterSpacing:"-1.5px",margin:"12px 0"}}>Let’s design a more connected student experience.</h2></div><Link href="/contact" className="button">Get in touch <ArrowUpRight size={17}/></Link></div></section></>;
}
