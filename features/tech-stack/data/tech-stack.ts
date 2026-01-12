import {
    SiJavascript,
    SiTypescript,
    SiDart,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiBun,
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiFlutter,
    SiDocker,
    SiVercel,
    SiLinux,
    SiArchlinux,
    SiGit,
    SiFigma,
    SiMariadb,
    SiShadcnui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Globe, Server, Database, Smartphone, Cloud, GitBranch, Code } from "lucide-react";
import type { TechStack } from "../types/tech-stack";

export const techStack: TechStack = {
    Languages: {
        icon: Code,
        items: [
            { name: "JavaScript", category: "Web", icon: SiJavascript },
            { name: "TypeScript", category: "Web", icon: SiTypescript },
            { name: "Java", category: "General", icon: FaJava },
            { name: "Dart", category: "Mobile", icon: SiDart },
        ],
    },
    Frontend: {
        icon: Globe,
        items: [
            { name: "React", category: "Framework", icon: SiReact },
            { name: "Next.js", category: "Framework", icon: SiNextdotjs },
            { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
            { name: "Bootstrap", category: "Styling", icon: SiBootstrap },
            { name: "Shadcn UI", category: "Styling", icon: SiShadcnui },
        ],
    },
    Backend: {
        icon: Server,
        items: [
            { name: "Node.js", category: "Runtime", icon: SiNodedotjs },
            { name: "Bun", category: "Runtime", icon: SiBun },
            { name: "Firebase", category: "BaaS", icon: SiFirebase },
        ],
    },
    Database: {
        icon: Database,
        items: [
            { name: "MySQL", category: "SQL", icon: SiMysql },
            { name: "MariaDB", category: "SQL", icon: SiMariadb },
            { name: "MongoDB", category: "NoSQL", icon: SiMongodb },
        ],
    },
    Mobile: {
        icon: Smartphone,
        items: [
            { name: "Flutter", category: "Framework", icon: SiFlutter },
        ],
    },
    DevOps: {
        icon: Cloud,
        items: [
            { name: "Docker", category: "Container", icon: SiDocker },
            { name: "Vercel", category: "Hosting", icon: SiVercel },
            { name: "Linux", category: "OS", icon: SiLinux },
            { name: "Arch Linux", category: "OS", icon: SiArchlinux },
        ],
    },
    Tools: {
        icon: GitBranch,
        items: [
            { name: "Git", category: "VCS", icon: SiGit },
            { name: "VS Code", category: "Editor", icon: VscVscode },
            { name: "Figma", category: "Design", icon: SiFigma },
        ],
    },
};