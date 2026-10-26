import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import { getDictionary, pageMetadata, type Lang } from "@/lib/i18n";

interface PageProps {
  params: { lang: Lang };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const t = getDictionary(params.lang).meta;
  return pageMetadata(params.lang, "/contact/", { title: `${t.contactTitle} — Daniel Chaves`, description: t.contactDescription });
}

export default function ContactPage({ params }: PageProps) {
  return <SiteFooter lang={params.lang} withForm />;
}
