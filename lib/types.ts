import { type LucideIcon } from "lucide-react";
import { type IconType } from "react-icons";

// ============ SOCIAL & PROFILE TYPES ============
export interface SocialLink {
    name: string;
    url: string;
    icon: LucideIcon;
}

export interface Profile {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
    resumeUrl: string;
    availableForWork: boolean;
    socials: SocialLink[];
}

// ============ TECH STACK TYPES ============
export interface TechStack {
    name: string;
    icon: IconType;
    category: string;
    group: string;
    className?: string;
}


// ============ EXPERIENCE TYPES ============
export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
    logo?: string;
}

// ============ PROJECT TYPES ============

export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    thumbnail: string;
    images: string[];
    technologies: string[];
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
    category: string;
    year: string;
    status: "completed" | "in-progress" | "archived";
}
