import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
export default function AuthLayout({children}:{children:React.ReactNode}){
 return <div className="p1-auth-shell"><header className="site-header p1-auth-header"><div className="container header-inner"><Link href="/" className="logo p1-logo" aria-label="CampusCare home">campus<span>care.</span></Link><div className="header-actions"><Link href="/" className="p1-auth-home"><ArrowLeft size={16}/> Back to website</Link><ThemeToggle/></div></div></header>{children}</div>;
}
