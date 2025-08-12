"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"

type Project = {
  id: number
  name: string
  location: string
  priceFrom: string
  status: "Mới mở bán" | "Đang bán" | "Sắp mở bán" | string
  type: "Căn hộ" | "Biệt thự" | "Nhà phố" | string
  image: string
  developer: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "Vinhomes Grand Park",
    location: "Quận 9, TP.HCM",
    priceFrom: "2.5 tỷ",
    status: "Đang bán",
    type: "Căn hộ",
    image: "/modern-apartment-garden.png",
    developer: "Vingroup",
    description: "Khu đô thị sinh thái hiện đại với đầy đủ tiện ích",
  },
  {
    id: 2,
    name: "Masteri Thảo Điền",
    location: "Quận 2, TP.HCM",
    priceFrom: "3.2 tỷ",
    status: "Sắp mở bán",
    type: "Căn hộ",
    image: "/luxury-riverside-apartment.png",
    developer: "Masterise Homes",
    description: "Căn hộ cao cấp view sông Sài Gòn",
  },
  {
    id: 3,
    name: "Ecopark Hải Dương",
    location: "Hải Dương",
    priceFrom: "1.8 tỷ",
    status: "Mới mở bán",
    type: "Biệt thự",
    image: "/eco-friendly-villa-community.png",
    developer: "Ecopark",
    description: "Biệt thự sinh thái trong lòng thiên nhiên",
  },
  {
    id: 4,
    name: "The Manor Central Park",
    location: "Quận Hoàn Kiếm, Hà Nội",
    priceFrom: "4.5 tỷ",
    status: "Đang bán",
    type: "Căn hộ",
    image: "/luxury-city-apartment.png",
    developer: "Bitexco",
    description: "Căn hộ hạng sang trung tâm Hà Nội",
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredProjects = projects.filter((project) => {
    const matchName = project.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchLocation = selectedLocation === "all" || project.location.includes(selectedLocation)
    const matchType = selectedType === "all" || project.type === selectedType
    const matchStatus = selectedStatus === "all" || project.status === selectedStatus
    return matchName && matchLocation && matchType && matchStatus
  })

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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Dự án đang phân phối</h1>
        <p className="text-xl text-gray-600">Khám phá các dự án bất động sản chất lượng cao</p>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {/* Search */}
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500"
            >
              <option value="all">Tất cả khu vực</option>
              <option value="TP.HCM">TP.HCM</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hải Dương">Hải Dương</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500"
            >
              <option value="all">Tất cả loại hình</option>
              <option value="Căn hộ">Căn hộ</option>
              <option value="Biệt thự">Biệt thự</option>
              <option value="Nhà phố">Nhà phố</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none transition focus:border-blue-500"
            >
              <option value="all">Tất cả tình trạng</option>
              <option value="Mới mở bán">Mới mở bán</option>
              <option value="Đang bán">Đang bán</option>
              <option value="Sắp mở bán">Sắp mở bán</option>
            </select>
          </div>

          {/* "Search" Button (chỉ để đồng bộ UI, lọc realtime rồi) */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
            onClick={() => {
              /* lọc đã realtime; giữ nút cho UX */
            }}
          >
            <SearchIcon className="mr-2 h-5 w-5" />
            Tìm kiếm
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.id} className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative">
              <img src={project.image || "/placeholder.svg"} alt={project.name} className="h-48 w-full object-cover" />
              <span
                className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(project.status)}`}
              >
                {project.status}
              </span>
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>

              <div className="mb-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <LocationOnIcon className="mr-2 h-4 w-4" />
                  {project.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <HomeIcon className="mr-2 h-4 w-4" />
                  {project.type}
                </div>
                <div className="flex items-center text-sm font-semibold text-blue-600">
                  <MonetizationOnIcon className="mr-1 h-5 w-5" />
                  Từ {project.priceFrom}
                </div>
              </div>

              <div className="flex gap-2">
                <Link to={`/projects/${project.id}`} className="flex-1">
                  <span className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 hover:bg-gray-50">
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

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">Không tìm thấy dự án phù hợp với tiêu chí tìm kiếm</p>
        </div>
      )}
    </div>
  )
}
