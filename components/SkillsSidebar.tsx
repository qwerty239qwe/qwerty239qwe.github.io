"use client";

import Link from "next/link";
import { skillGroups } from "@/content/resume";
import { useHoverHighlight } from "./HoverHighlight";

export function SkillsSidebar() {
  const { hovered } = useHoverHighlight();
  const active = hovered.size > 0;

  return (
    <aside
      aria-label="Skills"
      className="lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto"
    >
      <div className="rounded-xl border border-border p-4 bg-background/50">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-muted mb-3">
          Skills
        </h2>
        <div className="flex flex-col gap-4">
          {skillGroups.map((g) => (
            <div key={g.id} id={`skill-group-${g.id}`}>
              <div className="text-xs font-medium text-muted mb-2">{g.name}</div>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((s) => {
                  const isHot = hovered.has(s.id);
                  const dim = active && !isHot;
                  return (
                    <li key={s.id}>
                      <Link
                        href={`#skill-group-${g.id}`}
                        id={`skill-${s.id}`}
                        className={[
                          "inline-block rounded-full border px-2.5 py-0.5 text-[11px] transition-all",
                          isHot
                            ? "border-accent bg-accent text-background scale-105"
                            : dim
                            ? "border-border text-muted opacity-40"
                            : "border-border hover:border-foreground/40",
                        ].join(" ")}
                      >
                        {s.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
