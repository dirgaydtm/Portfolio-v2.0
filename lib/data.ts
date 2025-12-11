import { Github, Linkedin, Instagram } from "lucide-react";
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
    SiGit,
    SiFigma,
    SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import type {
    Profile,
    TechStack,
    Experience,
    Project,
} from "./types";

// Re-export types for convenience
export type {
    Profile,
    TechStack,
    Experience,
    Project,
    SocialLink,
} from "./types";

// ============ PROFILE DATA ============
export const profile: Profile = {
    name: "Dirga Yuditama",
    title: "Full Stack Developer",
    bio: "I love creating elegant solutions to complex problems and constantly learning new technologies.",
    avatar: "/Avatar.jpeg",
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
    { name: "Linux", category: "OS", group: "DevOps", icon: SiLinux },
    { name: "Arch Linux", category: "OS", group: "DevOps", icon: SiArchlinux },

    // Tools
    { name: "Git", category: "VCS", group: "Tools", icon: SiGit },
    { name: "VS Code", category: "Editor", group: "Tools", icon: VscVscode },
    { name: "Figma", category: "Design", group: "Tools", icon: SiFigma },
    { name: "Postman", category: "API Testing", group: "Tools", icon: SiPostman },
];

// ============ EXPERIENCE DATA ============
export const experiences: Experience[] = [
    {
        id: "exp-1",
        company: "Tech Innovators Inc.",
        role: "Senior Full Stack Developer",
        period: "2023 - Present",
        location: "Jakarta, Indonesia",
        description:
            "Leading the development of enterprise-level web applications, mentoring junior developers, and implementing best practices across the team.",
        achievements: [
            "Led a team of 5 developers to deliver a major product launch",
            "Reduced application load time by 40% through optimization",
            "Implemented CI/CD pipelines reducing deployment time by 60%",
            "Architected microservices handling 1M+ daily requests",
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
        logo: "/companies/tech-innovators.png",
    },
    {
        id: "exp-2",
        company: "Digital Solutions Co.",
        role: "Full Stack Developer",
        period: "2021 - 2023",
        location: "Bandung, Indonesia",
        description:
            "Developed and maintained multiple client projects, from e-commerce platforms to internal tools.",
        achievements: [
            "Built 10+ production-ready web applications",
            "Integrated payment gateways processing $500K+ monthly",
            "Developed real-time notification system using WebSockets",
            "Created reusable component library adopted company-wide",
        ],
        technologies: ["React", "Node.js", "MongoDB", "Redis", "Tailwind CSS"],
        logo: "/companies/digital-solutions.png",
    },
    {
        id: "exp-3",
        company: "StartUp Hub",
        role: "Junior Developer",
        period: "2020 - 2021",
        location: "Jakarta, Indonesia",
        description:
            "Started my professional journey building MVPs for early-stage startups and learning industry best practices.",
        achievements: [
            "Contributed to 5 successful MVP launches",
            "Learned agile methodology and scrum practices",
            "Built responsive UIs with modern CSS frameworks",
            "Participated in code reviews and pair programming",
        ],
        technologies: ["JavaScript", "React", "Express", "MySQL", "Bootstrap"],
        logo: "/companies/startup-hub.png",
    },
];

// ============ PROJECTS DATA ============
export const projects: Project[] = [
    {
        slug: "ecommerce-platform",
        title: "E-Commerce Platform",
        shortDescription:
            "A full-featured e-commerce platform with real-time inventory management and payment processing.",
        fullDescription:
            "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, order management, and integrated payment processing. The platform includes an admin dashboard for inventory management and analytics.",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        ],
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
        features: [
            "User authentication with OAuth",
            "Real-time inventory tracking",
            "Secure payment processing with Stripe",
            "Admin dashboard with analytics",
            "Order management system",
            "Email notifications",
        ],
        liveUrl: "https://ecommerce-demo.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/ecommerce-platform",
        category: "Full Stack",
        year: "2024",
        status: "completed",
    },
    {
        slug: "task-management-app",
        title: "Task Management App",
        shortDescription:
            "A collaborative task management application with real-time updates and team features.",
        fullDescription:
            "Developed a Trello-like task management application that allows teams to organize projects, assign tasks, set deadlines, and track progress. Features include drag-and-drop functionality, real-time collaboration, and detailed reporting.",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
        ],
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI"],
        features: [
            "Drag-and-drop task boards",
            "Real-time collaboration",
            "Team management",
            "Due date reminders",
            "File attachments",
            "Activity timeline",
        ],
        liveUrl: "https://taskmanager-demo.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/task-manager",
        category: "Productivity",
        year: "2024",
        status: "completed",
    },
    {
        slug: "ai-chat-assistant",
        title: "AI Chat Assistant",
        shortDescription:
            "An intelligent chatbot powered by OpenAI with context-aware conversations.",
        fullDescription:
            "Created an AI-powered chat assistant that can answer questions, help with coding problems, and engage in natural conversations. Features include conversation history, context awareness, and customizable personality settings.",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1675557009875-436f7a5a4cf1?w=1200&h=800&fit=crop",
        ],
        technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Tailwind CSS", "Supabase"],
        features: [
            "Natural language processing",
            "Conversation history",
            "Code syntax highlighting",
            "Multiple AI models support",
            "Export conversations",
            "Custom system prompts",
        ],
        liveUrl: "https://ai-chat-demo.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/ai-chat",
        category: "AI/ML",
        year: "2024",
        status: "completed",
    },
    {
        slug: "fitness-tracker",
        title: "Fitness Tracker",
        shortDescription:
            "A mobile-first fitness application for tracking workouts and nutrition.",
        fullDescription:
            "Built a comprehensive fitness tracking application that helps users monitor their workouts, track nutrition, set goals, and visualize progress over time. Includes workout plans, exercise library, and social features.",
        thumbnail: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
        ],
        technologies: ["React Native", "Expo", "Firebase", "Chart.js", "Node.js"],
        features: [
            "Workout logging",
            "Nutrition tracking",
            "Progress charts",
            "Exercise library",
            "Goal setting",
            "Social sharing",
        ],
        liveUrl: "https://fitness-demo.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/fitness-tracker",
        category: "Mobile",
        year: "2023",
        status: "completed",
    },
    {
        slug: "portfolio-website",
        title: "Developer Portfolio",
        shortDescription:
            "A modern, responsive portfolio website built with Next.js and Shadcn UI.",
        fullDescription:
            "The website you're currently viewing! Built with Next.js 14, Tailwind CSS, and Shadcn UI components. Features dark/light mode, smooth animations, and a fully responsive design.",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
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
            "Accessible",
        ],
        liveUrl: "https://dirgayudhatama.dev",
        githubUrl: "https://github.com/dirgaydtm/portfolio",
        category: "Web",
        year: "2024",
        status: "in-progress",
    },
    {
        slug: "real-estate-platform",
        title: "Real Estate Platform",
        shortDescription:
            "A property listing platform with advanced search and virtual tour features.",
        fullDescription:
            "Developed a real estate platform allowing users to browse, search, and filter property listings. Features include map integration, virtual tours, mortgage calculator, and agent contact system.",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
        ],
        technologies: ["Next.js", "Mapbox", "PostgreSQL", "Prisma", "Cloudinary", "Tailwind CSS"],
        features: [
            "Advanced property search",
            "Interactive maps",
            "Virtual property tours",
            "Mortgage calculator",
            "Favorite listings",
            "Agent messaging",
        ],
        liveUrl: "https://realestate-demo.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/real-estate",
        category: "Full Stack",
        year: "2023",
        status: "completed",
    },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}
