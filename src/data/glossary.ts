/** Key vừa là text hiển thị vừa là khoá tra cứu (phân biệt hoa thường, khớp chính xác với marker {{...}} trong nội dung bài viết). */
export const glossary: Readonly<Record<string, string>> = {
  "FAT": "Factory Acceptance Test — nghiệm thu hệ thống tại xưởng của nhà cung cấp, trước khi chuyển tới công trường.",
  "SAT": "Site Acceptance Test — nghiệm thu hệ thống sau khi đã lắp đặt tại công trường thực tế.",
  "MAST task": "Tác vụ chính, bắt buộc của PLC Modicon M580, chứa phần lớn chương trình điều khiển. Chạy ở chế độ Cyclic (quét liên tục) hoặc Periodic (quét theo nhịp cố định, mỗi vòng bắt đầu theo một chu kỳ đặt trước).",
  "segment": "Một phần của archive lưu trữ trong WinCC (Tag Logging, Alarm Logging), gồm một cặp file cơ sở dữ liệu MDF và LDF. WinCC tạo segment mới khi segment hiện tại vượt giới hạn thời gian hoặc dung lượng đã cấu hình.",
  "CommonArchiving": "Thư mục con trong thư mục project WinCC. Khi Runtime đang chạy, cặp file MDF/LDF của một segment đặt vào đây được WinCC tự liên kết; gỡ file ra thì liên kết bị ngắt. Dữ liệu xem lại được trên OnlineTrendControl và AlarmControl.",
  "NTP": "Network Time Protocol — giao thức đồng bộ thời gian qua mạng. Các thiết bị định kỳ hỏi giờ từ một hoặc nhiều NTP server và chỉnh đồng hồ của mình theo đó.",
  "ISA-22400": "Chuẩn quốc tế định nghĩa cách tính OEE (hiệu suất thiết bị tổng thể) qua ba thành phần: tính sẵn sàng, hiệu suất, chất lượng.",
};