"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsGrid() {
  return (
    <div className="space-y-16">
      {/* Data Platform & Architecture */}
      <section>
        <h3 className="mb-6 text-xl font-bold text-foreground">
          {skillsData.dataPlatform.title}
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillsData.dataPlatform.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card/80"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technical Skills */}
      <section>
        <h3 className="mb-6 text-xl font-bold text-foreground">
          {skillsData.technical.title}
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skillsData.technical.categories).map(
            ([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
              >
                <h4 className="mb-4 font-semibold text-foreground">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Data Product Development */}
      <section>
        <h3 className="mb-6 text-xl font-bold text-foreground">
          {skillsData.dataProduct.title}
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillsData.dataProduct.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card/80"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section>
        <h3 className="mb-6 text-xl font-bold text-foreground">
          {skillsData.languages.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skillsData.languages.list.map((language, idx) => (
            <motion.span
              key={language}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {language}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}

