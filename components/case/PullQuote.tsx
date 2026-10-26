import type { ReactNode } from "react";

/* The single closing line of a case study; wrap the accented word in <em>. */
export default function PullQuote({ children }: { children: ReactNode }) {
  return <blockquote className="lg-quote">{children}</blockquote>;
}
