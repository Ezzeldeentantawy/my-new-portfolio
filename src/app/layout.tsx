import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezzeldeen | Full stack developer",
  description: "Hi, I'm Ezzeldeen — a full-stack web developer specializing in React and Laravel. Check out my projects, skills, and contact me for freelance or full-time work.",
  openGraph: {
    title: 'Ezzeldeen | Full stack developer',
    description: "Hi, I'm Ezzeldeen — a full- stack web developer specializing in React and Laravel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Ezzeldeen, full-stack developer, 
        web developer, React developer, Laravel developer, JavaScript, PHP, 
        MySQL, frontend, backend, 
        portfolio, software engineer, programming, web design, HTML, CSS, developer Egypt" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Ezzeldeen" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800 text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
