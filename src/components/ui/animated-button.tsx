import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      // Krezco Custom Variants - Updated with new styles
      hero: "bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] hover:scale-105 border border-purple-400/30",
      generate: "bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full font-bold shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] hover:scale-105 border border-purple-300/40",
      glass: "bg-white/5 backdrop-blur-xl border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/30 shadow-lg",
      dark: "bg-gray-800/90 backdrop-blur-sm border border-gray-600/30 text-white rounded-full hover:bg-gray-700/90 hover:border-gray-500/50 shadow-lg",
      floating: "glass text-foreground hover:bg-surface-elevated/80 animate-float shadow-elevation",
      gradient: "bg-gradient-primary text-white font-bold hover:scale-105 transform transition-smooth animate-gradient"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-lg px-8 text-base",
      xl: "h-14 rounded-xl px-12 text-lg",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
const AnimatedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({
    variant,
    size,
    className
  }))} ref={ref} {...props}>
        {/* Ripple effect overlay */}
        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        {/* Content with z-index */}
        <span className="relative z-10 mx-0 text-xl">{children}</span>
      </Comp>;
});
AnimatedButton.displayName = "AnimatedButton";
export { AnimatedButton, buttonVariants };