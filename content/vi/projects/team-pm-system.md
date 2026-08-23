---
title: "Team PM System, nền tảng quản lý công việc và dự án cho phòng kỹ thuật"
seotitle: "Team PM System, lập lịch đường găng và KPI — Võ Nhật Quang"
descriptor: "Dự án cá nhân"
translationKey: "team-pm-system"
category: "personal"
order: 2
role: "Tự kiến trúc và phát triển toàn bộ"
period: "2025 – nay"
scale: "Ứng dụng nội bộ phòng kỹ thuật, triển khai on-premise"
stack: ["Next.js", "PostgreSQL", "Prisma", "Docker", "CPM", "Gantt"]
diagram: "team-pm-system"
outcome_basis: "qualitative"
summary: "Đưa việc quản lý công việc đội nhóm và dự án của phòng kỹ thuật về chung một nền tảng."
---

## Bài toán

Phòng kỹ thuật quản lý công việc đội nhóm và tiến độ dự án bằng nhiều thứ rời nhau. Mỗi
loại việc một chỗ, và không có chỗ nào nhìn được toàn bộ.

Đây là vấn đề tôi gặp ở đúng vai trò của mình. Quản lý bốn đội chuyên môn nghĩa là phải trả
lời được ai đang làm gì, việc nào đang trễ, và trễ vì đâu. Trả lời được những câu đó bằng
cách đi hỏi từng người thì vẫn ra đáp án, nhưng đáp án cũ ngay khi vừa có.

## Cách tiếp cận

Mục tiêu là một nền tảng dùng chung cho cả phòng, không phải một công cụ cho riêng người
quản lý. Nếu công cụ chỉ phục vụ người báo cáo lên trên thì người nhập liệu không có lý do
gì để giữ nó chính xác, và dữ liệu sai thì mọi thứ dựng trên đó đều vô nghĩa.

Phần lập lịch dùng phương pháp đường găng, hiển thị bằng biểu đồ Gantt. Chọn đường găng vì
câu hỏi thực sự cần trả lời không phải "việc này bao giờ xong" mà là "việc nào trễ thì kéo
cả dự án trễ theo". Hai câu đó cho ra hai danh sách ưu tiên khác nhau.

Hệ chạy trên Next.js với PostgreSQL, truy cập qua Prisma, đóng gói bằng Docker và triển
khai on-premise trong hạ tầng của công ty. Đặt tại chỗ vì dữ liệu là công việc nội bộ. Có
phần sinh tài liệu từ biểu mẫu, tác vụ chạy theo lịch, và thông báo qua email cho những
việc cần người biết mà không cần người vào xem.

## Bàn giao

Nền tảng quản lý công việc và dự án dùng chung cho phòng kỹ thuật, chạy on-premise.

Lập lịch theo đường găng kèm biểu đồ Gantt, bộ chỉ số theo dõi, và nhật ký thay đổi.

Phần sinh tài liệu từ biểu mẫu và các tác vụ định kỳ kèm thông báo.

## Kết quả

Phòng kỹ thuật quản lý công việc đội nhóm và tiến độ dự án trên một nền tảng chung, thay vì
mỗi loại việc một chỗ.

Hệ vẫn đang được mở rộng. Việc đang làm là kéo thêm các tác vụ phân tán khác của doanh
nghiệp vào cùng hệ này, để đội ngũ chỉ phải mở một chỗ thay vì nhớ mỗi việc nằm ở đâu.

Đó cũng là cùng một bài toán tôi gặp ở nhà máy của khách hàng, chỉ khác chỗ đứng. Ở nhà máy
là dữ liệu vận hành nằm rải giữa các hệ không nói chuyện được với nhau. Ở đây là công việc
nằm rải giữa các công cụ không nói chuyện được với nhau. Cách xử lý giống nhau: chọn một
chỗ làm trung tâm, rồi kéo dần mọi thứ về đó thay vì bắc cầu giữa từng cặp.

Mã nguồn của dự án này không công khai.
