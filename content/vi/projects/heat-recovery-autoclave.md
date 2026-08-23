---
title: "Hệ thu hồi nhiệt autoclave, line 1 và 2"
seotitle: "Hệ thu hồi nhiệt autoclave, Siemens S7-1500 — Võ Nhật Quang"
descriptor: "Nhà máy vật liệu xây dựng"
translationKey: "heat-recovery-autoclave"
category: "ci"
order: 2
role: "Site Manager kiêm cố vấn kỹ thuật"
period: "2021 – 2024"
scale: "Hai line sản xuất"
stack: ["Siemens S7-1500", "TIA Portal V17"]
diagram: "heat-recovery-autoclave"
outcome_basis: "target"
summary: "Chuyển vận hành tay sang bán tự động, vượt mục tiêu tiết kiệm chi phí đặt ra cho dự án."
---

## Bài toán

Trước khi có hệ thu hồi, cụm autoclave của Hiep Phu Corporation vận hành hoàn toàn bằng
tay. Người vận hành theo dõi qua các bộ đo lường và hiển thị đơn lẻ gắn trên mặt tủ, mỗi
đồng hồ một thông số, không có chỗ nào nhìn được toàn cảnh chu trình.

Ở giai đoạn xả áp, toàn bộ hơi và nhiệt trong lò được xả ra môi trường qua hệ khử mùi. Đó
là nhiệt đã trả tiền để tạo ra, dùng xong một lần rồi bỏ. Trong khi ở ngay cạnh đó, một lò
khác đang ở giai đoạn gia nhiệt và đang tiêu thụ hơi mới từ nồi hơi.

## Cách tiếp cận

Ý tưởng thì hiển nhiên: lấy hơi của lò đang xả đưa sang lò đang cần gia nhiệt. Cái khó nằm
ở hai chỗ khác.

Thứ nhất là thu được bao nhiêu. Áp suất trong lò giảm dần suốt quá trình xả, nên lượng
nhiệt còn dùng được cũng giảm theo. Hệ được thiết kế để tận dụng hơi trong dải từ 9 xuống
3 bar đưa sang lò khác, phần còn lại dưới ngưỡng đó mới xả ra bộ khử mùi như trước.

Thứ hai, và đây mới là chỗ dễ hỏng, là việc rút hơi ra để thu hồi chính là can thiệp vào
đường áp suất của lò đang xả. Chu trình autoclave có ba đoạn phải giữ đúng: tăng áp, giữ
áp, hạ áp. Nếu thu hồi làm đường hạ áp gấp khúc thì chất lượng mẻ bị ảnh hưởng, và khi đó
tiết kiệm được bao nhiêu cũng không còn ý nghĩa. Nên phần điều khiển lượng hơi phải làm
sao cho cả ba đoạn diễn ra mịn nhất có thể, chứ không phải thu càng nhiều càng tốt.

Toàn bộ được lập trình trên Siemens S7-1500 bằng TIA Portal V17, cho cả hai line.

## Bàn giao

Chương trình điều khiển chu trình autoclave trên S7-1500, gồm phần điều tiết lượng hơi cho
ba đoạn tăng, giữ và hạ áp.

Logic thu hồi ghép giữa lò đang xả và lò đang gia nhiệt, kèm ngưỡng chuyển sang xả ra bộ
khử mùi.

Chuyển toàn bộ cụm từ vận hành tay sang bán tự động trên cả hai line.

## Kết quả

So với mục tiêu tiết kiệm chi phí gia nhiệt nồi hơi mà dự án đặt ra ban đầu, hệ đạt 140%.

Ngoài phần chi phí, việc chuyển từ tay sang bán tự động làm nhà máy linh hoạt hơn trong
điều độ, vì chu trình không còn phụ thuộc vào việc người vận hành có mặt đúng lúc để thao
tác từng bước.
