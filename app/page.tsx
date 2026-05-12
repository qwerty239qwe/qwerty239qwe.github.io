import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { WorkList } from "@/components/WorkList";
import { PublicationList } from "@/components/PublicationList";
import { profile } from "@/content/resume";
import { RepoGrid } from "@/components/RepoGrid";
import { EducationList } from "@/components/EducationList";
import { SkillsSidebar } from "@/components/SkillsSidebar";
import { HoverHighlightProvider } from "@/components/HoverHighlight";

export default function Home() {
  return (
    <HoverHighlightProvider>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
          <div className="min-w-0">
            <Hero />
            <Section id="work" title="Work">
              <WorkList />
            </Section>
            <Section id="repos" title="Repositories">
              <RepoGrid />
            </Section>
            <Section id="publications" title="Selected publications">
              <PublicationList />
              {profile.scholar && (
                <p className="mt-6 text-sm">
                  <a
                    href={profile.scholar}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    Full publication list on Google Scholar →
                  </a>
                </p>
              )}
            </Section>
            <Section id="education" title="Education">
              <EducationList />
            </Section>
          </div>
          <div id="skills" className="mt-10 lg:mt-14 scroll-mt-20">
            <SkillsSidebar />
          </div>
        </div>
      </div>
    </HoverHighlightProvider>
  );
}
