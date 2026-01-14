"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel";
import { AspectRatio } from "@/shared/components/ui/aspect-ratio";
import type { Project } from "../types/project";

interface ProjectCarouselProps {
    project: Project;
    className?: string;
}

export default function ProjectCarousel({ project, className }: ProjectCarouselProps) {
    if (project.images.length === 0) {
        return null;
    }

    return (
        <section className={className}>
            <Carousel className="w-full">
                <CarouselContent>
                    {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative overflow-hidden rounded-lg">
                                <AspectRatio ratio={16 / 9}>
                                    <Image
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform scale-102 duration-300 hover:scale-105 cursor-grab"
                                    />
                                </AspectRatio>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="cursor-pointer md:-left-16 left-2" />
                <CarouselNext className="cursor-pointer md:-right-16 right-2" />
            </Carousel>
        </section>
    );
}

