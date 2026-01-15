import { Separator } from "@/shared/components/ui/separator";
import { profile } from "@/shared/data/profile";
import LetterGlitch from "./letter-glitch";
import ProfilePicture from "./profile-picture";
import SocialButton from "./social-button";
import { LayeredButton } from "@/shared/components/layered-button";
import { PiDownloadSimple } from "react-icons/pi";
import { PiHandWaving } from "react-icons/pi";
import { SiArchlinux } from "react-icons/si";

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex h-screen flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
            {/* Background with glitch + overlay */}
            <div className="absolute inset-0 hidden h-screen dark:flex z-0">
                <LetterGlitch
                    smooth={false}
                    glitchSpeed={100}
                    glitchColors={["#111111", "#111111", "#ffffff"]}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background to-background/50" />
            </div>

            {/* Main content */}
            <div className="z-1 mx-auto flex gap-12 max-w-3xl flex-col items-center">
                <ProfilePicture
                    name={profile.name}
                    title={profile.title}
                    avatar={profile.avatar}
                    className="relative group my-6 w-46 h-60 md:w-80 md:h-96"
                />
                <div className="flex flex-col gap-6 items-center">
                    <span className="block md:hidden max-w-xl text-base text-center leading-relaxed text-muted-foreground">{profile.bio} I use <SiArchlinux className="inline-flex"/> btw.</span>
                    <span className="md:block hidden max-w-xl text-base text-center text-muted-foreground">{profile.description} I use <SiArchlinux className="inline-flex"/> btw.</span>
                    <Separator className="md:block hidden w-full" />
                    <span className="flex flex-wrap items-center justify-center gap-4">
                        <LayeredButton variant="outline" size="lg" className="w-30 md:w-auto" asChild>
                            <a href="#contact">
                                <PiHandWaving className="h-4 w-4" />
                                Say Hi!
                            </a>
                        </LayeredButton>
                        <LayeredButton size="lg" className="w-30 md:w-auto" asChild>
                            <a href={profile.resumeUrl} download>
                                <PiDownloadSimple className="h-4 w-4" />
                                Resume
                            </a>
                        </LayeredButton>
                        <SocialButton socials={profile.socials} className="flex gap-4" />
                    </span>
                </div>
            </div>
            <Separator className="absolute bottom-0 max-w-400" />
        </section>
    );
}