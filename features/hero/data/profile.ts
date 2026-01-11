import { Github, Linkedin, Instagram, GraduationCap, Code } from "lucide-react";
import type { Profile } from "../types/profile";

// ============ PROFILE DATA ============
export const profile: Profile = {
    name: "Dirga Yuditama",
    title: "Developer",
    bio: "I love creating elegant solutions to complex problems and constantly learning new technologies.",
    avatar: "/Avatar.jpeg",
    logo: "/LogoDirgaaBlack.svg",
    location: "Malang, Indonesia",
    email: "dirgayuditama6@gmail.com",
    resumeUrl: "/resume.pdf",
    availableForWork: true,
    socials: [
        { name: "dirgaydtm", url: "https://github.com/dirgaydtm", icon: Github },
        { name: "dirgaydtm", url: "https://linkedin.com/in/dirgaydtm", icon: Linkedin },
        { name: "dirgaa.yd", url: "https://instagram.com/dirgaa.yd", icon: Instagram },
    ],
};

