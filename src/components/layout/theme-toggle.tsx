"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle(){
 const [theme,setTheme]=useState<"dark"|"light">("dark");
 useEffect(()=>{
  const saved=localStorage.getItem("campuscare-theme");
  const preferred=saved==="light"||saved==="dark"?saved:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
  document.documentElement.dataset.theme=preferred;setTheme(preferred);
 },[]);
 function toggle(){const next=theme==="dark"?"light":"dark";setTheme(next);document.documentElement.dataset.theme=next;localStorage.setItem("campuscare-theme",next)}
 return <button type="button" className="theme-button p1-theme-button" onClick={toggle} aria-label={theme==="dark"?"Switch to light mode":"Switch to dark mode"} title={theme==="dark"?"Light mode":"Dark mode"}>{theme==="dark"?<Sun size={18}/>:<Moon size={18}/>}</button>;
}
