import NotFoundView from "@/components/NotFoundView";

/* not-found.tsx receives no params, and it is part of every page's tree, so reading headers here
   would make every page dynamic. Both languages render; CSS keyed on <html lang> (set by the
   [lang] layout) shows the right one. */
export default function NotFound() {
  return (
    <>
      <div data-nf="en">
        <NotFoundView lang="en" />
      </div>
      <div data-nf="pt" lang="pt-BR">
        <NotFoundView lang="pt" />
      </div>
    </>
  );
}
