import type { ReactNode } from "react";
export function EmptyState({title,description,action}:{title:string;description:string;action?:ReactNode}){return <div className="card" style={{textAlign:"center",padding:"48px 25px"}}><div className="eyebrow">NOT YET CONNECTED</div><h3 style={{fontSize:23}}>{title}</h3><p style={{maxWidth:460,margin:"10px auto 24px"}}>{description}</p>{action}</div>;}
