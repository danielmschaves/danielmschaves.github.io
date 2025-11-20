"use client";

import { cn } from "@/lib/utils";

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

export default function ExperienceTimeline({
  experiences,
}: ExperienceTimelineProps) {
  const formatDate = (date: string) => {
    if (date === "Present") return "Present";
    const [year, month] = date.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={`${exp.company}-${exp.startDate}`}
          className="group relative rounded-xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
        >
          {/* Header Section */}
          <div className="mb-6 flex flex-col gap-3 border-b border-border/40 pb-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {exp.position}
                </h3>
                <span className="hidden text-muted-foreground md:inline">•</span>
                <h4 className="text-xl font-semibold text-primary">
                  {exp.company}
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
                <span className="text-muted-foreground/50">•</span>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            {exp.description}
          </p>

          {/* Achievements */}
          <div className="space-y-4">
            <h5 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
              Key Achievements
            </h5>
            <ul className="space-y-3">
              {exp.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="flex-1">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

