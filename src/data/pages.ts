import type { ContentSection, StaticPage } from "./types";

export const homePage = {
  title: "Võ Nhật Quang",
  seoTitle:
    "Võ Nhật Quang — Tích hợp OT-IT & Tự động hoá công nghiệp",
  description:
    "Võ Nhật Quang — Technical Manager tại ESEC. Tích hợp OT-IT, tự động hoá đa nền tảng Siemens, Schneider, Ignition, ETAP, OSIsoft PI.",
  path: "/",
  eyebrow: "Kỹ sư trưởng · Tích hợp hệ thống",
  role: "Technical Manager · EAST SEA Energy Environment (ESEC)",
  chips: [
    "Tích hợp OT-IT",
    "Siemens",
    "Schneider",
    "Ignition",
    "ETAP",
    "OSIsoft PI",
    "SCADA/OEE"
  ],
  featuredProjectSlugs: [
    "ics-upgrade-wincc-migration",
    "coal-management-turbine-performance",
    "oee-expert"
  ],
  paragraphs: [
    "Tám năm làm tự động hoá công nghiệp, năm năm rưỡi trong đó ở vai trò dẫn dắt kỹ thuật. Hiện quản lý bốn đội chuyên môn tại ESEC: C&I, Chuyển đổi số, ETAP Automation và ETAP Service.",
    "Công việc trải từ lập trình PLC và thiết kế SCADA ở hiện trường, tới kiến trúc lớp dữ liệu vận hành, và tới việc ngồi với giám đốc nhà máy để thẩm định xem một khoản đầu tư tự động hoá có đáng chi hay không. Chín dự án dưới đây là các bài toán cụ thể đã đi qua, ở nhà máy vật liệu xây dựng, thực phẩm, nông nghiệp, nhiệt điện và xử lý nước thải."
  ]
} as const;

