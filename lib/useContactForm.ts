import { useState } from "react";

export interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function useContactForm() {
    const [form, setForm] = useState<ContactFormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to send message");
            }
            setIsSubmitted(true);
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        form,
        isSubmitting,
        isSubmitted,
        error,
        handleChange,
        handleSubmit,
    };
}
