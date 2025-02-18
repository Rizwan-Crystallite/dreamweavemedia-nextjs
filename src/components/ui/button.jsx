import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-full text-[16px] 2xl:text-[18px] font-medium transition-all duration-300 w-max",
  {
    variants: {
      variant: {
        default:
          "bg-accent hover:text-accent-foreground hover:bg-primary border-2 border-transparent hover:border-white",
        destructive:
          "",
        outline:
          "",
        secondary:
          "",
        ghost: "",
        linkIcon: "[&_a]:!px-0 hover:text-primary",
        linkIcon2: "[&_a]:!px-0 [&_div]:hover:bg-secondary [&:hover_div]:-rotate-45 [&_div]:transition-all [&_div]:duration-300",
      },
      type: {
        anchor: "[&_a]:h-[50px] [&_a]:px-10 [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      type: "anchor",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }