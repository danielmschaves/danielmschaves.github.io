import type { Metadata } from "next";
import { getDictionary, pageMetadata, type Lang } from "@/lib/i18n";
import ResumeContent from "./ResumeContent";

interface PageProps {
  params: { lang: Lang };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const t = getDictionary(params.lang).meta;
  return pageMetadata(params.lang, "/resume/", { title: `${t.resumeTitle} — Daniel Chaves`, description: t.resumeDescription });
}

export default function ResumePage({ params }: PageProps) {
  return <ResumeContent lang={params.lang} />;
}
