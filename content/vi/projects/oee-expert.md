---
title: "Hệ giám sát hiệu suất thiết bị theo ISA-22400"
seotitle: "Giám sát OEE theo ISA-22400 trên nền Ignition — Võ Nhật Quang"
descriptor: "Dự án cá nhân"
translationKey: "oee-expert"
category: "personal"
order: 1
role: "Tự kiến trúc và phát triển toàn bộ hệ thống"
period: "2025 – nay"
scale: "Toàn hệ, từ lớp thu thập tới giao diện vận hành"
stack: ["Ignition", "PostgreSQL", "TDengine", "ISA-22400"]
diagram: "oee-expert"
outcome_basis: "qualitative"
summary: "Giám sát hiệu suất thiết bị theo chuẩn ISA-22400, xuất phát từ vấn đề xử lý sự cố của nhà máy."
---

## Bài toán

Ý tưởng không đến từ công nghệ. Nó đến từ các buổi trao đổi với khách hàng về những gì họ
hay vướng trong quá trình xử lý sự cố.

Khi một thiết bị dừng, câu hỏi đặt ra không chỉ là sửa thế nào. Còn là dừng bao lâu, dừng
vì nguyên nhân gì, nguyên nhân đó đã gặp bao nhiêu lần, và tổng lại thì nhà máy đang mất
bao nhiêu năng lực sản xuất vì nó. Những câu đó cần số liệu được ghi lại có hệ thống, chứ
không phải trí nhớ của người trực ca.

Ở một góc khác, đây cũng là vấn đề quản lý đội ngũ mà tôi quan tâm ở đúng vai trò của mình.
Không đo được thì không biết chỗ nào đáng ưu tiên sửa trước.

## Cách tiếp cận

Chỉ số được chọn làm trung tâm là OEE, hiệu suất thiết bị tổng thể.

Lý do chọn OEE thay vì một chỉ số khác có hai phần. Thứ nhất, đây là chỉ số cơ bản mà hầu
hết nhà máy và doanh nghiệp sản xuất đều đã dùng, nên không phải dạy khách hàng một khái
niệm mới trước khi nói được chuyện. Thứ hai, và quan trọng hơn, OEE thể hiện đúng ba mặt
của cùng một đối tượng: tính sẵn sàng, hiệu suất, và chất lượng.

Ba mặt đó không thay thế cho nhau. Một dây chuyền chạy suốt ca mà ra nhiều hàng lỗi thì
tính sẵn sàng đẹp nhưng chất lượng kém. Một dây chuyền hàng đạt hết nhưng chạy dưới tốc độ
thiết kế thì lại là chuyện khác. Nhìn riêng từng mặt thì mỗi bên kể một câu chuyện khác
nhau về cùng một máy, và dễ dẫn tới ưu tiên sai. Gộp cả ba mới ra được bức tranh dùng để
quyết định.

Phần tính toán bám theo ISA-22400, tiêu chuẩn quốc tế về chỉ số hiệu năng cho quản lý sản
xuất. Bám chuẩn thay vì tự định nghĩa cách tính là để con số của hệ có thể đối chiếu được
với con số nhà máy đang dùng, thay vì trở thành một cách đo thứ hai không ai so được với
cái gì.

Về cách dựng hệ, nói ở mức tổng quan: dữ liệu từ thiết bị đi vào một lớp lưu trữ chuỗi thời
gian trên TDengine, còn lịch sử vận hành nằm ở PostgreSQL. Hai loại dữ liệu này có nhịp ghi
và cách truy vấn khác nhau, nên tách ra thay vì ép chung một nơi. Giao diện vận hành xây
trên nền Ignition.

Toàn bộ hệ do tôi tự xây dựng, từ lớp thu thập tới giao diện.

## Bàn giao

Hệ giám sát hiệu suất thiết bị theo chuẩn ISA-22400, tính đủ ba thành phần sẵn sàng, hiệu
suất và chất lượng.

Giao diện theo dõi trên nền Ignition cho người vận hành và người quản lý sản xuất.

## Kết quả

Hệ tính đủ ba thành phần của OEE theo cách định nghĩa của ISA-22400, nên con số đưa ra đối
chiếu được với con số nhà máy đang dùng thay vì là một thang đo riêng.

Trang này mô tả ở mức tổng quan. Chi tiết cấu hình, cách tổ chức dữ liệu bên trong và mã
nguồn không công khai.
