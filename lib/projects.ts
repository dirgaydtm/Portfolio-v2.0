import type { Project } from "./types";
import { projects } from "./data";

const projectsBySlug: Map<string, Project> = new Map(projects.map(p => [p.slug, p]));

export function getProjectBySlug(slug: string): Project | undefined {
    return projectsBySlug.get(slug);
}

export function getAllProjectSlugs(): string[] {
    return Array.from(projectsBySlug.keys());
}
