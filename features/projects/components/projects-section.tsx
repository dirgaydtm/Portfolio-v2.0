import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { projects } from "../data/projects";
import ProjectCard from "./project-card";
import Reveal from "@/shared/animations/reveal";
import Shiny from "@/shared/animations/shiny";
import Fade from "@/shared/animations/fade";

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative px-4 py-20 sm:px-6">
            <div className="flex-col relative mx-auto max-w-7xl z-1">
                <div className="mx-auto flex flex-col items-center gap-4 max-w-6xl text-center">
                    <Badge variant="outline">
                        Portfolio
                    </Badge>
                    <Reveal once>
                        <Shiny className="text-4xl font-bold tracking-tight text-foreground">
                            Featured Projects
                        </Shiny>
                    </Reveal>
                    <Reveal mode="auto" once direction="down" stagger={0.05} className="justify-center max-w-lg text-base md:text-lg text-muted-foreground">
                        A selection of projects I&apos;ve worked on, from web to
                        mobile apps.
                    </Reveal>
                </div>
                <Separator className="mx-auto my-10 w-24" />
                <Fade once direction="down" delay={0.4} className="flex flex-wrap gap-4 justify-center">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} className="w-sm md:w-sm  hover:-translate-y-2 cursor-pointer transition-all shadow-none hover:shadow-primary/5  hover:shadow-xl" />
                    ))}
                </Fade>
            </div>
        </section>
    );
}