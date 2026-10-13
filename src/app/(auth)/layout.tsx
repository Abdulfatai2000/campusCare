import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
export default function AuthLayout({children}:{children:React.ReactNode}) {
 return <><header className="site-header"><div className="container header-inner"><Link href="/" className="logo">campus<span>care.</span></Link><div className="header-actions"><Link href="/" className="small muted">← Back to website</Link><ThemeToggle/></div></div></header>{children}</>;
}
