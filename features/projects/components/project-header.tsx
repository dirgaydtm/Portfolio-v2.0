import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import type { Project } from "../types/project";

interface ProjectHeaderProps {
    project: Project;
    className?: string;
}

export default function ProjectHeader({ project, className }: ProjectHeaderProps) {
    return (
        <div className={className}>
            <Button variant="ghost" className="mb-8 transition-all group" asChild>
                <Link href="../">
                    <ArrowLeft className="group-hover:mr-1 not-group-hover:ml-1 transition-all" />
                    Back to Home
                </Link>
            </Button>

            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    {project.title}
                </h1>
                <p className="mt-4 text-muted-foreground">{project.shortDescription}</p>
                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> {project.year}
                    </span>
                    <span className="flex items-center gap-2">
                        <Tag className="h-4 w-4" /> {project.category}
                    </span>
                </div>
            </div>
        </div>
    );
}

