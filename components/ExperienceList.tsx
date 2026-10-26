import ExperienceItem from "@/components/ExperienceItem";
import experienceEn from "@/data/en/experience.json";
import experiencePt from "@/data/pt/experience.json";
import { dateRange } from "@/lib/format";
import type { Lang } from "@/lib/i18n";

const byLang: Record<Lang, typeof experienceEn> = { en: experienceEn, pt: experiencePt };

/* Newest first, as experience.json is ordered. */
export default function ExperienceList({ lang, allOpen = false }: { lang: Lang; allOpen?: boolean }) {
  return (
    <ol className="lg-ledger">
      {byLang[lang].map((e, i) => (
        <ExperienceItem
          key={`${e.company}-${e.position}`}
          position={e.position}
          company={e.company}
          dates={dateRange(e.startDate, e.endDate, lang)}
          current={e.endDate === "Present"}
          summary={e.description}
          achievements={e.achievements}
          defaultOpen={allOpen || i === 0}
        />
      ))}
    </ol>
  );
}
