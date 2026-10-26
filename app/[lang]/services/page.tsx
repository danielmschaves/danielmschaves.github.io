import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Capabilities from "@/components/Capabilities";
import SiteFooter from "@/components/SiteFooter";
import { capabilityColumns } from "@/lib/content";
import { getDictionary, href, pageMetadata, type Lang } from "@/lib/i18n";

interface PageProps {
  params: { lang: Lang };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const t = getDictionary(params.lang).meta;
  return pageMetadata(params.lang, "/services/", { title: `${t.servicesTitle} — Daniel Chaves`, description: t.servicesDescription });
}

export default function ServicesPage({ params }: PageProps) {
  const { lang } = params;
  const t = getDictionary(lang).services;

  return (
    <>
      <div className="lg-container">
        <PageHeader
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.intro}
          actions={
            <>
              <Button variant="primary" href={href(lang, "/contact/")}>
                {t.ctaContact}
              </Button>
              <Button href={href(lang, "/resume/")}>{t.ctaResume}</Button>
            </>
          }
        />
        <Capabilities columns={capabilityColumns(lang)} />
      </div>

      <SiteFooter lang={lang} />
    </>
  );
}
