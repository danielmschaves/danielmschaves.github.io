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
    <div
      className="group card-hover flex flex-col gap-6 transition-all duration-[250ms] md:flex-row"
      style={{
        background: 'rgba(15,23,42,0.5)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        padding: 24,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="shrink-0">
        <div
          className="relative overflow-hidden"
          style={{
            width: 128, height: 128,
            borderRadius: 'var(--radius-md)',
            background: 'var(--ink-3)',
            border: '1px solid var(--line-soft)',
          }}
        >
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            unoptimized
            className="object-cover transition-all duration-[250ms] group-hover:brightness-110"
            sizes="128px"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3
          className="mb-2 font-bold text-xl transition-colors duration-[250ms] group-hover:text-[var(--primary-400)]"
          style={{ color: 'var(--text)', letterSpacing: '-0.015em' }}
        >
          {certification.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {certification.description}
        </p>
        <ul className="flex flex-col gap-2">
          {certification.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm leading-relaxed"
              style={{ color: 'var(--text-body)' }}
            >
              <span
                className="mt-1.5 shrink-0 rounded-full"
                style={{ width: 5, height: 5, background: 'var(--primary-400)' }}
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
