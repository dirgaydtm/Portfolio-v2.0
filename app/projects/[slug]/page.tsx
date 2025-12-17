import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/project-detail";
import { getProjectBySlug, projects } from "@/lib/data";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}

// Generate static params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
