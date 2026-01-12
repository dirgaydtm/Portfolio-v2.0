import { Badge } from "@/shared/components/ui/badge";
import { Separator } from "@/shared/components/ui/separator";
import TechStacksCarousel from "./tech-stack-carousel";
import TechStackOverview from "./tech-stack-overview";
import TechStackBadges from "./tech-stack-badges";

export default function TechStackSection() {
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
                <TechStacksCarousel />
                <Separator className="mx-auto mb-10 w-24" />
                <TechStackOverview className="hidden md:grid max-w-5xl" />
                <TechStackBadges />
            </div>
        </section>
    );
}
