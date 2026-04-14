"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="flex-grow space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
                <p className="text-lg text-primary/80 font-medium">
                  {edu.school}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
