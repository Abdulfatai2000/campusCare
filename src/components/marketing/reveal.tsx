"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const node=useRef<HTMLDivElement|null>(null);
 const [seen,setSeen]=useState(false);
 useEffect(()=>{
   const element=node.current;
   if(!element)return;
   const media=window.matchMedia("(prefers-reduced-motion: reduce)");
   if(media.matches||!("IntersectionObserver" in window)){return;}
   const observer=new IntersectionObserver(entries=>{if(entries.some(x=>x.isIntersecting)){setSeen(true);observer.disconnect()}},{threshold:.1,rootMargin:"0px 0px -25px 0px"});
   observer.observe(element);
   return ()=>observer.disconnect();
 },[]);
 return <div ref={node} className={["p1-reveal",seen?"is-seen":"",className].filter(Boolean).join(" ")} style={{animationDelay:delay+"ms"}}>{children}</div>;
}
