// src/components/AboutPreview.tsx
import { Link } from "react-router-dom"
import GroupIcon from "@mui/icons-material/Group"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import ShieldIcon from "@mui/icons-material/Shield"
import type { ElementType } from "react"

type Achievement = {
  icon: ElementType
  number: string
  label: string
}

const achievements: Achievement[] = [
  { icon: GroupIcon, number: "500+", label: "Khách hàng hài lòng" },
  { icon: TrendingUpIcon, number: "200+", label: "Dự án thành công" },
  { icon: EmojiEventsIcon, number: "Top 1", label: "Sales xuất sắc 2023" },
  { icon: ShieldIcon, number: "8+", label: "Năm kinh nghiệm" },
]

export function AboutPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
              Nguyễn Văn Minh
              <span className="block text-blue-600">Chuyên viên tư vấn cao cấp</span>
            </h2>

            <p className="mb-6 text-lg text-gray-700">
              Với hơn 8 năm kinh nghiệm trong lĩnh vực bất động sản, tôi đã đồng hành cùng hàng trăm khách hàng trong
              hành trình tìm kiếm và đầu tư bất động sản thành công.
            </p>

            <p className="mb-8 text-gray-600">
              Phương châm làm việc của tôi là <strong>"Uy tín đặt lên hàng đầu"</strong> — luôn đặt lợi ích của khách
              hàng làm trọng tâm trong mọi tư vấn và giao dịch.
            </p>

            {/* Achievements Grid */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {achievements.map(({ icon: Icon, number, label }, i) => (
                <div key={i} className="rounded-lg bg-blue-50 p-4 text-center">
                  <Icon className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                  <div className="text-2xl font-bold text-blue-600">{number}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/about" className="inline-flex">
                <span className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
                  Tìm hiểu thêm
                </span>
              </Link>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-lg font-semibold text-gray-800 transition hover:bg-gray-50">
                Liên hệ tư vấn
              </button>
            </div>
          </div>

          {/* Image + Floating testimonial */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Nguyễn Văn Minh - Chuyên viên tư vấn bất động sản"
                className="h-96 w-full object-cover"
              />
            </div>

            {/* Floating testimonial card (tailwind thuần) */}
            <div className="absolute -bottom-6 -right-6 w-64 rounded-lg border bg-white shadow-lg">
              <div className="p-4">
                <div className="mb-2 flex items-center">
                  <div className="text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="mb-2 text-sm text-gray-600">
                  "Anh Minh tư vấn rất tận tình và chuyên nghiệp. Nhờ anh mà tôi đã tìm được căn hộ ưng ý."
                </p>
                <div className="text-xs text-gray-500">- Chị Lan, Quận 7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
