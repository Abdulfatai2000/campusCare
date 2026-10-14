"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { marketingNavigation as nav } from "@/constants/marketing-navigation";

import { CampusCareBrand } from "@/components/marketing/brand";

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
        <CampusCareBrand />
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
