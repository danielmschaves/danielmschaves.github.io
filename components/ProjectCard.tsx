"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  image: string;
  technologies: string[];
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden",
        "transition-all duration-[250ms] cursor-pointer",
        featured
          ? "grid grid-cols-1 md:grid-cols-[1.1fr_1fr]"
          : "flex flex-col"
      )}
      style={{
        background: 'rgba(15,23,42,0.5)',
        border: '1px solid var(--line)',
        borderRadius: featured ? 18 : 14,
        backdropFilter: 'blur(10px)',
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
      onHoverStart={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.4)';
        (e.currentTarget as HTMLElement).style.boxShadow = featured
          ? 'var(--shadow-lg)'
          : 'var(--shadow-md)';
      }}
      onHoverEnd={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Image */}
      <Link
        href={`/projects/${id}`}
        className={cn(
          "relative overflow-hidden block",
          featured ? "min-h-[300px] md:min-h-[340px]" : "aspect-video w-full"
        )}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          unoptimized
        />
        {/* Always-on gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(5,9,20,0) 50%, rgba(5,9,20,0.4))',
          }}
        />
        {/* Featured badge */}
        {featured && (
          <div
            className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full text-xs font-medium"
            style={{
              padding: '4px 10px',
              background: 'rgba(34,211,238,0.15)',
              color: 'var(--accent)',
              border: '1px solid rgba(34,211,238,0.3)',
              backdropFilter: 'blur(8px)',
            }}
          >
            Featured
          </div>
        )}
      </Link>

      {/* Body */}
      <div className={cn("flex flex-1 flex-col", featured ? "justify-center p-8" : "p-[18px] gap-2.5")}>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, featured ? 6 : 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {technologies.length > (featured ? 6 : 4) && (
            <span
              className="text-xs"
              style={{ color: 'var(--text-meta)', padding: '2px 4px' }}
            >
              +{technologies.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Title with hover arrow */}
        <h3
          className="font-bold tracking-tight"
          style={{
            fontSize: featured ? 28 : 17,
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
          }}
        >
          <Link href={`/projects/${id}`} className="flex-1 hover:text-[var(--primary-400)] transition-colors duration-[250ms]">
            {title}
          </Link>
          <ArrowUpRight
            className="mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ width: featured ? 20 : 16, height: featured ? 20 : 16, color: 'var(--primary-400)' }}
          />
        </h3>

        {/* Description */}
        <p
          className={cn("text-sm leading-relaxed", !featured && "line-clamp-3")}
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>

        {featured && (
          <Link
            href={`/projects/${id}`}
            className="mt-1 text-sm font-medium transition-colors duration-[250ms] hover:text-[var(--primary-300)]"
            style={{ color: 'var(--primary-400)' }}
          >
            View project details →
          </Link>
        )}
      </div>
    </motion.article>
  );
}
