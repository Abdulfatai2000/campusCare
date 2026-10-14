import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "../marketing-v2.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { default: "CampusCare — a better connected campus", template: "%s | CampusCare" },
  description: "An independent student-support concept for clearer campus connections. Explore CampusCare’s features, product previews and development principles.",
  openGraph: { type: "website", siteName: "CampusCare", locale: "en_NG", title: "CampusCare — a better connected campus", description: "A little more clarity. A little more connection. Discover the independent OAU-first student-support concept." },
  twitter: { card: "summary", title: "CampusCare — a better connected campus", description: "Thoughtful technology for a clearer student-support journey. Independent concept; frontend preview." },
  // Preserve prototype indexing policy until a verified production domain/launch exists.
  robots: { index: false, follow: false },
};
export default function MarketingLayout({children}:{children:React.ReactNode}){
 return <div className="cc-site"><a href="#main-content" className="cc-skip cc-button">Skip to main content</a><SiteHeader/><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter/></div>;
}
