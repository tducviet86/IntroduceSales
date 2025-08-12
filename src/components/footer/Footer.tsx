// src/components/Footer.tsx
import { Link } from "react-router-dom"
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import FacebookIcon from "@mui/icons-material/Facebook"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import SendIcon from "@mui/icons-material/Send"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <div>
                <div className="text-xl font-bold">Minh Real Estate</div>
                <div className="text-sm text-gray-400">Chuyên viên tư vấn cao cấp</div>
              </div>
            </div>
            <p className="mb-4 text-gray-400">
              Với hơn 8 năm kinh nghiệm, chúng tôi cam kết mang đến những giải pháp đầu tư bất động sản tối ưu và uy tín
              nhất.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 hover:bg-green-700"
              >
                <ChatBubbleOutlineIcon fontSize="small" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600"
              >
                <SendIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 transition-colors hover:text-white">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 transition-colors hover:text-white">
                  Dự án
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 transition-colors hover:text-white">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-400 transition-colors hover:text-white">
                  Hướng dẫn
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Dịch vụ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tư vấn mua bán BĐS</li>
              <li>Đầu tư bất động sản</li>
              <li>Hỗ trợ vay ngân hàng</li>
              <li>Thủ tục pháp lý</li>
              <li>Định giá bất động sản</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneInTalkIcon className="text-blue-400" fontSize="small" />
                <span className="text-gray-400">0901 234 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EmailOutlinedIcon className="text-blue-400" fontSize="small" />
                <span className="text-gray-400">minh.nguyen@realestate.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <LocationOnOutlinedIcon className="mt-1 text-blue-400" fontSize="small" />
                <span className="text-gray-400">123 Nguyễn Huệ, Q1, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">© 2024 Minh Real Estate. Tất cả quyền được bảo lưu.</p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 transition-colors hover:text-white">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 transition-colors hover:text-white">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
