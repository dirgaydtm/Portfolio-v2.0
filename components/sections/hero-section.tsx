import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/data";

export function HeroSection() {
    return (
        <section
            id="about"
            className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 sm:px-6"
        >
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                {/* Avatar */}
                <Avatar className="h-28 w-28 border-4 border-white shadow-xl dark:border-zinc-800">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback className="text-2xl font-bold">
                        {profile.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>

                {/* Status Badge */}
                <Badge
                    variant="secondary"
                    className="mt-6 gap-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    Available for work
                </Badge>

                {/* Name & Title */}
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
                    {profile.name}
                </h1>
                <p className="mt-2 text-xl font-medium text-zinc-600 dark:text-zinc-400 sm:text-2xl">
                    {profile.title}
                </p>

                {/* Location */}
                <div className="mt-4 flex items-center gap-2 text-zinc-500">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                </div>

                <Separator className="my-6 w-24" />

                {/* Bio */}
                <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {profile.bio}
                </p>

                {/* Social Links & CTA */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Button size="lg" asChild>
                        <a href="#contact">Get in Touch</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <a href="#projects">View Projects</a>
                    </Button>
                </div>

                {/* Social Icons */}
                <div className="mt-8 flex items-center gap-4">
                    {profile.socials.map((social) => (
                        <Button key={social.name} variant="ghost" size="icon" asChild>
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        </Button>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-400">
                <span className="text-sm">Scroll down</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
        </section>
    );
}
