---
title: "Hệ điều khiển độ ẩm băng tải"
seotitle: "Hệ điều khiển độ ẩm, S7-300 và HMI KTP 1200 — Võ Nhật Quang"
descriptor: "Nhà máy vật liệu xây dựng"
translationKey: "humidity-control"
category: "ci"
order: 3
role: "Lập trình PLC và thiết kế HMI, ba trên bốn line"
period: "2018 – 2020"
scale: "Ba line sản xuất"
stack: ["Siemens S7-300", "HMI KTP 1200 Comfort", "TIA Portal V13", "Biến tần"]
diagram: "humidity-control-system"
outcome_basis: "qualitative"
summary: "Điều khiển lực hút chân không dưới băng tải theo độ ẩm, thay cho đánh giá bằng mắt."
---

## Bài toán

Độ ẩm của liệu trên băng tải không được giám sát liên tục. Người vận hành nhìn bằng mắt và
dựa vào kinh nghiệm để đánh giá.

Cách đó hoạt động được cho tới khi sai. Băng tải quá ướt hoặc quá khô thì tấm liệu bị vỡ.
Nghĩa là chất lượng của cả mẻ phụ thuộc vào việc đúng người có mặt đúng ca, và vào việc
người đó nhìn ra sự thay đổi trước khi nó thành phế phẩm.

Nhà máy của Hiep Phu Corporation có bốn line, trong đó ba line chạy thường xuyên nhất.

## Cách tiếp cận

Đại lượng thực sự điều chỉnh được ở đây không phải độ ẩm mà là lực hút của hệ hút chân
không đặt dưới băng tải. Hút mạnh hơn thì liệu khô hơn. Nên bài toán trở thành: đo độ ẩm,
rồi lấy giá trị đó điều khiển biến tần của quạt hút.

Chính điều này quyết định phạm vi phần cứng. Hệ phải can thiệp vào vòng điều khiển biến tần
đang chạy, mà vòng đó nằm trong PLC hiện hữu của line. Không thể dựng một bộ điều khiển
riêng đứng bên cạnh rồi ra lệnh vào, vì như vậy là chia đôi quyền điều khiển trên cùng một
thiết bị. Nên phần logic mới được tích hợp thẳng vào S7-300 sẵn có, chứ không phải thay PLC.

Phần người vận hành nhìn thấy thì làm mới hoàn toàn. Màn hình KTP 1200 Comfort được thiết
kế lại trên TIA Portal V13, đưa độ ẩm và trạng thái hút lên một chỗ, thay cho việc đánh giá
bằng mắt trước đó.

Triển khai trên ba line chạy thường xuyên nhất trong bốn line của nhà máy.

## Bàn giao

Phần logic điều khiển độ ẩm tích hợp vào chương trình S7-300 đang chạy, liên động với vòng
điều khiển biến tần của hệ hút chân không.

Màn hình vận hành KTP 1200 Comfort thiết kế mới trên TIA Portal V13 cho ba line.

## Kết quả

Việc chỉnh lực hút chuyển từ đánh giá bằng mắt sang bám theo giá trị đo, nên các line không
còn phụ thuộc vào kinh nghiệm của từng ca vận hành để giữ liệu không quá ướt hoặc quá khô.

Ba line chuyển từ vận hành tay sang bán tự động, và điện năng tiêu thụ của nhà máy giảm
xuống.
