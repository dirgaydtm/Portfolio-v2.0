import { type IconType } from "react-icons";
import { type LucideIcon } from "lucide-react";

export type TechStackItem = {
    name: string;
    category: string;
    icon: IconType;
}

export type TechStackGroup = {
    icon: LucideIcon;
    items: TechStackItem[];
}

export type TechStack = {
    [groupName: string]: TechStackGroup;
};