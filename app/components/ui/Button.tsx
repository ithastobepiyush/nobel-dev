import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
  
    variant?: "primary" | "secondary" | "accent" | "ghost" | "success" | "danger"|"warning"|"info" |"dark" | "light"|"rose" |"emerald" |"indigo" |"teal" |"pink"|"lime" |"amber" | "brand-orange";


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
            // Status variants
            "bg-green-500 text-white hover:bg-green-500/90": variant === "success",
            "bg-red-500 text-white hover:bg-red-500/90": variant === "danger",
            "bg-orange-400 text-black hover:bg-orange-400/90": variant === "warning",
            "bg-cyan-500 text-white hover:bg-cyan-500/90": variant === "info",

            // Grayscale/Neutral variants
            "bg-slate-800 text-white hover:bg-slate-800/90": variant === "dark",
            "bg-slate-100 text-slate-900 hover:bg-slate-200/90": variant === "light",

            // Extended color palette variants
            "bg-rose-500 text-white hover:bg-rose-500/90": variant === "rose",
            "bg-emerald-500 text-white hover:bg-emerald-500/90": variant === "emerald",
            "bg-indigo-500 text-white hover:bg-indigo-500/90": variant === "indigo",
            "bg-teal-500 atext-white hover:bg-teal-500/90": variant === "teal",
            "bg-pink-400 text-white hover:bg-pink-400/90": variant === "pink",
            "bg-lime-400 text-black hover:bg-lime-400/90": variant === "lime",
            "bg-amber-500 text-white hover:bg-amber-500/90": variant === "amber",

            // Example of another custom hex code variant
            "bg-[#FF7A59] text-white hover:bg-[#FF7A59]/90": variant === "brand-orange",
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
