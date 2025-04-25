"use client";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    number?: string;
    subject?: string;
    message: string;
}

export const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const sendContactForm = async (formData: FormData) => {
        const response = await fetch(`https://my0new-portfolio-backend-production.up.railway.app/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("Failed to send form");
        return response.json();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setIsSubmitting(true);

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data: FormData = {
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                number: formData.get("number") as string,
                subject: formData.get("subject") as string,
                message: formData.get("message") as string,
            };

            // Basic client-side validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                setError("Invalid email address");
                return;
            }

            await sendContactForm(data);
            setSuccess(true);
            form.reset();
        } catch (error) {
            console.error("Error sending contact form:", error);
            setError("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="max-w-xl mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg space-y-4 mt-10"
        >
            <form onSubmit={handleSubmit} noValidate>
                {error && (
                    <div role="alert" className="text-red-500" aria-live="polite">
                        {error}
                    </div>
                )}
                {success && (
                    <div role="alert" className="text-green-500" aria-live="polite">
                        Message sent successfully!
                    </div>
                )}
                <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        aria-required="true"
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        aria-required="true"
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label htmlFor="number" className="block mb-1 font-semibold">
                        Phone Number (optional)
                    </label>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        pattern="[0-9]{10,15}"
                        placeholder="Optional"
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-1 font-semibold">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 font-semibold">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        aria-required="true"
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-700 transition-colors p-3 rounded-md font-bold text-black disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>
        </section>
    );
};