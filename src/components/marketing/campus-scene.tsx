/** Decorative, original SVG campus landscape; not a photograph or representation of an official OAU building. */
export function CampusScene({className=""}:{className?:string}){
 return <svg className={className} viewBox="0 0 900 520" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
 <defs><linearGradient id="sceneSky" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#233b2d"/><stop offset=".6" stopColor="#314a36"/><stop offset="1" stopColor="#0b1710"/></linearGradient>
 <linearGradient id="sceneStone" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#b4a484"/><stop offset=".45" stopColor="#746c55"/><stop offset="1" stopColor="#3a3e32"/></linearGradient>
 <linearGradient id="sceneGlass" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#617260"/><stop offset="1" stopColor="#1d2e24"/></linearGradient>
 <radialGradient id="sceneGlow"><stop stopColor="#e9c887" stopOpacity=".55"/><stop offset="1" stopColor="#d1b975" stopOpacity="0"/></radialGradient>
 </defs>
 <rect width="900" height="520" fill="url(#sceneSky)"/><circle cx="650" cy="95" r="240" fill="url(#sceneGlow)"/>
 <g opacity=".32" fill="#173425"><ellipse cx="100" cy="355" rx="160" ry="145"/><ellipse cx="782" cy="275" rx="220" ry="180"/><ellipse cx="470" cy="430" rx="480" ry="90"/></g>
 <g opacity=".6"><path d="M0 360Q240 320 420 372T900 345V520H0Z" fill="#132a1a"/><path d="M0 425Q220 390 470 421T900 399V520H0Z" fill="#0d2116"/></g>
 <g transform="translate(380 85)">
 <rect x="-145" y="256" width="410" height="93" rx="5" fill="#26372c" stroke="#7c7b60" strokeOpacity=".45"/><rect x="-125" y="267" width="365" height="16" fill="#89846b" opacity=".42"/>
 <path d="M10 57 L53 32 L97 57 L97 258 H10Z" fill="url(#sceneStone)"/><path d="M27 66L43 56V248H27Z" fill="#b7a580" opacity=".52"/>
 <path d="M56 46L78 59V256H56Z" fill="#615d49"/><path d="M45 79H80V135H45Z" fill="#32382e"/><circle cx="62" cy="105" r="16" stroke="#b7aa87" strokeWidth="6"/><circle cx="62" cy="105" r="5" fill="#cbb78c"/>
 <path d="M131 125L180 105L228 130V259H131Z" fill="#5c6653"/><path d="M155 140V245" stroke="#c5b395" strokeOpacity=".6" strokeWidth="13"/><rect x="186" y="150" width="24" height="94" fill="url(#sceneGlass)"/>
 <path d="M-90 186H10V260H-90Z" fill="#6c6a54"/><path d="M-70 200V248M-45 200V248M-20 200V248" stroke="#b4a78a" strokeOpacity=".55" strokeWidth="9"/>
 <rect x="-165" y="340" width="464" height="11" fill="#555946"/><rect x="-180" y="351" width="490" height="16" fill="#303e31"/>
 </g>
 <g fill="#182d1c"><path d="M55 520L71 210L82 206L92 520H55Z"/><path d="M760 520L776 155L789 150L805 520H760Z"/></g>
 <g fill="#24452b"><circle cx="75" cy="164" r="96"/><circle cx="18" cy="219" r="85"/><circle cx="132" cy="218" r="87"/><circle cx="778" cy="113" r="114"/><circle cx="874" cy="157" r="91"/><circle cx="698" cy="180" r="74"/></g>
 <g fill="#3e6336" opacity=".75"><circle cx="38" cy="148" r="58"/><circle cx="122" cy="185" r="56"/><circle cx="750" cy="100" r="64"/><circle cx="854" cy="138" r="49"/></g>
 <path d="M0 469C180 448 345 447 460 460C630 478 732 436 900 455V520H0Z" fill="#16281b"/>
 <path d="M365 520L453 393L560 520Z" fill="#7f795b" opacity=".22"/><path d="M410 520L459 412L507 520" fill="#c8bd8e" opacity=".15"/>
 <rect width="900" height="520" fill="#030c06" opacity=".19"/>
 </svg>;
}
