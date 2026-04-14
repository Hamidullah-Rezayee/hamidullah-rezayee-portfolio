"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Layers,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Globe: Globe,
  Smartphone: Smartphone,
  Layers: Layers,
  Layout: Layout,
  Code: Code,
  Server: Server,
  Database: Database,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I help businesses and individuals bring their ideas to life with
            these services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.services?.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
