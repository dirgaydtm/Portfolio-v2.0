import { Button } from '@/shared/components/ui/button'
import { Download } from 'lucide-react'

interface CvButtonProps {
    resumeUrl: string;
}

export default function CvButton({ resumeUrl }: CvButtonProps) {
    return (
        <Button size="lg" variant="outline" asChild>
            <a href={resumeUrl} download>
                <Download className="h-4 w-4" />
                Download CV
            </a>
        </Button>
    )
}