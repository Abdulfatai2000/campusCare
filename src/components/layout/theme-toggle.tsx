"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() {
  const [theme,setTheme] = useState<"dark"|"light">("dark");
  useEffect(() => {
    const saved = localStorage.getItem("campuscare-theme");
    const initial = saved === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  },[]);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("campuscare-theme",next);
  }
  return <button type="button" className="theme-button" onClick={toggle} aria-label={theme==="dark"?"Enable light theme":"Enable dark theme"} title="Toggle theme">{theme==="dark"?<Sun size={18}/>:<Moon size={18}/>}</button>;
}
