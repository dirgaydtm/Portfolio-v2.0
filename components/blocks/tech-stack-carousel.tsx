"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { IconType } from "react-icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface TechStackItem {
  id: string;
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
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <CarouselItem
                    key={tech.id}
                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div className="flex shrink-0 items-center justify-center">
                      <Icon
                        className={tech.className || "h-10 w-10 text-foreground/80"}
                        aria-label={tech.name}
                      />
                    </div>
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