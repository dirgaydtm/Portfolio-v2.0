import nodemailer from "nodemailer";
import { profile } from "@/shared/data/profile";
import { ContactSchema } from "@/features/contact/schemas/contact";
import { z } from "zod";

export async function sendContactMessage(data: z.infer<typeof ContactSchema>) {
    const { name, email, subject, message } = data;

    if (!process.env.EMAIL_PASS) {
        throw new Error("Server configuration error");
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: profile.email,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: "Portfolio Contact",
        to: profile.email,
        subject: `[Portfolio] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: email,
    });
}