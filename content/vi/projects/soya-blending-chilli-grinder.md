---
title: "Hệ phối trộn tương và nghiền ớt"
seotitle: "Hệ phối trộn và nghiền, TIA Portal V17 — Võ Nhật Quang"
descriptor: "Nhà máy thực phẩm"
translationKey: "soya-chilli"
category: "ci"
order: 4
role: "Quản lý dự án"
period: "2021 – 2024"
scale: "Hai cụm thiết bị chế biến"
stack: ["Siemens TIA Portal V17", "HMI KTP 1200 Comfort"]
diagram: "soya-blending-chilli-grinder"
outcome_basis: "qualitative"
summary: "Nâng cấp và lập trình lại hệ điều khiển, chuyển quy trình từ vận hành tay sang bán tự động."
---

## Bài toán

Các công đoạn ở nhà máy Nam Duong vận hành riêng lẻ, không có chỗ nào giám sát chung. Mỗi
cụm thiết bị là một ốc đảo, và việc ghép chúng thành một mẻ hoàn chỉnh nằm ở người vận
hành: canh thời điểm, chuyển công đoạn, kiểm tra bằng mắt rồi cho chạy tiếp.

Hệ quả là thời gian chạy một mẻ bị kéo dài, và độ dài đó thay đổi theo người đứng ca.

## Cách tiếp cận

Vai trò của tôi ở dự án này là quản lý dự án, không phải người viết chương trình. Phần khó
vì vậy nằm ở chỗ khác so với các dự án tôi trực tiếp lập trình.

Việc đầu tiên là ngồi trực tiếp với khách hàng để thống nhất quy trình điều khiển. Quy
trình phối trộn là kiến thức sản xuất của họ, không phải thứ nhà tích hợp tự nghĩ ra rồi áp
xuống. Chốt được quy trình trước khi viết dòng lệnh nào là cách rẻ nhất để tránh phải viết
lại.

Sau đó là phân chia công việc cho các thành viên trong nhóm theo phần đã chốt.

Phần còn lại là kiểm soát chất lượng lập trình, và ở đây tôi làm qua các buổi chạy
simulator. Toàn bộ logic được chạy thử trên mô phỏng và soát trước khi mang ra hiện trường.
Với một dây chuyền thực phẩm đang sản xuất, một lỗi tuần tự phát hiện tại chỗ không chỉ tốn
thời gian sửa mà còn có thể làm hỏng nguyên liệu trong thiết bị.

## Bàn giao

Quy trình điều khiển đã thống nhất với khách hàng, làm cơ sở cho toàn bộ phần lập trình
phía sau.

Chương trình điều khiển trên TIA Portal V17 và màn hình vận hành KTP 1200 Comfort cho hai
cụm thiết bị.

Các buổi soát logic trên simulator trước khi triển khai hiện trường.

## Kết quả

Hai cụm chuyển từ vận hành tay sang bán tự động, và các công đoạn trước đây rời rạc được
đưa về giám sát chung thay vì mỗi chỗ một đồng hồ.

Việc chạy một mẻ không còn phụ thuộc vào người vận hành canh và chuyển từng công đoạn.
