/* Copy keeps an accented heading as [before, accent, after]; render it with the one <em>. */
export function withAccent([before, accent, after = ""]: string[]) {
  return (
    <>
      {before}
      <em>{accent}</em>
      {after}
    </>
  );
}
