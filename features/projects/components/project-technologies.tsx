import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import type { Project } from "../types/project";

interface ProjectTechnologiesProps {
    project: Project;
    className?: string;
}

export default function ProjectTechnologies({ project, className }: ProjectTechnologiesProps) {
    return (
        <Card className={`border-border ${className || ""}`}>
            <CardHeader>
                <CardTitle>Technologies</CardTitle>
                <CardDescription>Built with</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}