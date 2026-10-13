import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { IssueSummary } from "@/types/domain";
export function IssueCard({issue,admin=false}:{issue:IssueSummary;admin?:boolean}){
  const path=admin?"/admin/reports/":"/my-reports/";
  return <Link href={path+encodeURIComponent(issue.id)} className="preview-item">
    <div><strong>{issue.title}</strong><p style={{display:"flex",gap:5,alignItems:"center"}}><MapPin size={12}/>{issue.location} · {issue.category} · {issue.id}</p></div>
    <div style={{display:"flex",alignItems:"center",gap:11}}><span className="status">{issue.status.replaceAll("_"," ")}</span><ArrowUpRight size={16}/></div>
  </Link>;
}
