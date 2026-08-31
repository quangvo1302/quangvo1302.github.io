import Link from "next/link";

export default function NotFound() {
  return (
    <article className="wrap">
      <h1>Không tìm thấy trang</h1>
      <p>Trang này không tồn tại hoặc đã được đổi đường dẫn.</p>
      <p>
        <Link href="/">Quay lại trang chủ</Link>
      </p>
    </article>
  );
}
