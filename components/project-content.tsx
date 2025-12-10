"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    Tag,
    CheckCircle2,
    ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { projects, type Project } from "@/lib/data";

export function ProjectContent({ project }: { project: Project }) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="min-h-screen px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-5xl">
                {/* Back Button */}
                <Button variant="ghost" className="mb-8" asChild>
                    <Link href="/#projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
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
                        <Badge variant="outline">{project.category}</Badge>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
                        {project.title}
                    </h1>

                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        {project.shortDescription}
                    </p>

                    {/* Meta Info */}
                    <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-zinc-500">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                        </span>
                        <span className="flex items-center gap-2">
                            <Tag className="h-4 w-4" />
                            {project.category}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <Button asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Demo
                                </a>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button variant="outline" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Image Gallery Carousel */}
                <section className="mb-12">
                    <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                        Project Gallery
                    </h2>

                    <Carousel className="w-full">
                        <CarouselContent>
                            {project.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="cursor-pointer group relative overflow-hidden rounded-lg">
                                                <AspectRatio ratio={16 / 9}>
                                                    <Image
                                                        src={image}
                                                        alt={`${project.title} screenshot ${index + 1}`}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </AspectRatio>
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                                                    <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                                            <VisuallyHidden>
                                                <DialogTitle>{project.title} - Image {index + 1}</DialogTitle>
                                            </VisuallyHidden>
                                            <AspectRatio ratio={16 / 9}>
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </AspectRatio>
                                        </DialogContent>
                                    </Dialog>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>

                    {/* Thumbnail Navigation */}
                    <div className="mt-4 flex justify-center gap-2">
                        {project.images.map((image, index) => (
                            <button
                                key={index}
                                className={`h-16 w-24 overflow-hidden rounded-md border-2 transition-all ${selectedImage === index
                                        ? "border-zinc-900 dark:border-zinc-50"
                                        : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={96}
                                    height={64}
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </section>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <Card className="border-zinc-200 dark:border-zinc-800">
                            <CardHeader>
                                <CardTitle>About the Project</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Features */}
                        <Card className="border-zinc-200 dark:border-zinc-800">
                            <CardHeader>
                                <CardTitle>Key Features</CardTitle>
                                <CardDescription>
                                    What makes this project special
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-auto">
                                    <ul className="grid gap-3 sm:grid-cols-2">
                                        {project.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <Card className="border-zinc-200 dark:border-zinc-800">
                            <CardHeader>
                                <CardTitle>Technologies</CardTitle>
                                <CardDescription>Built with</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card className="border-zinc-200 dark:border-zinc-800">
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

                {/* Other Projects */}
                <section className="mt-16">
                    <Separator className="mb-8" />
                    <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                        Other Projects
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {projects
                            .filter((p) => p.slug !== project.slug)
                            .slice(0, 3)
                            .map((p) => (
                                <Card
                                    key={p.slug}
                                    className="group border-zinc-200 transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-600"
                                >
                                    <Link href={`/projects/${p.slug}`}>
                                        <div className="relative overflow-hidden">
                                            <AspectRatio ratio={16 / 10}>
                                                <Image
                                                    src={p.thumbnail}
                                                    alt={p.title}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </AspectRatio>
                                        </div>
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg">{p.title}</CardTitle>
                                            <CardDescription className="line-clamp-2">
                                                {p.shortDescription}
                                            </CardDescription>
                                        </CardHeader>
                                    </Link>
                                </Card>
                            ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
