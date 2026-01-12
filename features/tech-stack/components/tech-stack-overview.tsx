"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/components/ui/hover-card";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import { techStack } from "../data/tech-stack";

interface TechStackOverviewProps {
    className?: string;
}

export default function TechStackOverview({ className }: TechStackOverviewProps) {
    return (
        <div className={`grid gap-4 grid-cols-7 ${className || ""}`}>
            {Object.entries(techStack).map(([groupName, group]) => (
                <HoverCard key={groupName}>
                    <HoverCardTrigger asChild>
                        <Card className="group border-border transition-all hover:border-muted-foreground hover:shadow-md">
                            <CardContent className="flex flex-col items-center text-center">
                                <div className="mb-3 rounded-lg bg-accent p-3 transition-colors group-hover:bg-accent/80">
                                    <group.icon className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <h3 className="font-medium text-foreground">{groupName}</h3>
                                <p className="mt-1 text-xs text-muted-foreground">{group.items.length} skills</p>
                            </CardContent>
                        </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-75 m-3">
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <Badge key={skill.name} variant="secondary" className="text-xs">
                                    {skill.name}
                                    <span className="ml-1 text-[10px] opacity-60">({skill.category})</span>
                                </Badge>
                            ))}
                        </div>
                    </HoverCardContent>
                </HoverCard>
            ))}
        </div>
    );
}