"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "motion/react";
import { IconType } from "react-icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface TechStackItem {
  name: string;
  icon: IconType;
  className?: string;
}

interface TechStacksProps {
  techStack: TechStackItem[];
  className?: string;
}

const TechStacksCarousel = ({ techStack, className }: TechStacksProps) => {
  if (!techStack || techStack.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center overflow-hidden w-7xl ">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="h-20">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <CarouselItem
                    key={tech.name}
                    className="flex basis-1/12 justify-center lg:basis-1/8"
                  >
                    <motion.div
                      className="flex shrink-0 items-center justify-center"
                      animate={{
                        y: [0, 16, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                    >
                      <Icon
                        className={tech.className || "h-10 w-10 text-foreground/80"}
                        aria-label={tech.name}
                      />
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { TechStacksCarousel };