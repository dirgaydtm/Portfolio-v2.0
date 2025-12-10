import { MapPin, Calendar, Building2 } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="bg-zinc-50 px-4 py-20 dark:bg-zinc-900/50 sm:px-6"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">
                        Career
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                        Work Experience
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        My professional journey in the tech industry, building products and
                        growing as a developer.
                    </p>
                </div>

                <Separator className="mx-auto my-10 w-24" />

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 hidden h-full w-px bg-zinc-200 dark:bg-zinc-800 md:block" />

                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-6"
                        defaultValue={experiences[0].id}
                    >
                        {experiences.map((exp) => (
                            <AccordionItem
                                key={exp.id}
                                value={exp.id}
                                className="border-none"
                            >
                                <Card className="relative border-zinc-200 dark:border-zinc-800">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[2.35rem] top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-zinc-900 dark:border-zinc-950 dark:bg-zinc-50 md:block" />

                                    <AccordionTrigger className="px-6 py-4 hover:no-underline [&[data-state=open]>div>.trigger-chevron]:rotate-180">
                                        <div className="flex w-full flex-col items-start gap-4 text-left sm:flex-row sm:items-center">
                                            {/* Company Logo */}
                                            <Avatar className="h-12 w-12 rounded-lg border border-zinc-200 dark:border-zinc-700">
                                                <AvatarImage src={exp.logo} alt={exp.company} />
                                                <AvatarFallback className="rounded-lg bg-zinc-100 dark:bg-zinc-800">
                                                    <Building2 className="h-6 w-6 text-zinc-500" />
                                                </AvatarFallback>
                                            </Avatar>

                                            {/* Info */}
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-zinc-600 dark:text-zinc-400">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            {/* Meta */}
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {exp.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent>
                                        <CardContent className="pt-0">
                                            <Separator className="mb-4" />

                                            {/* Description */}
                                            <p className="text-zinc-600 dark:text-zinc-400">
                                                {exp.description}
                                            </p>

                                            {/* Achievements */}
                                            <div className="mt-4">
                                                <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                                                        >
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div className="mt-4">
                                                <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech) => (
                                                        <Badge key={tech} variant="secondary">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </AccordionContent>
                                </Card>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
