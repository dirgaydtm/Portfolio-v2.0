import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

interface ProductCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProductCardProps) => {
  return (
    <Card className="max-w-xs shadow-none gap-6 pt-0">
      <CardHeader className="pt-4 flex flex-row items-center gap-3 font-semibold">
        <div className="h-8 w-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full overflow-hidden">
          <Image
            src={project.logo}
            alt={project.title + ' logo'}
            width={32}
            height={32}
            className="object-contain h-6 w-6"
          />
        </div>
        <span>{project.title}</span>
      </CardHeader>

      <CardContent className="text-[15px] text-muted-foreground -5">
        <p className="line-clamp-2">{project.shortDescription}</p>
        {/* Tech Badges */}
        <div className="mt-3 flex flex-wrap gap-1">
          {project.technologies.slice(0, 2).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button asChild>
          <a
            href={`/home/projects/${project.slug}`}
            target="_self"
          >
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
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
};

export default ProjectCard;
