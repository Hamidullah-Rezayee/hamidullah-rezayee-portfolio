"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Calendar, Code2, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform rotate-6 scale-90" />
              {/* Profile Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden glass-card flex items-center justify-center bg-card">
                {portfolioData.personalInfo.image ? (
                  <img
                    src={portfolioData.personalInfo.image}
                    alt={portfolioData.personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Code2 className="w-32 h-32 text-primary/40" />
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.personalInfo.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">
                    {portfolioData.personalInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">2+ Years</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              {/* Education moved to its own section */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
