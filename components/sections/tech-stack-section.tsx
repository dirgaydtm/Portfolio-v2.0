"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TechStacksCarousel } from "@/components/blocks/tech-stack-carousel";
import { TechStackOverview } from "@/components/blocks/tech-stack-overview";
import { techStack } from "@/lib/data";

export function TechStackSection() {
    if (techStack.length === 0) {
        return null;
    }

    const skillGroups = Object.entries(
        techStack.reduce(
            (acc, tech) => {
                if (!acc[tech.group]) {
                    acc[tech.group] = [];
                }
                acc[tech.group].push({ name: tech.name, category: tech.category });
                return acc;
            },
            {} as Record<string, { name: string; category: string }[]>
        )
    ).map(([groupName, skills]) => ({ groupName, skills }));

    return (
        <section id="skills" className="min-h-[60vh] px-4 py-10 sm:px-6 overflow-hidden">
                
            <div className="mx-auto max-w-7xl z-1 flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">
                        Tech Stack
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                        Skills & Technologies
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-md text-zinc-600 dark:text-zinc-400">
                        Here are the technologies I work with on a daily basis to build modern,
                        scalable applications.
                    </p>
                </div>

                {/* Tech Stack Carousel */}
                <TechStacksCarousel techStack={techStack} />

                <Separator className="mx-auto my-10 w-24" />

                {/* Tech Stack Overview */}
                <TechStackOverview groups={skillGroups} className="hidden md:grid max-w-5xl z-1" />

                {/* Tech Stack Badges */}
                <div className="mt-8 flex flex-wrap justify-center md:hidden gap-2">
                    {techStack.map((tech) => (
                        <Badge
                            key={tech.name}
                            variant="secondary"
                            className="text-xs"
                        >
                            {tech.name}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}