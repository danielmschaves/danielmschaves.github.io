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
    <div className="card flex flex-col gap-6 md:flex-row">
      <div className="shrink-0">
        <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-dark-100 md:h-40 md:w-40">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 160px"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-semibold text-white">
          {certification.title}
        </h3>
        <p className="mb-4 text-dark-200">{certification.description}</p>
        <ul className="space-y-2">
          {certification.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-dark-200"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

