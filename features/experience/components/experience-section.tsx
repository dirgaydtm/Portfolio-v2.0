"use client";

import { experiences } from "../data/experiences";
import { TimelineExp } from "./timeline-exp";
import { Badge } from "@/shared/components/ui/badge";
import { Boxes } from "@/shared/components/blocks/background-boxes";

export function ExperienceSection() {
    return (
        <section id="experience" className="relative bg-background py-20 px-4 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-600 overflow-hidden h-full">
                <Boxes className="flex h-full" />
                <div className="absolute inset-0 h-10 md:h-30 bg-background [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                <div className="absolute left-0 bottom-0 w-full h-10 md:h-30 bg-background [clip-path:polygon(0_0,100%_100%,0_100%)]" />
            </div>

            <div className="mx-auto max-w-5xl pointer-events-none text-center">
                <Badge variant="outline" className="mb-4">
                    Career
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Work Experience
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-md text-muted-foreground">
                    My professional journey in the tech industry, building products and
                    growing as a developer.
                </p>
                <TimelineExp className="pt-10" items={experiences} />
            </div>
        </section>
    );
}

