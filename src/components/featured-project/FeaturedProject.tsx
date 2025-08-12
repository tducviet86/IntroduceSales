// src/components/FeaturedProjects.tsx
import { Link } from "react-router-dom"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import HomeIcon from "@mui/icons-material/Home"

type Project = {
  id: number
  name: string
  location: string
  priceFrom: string
  status: "Mới mở bán" | "Đang bán" | "Sắp mở bán" | string
  type: "Căn hộ" | "Biệt thự" | "Nhà phố" | string
  image: string
  description: string
}

const featuredProjects: Project[] = [
  {
    id: 1,
    name: "Vinhomes Grand Park",
    location: "Quận 9, TP.HCM",
    priceFrom: "2.5 tỷ",
    status: "Đang bán",
    type: "Căn hộ",
    image: "/placeholder.svg?height=300&width=400",
    description: "Khu đô thị sinh thái hiện đại với đầy đủ tiện ích cao cấp",
  },
  {
    id: 2,
    name: "Masteri Thảo Điền",
    location: "Quận 2, TP.HCM",
    priceFrom: "3.2 tỷ",
    status: "Sắp mở bán",
    type: "Căn hộ",
    image: "/placeholder.svg?height=300&width=400",
    description: "Căn hộ cao cấp view sông Sài Gòn tuyệt đẹp",
  },
  {
    id: 3,
    name: "Ecopark Hải Dương",
    location: "Hải Dương",
    priceFrom: "1.8 tỷ",
    status: "Mới mở bán",
    type: "Biệt thự",
    image: "/placeholder.svg?height=300&width=400",
    description: "Biệt thự sinh thái trong lòng thiên nhiên xanh mát",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "Mới mở bán":
      return "bg-green-100 text-green-800"
    case "Đang bán":
      return "bg-blue-100 text-blue-800"
    case "Sắp mở bán":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Dự án nổi bật đang phân phối</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Khám phá những dự án bất động sản chất lượng cao với tiềm năng sinh lời tốt nhất
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="h-56 w-full object-cover"
                />
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
                    project.status,
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 cursor-pointer text-xl font-semibold hover:text-blue-600">{project.name}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>

                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <LocationOnIcon className="mr-2 h-4 w-4 text-blue-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <HomeIcon className="mr-2 h-4 w-4 text-blue-600" />
                    {project.type}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-blue-600">
                    <MonetizationOnIcon className="mr-1 h-5 w-5" />
                    Từ {project.priceFrom}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <span className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 transition hover:bg-gray-50">
                      Xem chi tiết
                    </span>
                  </Link>
                  <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
                    Đăng ký tư vấn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <Link to="/projects" className="inline-flex">
            <span className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-transparent px-6 py-3 text-lg font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Xem tất cả dự án
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
