import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: `Resume - ${siteConfig.name}`,
  description: "Professional resume and experience of Daniel Chaves, Delivery Manager and Data Engineer.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
