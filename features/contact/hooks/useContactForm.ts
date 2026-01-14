"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const INITIAL_FORM_STATE: ContactFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const RESET_TIMEOUT = 3000;

export function useContactForm() {
    const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({
                ...prev,
                [e.target.id]: e.target.value,
            }));
        },
        []
    );

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setIsSubmitting(true);
            setError(null);

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });

                if (!response.ok) {
                    const data = await response.json().catch(() => ({}));
                    throw new Error(data.error || "Failed to send message");
                }

                setIsSubmitted(true);
                setForm(INITIAL_FORM_STATE);

                timeoutRef.current = setTimeout(() => {
                    setIsSubmitted(false);
                }, RESET_TIMEOUT);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "Something went wrong"
                );
            } finally {
                setIsSubmitting(false);
            }
        },
        [form]
    );

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return {
        form,
        isSubmitting,
        isSubmitted,
        error,
        handleChange,
        handleSubmit,
    };
}

