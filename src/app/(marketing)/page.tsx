import Link from "next/link";
import { ArrowRight, ArrowUpRight, BellRing, CalendarDays, CheckCircle2, ClipboardList, Grid2X2, HeartHandshake, ShieldCheck, ShieldAlert, Sparkles, UsersRound, Wrench } from "lucide-react";
import { CampusScene } from "@/components/marketing/campus-scene";
import { ProductPreview } from "@/components/marketing/product-preview";
import { Reveal } from "@/components/marketing/reveal";
const highlights=[
 {icon:ClipboardList,tone:"green",name:"Report campus issues",description:"A clearer way to share concerns about facilities, safety and campus life.",href:"/report-issue"},
 {icon:ShieldAlert,tone:"orange",name:"Emergency resources",description:"Find the right guidance, with official numbers added only after verification.",href:"/emergency"},
 {icon:Grid2X2,tone:"blue",name:"Discover campus services",description:"Explore student support, health, maintenance and academic assistance.",href:"/services"},
 {icon:CalendarDays,tone:"purple",name:"Request appointments",description:"Plan visits and ask for help from participating campus services.",href:"/appointments"}
];
const steps=[{title:"Tell us what matters",detail:"Choose a service or describe an issue with the context that matters.",icon:ClipboardList},{title:"Connect with support",detail:"Authorized service teams will review your request once CampusCare is live.",icon:UsersRound},{title:"Stay in the know",detail:"Follow genuine updates and see the outcome of your request.",icon:CheckCircle2}];
export default function HomePage(){
 return <div className="p1-marketing">
 <section className="p1-home-hero"><div className="container p1-hero-grid"><div className="p1-hero-copy">
 <span className="kicker"><span className="status-dot"/> OAU FIRST <span className="kicker-sub">By students. For better campus days.</span></span>
 <h1>Your campus.<br/>Your community.<br/><em>Your care.</em></h1>
 <p>CampusCare brings campus services into one thoughtful experience. Report issues, explore support, access safety guidance and request appointments — without the confusion.</p>
 <div className="p1-button-row"><Link className="button p1-button" href="/auth/signup">Get started <ArrowRight size={17}/></Link><Link className="button button-outline p1-outline" href="/services">Explore services <ArrowUpRight size={16}/></Link></div>
 <div className="p1-hero-social"><div className="p1-mini-icons" aria-hidden="true"><span>CC</span><span>+</span><span>✦</span></div><div><strong>Student-built and purpose-driven.</strong><small>Independently exploring a better student experience.</small></div></div>
 </div>
 <div className="p1-hero-showcase"><div className="p1-hero-landscape"><CampusScene/><div className="p1-scene-quote">A better campus.<br/>For all of us.<i/></div></div><div className="p1-preview-wrap"><ProductPreview/></div></div></div></section>
 <section className="container p1-feature-ribbon" aria-label="Explore CampusCare features">{highlights.map(item=><Link className="p1-feature-tile" href={item.href} key={item.name}><span className={"p1-feature-icon "+item.tone}><item.icon size={24}/></span><h2>{item.name}</h2><p>{item.description}</p><ArrowUpRight className="p1-tile-arrow" size={19}/></Link>)}</section>
 <section className="container p1-section p1-how"><Reveal><div className="p1-section-heading"><span className="eyebrow">SIMPLE. CLEAR. THOUGHTFUL.</span><h2>Support shouldn’t be<br/><span className="text-accent">hard to find.</span></h2><p>From a small concern to an important request, every experience should start with clarity.</p></div></Reveal><div className="p1-steps">{steps.map((step,i)=><Reveal delay={100*i} key={step.title}><div className="p1-step"><div className="p1-step-head"><span className="p1-step-number">0{i+1}</span><step.icon size={24}/></div><h3>{step.title}</h3><p>{step.detail}</p>{i<2&&<ArrowRight className="p1-step-arrow" size={22}/>}</div></Reveal>)}</div></section>
 <section className="p1-values-zone"><div className="container"><Reveal><div className="p1-values-top"><div><span className="eyebrow">CAMPUSCARE IS FOR PEOPLE</span><h2>Less confusion.<br/><span className="text-accent">More community.</span></h2></div><p>We believe that good software starts with listening. CampusCare is being shaped around the small but important moments that make campus life easier.</p></div></Reveal><div className="p1-values-grid"><Reveal><article className="p1-value"><Wrench size={24}/><h3>Practical by design</h3><p>Make it easier to report problems and understand next steps.</p></article></Reveal><Reveal delay={100}><article className="p1-value"><BellRing size={24}/><h3>Clarity at every step</h3><p>Design accessible updates and transparent service journeys.</p></article></Reveal><Reveal delay={200}><article className="p1-value"><ShieldCheck size={24}/><h3>Trust is essential</h3><p>Verify campus information and safeguard student data before launch.</p></article></Reveal></div></div></section>
 <section className="container p1-section"><Reveal><div className="p1-join"><div className="p1-join-badge"><HeartHandshake size={30}/></div><div><span className="eyebrow">AN INDEPENDENT STUDENT-BUILT PROJECT</span><h2>By students. For a better campus.</h2><p>CampusCare is an OAU-first concept, not an official university service. We’re building carefully and welcome thoughtful feedback.</p></div><Link className="button p1-button" href="/contact">Share your thoughts <ArrowUpRight size={18}/></Link><Sparkles className="p1-join-spark" size={140}/></div></Reveal></section>
 </div>;
}
