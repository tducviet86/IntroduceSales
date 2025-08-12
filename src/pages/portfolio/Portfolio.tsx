import React from "react";
import { Link } from "react-router-dom";

import ArticleIcon from "@mui/icons-material/Article"; // for FileText
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // for DollarSign
import SecurityIcon from "@mui/icons-material/Security"; // for Shield
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // for TrendingUp
import HomeIcon from "@mui/icons-material/Home"; // for Home
import GroupsIcon from "@mui/icons-material/Groups"; // for Users

// ---------- Types ----------
interface Category {
  icon: React.ElementType;
  title: string;
  description: string;
  guides: string[];
  color: string; // Tailwind classes for bg/text colors
}

interface FeaturedGuide {
  id: number | string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  difficulty: string;
  image?: string;
  steps: number;
}

// ---------- Data ----------
const guideCategories: Category[] = [
  {
    icon: ArticleIcon,
    title: "Thủ tục pháp lý",
    description: "Hướng dẫn các thủ tục mua bán, chuyển nhượng bất động sản",
    guides: [
      "Thủ tục mua bán nhà đất từ A-Z",
      "Cách kiểm tra pháp lý bất động sản",
      "Hướng dẫn làm sổ đỏ, sổ hồng",
    ],
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: AttachMoneyIcon,
    title: "Tài chính & Vay vốn",
    description: "Kiến thức về vay ngân hàng, tối ưu hóa tài chính",
    guides: [
      "Hướng dẫn vay mua nhà lãi suất thấp",
      "Cách tính toán khả năng tài chính",
      "Các gói vay ưu đãi từ ngân hàng",
    ],
    color: "bg-green-100 text-green-800",
  },
  {
    icon: TrendingUpIcon,
    title: "Đầu tư & Phân tích",
    description: "Chiến lược đầu tư và phân tích thị trường",
    guides: [
      "Cách chọn bất động sản đầu tư sinh lời",
      "Phân tích tiềm năng tăng giá",
      "Đầu tư cho thuê hiệu quả",
    ],
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: SecurityIcon,
    title: "Bảo hiểm & Rủi ro",
    description: "Quản lý rủi ro và bảo vệ tài sản",
    guides: [
      "Bảo hiểm bất động sản cần thiết",
      "Cách tránh rủi ro khi mua nhà",
      "Xử lý tranh chấp bất động sản",
    ],
    color: "bg-red-100 text-red-800",
  },
  {
    icon: HomeIcon,
    title: "Thiết kế & Xây dựng",
    description: "Hướng dẫn thiết kế, xây dựng và cải tạo",
    guides: [
      "Thiết kế nội thất tối ưu",
      "Quy trình xây dựng nhà ở",
      "Cải tạo nhà cũ hiệu quả",
    ],
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: GroupsIcon,
    title: "Kinh nghiệm thực tế",
    description: "Chia sẻ kinh nghiệm từ chuyên gia",
    guides: [
      "Bí quyết đàm phán giá thành công",
      "Cách chọn môi giới uy tín",
      "Kinh nghiệm mua nhà lần đầu",
    ],
    color: "bg-indigo-100 text-indigo-800",
  },
];

const featuredGuides: FeaturedGuide[] = [
  {
    id: 1,
    title: "Hướng dẫn hoàn chỉnh: Mua nhà lần đầu từ A-Z",
    description:
      "Tất cả những gì bạn cần biết khi mua nhà lần đầu, từ việc chuẩn bị tài chính đến hoàn tất thủ tục pháp lý.",
    category: "Thủ tục pháp lý",
    readTime: "15 phút",
    difficulty: "Cơ bản",
    image: "/placeholder.svg?height=200&width=300",
    steps: 8,
  },
  {
    id: 2,
    title: "Chiến lược đầu tư bất động sản cho người mới bắt đầu",
    description:
      "Hướng dẫn chi tiết về cách bắt đầu đầu tư bất động sản với vốn ít, rủi ro thấp và lợi nhuận ổn định.",
    category: "Đầu tư & Phân tích",
    readTime: "20 phút",
    difficulty: "Trung bình",
    image: "/placeholder.svg?height=200&width=300",
    steps: 10,
  },
  {
    id: 3,
    title: "Bí quyết vay ngân hàng mua nhà với lãi suất tốt nhất",
    description:
      "Cách thức chuẩn bị hồ sơ, đàm phán với ngân hàng và lựa chọn gói vay phù hợp nhất.",
    category: "Tài chính & Vay vốn",
    readTime: "12 phút",
    difficulty: "Cơ bản",
    image: "/placeholder.svg?height=200&width=300",
    steps: 6,
  },
];

