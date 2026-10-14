"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle(){
 const [theme,setTheme]=useState<"dark"|"light">("dark");
 useEffect(()=>{
  let saved: string | null = null;
  try { saved=localStorage.getItem("campuscare-theme"); } catch { /* Storage can be disabled. */ }
  const preferred=saved==="light"||saved==="dark"?saved:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
  document.documentElement.dataset.theme=preferred;setTheme(preferred);
  const sync = () => setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  window.addEventListener("campuscare-theme-change", sync);
  return () => window.removeEventListener("campuscare-theme-change", sync);
 },[]);
 function toggle(){const next=document.documentElement.dataset.theme==="dark"?"light":"dark";setTheme(next);document.documentElement.dataset.theme=next;try{localStorage.setItem("campuscare-theme",next)}catch{}window.dispatchEvent(new Event("campuscare-theme-change"))}
 return <button type="button" className="theme-button p1-theme-button" onClick={toggle} aria-label={theme==="dark"?"Switch to light mode":"Switch to dark mode"} title={theme==="dark"?"Light mode":"Dark mode"}>{theme==="dark"?<Sun size={18}/>:<Moon size={18}/>}</button>;
}
