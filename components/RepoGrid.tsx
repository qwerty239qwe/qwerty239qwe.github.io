"use client";

import Link from "next/link";
import { repos, skillById } from "@/content/resume";
import { useHoverHighlight } from "./HoverHighlight";

export function RepoGrid() {
  const { setHovered, clearHovered, hovered } = useHoverHighlight();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {repos.map((r) => {
        const tags = r.tags ?? [];
        const matches = tags.some((t) => hovered.has(t));
        return (
          <div
            key={r.url}
            onMouseEnter={() => setHovered(tags)}
            onMouseLeave={clearHovered}
            onFocus={() => setHovered(tags)}
            onBlur={clearHovered}
            className={[
              "rounded-lg border p-4 transition-colors",
              matches
                ? "border-accent"
                : "border-border hover:border-foreground/40",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-2">
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:underline"
              >
                {r.name}
              </a>
              {r.language && (
                <span className="text-xs text-muted">{r.language}</span>
              )}
            </div>
            <p className="mt-2 text-sm text-muted">{r.description}</p>
            {r.pypi && (
              <a
                href={`https://pypi.org/project/${r.pypi}/`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block"
                aria-label={`PyPI downloads for ${r.pypi}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://static.pepy.tech/personalized-badge/${r.pypi}?period=total&units=INTERNATIONAL_SYSTEM&left_color=BLACK&right_color=GREEN&left_text=downloads`}
                  alt={`${r.pypi} downloads`}
                  loading="lazy"
                  decoding="async"
                  height={20}
                />
              </a>
            )}
            {tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <li key={t}>
                    <Link
                      href={`#skill-${t}`}
                      className="inline-block rounded-full border border-border px-2 py-0.5 text-[10px] text-muted hover:border-foreground/40 hover:text-foreground"
                    >
                      {skillById[t] ?? t}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {typeof r.stars === "number" && (
              <div className="mt-3 text-xs text-muted">★ {r.stars}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
