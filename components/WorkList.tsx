import { repoUrlByName, work } from "@/content/resume";
import { formatDownloads } from "@/lib/downloads";

const DRAFT_NOTE = "Manuscript in preparation, to be submitted soon.";

function renderText(text: string) {
  let nodes: (string | React.ReactNode)[] = [text];

  if (typeof nodes[0] === "string" && (nodes[0] as string).includes("{DOWNLOADS}")) {
    const parts = (nodes[0] as string).split("{DOWNLOADS}");
    nodes = parts.flatMap((p, i) =>
      i === 0
        ? [p]
        : [
            <span key={`dl-${i}`} className="font-medium text-foreground">
              {formatDownloads()}
            </span>,
            p,
          ]
    );
  }

  return nodes.flatMap((n, i) => {
    if (typeof n !== "string" || !n.includes(DRAFT_NOTE)) return [n];
    const [before, after = ""] = n.split(DRAFT_NOTE);
    return [
      before,
      <span
        key={`draft-${i}`}
        className="ml-1 text-[10px] uppercase tracking-wide text-muted/70 italic"
      >
        {DRAFT_NOTE}
      </span>,
      after,
    ];
  });
}

export function WorkList() {
  return (
    <ol className="flex flex-col gap-6">
      {work.map((w) => (
        <li
          key={`${w.company}-${w.start}`}
          className="grid gap-1 sm:grid-cols-[8rem_1fr]"
        >
          <div className="text-sm text-muted">
            {w.start} – {w.end}
          </div>
          <div>
            <div className="font-medium">
              {w.role} &middot; {w.company}
            </div>
            {w.location && (
              <div className="text-sm text-muted">{w.location}</div>
            )}
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
              {w.bullets.map((b, i) => {
                const url = b.url ?? (b.repo ? repoUrlByName[b.repo] : undefined);
                return (
                  <li key={i}>
                    {renderText(b.text)}
                    {b.repo && (
                      <>
                        {" "}
                        <a
                          href={url ?? "#repos"}
                          target={url ? "_blank" : undefined}
                          rel={url ? "noreferrer" : undefined}
                          className="text-accent hover:underline whitespace-nowrap"
                        >
                          → {b.repo}
                        </a>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
