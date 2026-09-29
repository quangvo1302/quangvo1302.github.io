/** Key vừa là text hiển thị vừa là khoá tra cứu (phân biệt hoa thường, khớp chính xác với marker {{...}} trong nội dung bài viết). */
export const glossary: Readonly<Record<string, string>> = {
  "FAT": "Factory Acceptance Test — nghiệm thu hệ thống tại xưởng của nhà cung cấp, trước khi chuyển tới công trường.",
  "SAT": "Site Acceptance Test — nghiệm thu hệ thống sau khi đã lắp đặt tại công trường thực tế.",
  "MAST task": "Tác vụ chính, bắt buộc của PLC Modicon M580, chứa phần lớn chương trình điều khiển. Chạy ở chế độ Cyclic (quét liên tục) hoặc Periodic (quét theo nhịp cố định, mỗi vòng bắt đầu theo một chu kỳ đặt trước).",
  "ISA-22400": "Chuẩn quốc tế định nghĩa cách tính OEE (hiệu suất thiết bị tổng thể) qua ba thành phần: tính sẵn sàng, hiệu suất, chất lượng.",
};