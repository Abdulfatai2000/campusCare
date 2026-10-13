import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline"; };
export function Button({ variant="primary",className,children,...props }:Props) {
  return <button className={cn("button",variant==="outline"&&"button-outline",className)} {...props}>{children}</button>;
}
