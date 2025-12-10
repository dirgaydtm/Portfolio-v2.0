"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
                >
                    {profile.name.split(" ")[0]}
                    <span className="text-zinc-500">.</span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <Button key={link.href} variant="ghost" size="sm" asChild>
                            <a href={link.href}>{link.label}</a>
                        </Button>
                    ))}
                    <Separator orientation="vertical" className="mx-2 h-6" />
                    <Button variant="outline" size="sm" asChild>
                        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Resume
                        </a>
                    </Button>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
