import Image from "next/image";

export function ProfilePhoto({
  size,
  className,
  priority = false,
}: {
  size: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/photos/vo-nhat-quang.jpg"
      alt="Chân dung Võ Nhật Quang"
      width={960}
      height={960}
      priority={priority}
      className={className ? `profile-photo ${className}` : "profile-photo"}
      style={{ width: size, height: size }}
    />
  );
}

