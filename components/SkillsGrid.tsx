"use client";

import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";

const categoryChipColor: Record<string, string> = {
  "Project Management Tools": 'var(--cat-leadership)',
  "Programming Languages":    'var(--cat-engineering)',
  "Data Engineering":         'var(--cat-engineering)',
  "Cloud Platforms":          'var(--cat-cloud)',
  "Databases":                'var(--cat-science)',
  "Data Visualization":       'var(--cat-ai)',
  "AI/ML":                    'var(--cat-ai)',
  "DevOps":                   'var(--cat-cloud)',
};

function SkillChip({ skill, color }: { skill: string; color?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full text-xs font-medium"
      style={{
        padding: '2px 10px',
        lineHeight: 1.6,
        color: color ?? 'var(--primary-300)',
        background: color
          ? `color-mix(in srgb, ${color} 12%, transparent)`
          : 'var(--primary-tint)',
        border: '1px solid transparent',
      }}
    >
      {skill}
    </span>
  );
}

export default function SkillsGrid() {
  return (
    <div className="space-y-14">

      {/* Technical Skills */}
      <section>
        <p className="section-label mb-6">{skillsData.technical.title}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Object.entries(skillsData.technical.categories).map(
            ([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: 'rgba(15,23,42,0.3)',
                  border: '1px solid var(--line-soft)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 20,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h4
                  className="mb-3 font-semibold text-sm"
                  style={{ color: 'var(--text)' }}
                >
                  {category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <SkillChip
                      key={skill}
                      skill={skill}
                      color={categoryChipColor[category]}
                    />
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Data Platform */}
      <section>
        <p className="section-label mb-6">{skillsData.dataPlatform.title}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillsData.dataPlatform.skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="flex gap-4"
              style={{
                background: 'rgba(15,23,42,0.3)',
                border: '1px solid var(--line-soft)',
                borderRadius: 'var(--radius-lg)',
                padding: 20,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="mt-1.5 shrink-0 rounded-full"
                style={{
                  width: 6, height: 6,
                  background: 'var(--primary-400)',
                  boxShadow: '0 0 6px var(--primary-400)',
                }}
              />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery & Leadership */}
      <section>
        <p className="section-label mb-6">{skillsData.deliveryLeadership.title}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillsData.deliveryLeadership.skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="flex gap-4"
              style={{
                background: 'rgba(15,23,42,0.3)',
                border: '1px solid var(--line-soft)',
                borderRadius: 'var(--radius-lg)',
                padding: 20,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="mt-1.5 shrink-0 rounded-full"
                style={{
                  width: 6, height: 6,
                  background: 'var(--cat-leadership)',
                  boxShadow: '0 0 6px var(--cat-leadership)',
                }}
              />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <p className="section-label mb-5">{skillsData.languages.title}</p>
        <div className="flex flex-wrap gap-3">
          {skillsData.languages.list.map((language, idx) => (
            <motion.span
              key={language}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--line)',
                background: 'var(--ink-2)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                transition: 'all 250ms var(--ease-out)',
                cursor: 'default',
              }}
            >
              {language}
            </motion.span>
          ))}
        </div>
      </section>

    </div>
  );
}
