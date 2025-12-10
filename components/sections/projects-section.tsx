import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";

export function ProjectsSection() {
    return (
        <section id="projects" className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">
                        Portfolio
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        A selection of projects I&apos;ve worked on, from full-stack applications to
                        mobile apps.
                    </p>
                </div>

                <Separator className="mx-auto my-10 w-24" />

                {/* Projects Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card
                            key={project.slug}
                            className="group flex flex-col overflow-hidden border-zinc-200 transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-600"
                        >
                            {/* Thumbnail */}
                            <div className="relative overflow-hidden">
                                <AspectRatio ratio={16 / 10}>
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </AspectRatio>
                                {/* Status Badge */}
                                <div className="absolute right-2 top-2">
                                    <Badge
                                        variant={
                                            project.status === "completed"
                                                ? "default"
                                                : project.status === "in-progress"
                                                    ? "secondary"
                                                    : "outline"
                                        }
                                        className={
                                            project.status === "completed"
                                                ? "bg-emerald-500 hover:bg-emerald-600"
                                                : ""
                                        }
                                    >
                                        {project.status === "completed"
                                            ? "Completed"
                                            : project.status === "in-progress"
                                                ? "In Progress"
                                                : "Archived"}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <CardTitle className="text-lg">{project.title}</CardTitle>
                                        <CardDescription className="mt-1">
                                            {project.category} • {project.year}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1 pb-2">
                                <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    {project.shortDescription}
                                </p>

                                {/* Tech Tags */}
                                <div className="mt-3 flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <Badge variant="secondary" className="text-xs">
                                            +{project.technologies.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="gap-2 pt-2">
                                <Button variant="default" size="sm" className="flex-1" asChild>
                                    <Link href={`/projects/${project.slug}`}>
                                        View Details
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                {project.githubUrl && (
                                    <Button variant="outline" size="icon" asChild>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                                {project.liveUrl && (
                                    <Button variant="outline" size="icon" asChild>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
