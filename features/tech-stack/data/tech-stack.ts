import {
    SiJavascript,
    SiTypescript,
    SiKotlin,
    SiDart,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiExpress,
    SiBun,
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiFlutter,
    SiJetpackcompose,
    SiDocker,
    SiVercel,
    SiLinux,
    SiArchlinux,
    SiGnubash,
    SiGit,
    SiFigma,
    SiMariadb,
    SiShadcnui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { TechStack } from "../types/tech-stack";

// ============ TECH STACK DATA ============
export const techStack: TechStack[] = [
    // Languages
    { name: "JavaScript", category: "Web", group: "Languages", icon: SiJavascript },
    { name: "TypeScript", category: "Web", group: "Languages", icon: SiTypescript },
    { name: "Java", category: "General", group: "Languages", icon: FaJava },
    { name: "Dart", category: "Mobile", group: "Languages", icon: SiDart },

    // Frontend
    { name: "React", category: "Framework", group: "Frontend", icon: SiReact },
    { name: "Next.js", category: "Framework", group: "Frontend", icon: SiNextdotjs },
    { name: "Tailwind CSS", category: "Styling", group: "Frontend", icon: SiTailwindcss },
    { name: "Bootstrap", category: "Styling", group: "Frontend", icon: SiBootstrap },
    { name: "Shadcn UI", category: "Styling", group: "Frontend", icon: SiShadcnui },

    // Backend
    { name: "Node.js", category: "Runtime", group: "Backend", icon: SiNodedotjs },
    { name: "Bun", category: "Runtime", group: "Backend", icon: SiBun },
    { name: "Firebase", category: "BaaS", group: "Backend", icon: SiFirebase },

    // Database
    { name: "MySQL", category: "SQL", group: "Database", icon: SiMysql },
    { name: "MariaDB", category: "SQL", group: "Database", icon: SiMariadb },
    { name: "MongoDB", category: "NoSQL", group: "Database", icon: SiMongodb },

    // Mobile
    { name: "Flutter", category: "Framework", group: "Mobile", icon: SiFlutter },

    // DevOps
    { name: "Docker", category: "Container", group: "DevOps", icon: SiDocker },
    { name: "Vercel", category: "Hosting", group: "DevOps", icon: SiVercel },
    { name: "Linux", category: "OS", group: "DevOps", icon: SiLinux },
    { name: "Arch Linux", category: "OS", group: "DevOps", icon: SiArchlinux },

    // Tools
    { name: "Git", category: "VCS", group: "Tools", icon: SiGit },
    { name: "VS Code", category: "Editor", group: "Tools", icon: VscVscode },
    { name: "Figma", category: "Design", group: "Tools", icon: SiFigma },
];

