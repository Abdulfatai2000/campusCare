import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Card({children,className,...props}:HTMLAttributes<HTMLElement>) { return <article className={cn("card",className)} {...props}>{children}</article>; }
