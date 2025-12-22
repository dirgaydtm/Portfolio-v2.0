"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, Briefcase, FolderKanban, Mail } from "lucide-react";
import Dock, { type DockItemData } from "@/components/blocks/Dock";
import { scrollToSection } from "@/lib/utils";


export function Navbar() {
    const [isAtBottom, setIsAtBottom] = useState(false);
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const innerHeight = window.innerHeight;
            const offsetHeight = document.body.offsetHeight;
            setIsAtBottom(innerHeight + scrollY >= offsetHeight - 40);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const dockItems: DockItemData[] = useMemo(() => [
        {
            icon: <User />,
            label: "About",
            onClick: () => scrollToSection("about"),
        },
        {
            icon: <Code2 />,
            label: "Skills",
            onClick: () => scrollToSection("skills"),
        },
        {
            icon: <Briefcase />,
            label: "Experience",
            onClick: () => scrollToSection("experience"),
        },
        {
            icon: <FolderKanban />,
            label: "Projects",
            onClick: () => scrollToSection("projects"),
        },
        {
            icon: <Mail />,
            label: "Contact",
            onClick: () => scrollToSection("contact"),
        },
    ], []);

    return (
        <AnimatePresence>
            {!isAtBottom && (
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed bottom-0 md:bottom-5 lg:bottom-10 inset-x-0 z-50"
                    aria-label="Main navigation"
                >
                    <Dock
                        items={dockItems}
                        baseItemSize={50}
                        distance={150}
                        panelHeight={68}
                        dockHeight={68}
                        className="backdrop-blur-xs"
                    />
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
