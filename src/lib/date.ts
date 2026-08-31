export function formatVietnameseDate(iso: string): string {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh"
  }).format(new Date(iso));
}

export function dateTimeAttribute(iso: string): string {
  return iso.slice(0, 10);
}
