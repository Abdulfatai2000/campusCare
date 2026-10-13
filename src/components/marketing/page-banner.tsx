import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CampusScene } from "./campus-scene";
export function PageBanner({eyebrow,title,accent,description,ctaLabel,ctaHref}:{eyebrow:string;title:string;accent?:string;description:string;ctaLabel?:string;ctaHref?:string}){
 return <section className="page-banner"><div className="page-banner-copy"><span className="kicker"><span className="status-dot"/> {eyebrow}</span><h1>{title} {accent&&<span className="text-accent">{accent}</span>}</h1><p>{description}</p>{ctaHref&&<Link className="button p1-button" href={ctaHref}>{ctaLabel??"Explore now"}<ArrowRight size={17}/></Link>}</div><div className="page-banner-visual"><CampusScene className="banner-scene"/><span className="scene-caption">A better campus,<br/> built together. <span className="scene-stroke"/></span></div></section>;
}
