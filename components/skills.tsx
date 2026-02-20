"use client";

import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(
            ([category, skills], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-border/50"
              >
                <h3 className="text-xl font-bold mb-6 capitalize bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default border border-border/50"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {portfolioData.languages.map((lang, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl text-center border border-border/50"
              >
                <div className="font-bold text-lg mb-1">{lang.name}</div>
                <div className="text-sm text-muted-foreground">
                  {lang.level}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
