import ExperienceItem from "@/components/ExperienceItem";
import experienceData from "@/data/experience.json";
import { dateRange } from "@/lib/format";

/* Newest first, as experience.json is ordered. */
export default function ExperienceList({ allOpen = false }: { allOpen?: boolean }) {
  return (
    <ol className="lg-ledger">
      {experienceData.map((e, i) => (
        <ExperienceItem
          key={`${e.company}-${e.position}`}
          position={e.position}
          company={e.company}
          dates={dateRange(e.startDate, e.endDate)}
          current={e.endDate === "Present"}
          summary={e.description}
          achievements={e.achievements}
          defaultOpen={allOpen || i === 0}
        />
      ))}
    </ol>
  );
}
