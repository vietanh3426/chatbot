import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const FAQ: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f8fcf9] dark:bg-[#102216] font-display text-[#0d1b12] antialiased min-h-screen flex flex-col">
       <header className="sticky top-0 z-50 bg-[#f8fcf9]/95 backdrop-blur-sm border-b border-[#e7f3eb]">
          <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1440px] mx-auto w-full">
             <div className="flex items-center gap-4 text-[#0d1b12] cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
                <div className="size-8 text-[#0fbd49]"><span className="material-symbols-outlined text-3xl">emoji_nature</span></div>
                <h2 className="text-[#0d1b12] text-xl font-bold leading-tight tracking-[-0.015em]">Trà Xanh</h2>
             </div>
             <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                <nav className="flex items-center gap-9">
                   <button onClick={() => onNavigate(Page.SHOP)} className="text-[#0d1b12] text-sm font-medium hover:text-[#0fbd49] transition-colors">Cửa hàng</button>
                   <button className="text-[#0fbd49] text-sm font-bold leading-normal">FAQ</button>
                   <button onClick={() => onNavigate(Page.CONTACT)} className="text-[#0d1b12] text-sm font-medium hover:text-[#0fbd49] transition-colors">Liên hệ</button>
                </nav>
             </div>
          </div>
       </header>

       <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
             <h1 className="text-[#0d1b12] text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">Chúng tôi có thể giúp gì cho bạn?</h1>
             <p className="text-[#4c9a66] text-lg font-normal leading-normal mb-8 max-w-xl">Tìm kiếm câu trả lời nhanh chóng về vận chuyển, sản phẩm, lợi ích sức khỏe và hơn thế nữa.</p>
             <div className="w-full max-w-lg">
                <label className="flex w-full items-stretch rounded-xl h-14 shadow-sm bg-[#e7f3eb] focus-within:ring-2 focus-within:ring-[#0fbd49]/50 transition-all overflow-hidden">
                   <div className="text-[#4c9a66] flex items-center justify-center pl-4 pr-2"><span className="material-symbols-outlined text-2xl">search</span></div>
                   <input className="flex w-full flex-1 bg-transparent border-none text-[#0d1b12] placeholder:text-[#4c9a66]/70 px-2 text-base font-normal focus:outline-none focus:ring-0" placeholder="Tìm kiếm câu hỏi (ví dụ: vận chuyển, bảo quản)..."/>
                </label>
             </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
             <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-[#e7f3eb]">
                   <div className="flex flex-col gap-6">
                      <div className="flex gap-3 items-center pb-4 border-b border-[#f0f0f0]">
                         <div className="bg-[#0fbd49]/10 rounded-full p-2 flex items-center justify-center text-[#0fbd49]"><span className="material-symbols-outlined">grid_view</span></div>
                         <div className="flex flex-col"><h3 className="text-[#0d1b12] text-base font-bold">Danh mục</h3><p className="text-[#4c9a66] text-xs">Chọn chủ đề</p></div>
                      </div>
                      <nav className="flex flex-col gap-2">
                         <a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-[#e7f3eb] text-[#0fbd49] transition-colors group" href="#shipping"><span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">local_shipping</span><span className="text-sm font-bold">Vận Chuyển</span></a>
                         <a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#e7f3eb] text-[#0d1b12] hover:text-[#0fbd49] transition-colors group" href="#product"><span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">spa</span><span className="text-sm font-medium">Sản Phẩm</span></a>
                      </nav>
                   </div>
                </div>
             </aside>
             
             <main className="flex-1 flex flex-col gap-10">
                <section id="shipping">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="bg-[#0fbd49]/10 p-2 rounded-lg text-[#0fbd49]"><span className="material-symbols-outlined">local_shipping</span></div>
                      <h2 className="text-[#0d1b12] text-2xl font-bold">Vận Chuyển & Giao Hàng</h2>
                   </div>
                   <div className="flex flex-col gap-4">
                      <details className="group bg-white rounded-xl shadow-sm border border-[#e7f3eb] open:ring-1 open:ring-[#0fbd49]/20 overflow-hidden">
                         <summary className="flex justify-between items-center cursor-pointer p-5 list-none select-none transition-colors hover:bg-gray-50"><span className="text-[#0d1b12] font-semibold text-lg group-open:text-[#0fbd49]">Bao lâu thì tôi nhận được trà?</span><span className="material-symbols-outlined text-[#4c9a66] transition-transform duration-300 group-open:rotate-180 group-open:text-[#0fbd49]">expand_more</span></summary>
                         <div className="px-5 pb-5 pt-0 text-[#4c9a66] leading-relaxed"><p>Thời gian giao hàng phụ thuộc vào vị trí của bạn. Thông thường, đơn hàng nội thành sẽ được giao trong vòng <strong>24-48 giờ</strong>.</p></div>
                      </details>
                      <details className="group bg-white rounded-xl shadow-sm border border-[#e7f3eb] open:ring-1 open:ring-[#0fbd49]/20 overflow-hidden">
                         <summary className="flex justify-between items-center cursor-pointer p-5 list-none select-none transition-colors hover:bg-gray-50"><span className="text-[#0d1b12] font-semibold text-lg group-open:text-[#0fbd49]">Phí vận chuyển là bao nhiêu?</span><span className="material-symbols-outlined text-[#4c9a66] transition-transform duration-300 group-open:rotate-180 group-open:text-[#0fbd49]">expand_more</span></summary>
                         <div className="px-5 pb-5 pt-0 text-[#4c9a66] leading-relaxed"><p>Chúng tôi miễn phí vận chuyển cho tất cả đơn hàng có giá trị trên <strong>500.000 VNĐ</strong>.</p></div>
                      </details>
                   </div>
                </section>
                
                <div className="mt-10 bg-gradient-to-br from-[#e7f3eb] to-[#dcfce7] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#cbeed4]">
                   <div className="flex flex-col gap-2 text-center md:text-left">
                      <h3 className="text-[#0d1b12] text-xl font-bold">Vẫn chưa tìm thấy câu trả lời?</h3>
                      <p className="text-[#4c9a66] font-medium">Đội ngũ hỗ trợ của Trà Xanh luôn sẵn sàng giúp đỡ bạn.</p>
                   </div>
                   <div className="flex gap-4">
                      <button className="bg-[#0fbd49] hover:bg-[#0da540] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"><span className="material-symbols-outlined text-xl">chat</span> Chat ngay</button>
                   </div>
                </div>
             </main>
          </div>
       </div>
    </div>
  );
};

export default FAQ;