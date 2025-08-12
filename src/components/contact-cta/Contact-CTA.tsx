
// src/components/ContactCTA.tsx
"use client"

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

export function ContactCTA() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Sẵn sàng tìm bất động sản phù hợp?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Liên hệ ngay để được tư vấn miễn phí và tìm được cơ hội đầu tư tốt nhất
        </p>

        {/* CTA Buttons */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:0901234567"
            className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-5 py-3 text-lg font-semibold text-gray-900 transition hover:bg-yellow-600"
          >
            <PhoneInTalkIcon className="mr-2 h-5 w-5" />
            Gọi ngay: 0901 234 567
          </a>

          <a
            href="https://zalo.me/0901234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-5 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-600"
          >
            <ChatBubbleOutlineIcon className="mr-2 h-5 w-5" />
            Chat Zalo
          </a>

          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center justify-center rounded-lg border border-white bg-transparent px-5 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-600"
          >
            <EmailOutlinedIcon className="mr-2 h-5 w-5" />
            Gửi email
          </a>
        </div>

        {/* Feature bullets */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-2xl">🕐</div>
            <h4 className="mb-1 font-semibold">Phản hồi nhanh</h4>
            <p className="text-sm text-blue-200">Trong vòng 30 phút</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-2xl">💯</div>
            <h4 className="mb-1 font-semibold">Tư vấn miễn phí</h4>
            <p className="text-sm text-blue-200">Không phát sinh chi phí</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-2xl">🏆</div>
            <h4 className="mb-1 font-semibold">Chuyên nghiệp</h4>
            <p className="text-sm text-blue-200">8+ năm kinh nghiệm</p>
          </div>
        </div>
      </div>
    </section>
  )
}
