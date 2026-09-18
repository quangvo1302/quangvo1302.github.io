import { siteConfig } from "@/data/site";

export function ContactList() {
  return (
    <ul className="contact-list">
      <li>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </li>
      <li>
        <strong>LinkedIn:</strong>{" "}
        <a href={siteConfig.linkedin}>linkedin.com/in/nhatquang1302</a>
      </li>
      <li>
        <strong>GitHub:</strong>{" "}
        <a href={siteConfig.github}>github.com/quangvo1302</a>
      </li>
      <li>
        <strong>Địa điểm:</strong> TP. Hồ Chí Minh
      </li>
    </ul>
  );
}