export const aboutPage: StaticPage & {
  intro: string;
  sections: readonly ContentSection[];
} = {
  title: "Giới thiệu",
  seoTitle:
    "Võ Nhật Quang — Technical Manager, tự động hoá công nghiệp",
  description:
    "Võ Nhật Quang, Technical Manager tại ESEC. Tám năm tự động hoá công nghiệp, quản lý bốn đội kỹ thuật.",
  path: "/about/",
  intro:
    "Tôi là Võ Nhật Quang, viết không dấu là Vo Nhat Quang. Hiện làm Technical Manager tại EAST SEA Energy Environment (ESEC), một đơn vị tích hợp hệ thống tự động hoá công nghiệp tại TP. Hồ Chí Minh.",
  sections: [
    {
      heading: "Kinh nghiệm",
      paragraphs: [
        "Tám năm trong tự động hoá công nghiệp, năm năm rưỡi trong đó ở vai trò dẫn dắt kỹ thuật.",
        "Bắt đầu năm 2018 với vai trò kỹ sư tự động hoá: lập trình PLC, thiết kế màn hình vận hành, khảo sát hiện trường và chạy thử tại chỗ. Từ 2021 làm trưởng nhóm dự án, phụ trách nhóm năm tới sáu kỹ sư, giao việc và theo dõi tiến độ, kèm cặp kỹ sư mới, đồng thời hỗ trợ bộ phận kinh doanh về mặt khảo sát và giải pháp kỹ thuật. Từ đầu năm 2025 làm Technical Manager, quản lý bốn đội chuyên môn với gần hai mươi người: C&I, Chuyển đổi số, ETAP Automation và ETAP Service.",
        "Việc tôi làm được trong quãng đó, nói theo năng lực chứ không theo tên dự án: kiến trúc và lập trình hệ PLC/SCADA trên nền Siemens và Schneider; thiết kế lớp dữ liệu vận hành trên Ignition và OSIsoft PI; giám sát và điều khiển hệ điện thời gian thực trên nền tảng ETAP RT; quản lý chạy thử và phối hợp FAT/SAT cho các dây chuyền sản xuất liên tục; xây dựng bộ tiêu chí đánh giá hiệu quả cho phòng kỹ thuật; và thẩm định đề xuất đầu tư tự động hoá trước khi khách hàng duyệt chi.",
        "Phần cuối cùng là phần ít giống công việc kỹ sư nhất, và cũng là phần tôi làm nhiều nhất gần đây. Đi khảo sát hiện trường cùng giám đốc nhà máy, nghe họ nói vấn đề của họ, rồi nói lại được bằng ngôn ngữ kỹ thuật cho đội mình và bằng ngôn ngữ chi phí cho bộ phận kinh doanh."
      ]
    },
    {
      heading: "Cách làm việc",
      paragraphs: [
        "Tôi làm việc trên nhiều nền tảng cùng lúc: Siemens, Schneider, Ignition, ETAP, OSIsoft PI. Điều đó đến từ đặc thù của đơn vị tích hợp, mỗi khách hàng một hệ khác nhau, và nó định hình cách tôi chọn giải pháp. Tôi không chọn nền tảng trước rồi tìm cách áp vào bài toán.",
        "Tôi làm việc dựa trên số liệu, không dựa trên ước lượng. Một hệ thống nói là chạy tốt thì phải chỉ ra được chỗ nào cho thấy nó chạy tốt.",
        "Với quy trình và tài liệu của khách hàng, mặc định của tôi là công cụ uốn theo họ. Quy trình sản xuất là kiến thức của nhà máy, tích luỹ qua nhiều năm vận hành. Bắt họ đổi cách làm cho vừa phần mềm thường là cách nhanh nhất để hệ mới bị bỏ không sau khi bàn giao.",
        "Tôi kết nối được với nhiều phía. Nói chuyện với kinh doanh, với khách hàng, và với kỹ sư trong đội bằng ba thứ ngôn ngữ khác nhau về cùng một hệ thống. Và tôi thích kèm kỹ sư mới, phần vì đó là cách nhanh nhất để tự kiểm tra xem mình có thực sự hiểu thứ mình đang làm hay không."
      ]
    },
    {
      heading: "Định hướng",
      paragraphs: [
        "Tôi đang đi về phía tư vấn và thiết kế giải pháp chuyển đổi số cho nhà máy, thay vì đi sâu thành chuyên gia của một hãng duy nhất.",
        "Lý do nằm ở chỗ những bài toán đáng giá nhất tôi gặp trong vài năm gần đây đều không nằm gọn trong một hãng: đưa dữ liệu từ nhiều nguồn khác nhau về một mối, ghép lớp điều khiển với lớp quản lý, và trả lời câu hỏi một khoản đầu tư tự động hoá có đáng chi hay không. Những bài đó cần biết đủ rộng để so sánh, và biết đủ sâu để không bị bán cho thứ không cần."
      ]
    },
    {
      heading: "Học vấn và chứng chỉ",
      paragraphs: [
        "Thạc sĩ Kỹ thuật Điều khiển và Tự động hoá, Đại học Bách khoa TP. Hồ Chí Minh, 2018 đến 2021. Kỹ sư cùng ngành, cùng trường, 2013 đến 2018.",
        "Khoá SITRAIN của Siemens về SIMATIC WinCC V8, hệ thống. Đào tạo thực hành nền tảng ETAP Real-Time tại Hoa Kỳ, phục vụ mảng giám sát và điều khiển hệ điện thời gian thực mà đơn vị tôi triển khai cho khách hàng."
      ]
    }
  ]
};

export const contactPage: StaticPage = {
  title: "Liên hệ",
  seoTitle: "Liên hệ Võ Nhật Quang — kỹ sư tự động hoá",
  description: "Liên hệ Võ Nhật Quang qua email hoặc LinkedIn.",
  path: "/contact/"
};

export const projectsIndexPage: StaticPage & { intro: string } = {
  title: "Dự án",
  seoTitle: "Dự án tự động hoá và tích hợp hệ thống — Võ Nhật Quang",
  description:
    "Chín dự án tự động hoá và tích hợp hệ thống của Võ Nhật Quang, chia theo Điều khiển & Đo lường, Tích hợp hệ thống, và dự án cá nhân.",
  path: "/projects/",
  intro:
    "Chín dự án, nhóm theo năng lực chứ không theo thời gian. Mỗi dự án có một trang riêng trình bày theo cùng một bố cục: vai trò và phạm vi, bài toán, cách tiếp cận, bàn giao, kết quả. Dòng thời gian sự nghiệp nằm ở trang Giới thiệu."
};

export const postsIndexPage: StaticPage & { intro: string } = {
  title: "Bài viết",
  seoTitle: "Ghi chép về tích hợp hệ thống tự động hoá — Võ Nhật Quang",
  description:
    "Phân tích case study thực tế về tích hợp đa nền tảng trong tự động hoá công nghiệp — Siemens, Schneider, Ignition, AVEVA, ETAP, OSIsoft PI.",
  path: "/posts/",
  intro:
    "Loạt bài phân tích case study thực tế, công bố công khai bởi bên thứ ba, về những điểm xung đột khi tích hợp nhiều nền tảng tự động hoá với nhau. Không phải dự án của tôi — mỗi bài đều ghi rõ nguồn."
};
