"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { marketingNavigation as nav } from "@/constants/marketing-navigation";

function CampusCareMark() {
  return (
    <svg className="p1-brand-mark" width="39" height="39" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#C8FA78" />
      <path d="M20 8.5 31 13v7.8c0 7.1-5 11.5-11 13.8C14 32.3 9 27.9 9 20.8V13L20 8.5Z" fill="#17291B" />
      <path d="M20 15v12M14 21h12" stroke="#C8FA78" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  useEffect(() => { setMenu(false); }, [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMenu(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header p1-site-header">
      <div className="container header-inner">
        <Link href="/" className="logo p1-logo p1-brand" aria-label="CampusCare home">
          <CampusCareMark />
          <span className="p1-brand-name">Campus<span>Care</span><span className="p1-brand-period">.</span></span>
        </Link>
        <nav className="site-nav p1-site-nav" aria-label="Main navigation">
          {nav.map(item => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-current" : ""} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <div className="p1-header-tools">
          <Link className="p1-login-link" href="/auth/login">Log in</Link>
          <Link className="button p1-button p1-header-cta" href="/auth/signup">Get started <ArrowRight size={16} aria-hidden="true" /></Link>
          <button className="p1-mobile-trigger" type="button" onClick={() => setMenu(open => !open)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="campuscare-mobile-navigation">
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className="p1-mobile-nav" id="campuscare-mobile-navigation" hidden={!menu}>
        <nav aria-label="Mobile main navigation">
          {nav.map(item => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}<ArrowRight size={15} aria-hidden="true" />
            </Link>
          ))}
          <Link href="/auth/login">Log in<ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/auth/signup" className="mobile-primary">Get started<ArrowRight size={15} aria-hidden="true" /></Link>
        </nav>
      </div>
    </header>
  );
}
