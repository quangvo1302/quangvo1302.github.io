---
title: "Hệ SCADA xử lý nước thải"
seotitle: "SCADA xử lý nước thải, Citect và Modicon M241 — Võ Nhật Quang"
descriptor: "Nhà máy xử lý nước thải đô thị"
translationKey: "wastewater-scada"
category: "ci"
order: 5
role: "Thiết kế SCADA"
period: "2018 – 2020"
scale: "Toàn bộ hệ điều khiển nhà máy"
stack: ["Schneider Citect", "Modicon M241", "Excel VBA"]
diagram: "wastewater-treatment-scada"
outcome_basis: "qualitative"
summary: "Cấu hình hệ điều khiển trên Citect nối M241, xây công cụ báo cáo tự động."
---

## Bài toán

Nhà máy xử lý nước thải Tra Vinh cần một hệ giám sát cho toàn bộ dây chuyền, và cần số liệu
vận hành ở dạng dùng được để tự kiểm soát hệ thống, không phải chỉ để xem thời gian thực
rồi thôi.

## Cách tiếp cận

Lớp điều khiển của nhà máy chạy trên PLC Modicon M241 của Schneider. Chọn Citect cho lớp
giám sát vì nó cùng hệ với lớp điều khiển bên dưới, nên kết nối là đường trực tiếp của
hãng, không phải bắc thêm một lớp trung gian để hai bên nói chuyện được với nhau. Mỗi lớp
trung gian là thêm một chỗ có thể hỏng và thêm một thứ phải bảo trì.

Đây là quyết định ngược với hệ ICS mà tôi làm ở một khách hàng khác, nơi tôi giữ WinCC của
Siemens phía trên các bộ điều khiển Schneider. Ở đó lớp giám sát đã tồn tại và người vận
hành đã quen tay, nên đổi sang cùng hãng không đáng với thời gian và rủi ro bỏ ra. Ở đây
không có ràng buộc đó, hệ làm mới từ đầu, nên chọn cùng hãng là chọn cái đơn giản hơn.

Phần báo cáo làm bằng Excel VBA, phục vụ việc kiểm soát hệ thống nội bộ của nhà máy. Số
liệu vận hành được kết xuất tự động thành báo cáo thay vì phải chép tay lại từ màn hình.

## Bàn giao

Cấu hình hệ giám sát trên Schneider Citect, kết nối trực tiếp tới các PLC M241 của dây
chuyền.

Bộ công cụ báo cáo tự động viết bằng Excel VBA, phục vụ kiểm soát vận hành nội bộ.

## Kết quả

Toàn bộ dây chuyền được đưa về một chỗ giám sát chung thay vì theo dõi rời từng cụm.

Việc lập báo cáo vận hành chuyển từ chép tay sang kết xuất tự động từ số liệu của hệ.
