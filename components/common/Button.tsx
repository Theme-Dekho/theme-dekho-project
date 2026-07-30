import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary-outline" | "quote" | "login" | "ad" | "cta-submit";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  "secondary-outline": "btn-secondary-outline",
  quote: "btn-quote",
  login: "btn-login",
  ad: "ad-btn",
  "cta-submit": "cta-submit",
};

/** Thin wrapper around the site's existing button classes so call sites
 *  don't have to remember which literal class name goes with which style. */
export default function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(variantClass[variant], className)} {...rest}>
      {children}
    </button>
  );
}
