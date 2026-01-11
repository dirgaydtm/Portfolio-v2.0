import { GraduationCap, Code } from "lucide-react";
import type { Experience } from "../types/experience";

// ============ EXPERIENCE DATA ============
export const experiences: Experience[] = [
    {
        title: "Bakti BCA Awardee 2026",
        company: "PT Bank Central Asia Tbk",
        period: "Dec 2025 – Present",
        description:
            "Selected as a Bakti BCA Awardee based on academic excellence, leadership potential, and community involvement. Participated in leadership development programs, capacity building workshops, and social contribution initiatives.",
        skills: [
            "Leadership",
            "Communication",
            "Problem Solving",
            "Community Engagement"
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
    {
        title: "Teaching Assistant – Fundamental Programming",
        company: "Faculty of Computer Science, Brawijaya University",
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
];

