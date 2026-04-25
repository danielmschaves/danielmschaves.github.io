"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const pillars = [
  "Data Platform Architecture & Engineering",
  "AI/ML Solutions & Data Products",
  "Delivery Management & Team Leadership",
  "Modern Data Stack (dbt, Airflow, Snowflake)",
];

const techStack = ["Python", "SQL", "dbt", "Airflow", "Snowflake"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-[120px]">
      {/* Grid texture — masked radially */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: 'var(--bg-grid)',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)',
        }}
      />
      {/* Radial primary glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: 'var(--bg-radial-primary)' }}
      />
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[400px] w-[400px] -z-10 rounded-full"
        style={{ background: 'rgba(14,165,233,0.12)', filter: 'blur(80px)' }}
      />
      <div
        className="pointer-events-none absolute top-40 -left-40 h-[400px] w-[400px] -z-10 rounded-full"
        style={{ background: 'rgba(34,211,238,0.08)', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">

          {/* ── Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative shrink-0"
            style={{ width: 200, height: 200 }}
          >
            {/* Outer ring */}
            <div
              className="absolute inset-[-32px] rounded-full border border-[var(--primary-400)] animate-pulse-ring"
              style={{ opacity: 0.12 }}
            />
            {/* Inner ring */}
            <div
              className="absolute inset-[-16px] rounded-full border border-[var(--primary-400)] animate-pulse-ring"
              style={{ opacity: 0.25, animationDelay: '1s' }}
            />
            {/* Gradient border */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                padding: 2,
                background: 'linear-gradient(135deg, var(--primary-500), var(--accent))',
                borderRadius: '50%',
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full" style={{ background: 'var(--ink-0)' }}>
                <Image
                  src="/images/profile.jpg"
                  alt="Daniel Chaves"
                  fill
                  className="rounded-full object-cover"
                  sizes="200px"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* ── Content ── */}
          <div className="flex-1 min-w-0 text-center md:text-left">

            {/* H1 */}
            <motion.h1
              {...fadeUp(0)}
              className="font-bold"
              style={{
                fontSize: 'clamp(40px, 7vw, 80px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                margin: '0 0 16px',
              }}
            >
              Daniel Chaves
            </motion.h1>

            {/* Title pill */}
            <motion.div {...fadeUp(0.08)} className="mb-6 flex justify-center md:justify-start">
              <span
                className="inline-flex items-center rounded-full text-sm font-medium"
                style={{
                  padding: '6px 16px',
                  background: 'var(--primary-tint)',
                  border: '1px solid rgba(14,165,233,0.25)',
                  color: 'var(--primary-300)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Delivery Manager &amp; Data Engineer
              </span>
            </motion.div>

            {/* Lede */}
            <motion.p
              {...fadeUp(0.16)}
              className="mb-3"
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: 'var(--text-body)',
                maxWidth: 560,
              }}
            >
              Leading enterprise data initiatives with{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>6 years</strong>{' '}
              of experience delivering AI/ML solutions and managing cross-functional teams of{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>30+ professionals</strong>.
            </motion.p>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.22)}
              className="mb-8"
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: 'var(--text-muted)',
                maxWidth: 560,
              }}
            >
              Specializing in modern data stack implementations with{' '}
              <span style={{ color: 'var(--primary-400)', fontWeight: 500 }}>
                {techStack.join(', ')}
              </span>{' '}
              and cloud platforms.
            </motion.p>

            {/* Core expertise */}
            <motion.div {...fadeUp(0.3)} className="mb-8">
              <p className="section-label mb-3">Core Expertise</p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-left"
                    style={{
                      padding: 14,
                      background: 'rgba(15,23,42,0.4)',
                      border: '1px solid var(--line-soft)',
                      borderRadius: 'var(--radius-md)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--text-body)',
                    }}
                  >
                    <span
                      className="mt-1.5 shrink-0 rounded-full"
                      style={{
                        width: 6,
                        height: 6,
                        background: 'var(--primary-400)',
                        boxShadow: '0 0 8px var(--primary-400)',
                      }}
                    />
                    {pillar}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.38)} className="mb-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link href="/resume" className="btn-primary">
                View Resume
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              {...fadeUp(0.44)}
              className="flex items-center justify-center gap-1.5 font-mono text-xs md:justify-start"
              style={{ color: 'var(--text-meta)' }}
            >
              <MapPin className="h-3 w-3" />
              Florianópolis, Brazil · Remote
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
