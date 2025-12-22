"use client";

import { Send, Mail, Loader2 } from "lucide-react";
import { Map, MapMarker, MapTileLayer, MapTooltip, MapZoomControl } from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/data";
import { useContactForm } from "@/lib/useContactForm";

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
        <section id="contact" className="relative bg-card px-4 py-30 sm:px-6">
            <div className="absolute inset-0 h-10 md:h-20 bg-background [clip-path:polygon(100%_0,100%_100%,0_0)]" />
            <div className="absolute left-0 bottom-0 w-full h-10 md:h-20 bg-background [clip-path:polygon(0_0,100%_100%,0_100%)]" />
            {/* Section Header */}
            <div className="text-center">
                <Badge variant="outline" className="mb-4">Contact</Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
                <p className="mx-auto mt-4 max-w-2xl text-md text-muted-foreground">
                    Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new opportunities.
                </p>
            </div>
            <Separator className="mx-auto max-w-5xl my-10 w-24" />
            <div className="flex flex-col mx-auto max-w-5xl md:flex-row gap-5">
                <Map center={[-7.9666, 112.6326]} zoom={8} className="flex-3 aspect-square rounded-2xl border border-border shadow-sm">
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
                            <div className="flex gap-3 flex-col mx-2 text-muted-foreground lg:pb-50">
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
