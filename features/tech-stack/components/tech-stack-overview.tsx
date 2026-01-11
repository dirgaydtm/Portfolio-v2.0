"use client";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/shared/components/ui/hover-card";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
    Globe,
    Server,
    Database,
    Smartphone,
    Cloud,
    GitBranch,
    Code,
    type LucideIcon,
} from "lucide-react";

interface Skill {
    name: string;
    category: string;
}

interface SkillGroup {
    groupName: string;
    skills: Skill[];
}

interface SkillsOverviewProps {
    groups: SkillGroup[];
    className?: string;
}

const groupIcons: Record<string, LucideIcon> = {
    Languages: Code,
    Frontend: Globe,
    Backend: Server,
    Database: Database,
    Mobile: Smartphone,
    DevOps: Cloud,
    Tools: GitBranch,
};

const TechStackOverview = ({ groups, className }: SkillsOverviewProps) => {
    if (!groups || groups.length === 0) {
        return null;
    }

    return (
        <div className={`grid gap-4 grid-cols-7 ${className || ""}`}>
            {groups.map(({ groupName, skills }) => {
                const Icon = groupIcons[groupName] || Globe;
                return (
                    <HoverCard key={groupName}>
                        <HoverCardTrigger asChild>
                            <Card className="group border-border transition-all hover:border-muted-foreground hover:shadow-md">
                                <CardContent className="flex flex-col items-center  text-center">
                                    <div className="mb-3 rounded-lg bg-accent p-3 transition-colors group-hover:bg-accent/80">
                                        <Icon className="h-6 w-6 text-muted-foreground" />
                                    </div>
                                    <h3 className="font-medium text-foreground">
                                        {groupName}
                                    </h3>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {skills.length} skills
                                    </p>
                                </CardContent>
                            </Card>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-75 m-3">
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <Badge
                                            key={skill.name}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {skill.name}
                                            <span className="ml-1 text-[10px] opacity-60">
                                                ({skill.category})
                                            </span>
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                );
            })}
        </div>
    );
};

export { TechStackOverview };
export type { SkillGroup, Skill };

