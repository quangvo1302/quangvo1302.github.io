import Link from "next/link";
import type { ProjectCategory } from "@/data/types";

const CTA_COPY: Record<ProjectCategory, { heading: string; body: string }> = {
  ci: {
    heading: "Bạn đang gặp bài toán tương tự tại nhà máy?",
    body: "Có thể gửi thông tin để cùng trao đổi về phương án kỹ thuật phù hợp."
  },
  si: {
    heading: "Bạn đang gặp bài toán tương tự tại nhà máy?",
    body: "Có thể gửi thông tin để cùng trao đổi về phương án kỹ thuật phù hợp."
  },
  personal: {
    heading: "Có câu hỏi về cách tiếp cận trong dự án này?",
    body: "Có thể gửi thông tin nếu bạn muốn trao đổi thêm."
  }
};

export function CaseStudyCta({ category }: { category: ProjectCategory }) {
  const copy = CTA_COPY[category];

  return (
    <div className="wayfinding-card cta-box">
      <h4>{copy.heading}</h4>
      <p>{copy.body}</p>
      <Link className="action-link" href="/contact/">
        Trao đổi bài toán thực tế →
      </Link>
    </div>
  );
}
