import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
export default function MarketingLayout({children}:{children:React.ReactNode}){
 return <><a href="#main-content" className="p1-skip-link">Skip to main content</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></>;
}
