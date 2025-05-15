import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Define a type for incoming form data
interface FormData {
    name: string;
    email: string;
    number?: string;
    subject?: string;
    message: string;
}

// Basic email validation
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Sanitize text to prevent email header injection
function sanitize(input: string): string {
    return input.replace(/(\r\n|\n|\r)/gm, '').trim();
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as FormData;

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        if (!isValidEmail(body.email)) {
            return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
        }

        // Sanitize inputs
        const name = sanitize(body.name);
        const email = sanitize(body.email);
        const number = sanitize(body.number || '');
        const subject = sanitize(body.subject || 'New Contact Form Submission');
        const message = sanitize(body.message);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER, // Your receiving email
            subject,
            text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Phone: ${number}
Subject: ${subject}

Message:
${body.message}
      `.trim(),
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error('Email send failed:', err);
        return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
    }
}
