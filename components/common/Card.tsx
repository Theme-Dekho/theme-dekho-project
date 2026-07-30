import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "why" | "test" | "plain";
}

const variantClass: Record<NonNullable<CardProps["variant"]>, string> = {
  why: "why-card",
  test: "test-card",
  plain: "",
};

export default function Card({ children, className, variant = "plain" }: CardProps) {
  return <div className={cn(variantClass[variant], className)}>{children}</div>;
}
