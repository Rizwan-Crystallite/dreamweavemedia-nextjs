import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[50px] w-full rounded-full border-2 border-input bg-transparent px-5 text-[16px] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-white focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 autofill-input",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
