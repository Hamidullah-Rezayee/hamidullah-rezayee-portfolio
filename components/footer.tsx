"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/40">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {portfolioData.personalInfo.name}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
