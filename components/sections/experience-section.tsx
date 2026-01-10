"use client";

import { experiences } from "@/lib/data";
import { TimelineExp } from "@/components/blocks/timeline-exp";
import { Badge } from "@/components/ui/badge";
import { Boxes } from "@/components/blocks/background-boxes";

export function ExperienceSection() {
    return (
        <section id="experience" className="relative bg-background py-20 px-4 overflow-hidden">
            <Boxes />

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

            <div className="absolute inset-0 h-10 md:h-20 bg-background [clip-path:polygon(100%_0,100%_100%,0_0)]" />
            <div className="absolute left-0 bottom-0 w-full h-10 md:h-20 bg-background [clip-path:polygon(0_0,100%_100%,0_100%)]" />
        </section>
    );
}
