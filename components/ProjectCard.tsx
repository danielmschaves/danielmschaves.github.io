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
  githubUrl: string;
  image: string;
  technologies: string[];
  featured?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card/80",
        featured ? "md:flex-row md:gap-8" : ""
      )}
    >
      <Link
        href={`/projects/${id}`}
        className={cn(
          "relative overflow-hidden",
          featured ? "md:w-1/2" : "aspect-video w-full"
        )}
      >
        <div className={cn("relative h-full w-full", featured ? "min-h-[300px]" : "")}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
        </div>
      </Link>

      <div className={cn("flex flex-1 flex-col p-6", featured ? "justify-center" : "")}>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        <h3 className="mb-2 text-xl font-bold tracking-tight text-card-foreground">
          <Link
            href={`/projects/${id}`}
            className="group/link inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            {title}
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100" />
          </Link>
        </h3>

        <p className="mb-6 flex-1 text-muted-foreground line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          <Link
            href={`/projects/${id}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            View Project Details
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

