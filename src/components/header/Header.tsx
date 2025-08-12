// src/components/Header.tsx
"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Dự án", href: "/projects" },
    { name: "Tin tức", href: "/news" },
    { name: "Hướng dẫn", href: "/guides" },
    { name: "Liên hệ", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-600 py-2 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <PhoneInTalkIcon className="h-4 w-4" />
                <a href="tel:0901234567" className="hover:underline">
                  0901 234 567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <EmailOutlinedIcon className="h-4 w-4" />
                <a href="mailto:minh.nguyen@realestate.com" className="hover:underline">
                  minh.nguyen@realestate.com
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Tư vấn miễn phí 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-xl font-bold text-white">M</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Minh Real Estate</div>
              <div className="text-sm text-gray-600">Chuyên viên tư vấn cao cấp</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center space-x-4 lg:flex">
            <a
              href="tel:0901234567"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              Liên hệ tư vấn
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="py-2 font-medium text-gray-700 transition-colors hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:0901234567"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ tư vấn
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
