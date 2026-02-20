import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Hamidullah Rezayee | Full Stack Web Developer",
  description:
    "A passionate Full Stack Developer with expertise in building scalable, user-friendly applications using React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "Hamidullah Rezayee",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Kabul",
    "Afghanistan",
  ],
  authors: [{ name: "Hamidullah Rezayee" }],
  creator: "Hamidullah Rezayee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamidullah-rezayee.dev",
    title: "Hamidullah Rezayee | Full Stack Web Developer",
    description:
      "Full Stack Web Developer building scalable, modern web applications",
    siteName: "Hamidullah Rezayee Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamidullah Rezayee | Full Stack Web Developer",
    description:
      "Full Stack Web Developer building scalable, modern web applications",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0a1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
