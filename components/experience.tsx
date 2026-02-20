"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve had the
            privilege to work with.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-1.5 ring-4 ring-background z-10" />
              <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                <div
                  className={`glass-card p-6 rounded-xl ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 text-primary ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors block mb-4"
                  >
                    {job.company}
                  </a>
                  <ul
                    className={`space-y-2 text-sm text-muted-foreground list-disc list-inside inline-block ${index % 2 === 0 ? "text-left" : "md:text-left"}`}
                  >
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2" /> {/* Spacer */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
