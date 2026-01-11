import { type LucideIcon } from "lucide-react";

// ============ EXPERIENCE TYPES ============
export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
    icon?: LucideIcon;
}

