import { contactPage } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: contactPage.seoTitle,
  description: contactPage.description,
  path: contactPage.path
});

export default function ContactPage() {
  return (
    <article className="wrap">
      <h1>{contactPage.title}</h1>
      <p>
        Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
      <p>
        LinkedIn: <a href={siteConfig.linkedin}>linkedin.com/in/nhatquang1302</a>
      </p>
      <p>
        GitHub: <a href={siteConfig.github}>github.com/quangvo1302</a>
      </p>
      <p>Hiện làm việc tại TP. Hồ Chí Minh.</p>
    </article>
  );
}
