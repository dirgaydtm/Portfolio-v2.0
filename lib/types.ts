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
    logo: string;
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
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
    icon?: LucideIcon;
}

// ============ PROJECT TYPES ============

export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    technologies: string[];
    features: string[];
    logo: string; // URL or path to project logo
    liveUrl?: string;
    githubUrl?: string;
    category: string;
    year: string;
}
