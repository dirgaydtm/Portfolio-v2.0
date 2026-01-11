"use client";

import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { TechStacksCarousel } from "./tech-stack-carousel";
import { TechStackOverview } from "./tech-stack-overview";
import { techStack } from "../data/tech-stack";

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
        <section id="skills" className="px-4 py-20 sm:px-6 overflow-hidden">

            <div className="mx-auto max-w-7xl z-1 flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">
                        Tech Stack
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Skills & Technologies
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-md text-muted-foreground">
                        Here are the technologies I work with on a daily basis to build modern,
                        scalable applications.
                    </p>
                </div>

                {/* Tech Stack Carousel */}
                <TechStacksCarousel techStack={techStack} />

                <Separator className="mx-auto mb-10 w-24" />

                {/* Tech Stack Overview */}
                <TechStackOverview groups={skillGroups} className="hidden md:grid max-w-5xl" />

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap justify-center md:hidden gap-2">
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

