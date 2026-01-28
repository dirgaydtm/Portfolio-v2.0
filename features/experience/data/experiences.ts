import { GraduationCap, Code } from "lucide-react";
import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
    {
        title: "Vice Head of Information Technology Publication Department",
        company: "KBMDSI FILKOM UB",
        period: "Jan 2026 – Present",
        description:
            "Coordinated and supervised the development of IT publication platforms, managed task distribution within the technical team, ensured code quality and consistency, and acted as a bridge between designers, developers, and organizational stakeholders.",
        skills: [
            "Technical Leadership",
            "Project Coordination",
            "Code Review",
            "Team Collaboration"
        ],
        icon: Code,
    },

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
        period: "Mar 2025 – Jan 2026",
        description:
            "Developed and maintained responsive web interfaces using React, collaborated with designers and backend teams to implement features, and ensured code consistency and maintainability across the application.",
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
            "Assisted a fundamental Java programming course for 35 students by facilitating lab sessions, reviewing assignments, guiding students in object-oriented programming and debugging practices, and supporting their understanding of core programming concepts.",
        skills: [
            "Java",
            "Object-Oriented Programming",
            "Code Review",
            "Debugging",
            "Technical Mentoring"
        ],
        icon: GraduationCap,
    },

];

