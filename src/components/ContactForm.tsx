"use client";

import { useId, useState, type FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/data/web3forms";

type Status = "idle" | "submitting" | "success" | "error";

const CONTACT_REASONS = [
  "Tư vấn kỹ thuật",
  "Kết nối hợp tác dự án",
  "Phỏng vấn, chia sẻ kiến thức",
  "Khác"
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage("Form chưa được cấu hình. Vui lòng liên hệ qua email bên dưới.");
      return;
    }

    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          "Gửi không thành công. Vui lòng thử lại hoặc liên hệ qua email bên dưới."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Gửi không thành công. Vui lòng thử lại hoặc liên hệ qua email bên dưới."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-status" role="status" aria-live="polite">
        <p>Đã nhận được thông tin. Sẽ phản hồi qua email sớm nhất có thể.</p>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="Liên hệ từ vonhatquang.site" />
      <div className="contact-form-honeypot" aria-hidden="true">
        <label htmlFor={`${formId}-hp`}>Để trống trường này</label>
        <input
          id={`${formId}-hp`}
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-name`}>Họ và tên</label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Nguyễn Văn A"
          required
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-email`}>Email</label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          placeholder="name@email.com"
          required
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-phone`}>Số điện thoại (không bắt buộc)</label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-reason`}>Nội dung liên hệ</label>
        <select id={`${formId}-reason`} name="reason" required defaultValue="">
          <option value="" disabled>
            -- Chọn nội dung phù hợp --
          </option>
          {CONTACT_REASONS.map((reason) => (
            <option value={reason} key={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-message`}>
          Mô tả bài toán hoặc nội dung cần trao đổi
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          placeholder="Tóm tắt ngắn gọn hiện trạng hệ thống, phạm vi công việc hoặc vấn đề kỹ thuật đang gặp phải."
          required
        />
      </div>

      {status === "error" && (
        <p className="contact-form-error" role="alert">
          {errorMessage}
        </p>
      )}

      <button className="contact-form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Đang gửi…" : "Gửi yêu cầu trao đổi"}
      </button>

      <p className="contact-form-privacy">
        Thông tin gửi qua form này được xử lý bởi Web3Forms để chuyển tới email của
        Quang, không dùng cho mục đích khác.
      </p>
    </form>
  );
}
