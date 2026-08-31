import { projectCategorySections } from "./labels";
import type { CaseStudy, ProjectCategory } from "./types";

export const featuredProjectSlugs = [
  "ics-upgrade-wincc-migration",
  "coal-management-turbine-performance",
  "oee-expert"
] as const;

export const projects: readonly CaseStudy[] = [
  {
    slug: "bom-digitalization",
    title: "Số hoá quy trình chuyển giao kế hoạch sản xuất",
    seoTitle: "Số hoá quy trình BOM, Python trên nền Ignition — Võ Nhật Quang",
    description:
      "Đưa việc chuyển giao kế hoạch sản xuất từ email và file Excel lên nền tảng trung tâm.",
    descriptor: "Nhà máy thực phẩm",
    category: "si",
    order: 2,
    role: "Quản lý và cố vấn kỹ thuật",
    period: "2021 – 2024",
    scale: "Quy trình liên phòng ban, từ kế hoạch tới vận hành",
    industry: "Nhà máy thực phẩm",
    vendors: ["Ignition", "MS SQL"],
    stack: ["Ignition", "Python", "MS SQL"],
    diagram: "bom-digitalization.svg",
    outcomeBasis: "qualitative",
    summary:
      "Đưa việc chuyển giao kế hoạch sản xuất từ email và file Excel lên nền tảng trung tâm.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Ở nhà máy Nam Duong, thông tin từ bộ phận kế hoạch được chuyển tới các phòng ban qua email, kèm tài liệu Excel đính kèm.`,
          `Cách đó chạy được, nhưng quy trình bị rời rạc và khó kiểm soát. Mỗi lần chuyển giao là một sự kiện độc lập nằm trong hộp thư của từng người, không phải một bước trong một luồng có thể theo dõi.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Bối cảnh quyết định phạm vi. Nhà máy đã có định hướng dùng Ignition làm nền tảng trung tâm, và đây là dự án đầu tiên chạy trên nền tảng đó. Nên mục tiêu không dừng ở chỗ tự động hoá một thao tác xuất file. Mục tiêu là đưa hẳn việc chuyển giao kế hoạch sản xuất tới người vận hành lên nền tảng, tự động và có kiểm soát.`,
          `Ràng buộc lớn nhất nằm ở tài liệu. Tài liệu BOM của nhà máy không thể đổi định dạng cho vừa với các hàm mặc định của Ignition. Đây là tài liệu của bộ phận kế hoạch, gắn với cách họ làm việc, không phải thứ chỉnh lại được để phần mềm đọc cho tiện.`,
          `Nên phần công việc đi theo hướng ngược lại: viết script riêng để Ignition đọc được đúng định dạng đang có, và can thiệp ở lớp SQL để quy hoạch lại cấu trúc dữ liệu cho phù hợp với luồng mới. Công cụ uốn theo tài liệu, không phải tài liệu uốn theo công cụ.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Script tuỳ chỉnh chạy trên nền Ignition, đọc trực tiếp định dạng tài liệu BOM hiện hữu của nhà máy thay vì yêu cầu đổi định dạng.`,
          `Cấu trúc dữ liệu trên MS SQL, quy hoạch lại để phục vụ luồng chuyển giao mới.`,
          `Luồng chuyển giao kế hoạch sản xuất từ bộ phận kế hoạch tới người vận hành, chạy tự động và theo dõi được.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Việc chuyển giao kế hoạch chuyển từ email kèm file sang một luồng nằm trên nền tảng, nên theo dõi được thay vì nằm rải trong hộp thư từng người.`,
          `Thao tác xuất định mức thủ công được bỏ khỏi công việc hằng ngày của bộ phận kế hoạch và bộ phận sản xuất.`,
          `Đây cũng là dự án đầu tiên chạy trên Ignition tại nhà máy, mở đường cho việc dùng nền tảng này làm chỗ tập trung cho các bước sau.`
        ]
      }
    ]
  },
  {
    slug: "coal-management-turbine-performance",
    title: "Ứng dụng quản lý than trên nền dữ liệu vận hành",
    seoTitle: "Ứng dụng C# trên OSIsoft PI, nhà máy nhiệt điện — Võ Nhật Quang",
    description:
      "Viết lại ứng dụng quản lý than để chạy trên nền PI, thay cho một phần mềm rời không tích hợp được.",
    descriptor: "Nhà máy nhiệt điện than",
    category: "si",
    order: 1,
    role: "Kỹ sư phát triển ứng dụng, trong dự án tích hợp dữ liệu trên nền PI",
    period: "2021 – 2024",
    scale: "Một cấu phần của lớp dữ liệu vận hành toàn nhà máy",
    industry: "Nhà máy nhiệt điện than",
    vendors: ["OSIsoft PI", "DCS"],
    stack: ["OSIsoft PI", "C#", "DCS"],
    diagram: "coal-management-turbine-performance.svg",
    outcomeBasis: "qualitative",
    summary:
      "Viết lại ứng dụng quản lý than để chạy trên nền PI, thay cho một phần mềm rời không tích hợp được.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Dự án ở EVNGenco 3 không phải là làm một phần mềm. Nó là dựng một lớp dữ liệu vận hành tập trung trên nền OSIsoft PI, gom dữ liệu từ nhiều nguồn khác nhau của nhà máy: từ DCS, và cả từ những chỗ vẫn phải nhập tay. Mục tiêu là quy về một mối để quản lý và kiểm soát.`,
          `Quản lý than là một cấu phần trong đó. Trước dự án, việc theo dõi than từ khi tàu về được làm qua các biểu mẫu cùng một phần mềm riêng.`,
          `Phần mềm đó chạy được. Vấn đề là nó không tích hợp được với PI. Nghĩa là dữ liệu than sẽ nằm ngoài đúng cái hệ thống được dựng lên để không còn dữ liệu nằm ngoài.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Khi một công cụ đang chạy tốt nhưng không ghép được vào kiến trúc đích, chỉ có hai đường: bắc cầu cho nó, hoặc làm lại. Đội ngũ trao đổi với khách hàng và thống nhất chọn đường thứ hai, xây dựng lại ứng dụng quản lý để nó nằm thẳng trên nền PI.`,
          `Đây là lựa chọn tốn công hơn ở thời điểm quyết định. Đổi lại, nó không để lại một lớp trung gian phải nuôi về sau, và dữ liệu than đi vào cùng một nơi với phần còn lại của nhà máy chứ không phải được đồng bộ sang định kỳ.`,
          `Tôi tham gia với vai trò kỹ sư phát triển, viết ứng dụng bằng C# trên nền PI. Ứng dụng quản lý tồn than, và tính hiệu năng tua-bin từ dữ liệu vận hành sẵn có trong hệ.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Ứng dụng quản lý than viết bằng C#, chạy trên nền OSIsoft PI, thay thế phần mềm rời trước đó và thay các biểu mẫu theo dõi thủ công.`,
          `Phần tính hiệu năng tua-bin dựa trên dữ liệu đã có trong PI.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Dữ liệu than không còn đứng ngoài lớp dữ liệu tập trung của nhà máy. Nó nằm chung nơi với dữ liệu từ DCS và các nguồn nhập tay khác, nên xem và đối chiếu được cùng lúc thay vì phải mở hai hệ thống rồi tự ghép bằng mắt.`,
          `Việc quản lý tồn than và tính hiệu năng tua-bin chuyển từ biểu mẫu sang tính trực tiếp trên dữ liệu vận hành. Nhà máy linh hoạt hơn trong điều độ, và chi phí lưu kho than giảm xuống.`
        ]
      }
    ]
  },
  {
    slug: "heat-recovery-autoclave",
    title: "Hệ thu hồi nhiệt autoclave, line 1 và 2",
    seoTitle: "Hệ thu hồi nhiệt autoclave, Siemens S7-1500 — Võ Nhật Quang",
    description:
      "Chuyển vận hành tay sang bán tự động, vượt mục tiêu tiết kiệm chi phí đặt ra cho dự án.",
    descriptor: "Nhà máy vật liệu xây dựng",
    category: "ci",
    order: 2,
    role: "Site Manager kiêm cố vấn kỹ thuật",
    period: "2021 – 2024",
    scale: "Hai line sản xuất",
    industry: "Nhà máy vật liệu xây dựng",
    vendors: ["Siemens"],
    stack: ["Siemens S7-1500", "TIA Portal V17"],
    diagram: "heat-recovery-autoclave.svg",
    outcomeBasis: "target",
    summary:
      "Chuyển vận hành tay sang bán tự động, vượt mục tiêu tiết kiệm chi phí đặt ra cho dự án.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Trước khi có hệ thu hồi, cụm autoclave của Hiep Phu Corporation vận hành hoàn toàn bằng tay. Người vận hành theo dõi qua các bộ đo lường và hiển thị đơn lẻ gắn trên mặt tủ, mỗi đồng hồ một thông số, không có chỗ nào nhìn được toàn cảnh chu trình.`,
          `Ở giai đoạn xả áp, toàn bộ hơi và nhiệt trong lò được xả ra môi trường qua hệ khử mùi. Đó là nhiệt đã trả tiền để tạo ra, dùng xong một lần rồi bỏ. Trong khi ở ngay cạnh đó, một lò khác đang ở giai đoạn gia nhiệt và đang tiêu thụ hơi mới từ nồi hơi.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Ý tưởng thì hiển nhiên: lấy hơi của lò đang xả đưa sang lò đang cần gia nhiệt. Cái khó nằm ở hai chỗ khác.`,
          `Thứ nhất là thu được bao nhiêu. Áp suất trong lò giảm dần suốt quá trình xả, nên lượng nhiệt còn dùng được cũng giảm theo. Hệ được thiết kế để tận dụng hơi trong dải từ 9 xuống 3 bar đưa sang lò khác, phần còn lại dưới ngưỡng đó mới xả ra bộ khử mùi như trước.`,
          `Thứ hai, và đây mới là chỗ dễ hỏng, là việc rút hơi ra để thu hồi chính là can thiệp vào đường áp suất của lò đang xả. Chu trình autoclave có ba đoạn phải giữ đúng: tăng áp, giữ áp, hạ áp. Nếu thu hồi làm đường hạ áp gấp khúc thì chất lượng mẻ bị ảnh hưởng, và khi đó tiết kiệm được bao nhiêu cũng không còn ý nghĩa. Nên phần điều khiển lượng hơi phải làm sao cho cả ba đoạn diễn ra mịn nhất có thể, chứ không phải thu càng nhiều càng tốt.`,
          `Toàn bộ được lập trình trên Siemens S7-1500 bằng TIA Portal V17, cho cả hai line.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Chương trình điều khiển chu trình autoclave trên S7-1500, gồm phần điều tiết lượng hơi cho ba đoạn tăng, giữ và hạ áp.`,
          `Logic thu hồi ghép giữa lò đang xả và lò đang gia nhiệt, kèm ngưỡng chuyển sang xả ra bộ khử mùi.`,
          `Chuyển toàn bộ cụm từ vận hành tay sang bán tự động trên cả hai line.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `So với mục tiêu tiết kiệm chi phí gia nhiệt nồi hơi mà dự án đặt ra ban đầu, hệ đạt 140%.`,
          `Ngoài phần chi phí, việc chuyển từ tay sang bán tự động làm nhà máy linh hoạt hơn trong điều độ, vì chu trình không còn phụ thuộc vào việc người vận hành có mặt đúng lúc để thao tác từng bước.`
        ]
      }
    ]
  },
  {
    slug: "humidity-control-system",
    title: "Hệ điều khiển độ ẩm băng tải",
    seoTitle: "Hệ điều khiển độ ẩm, S7-300 và HMI KTP 1200 — Võ Nhật Quang",
    description:
      "Điều khiển lực hút chân không dưới băng tải theo độ ẩm, thay cho đánh giá bằng mắt.",
    descriptor: "Nhà máy vật liệu xây dựng",
    category: "ci",
    order: 3,
    role: "Lập trình PLC và thiết kế HMI, ba trên bốn line",
    period: "2018 – 2020",
    scale: "Ba line sản xuất",
    industry: "Nhà máy vật liệu xây dựng",
    vendors: ["Siemens"],
    stack: [
      "Siemens S7-300",
      "HMI KTP 1200 Comfort",
      "TIA Portal V13",
      "Biến tần"
    ],
    diagram: "humidity-control-system.svg",
    outcomeBasis: "qualitative",
    summary:
      "Điều khiển lực hút chân không dưới băng tải theo độ ẩm, thay cho đánh giá bằng mắt.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Độ ẩm của liệu trên băng tải không được giám sát liên tục. Người vận hành nhìn bằng mắt và dựa vào kinh nghiệm để đánh giá.`,
          `Cách đó hoạt động được cho tới khi sai. Băng tải quá ướt hoặc quá khô thì tấm liệu bị vỡ. Nghĩa là chất lượng của cả mẻ phụ thuộc vào việc đúng người có mặt đúng ca, và vào việc người đó nhìn ra sự thay đổi trước khi nó thành phế phẩm.`,
          `Nhà máy của Hiep Phu Corporation có bốn line, trong đó ba line chạy thường xuyên nhất.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Đại lượng thực sự điều chỉnh được ở đây không phải độ ẩm mà là lực hút của hệ hút chân không đặt dưới băng tải. Hút mạnh hơn thì liệu khô hơn. Nên bài toán trở thành: đo độ ẩm, rồi lấy giá trị đó điều khiển biến tần của quạt hút.`,
          `Chính điều này quyết định phạm vi phần cứng. Hệ phải can thiệp vào vòng điều khiển biến tần đang chạy, mà vòng đó nằm trong PLC hiện hữu của line. Không thể dựng một bộ điều khiển riêng đứng bên cạnh rồi ra lệnh vào, vì như vậy là chia đôi quyền điều khiển trên cùng một thiết bị. Nên phần logic mới được tích hợp thẳng vào S7-300 sẵn có, chứ không phải thay PLC.`,
          `Phần người vận hành nhìn thấy thì làm mới hoàn toàn. Màn hình KTP 1200 Comfort được thiết kế lại trên TIA Portal V13, đưa độ ẩm và trạng thái hút lên một chỗ, thay cho việc đánh giá bằng mắt trước đó.`,
          `Triển khai trên ba line chạy thường xuyên nhất trong bốn line của nhà máy.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Phần logic điều khiển độ ẩm tích hợp vào chương trình S7-300 đang chạy, liên động với vòng điều khiển biến tần của hệ hút chân không.`,
          `Màn hình vận hành KTP 1200 Comfort thiết kế mới trên TIA Portal V13 cho ba line.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Việc chỉnh lực hút chuyển từ đánh giá bằng mắt sang bám theo giá trị đo, nên các line không còn phụ thuộc vào kinh nghiệm của từng ca vận hành để giữ liệu không quá ướt hoặc quá khô.`,
          `Ba line chuyển từ vận hành tay sang bán tự động, và điện năng tiêu thụ của nhà máy giảm xuống.`
        ]
      }
    ]
  },
  {
    slug: "ics-upgrade-wincc-migration",
    title: "Nâng cấp hệ điều khiển ICS, bốn giai đoạn",
    seoTitle: "Nâng cấp SCADA WinCC và Modicon M580 — Võ Nhật Quang",
    description:
      "Chuyển Quantum sang Modicon M580 rồi nâng WinCC lên V7.5 SP2, chuẩn hoá toàn bộ trạm vận hành.",
    descriptor: "Doanh nghiệp nông nghiệp – thực phẩm",
    category: "ci",
    order: 1,
    role: "Giai đoạn 1: kỹ sư lập trình. Giai đoạn 2-4: trưởng nhóm lập trình",
    period: "2018 – 2024",
    scale: "Hệ điều khiển chính của nhà máy, toàn bộ trạm vận hành",
    industry: "Doanh nghiệp nông nghiệp – thực phẩm",
    vendors: ["Schneider Electric", "Siemens"],
    stack: [
      "Modicon M580",
      "Quantum PLC",
      "WinCC V7.0 SP2",
      "WinCC V7.5 SP2",
      "Siemens",
      "Schneider Electric"
    ],
    diagram: "ics-upgrade-wincc-migration.svg",
    outcomeBasis: "qualitative",
    summary:
      "Chuyển Quantum sang Modicon M580 rồi nâng WinCC lên V7.5 SP2, chuẩn hoá toàn bộ trạm vận hành.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Hệ điều khiển chính của nhà máy Vietnam Agribusiness Limited chạy trên PLC Quantum. Đến thời điểm này Quantum đã dừng hỗ trợ từ hãng và không còn nguồn hàng thay thế. Một hỏng hóc phần cứng khi đó không còn là chuyện sửa trong ngày.`,
          `Lớp giám sát phía trên là WinCC V7.0 của Siemens. Nghĩa là nhà máy vận hành một hệ hai hãng: điều khiển Schneider bên dưới, giám sát Siemens bên trên. Bản thân WinCC V7.0 cũng đã cũ và chạy chậm, và nhà máy muốn nâng.`,
          `Hai vấn đề khác nhau về mức độ cấp bách. Một bên là rủi ro dừng máy dài ngày vì không có vật tư. Bên kia là hiệu năng.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Thứ tự làm được quyết định trước tiên: nâng lên M580 đi trước, hệ SCADA đi sau. Chừng nào Quantum còn nằm trong dây chuyền thì một hỏng hóc phần cứng vẫn có thể dừng nhà máy dài ngày, và nâng SCADA trước không giải quyết được chuyện đó. Đổi PLC trước vừa gỡ được rủi ro tồn kho, vừa đưa nhà máy về một nền tảng còn được sản xuất nên có hàng dự phòng kịp thời.`,
          `Quyết định thứ hai là giữ nguyên WinCC ở lớp giám sát thay vì chuyển tất cả sang nền tảng Schneider cho đồng bộ một hãng. Về mặt kỹ thuật thì chuyển được. Nhưng đổi SCADA nghĩa là đổi toàn bộ màn hình mà người vận hành đã quen tay, kéo theo phải viết lại quy trình vận hành và đào tạo lại. Chi phí đó không nằm ở phần mềm. Nó nằm ở thời gian, ở nguồn lực, và ở rủi ro thao tác sai trong giai đoạn chuyển giao. Hệ hiện hữu đang là WinCC, nên giữ WinCC.`,
          `Phần thi công bị ràng buộc bởi lịch dừng máy. Mỗi lần thay chỉ có cửa sổ hai đến ba tiếng, và cửa sổ đó không phải lúc nào cũng có. Trong khoảng đó phải tháo Quantum, lắp M580, rồi kiểm tra tính tương thích với phần còn lại của hệ. Nếu không đạt thì trả hệ về cấu hình cũ ngay trong cùng cửa sổ để nhà máy chạy tiếp, và làm lại vào lần dừng sau. Mỗi bước thay vì vậy đều phải chuẩn bị sẵn đường lui trước khi bắt đầu, chứ không phải xử lý khi đã hỏng.`,
          `Giai đoạn sau, khi lớp điều khiển đã ổn định, mới nâng WinCC từ V7.0 SP2 lên V7.5 SP2 và chuẩn hoá lại các trạm vận hành.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Chương trình M580 cho các phần đã chuyển đổi của hệ điều khiển chính, giữ nguyên giao tiếp với lớp WinCC hiện hữu.`,
          `Quy trình thay thế theo cửa sổ dừng máy, gồm bước kiểm tra tương thích và phương án quay lui trong cùng cửa sổ.`,
          `Dự án WinCC V7.5 SP2 sau nâng cấp, và cấu hình trạm vận hành đã chuẩn hoá dùng chung cho toàn bộ các trạm.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Hệ điều khiển ổn định hơn sau khi ra khỏi nền tảng đã hết hỗ trợ. Việc mua vật tư thay thế trở lại bình thường, vì M580 vẫn đang được sản xuất.`,
          `Ở lớp giám sát, sau khi chuẩn hoá, các trạm vận hành dùng chung một cấu hình và chất lượng vòng điều khiển được cải thiện.`,
          `Vai trò của tôi thay đổi giữa hai giai đoạn. Giai đoạn đầu tôi làm kỹ sư lập trình. Các giai đoạn sau tôi làm trưởng nhóm lập trình trên chính hệ thống đó.`
        ]
      }
    ]
  },
  {
    slug: "oee-expert",
    title: "Hệ giám sát hiệu suất thiết bị theo ISA-22400",
    seoTitle: "Giám sát OEE theo ISA-22400 trên nền Ignition — Võ Nhật Quang",
    description:
      "Giám sát hiệu suất thiết bị theo chuẩn ISA-22400, xuất phát từ vấn đề xử lý sự cố của nhà máy.",
    descriptor: "Dự án cá nhân",
    category: "personal",
    order: 1,
    role: "Tự kiến trúc và phát triển toàn bộ hệ thống",
    period: "2025 – nay",
    scale: "Toàn hệ, từ lớp thu thập tới giao diện vận hành",
    industry: "Dự án cá nhân",
    vendors: ["Ignition", "PostgreSQL", "TDengine"],
    stack: ["Ignition", "PostgreSQL", "TDengine", "ISA-22400"],
    diagram: "oee-expert.svg",
    outcomeBasis: "qualitative",
    summary:
      "Giám sát hiệu suất thiết bị theo chuẩn ISA-22400, xuất phát từ vấn đề xử lý sự cố của nhà máy.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Ý tưởng không đến từ công nghệ. Nó đến từ các buổi trao đổi với khách hàng về những gì họ hay vướng trong quá trình xử lý sự cố.`,
          `Khi một thiết bị dừng, câu hỏi đặt ra không chỉ là sửa thế nào. Còn là dừng bao lâu, dừng vì nguyên nhân gì, nguyên nhân đó đã gặp bao nhiêu lần, và tổng lại thì nhà máy đang mất bao nhiêu năng lực sản xuất vì nó. Những câu đó cần số liệu được ghi lại có hệ thống, chứ không phải trí nhớ của người trực ca.`,
          `Ở một góc khác, đây cũng là vấn đề quản lý đội ngũ mà tôi quan tâm ở đúng vai trò của mình. Không đo được thì không biết chỗ nào đáng ưu tiên sửa trước.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Chỉ số được chọn làm trung tâm là OEE, hiệu suất thiết bị tổng thể.`,
          `Lý do chọn OEE thay vì một chỉ số khác có hai phần. Thứ nhất, đây là chỉ số cơ bản mà hầu hết nhà máy và doanh nghiệp sản xuất đều đã dùng, nên không phải dạy khách hàng một khái niệm mới trước khi nói được chuyện. Thứ hai, và quan trọng hơn, OEE thể hiện đúng ba mặt của cùng một đối tượng: tính sẵn sàng, hiệu suất, và chất lượng.`,
          `Ba mặt đó không thay thế cho nhau. Một dây chuyền chạy suốt ca mà ra nhiều hàng lỗi thì tính sẵn sàng đẹp nhưng chất lượng kém. Một dây chuyền hàng đạt hết nhưng chạy dưới tốc độ thiết kế thì lại là chuyện khác. Nhìn riêng từng mặt thì mỗi bên kể một câu chuyện khác nhau về cùng một máy, và dễ dẫn tới ưu tiên sai. Gộp cả ba mới ra được bức tranh dùng để quyết định.`,
          `Phần tính toán bám theo ISA-22400, tiêu chuẩn quốc tế về chỉ số hiệu năng cho quản lý sản xuất. Bám chuẩn thay vì tự định nghĩa cách tính là để con số của hệ có thể đối chiếu được với con số nhà máy đang dùng, thay vì trở thành một cách đo thứ hai không ai so được với cái gì.`,
          `Về cách dựng hệ, nói ở mức tổng quan: dữ liệu từ thiết bị đi vào một lớp lưu trữ chuỗi thời gian trên TDengine, còn lịch sử vận hành nằm ở PostgreSQL. Hai loại dữ liệu này có nhịp ghi và cách truy vấn khác nhau, nên tách ra thay vì ép chung một nơi. Giao diện vận hành xây trên nền Ignition.`,
          `Toàn bộ hệ do tôi tự xây dựng, từ lớp thu thập tới giao diện.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Hệ giám sát hiệu suất thiết bị theo chuẩn ISA-22400, tính đủ ba thành phần sẵn sàng, hiệu suất và chất lượng.`,
          `Giao diện theo dõi trên nền Ignition cho người vận hành và người quản lý sản xuất.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Hệ tính đủ ba thành phần của OEE theo cách định nghĩa của ISA-22400, nên con số đưa ra đối chiếu được với con số nhà máy đang dùng thay vì là một thang đo riêng.`,
          `Trang này mô tả ở mức tổng quan. Chi tiết cấu hình, cách tổ chức dữ liệu bên trong và mã nguồn không công khai.`
        ]
      }
    ]
  },
  {
    slug: "soya-blending-chilli-grinder",
    title: "Hệ phối trộn tương và nghiền ớt",
    seoTitle: "Hệ phối trộn và nghiền, TIA Portal V17 — Võ Nhật Quang",
    description:
      "Nâng cấp và lập trình lại hệ điều khiển, chuyển quy trình từ vận hành tay sang bán tự động.",
    descriptor: "Nhà máy thực phẩm",
    category: "ci",
    order: 4,
    role: "Quản lý dự án",
    period: "2021 – 2024",
    scale: "Hai cụm thiết bị chế biến",
    industry: "Nhà máy thực phẩm",
    vendors: ["Siemens"],
    stack: ["Siemens TIA Portal V17", "HMI KTP 1200 Comfort"],
    diagram: "soya-blending-chilli-grinder.svg",
    outcomeBasis: "qualitative",
    summary:
      "Nâng cấp và lập trình lại hệ điều khiển, chuyển quy trình từ vận hành tay sang bán tự động.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Các công đoạn ở nhà máy Nam Duong vận hành riêng lẻ, không có chỗ nào giám sát chung. Mỗi cụm thiết bị là một ốc đảo, và việc ghép chúng thành một mẻ hoàn chỉnh nằm ở người vận hành: canh thời điểm, chuyển công đoạn, kiểm tra bằng mắt rồi cho chạy tiếp.`,
          `Hệ quả là thời gian chạy một mẻ bị kéo dài, và độ dài đó thay đổi theo người đứng ca.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Vai trò của tôi ở dự án này là quản lý dự án, không phải người viết chương trình. Phần khó vì vậy nằm ở chỗ khác so với các dự án tôi trực tiếp lập trình.`,
          `Việc đầu tiên là ngồi trực tiếp với khách hàng để thống nhất quy trình điều khiển. Quy trình phối trộn là kiến thức sản xuất của họ, không phải thứ nhà tích hợp tự nghĩ ra rồi áp xuống. Chốt được quy trình trước khi viết dòng lệnh nào là cách rẻ nhất để tránh phải viết lại.`,
          `Sau đó là phân chia công việc cho các thành viên trong nhóm theo phần đã chốt.`,
          `Phần còn lại là kiểm soát chất lượng lập trình, và ở đây tôi làm qua các buổi chạy simulator. Toàn bộ logic được chạy thử trên mô phỏng và soát trước khi mang ra hiện trường. Với một dây chuyền thực phẩm đang sản xuất, một lỗi tuần tự phát hiện tại chỗ không chỉ tốn thời gian sửa mà còn có thể làm hỏng nguyên liệu trong thiết bị.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Quy trình điều khiển đã thống nhất với khách hàng, làm cơ sở cho toàn bộ phần lập trình phía sau.`,
          `Chương trình điều khiển trên TIA Portal V17 và màn hình vận hành KTP 1200 Comfort cho hai cụm thiết bị.`,
          `Các buổi soát logic trên simulator trước khi triển khai hiện trường.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Hai cụm chuyển từ vận hành tay sang bán tự động, và các công đoạn trước đây rời rạc được đưa về giám sát chung thay vì mỗi chỗ một đồng hồ.`,
          `Việc chạy một mẻ không còn phụ thuộc vào người vận hành canh và chuyển từng công đoạn.`
        ]
      }
    ]
  },
  {
    slug: "team-pm-system",
    title: "Team PM System, nền tảng quản lý công việc và dự án cho phòng kỹ thuật",
    seoTitle: "Team PM System, lập lịch đường găng và KPI — Võ Nhật Quang",
    description:
      "Đưa việc quản lý công việc đội nhóm và dự án của phòng kỹ thuật về chung một nền tảng.",
    descriptor: "Dự án cá nhân",
    category: "personal",
    order: 2,
    role: "Tự kiến trúc và phát triển toàn bộ",
    period: "2025 – nay",
    scale: "Ứng dụng nội bộ phòng kỹ thuật, triển khai on-premise",
    industry: "Dự án cá nhân",
    vendors: ["Next.js", "PostgreSQL", "Prisma", "Docker"],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Docker", "CPM", "Gantt"],
    diagram: "team-pm-system.svg",
    outcomeBasis: "qualitative",
    summary:
      "Đưa việc quản lý công việc đội nhóm và dự án của phòng kỹ thuật về chung một nền tảng.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Phòng kỹ thuật quản lý công việc đội nhóm và tiến độ dự án bằng nhiều thứ rời nhau. Mỗi loại việc một chỗ, và không có chỗ nào nhìn được toàn bộ.`,
          `Đây là vấn đề tôi gặp ở đúng vai trò của mình. Quản lý bốn đội chuyên môn nghĩa là phải trả lời được ai đang làm gì, việc nào đang trễ, và trễ vì đâu. Trả lời được những câu đó bằng cách đi hỏi từng người thì vẫn ra đáp án, nhưng đáp án cũ ngay khi vừa có.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Mục tiêu là một nền tảng dùng chung cho cả phòng, không phải một công cụ cho riêng người quản lý. Nếu công cụ chỉ phục vụ người báo cáo lên trên thì người nhập liệu không có lý do gì để giữ nó chính xác, và dữ liệu sai thì mọi thứ dựng trên đó đều vô nghĩa.`,
          `Phần lập lịch dùng phương pháp đường găng, hiển thị bằng biểu đồ Gantt. Chọn đường găng vì câu hỏi thực sự cần trả lời không phải "việc này bao giờ xong" mà là "việc nào trễ thì kéo cả dự án trễ theo". Hai câu đó cho ra hai danh sách ưu tiên khác nhau.`,
          `Hệ chạy trên Next.js với PostgreSQL, truy cập qua Prisma, đóng gói bằng Docker và triển khai on-premise trong hạ tầng của công ty. Đặt tại chỗ vì dữ liệu là công việc nội bộ. Có phần sinh tài liệu từ biểu mẫu, tác vụ chạy theo lịch, và thông báo qua email cho những việc cần người biết mà không cần người vào xem.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Nền tảng quản lý công việc và dự án dùng chung cho phòng kỹ thuật, chạy on-premise.`,
          `Lập lịch theo đường găng kèm biểu đồ Gantt, bộ chỉ số theo dõi, và nhật ký thay đổi.`,
          `Phần sinh tài liệu từ biểu mẫu và các tác vụ định kỳ kèm thông báo.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Phòng kỹ thuật quản lý công việc đội nhóm và tiến độ dự án trên một nền tảng chung, thay vì mỗi loại việc một chỗ.`,
          `Hệ vẫn đang được mở rộng. Việc đang làm là kéo thêm các tác vụ phân tán khác của doanh nghiệp vào cùng hệ này, để đội ngũ chỉ phải mở một chỗ thay vì nhớ mỗi việc nằm ở đâu.`,
          `Đó cũng là cùng một bài toán tôi gặp ở nhà máy của khách hàng, chỉ khác chỗ đứng. Ở nhà máy là dữ liệu vận hành nằm rải giữa các hệ không nói chuyện được với nhau. Ở đây là công việc nằm rải giữa các công cụ không nói chuyện được với nhau. Cách xử lý giống nhau: chọn một chỗ làm trung tâm, rồi kéo dần mọi thứ về đó thay vì bắc cầu giữa từng cặp.`,
          `Mã nguồn của dự án này không công khai.`
        ]
      }
    ]
  },
  {
    slug: "wastewater-treatment-scada",
    title: "Hệ SCADA xử lý nước thải",
    seoTitle: "SCADA xử lý nước thải, Citect và Modicon M241 — Võ Nhật Quang",
    description:
      "Cấu hình hệ điều khiển trên Citect nối M241, xây công cụ báo cáo tự động.",
    descriptor: "Nhà máy xử lý nước thải đô thị",
    category: "ci",
    order: 5,
    role: "Thiết kế SCADA",
    period: "2018 – 2020",
    scale: "Toàn bộ hệ điều khiển nhà máy",
    industry: "Nhà máy xử lý nước thải đô thị",
    vendors: ["Schneider Electric"],
    stack: ["Schneider Citect", "Modicon M241", "Excel VBA"],
    diagram: "wastewater-treatment-scada.svg",
    outcomeBasis: "qualitative",
    summary:
      "Cấu hình hệ điều khiển trên Citect nối M241, xây công cụ báo cáo tự động.",
    publishedDate: "2026-08-23T00:00:00+07:00",
    sections: [
      {
        heading: "Bài toán",
        paragraphs: [
          `Nhà máy xử lý nước thải Tra Vinh cần một hệ giám sát cho toàn bộ dây chuyền, và cần số liệu vận hành ở dạng dùng được để tự kiểm soát hệ thống, không phải chỉ để xem thời gian thực rồi thôi.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Lớp điều khiển của nhà máy chạy trên PLC Modicon M241 của Schneider. Chọn Citect cho lớp giám sát vì nó cùng hệ với lớp điều khiển bên dưới, nên kết nối là đường trực tiếp của hãng, không phải bắc thêm một lớp trung gian để hai bên nói chuyện được với nhau. Mỗi lớp trung gian là thêm một chỗ có thể hỏng và thêm một thứ phải bảo trì.`,
          `Đây là quyết định ngược với hệ ICS mà tôi làm ở một khách hàng khác, nơi tôi giữ WinCC của Siemens phía trên các bộ điều khiển Schneider. Ở đó lớp giám sát đã tồn tại và người vận hành đã quen tay, nên đổi sang cùng hãng không đáng với thời gian và rủi ro bỏ ra. Ở đây không có ràng buộc đó, hệ làm mới từ đầu, nên chọn cùng hãng là chọn cái đơn giản hơn.`,
          `Phần báo cáo làm bằng Excel VBA, phục vụ việc kiểm soát hệ thống nội bộ của nhà máy. Số liệu vận hành được kết xuất tự động thành báo cáo thay vì phải chép tay lại từ màn hình.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Cấu hình hệ giám sát trên Schneider Citect, kết nối trực tiếp tới các PLC M241 của dây chuyền.`,
          `Bộ công cụ báo cáo tự động viết bằng Excel VBA, phục vụ kiểm soát vận hành nội bộ.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Toàn bộ dây chuyền được đưa về một chỗ giám sát chung thay vì theo dõi rời từng cụm.`,
          `Việc lập báo cáo vận hành chuyển từ chép tay sang kết xuất tự động từ số liệu của hệ.`
        ]
      }
    ]
  }
];

export function getProject(slug: string): CaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): CaseStudy[] {
  return projects
    .filter((project) => project.category === category)
    .sort((a, b) => a.order - b.order);
}

export { projectCategorySections };
