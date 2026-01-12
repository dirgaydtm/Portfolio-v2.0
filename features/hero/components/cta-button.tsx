"use client"

import { memo } from 'react'
import { Button } from '@/shared/components/ui/button'
import { scrollToSection } from '@/shared/lib/utils'
import { profile } from '../data/profile'
import { Download } from 'lucide-react'
import type { SocialLink } from '../types/profile'

function CtaButton() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 gap-y-2">
            <Button size="lg" onClick={() => scrollToSection("contact")}>
                Get in Touch
            </Button>

            <Button size="lg" variant="outline" asChild>
                <a href={profile.resumeUrl} download="Dirga_Yudhatama_CV.pdf">
                    <Download className="h-4 w-4" />
                    Download CV
                </a>
            </Button>

            <div className="flex basis-full md:hidden" />

            {profile.socials.map((social: SocialLink, index: number) => (
                <Button
                    key={`${social.name}-${index}`}
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
                </Button>
            ))}
        </div>
    )
}

export default memo(CtaButton)