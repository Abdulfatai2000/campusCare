import Link from "next/link";

/** CampusCare's existing independent shield-and-care mark; no university seal. */
export function CampusCareBrand() {
  return <Link href="/" className="cc-brand" aria-label="CampusCare home"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect width="40" height="40" rx="12" fill="#C8FA78"/><path d="M20 8.5 31 13v7.8c0 7.1-5 11.5-11 13.8C14 32.3 9 27.9 9 20.8V13L20 8.5Z" fill="#17291B"/><path d="M20 15v12M14 21h12" stroke="#C8FA78" strokeWidth="3.5" strokeLinecap="round"/></svg><span>Campus<span>Care</span><span className="cc-brand-dot">.</span></span></Link>;
}
