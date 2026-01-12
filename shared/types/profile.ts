import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons/lib";

export type SocialLink = {
    name: string;
    url: string;
    icon: LucideIcon | IconType;
};

export type Profile = {
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
};