import type { ReactNode } from "react";
export function MetricCard({label,value,icon}:{label:string;value:string;icon:ReactNode}){return <article className="metric"><div style={{color:"var(--accent)",marginBottom:13}}>{icon}</div><strong>{value}</strong><span>{label}</span></article>;}
