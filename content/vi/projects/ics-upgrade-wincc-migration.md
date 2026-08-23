---
title: "Nâng cấp hệ điều khiển ICS, bốn giai đoạn"
seotitle: "Nâng cấp SCADA WinCC và Modicon M580 — Võ Nhật Quang"
descriptor: "Doanh nghiệp nông nghiệp – thực phẩm"
translationKey: "ics-upgrade"
category: "ci"
order: 1
role: "Giai đoạn 1: kỹ sư lập trình. Giai đoạn 2-4: trưởng nhóm lập trình"
period: "2018 – 2024"
scale: "Hệ điều khiển chính của nhà máy, toàn bộ trạm vận hành"
stack: ["Modicon M580", "Quantum PLC", "WinCC V7.0 SP2", "WinCC V7.5 SP2", "Siemens", "Schneider Electric"]
diagram: "ics-upgrade-wincc-migration"
outcome_basis: "qualitative"
summary: "Chuyển Quantum sang Modicon M580 rồi nâng WinCC lên V7.5 SP2, chuẩn hoá toàn bộ trạm vận hành."
---

## Bài toán

Hệ điều khiển chính của nhà máy Vietnam Agribusiness Limited chạy trên PLC Quantum. Đến
thời điểm này Quantum đã dừng hỗ trợ từ hãng và không còn nguồn hàng thay thế. Một hỏng
hóc phần cứng khi đó không còn là chuyện sửa trong ngày.

Lớp giám sát phía trên là WinCC V7.0 của Siemens. Nghĩa là nhà máy vận hành một hệ hai
hãng: điều khiển Schneider bên dưới, giám sát Siemens bên trên. Bản thân WinCC V7.0 cũng
đã cũ và chạy chậm, và nhà máy muốn nâng.

Hai vấn đề khác nhau về mức độ cấp bách. Một bên là rủi ro dừng máy dài ngày vì không có
vật tư. Bên kia là hiệu năng.

## Cách tiếp cận

Thứ tự làm được quyết định trước tiên: nâng lên M580 đi trước, hệ SCADA đi sau. Chừng nào
Quantum còn nằm trong dây chuyền thì một hỏng hóc phần cứng vẫn có thể dừng nhà máy dài
ngày, và nâng SCADA trước không giải quyết được chuyện đó. Đổi PLC trước vừa gỡ được rủi
ro tồn kho, vừa đưa nhà máy về một nền tảng còn được sản xuất nên có hàng dự phòng kịp
thời.

Quyết định thứ hai là giữ nguyên WinCC ở lớp giám sát thay vì chuyển tất cả sang nền tảng
Schneider cho đồng bộ một hãng. Về mặt kỹ thuật thì chuyển được. Nhưng đổi SCADA nghĩa là
đổi toàn bộ màn hình mà người vận hành đã quen tay, kéo theo phải viết lại quy trình vận
hành và đào tạo lại. Chi phí đó không nằm ở phần mềm. Nó nằm ở thời gian, ở nguồn lực, và
ở rủi ro thao tác sai trong giai đoạn chuyển giao. Hệ hiện hữu đang là WinCC, nên giữ
WinCC.

Phần thi công bị ràng buộc bởi lịch dừng máy. Mỗi lần thay chỉ có cửa sổ hai đến ba tiếng,
và cửa sổ đó không phải lúc nào cũng có. Trong khoảng đó phải tháo Quantum, lắp M580, rồi
kiểm tra tính tương thích với phần còn lại của hệ. Nếu không đạt thì trả hệ về cấu hình cũ
ngay trong cùng cửa sổ để nhà máy chạy tiếp, và làm lại vào lần dừng sau. Mỗi bước thay vì
vậy đều phải chuẩn bị sẵn đường lui trước khi bắt đầu, chứ không phải xử lý khi đã hỏng.

Giai đoạn sau, khi lớp điều khiển đã ổn định, mới nâng WinCC từ V7.0 SP2 lên V7.5 SP2 và
chuẩn hoá lại các trạm vận hành.

## Bàn giao

Chương trình M580 cho các phần đã chuyển đổi của hệ điều khiển chính, giữ nguyên giao tiếp
với lớp WinCC hiện hữu.

Quy trình thay thế theo cửa sổ dừng máy, gồm bước kiểm tra tương thích và phương án quay
lui trong cùng cửa sổ.

Dự án WinCC V7.5 SP2 sau nâng cấp, và cấu hình trạm vận hành đã chuẩn hoá dùng chung cho
toàn bộ các trạm.

## Kết quả

Hệ điều khiển ổn định hơn sau khi ra khỏi nền tảng đã hết hỗ trợ. Việc mua vật tư thay thế
trở lại bình thường, vì M580 vẫn đang được sản xuất.

Ở lớp giám sát, sau khi chuẩn hoá, các trạm vận hành dùng chung một cấu hình và chất lượng
vòng điều khiển được cải thiện.

Vai trò của tôi thay đổi giữa hai giai đoạn. Giai đoạn đầu tôi làm kỹ sư lập trình. Các
giai đoạn sau tôi làm trưởng nhóm lập trình trên chính hệ thống đó.
