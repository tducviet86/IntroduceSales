// src/components/NewsPreview.tsx
import { Link } from "react-router-dom"
import EventIcon from "@mui/icons-material/Event"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

type Article = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string // ISO-like
  image: string
}

const latestNews: Article[] = [
  {
    id: 1,
    title: "Thị trường bất động sản Q4/2024: Xu hướng phục hồi mạnh mẽ",
    excerpt: "Phân tích chi tiết về tình hình thị trường bất động sản trong quý 4 và dự báo cho năm 2025...",
    category: "Phân tích thị trường",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Vinhomes Grand Park ưu đãi lên đến 8% cho khách hàng mua trong tháng 1",
    excerpt: "Chương trình khuyến mãi hấp dẫn dành cho khách hàng quan tâm đến dự án...",
    category: "Khuyến mãi",
    date: "2024-01-10",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Hướng dẫn thủ tục vay mua nhà 2024: Những điều cần biết",
    excerpt: "Quy trình vay ngân hàng mua nhà chi tiết từ A-Z với những thay đổi mới nhất...",
    category: "Hướng dẫn",
    date: "2024-01-08",
    image: "/placeholder.svg?height=200&width=300",
  },
]

function getCategoryColor(category: string) {
  switch (category) {
    case "Phân tích thị trường":
      return "bg-blue-100 text-blue-800"
    case "Khuyến mãi":
      return "bg-red-100 text-red-800"
    case "Hướng dẫn":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function NewsPreview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Tin tức & Cập nhật thị trường</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Luôn cập nhật những thông tin mới nhất về thị trường bất động sản và các chương trình ưu đãi
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((article) => (
            <div
              key={article.id}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span
                  className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(
                    article.category,
                  )}`}
                >
                  {article.category}
                </span>

                <h3 className="mb-2 line-clamp-2 cursor-pointer text-lg font-semibold hover:text-blue-600">
                  {article.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>

                <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <EventIcon className="mr-1 h-3 w-3" />
                    {new Date(article.date).toLocaleDateString("vi-VN")}
                  </div>
                  <div className="flex items-center">
                    <PersonOutlineIcon className="mr-1 h-3 w-3" />
                    Nguyễn Văn Minh
                  </div>
                </div>

                <Link
                  to={`/news/${article.id}`}
                  className="group inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  Đọc tiếp
                  <ArrowForwardIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/news"
            className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-transparent px-6 py-3 text-lg font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Xem tất cả tin tức
          </Link>
        </div>
      </div>
    </section>
  )
}
