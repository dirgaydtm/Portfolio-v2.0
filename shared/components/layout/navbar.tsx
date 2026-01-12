"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code2, Briefcase, FolderKanban, Mail } from "lucide-react";
import Dock, { type DockItemData } from "@/shared/components/blocks/Dock";
import { scrollToSection } from "@/shared/lib/utils";


export function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const innerHeight = window.innerHeight;
            const offsetHeight = document.body.offsetHeight;
            setIsHidden(innerHeight + scrollY >= offsetHeight - 40 || scrollY <= 0);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const dockItems: DockItemData[] = useMemo(() => [
        {
            icon: <User />,
            label: "About",
            onClick: () => scrollToSection("hero"),
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
            {!isHidden && (
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed bottom-0 md:bottom-5 inset-x-0 z-50"
                    aria-label="Main navigation"
                >
                    <Dock
                        items={dockItems}
                        baseItemSize={50}
                        distance={150}
                        panelHeight={68}
                        dockHeight={68}
                        className="backdrop-blur-md"
                    />
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
