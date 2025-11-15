import skillsData from "@/data/skills.json";

export default function SkillsGrid() {
  return (
    <div className="space-y-12">
      {/* Data Platform & Architecture */}
      <section>
        <h3 className="mb-4 text-xl font-semibold text-white">
          {skillsData.dataPlatform.title}
        </h3>
        <ul className="space-y-2">
          {skillsData.dataPlatform.skills.map((skill, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-dark-200"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Data Product Development */}
      <section>
        <h3 className="mb-4 text-xl font-semibold text-white">
          {skillsData.dataProduct.title}
        </h3>
        <ul className="space-y-2">
          {skillsData.dataProduct.skills.map((skill, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-dark-200"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Skills */}
      <section>
        <h3 className="mb-4 text-xl font-semibold text-white">
          {skillsData.technical.title}
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skillsData.technical.categories).map(
            ([category, skills]) => (
              <div key={category}>
                <h4 className="mb-2 font-medium text-dark-200">
                  {category}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-primary-500/20 px-3 py-1 text-sm font-medium text-primary-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h3 className="mb-4 text-xl font-semibold text-white">
          {skillsData.languages.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skillsData.languages.list.map((language) => (
            <span
              key={language}
              className="rounded-lg bg-dark-700 px-3 py-1 text-sm font-medium text-dark-200"
            >
              {language}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

