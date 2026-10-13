import { Bell, CalendarDays, ChevronRight, LayoutDashboard, LifeBuoy, ClipboardList, AlertTriangle, Grid2X2, Settings, ShieldCheck, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
const actions=[{title:"Report an issue",detail:"Facilities, utilities & safety",icon:ClipboardList,href:"/report-issue",tone:"green"},{title:"Request appointment",detail:"Guidance & campus support",icon:CalendarDays,href:"/appointments/new",tone:"blue"},{title:"Explore services",detail:"Find the right place to start",icon:Grid2X2,href:"/services",tone:"purple"},{title:"Emergency support",detail:"Trusted contacts & resources",icon:AlertTriangle,href:"/emergency",tone:"orange"}];
export function ProductPreview(){
 return <div className="product-preview" aria-label="Illustrative dashboard preview, not a live student account">
 <div className="preview-side"><Link href="/" className="preview-logo">campus<span>care.</span></Link><div className="preview-nav active"><LayoutDashboard size={14}/>Dashboard</div><div className="preview-nav"><ClipboardList size={14}/>Report issue</div><div className="preview-nav"><LifeBuoy size={14}/>Campus services</div><div className="preview-nav"><Bell size={14}/>Notifications</div><div className="preview-nav"><Settings size={14}/>Settings</div><div className="preview-side-foot"><ShieldCheck size={15}/> OAU-first concept</div></div>
 <div className="preview-main"><div className="preview-top"><span className="preview-search">⌕ &nbsp; Search campus services...</span><span className="preview-avatar" aria-hidden="true">CC</span></div>
 <div className="preview-greeting"><div><span className="mini-kicker">CAMPUSCARE / PREVIEW</span><h3>Your campus, simplified 👋</h3><p>A little more care in every campus day.</p></div><span className="preview-location"><MapPin size={13}/> Ile-Ife, Nigeria</span></div>
 <div className="preview-actions">{actions.map(({title,detail,icon:Icon,href,tone})=><Link key={title} href={href} className="preview-action"><div className={"preview-action-icon "+tone}><Icon size={18}/></div><div><b>{title}</b><span>{detail}</span></div><ChevronRight size={14} className="preview-action-arrow"/></Link>)}</div>
 <div className="preview-highlight"><ShieldCheck size={24}/><div><b>A more connected campus starts here.</b><span>Student-built, with care at the center.</span></div><ArrowUpRight size={19}/></div>
 <div className="preview-disclaimer">ILLUSTRATIVE INTERFACE · NO LIVE STUDENT DATA</div>
 </div></div>;
}
