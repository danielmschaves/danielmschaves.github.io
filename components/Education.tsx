import education from "@/data/education.json";
import skills from "@/data/skills.json";

export function EducationList() {
  return (
    <ol className="lg-ledger">
      {education.map((e) => (
        <li key={e.institution} className="lg-row flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-5">
          <div className="min-w-0">
            <div className="title">{e.degree}</div>
            <div className="body-sm mt-1" style={{ color: "var(--muted)" }}>
              {e.institution} · {e.location}
            </div>
          </div>
          <span className="lg-mono lg-muted">{e.year}</span>
        </li>
      ))}
    </ol>
  );
}

/* "Portuguese (Native)" → name + level. */
export function LanguageList() {
  return (
    <ul className="lg-ledger">
      {skills.languages.list.map((entry) => {
        const [, name, level] = entry.match(/^(.*?)\s*\((.*)\)$/) ?? [entry, entry, ""];
        return (
          <li key={entry} className="lg-row flex items-baseline justify-between gap-6 py-4">
            <span className="body">{name}</span>
            <span className="lg-mono lg-muted">{level.toUpperCase()}</span>
          </li>
        );
      })}
    </ul>
  );
}
