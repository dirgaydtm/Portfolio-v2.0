import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons/lib";

export type SocialLink = Readonly<{
    name: string;
    url: string;
    icon: LucideIcon | IconType;
}>

export type Profile = Readonly<{
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
}>