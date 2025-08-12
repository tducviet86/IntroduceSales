// app/projects/[id]/ProjectDetailPage.tsx (hoặc src/pages/ProjectDetailPage.tsx)
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WavesIcon from "@mui/icons-material/Waves";
import ParkIcon from "@mui/icons-material/Park";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";

// Nếu bạn có form riêng, mở import này:
// import { ContactForm } from "@/components/contact-form"

type Amenity = {
  icon: React.ElementType;
  name: string;
  description: string;
};

type FloorPlan = {
  type: string;
  area: string;
  price: string;
};

type Project = {
  id: number;
  name: string;
  location: string;
  developer: string;
  status: string;
  priceRange: string;
  area: string;
  handover: string;
  legal: string;
  description: string;
  images: string[];
  amenities: Amenity[];
  floorPlans: FloorPlan[];
};

const projectData: Project = {
  id: 1,
  name: "Vinhomes Grand Park",
  location: "Quận 9, TP.HCM",
  developer: "Vingroup",
  status: "Đang bán",
  priceRange: "2.5 - 4.2 tỷ",
  area: "50 - 120 m²",
  handover: "Q4/2024",
  legal: "Sổ hồng riêng",
  description:
    "Vinhomes Grand Park là khu đô thị sinh thái hiện đại, quy mô lớn nhất khu Đông TP.HCM với đầy đủ tiện ích cao cấp và không gian xanh thoáng mát.",
  images: [
    "/modern-apartment-aerial.png",
    "/apartment-living-room.png",
    "/swimming-pool-recreation.png",
    "/green-park-path.png",
  ],
  amenities: [
    {
      icon: WavesIcon,
      name: "Hồ bơi",
      description: "Hồ bơi tiêu chuẩn Olympic",
    },
    {
      icon: ParkIcon,
      name: "Công viên",
      description: "36ha công viên trung tâm",
    },
    {
      icon: ShoppingBagIcon,
      name: "Trung tâm thương mại",
      description: "Vincom Mega Mall",
    },
    {
      icon: SchoolIcon,
      name: "Trường học",
      description: "Hệ thống trường quốc tế",
    },
    {
      icon: DirectionsCarIcon,
      name: "Bãi đỗ xe",
      description: "Hầm để xe thông minh",
    },
    {
      icon: BusinessIcon,
      name: "Văn phòng",
      description: "Tòa nhà văn phòng hạng A",
    },
  ],
  floorPlans: [
    { type: "1PN", area: "50m²", price: "2.5 tỷ" },
    { type: "2PN", area: "70m²", price: "3.2 tỷ" },
    { type: "3PN", area: "90m²", price: "3.8 tỷ" },
    { type: "Penthouse", area: "120m²", price: "4.2 tỷ" },
  ],
};

// Components gọn, không dùng React.FC
interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}
function Badge({ className = "", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
}
function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

interface SectionCardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}
function SectionCard({ title, className = "", children }: SectionCardProps) {
  return (
    <section
      className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}
    >
      <div className="p-6">
        {title ? <h2 className="mb-4 text-2xl font-bold">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};
function PrimaryButton({ className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50 sm:w-auto ${className}`}
    />
  );
}
function OutlineButton({ className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 sm:w-auto ${className}`}
    />
  );
}

