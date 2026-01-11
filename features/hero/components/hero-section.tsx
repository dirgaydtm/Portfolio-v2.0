"use client";

import { Download } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { profile } from "../data/profile";
import { scrollToSection } from "@/shared/lib/utils";
import LetterGlitch from "./letter-glitch";
import { ProfilePicture } from "./profile-picture";

export function HeroSection() {
    return (
        <section
            id="about"
            className="relative flex h-screen flex-col items-center justify-center px-4 sm:px-6"
        >
            {/* Background with glitch + overlay */}
            <div className="absolute inset-0 hidden h-100 dark:flex lg:h-200 z-0">
                <LetterGlitch
                    smooth={false}
                    glitchSpeed={100}
                    glitchColors={["#111111", "#111111", "#ffffff"]}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background to-background/50" />
            </div>

            {/* Main content */}
            <div className="z-1 mx-auto flex gap-6 max-w-3xl flex-col items-center">
                {/* Profile Picture */}
                <ProfilePicture />

                {/* Bio */}
                <p className="max-w-xl text-md text-center leading-relaxed text-muted-foreground">
                    {profile.bio}
                </p>

                <Separator className="w-full" />

                {/* CTA + Socials */}
                <div className="flex flex-wrap items-center justify-center gap-4 gap-y-2">
                    <Button size="lg" onClick={() => scrollToSection("contact")}>
                        Get in Touch
                    </Button>

                    <Button size="lg" variant="outline" asChild>
                        <a href={profile.resumeUrl} download="Dirga_Yudhatama_CV.pdf">
                            <Download className="h-4 w-4" />
                            Download CV
                        </a>
                    </Button>

                    <div className="flex basis-full md:hidden" />

                    {profile.socials.map((social, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            size="icon-lg"
                            asChild
                        >
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}

