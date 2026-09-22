import { SignatureTrace } from "@/components/animation";
import { ContactForm } from "@/components/ContactForm";
import { ContactList } from "@/components/ContactList";
import { contactPage } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: contactPage.seoTitle,
  description: contactPage.description,
  path: contactPage.path
});

export default function ContactPage() {
  return (
    <article className="wrap">
      <header className="page-hero">
        <h1>{contactPage.title}</h1>
        <SignatureTrace variant="minimal" />
      </header>
      <ContactList />
      <h2>Gửi yêu cầu trực tiếp</h2>
      <ContactForm />
    </article>
  );
}
