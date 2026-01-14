import type { Project } from "../types/project";
import ProjectHeader from "./project-header";
import ProjectCarousel from "./project-carousel";
import ProjectAbout from "./project-about";
import ProjectFeatures from "./project-features";
import ProjectTechnologies from "./project-technologies";
import ProjectLinks from "./project-links";

interface ProjectDetailProps {
    project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div className="px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-5xl">
                <ProjectHeader project={project} />

                <ProjectCarousel project={project} className="mb-12" />

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        <ProjectAbout project={project} />
                        <ProjectFeatures project={project} />
                    </div>

                    <div className="space-y-6">
                        <ProjectTechnologies project={project} />
                        <ProjectLinks project={project} />
                    </div>
                </div>
            </div>
        </div>
    );
}

