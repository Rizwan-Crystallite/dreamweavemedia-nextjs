"use client";;
import { cn } from "@/lib/utils";
import { motion, useScroll } from "motion/react";
import React from "react";

export const ScrollProgress = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    (<motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-30 h-[3px] origin-left bg-gradient-to-r from-primary via-primary to-primary",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props} />)
  );
});

ScrollProgress.displayName = "ScrollProgress";