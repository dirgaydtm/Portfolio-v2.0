import type { Project } from "../types/project";

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
            "/Preview1.png",
            "/Preview2.png",
            "/Preview3.png",
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
        category: "Personal Project",
        year: "2025",
    },
    {
        "slug": "cashfam",
        "title": "Cashfam",
        "shortDescription": "Collaborative financial management app with role-based permissions for shared cash books.",
        "fullDescription": "Cashfam is a collaborative financial management application that enables multiple users to manage shared cash books with role-based permissions. Designed for families, teams, or organizations to track expenses, manage budgets, and analyze spending. The application supports authentication (with Laravel Breeze), book invitation via code, role-based member management, advanced theme system using DaisyUI and GSAP, and comprehensive transaction tracking with real-time balance calculations.",
        "features": [
            "User registration and login with Laravel Breeze",
            "Profile management and theme customization (20+ themes)",
            "Create and join shared financial books via invite code",
            "Role-based permissions: Creator, Admin, Member",
            "Add, filter, and delete income/expense transactions",
            "Real-time balance and budget tracking",
            "Member management (promote/demote/remove/leave)",
            "Modern UI with DaisyUI",
            "Responsive design for desktop and mobile"
        ],
        "images": [
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Cashfam-App@main/public/Preview1.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Cashfam-App@main/public/Preview2.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Cashfam-App@main/public/Preview3.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Cashfam-App@main/public/Preview4.png"
        ],
        "logo": "https://cdn.jsdelivr.net/gh/dirgaydtm/Cashfam-App@main/public/CashfamLogo.jpeg",
        "technologies": [
            "React",
            "Laravel",
            "PHP",
            "TypeScript",
            "Inertia.js",
            "DaisyUI",
            "Tailwind",
            "MySQL"
        ],
        "liveUrl": "https://cashfam-app.onrender.com",
        "githubUrl": "https://github.com/dirgaydtm/Cashfam-App",
        "category": "Collaboration Project",
        "year": "2025",
        "license": "MIT"
    },
    {
        slug: "devoo",
        title: "Devoo",
        shortDescription:
            "Real-time chat application built with React, TypeScript, and Firebase.",
        fullDescription:
            "Devoo is a modern real-time chat application featuring email/password authentication, instant messaging with Firestore, image sharing via Firebase Storage, customizable user profiles, contact management, and a theme system persisted using Zustand. The app is fully responsive and provides rich user feedback through toast notifications.",
        images: [
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Devoo-App@main/public/Preview1.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Devoo-App@main/public/Preview2.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Devoo-App@main/public/Preview3.png"
        ],
        technologies: [
            "React",
            "Firebase",
            "TypeScript",
            "Zustand",
            "Tailwind CSS",
            "DaisyUI",
            "Vercel"
        ],
        features: [
            "Email & password authentication",
            "Profile management and theme customization (20+ themes)",
            "Real-time messaging with Firestore",
            "Image sharing using Cloudinary",
            "Contact management by email",
            "Theme system with Zustand persistence",
            "Toast notifications for actions and errors",
            "Responsive design for desktop and mobile"
        ],
        logo: "https://cdn.jsdelivr.net/gh/dirgaydtm/Devoo-App@main/public/Devoo.svg",
        liveUrl: "https://devoo-app.vercel.app",
        githubUrl: "https://github.com/dirgaydtm/Devoo-App",
        category: "Personal Project",
        year: "2025",
        license: "MIT"
    },
    {
        "slug": "kbmdsi-website",
        "title": "KBMDSI UB 2025",
        "shortDescription": "The official website of the Information Systems Department Student Association (KBMDSI), Brawijaya University.",
        "fullDescription": "KBMDSI UB's website is an information and administration portal for the student association representing three study programs within the Faculty of Computer Science at Universitas Brawijaya: Information Systems, Information Technology, and Information Technology Education. Built using Laravel (PHP) for the backend and React (Inertia) for the frontend, it features the 'Navakara' visual theme. The site provides information about the organization, membership, a public landing page, and an admin dashboard.",
        "images": [],
        "technologies": [
            "Laravel",
            "React",
            "PHP",
            "Inertia.js",
            "JavaScript",
            "Tailwind"
        ],
        "features": [
            "Informative landing page",
            "Organization profile and logo history",
            "Administration system and admin dashboard",
            "Membership and organizational structure",
            "Navakara visual theme",
            "SEO optimized and fully responsive"
        ],
        "logo": "https://cdn.jsdelivr.net/gh/KBMDSI/KBMDSI_NEWBANGET@main/public/Logo-Navakara.png",
        "liveUrl": "https://kbmdsi.ub.ac.id/",
        "githubUrl": "https://github.com/KBMDSI/KBMDSI_NEWBANGET",
        "category": "Organization Website",
        "year": "2025"
    },
    {
        "slug": "portfolio-v1",
        "title": "Portfolio v1.0",
        "shortDescription": "Personal portfolio website built with React in a modern single-page.",
        "fullDescription": "A fully responsive single-page portfolio website built with React (TypeScript) and powered by Vite for blazing fast loads. The site displays information about my background, education, organizations, skills, and includes an animated contact form with email delivery. Features a clean dark-themed UI, smooth animated transitions (AOS, Framer Motion, React Spring), interactive animated effects (background grid, click sparks, animated cursor), and modular UI components. Project and skill data is rendered dynamically. No server required – EmailJS handles contact requests.",
        "images": [
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Portfolio-v1.0@main/public/Preview1.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Portfolio-v1.0@main/public/Preview2.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Portfolio-v1.0@main/public/Preview3.png",
            "https://cdn.jsdelivr.net/gh/dirgaydtm/Portfolio-v1.0@main/public/Preview4.png"
        ],
        "technologies": [
            "React",
            "TypeScript",
            "Tailwind",
            "EmailJS"
        ],
        "features": [
            "Single page portfolio site with multi-section layout",
            "Smooth animations using AOS, Framer Motion, React Spring",
            "Custom animated background grid and click effects",
            "Contact form with EmailJS integration (no backend required)",
            "Cursor effects and scroll tracking"
        ],
        "liveUrl": "https://dirgaa-dev.vercel.app",
        "githubUrl": "https://github.com/dirgaydtm/Portfolio-v1.0",
        "category": "Personal Project",
        "year": "2025",
        "license": "MIT"
    },
    {
        "slug": "taskbuddy",
        "title": "TaskBuddy",
        "shortDescription": "A Java-based task management application.",
        "fullDescription": "TaskBuddy is a task management application designed to help users organize and track their daily tasks efficiently. The project is built with Java, providing a user-friendly interface and robust task management features. The repository includes all source code and documentation necessary for deployment and contribution.",
        "images": [],
        "technologies": ["Java"],
        "features": [
            "Task creation and assignment",
            "Task categorization and organization",
            "Track and update task status",
            "Due dates and reminders",
            "Efficient task management dashboard"
        ],
        "githubUrl": "https://github.com/dirgaydtm/TaskBuddy",
        "category": "Collaboration Project",
        "year": "2025"
    }
];

