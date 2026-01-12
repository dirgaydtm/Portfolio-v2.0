import { Badge } from "@/shared/components/ui/badge";
import { techStack } from "../data/tech-stack";

const techStackItems = Object.values(techStack).flatMap((group) => group.items);

export default function TechStackBadges() {
    return (
        <div className="flex flex-wrap justify-center md:hidden gap-2">
            {techStackItems.map((tech) => (
                <Badge key={tech.name} variant="secondary" className="text-xs">
                    {tech.name}
                </Badge>
            ))}
        </div>
    );
}