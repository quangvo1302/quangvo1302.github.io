import { getTermLabel } from "./labels";
import type { Post, PostTaxonomy } from "./types";

export type TaxonomyTerm = {
  term: string;
  label: string;
  posts: readonly Post[];
};

export const posts: readonly Post[] = [
  {
    slug: "bokaro-steel-etap-scada",
    title: "Từ sổ tay ghi chép tay đến trung tâm chống rã lưới",
    seoTitle:
      "Từ sổ tay ghi chép tay đến trung tâm chống rã lưới — Võ Nhật Quang",
    description:
      "Case study Bokaro Steel Plant/SAIL: xây lại hạ tầng truyền thông vật lý và tích hợp ETAP eSCADA để chống rã lưới — Ranh giới hệ thống.",
    publishDate: "2026-08-31T08:05:00+07:00",
    series: "ranh-gioi-he-thong",
    seriesTitle: "Ranh giới hệ thống",
    vendors: ["etap"],
    industries: ["power", "manufacturing"],
    pillars: ["tich-hop-da-nen-tang"],
    summary:
      "Nhà máy thép Bokaro/SAIL xây lại lớp truyền thông vật lý trước khi tính đến phần mềm giám sát.",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Trung tâm Giám sát và Điều khiển Phụ tải (SLCC) của nhà máy thép Bokaro thuộc SAIL vận hành một mạng lưới điện phục vụ các lò luyện thép — nhưng toàn bộ mạng truyền thông vẫn là phi số, không dự phòng. Báo cáo phụ tải được ghi tay vào sổ nhật ký. Cảnh báo từ các trạm biến áp phụ trợ không được tập trung về đâu, khiến việc truy tìm nguyên nhân gốc rễ mỗi khi mất điện dòng lò gần như không thể. Và vì không có thuật toán giám sát nhu cầu công suất cực đại theo thời gian thực, nhà máy liên tục bị phạt vì vượt công suất cam kết với lưới điện quốc gia.`
        ]
      },
      {
        heading: "Cách xử lý",
        paragraphs: [
          `Đây không phải một dự án "nâng cấp phần mềm" — nó là một dự án xây lại toàn bộ lớp truyền thông vật lý trước, rồi mới tính đến phần mềm. Đội kỹ sư kéo một mạng cáp quang dự phòng tốc độ cao xuyên toàn nhà máy, nối các thiết bị đo lường, RTU và thiết bị đóng cắt về trung tâm — thay thế hoàn toàn việc ghi chép tay bằng luồng dữ liệu OPC DA thời gian thực. Trên nền tảng đó, ETAP eSCADA được dùng để tích hợp hơn 27.000 tag dữ liệu và dựng hơn 400 trang giao diện giám sát chi tiết đến từng máy biến áp — cùng với một thuật toán giám sát nhu cầu cực đại chạy trên mô hình bản sao số điện lực, tự động cảnh báo trước khi nhà máy vượt ngưỡng công suất.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Không chỉ là "hiện đại hóa" — mà là tránh được các khoản phạt vượt tải vốn đã xảy ra thường xuyên trước đó, và có thêm khả năng phát lại sự kiện (event playback) để truy nguyên chính xác nguyên nhân mỗi lần rơ-le tác động.`
        ]
      }
    ],
    sourceNote:
      `Nguồn: "How Bokaro Steel Plant modernized its supervisory load control center using ETAP SCADA", ETAP.`,
    integratorView:
      `Case này là lời nhắc rằng "tích hợp" đôi khi không nằm ở tầng phần mềm — mà ở tầng hạ tầng truyền dẫn bên dưới. Một hệ thống giám sát dù thông minh đến đâu cũng vô nghĩa nếu lớp mạng vật lý bên dưới nó không đáng tin cậy. Đây là thứ dễ bị bỏ qua khi so sánh các nền tảng phần mềm với nhau.`
  },
  {
    slug: "scada-30-ngay-avadine",
    title: "30 ngày để thay cả bộ não SCADA mà không được chớp mắt",
    seoTitle:
      "30 ngày để thay cả bộ não SCADA mà không được chớp mắt — Võ Nhật Quang",
    description:
      "Case study Warren E&P/Avadine: di trú SCADA từ Wonderware sang Ignition trong 30 ngày, không mất dữ liệu thời gian thực — Ranh giới hệ thống.",
    publishDate: "2026-08-31T08:00:00+07:00",
    series: "ranh-gioi-he-thong",
    seriesTitle: "Ranh giới hệ thống",
    vendors: ["wonderware", "ignition"],
    industries: ["oil-gas"],
    pillars: ["tich-hop-da-nen-tang"],
    summary:
      "Warren E&P chuyển từ Wonderware sang Ignition trong 30 ngày, không được ngừng dữ liệu một phút nào.",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Warren E&P vận hành một cụm giếng dầu liên tục ở Nam California với hệ thống SCADA dựng trên nền Wonderware — cấu trúc dựa vào một chuỗi phụ thuộc dày đặc: máy chủ Galaxy trung tâm, các DAServer, và phần mềm trung gian KEPServerEX để kéo dữ liệu từ PLC ngoài hiện trường. Vấn đề không nằm ở bất kỳ thành phần nào riêng lẻ, mà ở chỗ toàn bộ chuỗi này là một điểm nghẽn lỗi duy nhất: chỉ cần cơ sở dữ liệu Galaxy trung tâm gặp sự cố, phòng điều khiển lập tức "mù" hoàn toàn trước thông số giếng khoan đang chảy. Chi phí license tính theo từng tag và từng máy trạm cũng tăng liên tục khi mạng lưới giếng mở rộng.`,
          `Quyết định được đưa ra: chuyển sang Ignition — nhưng với một ràng buộc gần như phi lý: 30 ngày, và không được phép mất một phút hiển thị dữ liệu thời gian thực nào, vì cơ sở vận hành liên tục 24/7.`
        ]
      },
      {
        heading: "Cách xử lý",
        paragraphs: [
          `Đơn vị tích hợp (Avadine) không thử "vá" hệ thống cũ mà xây song song một hệ thống mới hoàn chỉnh trong Ignition trước — cấu trúc tag, giao diện, tất cả — trong khi hệ thống cũ vẫn chạy. Nhờ chính sách license không giới hạn tag của Ignition, họ dùng UDT (User-Defined Template) để chuẩn hóa dữ liệu hiện trường khớp với sơ đồ vật lý từng giếng. Việc cắt chuyển từng PLC sang hệ mới được làm cuốn chiếu, mỗi lần một phân đoạn, đúng vào khung bảo trì định kỳ — không có một "ngày Big Bang" chuyển đổi toàn bộ.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Đúng 30 ngày, không mất dữ liệu thời gian thực, cảnh báo giả giảm hẳn sau khi rà soát lại toàn bộ logic cảnh báo, và điểm nghẽn lỗi đơn (single point of failure) của kiến trúc cũ bị loại bỏ hoàn toàn.`
        ]
      }
    ],
    sourceNote:
      `Nguồn: "Modernizing Mission-Critical SCADA in 30 Days: Wonderware to Ignition Migration", Avadine.`,
    integratorView:
      `Điều đáng chú ý ở case này không phải là "Ignition tốt hơn Wonderware" — mà là chiến lược cắt chuyển cuốn chiếu thay vì thay toàn bộ cùng lúc. Đây là bài học áp dụng được bất kể đang đứng ở phía nền tảng nào: khi hệ thống không được phép dừng, rủi ro lớn nhất không phải là chọn sai công nghệ, mà là chọn sai cách chuyển đổi.`
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsNewestFirst(): Post[] {
  return [...posts].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function getPostsBySeries(series: string): Post[] {
  return posts
    .filter((post) => post.series === series)
    .sort((a, b) => a.publishDate.localeCompare(b.publishDate));
}

export function getPostTerms(
  post: Post,
  taxonomy: PostTaxonomy
): readonly string[] {
  if (taxonomy === "series") return [post.series];
  return post[taxonomy];
}

export function getPostsByTaxonomy(
  taxonomy: PostTaxonomy,
  term: string
): Post[] {
  return posts
    .filter((post) => getPostTerms(post, taxonomy).includes(term))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function getTermsForTaxonomy(taxonomy: PostTaxonomy): TaxonomyTerm[] {
  const terms = new Set<string>();
  for (const post of posts) {
    for (const term of getPostTerms(post, taxonomy)) {
      terms.add(term);
    }
  }

  return [...terms]
    .map((term) => ({
      term,
      label: taxonomy === "series" ? getSeriesTitle(term) : getTermLabel(term),
      posts: getPostsByTaxonomy(taxonomy, term)
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "vi"));
}

export function getSeriesTitle(series: string): string {
  return posts.find((post) => post.series === series)?.seriesTitle ?? getTermLabel(series);
}
