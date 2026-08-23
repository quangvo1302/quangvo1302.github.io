---
title: "Ứng dụng quản lý than trên nền dữ liệu vận hành"
seotitle: "Ứng dụng C# trên OSIsoft PI, nhà máy nhiệt điện — Võ Nhật Quang"
descriptor: "Nhà máy nhiệt điện than"
translationKey: "coal-turbine"
category: "si"
order: 1
role: "Kỹ sư phát triển ứng dụng, trong dự án tích hợp dữ liệu trên nền PI"
period: "2021 – 2024"
scale: "Một cấu phần của lớp dữ liệu vận hành toàn nhà máy"
stack: ["OSIsoft PI", "C#", "DCS"]
diagram: "coal-management-turbine-performance"
outcome_basis: "qualitative"
summary: "Viết lại ứng dụng quản lý than để chạy trên nền PI, thay cho một phần mềm rời không tích hợp được."
---

## Bài toán

Dự án ở EVNGenco 3 không phải là làm một phần mềm. Nó là dựng một lớp dữ liệu vận hành tập
trung trên nền OSIsoft PI, gom dữ liệu từ nhiều nguồn khác nhau của nhà máy: từ DCS, và cả
từ những chỗ vẫn phải nhập tay. Mục tiêu là quy về một mối để quản lý và kiểm soát.

Quản lý than là một cấu phần trong đó. Trước dự án, việc theo dõi than từ khi tàu về được
làm qua các biểu mẫu cùng một phần mềm riêng.

Phần mềm đó chạy được. Vấn đề là nó không tích hợp được với PI. Nghĩa là dữ liệu than sẽ
nằm ngoài đúng cái hệ thống được dựng lên để không còn dữ liệu nằm ngoài.

## Cách tiếp cận

Khi một công cụ đang chạy tốt nhưng không ghép được vào kiến trúc đích, chỉ có hai đường:
bắc cầu cho nó, hoặc làm lại. Đội ngũ trao đổi với khách hàng và thống nhất chọn đường thứ
hai, xây dựng lại ứng dụng quản lý để nó nằm thẳng trên nền PI.

Đây là lựa chọn tốn công hơn ở thời điểm quyết định. Đổi lại, nó không để lại một lớp trung
gian phải nuôi về sau, và dữ liệu than đi vào cùng một nơi với phần còn lại của nhà máy chứ
không phải được đồng bộ sang định kỳ.

Tôi tham gia với vai trò kỹ sư phát triển, viết ứng dụng bằng C# trên nền PI. Ứng dụng quản
lý tồn than, và tính hiệu năng tua-bin từ dữ liệu vận hành sẵn có trong hệ.

## Bàn giao

Ứng dụng quản lý than viết bằng C#, chạy trên nền OSIsoft PI, thay thế phần mềm rời trước
đó và thay các biểu mẫu theo dõi thủ công.

Phần tính hiệu năng tua-bin dựa trên dữ liệu đã có trong PI.

## Kết quả

Dữ liệu than không còn đứng ngoài lớp dữ liệu tập trung của nhà máy. Nó nằm chung nơi với
dữ liệu từ DCS và các nguồn nhập tay khác, nên xem và đối chiếu được cùng lúc thay vì phải
mở hai hệ thống rồi tự ghép bằng mắt.

Việc quản lý tồn than và tính hiệu năng tua-bin chuyển từ biểu mẫu sang tính trực tiếp trên
dữ liệu vận hành. Nhà máy linh hoạt hơn trong điều độ, và chi phí lưu kho than giảm xuống.
