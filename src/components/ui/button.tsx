import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-xl";

    const variants = {
      primary: "bg-[#14453D] text-[#F6EFE2] hover:bg-[#14453D]/90 shadow-xs border border-transparent",
      secondary: "bg-[#FBF7EF] text-[#1C2B2A] border border-[#DCCFB6] hover:bg-[#EDE3D0]",
      accent: "bg-[#C4552D] text-[#F6EFE2] hover:bg-[#C4552D]/90 shadow-xs border border-transparent",
      ghost: "text-[#1C2B2A] hover:bg-[#EDE3D0]/60",
      outline: "border border-[#14453D] text-[#14453D] hover:bg-[#14453D]/10",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5 rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
