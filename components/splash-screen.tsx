"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Terminal,
    TypingAnimation,
    AnimatedSpan,
} from "@/components/ui/terminal";

export function SplashScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const visited = sessionStorage.getItem("hasVisited");

        if (visited) {
            setTimeout(() => setShow(false), 0);
            return;
        }

        const timer = setTimeout(() => {
            setShow(false);
            sessionStorage.setItem("hasVisited", "true");
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div suppressHydrationWarning>
            <AnimatePresence mode="wait">
                {show && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: -100 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                        >
                            <Terminal className="w-xs lg:w-5xl shadow-2xl">
                                <TypingAnimation delay={100} duration={40}>
                                    $ sudo pacman -S portfolio
                                </TypingAnimation>
                                <AnimatedSpan delay={2000} className="text-green-500">
                                    Packages (1) portfolio-dirga-2.0.0
                                </AnimatedSpan>
                                <AnimatedSpan delay={2200}>
                                    Total Installed Size: 42.0 MiB
                                </AnimatedSpan>
                                <TypingAnimation delay={2600} duration={40}>
                                    Proceed with installation? [Y/n] Y
                                </TypingAnimation>
                                <AnimatedSpan delay={4600} className="text-cyan-400">
                                    (1/1) installing portfolio-dirga...
                                </AnimatedSpan>
                            </Terminal>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
