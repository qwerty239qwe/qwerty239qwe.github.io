import { profile } from "@/content/resume";

export function Hero() {
  return (
    <section className="py-10 sm:py-14">
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg text-muted">
        {profile.role}
        {profile.location && <span> &middot; {profile.location}</span>}
      </p>
      <p className="mt-4 max-w-prose">{profile.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm break-all">
        <li>
          <a className="hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </li>
        {profile.phone && (
          <li>
            <a className="hover:underline" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              {profile.phone}
            </a>
          </li>
        )}
        <li>
          <a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className="hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        {profile.scholar && (
          <li>
            <a className="hover:underline" href={profile.scholar} target="_blank" rel="noreferrer">
              Scholar
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}
