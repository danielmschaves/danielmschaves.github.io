import { cn } from "@/lib/utils";
import certifications from "@/data/certifications.json";

/* Groups in the order they first appear in certifications.json; the first (AI · Anthropic) carries the accent. */
export default function CredentialGrid() {
  const groups = Array.from(new Set(certifications.map((c) => c.group)));
  return (
    <div>
      {groups.map((group, i) => (
        <div key={group} className="lg-cred-group">
          <div className={cn("lg-cred-group__label lg-mono-sm", i === 0 ? "lg-accent" : "lg-muted")}>{group}</div>
          <div className="lg-creds">
            {certifications
              .filter((c) => c.group === group)
              .map((c) => (
                <div key={c.name} className="lg-cred">
                  <div className="lg-cred__name">{c.name}</div>
                  <div className="lg-cred__issuer">{c.issuer}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
