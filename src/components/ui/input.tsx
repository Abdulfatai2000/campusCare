import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Input({className,...props}:InputHTMLAttributes<HTMLInputElement>) {return <input className={cn("w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)]",className)} {...props}/>;}
