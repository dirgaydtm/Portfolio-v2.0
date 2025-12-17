import { Github, Linkedin, Instagram, GraduationCap, Code } from "lucide-react";
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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import type {
    Profile,
    TechStack,
    Experience,
    Project,
} from "./types";

// ============ PROFILE DATA ============
export const profile: Profile = {
    name: "Dirga Yuditama",
    title: "Full Stack Developer",
    bio: "I love creating elegant solutions to complex problems and constantly learning new technologies.",
    avatar: "/Avatar.jpeg",
    logo: "/LogoDirgaaBlack.svg",
    location: "Jakarta, Indonesia",
    email: "hello@dirgayudhatama.dev",
    resumeUrl: "/resume.pdf",
    availableForWork: true,
    socials: [
        { name: "GitHub", url: "https://github.com/dirgaydtm", icon: Github },
        { name: "LinkedIn", url: "https://linkedin.com/in/dirgaydtm", icon: Linkedin },
        { name: "Instagram", url: "https://instagram.com/dirgaa.yd", icon: Instagram },
    ],
};

// ============ TECH STACK DATA ============
export const techStack: TechStack[] = [
    // Languages
    { name: "JavaScript", category: "Language", group: "Languages", icon: SiJavascript },
    { name: "TypeScript", category: "Language", group: "Languages", icon: SiTypescript },
    { name: "Java", category: "Language", group: "Languages", icon: FaJava },
    { name: "Kotlin", category: "Language", group: "Languages", icon: SiKotlin },
    { name: "Dart", category: "Language", group: "Languages", icon: SiDart },

    // Frontend
    { name: "React", category: "Framework", group: "Frontend", icon: SiReact },
    { name: "Next.js", category: "Framework", group: "Frontend", icon: SiNextdotjs },
    { name: "Tailwind CSS", category: "Styling", group: "Frontend", icon: SiTailwindcss },
    { name: "Bootstrap", category: "Styling", group: "Frontend", icon: SiBootstrap },

    // Backend
    { name: "Node.js", category: "Runtime", group: "Backend", icon: SiNodedotjs },
    { name: "Express", category: "Framework", group: "Backend", icon: SiExpress },
    { name: "Bun", category: "Runtime", group: "Backend", icon: SiBun },

    // Database
    { name: "MySQL", category: "SQL", group: "Database", icon: SiMysql },
    { name: "MongoDB", category: "NoSQL", group: "Database", icon: SiMongodb },
    { name: "Firebase", category: "BaaS", group: "Database", icon: SiFirebase },

    // Mobile
    { name: "Flutter", category: "Framework", group: "Mobile", icon: SiFlutter },
    { name: "Jetpack Compose", category: "Framework", group: "Mobile", icon: SiJetpackcompose },

    // DevOps
    { name: "Docker", category: "Container", group: "DevOps", icon: SiDocker },
    { name: "Vercel", category: "Hosting", group: "DevOps", icon: SiVercel },
    { name: "Bash", category: "Shell", group: "DevOps", icon: SiGnubash },
    { name: "Linux", category: "OS", group: "DevOps", icon: SiLinux },
    { name: "Arch Linux", category: "OS", group: "DevOps", icon: SiArchlinux },

    // Tools
    { name: "Git", category: "VCS", group: "Tools", icon: SiGit },
    { name: "VS Code", category: "Editor", group: "Tools", icon: VscVscode },
    { name: "Figma", category: "Design", group: "Tools", icon: SiFigma },
];

// ============ EXPERIENCE DATA ============
export const experiences: Experience[] = [
    {
        title: "Teaching Assistant – Fundamental Programming",
        company: "Faculty of Computer Science (FILKOM), Universitas Brawijaya",
        period: "Sep – Dec 2025",
        description:
            "Assisted teaching fundamental Java programming to 35 students, guided lab sessions, and provided code reviews and feedback.",
        skills: [
            "Java",
            "Object-Oriented Programming",
            "Code Review",
            "Teaching"
        ],
        icon: GraduationCap,
    },
    {
        title: "Frontend Developer",
        company: "KBMDSI FILKOM UB",
        period: "Mar 2025 – Present",
        description:
            "Developed and maintained responsive web interfaces, collaborated with designers, ensured clean, maintainable frontend code.",
        skills: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "Node.js"
        ],
        icon: Code,
    },
];

