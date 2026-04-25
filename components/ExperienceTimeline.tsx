"use client";

import { motion } from "framer-motion";

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const formatDate = (date: string) => {
    if (date === "Present") return "Present";
    const [year, month] = date.split("-");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="flex flex-col gap-5">
      {experiences.map((exp, index) => (
        <motion.div
          key={`${exp.company}-${exp.startDate}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'var(--ink-2)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-2xl)',
            padding: '28px',
            transition: 'all 250ms var(--ease-out)',
          }}
          className="group"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.3)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          {/* Header */}
          <div
            className="pb-[18px] mb-[18px]"
            style={{ borderBottom: '1px solid var(--line-soft)' }}
          >
            <div className="flex flex-wrap items-baseline gap-2.5 mb-1.5">
              <h3
                className="font-bold"
                style={{ fontSize: 22, letterSpacing: '-0.015em', color: 'var(--text)' }}
              >
                {exp.position}
              </h3>
              <span style={{ color: 'var(--text-meta)' }}>·</span>
              <h4
                className="font-semibold text-lg"
                style={{ color: 'var(--primary-400)' }}
              >
                {exp.company}
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span>{formatDate(exp.startDate)} — {formatDate(exp.endDate)}</span>
              <span style={{ color: 'var(--text-meta)' }}>·</span>
              <span>{exp.location}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className="mb-5 text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {exp.description}
          </p>

          {/* Achievements */}
          <div>
            <p className="section-label mb-4">Key Achievements</p>
            <ul className="flex flex-col gap-2.5">
              {exp.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: 'var(--text-body)' }}
                >
                  <span
                    className="mt-2 shrink-0 rounded-full"
                    style={{
                      width: 6, height: 6,
                      background: 'var(--primary-500)',
                    }}
                  />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
