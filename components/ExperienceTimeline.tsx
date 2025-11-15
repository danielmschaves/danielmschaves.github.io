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
    <div className="space-y-10">
      {experiences.map((exp) => (
        <div
          key={`${exp.company}-${exp.startDate}`}
          className="group relative rounded-lg border-l-4 border-primary-500/30 bg-dark-800/50 p-8 transition-all hover:border-primary-500/60 hover:bg-dark-800/70"
        >
          {/* Header Section - Compact and Horizontal */}
          <div className="mb-6 flex flex-col gap-3 border-b border-dark-700 pb-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <h3 className="text-2xl font-bold text-white">
                  {exp.position}
                </h3>
                <span className="hidden text-dark-500 md:inline">•</span>
                <h4 className="text-xl font-semibold text-primary-400">
                  {exp.company}
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-dark-400">
                <span className="font-medium">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
                <span className="text-dark-600">•</span>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 text-base leading-relaxed text-dark-200">
            {exp.description}
          </p>

          {/* Achievements - Single Column with Better Spacing */}
          <div className="space-y-4">
            <h5 className="text-sm font-semibold uppercase tracking-wide text-dark-400">
              Key Achievements
            </h5>
            <ul className="space-y-4">
              {exp.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-base leading-relaxed text-dark-200"
                >
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
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

