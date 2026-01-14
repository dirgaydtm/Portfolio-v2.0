import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/project";

interface ProjectLinksProps {
    project: Project;
    className?: string;
}

export default function ProjectLinks({ project, className }: ProjectLinksProps) {
    return (
        <Card className={`border-border ${className || ""}`}>
            <CardHeader>
                <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {project.liveUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Demo
                        </a>
                    </Button>
                )}
                {project.githubUrl && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                        </a>
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}

