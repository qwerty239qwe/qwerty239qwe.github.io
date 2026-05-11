import { publications } from "@/content/resume";

export function PublicationList() {
  return (
    <ul className="flex flex-col gap-4">
      {publications.map((p, i) => {
        const href = p.url ?? (p.doi ? `https://doi.org/${p.doi}` : undefined);
        return (
          <li key={i} className="text-sm leading-relaxed break-words">
            <div className="font-medium">
              {href ? (
                <a className="hover:underline" href={href} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </div>
            <div className="text-muted">
              {p.authors} &middot; <em>{p.venue}</em> &middot; {p.year}
              {p.doi && <> &middot; doi:{p.doi}</>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
