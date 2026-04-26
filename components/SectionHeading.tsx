"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="section-label mb-3"
        >
          {label}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: label ? 0.05 : 0 }}
        className="font-bold tracking-tight"
        style={{
          fontSize: 'clamp(28px, 4vw, 40px)',
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          margin: '0 0 12px',
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className={cn(
            "text-base leading-relaxed max-w-[640px]",
            align === "center" ? "mx-auto" : ""
          )}
          style={{ color: 'var(--text-muted)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
