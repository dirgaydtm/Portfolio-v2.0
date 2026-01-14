import type { Profile } from "../types/profile";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
    
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
        { name: "dirgaydtm", url: "https://github.com/dirgaydtm", icon: FaGithub },
        { name: "dirgaydtm", url: "https://linkedin.com/in/dirgaydtm", icon: FaLinkedin },
        { name: "dirgaa.yd", url: "https://instagram.com/dirgaa.yd", icon: FaInstagram },
    ],
};