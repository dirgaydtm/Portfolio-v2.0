import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <FileQuestion className="h-10 w-10 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-6xl font-bold tracking-tight">404</h1>
                    <h2 className="text-2xl font-semibold">Page Not Found</h2>
                    <p className="text-muted-foreground max-w-md">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track.
                    </p>
                </div>

                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
