import { Separator } from "@/shared/components/ui/separator";
import { profile } from "../data/profile";
import LetterGlitch from "./letter-glitch";
import ProfilePicture from "./profile-picture";
import CtaButton from "./cta-button";

export default function HeroSection() {
    return (
        <section id="about"
            className="relative flex h-screen flex-col items-center justify-center px-4 sm:px-6"
        >
            {/* Background with glitch + overlay */}
            <div className="absolute inset-0 hidden h-100 dark:flex lg:h-200 z-0">
                <LetterGlitch
                    smooth={false}
                    glitchSpeed={100}
                    glitchColors={["#111111", "#111111", "#ffffff"]}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background to-background/50" />
            </div>

            {/* Main content */}
            <div className="z-1 mx-auto flex gap-6 max-w-3xl flex-col items-center">
                <ProfilePicture />
                <p className="max-w-xl text-md text-center leading-relaxed text-muted-foreground">
                    {profile.bio}
                </p>
                <Separator className="w-full" />
                <CtaButton />
            </div>
        </section>
    );
}