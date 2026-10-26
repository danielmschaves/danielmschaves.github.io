import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: `Resume — ${siteConfig.name}`,
  description: "Résumé of Daniel Chaves, Program Manager for enterprise data and AI programs.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