function AmenityItem({ icon: Icon, name, description }: Amenity) {
  return (
    <div className="flex items-start space-x-3 rounded-lg bg-gray-50 p-4">
      <Icon className="mt-0.5 h-8 w-8 text-blue-600" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(`Cảm ơn ${form.name}, chúng tôi sẽ liên hệ lại sớm nhất!`);
      setLoading(false);
      setForm({ name: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Họ và tên"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        required
      />
      <textarea
        name="message"
        placeholder="Nội dung cần tư vấn"
        value={form.message}
        onChange={handleChange}
        rows={3}
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Đang gửi..." : "Gửi thông tin"}
      </button>
    </form>
  );
}
export default function ProjectDetailPage() {
  const hero = projectData.images[0] ?? "/placeholder.svg";
  const gallery = projectData.images.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="mb-4 flex items-center space-x-2 text-sm text-gray-600">
          <span>Trang chủ</span>
          <span>/</span>
          <span>Dự án</span>
          <span>/</span>
          <span className="text-blue-600">{projectData.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold text-gray-900">
              {projectData.name}
            </h1>
            <div className="flex items-center text-gray-600">
              <LocationOnIcon className="mr-2 h-5 w-5" />
              <span>{projectData.location}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Badge className="bg-green-100 text-green-800">
              {projectData.status}
            </Badge>
            <PrimaryButton
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Đăng ký tư vấn ngay
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="lg:col-span-1">
          <img
            src={hero}
            alt={projectData.name}
            className="h-96 w-full rounded-lg object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((image, i) => (
            <img
              key={i}
              src={image ?? "/placeholder.svg"}
              alt={`${projectData.name} ${i + 2}`}
              className="h-44 w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-8 lg:col-span-2">
          {/* Project Info */}
          <SectionCard title="Thông tin dự án">
            <p className="mb-6 text-gray-700">{projectData.description}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <InfoRow label="Chủ đầu tư:" value={projectData.developer} />
                <InfoRow
                  label="Giá bán:"
                  value={
                    <span className="text-blue-600 font-semibold">
                      {projectData.priceRange}
                    </span>
                  }
                />
                <InfoRow label="Diện tích:" value={projectData.area} />
              </div>
              <div className="space-y-3">
                <InfoRow label="Bàn giao:" value={projectData.handover} />
                <InfoRow
                  label="Pháp lý:"
                  value={
                    <span className="text-green-600 font-semibold">
                      {projectData.legal}
                    </span>
                  }
                />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tình trạng:</span>
                  <Badge className="bg-green-100 text-green-800">
                    {projectData.status}
                  </Badge>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Amenities */}
          <SectionCard title="Tiện ích nổi bật">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projectData.amenities.map((a, i) => (
                <AmenityItem
                  key={i}
                  icon={a.icon}
                  name={a.name}
                  description={a.description}
                />
              ))}
            </div>
          </SectionCard>

          {/* Floor Plans */}
          <SectionCard title="Mặt bằng & Giá bán">
            <div className="grid gap-4 md:grid-cols-2">
              {projectData.floorPlans.map((plan, i) => (
                <div
                  key={i}
                  className="rounded-lg border p-4 transition-shadow hover:shadow-md"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{plan.type}</h3>
                    <Badge className="border border-gray-300 bg-white text-gray-800">
                      {plan.area}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Giá từ:</span>
                    <span className="text-lg font-bold text-blue-600">
                      {plan.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Map */}
          <SectionCard title="Vị trí dự án">
            <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-200">
              <p className="text-gray-500">Bản đồ vị trí dự án</p>
            </div>
          </SectionCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Đăng ký tư vấn</h3>
            <ContactForm />
          </div>
          {/* <ContactForm /> */}
          <SectionCard className="sticky top-6" title="Liên hệ trực tiếp">
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Nguyễn Văn Minh</p>
                <p className="text-sm text-gray-600">
                  Chuyên viên tư vấn cao cấp
                </p>
              </div>
              <div className="space-y-2">
                <PrimaryButton className="bg-green-600 hover:bg-green-700 w-full">
                  Chat Zalo
                </PrimaryButton>
                <OutlineButton className="w-full">
                  Gọi điện: 0901 234 567
                </OutlineButton>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Dự án liên quan">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <img
                  src="/modern-apartment-building.png"
                  alt="Dự án liên quan"
                  className="mb-2 h-20 w-full rounded object-cover"
                />
                <h4 className="text-sm font-semibold">Masteri Thảo Điền</h4>
                <p className="text-xs text-gray-600">Từ 3.2 tỷ</p>
              </div>
              <div>
                <img
                  src="/luxurious-villa-community.png"
                  alt="Dự án liên quan"
                  className="mb-2 h-20 w-full rounded object-cover"
                />
                <h4 className="text-sm font-semibold">Ecopark Hải Dương</h4>
                <p className="text-xs text-gray-600">Từ 1.8 tỷ</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
