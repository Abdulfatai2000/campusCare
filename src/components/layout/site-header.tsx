"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { marketingNavigation } from "@/constants/marketing-navigation";
import { CampusCareBrand } from "@/components/marketing/brand";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 961px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", resize);
    const button = trigger.current;
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
      media.removeEventListener("change", resize);
      button?.focus();
    };
  }, [open]);
  const current = (href: string) =>
    href.includes("#")
      ? pathname === "/" && hash === "#how-it-works"
      : pathname === href && !(href === "/" && hash === "#how-it-works");
  const links = marketingNavigation.map((item) => (
    <Link
      href={item.href}
      key={item.href}
      aria-current={
        current(item.href)
          ? item.href.includes("#")
            ? "location"
            : "page"
          : undefined
      }
      onClick={() => {
        setOpen(false);
        setHash(item.href.includes("#") ? "#how-it-works" : "");
      }}
    >
      {item.label}
    </Link>
  ));
  return (
    <header className="cc-header">
      <div className="cc-container cc-header-inner">
        <CampusCareBrand />
        <nav className="cc-nav" aria-label="Main navigation">
          {links}
        </nav>
        <div className="cc-header-actions">
          <Link className="cc-header-login" href="/auth/login">
            Log in
          </Link>
          <Link className="cc-button" href="/auth/signup">
            Get started <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            ref={trigger}
            className="cc-menu-button"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="campuscare-mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={21} />
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        id="campuscare-mobile-navigation"
        className="cc-drawer"
        aria-label="Mobile navigation"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])',
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onCancel={() => setOpen(false)}
        onClick={(event) => {
          if (
            event.target === event.currentTarget &&
            event.clientX < event.currentTarget.getBoundingClientRect().left
          )
            setOpen(false);
        }}
      >
        <div className="cc-drawer-head">
          <span className="cc-label">Explore CampusCare</span>
          <button
            className="cc-menu-button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            <X size={21} />
          </button>
        </div>
        <nav aria-label="Mobile main navigation">{links}</nav>
        <div className="cc-actions">
          <Link
            href="/auth/login"
            className="cc-button cc-button-secondary"
            onClick={() => setOpen(false)}
          >
            Log in
          </Link>
          <Link
            href="/auth/signup"
            className="cc-button"
            onClick={() => setOpen(false)}
          >
            Get started <ArrowUpRight size={17} />
          </Link>
        </div>
        <p className="cc-drawer-note">
          Independent project. Account creation and sign-in are not live yet.
        </p>
      </dialog>
    </header>
  );
}
