import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

const inputBase =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600";

const cardBase = "rounded-2xl border border-slate-200 bg-white shadow-sm";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Liên hệ tư vấn</h1>
        <p className="text-xl text-slate-600">Hãy để tôi giúp bạn tìm được bất động sản phù hợp nhất</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-6 lg:col-span-1">
          <section className={`${cardBase}`}>
            <div className="p-6">
              <h3 className="mb-6 text-xl font-bold">Thông tin liên hệ</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <PhoneIcon className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Điện thoại</p>
                    <p className="text-slate-600">0901 234 567</p>
                    <p className="text-sm text-slate-500">Sẵn sàng 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MailIcon className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-600">minh.nguyen@realestate.com</p>
                    <p className="text-sm text-slate-500">Phản hồi trong 2h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PlaceIcon className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Văn phòng</p>
                    <p className="text-slate-600">123 Nguyễn Huệ, Q1, TP.HCM</p>
                    <p className="text-sm text-slate-500">Tầng 15, Tòa nhà ABC</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AccessTimeIcon className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Giờ làm việc</p>
                    <p className="text-slate-600">T2–T6: 8:00 - 18:00</p>
                    <p className="text-slate-600">T7–CN: 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Contact */}
          <section className={`${cardBase}`}>
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Liên hệ nhanh</h3>
              <div className="space-y-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700">
                  <ChatIcon className="h-4 w-4" /> Chat Zalo
                </button>
                <a
                  href="tel:0901234567"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                  <PhoneIcon className="h-4 w-4" /> Gọi ngay
                </a>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-4 py-2 font-medium text-slate-800">
                  <SendIcon className="h-4 w-4" /> Messenger
                </button>
              </div>
            </div>
          </section>

          {/* Commitments */}
          <section className={`${cardBase}`}>
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Cam kết dịch vụ</h3>
              <div className="space-y-3 text-sm">
                {[
                  "Tư vấn miễn phí 24/7",
                  "Phản hồi trong vòng 30 phút",
                  "Hỗ trợ xem nhà thực tế",
                  "Tư vấn pháp lý miễn phí",
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <section className={`${cardBase}`}>
            <div className="p-8">
              <h3 className="mb-6 text-2xl font-bold">Gửi yêu cầu tư vấn</h3>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Họ và tên *</label>
                    <input required placeholder="Nhập họ tên của bạn" className={inputBase} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Số điện thoại *</label>
                    <input required placeholder="Nhập số điện thoại" className={inputBase} />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" placeholder="Nhập email của bạn" className={inputBase} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Loại bất động sản quan tâm</label>
                    <select className={inputBase} defaultValue="">
                      <option value="" disabled>
                        Chọn loại BĐS
                      </option>
                      <option value="apartment">Căn hộ</option>
                      <option value="house">Nhà phố</option>
                      <option value="villa">Biệt thự</option>
                      <option value="land">Đất nền</option>
                      <option value="commercial">Thương mại</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Ngân sách dự kiến</label>
                    <select className={inputBase} defaultValue="">
                      <option value="" disabled>
                        Chọn mức giá
                      </option>
                      <option value="under-2">Dưới 2 tỷ</option>
                      <option value="2-3">2–3 tỷ</option>
                      <option value="3-5">3–5 tỷ</option>
                      <option value="5-10">5–10 tỷ</option>
                      <option value="over-10">Trên 10 tỷ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Khu vực quan tâm</label>
                  <input placeholder="VD: Quận 1, Quận 2, Thủ Đức..." className={inputBase} />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Mục đích</label>
                  <select className={inputBase} defaultValue="">
                    <option value="" disabled>
                      Chọn mục đích
                    </option>
                    <option value="buy-live">Mua để ở</option>
                    <option value="investment">Đầu tư</option>
                    <option value="rent">Cho thuê</option>
                    <option value="sell">Bán bất động sản</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Nội dung tư vấn</label>
                  <textarea rows={4} placeholder="Mô tả chi tiết nhu cầu của bạn..." className={inputBase} />
                </div>

                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                  Tôi đồng ý nhận thông tin tư vấn và khuyến mãi qua email/SMS
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                >
                  <SendIcon className="h-4 w-4" /> Gửi yêu cầu tư vấn
                </button>
              </form>
            </div>
          </section>

          {/* Map */}
          <section className={`${cardBase} mt-6`}>
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold">Vị trí văn phòng</h3>
              <div className="flex h-64 w-full items-center justify-center rounded-lg bg-slate-200">
                <p className="text-slate-500">Bản đồ văn phòng</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-8 text-center text-2xl font-bold">Câu hỏi thường gặp</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              q: "Dịch vụ tư vấn có mất phí không?",
              a:
                "Tất cả dịch vụ tư vấn của chúng tôi đều hoàn toàn miễn phí. Chúng tôi chỉ nhận hoa hồng từ chủ đầu tư khi giao dịch thành công.",
            },
            {
              q: "Tôi có thể xem nhà vào cuối tuần không?",
              a:
                "Có, chúng tôi hỗ trợ xem nhà 7 ngày trong tuần, kể cả cuối tuần và ngày lễ. Vui lòng đặt lịch trước để được phục vụ tốt nhất.",
            },
            {
              q: "Làm thế nào để biết giá bán có hợp lý?",
              a:
                "Chúng tôi sẽ cung cấp báo cáo phân tích giá thị trường chi tiết, so sánh với các dự án tương tự trong khu vực để bạn có cái nhìn khách quan.",
            },
            {
              q: "Có hỗ trợ thủ tục vay ngân hàng không?",
              a:
                "Có, chúng tôi có đội ngũ chuyên viên hỗ trợ thủ tục vay vốn với nhiều ngân hàng đối tác, giúp bạn có được lãi suất tốt nhất.",
            },
          ].map((item, idx) => (
            <article key={idx} className={`${cardBase}`}>
              <div className="p-6">
                <h4 className="mb-2 font-semibold">{item.q}</h4>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;