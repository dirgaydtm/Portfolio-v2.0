import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
                        >
                            {profile.name.split(" ")[0]}
                            <span className="text-zinc-500">.</span>
                        </Link>
                        <Separator orientation="vertical" className="h-6" />
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
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
                                className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                            >
                                <social.icon className="h-5 w-5" />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
                    <p>© {currentYear} {profile.name}. All rights reserved.</p>
                    <p>
                        Built with{" "}
                        <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                        >
                            Next.js
                        </a>{" "}
                        &{" "}
                        <a
                            href="https://ui.shadcn.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                        >
                            shadcn/ui
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
