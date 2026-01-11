"use client";

import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { projects } from "../data/projects";
import ProjectCard from "./project-card";

export function ProjectsSection() {
    return (
        <section id="projects" className="relative px-4 py-20 sm:px-6">

            {/* Content */}
            <div className="flex-col relative mx-auto max-w-5xl z-1">
                {/* Section Header */}
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">
                        Portfolio
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-md text-muted-foreground">
                        A selection of projects I&apos;ve worked on, from full-stack applications to
                        mobile apps.
                    </p>
                </div>

                <Separator className="mx-auto my-10 w-24" />

                {/* Projects Grid */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

