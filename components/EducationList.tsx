import { education } from "@/content/resume";

export function EducationList() {
  return (
    <ul className="flex flex-col gap-4">
      {education.map((e, i) => (
        <li key={i} className="grid gap-1 sm:grid-cols-[8rem_1fr]">
          <div className="text-sm text-muted">
            {e.start} – {e.end}
          </div>
          <div>
            <div className="font-medium">{e.degree}</div>
            <div className="text-sm text-muted">{e.school}</div>
            {e.notes && (
              <div className="mt-1 text-sm text-muted">{e.notes}</div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
