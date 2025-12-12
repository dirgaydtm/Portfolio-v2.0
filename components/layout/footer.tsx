import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="text-lg font-bold tracking-tight text-foreground"
                        >
                            {profile.name.split(" ")[0]}
                            <span className="text-muted-foreground">.</span>
                        </Link>
                        <Separator orientation="vertical" className="h-6" />
                        <p className="text-sm text-muted-foreground">
                            Full Stack Developer
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {profile.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <social.icon className="h-5 w-5" />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
                    <p>© {currentYear} {profile.name}. All rights reserved.</p>
                    <p>
                        Built with{" "}
                        <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground underline-offset-4 hover:underline"
                        >
                            Next.js
                        </a>{" "}
                        &{" "}
                        <a
                            href="https://ui.shadcn.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground underline-offset-4 hover:underline"
                        >
                            shadcn/ui
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
