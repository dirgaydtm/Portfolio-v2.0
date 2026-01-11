"use client";

import { Send, Mail, Loader2 } from "lucide-react";
import { Map, MapMarker, MapTileLayer, MapTooltip, MapZoomControl } from "@/shared/components/ui/map";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/components/ui/accordion"
import { Separator } from "@/shared/components/ui/separator";
import { profile } from "@/features/hero/data/profile";
import { useContactForm } from "../hooks/useContactForm";

export function ContactSection() {
    const {
        form,
        isSubmitting,
        isSubmitted,
        error,
        handleChange,
        handleSubmit,
    } = useContactForm();

    return (
        <section id="contact" className="relative bg-background px-4 py-20 sm:px-6">
            <div className="absolute inset-0 h-10 md:h-20 bg-background [clip-path:polygon(100%_0,100%_100%,0_0)]" />
            {/* Section Header */}
            <div className="text-center">
                {profile.availableForWork ? (
                    <Badge
                        variant="secondary"
                        className="gap-2 text-xs mb-4 sm:text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Available for work
                    </Badge>
                ) : <Badge variant="outline" className="mb-4">Contact</Badge>}

                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
                <p className="mx-auto mt-4 max-w-2xl text-md text-muted-foreground">
                    Have a project in mind or just want to say hi? Feel free to reach out. I always open to discussing new opportunities.
                </p>
            </div>
            <Separator className="mx-auto max-w-5xl my-10 w-24" />
            <div className="flex flex-col mx-auto max-w-5xl md:flex-row gap-5">
                <Map center={[-7.9666, 112.6326]} zoom={8} className="flex-3 hidden md:flex aspect-square rounded-2xl border border-border shadow-sm">
                    <MapTileLayer />
                    <MapMarker position={[-7.9666, 112.6326]}>
                        <MapTooltip side="bottom">
                            {profile.location}
                        </MapTooltip>
                        <MapZoomControl />
                    </MapMarker>
                </Map>

                <Accordion type="single" defaultValue="item-1" className="w-full flex-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Connect with me</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex gap-3 flex-col mx-2 text-muted-foreground">
                                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors flex gap-1"><Mail className="h-5 w-5" /> {profile.email}</a>
                                {profile.socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="hover:text-primary transition-colors flex gap-1"
                                    >
                                        <social.icon className="h-5 w-5" />
                                        <p>{social.name}</p>
                                    </a>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Send a Message
                        </AccordionTrigger>
                        <AccordionContent>
                            <form onSubmit={handleSubmit} className="space-y-4 mx-3">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required disabled={isSubmitting} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required disabled={isSubmitting} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's on your mind?" required disabled={isSubmitting} />
                                </div>
                                <div className="space-y-2 ">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me more about it..." rows={5} required disabled={isSubmitting} className="resize-none h-24" />
                                </div>
                                {error && <div className="text-red-500 text-sm">{error}</div>}
                                <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                                        </>
                                    ) : isSubmitted ? (
                                        <>Message Sent!</>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" /> Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

