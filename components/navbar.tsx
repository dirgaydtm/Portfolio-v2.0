"use client";

import { useMemo } from "react";
import { User, Code2, Briefcase, FolderKanban, Mail } from "lucide-react";
import Dock, { type DockItemData } from "./ui/Dock";
import { scrollToSection } from "@/lib/utils";

export function Navbar() {
    // Memoize navigation items to prevent recreation on each render
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
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4"
            aria-label="Main navigation"
        >
            <Dock
                items={dockItems}
                baseItemSize={50}
                magnification={70}
                distance={150}
                panelHeight={68}
                dockHeight={68}
                className="backdrop-blur-md"
            />
        </nav>
    );
}
