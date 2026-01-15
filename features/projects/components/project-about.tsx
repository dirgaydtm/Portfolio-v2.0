import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import type { Project } from "../types/project";
import { LayeredButton } from "@/shared/components/layered-button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import MagicCard from "@/shared/components/ui/magic-card";

interface ProjectAboutProps {
    project: Project;
    className?: string;
}

export default function ProjectAbout({ project, className }: ProjectAboutProps) {
    return (
        <Card className={`p-0 ${className}`}>
            <MagicCard className="">
                <CardHeader className="flex py-4 flex-row items-center gap-2 font-semibold md:text-lg">
                    <CardTitle>About the Project</CardTitle>
                    {project.liveUrl && (
                        <LayeredButton variant="outline" size="icon-lg" className="ml-auto" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </LayeredButton>
                    )}
                    {project.githubUrl && (
                        <LayeredButton variant="outline" size="icon-lg" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="h-4 w-4" />
                            </a>
                        </LayeredButton>
                    )}
                </CardHeader>
                <CardContent className="pb-4">
                    <p className="text-muted-foreground text-base md:text-base leading-relaxed">{project.fullDescription}</p>
                </CardContent>
            </MagicCard>
        </Card>
    );
}

