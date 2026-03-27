import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "hero"
  | "heroOutline"
  | "link";

type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-[#5819e8] text-white shadow-[0_12px_28px_rgba(88,25,232,0.3)] hover:bg-[#6b2bff]",
  outline:
    "border border-[#3a2e72] bg-transparent text-white hover:border-[#6f57d9] hover:bg-[#110e2a]",
  ghost: "bg-transparent text-[#8f91ad] hover:bg-[#131632] hover:text-white",
  hero: "bg-linear-to-r from-[#5a1cf1] to-[#8a4dff] text-white hover:from-[#6631f4] hover:to-[#9360ff]",
  heroOutline:
    "border border-[#7e73b8] bg-transparent text-white hover:border-[#9b91d0] hover:bg-white/5",
  link: "bg-transparent text-[#49d8c8] hover:text-[#77f3e5]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
  lg: "h-14 px-8 text-base font-semibold",
  icon: "h-11 w-11",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a52e9]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070919] disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
