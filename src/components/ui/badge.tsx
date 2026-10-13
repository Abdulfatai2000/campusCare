import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Badge({children,className,...props}:HTMLAttributes<HTMLSpanElement>) { return <span className={cn("chip",className)} {...props}>{children}</span>; }
