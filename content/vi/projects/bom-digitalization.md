---
title: "Số hoá quy trình chuyển giao kế hoạch sản xuất"
seotitle: "Số hoá quy trình BOM, Python trên nền Ignition — Võ Nhật Quang"
descriptor: "Nhà máy thực phẩm"
translationKey: "bom-digitalization"
category: "si"
order: 2
role: "Quản lý và cố vấn kỹ thuật"
period: "2021 – 2024"
scale: "Quy trình liên phòng ban, từ kế hoạch tới vận hành"
stack: ["Ignition", "Python", "MS SQL"]
diagram: "bom-digitalization"
outcome_basis: "qualitative"
summary: "Đưa việc chuyển giao kế hoạch sản xuất từ email và file Excel lên nền tảng trung tâm."
---

## Bài toán

Ở nhà máy Nam Duong, thông tin từ bộ phận kế hoạch được chuyển tới các phòng ban qua email,
kèm tài liệu Excel đính kèm.

Cách đó chạy được, nhưng quy trình bị rời rạc và khó kiểm soát. Mỗi lần chuyển giao là một
sự kiện độc lập nằm trong hộp thư của từng người, không phải một bước trong một luồng có
thể theo dõi.

## Cách tiếp cận

Bối cảnh quyết định phạm vi. Nhà máy đã có định hướng dùng Ignition làm nền tảng trung tâm,
và đây là dự án đầu tiên chạy trên nền tảng đó. Nên mục tiêu không dừng ở chỗ tự động hoá
một thao tác xuất file. Mục tiêu là đưa hẳn việc chuyển giao kế hoạch sản xuất tới người
vận hành lên nền tảng, tự động và có kiểm soát.

Ràng buộc lớn nhất nằm ở tài liệu. Tài liệu BOM của nhà máy không thể đổi định dạng cho vừa
với các hàm mặc định của Ignition. Đây là tài liệu của bộ phận kế hoạch, gắn với cách họ
làm việc, không phải thứ chỉnh lại được để phần mềm đọc cho tiện.

Nên phần công việc đi theo hướng ngược lại: viết script riêng để Ignition đọc được đúng
định dạng đang có, và can thiệp ở lớp SQL để quy hoạch lại cấu trúc dữ liệu cho phù hợp với
luồng mới. Công cụ uốn theo tài liệu, không phải tài liệu uốn theo công cụ.

## Bàn giao

Script tuỳ chỉnh chạy trên nền Ignition, đọc trực tiếp định dạng tài liệu BOM hiện hữu của
nhà máy thay vì yêu cầu đổi định dạng.

Cấu trúc dữ liệu trên MS SQL, quy hoạch lại để phục vụ luồng chuyển giao mới.

Luồng chuyển giao kế hoạch sản xuất từ bộ phận kế hoạch tới người vận hành, chạy tự động và
theo dõi được.

## Kết quả

Việc chuyển giao kế hoạch chuyển từ email kèm file sang một luồng nằm trên nền tảng, nên
theo dõi được thay vì nằm rải trong hộp thư từng người.

Thao tác xuất định mức thủ công được bỏ khỏi công việc hằng ngày của bộ phận kế hoạch và
bộ phận sản xuất.

Đây cũng là dự án đầu tiên chạy trên Ignition tại nhà máy, mở đường cho việc dùng nền tảng
này làm chỗ tập trung cho các bước sau.
