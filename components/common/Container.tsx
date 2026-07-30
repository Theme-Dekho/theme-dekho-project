import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Matches the original `.section-inner` / `.header-inner` max-width: 1260px pattern */
  as?: "div" | "section";
}

export default function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as;
  return <Tag className={cn("section-inner", className)}>{children}</Tag>;
}