// ---------- UI helpers ----------
const card = "rounded-2xl border border-slate-200 bg-white shadow-sm";
const badge = "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700";

const GuidesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Tư vấn & Hướng dẫn</h1>
        <p className="mx-auto max-w-3xl text-xl text-slate-600">
          Kiến thức chuyên sâu và hướng dẫn thực tế giúp bạn đưa ra quyết định đúng đắn trong đầu tư bất động sản
        </p>
      </div>

      {/* Featured Guides */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Hướng dẫn nổi bật</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article key={guide.id} className={`${card} overflow-hidden transition hover:shadow-md`}>
              <img src={guide.image || "/placeholder.svg"} alt={guide.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className={badge}>{guide.category}</span>
                  <span className="text-sm text-slate-500">{guide.steps} bước</span>
                </div>
                <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{guide.title}</h3>
                <p className="mb-4 line-clamp-3 text-sm text-slate-600">{guide.description}</p>
                <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
                  <span>⏱️ {guide.readTime}</span>
                  <span>📊 {guide.difficulty}</span>
                </div>
                <Link to={`/guides/${guide.id}`} className="block">
                  <button className="w-full rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
                    Xem hướng dẫn
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Guide Categories */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Danh mục hướng dẫn</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guideCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <article key={idx} className={`${card} transition hover:shadow-md`}>
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className={`mr-4 rounded-lg p-3 ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="mb-4 text-slate-600">{category.description}</p>
                  <div className="mb-6 space-y-2">
                    {category.guides.map((g, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-700">
                        <span className="mr-3 h-2 w-2 rounded-full bg-blue-600" />
                        {g}
                      </div>
                    ))}
                  </div>
                  <button className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800">
                    Xem tất cả hướng dẫn
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="rounded-2xl bg-blue-50 p-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">Mẹo nhanh từ chuyên gia</h2>
          <p className="text-slate-600">Những lời khuyên hữu ích cho việc mua bán và đầu tư bất động sản</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { emoji: "💡", title: "Kiểm tra pháp lý", text: "Luôn xác minh đầy đủ giấy tờ pháp lý trước khi giao dịch" },
            { emoji: "📍", title: "Vị trí là quan trọng nhất", text: "Chọn vị trí có tiềm năng phát triển và giao thông thuận lợi" },
            { emoji: "💰", title: "Chuẩn bị tài chính", text: "Dự trù 20-30% tổng giá trị để chi trả các khoản phí" },
            { emoji: "🔍", title: "Nghiên cứu thị trường", text: "So sánh giá cả và tìm hiểu xu hướng thị trường" },
          ].map((tip, i) => (
            <div key={i} className="rounded-lg bg-white p-4 text-center">
              <div className="mb-2 text-2xl">{tip.emoji}</div>
              <h4 className="mb-2 font-semibold">{tip.title}</h4>
              <p className="text-sm text-slate-600">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <h2 className="mb-2 text-2xl font-bold">Cần tư vấn cá nhân?</h2>
        <p className="mb-6 text-slate-600">Liên hệ trực tiếp để được tư vấn chi tiết về tình huống cụ thể của bạn</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">Đặt lịch tư vấn</button>
          <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800">Chat Zalo ngay</button>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;
