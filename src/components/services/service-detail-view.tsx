import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarClock, ShieldCheck } from "lucide-react";
import { PageHeading } from "@/components/shared/page-heading";
import { previewServices } from "@/data/preview";
export function StudentServiceDetailView({id}:{id:string}){
 const service=previewServices.find(x=>x.id===id);
 if(!service)return <><PageHeading eyebrow="04 / Services / Detail" title="Example service not found" description="This service is not part of the demonstration catalog."/><Link href="/services" className="button button-outline"><ArrowLeft size={16}/> All services</Link></>;
 return <section>
  <PageHeading eyebrow="04 / Services / Detail" title={service.title} description={service.description}/>
  <div className="surface" style={{padding:28,maxWidth:840}}>
   <span className="chip">{service.category}</span>
   <h2 style={{fontSize:23,margin:"25px 0 12px"}}>What this service could offer</h2>
   <p className="lede">{service.description}</p>
   <div className="notice" style={{marginTop:20,display:"flex",gap:10,alignItems:"flex-start"}}><ShieldCheck size={20} style={{flexShrink:0}}/><span>This is an example service profile. Its location, contact details, opening hours, staff and appointment availability have not been verified with OAU.</span></div>
   <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:24}}><Link href="/appointments/new" className="button"><CalendarClock size={17}/> Explore appointment preview <ArrowRight size={16}/></Link><Link href="/services" className="button button-outline"><ArrowLeft size={16}/> Browse services</Link></div>
  </div>
  <div style={{marginTop:28}}><h2 style={{fontSize:22}}>Other example services</h2><div className="card-grid">{previewServices.filter(x=>x.id!==service.id).slice(0,3).map(x=><Link href={"/services/"+x.id} className="card" key={x.id}><span className="eyebrow">{x.category}</span><h3>{x.title}</h3><p>{x.description}</p></Link>)}</div></div>
 </section>;
}
