import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "../marketing-v2.css";
export default function MarketingLayout({children}:{children:React.ReactNode}){
 return <div className="cc-site"><a href="#main-content" className="cc-skip cc-button">Skip to main content</a><SiteHeader/><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter/></div>;
}
