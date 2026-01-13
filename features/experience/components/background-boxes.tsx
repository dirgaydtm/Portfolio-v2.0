"use client";

import { memo } from "react";
import { motion } from "motion/react";

function BackgroundBoxes({ className } : { className?: string }) {
  const rows = 67, cols = 42;

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(1.1) rotate(0deg) translateZ(0)`,
      }}
      className={className}
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
                className="relative h-8 w-16 border-t border-r border-foreground/10"
              />
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export default memo(BackgroundBoxes);
