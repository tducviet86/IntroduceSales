// src/components/Hero.tsx
"use client"

import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              Giải pháp đầu tư tối ưu
              <span className="block text-yellow-400">Uy tín đặt lên hàng đầu</span>
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Với hơn 8 năm kinh nghiệm, tôi đã đồng hành cùng 500+ khách hàng tìm được bất động sản phù hợp và sinh lời
              cao.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0901234567"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-5 py-3 text-lg font-semibold text-gray-900 transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <PhoneInTalkIcon className="mr-2 h-5 w-5" />
                Liên hệ ngay
              </a>
              <a
                href="https://zalo.me/0901234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-5 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChatBubbleOutlineIcon className="mr-2 h-5 w-5" />
                Chat Zalo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-blue-200">Khách hàng hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">200+</div>
                <div className="text-sm text-blue-200">Dự án thành công</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">8+</div>
                <div className="text-sm text-blue-200">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>

          {/* Image/Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Chuyên viên tư vấn bất động sản"
                className="h-96 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-5 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => {
                    // TODO: mở modal video hoặc chuyển tới trang giới thiệu video
                    // ví dụ: window.open("https://www.youtube.com/watch?v=xxxx", "_blank")
                  }}
                >
                  <PlayArrowIcon className="mr-2 h-6 w-6" />
                  Xem video giới thiệu
                </button>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -left-6 -bottom-6 rounded-lg bg-white p-4 text-gray-900 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Nguyễn Văn Minh"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-semibold">Nguyễn Văn Minh</div>
                  <div className="text-sm text-gray-600">Chuyên viên cao cấp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
