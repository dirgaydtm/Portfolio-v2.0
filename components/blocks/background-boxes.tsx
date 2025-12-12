"use client";
import { useState, memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = 70, cols = 45;
  const customBoxes = new Set([
    '30,25', '31,25', '32,25', '33,25',
    '30,26', '34,26',
    '30,27', '34,27',
    '30,28', '34,28',
    '30,29', '34,29',
    '30,30', '34,30',
    '30,31', '31,31', '32,31', '33,31',
  ]);
  const isCustomBox = (i: number, j: number) => customBoxes.has(`${i},${j}`);

  const [customHover, setCustomHover] = useState(false);

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
            const custom = isCustomBox(i, j);
            return (
              <motion.div
                key={j}
                onHoverStart={custom ? () => setCustomHover(true) : undefined}
                onHoverEnd={custom ? () => setCustomHover(false) : undefined}
                whileHover={{
                  backgroundColor: custom ? 'var(--chart-1)' : `#ffffff`,
                  transition: { duration: 0 },
                }}
                animate={{
                  backgroundColor: custom && customHover ? 'var(--chart-1)' : undefined,
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
