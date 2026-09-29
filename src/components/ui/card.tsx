import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "paper" | "cream" | "outline";
}

export function Card({
  className,
  variant = "paper",
  children,
  ...props
}: CardProps) {
  const bgMap = {
    paper: "bg-[#FBF7EF] border-[#DCCFB6]",
    cream: "bg-[#EDE3D0]/60 border-[#DCCFB6]",
    outline: "bg-transparent border-[#DCCFB6]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-all duration-200 shadow-[0_2px_8px_rgba(28,43,42,0.04)]",
        bgMap[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-serif text-lg font-semibold tracking-tight text-[#1C2B2A]", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xs text-[#1C2B2A]/70 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-0", className)} {...props}>{children}</div>;
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center pt-4 border-t border-[#DCCFB6]/50 mt-4", className)} {...props}>
      {children}
    </div>
  );
}
