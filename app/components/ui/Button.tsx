import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-transform duration-300 cursor-pointer shadow-sm disabled:pointer-events-none disabled:opacity-50",
          "hover:scale-105 active:scale-95",
          {
            "bg-[#5EB9FC] text-white hover:bg-[#5EB9FC]/90": variant === "primary",
            "bg-purple-400 text-white hover:bg-purple-400/90": variant === "secondary",
            "bg-yellow-300 text-black hover:bg-yellow-300/90": variant === "accent",
            "bg-transparent text-black hover:bg-black/5": variant === "ghost",
            "px-8 py-3 text-base": size === "default",
            "px-6 py-2 text-sm": size === "sm",
            "px-10 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
