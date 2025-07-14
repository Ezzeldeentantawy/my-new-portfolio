"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, Github, Linkedin } from "lucide-react"; // Added new icons

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
    const response = await fetch(`/api/contact`, {
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
    >
        <h1 className="border-b-2 border-[#f57812] text-center text-2xl md:text-3xl lg:text-4xl mx-[15%] md:mx-[35%] mb-12 mt-20">
            Get In Touch
        </h1>
      {/* Contact Info */}
      <div className="container mx-auto my-16 px-6 grid md:grid-cols-2 gap-10 text-white">
        <div className="bg-gray-900 rounded-2xl shadow-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-white mb-4 text-center border-b-2 border-[#f57812] p-4">
          Contact Information
        </h2>
        <div className="space-y-4 text-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-2xl size-15 flex items-center justify-center">
                <User className="text-orange-500"/>
            </div>
            {/* Added a span for the name to allow for a separate job title line */}
            <div>
              <span>Ezzeldeen Tantawy</span>
              {/* Example Job Title - you can change this */}
              <p className="text-sm text-gray-400">Software Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-2xl size-15 flex items-center justify-center">
                <Mail className="text-orange-500"/>
            </div>
            <a href="mailto:eldeene103@gmail.com" className="hover:underline">
              eldeene103@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-2xl size-15 flex items-center justify-center">
                <Phone className="text-orange-500"/>
            </div>
            <a href="tel:+201284124174" className="hover:underline">
              +201284124174
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-2xl size-15 flex items-center justify-center">
                <MapPin className="text-orange-500"/>
            </div>
            <span>Alexandria, Egypt</span>
          </div>

          {/* New additions based on suggestions */}
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-2xl size-15 flex items-center justify-center">
                <Linkedin className="text-orange-500"/> {/* Changed from Briefcase for LinkedIn */}
            </div>
            <a href="https://www.linkedin.com/in/ezzeldeen-tantawy-8a0393344/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-700 rounded-2xl size-15 flex items-center justify-center">
                <Github className="text-orange-500"/>
            </div>
            <a href="https://github.com/Ezzeldeentantawy" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub Profile
            </a>
          </div>
          {/* End of new additions */}

        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-gray-900 rounded-2xl shadow-xl p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold text-orange-400 mb-2">Message Me</h2>

        {error && (
          <div className="text-red-500 text-sm" role="alert" aria-live="polite">
            {error}
          </div>
        )}
        {success && (
          <div
            className="text-green-500 text-sm"
            role="alert"
            aria-live="polite"
          >
            Message sent successfully!
          </div>
        )}

        {[
          { id: "name", label: "Name", type: "text", required: true },
          { id: "email", label: "Email", type: "email", required: true },
          {
            id: "number",
            label: "Phone Number (optional)",
            type: "tel",
            pattern: "[0-9]{10,15}",
          },
          { id: "subject", label: "Subject", type: "text" },
        ].map(({ id, label, type, required, pattern }) => (
          <div key={id}>
            <label htmlFor={id} className="block mb-1 font-semibold">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              required={required}
              aria-required={required ? "true" : "false"}
              pattern={pattern}
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        ))}

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
          className="w-full bg-orange-500 hover:bg-orange-600 transition-colors p-3 rounded-md font-bold text-black disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      </div>
    </section>
  );
};
