import { Separator } from "@/shared/components/ui/separator";
import { profile } from "@/shared/data/profile";
import LetterGlitch from "./letter-glitch";
import ProfilePicture from "./profile-picture";
import ScrollButton from "./scroll-button";
import SocialButton from "./social-button";
import CvButton from "./cv-button";

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex h-screen flex-col items-center justify-center px-4 sm:px-6">
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
                <ProfilePicture
                    name={profile.name}
                    title={profile.title}
                    avatar={profile.avatar}
                    className="relative group my-6 w-46 h-60 md:w-80 md:h-96"
                />
                <p className="max-w-xl text-md text-center leading-relaxed text-muted-foreground">{profile.bio}</p>
                <Separator className="w-full" />
                <span className="flex flex-wrap items-center justify-center gap-4 gap-y-2">
                    <ScrollButton />
                    <CvButton resumeUrl={profile?.resumeUrl} />
                    <SocialButton socials={profile.socials} className="flex gap-4" />
                </span>
            </div>
        </section>
    );
}