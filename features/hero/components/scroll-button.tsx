"use client";

import { Button } from '@/shared/components/ui/button'
import { scrollToSection } from '@/shared/lib/utils'

export default function ScrollButton({ className }: { className?: string }) {
    return (
        <Button className={className} size="lg" onClick={() => scrollToSection("contact")}>
            Get in Touch
        </Button>
    )
}