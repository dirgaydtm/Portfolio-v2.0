"use client";
import { useState, memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = 100, cols = 100;

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(1.1) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute z-0 flex h-full w-full p-4",
        className,
      )}
      {...rest}
    >
      {Array.from({ length: rows }, (_, i) => (
        <motion.div key={i} className="relative h-8 w-16 border-l border-foreground/10">
          {Array.from({ length: cols }, (_, j) => {
            return (
              <motion.div
                key={j}
                whileHover={{
                  backgroundColor: `#ffffff`,
                  transition: { duration: 0 },
                }}
                animate={{
                  backgroundColor: undefined,
                  transition: { duration: 0.2 },
                }}
                className={cn("relative h-8 w-16 border-t border-r border-foreground/10")}
              />
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = memo(BoxesCore);
