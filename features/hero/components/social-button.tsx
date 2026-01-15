import { LayeredButton } from '@/shared/components/layered-button';
import { Button } from '@/shared/components/ui/button'
import type { SocialLink } from '@/shared/types/profile'

interface SocialButtonProps {
    socials: readonly SocialLink[];
    className?: string;
}

export default function SocialButton({ socials, className }: SocialButtonProps) {
    return (
        <div className={className}>
            {socials.map((social) => (
                <LayeredButton
                    key={`${social.name}-${social.url}`}
                    variant="outline"
                    size="icon-lg"
                    asChild
                >
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${social.name} profile`}
                    >
                        <social.icon className="h-5 w-5" />
                    </a>
                </LayeredButton>
            ))}
        </div>
    )
}