import Image from "next/image";
import Link from "next/link";

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
  githubUrl,
  image,
  technologies,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className="card group flex flex-col overflow-hidden">
      <Link href={`/projects/${id}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-dark-100 dark:bg-dark-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-semibold text-dark-900 dark:text-white">
          <Link
            href={`/projects/${id}`}
            className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-dark-600 dark:text-dark-200">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-50 dark:bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link
            href={`/projects/${id}`}
            className="btn-primary block w-full text-center text-sm"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
}

