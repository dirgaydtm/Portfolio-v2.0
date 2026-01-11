"use client";

import Image from "next/image";
import { profile } from "../data/profile";

export function ProfilePicture() {
    return (
        <div className="relative group my-6 w-46 h-60 md:w-80 md:h-96">
            <div className="absolute inset-0 border rounded-2xl transform -rotate-6 dark:border-primary/50 translate-y-4 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0"></div>

            <div className="relative h-full w-full rounded-2xl overflow-hidden border dark:border-primary/50 bg-background transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_100px_rgba(100,100,100,0.4)]">
                <Image
                    src={profile.avatar}
                    alt="Profile-pic"
                    className="object-cover h-full opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                    width={2000}
                    height={3000}
                />
                <div className="absolute -bottom-1 left-0 right-0 h-20 bg-background/80 backdrop-blur-xl [clip-path:polygon(0_0,100%_40%,100%_100%,0_100%)]" />
                <div className="absolute bottom-0 p-3">
                    <p className="text-primary font-bold text-sm md:text-lg">{profile.name}</p>
                    <p className="text-muted-foreground text-sm">{profile.title}</p>
                </div>
            </div>
        </div>
    );
}

