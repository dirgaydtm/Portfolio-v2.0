import { type LucideIcon } from "lucide-react";

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

