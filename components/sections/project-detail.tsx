"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type Project } from "@/lib/types";

export function ProjectDetail({ project }: { project: Project }) {
    return (
        <div className="px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-5xl">
                <Button variant="ghost" className="mb-8 transition-all group" asChild>
                    <Link href="/#projects">
                        <ArrowLeft className="group-hover:mr-1 not-group-hover:ml-1 transition-all" />
                        Back to Home
                    </Link>
                </Button>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-muted-foreground">{project.shortDescription}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> {project.year}
                        </span>
                        <span className="flex items-center gap-2">
                            <Tag className="h-4 w-4" /> {project.category}
                        </span>
                    </div>
                </div>

                {project.images.length > 0 && (
                    <section className="mb-12">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {project.images.map((image, index) => (
                                    <CarouselItem key={index}>

                                        <div className="cursor-pointer group relative overflow-hidden rounded-lg">
                                            <AspectRatio ratio={16 / 9}>
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    fill
                                                    className="object-cover transition-transform scale-102 duration-300 group-hover:scale-105"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    </section>
                )}

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>About the Project</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>Key Features</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-auto">
                                    <ul className="grid gap-2 md:grid-cols-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>Technologies</CardTitle>
                                <CardDescription>Built with</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary">{tech}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>Links</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {project.liveUrl && (
                                    <Button variant="outline" className="w-full justify-start" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Live Demo
                                        </a>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button variant="outline" className="w-full justify-start" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            View Source Code
                                        </a>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
