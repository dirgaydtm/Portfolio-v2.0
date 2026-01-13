import { experiences } from "../data/experiences";
import Timeline from "./timeline";
import { Badge } from "@/shared/components/ui/badge";
import BackgroundBoxes from "@/features/experience/components/background-boxes";

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative bg-background py-20 px-4 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-600 overflow-hidden h-full">
                <BackgroundBoxes className="flex h-full" />
                <div className="absolute inset-0 h-10 md:h-30 bg-background [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                <div className="absolute left-0 bottom-0 w-full h-10 md:h-30 bg-background [clip-path:polygon(0_0,100%_100%,0_100%)]" />
            </div>

            <div className="mx-auto max-w-5xl md:py-10 pointer-events-none text-center">
                <Badge variant="outline" className="mb-4">
                    Career
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Experience
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-md text-muted-foreground">
                    My professional journey in the tech, building products and
                    growing as a developer.
                </p>
                <Timeline className="pt-10" items={experiences} />
            </div>
        </section>
    );
}