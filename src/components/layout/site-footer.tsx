import Link from "next/link";
export function SiteFooter() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-cols">
      <div><Link className="logo" href="/">campus<span>care.</span></Link><p className="muted small" style={{maxWidth:310}}>Making student services feel connected, helpful, and within reach.</p><p className="eyebrow">Independent concept · Not affiliated with OAU</p></div>
      <div><strong>Discover</strong><div className="footer-links" style={{marginTop:18}}><Link href="/features">Features</Link><Link href="/about">About</Link><Link href="/dashboard">Prototype dashboard</Link></div></div>
      <div><strong>Get in touch</strong><div className="footer-links" style={{marginTop:18}}><Link href="/contact">Contact</Link><Link href="/emergency">Emergency directory preview</Link><Link href="/auth/login">Account preview</Link></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} CampusCare. Built with care.</span><span>Student-first · Accessibility-minded · Growing thoughtfully</span></div>
  </div></footer>;
}
