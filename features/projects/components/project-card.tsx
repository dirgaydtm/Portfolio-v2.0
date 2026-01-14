"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Github, ExternalLink, FolderKanban } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";  
import type { Project } from "../types/project";
interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const router = useRouter();
  return (
    <Card className={className} onClick={() => router.push(`/projects/${project.slug}`)}>
      <CardHeader className="flex flex-row items-center gap-3 font-semibold">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title + ' logo'}
              width={32}
              height={32}
              className="object-contain size-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full overflow-hidden"
            />
          ) : (
            <span className="size-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
              <FolderKanban className="h-5 w-5" />
            </span>
          )}
        
        <span>{project.title}</span>
      </CardHeader>

      <CardContent className="text-[15px] text-muted-foreground -5">
        <p className="line-clamp-2">{project.shortDescription}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.technologies.slice(0, 2).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="icon" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="outline" size="icon" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