// ============ PROJECTS DATA ============
export const projects: Project[] = [
    {
        slug: "portfolio-v2",
        title: "Portfolio v2.0",
        shortDescription:
            "Modern portfolio website built with Next.js, TypeScript, and Shadcn UI.",
        fullDescription:
            "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with Next.js 16, TypeScript, Tailwind CSS, and Shadcn UI components. Features dark/light mode, smooth animations, and a fully responsive design.",
        images: [
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=800&fit=crop",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
        features: [
            "Dark/Light mode",
            "Responsive design",
            "Smooth animations",
            "SEO optimized",
            "Fast performance",
            "Project showcase",
        ],
        logo: "/LogoDirgaaBlack.svg",
        liveUrl: "https://dirga.site",
        githubUrl: "https://github.com/dirgaydtm/Portfolio-v2.0",
        category: "Web",
        year: "2025",
    },
    {
        slug: "cashfam-app",
        title: "Cashfam App",
        shortDescription:
            "Financial management application built with modern web technologies.",
        fullDescription:
            "A comprehensive financial management application designed to help users track expenses, manage budgets, and analyze spending patterns. Built with TypeScript and modern web frameworks.",
        images: [
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        ],
        technologies: ["TypeScript", "React", "Next.js"],
        features: [
            "Expense tracking",
            "Budget management",
            "Financial analytics",
            "User-friendly interface",
        ],
        logo: "/logos/cashfam.svg",
        liveUrl: "https://cashfam-app.onrender.com",
        githubUrl: "https://github.com/dirgaydtm/Cashfam-App",
        category: "Full Stack",
        year: "2025",
    },
    {
        slug: "devoo-app",
        title: "Devoo App",
        shortDescription:
            "Real-time chat application built with React, TypeScript, and Firebase.",
        fullDescription:
            "A modern, real-time chat application featuring user authentication, instant messaging, image sharing, and contact management. Built with React, TypeScript, Firebase, and Zustand for state management.",
        images: [
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        ],
        technologies: ["React", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"],
        features: [
            "Real-time messaging",
            "User authentication",
            "Image sharing",
            "Contact management",
            "Theme system",
            "Toast notifications",
        ],
        logo: "/logos/devoo.svg",
        liveUrl: "https://devoo-app.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/Devoo-App",
        category: "Full Stack",
        year: "2025",
    },
    {
        slug: "portfolio-v1",
        title: "Portfolio v1.0",
        shortDescription:
            "First version of my portfolio website built with Next.js.",
        fullDescription:
            "The initial version of my portfolio website showcasing my early projects and skills. Built with Next.js and TypeScript, featuring a clean and minimal design.",
        images: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=800&fit=crop",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        features: [
            "Responsive design",
            "Project showcase",
            "Clean UI",
            "Fast loading",
        ],
        logo: "/logos/portfolio.svg",
        liveUrl: "https://dirgaa-dev.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/Portfolio-v1.0",
        category: "Web",
        year: "2025",
    },
    {
        slug: "taskbuddy",
        title: "TaskBuddy",
        shortDescription:
            "Task management application built with Java.",
        fullDescription:
            "A task management application designed to help users organize and track their daily tasks. Built with Java, featuring a user-friendly interface and efficient task management capabilities.",
        images: [],
        technologies: ["Java"],
        features: [
            "Task creation",
            "Task organization",
            "User-friendly interface",
            "Efficient task management",
        ],
        logo: "/logos/taskbuddy.svg",
        githubUrl: "https://github.com/dirgaydtm/TaskBuddy",
        category: "Desktop",
        year: "2025",
    },
];