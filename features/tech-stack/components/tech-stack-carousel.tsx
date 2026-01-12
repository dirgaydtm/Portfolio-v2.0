"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/components/ui/carousel";
import { techStack } from "../data/tech-stack";

interface TechStacksCarouselProps {
  className?: string;
}

const techStackItems = Object.values(techStack).flatMap((group) => group.items);

export default function TechStacksCarousel({ className }: TechStacksCarouselProps) {
  return (
    <section className={`${className} relative mx-auto flex overflow-hidden justify-center items-center w-full`}>
      <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}>
        <CarouselContent className="h-35">
          {techStackItems.map((tech, index) => (
            <CarouselItem key={tech.name} className="flex basis-1/12 justify-center lg:basis-1/8">
              <motion.div
                className="flex shrink-0 items-center justify-center"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
              >
                <tech.icon
                  className="h-10 w-10 text-foreground/80 transition hover:filter hover:drop-shadow-[0_0_50px_rgba(100,100,100,100)]"
                  aria-label={tech.name}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent" />
    </section>
  );
}