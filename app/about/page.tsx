import { Reveal, SignatureTrace } from "@/components/animation";
import { CapabilitySummary } from "@/components/CapabilitySummary";
import { ContactList } from "@/components/ContactList";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { PersonSchema } from "@/components/Schema";
import { SectionContent } from "@/components/SectionContent";
import { aboutEducation, aboutPage } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: aboutPage.seoTitle,
  description: aboutPage.description,
  path: aboutPage.path
});

export default function AboutPage() {
  return (
    <article className="wrap">
      <PersonSchema pagePath="/about/" />
      <header className="page-hero">
        <ProfilePhoto size={128} className="profile-photo--about" />
        <h1>{aboutPage.title}</h1>
        <SignatureTrace variant="pulse" />
        <p>{aboutPage.intro}</p>
      </header>
      <CapabilitySummary />

      <SectionContent sections={aboutPage.sections} animate />

      <Reveal as="section" delay={aboutPage.sections.length * 0.08}>
        <h2>{aboutEducation.heading}</h2>
        {aboutEducation.groups.map((group) => (
          <div className="education-group" key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> — {item.detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <Reveal as="section" delay={(aboutPage.sections.length + 1) * 0.08}>
        <h2>Liên hệ</h2>
        <ContactList />
      </Reveal>
    </article>
  );
}
