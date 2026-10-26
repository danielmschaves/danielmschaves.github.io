import { notFound } from "next/navigation";

/* Unknown paths under a language render that language's 404 (there is no root layout above [lang]). */
export default function CatchAll() {
  notFound();
}
