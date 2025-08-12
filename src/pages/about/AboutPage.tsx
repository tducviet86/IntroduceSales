import React from "react";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import TrendingUp from "@mui/icons-material/TrendingUp";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import Security from "@mui/icons-material/Security";

// Type for items with an icon component
type IconType = React.ElementType;

interface Achievement {
  icon: IconType;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  { icon: PeopleAlt, title: "500+ Khách hàng hài lòng", description: "Đã tư vấn thành công cho hơn 500 khách hàng" },
  { icon: TrendingUp, title: "200+ Dự án bán thành công", description: "Kinh nghiệm phân phối nhiều dự án lớn" },
  { icon: EmojiEvents, title: "Top Sales 2023", description: "Đạt danh hiệu nhân viên xuất sắc năm 2023" },
  { icon: Security, title: "8 năm kinh nghiệm", description: "Chuyên sâu trong lĩnh vực bất động sản" },
];

const values: string[] = [
  "Uy tín và minh bạch trong mọi giao dịch",
  "Tư vấn chuyên nghiệp, phù hợp với từng khách hàng",
  "Hỗ trợ tận tình từ khâu tìm hiểu đến hoàn tất thủ tục",
  "Cập nhật thông tin thị trường chính xác và kịp thời",
];

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-slate-200">
          <img
            src="/professional-real-estate-agent.png"
            alt="Chuyên viên tư vấn"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Nguyễn Văn Minh</h1>
        <p className="text-lg text-slate-600 mb-4">Chuyên viên tư vấn bất động sản cao cấp</p>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-slate-700 text-sm font-medium">
          8+ năm kinh nghiệm
        </span>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Thành tích nổi bật</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 text-center">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 text-center">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* About Story */}
      <section className="mb-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Câu chuyện của tôi</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Với hơn 8 năm kinh nghiệm trong lĩnh vực bất động sản, tôi đã đồng hành cùng hàng trăm khách hàng trong
              hành trình tìm kiếm và đầu tư bất động sản.
            </p>
            <p>
              Xuất phát từ niềm đam mê với thị trường bất động sản và mong muốn mang đến những giải pháp đầu tư tối ưu
              cho khách hàng, tôi không ngừng học hỏi và cập nhật kiến thức về thị trường.
            </p>
            <p>
              Phương châm làm việc của tôi là "Uy tín đặt lên hàng đầu" — luôn đặt lợi ích của khách hàng làm trọng tâm
              trong mọi tư vấn và giao dịch.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/modern-office-real-estate-consultation.png"
            alt="Tư vấn khách hàng"
            className="w-full rounded-2xl object-cover shadow"
          />
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Giá trị & Cam kết</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-bold">
                {index + 1}
              </div>
              <p className="text-slate-700">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-blue-50 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Sẵn sàng tư vấn cho bạn</h2>
        <p className="text-slate-600 mb-6">
          Liên hệ ngay để được tư vấn miễn phí về các dự án phù hợp với nhu cầu của bạn
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Liên hệ tư vấn
          </a>
          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-slate-300 text-slate-800 hover:bg-white/60"
          >
            Xem dự án đang phân phối
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;