import { Mail } from "lucide-react";
import { LayeredButton } from "@/shared/components/layered-button";
import type { SocialLink } from "@/shared/types/profile";

interface ContactSocialsProps {
    email: string;
    socials: readonly SocialLink[];
    className?: string;
}

export default function ContactSocials({ email, socials, className }: ContactSocialsProps) {
    return (
        <div className={className}>
            <LayeredButton variant="outline" className="justify-start" asChild>
                <a href={`mailto:${email}`}>
                    <Mail className="h-4 w-4" />
                    <p className="hidden md:block">{email}</p>
                </a>
            </LayeredButton>
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <LayeredButton key={`${social.name}-${social.url}`} variant="outline" className="justify-start" asChild>
                        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <Icon className="h-4 w-4" />
                            <p className="hidden md:block">{social.name}</p>
                        </a>
                    </LayeredButton>
                );
            })}
        </div>
    );
}

