"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Bell, Menu, ArrowUpRight } from "lucide-react";
import { adminNavigation } from "@/constants/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { PreviewDialog } from "./admin-ui";
import { useAdminPreview } from "./admin-state";

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { notifications } = useAdminPreview();
  const unread = notifications.filter(item => !item.read).length;
  const active = (href: string) => href === "/admin" ? pathname === href : pathname === href || pathname.startsWith(href + "/");
  const current = adminNavigation.find(item => active(item.href));
  const links = adminNavigation.map(item => <Link href={item.href} key={item.href} aria-current={active(item.href) ? "page" : undefined} onClick={() => setOpen(false)} style={active(item.href) ? { background: "var(--surface-2)", color: "var(--accent)" } : undefined}><item.icon size={18} aria-hidden="true" />{item.label}</Link>);
  return <div className="workspace"><a href="#admin-main" className="button admin-skip">Skip to admin content</a><aside className="workspace-aside"><Link href="/" className="logo">campus<span>care.</span></Link><div><p className="eyebrow" style={{ paddingLeft: 14 }}>Operations / Demo</p><nav className="side-nav" aria-label="Admin navigation">{links}</nav></div><div className="aside-note"><strong>FRONTEND PREVIEW</strong><p>Fictional campus, people and requests. No signed-in administrator.</p><Link href="/dashboard">Student workspace ↗</Link></div></aside><div className="workspace-main"><header className="workspace-topbar"><div className="admin-quicklinks"><button className="theme-button admin-mobile-toggle" aria-label="Open admin navigation" aria-expanded={open} onClick={() => setOpen(true)}><Menu size={20} /></button><span className="eyebrow admin-topbar-label">Campus operations</span></div><div className="admin-quicklinks"><Link href="/dashboard" className="button button-outline small">Student preview <ArrowUpRight size={15} /></Link><Link href="/admin/notifications" className="theme-button" aria-label={`Admin notifications, ${unread} unread examples`}><Bell size={18} /></Link><ThemeToggle /></div></header><main id="admin-main" tabIndex={-1} className="workspace-content"><div className="preview-banner"><strong>Fictional data · Local preview only.</strong> Changes last while this admin workspace is open and reset on reload. No database updates, messages or real bookings. Do not enter personal information.</div>{pathname !== "/admin" && <nav className="admin-breadcrumb" aria-label="Breadcrumb"><Link href="/admin">Overview</Link><span aria-hidden="true">/</span>{pathname.startsWith("/admin/reports/") ? <><Link href="/admin/reports">Reports</Link><span aria-hidden="true">/</span><span>Sample report</span></> : <span>{current?.label ?? "Admin page"}</span>}</nav>}{children}<footer className="small muted" style={{ marginTop: 40 }}>CampusCare is an independent prototype, not an official university service. <Link href="/">Return to website ↗</Link></footer></main></div>{open && <PreviewDialog title="Admin navigation" onClose={() => setOpen(false)}><div className="admin-drawer"><nav aria-label="Mobile admin navigation">{links}</nav></div></PreviewDialog>}</div>;
}
