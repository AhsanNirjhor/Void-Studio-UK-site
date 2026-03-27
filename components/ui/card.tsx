import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-[#2a2f58] bg-[#161935] text-white",
        className,
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";
