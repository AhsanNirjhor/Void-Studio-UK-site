import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "cyan" | "amber";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[#201d43] text-[#c0badf]",
  outline: "border border-[#403a6f] bg-transparent text-[#bcb5db]",
  cyan: "border border-[#1f8daf] bg-[#071f36] text-[#54d8ff]",
  amber: "border border-[#5b4730] bg-[#2b2114] text-[#d39a3f]",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-2 text-xs font-bold tracking-[0.2em]",
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
