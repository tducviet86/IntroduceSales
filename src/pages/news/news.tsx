import React from "react";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArticleIcon from "@mui/icons-material/Article";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

// ---------- Types ----------
interface CategoryCount {
  name: string;
  count: number;
}

interface ArticleBase {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO string
  author: string;
  image?: string;
}

interface FeaturedArticle extends ArticleBase {
  featured?: boolean;
}

// ---------- Data ----------
const newsCategories: CategoryCount[] = [
  { name: "Tất cả", count: 24 },
  { name: "Phân tích thị trường", count: 8 },
  { name: "Chính sách", count: 6 },
  { name: "Khuyến mãi", count: 5 },
  { name: "Hướng dẫn", count: 5 },
];

const featuredNews: FeaturedArticle[] = [
  {
    id: 1,
    title: "Thị trường bất động sản Q4/2024: Xu hướng phục hồi mạnh mẽ",
    excerpt:
      "Phân tích chi tiết về tình hình thị trường bất động sản trong quý 4 và dự báo cho năm 2025...",
    category: "Phân tích thị trường",
    date: "2024-01-15",
    author: "Nguyễn Văn Minh",
    image: "/real-estate-market-analysis-chart.png",
    featured: true,
  },
  {
    id: 2,
    title: "Chính sách mới về thuế bất động sản có hiệu lực từ 2024",
    excerpt:
      "Những thay đổi quan trọng trong chính sách thuế ảnh hưởng đến quyết định đầu tư...",
    category: "Chính sách",
    date: "2024-01-12",
    author: "Nguyễn Văn Minh",
    image: "/placeholder-l6ojs.png",
    featured: false,
  },
  {
    id: 3,
    title: "Vinhomes Grand Park ưu đãi lên đến 8% cho khách hàng mua trong tháng 1",
    excerpt: "Chương trình khuyến mãi hấp dẫn dành cho khách hàng quan tâm đến dự án...",
    category: "Khuyến mãi",
    date: "2024-01-10",
    author: "Nguyễn Văn Minh",
    image: "/real-estate-promotion-banner.png",
    featured: false,
  },
];

const regularNews: ArticleBase[] = [
  {
    id: 4,
    title: "Hướng dẫn thủ tục vay mua nhà 2024: Những điều cần biết",
    excerpt: "Quy trình vay ngân hàng mua nhà chi tiết từ A-Z...",
    category: "Hướng dẫn",
    date: "2024-01-08",
    author: "Nguyễn Văn Minh",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Top 5 khu vực có tiềm năng tăng giá mạnh trong năm 2024",
    excerpt: "Phân tích các khu vực đầu tư tiềm năng tại TP.HCM và Hà Nội...",
    category: "Phân tích thị trường",
    date: "2024-01-05",
    author: "Nguyễn Văn Minh",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Kinh nghiệm chọn căn hộ đầu tư cho thuê hiệu quả",
    excerpt: "Những tiêu chí quan trọng khi chọn căn hộ để đầu tư cho thuê...",
    category: "Hướng dẫn",
    date: "2024-01-03",
    author: "Nguyễn Văn Minh",
    image: "/placeholder.svg?height=200&width=300",
  },
];

// ---------- Helpers ----------
const getCategoryIcon = (category: string): React.ElementType => {
  switch (category) {
    case "Phân tích thị trường":
      return TrendingUpIcon;
    case "Chính sách":
      return ArticleIcon;
    case "Khuyến mãi":
      return CardGiftcardIcon;
    case "Hướng dẫn":
      return PersonIcon;
    default:
      return ArticleIcon;
  }
};

const getCategoryColor = (category: string): string => {
  switch (category) {
    case "Phân tích thị trường":
      return "bg-blue-100 text-blue-800";
    case "Chính sách":
      return "bg-purple-100 text-purple-800";
    case "Khuyến mãi":
      return "bg-red-100 text-red-800";
    case "Hướng dẫn":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// ---------- Primitive UI (Tailwind-only) ----------
const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>
);
const CardContent: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <div className={className}>{children}</div>
);
const Badge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}>{children}</span>
);
const Button: React.FC<React.PropsWithChildren<{ className?: string; variant?: "solid" | "outline"; size?: "sm" | "md" | "lg" }>> = ({
  className = "",
  variant = "solid",
  size = "md",
  children,
}) => {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition";
  const sizes: Record<string, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-base",
  };
  const variants: Record<string, string> = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-slate-300 bg-white text-slate-800",
  };
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>{children}</button>;
};

// ---------- Component ----------
const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Tin tức & Thị trường</h1>
        <p className="text-xl text-gray-600">Cập nhật thông tin mới nhất về thị trường bất động sản</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Danh mục tin tức</h3>
              <div className="space-y-2">
                {newsCategories.map((category) => (
                  <div
                    key={category.name}
                    className="flex cursor-pointer items-center justify-between rounded p-2 hover:bg-gray-50"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <Badge className="bg-slate-100 text-slate-700">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Đăng ký nhận tin</h3>
              <p className="mb-4 text-sm text-gray-600">Nhận thông tin thị trường và khuyến mãi mới nhất qua email</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full">Đăng ký</Button>
              </form>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          {/* Featured Article */}
          {featuredNews[0] && (
            <Card className="mb-8 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredNews[0].image || "/placeholder.svg"}
                    alt={featuredNews[0].title}
                    className="h-64 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <Badge className={`mb-3 ${getCategoryColor(featuredNews[0].category)}`}>
                    {featuredNews[0].category}
                  </Badge>
                  <h2 className="mb-3 cursor-pointer text-2xl font-bold hover:text-blue-600">
                    {featuredNews[0].title}
                  </h2>
                  <p className="mb-4 text-gray-600">{featuredNews[0].excerpt}</p>
                  <div className="mb-4 flex items-center text-sm text-gray-500">
                    <CalendarMonthIcon className="mr-2 h-4 w-4" />
                    {new Date(featuredNews[0].date).toLocaleDateString("vi-VN")}
                    <PersonIcon className="ml-4 mr-2 h-4 w-4" />
                    {featuredNews[0].author}
                  </div>
                  <Link to={`/news/${featuredNews[0].id}`}>
                    <Button>Đọc tiếp</Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {[...featuredNews.slice(1), ...regularNews].map((article) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <Card key={article.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-48 w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center">
                      <CategoryIcon className="mr-2 h-4 w-4" />
                      <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                    </div>

                    <h3 className="mb-2 line-clamp-2 cursor-pointer text-lg font-semibold hover:text-blue-600">
                      {article.title}
                    </h3>

                    <p className="mb-4 line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>

                    <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <CalendarMonthIcon className="mr-1 h-3 w-3" />
                        {new Date(article.date).toLocaleDateString("vi-VN")}
                      </div>
                      <div className="flex items-center">
                        <PersonIcon className="mr-1 h-3 w-3" />
                        {article.author}
                      </div>
                    </div>

                    <Link to={`/news/${article.id}`}>
                      <Button variant="outline" className="w-full">Đọc tiếp</Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">Xem thêm tin tức</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewsPage;
