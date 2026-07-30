import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /** "soon" mirrors the disabled/greyed-out `.soon-tag` styling used in the category strip */
  variant?: "default" | "soon" | "hot";
}

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        variant === "soon" && "soon-tag",
        variant === "hot" && "pc-cat hot",
        className
      )}
    >
      {children}
    </span>
  );
}
