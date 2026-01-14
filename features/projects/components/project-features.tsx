import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { CheckCircle2 } from "lucide-react";
import type { Project } from "../types/project";

interface ProjectFeaturesProps {
    project: Project;
    className?: string;
}

export default function ProjectFeatures({ project, className }: ProjectFeaturesProps) {
    return (
        <Card className={`border-border ${className || ""}`}>
            <CardHeader>
                <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-auto">
                    <ul className="grid gap-2 md:grid-cols-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

