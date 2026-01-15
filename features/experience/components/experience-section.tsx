import { experiences } from "../data/experiences";
import Timeline from "./timeline";
import { Badge } from "@/shared/components/ui/badge";
import BackgroundBoxes from "@/features/experience/components/background-boxes";
import Shiny from "@/shared/animations/shiny";
import Reveal from "@/shared/animations/reveal";

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative bg-background py-20 px-4 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-600 overflow-hidden h-full">
                <BackgroundBoxes className="flex h-full" />
                <div className="absolute inset-0 h-10 md:h-30 bg-background [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                <div className="absolute left-0 bottom-0 w-full h-10 md:h-30 bg-background [clip-path:polygon(0_0,100%_100%,0_100%)]" />
            </div>

            <div className="mx-auto flex flex-col items-center gap-4 max-w-6xl md:py-10 pointer-events-none">
                <Badge variant="outline">Career</Badge>
                <Reveal once>
                    <Shiny className="text-4xl font-bold tracking-tight text-foreground">
                        Experience
                    </Shiny>
                </Reveal>
                <Reveal mode="auto" once direction="down" stagger={0.05} className="max-w-lg text-base md:text-lg text-muted-foreground justify-center">
                    My professional journey in the tech, building products and
                    growing as a developer.
                </Reveal>
                <Timeline className="pt-10" items={experiences} />
            </div>
        </section>
    );
}