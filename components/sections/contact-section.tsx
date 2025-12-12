"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/lib/data";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section
            id="contact"
            className="bg-muted px-4 py-20 sm:px-6"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="text-center">
                    <Badge variant="outline" className="mb-4">
                        Contact
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Have a project in mind or just want to say hi? Feel free to reach out.
                        I&apos;m always open to discussing new opportunities.
                    </p>
                </div>

                <Separator className="mx-auto my-10 w-24" />

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-muted-foreground" />
                                    Email
                                </CardTitle>
                                <CardDescription>
                                    The best way to reach me for professional inquiries.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-lg font-medium text-foreground hover:underline"
                                >
                                    {profile.email}
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-muted-foreground" />
                                    Location
                                </CardTitle>
                                <CardDescription>
                                    Based in Indonesia, available for remote work worldwide.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-medium text-foreground">
                                    {profile.location}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card className="border-border">
                            <CardHeader>
                                <CardTitle>Connect with me</CardTitle>
                                <CardDescription>
                                    Find me on these platforms
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {profile.socials.map((social) => (
                                        <Button key={social.name} variant="outline" asChild>
                                            <a
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <social.icon className="mr-2 h-4 w-4" />
                                                {social.name}
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="border-border">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                Fill out the form below and I&apos;ll get back to you as soon as
                                possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Project inquiry"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting || isSubmitted}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : isSubmitted ? (
                                        <>Message Sent!</>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
