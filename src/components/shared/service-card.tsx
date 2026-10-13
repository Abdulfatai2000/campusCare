import Link from "next/link";
import { ArrowUpRight, HeartPulse, Users, Wrench, BookOpen } from "lucide-react";
import type { CampusServiceSummary } from "@/types/domain";
export function ServiceCard({service}:{service:CampusServiceSummary}){
  const Icon=service.icon==="heart"?HeartPulse:service.icon==="users"?Users:service.icon==="wrench"?Wrench:BookOpen;
  return <Link href={"/services/"+service.id} className="card" style={{display:"block"}}><Icon size={29} color="var(--accent)"/><h3>{service.title}</h3><p>{service.description}</p><span className="eyebrow" style={{display:"flex",alignItems:"center",gap:8,marginTop:20}}>Learn more <ArrowUpRight size={16}/></span></Link>;
}
