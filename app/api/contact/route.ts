import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { profile } from "@/shared/data/profile";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateContactForm(data: unknown): data is ContactFormData {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const formData = data as Record<string, unknown>;

  return (
    typeof formData.name === "string" &&
    formData.name.trim().length > 0 &&
    formData.name.length <= 50 &&
    typeof formData.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.email.length <= 50 &&
    typeof formData.subject === "string" &&
    formData.subject.trim().length > 0 &&
    formData.subject.length <= 100 &&
    typeof formData.message === "string" &&
    formData.message.trim().length > 0 &&
    formData.message.length <= 2000
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!validateContactForm(body)) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    if (!process.env.EMAIL_PASS) {
      if (process.env.NODE_ENV === "development") {
        console.error("EMAIL_PASS environment variable is not set");
      }
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: profile.email,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: profile.email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send message"
      },
      { status: 500 }
    );
  }
}
