import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import { techStack } from "../data/tech-stack";
import TechStacksCarousel from "./tech-stack-carousel";
import TechStackOverview from "./tech-stack-overview";
import TechStackBadges from "./tech-stack-badges";

export default function TechStackSection() {
    const techStackItems = Object.values(techStack).flatMap((group) => group.items);

    return (
        <section id="skills" className="px-4 py-20 sm:px-6 overflow-hidden">
            <div className="mx-auto max-w-7xl z-1 flex flex-col items-center">
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">Tech Stack</Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Skills & Technologies
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-md text-muted-foreground">
                        Here are the technologies I work with on a daily basis to build modern, scalable applications.
                    </p>
                </div>
                <TechStacksCarousel className="relative mx-auto flex overflow-hidden justify-center items-center w-full" />
                <Separator className="mx-auto mb-10 w-24" />
                <TechStackOverview techStack={techStack} className="hidden md:grid max-w-5xl grid-cols-7 gap-4" />
                <TechStackBadges techStackItems={techStackItems} className="flex flex-wrap justify-center md:hidden gap-2" />
            </div>
        </section>
    );
}
