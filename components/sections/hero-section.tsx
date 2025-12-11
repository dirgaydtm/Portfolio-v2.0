"use client";

import { MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/data";
import { scrollToSection, getInitials } from "@/lib/utils";
import LetterGlitch from "@/components/blocks/letter-glitch";

export function HeroSection() {
    return (
        <section
            id="about"
            className="relative flex h-[90vh] flex-col items-center justify-center px-4 sm:px-6"
        >
            {/* Background with glitch + overlay */}
            <div className="absolute inset-0 hidden h-100 dark:flex lg:h-200 z-0">
                <LetterGlitch
                    smooth={false}
                    glitchSpeed={100}
                    glitchColors={["#111111", "#111111", "#ffffff"]}
                />

                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950 to-zinc-950/50" />
            </div>

            {/* Main content */}
            <div className="z-1 mx-auto flex max-w-3xl flex-col items-center text-center ">
                {/* Avatar + Badge */}
                <div className="relative">
                    <Avatar className="h-32 w-32 shadow-xl md:h-72 md:w-72">
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback className="text-2xl font-bold">
                            {getInitials(profile.name)}
                        </AvatarFallback>
                    </Avatar>

                    {profile.availableForWork && (
                        <Badge
                            variant="secondary"
                            className="
                absolute bottom-0 left-1/2 -translate-x-1/2
                gap-2 text-xs sm:text-sm
                bg-emerald-100 text-emerald-700
                dark:bg-emerald-950 dark:text-emerald-400
              "
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Available for work
                        </Badge>
                    )}
                </div>

                {/* Name & Title */}
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
                    {profile.name}
                </h1>

                <p className="mt-1 text-xl font-medium text-zinc-600 dark:text-zinc-400">
                    {profile.title}
                </p>

                {/* Location */}
                <div className="mt-2 flex items-center gap-2 text-zinc-500">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                </div>

                <Separator className="my-6 w-24" />

                {/* Bio */}
                <p className="max-w-xl text-md leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {profile.bio}
                </p>

                {/* CTA + Socials */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 gap-y-2">
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

                    {profile.socials.map((social) => (
                        <Button
                            key={social.name}
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
