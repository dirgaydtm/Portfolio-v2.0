"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { techStack } from "@/lib/data";

export function TechStackSection() {
    return (
        <section id="skills" className="px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">
                        Tech Stack
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                        Skills & Technologies
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                        Here are the technologies I work with on a daily basis to build modern,
                        scalable applications.
                    </p>
                </div>

                <Separator className="mx-auto my-10 w-24" />

                {/* Tabs for Categories */}
                <Tabs defaultValue={techStack[0].name.toLowerCase()} className="w-full">
                    <TabsList className="mx-auto mb-8 flex h-auto w-full max-w-3xl flex-wrap justify-center gap-2 bg-transparent">
                        {techStack.map((category) => (
                            <TabsTrigger
                                key={category.name}
                                value={category.name.toLowerCase()}
                                className="gap-2 data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-50 dark:data-[state=active]:bg-zinc-50 dark:data-[state=active]:text-zinc-900"
                            >
                                <category.icon className="h-4 w-4" />
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TooltipProvider delayDuration={100}>
                        {techStack.map((category) => (
                            <TabsContent
                                key={category.name}
                                value={category.name.toLowerCase()}
                                className="mt-0"
                            >
                                <Card className="border-zinc-200 dark:border-zinc-800">
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap justify-center gap-3">
                                            {category.skills.map((skill) => (
                                                <HoverCard key={skill} openDelay={200} closeDelay={100}>
                                                    <HoverCardTrigger asChild>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <Badge
                                                                    variant="secondary"
                                                                    className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                                                >
                                                                    {skill}
                                                                </Badge>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Click for more info</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </HoverCardTrigger>
                                                    <HoverCardContent className="w-64">
                                                        <div className="space-y-2">
                                                            <h4 className="font-semibold">{skill}</h4>
                                                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                                                Experienced in building production applications with {skill}.
                                                            </p>
                                                            <div className="flex items-center gap-2">
                                                                <div className="h-2 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-700">
                                                                    <div
                                                                        className="h-2 rounded-full bg-zinc-900 dark:bg-zinc-50"
                                                                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                                                                    />
                                                                </div>
                                                                <span className="text-xs text-zinc-500">
                                                                    {Math.floor(Math.random() * 3) + 2}+ years
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </HoverCardContent>
                                                </HoverCard>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                    </TooltipProvider>
                </Tabs>

                {/* All Skills Overview */}
                <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {techStack.map((category) => (
                        <Card
                            key={category.name}
                            className="group border-zinc-200 transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-600"
                        >
                            <CardContent className="flex flex-col items-center p-4 text-center">
                                <div className="mb-3 rounded-lg bg-zinc-100 p-3 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
                                    <category.icon className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                                </div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                                    {category.name}
                                </h3>
                                <p className="mt-1 text-xs text-zinc-500">
                                    {category.skills.length} skills
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
