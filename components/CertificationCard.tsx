"use client";

import Image from "next/image";

interface Certification {
  title: string;
  image: string;
  description: string;
  highlights: string[];
}

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <div className="group flex flex-col gap-6 rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md md:flex-row">
      <div className="shrink-0">
        <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-muted md:h-32 md:w-32">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 192px, 128px"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {certification.title}
        </h3>
        <p className="mb-4 text-muted-foreground">{certification.description}</p>
        <ul className="space-y-2">
          {certification.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-muted-foreground/80"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

