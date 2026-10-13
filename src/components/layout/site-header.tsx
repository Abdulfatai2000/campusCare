import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
export function SiteHeader() {
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="logo" aria-label="CampusCare home">campus<span>care.</span></Link>
    <nav className="site-nav" aria-label="Main navigation"><Link href="/features">Features</Link><Link href="/about">Our vision</Link><Link href="/contact">Contact</Link></nav>
    <div className="header-actions"><ThemeToggle/><Link href="/dashboard" className="button">Explore demo ↗</Link>
      <details className="mobile-site-menu"><summary aria-label="Open navigation">Menu</summary><nav aria-label="Mobile navigation"><Link href="/">Home</Link><Link href="/features">Features</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/auth/login">Sign in</Link></nav></details>
    </div>
  </div></header>;
}
