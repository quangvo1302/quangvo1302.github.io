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
    industries: ["manufacturing"],
    pillars: ["hop-nhat-du-lieu-van-hanh"],
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
          `Trước đây tại nhà máy Nam Duong, bộ phận kế hoạch chuyển thông tin sản xuất sang các phòng ban bằng cách gửi file Excel qua email. Cách làm này vẫn duy trì được công việc hằng ngày, nhưng dữ liệu bị phân tán trong hộp thư của từng cá nhân khiến tiến độ luồng công việc khó theo dõi và kiểm soát.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Dự án này là bước đầu tiên triển khai nền tảng Ignition tại nhà máy nhằm hướng tới mục tiêu dùng chung một hệ thống trung tâm. Yêu cầu chính là đưa toàn bộ việc chuyển giao kế hoạch sản xuất xuống người vận hành lên nền tảng mới, tự động hóa và có kiểm soát trạng thái.`,
          `Khó khăn lớn nhất nằm ở định dạng file BOM. Tài liệu này gắn với nghiệp vụ quen thuộc của bộ phận kế hoạch nên không thể tùy ý thay đổi mẫu biểu chỉ để khớp với các hàm mặc định của phần mềm. Do đó, phương án triển khai là viết script riêng trên Ignition để đọc trực tiếp cấu trúc file hiện hữu, đồng thời tổ chức lại cơ sở dữ liệu trên MS SQL cho phù hợp với luồng nghiệp vụ mới, giúp công cụ đáp ứng linh hoạt theo quy trình thực tế.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Script tùy chỉnh chạy trên nền Ignition, đọc trực tiếp định dạng file BOM hiện hành của nhà máy mà không cần đổi biểu mẫu.`,
          `Cấu trúc cơ sở dữ liệu trên MS SQL được quy hoạch lại cho luồng xử lý mới.`,
          `Luồng chuyển giao kế hoạch sản xuất tự động từ bộ phận kế hoạch tới người vận hành, có giám sát trạng thái thực hiện.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Dữ liệu kế hoạch được chuyển từ email sang quản lý tập trung trên hệ thống, giúp các bộ phận dễ dàng theo dõi tiến độ công việc.`,
          `Thao tác xuất định mức thủ công hằng ngày của phòng kế hoạch và sản xuất được loại bỏ.`,
          `Đây cũng là dự án khởi đầu trên nền Ignition tại nhà máy, tạo tiền đề để mở rộng các hạng mục tiếp theo.`
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
    industries: ["power"],
    pillars: ["hop-nhat-du-lieu-van-hanh"],
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
          `Dự án tại EVNGenco 3 tập trung xây dựng lớp dữ liệu vận hành tập trung trên nền OSIsoft PI, gom toàn bộ thông tin từ hệ thống DCS và các điểm nhập liệu thủ công về một mối quản lý.`,
          `Quản lý than là một cấu phần trong phạm vi này. Trước đó, nhà máy theo dõi than nhập từ tàu bằng các biểu mẫu và một phần mềm riêng lẻ. Ứng dụng này vẫn hoạt động được, nhưng không thể kết nối trực tiếp vào PI, khiến mảng dữ liệu than bị tách rời khỏi hệ thống dữ liệu chung đang xây dựng.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Đứng trước công cụ đang dùng nhưng không thể ghép nối vào kiến trúc đích, việc tạo thêm lớp cầu nối trung gian sẽ để lại gánh nặng bảo trì lâu dài. Sau khi bàn bạc với khách hàng, đội ngũ thống nhất viết lại hoàn toàn ứng dụng quản lý than trực tiếp trên nền PI. Lựa chọn này đòi hỏi nhiều công sức ban đầu nhưng giúp dữ liệu than đi thẳng vào hạ tầng chung cùng với toàn bộ thông số nhà máy.`,
          `Trong dự án này, tôi tham gia với vai trò kỹ sư phát triển, viết ứng dụng bằng C# trên nền PI để quản lý tồn kho than và tính toán hiệu năng tua-bin từ nguồn dữ liệu vận hành có sẵn.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Ứng dụng quản lý than viết bằng C# chạy trực tiếp trên OSIsoft PI, thay thế phần mềm rời trước đó và các biểu mẫu ghi chép thủ công.`,
          `Mô-đun tính toán hiệu năng tua-bin tích hợp từ dữ liệu vận hành trên PI.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Dữ liệu than được đưa về chung cơ sở dữ liệu tập trung với DCS và các nguồn nhập tay, giúp việc tra cứu và đối chiếu thông tin diễn ra đồng thời trên một hệ thống.`,
          `Các chỉ số tồn than cùng hiệu năng tua-bin được tính toán tự động từ thông số vận hành thực tế, hỗ trợ nhà máy linh hoạt hơn trong công tác điều độ và góp phần giảm chi phí lưu kho than.`
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
    industries: ["manufacturing"],
    pillars: ["ban-tu-dong-hoa"],
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
          `Cụm autoclave tại Hiep Phu Corporation trước đây vận hành hoàn toàn bằng tay. Người đứng máy theo dõi thông số qua các đồng hồ đo riêng lẻ trên mặt tủ điện, thiếu một màn hình tổng quan để quan sát toàn bộ chu trình.`,
          `Khi đến giai đoạn xả áp, toàn bộ hơi và nhiệt dư trong lò được xả thẳng ra môi trường qua hệ khử mùi. Lượng nhiệt này bị lãng phí trong khi ở ngay cạnh đó, các lò bước vào giai đoạn gia nhiệt lại phải tiêu thụ lượng hơi mới từ nồi hơi.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Giải pháp đặt ra là trích hơi từ lò đang xả để cấp nhiệt cho lò chuẩn bị gia nhiệt. Yêu cầu kỹ thuật tập trung vào hai điểm chính: tính toán dải áp suất tận dụng và kiểm soát ổn định áp suất xả.`,
          `Áp suất trong lò giảm dần suốt quá trình xả nên lượng nhiệt hữu ích cũng giảm theo. Hệ thống được thiết kế để tận dụng lượng hơi trong dải từ 9 bar xuống 3 bar dẫn sang lò khác, chỉ chuyển hướng xả qua bộ khử mùi khi áp suất tụt dưới ngưỡng 3 bar. Điểm mấu chốt là việc trích hơi sẽ can thiệp trực tiếp vào đường áp suất của lò đang xả. Chu trình autoclave bắt buộc phải duy trì chuẩn ba giai đoạn: tăng áp, giữ áp và hạ áp. Nếu việc thu hồi hơi làm đường hạ áp biến động gấp khúc, chất lượng mẻ hấp sẽ bị ảnh hưởng. Do đó, logic điều khiển van được xây dựng để điều tiết dòng hơi thật êm xuyên suốt cả ba giai đoạn.`,
          `Toàn bộ hệ thống được lập trình cho cả hai line trên PLC Siemens S7-1500 bằng TIA Portal V17.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Chương trình điều khiển chu trình autoclave trên PLC S7-1500, điều tiết lưu lượng hơi cho ba giai đoạn tăng áp, giữ áp và hạ áp.`,
          `Logic liên động thu hồi hơi giữa lò xả và lò gia nhiệt, kèm ngưỡng tự động chuyển sang xả bộ khử mùi.`,
          `Chuyển đổi toàn bộ cụm thiết bị từ vận hành tay sang bán tự động trên cả hai line.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Hiệu quả tiết kiệm chi phí gia nhiệt nồi hơi đạt 140% so với mục tiêu ban đầu của dự án.`,
          `Việc chuyển đổi sang chế độ bán tự động cũng giúp nhà máy chủ động hơn trong khâu điều độ, giảm bớt sự phụ thuộc vào sự có mặt và thao tác thủ công của người vận hành tại từng thời điểm.`
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
    industries: ["manufacturing"],
    pillars: ["ban-tu-dong-hoa"],
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
          `Tại nhà máy Hiep Phu Corporation, độ ẩm phối liệu trên băng tải trước đây không có thiết bị giám sát liên tục mà dựa vào mắt nhìn và kinh nghiệm của công nhân ca trực. Nếu liệu quá ẩm hoặc quá khô, tấm vật liệu sẽ bị vỡ ở các công đoạn sau, khiến chất lượng mẻ phụ thuộc nhiều vào việc nhận biết sớm của từng người đứng máy. Dự án cần giải quyết vấn đề này trên ba line chạy thường xuyên nhất trong số bốn line của nhà máy.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Yếu tố tác động trực tiếp đến độ ẩm là lực hút của quạt chân không bố trí bên dưới băng tải. Hút mạnh hơn sẽ làm liệu khô nhanh hơn, vì vậy giải pháp là đo độ ẩm liên tục rồi dùng tín hiệu đó để điều khiển biến tần quạt hút.`,
          `Vòng điều khiển biến tần vốn nằm trong PLC S7-300 hiện hữu của dây chuyền. Để tránh việc lắp thêm bộ điều khiển ngoài gây phân chia quyền điều khiển trên cùng thiết bị, toàn bộ logic mới được lập trình tích hợp trực tiếp vào PLC đang chạy.`,
          `Về giao diện, màn hình KTP 1200 Comfort được thiết kế mới trên TIA Portal V13, đưa thông số độ ẩm và trạng thái quạt hút về cùng một chỗ để người vận hành tiện theo dõi thay cho việc quan sát cảm quan trước đây.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Khối logic kiểm soát độ ẩm tích hợp vào chương trình PLC S7-300 hiện hữu, liên động với vòng điều khiển biến tần của quạt hút chân không.`,
          `Giao diện vận hành trên màn hình KTP 1200 Comfort thiết kế bằng TIA Portal V13 cho ba line.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Quạt hút tự động điều chỉnh tốc độ bám sát giá trị độ ẩm đo thực tế, hạn chế tình trạng liệu quá khô hoặc quá ướt do phụ thuộc vào kinh nghiệm ca trực.`,
          `Ba line sản xuất chuyển sang chế độ bán tự động và lượng điện năng tiêu thụ của nhà máy giảm xuống.`
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
    industries: ["manufacturing"],
    pillars: ["nang-cap-hien-dai-hoa"],
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
          `Hệ thống điều khiển chính tại nhà máy Vietnam Agribusiness Limited vận hành trên dòng PLC Quantum của Schneider đã dừng hỗ trợ linh kiện thay thế từ hãng, tiềm ẩn rủi ro dừng máy kéo dài nếu xảy ra sự cố phần cứng. Lớp giám sát phía trên sử dụng WinCC V7.0 SP2 của Siemens, với nhiều script xử lý popup template và dữ liệu. Sau nhiều năm hoạt động, mỗi thao tác trên SCADA mất khoảng 3–4 giây mới phản hồi, nên cũng cần được nâng cấp.`,
          `Hai hạng mục có tính chất khác nhau: rủi ro thiếu vật tư dự phòng ở tầng điều khiển là vấn đề cấp bách, còn tầng giám sát cần cải thiện về mặt hiệu năng.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Lộ trình thực hiện được xác định rõ ràng: ưu tiên nâng cấp phần cứng lên dòng Modicon M580 trước, sau đó mới xử lý hệ SCADA. Việc thay thế PLC giúp nhà máy đưa thiết bị về dòng sản phẩm đang lưu hành, giải quyết dứt điểm vấn đề linh kiện dự phòng.`,
          `Đối với tầng giám sát, phương án lựa chọn là giữ nguyên nền tảng WinCC thay vì chuyển đổi sang phần mềm của Schneider. Giải pháp này giúp giữ nguyên bố cục màn hình quen thuộc, tránh việc phải đào tạo lại người vận hành và loại bỏ rủi ro thao tác sai khi chuyển giao hệ thống.`,
          `Quá trình thi công tại hiện trường chịu ràng buộc lớn về thời gian. Khu vực thi công là khu vực sản xuất của nhà máy, nên việc thay thế và kiểm tra hệ thống chỉ được phép thực hiện từ 22h đến 3h sáng hôm sau. Trong khung giờ đó, đội ngũ phải tháo dỡ Quantum, lắp đặt M580 và kiểm tra tính tương thích với toàn hệ thống. Mọi bước làm đều chuẩn bị sẵn phương án quay lui về cấu hình ban đầu ngay trong cùng khung giờ nếu phát sinh lỗi tương thích, đảm bảo nhà máy luôn sẵn sàng chạy lại.`,
          `Khi tầng điều khiển đã chạy ổn định, dự án bước sang giai đoạn nâng cấp WinCC từ bản V7.0 SP2 lên V7.5 SP2 và chuẩn hóa cấu hình cho toàn bộ các máy trạm vận hành.`
        ]
      },
      {
        heading: "Điểm nghẽn nằm ở chu kỳ quét của PLC",
        paragraphs: [
          `Sau khi thay M580 ở giai đoạn đầu năm 2018, tín hiệu từ PLC ổn định nhưng phản hồi trên SCADA không cải thiện. Có những thao tác mất tới 10–11 giây mới phản hồi. Đội dự án chia hai hướng: phần cứng kiểm tra PLC, phần mềm rà soát SCADA và các script, đồng thời làm việc cùng hãng. Tôi đề xuất mượn một bộ M580 về văn phòng để dựng môi trường thử nghiệm trước khi mang xuống nhà máy. Sau nhiều vòng thử, nguyên nhân vẫn chưa rõ và hệ thống phải đưa về cấu trúc ban đầu.`,
          `Thay vì tiếp tục tập trung vào một phía, chúng tôi rà lại toàn bộ chuỗi xử lý từ SCADA xuống PLC, kể cả những thông số tưởng như ít liên quan đến thời gian phản hồi. Một trong số đó là cấu hình {{MAST task}}, tác vụ chính của PLC. Trên M580, MAST chạy ở một trong hai chế độ. Ở chế độ Cyclic, vòng quét mới bắt đầu ngay khi vòng trước kết thúc và không có thông số thời gian chu kỳ. Ở chế độ Periodic, PLC quét theo nhịp cố định: mỗi vòng quét bắt đầu theo một chu kỳ đặt trước; nếu logic xử lý xong sớm, CPU chờ đến hết chu kỳ mới bắt đầu vòng tiếp theo.`,
          `PLC chỉ cần khoảng 15–20 ms để xử lý toàn bộ logic, trong khi Periodic đang được cấu hình ở 120 ms. Phần lớn mỗi vòng quét là thời gian chờ. Điều này ảnh hưởng trực tiếp đến SCADA, vì CPU tiếp nhận các yêu cầu truyền thông với số lượng giới hạn trong mỗi vòng quét MAST. Chu kỳ càng dài, số vòng quét mỗi giây càng ít, và yêu cầu từ SCADA càng phải xếp hàng lâu hơn.`,
          `Chúng tôi giữ chế độ Periodic và điều chỉnh chu kỳ theo kết quả đo kiểm: 120 ms → 25 ms.`
        ],
        figures: [
          {
            afterParagraph: 0,
            src: "/images/ics-upgrade-wincc-migration/scada-cham-sau-nang-cap.webp",
            alt: "Chuỗi thao tác từ người vận hành qua WinCC V7.0 SP2 xuống Modicon M580, với câu hỏi điểm nghẽn nằm ở tầng nào; thời gian phản hồi SCADA tăng từ 3–4 giây lên 10–11 giây sau khi thay PLC.",
            caption: "Phần cứng PLC mới hơn, nhưng thao tác trên SCADA lại phản hồi chậm hơn trước.",
            width: 1920,
            height: 1080
          },
          {
            afterParagraph: 3,
            src: "/images/ics-upgrade-wincc-migration/period-120-25-ms.webp",
            alt: "Biểu đồ thời gian trên cùng trục 0–120 ms: với Periodic 120 ms, PLC xử lý logic 15–20 ms rồi chờ hết chu kỳ; với Periodic 25 ms, cùng khoảng 120 ms có bốn vòng quét và bốn lượt phục vụ SCADA.",
            caption: "Cùng khoảng 120 ms: Periodic 120 ms chỉ có một vòng quét, Periodic 25 ms có bốn vòng quét trọn vẹn, nên yêu cầu từ SCADA được xử lý nhiều lượt hơn. Bấm vào hình để xem kích thước đầy đủ.",
            width: 1920,
            height: 1080
          }
        ]
      },
      {
        heading: "Khởi động WinCC chậm vì cách chia dữ liệu lưu trữ",
        paragraphs: [
          `Giai đoạn nâng cấp WinCC từ V7.0 SP2 lên V7.5 SP2 bắt đầu năm 2022. Sau nâng cấp, hệ thống không báo lỗi, dữ liệu vẫn được ghi đầy đủ và người vận hành vẫn giám sát, điều khiển được, nhưng mỗi lần khởi động hoặc dừng Runtime mất khoảng 30–40 phút. Kỹ sư hỗ trợ của Siemens chạy thử chính project đó trên máy thử nghiệm chưa có dữ liệu lưu trữ: Runtime khởi động trong khoảng 15 giây. Khác biệt nằm ở phần chỉ có trên máy nhà máy, khoảng 50 GB dữ liệu lưu trữ tích lũy qua nhiều năm vận hành.`,
          `Trong WinCC V7, dữ liệu lưu trữ của Tag Logging và Alarm Logging không nằm trong một file duy nhất mà được chia thành nhiều {{segment}}. Cấu hình cũ, giống nhau cho Tag Logging Fast và Slow, giữ toàn bộ archive 3 năm và mỗi segment chứa 1 ngày. Từng con số đều hợp lý, nhưng ghép lại thành hơn 2.000 segment mà Runtime phải liên kết mỗi lần khởi động và tách ra mỗi lần dừng, trong khi khuyến cáo của hãng là tối đa 200 segment, mỗi segment tối đa 2 GB. Trình quản lý archive không kiểm tra tính hợp lý của các thông số này.`,
          `Khuyến nghị đầu tiên của hãng là reset toàn bộ archive, nhưng dữ liệu này dùng cho audit nên không thể xóa. Chúng tôi giữ nguyên yêu cầu lưu trữ 3 năm và chỉ đổi cách chia: dung lượng tối đa của tất cả segment là 110 GB, mỗi segment chứa 3 tuần thay vì 1 ngày. Mỗi archive còn khoảng 52 segment, khoảng 104 cho cả Fast và Slow, nằm trong giới hạn 200 của hãng. Số segment phải liên kết giảm khoảng 20 lần.`,
          `Đo trên hệ thống đã chạy một năm với cấu hình mới, thời gian khởi động và dừng Runtime còn khoảng 10 phút, không cần thêm máy chủ hay ổ lưu trữ. Hơn 2.000 segment đã tích lũy theo cấu hình cũ vẫn là dữ liệu audit phải giữ lại; giữ chúng thế nào để Runtime không phải mang theo mà khi cần vẫn lấy lại được là phần việc tiếp theo.`
        ],
        figures: [
          {
            afterParagraph: 0,
            src: "/images/ics-upgrade-wincc-migration/wincc-khoi-dong-30-40-phut.webp",
            alt: "Cửa sổ khởi động WinCC Runtime V7.5 SP2: Global Script Runtime và Alarm Logging Runtime đã OK, Tag Logging Runtime đang chờ, Graphics Runtime chưa chạy; đồng hồ chờ trên máy nhà máy 00:34:12 so với 00:00:15 trên máy thử của hãng.",
            caption: "Không lỗi, không cảnh báo, nhưng cùng một project khởi động 15 giây trên máy thử của hãng và 30–40 phút trên máy nhà máy.",
            width: 1920,
            height: 1080
          },
          {
            afterParagraph: 2,
            src: "/images/ics-upgrade-wincc-migration/segment-archive-2000-104.webp",
            alt: "Biểu đồ đúng tỉ lệ trên cùng trục 3 năm: mỗi segment 1 ngày cho khoảng 1.095 segment mỗi archive, mỗi segment 3 tuần cho khoảng 52; tổng Tag Logging Fast và Slow giảm từ hơn 2.000 xuống khoảng 104 segment, dưới giới hạn khuyến cáo 200. Thời gian start/stop Runtime giảm từ 30–40 phút xuống khoảng 10 phút.",
            caption: "Cùng 3 năm dữ liệu, chỉ đổi cách chia: số segment Runtime phải liên kết giảm từ hơn 2.000 xuống khoảng 104. Bấm vào hình để xem kích thước đầy đủ.",
            width: 1920,
            height: 1080
          }
        ]
      },
      {
        heading: "Giữ 2.000 segment cũ ngoài Runtime",
        paragraphs: [
          `Hơn 2.000 segment 1 ngày theo cấu hình cũ có hai yêu cầu ngược nhau. Runtime không được phải liên kết chúng mỗi lần khởi động và dừng, nếu không thì công đổi cách chia segment coi như mất. Nhưng đây là dữ liệu audit, nên khi cần xem lại một khoảng thời gian, dữ liệu phải hiện được trên chính OnlineTrendControl và AlarmControl của WinCC, chứ không phải mở file SQL ra đọc.`,
          `Chỗ cất là thư mục Backup đã cấu hình khi đổi cách chia segment. Theo tài liệu Siemens, backup là bản sao của segment, gồm một cặp file MDF và LDF, được chép sang thư mục backup; tên file chứa khoảng thời gian từ–đến của segment. Khi vượt thời gian lưu, segment cũ nhất bị xóa khỏi archive Runtime, còn bản sao trong Backup vẫn giữ. Các segment theo cấu hình cũ được đưa về cùng thư mục này, nên toàn bộ lịch sử nằm ở một chỗ và Runtime không phải mang theo.`,
          `Đường lấy lại là thư mục {{CommonArchiving}} trong thư mục project. File backup đặt vào đây được WinCC tự liên kết trong Runtime, gỡ ra thì liên kết bị ngắt; các phương thức VBS Restore và Remove cũng làm việc này qua chính thư mục đó. Archive Connector không phù hợp ở đây, vì theo manual Connectivity Pack, archive liên kết bằng công cụ này không xem được trên AlarmControl và OnlineTrendControl.`,
          `Chuyển tay vài chục cặp file là chỗ dễ sai: thiếu file LDF, chép nhầm segment ngoài khoảng cần tra cứu, hoặc đẩy cả loạt vào cùng lúc trong khi việc chép và liên kết segment tạo thêm tải cho CPU, SQL Server và ổ đĩa. Chúng tôi viết script dựa vào khoảng thời gian trong tên file để lấy các segment cần tra cứu từ thư mục Backup, kiểm tra đủ cặp MDF và LDF, rồi chuyển lần lượt từng cặp vào CommonArchiving.`
        ]
      },
      {
        heading: "Lệch giờ chỉ lộ ra sau khi lên WinCC V7.5",
        paragraphs: [
          `Giữa năm 2023, file chẩn đoán của WinCC liên tục xuất hiện lỗi CCWriteArchiveServer. Hệ thống vẫn chạy, không có cảnh báo nào trên màn hình vận hành. Trao đổi qua nhiều vòng với bộ phận hỗ trợ kỹ thuật của Siemens, nguyên nhân được xác định: lỗi này chỉ xuất hiện khi dữ liệu gửi vào archive mang timestamp không khớp với giờ hiện tại của server. Các máy trong hệ thống đang không đồng bộ thời gian với nhau.`,
          `Hệ thống đọc các thiết bị Modbus RTU bằng KEPServerEX rồi đưa lên WinCC qua OPC DA. Lệch giờ giữa các máy đã có từ trước, nhưng trên V7.0 không gây lỗi; chỉ sau khi nâng cấp mới lộ ra. Đối chiếu Release Notes của Siemens cho thấy cách WinCC lấy timestamp từ OPC đã được ghi khác đi. Từ Release Notes V7.2 trở đi, gồm cả V7.4, V7.5 SP1 và V7.5 SP2, có ghi chú "OPC tags: Time stamp for Alarm Logging and Tag Logging": với message do OPC tag kích hoạt, WinCC dùng timestamp của OPC server, tương tự chronological reporting, còn Tag Logging dùng timestamp do Tag Logging server tạo. Phần ghi chú về OPC trong Release Notes V7.0 SP1 không có mục này. Như vậy trên V7.5, giờ của máy chạy KEPServerEX đi thẳng vào alarm archive, và khi giờ đó lệch với server WinCC thì lỗi xuất hiện.`,
          `Vì vậy đồng bộ riêng server và client WinCC chưa đủ. Theo Siemens, mọi thành phần có thể gửi dữ liệu vào WinCC đều phải cùng một giờ, kể cả các nguồn đi qua OPC, vì theo giao thức OPC, timestamp không được phép sửa trên đường đi. Phương án thống nhất với Siemens là dùng server WinCC làm {{NTP}} server cho toàn mạng: client PC, máy chạy OPC server và các PLC giao tiếp qua S7, Modbus TCP/IP hay OPC đều lấy giờ từ đây. Theo Siemens, cách cấu hình PC làm NTP server này dùng được cả cho thiết bị không thuộc SIMATIC.`,
          `Ngoại lệ là đồng hồ đo điện năng mà KEPServerEX đọc qua Modbus RTU. Thiết bị này không đồng bộ giờ được. Sau khi Siemens xem dữ liệu của nó, hai bên thống nhất loại nó khỏi phạm vi đồng bộ, vì nó chỉ trả giá trị qua cổng serial: thanh ghi Modbus không mang timestamp, nên giờ của dữ liệu do máy chạy KEPServerEX gán. Điểm cần đồng bộ là nơi gán timestamp, không phải mọi thiết bị có đồng hồ.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Chương trình điều khiển trên PLC M580 cho các phân đoạn chuyển đổi, duy trì kết nối ổn định với hệ WinCC hiện hữu.`,
          `Cấu hình MAST task của M580 hiệu chỉnh theo thời gian thực thi đo được: chế độ Periodic, chu kỳ 25 ms.`,
          `Quy trình thay thế thiết bị chi tiết theo cửa sổ dừng máy, gồm bước kiểm tra tương thích và phương án hoàn trả cấu hình an toàn.`,
          `Dự án WinCC V7.5 SP2 sau nâng cấp cùng bộ cấu hình chuẩn hóa áp dụng đồng bộ cho các trạm vận hành.`,
          `Cấu hình lưu trữ mới cho Tag Logging Fast và Slow: giữ dữ liệu 3 năm, tối đa 110 GB, mỗi segment 3 tuần.`,
          `Thư mục Backup chứa toàn bộ segment đã đóng, gồm cả hơn 2.000 segment theo cấu hình cũ, cùng script chuyển lần lượt từng cặp MDF/LDF vào CommonArchiving khi cần tra cứu.`,
          `Phương án đồng bộ thời gian cho toàn hệ thống: server WinCC làm NTP server, client PC, máy chạy KEPServerEX và PLC lấy giờ từ server; đồng hồ điện năng đọc qua Modbus RTU nằm ngoài phạm vi.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Tầng điều khiển vận hành ổn định trên nền tảng M580, đảm bảo nguồn vật tư thay thế sẵn có từ hãng.`,
          `Sau khi hiệu chỉnh chu kỳ Periodic, thời gian phản hồi thao tác trên SCADA giảm từ 10–11 giây xuống còn khoảng 1–2 giây.`,
          `Sau khi đổi cách chia segment, thời gian khởi động và dừng WinCC Runtime giảm từ 30–40 phút xuống khoảng 10 phút, đo trên hệ thống đã chạy một năm với cấu hình mới.`,
          `Ở lớp giám sát, các trạm vận hành dùng chung một cấu hình chuẩn hóa giúp cải thiện tốc độ và chất lượng điều khiển.`,
          `Tôi tham gia dự án với vai trò kỹ sư lập trình ở giai đoạn đầu và phụ trách vị trí trưởng nhóm lập trình trong các giai đoạn tiếp theo.`,
          `Điều tôi giữ lại từ dự án: khi một hệ thống vận hành chậm, nguyên nhân không nhất thiết là một vấn đề lớn. Nó có thể là một thông số nhỏ đang lệch nhịp với phần còn lại, và chỉ lộ ra khi nhìn cả chuỗi từ SCADA đến PLC thay vì từng phía riêng lẻ. Ở giai đoạn WinCC, đó lại là những thông số lưu trữ hợp lý khi đứng riêng nhưng nhân lên thành gánh nặng sau vài năm vận hành, nên khi cấu hình lưu trữ cần tính trước hệ thống sẽ phải mang theo bao nhiêu segment.`
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
    industries: [],
    pillars: ["hop-nhat-du-lieu-van-hanh", "giam-sat-tap-trung"],
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
          `Nhu cầu phát triển hệ thống hình thành từ thực tế trao đổi với các nhà máy trong quá trình xử lý sự cố. Khi thiết bị dừng, đội ngũ quản lý không chỉ cần xử lý lỗi kỹ thuật mà còn cần nắm rõ thời gian dừng, nguyên nhân cụ thể, tần suất lặp lại và mức độ tổn thất công suất của dây chuyền. Những câu hỏi này cần số liệu ghi nhận tự động, có hệ thống thay vì dựa vào trí nhớ của người trực ca. Ở góc độ quản lý, việc thiếu dữ liệu đo lường cũng khiến việc xác định thứ tự ưu tiên trong bảo trì và vận hành trở nên khó khăn.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Chỉ số OEE được chọn làm thước đo trung tâm. Đây là chỉ số quen thuộc với các nhà máy sản xuất, phản ánh đồng thời ba yếu tố của thiết bị: tính sẵn sàng, hiệu suất và chất lượng. Việc tách rời từng yếu tố dễ dẫn đến đánh giá sai lệch, ví dụ dây chuyền chạy liên tục cả ca nhưng phế phẩm nhiều, hoặc sản phẩm đạt chuẩn nhưng tốc độ chạy lại thấp hơn thiết kế. Kết hợp cả ba yếu tố mới tạo ra bức tranh toàn diện phục vụ việc ra quyết định.`,
          `Phương pháp tính toán bám sát tiêu chuẩn quốc tế {{ISA-22400}} về chỉ số hiệu năng trong quản lý sản xuất, giúp số liệu của hệ thống đồng nhất với phương pháp đo lường sẵn có tại các nhà máy.`,
          `Về kiến trúc kỹ thuật, dữ liệu chuỗi thời gian từ thiết bị được lưu trữ trên TDengine, còn lịch sử vận hành được quản lý trên PostgreSQL để phù hợp với đặc thù ghi và truy vấn của từng loại dữ liệu. Giao diện vận hành được xây dựng trên nền tảng Ignition.`,
          `Tôi trực tiếp thiết kế và triển khai toàn bộ hệ thống từ khâu thu thập dữ liệu đến giao diện người dùng.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Hệ thống giám sát hiệu suất thiết bị theo chuẩn ISA-22400, phản ánh đầy đủ ba thành phần: sẵn sàng, hiệu suất và chất lượng.`,
          `Giao diện theo dõi trên nền Ignition phục vụ kỹ thuật viên và quản lý sản xuất.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Dữ liệu OEE được tính toán đầy đủ theo tiêu chuẩn ISA-22400, đồng nhất với phương pháp đánh giá thực tế của nhà máy.`,
          `Nội dung này trình bày ở mức tổng quan. Chi tiết cấu hình, cách tổ chức dữ liệu bên trong và mã nguồn không công khai.`
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
    industries: ["manufacturing"],
    pillars: ["ban-tu-dong-hoa"],
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
          `Tại nhà máy Nam Duong, các công đoạn trong quy trình phối trộn tương và nghiền ớt vận hành riêng rẽ, thiếu hệ thống giám sát tập trung. Việc điều phối mẻ sản xuất phụ thuộc vào thao tác thủ công của người đứng máy từ khâu canh thời gian, chuyển công đoạn đến kiểm tra cảm quan. Cách làm này khiến tổng thời gian chạy một mẻ bị kéo dài và dao động tùy theo từng ca trực.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Trong dự án này, tôi đảm nhiệm vai trò quản lý dự án, không trực tiếp lập trình. Công việc tập trung vào khâu thống nhất yêu cầu kỹ thuật và kiểm soát chất lượng bàn giao của nhóm.`,
          `Bước đầu tiên là làm việc trực tiếp với khách hàng để làm rõ toàn bộ quy trình phối trộn và nghiền — đây là kiến thức sản xuất của họ, không phải thứ nhà tích hợp tự nghĩ ra rồi áp xuống — tạo cơ sở kỹ thuật thống nhất trước khi tiến hành phân chia đầu việc lập trình cho các thành viên trong nhóm.`,
          `Để đảm bảo chất lượng, toàn bộ logic điều khiển tuần tự được kiểm thử kỹ trên môi trường mô phỏng (simulator) trước khi triển khai tại hiện trường. Đối với dây chuyền thực phẩm đang vận hành, việc sàng lọc sớm lỗi logic trên phần mềm mô phỏng giúp tránh nguy cơ làm hỏng nguyên liệu và tiết kiệm thời gian căn chỉnh tại chỗ.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Tài liệu quy trình điều khiển đã thống nhất với nhà máy làm căn cứ lập trình.`,
          `Chương trình điều khiển PLC trên TIA Portal V17 và giao diện giám sát màn hình KTP 1200 Comfort cho hai cụm thiết bị.`,
          `Kịch bản kiểm thử và hoàn thiện logic trên simulator trước khi đưa ra hiện trường.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Hai cụm thiết bị chuyển sang chế độ bán tự động và được kết nối về màn hình giám sát chung.`,
          `Quy trình chạy mẻ được kiểm soát theo chu trình định sẵn, giảm bớt thao tác căn chỉnh thủ công và giúp thời gian sản xuất giữa các ca ổn định hơn.`
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
    industries: [],
    pillars: ["hop-nhat-du-lieu-van-hanh"],
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
          `Công tác theo dõi công việc đội nhóm và tiến độ dự án trong phòng kỹ thuật trước đây sử dụng nhiều công cụ phân tán, thiếu một giao diện nhìn nhận toàn cảnh. Khi phụ trách quản lý bốn đội chuyên môn, việc nắm bắt nhân sự đang làm gì, hạng mục nào chậm tiến độ và lý do chậm ở đâu nếu chỉ dựa vào việc hỏi trực tiếp từng người sẽ tốn nhiều thời gian và thông tin cập nhật luôn có độ trễ.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Mục tiêu là xây dựng một nền tảng phục vụ trực tiếp công việc hằng ngày của toàn bộ kỹ sư trong phòng, tránh việc biến hệ thống thành một công cụ chỉ để báo cáo số liệu đơn thuần cho cấp quản lý.`,
          `Mô-đun quản lý tiến độ áp dụng phương pháp đường găng (Critical Path Method) hiển thị qua biểu đồ Gantt, tập trung nhận diện sớm các đầu việc có nguy cơ kéo chậm tiến độ chung của toàn dự án để ưu tiên xử lý.`,
          `Về mặt công nghệ, hệ thống chạy trên nền Next.js, cơ sở dữ liệu PostgreSQL kết nối qua Prisma, đóng gói bằng Docker và triển khai on-premise trên hạ tầng máy chủ của công ty. Ứng dụng tích hợp chức năng tự động tạo tài liệu từ mẫu biểu, chạy tác vụ nền theo lịch trình và gửi email thông báo định kỳ.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Nền tảng quản lý công việc và dự án triển khai on-premise cho phòng kỹ thuật.`,
          `Phân hệ lập tiến độ theo đường găng trên biểu đồ Gantt, bộ chỉ số theo dõi và nhật ký ghi nhận thay đổi.`,
          `Công cụ tự động tạo tài liệu theo mẫu và các tác vụ định kỳ kèm thông báo email.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Hoạt động phối hợp công việc và theo dõi tiến độ của các nhóm kỹ thuật được quản lý tập trung trên một hệ thống duy nhất.`,
          `Hệ thống tiếp tục được mở rộng để tích hợp thêm các tác vụ nội bộ khác, giúp đội ngũ kỹ sư thao tác trên một giao diện thống nhất. Bản chất bài toán quản lý này tương đồng với việc tích hợp hệ thống trong nhà máy: thay vì chắp vá các công cụ riêng rẽ, giải pháp hiệu quả là thiết lập một nền tảng trung tâm rồi gom dần các luồng dữ liệu về một mối.`,
          `Mã nguồn dự án này không công khai.`
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
    industries: ["infrastructure"],
    pillars: ["giam-sat-tap-trung"],
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
          `Nhà máy xử lý nước thải Tra Vinh cần xây dựng hệ thống SCADA giám sát toàn diện dây chuyền, đồng thời tự động tổng hợp số liệu vận hành thành các báo cáo phục vụ công tác kiểm soát nội bộ.`
        ]
      },
      {
        heading: "Cách tiếp cận",
        paragraphs: [
          `Tầng điều khiển của nhà máy sử dụng PLC Modicon M241 của Schneider Electric. Phần mềm Citect được chọn cho lớp giám sát để đồng bộ cùng hãng với PLC, giúp kết nối truyền thông trực tiếp mà không cần cài đặt thêm phần mềm trung gian chuyển đổi giao thức, qua đó giảm bớt điểm lỗi tiềm ẩn và khối lượng bảo trì sau này.`,
          `Lựa chọn này khác với dự án ICS tại một nhà máy khác, nơi tôi quyết định giữ lại WinCC của Siemens bên trên các bộ điều khiển Schneider vì người vận hành tại đó đã quen thuộc với giao diện cũ. Tại Tra Vinh, hệ thống được đầu tư mới từ đầu, không có ràng buộc đó, nên chọn cùng hãng là chọn cái đơn giản hơn.`,
          `Về khâu báo cáo, tôi xây dựng công cụ trích xuất dữ liệu tự động bằng Excel VBA, chuyển đổi thông số lưu trữ thành các báo cáo định kỳ phục vụ theo dõi vận hành hằng ngày.`
        ]
      },
      {
        heading: "Bàn giao",
        paragraphs: [
          `Cấu hình hệ thống SCADA trên Schneider Citect, giao tiếp trực tiếp với mạng PLC M241 của dây chuyền.`,
          `Bộ công cụ trích xuất báo cáo vận hành tự động viết bằng Excel VBA.`
        ]
      },
      {
        heading: "Kết quả",
        paragraphs: [
          `Toàn bộ dây chuyền xử lý nước thải được đưa về quản lý tập trung trên một giao diện giám sát chung.`,
          `Báo cáo vận hành được hệ thống tự động kết xuất từ cơ sở dữ liệu, thay thế công việc ghi chép thông số thủ công từ màn hình.`
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
