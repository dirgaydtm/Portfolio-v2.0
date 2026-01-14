import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import type { Project } from "../types/project";

interface ProjectAboutProps {
    project: Project;
    className?: string;
}

export default function ProjectAbout({ project, className }: ProjectAboutProps) {
    return (
        <Card className={`border-border ${className || ""}`}>
            <CardHeader>
                <CardTitle>About the Project</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </CardContent>
        </Card>
    );
}

