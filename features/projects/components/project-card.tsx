"use client";

import { memo } from "react";
import { Card, CardHeader, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { LayeredButton } from "@/shared/components/layered-button";
import { ExternalLink, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Project } from "../types/project";
import MagicCard from "@/shared/components/magic-card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/components/hover-card";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

function ProjectCard({ project, className }: ProjectCardProps) {
  const router = useRouter();
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Card className={`p-0 ${className}`} onClick={() => router.push(`/projects/${project.slug}`)} >
          <MagicCard className="pt-4">
            <CardHeader className="flex flex-row items-center gap-3 font-semibold md:text-lg">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={32}
                  height={32}
                  className="object-contain size-8 flex items-center justify-center bg-transparent text-primary-foreground rounded-full overflow-hidden"
                />
              ) : (
                <span className="size-8 flex items-center justify-center text-primary">
                  <FolderKanban className="h-5 w-5" />
                </span>
              )}
              <span className="line-clamp-1 min-w-0 flex-1">{project.title}</span>
              {project.githubUrl && (
                <LayeredButton
                  variant="outline"
                  size="icon"
                  className="ml-auto"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub className="h-4 w-4" aria-hidden="true" />
                  </a>
                </LayeredButton>
              )}
              {project.liveUrl && (
                <LayeredButton
                  variant="outline"
                  size="icon"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </LayeredButton>
              )}
            </CardHeader>
            <CardContent className="flex flex-col text-sm md:text-base text-muted-foreground md:h-34 py-4 justify-between">
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
          </MagicCard>
        </Card>
      </HoverCardTrigger>
      {project.images.length > 0 && (
        <HoverCardContent side="top" className="w-100 my-4 p-0 overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={project.images[0]}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
}

export default memo(ProjectCard);
