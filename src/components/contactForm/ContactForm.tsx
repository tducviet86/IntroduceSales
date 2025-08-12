"use client"

import { useState } from "react"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"

type FormData = {
  name: string
  phone: string
  email: string
  propertyType: string
  budget: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    budget: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      // TODO: Gọi API backend của bạn tại đây
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
      console.log("Form submitted:", formData)
      alert("Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ sớm nhất.")
      setFormData({ name: "", phone: "", email: "", propertyType: "", budget: "", message: "" })
    } catch (err) {
      alert("Có lỗi xảy ra. Vui lòng thử lại!")
      console.error("Error submitting form:", err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold">Đăng ký tư vấn miễn phí</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              placeholder="Họ và tên *"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              placeholder="Số điện thoại *"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
              inputMode="tel"
              pattern="^[0-9+()\s-]{8,}$"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Property Type */}
          <div>
            <select
              value={formData.propertyType}
              onChange={(e) => handleChange("propertyType", e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none transition focus:border-blue-500"
            >
              <option value="" disabled>
                Loại BĐS quan tâm
              </option>
              <option value="apartment">Căn hộ</option>
              <option value="house">Nhà phố</option>
              <option value="villa">Biệt thự</option>
              <option value="land">Đất nền</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <select
              value={formData.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none transition focus:border-blue-500"
            >
              <option value="" disabled>
                Ngân sách
              </option>
              <option value="under-2">Dưới 2 tỷ</option>
              <option value="2-3">2–3 tỷ</option>
              <option value="3-5">3–5 tỷ</option>
              <option value="over-5">Trên 5 tỷ</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Nhu cầu cụ thể..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            <SendOutlinedIcon className="mr-2 h-5 w-5" />
            {submitting ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">Thông tin của bạn sẽ được bảo mật tuyệt đối</p>
      </div>
    </section>
  )
}
