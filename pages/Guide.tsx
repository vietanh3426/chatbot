import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Guide: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f6fcf6] text-[#1b3a1b] antialiased selection:bg-[#228B22] selection:text-white font-display min-h-screen flex flex-col">
       <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#228B22]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#228B22] text-white">
                      <span className="material-symbols-outlined">emoji_food_beverage</span>
                   </div>
                   <span className="text-xl font-bold tracking-tight text-[#228B22] font-display">Trà Xanh</span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                   <button onClick={() => onNavigate(Page.SHOP)} className="text-sm font-medium text-[#4a6c4a] hover:text-[#228B22] transition-colors">Cửa hàng</button>
                   <button onClick={() => onNavigate(Page.BLOG)} className="text-sm font-medium text-[#4a6c4a] hover:text-[#228B22] transition-colors">Câu chuyện</button>
                   <button className="text-sm font-bold text-[#228B22] transition-colors">Hướng dẫn pha trà</button>
                   <button onClick={() => onNavigate(Page.CONTACT)} className="text-sm font-medium text-[#4a6c4a] hover:text-[#228B22] transition-colors">Liên hệ</button>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex rounded-full bg-[#228B22] px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#1a6b1a] transition-colors">Đăng nhập</button>
                </div>
             </div>
          </div>
       </header>

       <main className="w-full flex-grow flex flex-col items-center">
          <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
             <div className="relative overflow-hidden rounded-2xl bg-[#228B22] text-white shadow-xl">
                <div className="absolute inset-0 z-0">
                   <img className="h-full w-full object-cover opacity-30 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBANvU1lLaTNqtIzfZxhJCJwKMN4akk3FGkZQ9kM-aEJ6LuF7y3f3RfUtHnleMaL1L8cGohiVS-gasuLZ7TorXa43Ch_cIMvHVzIfVHGYy_8k8rvKjYJZNKKqIsI9sAU7eEIbAYhAjAgjk5YjIX4NdA1WWl6SobJveHxmrLk5pSiG63fhyG5DwM4A0_903MGlq1euFbBXl0iP3cswvNekSqk0JDRXlurbzVelRj9tWoRq3w1iTe8GWfPwX4nJx_MOyVATU4Ba4qGuM" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#228B22] via-[#228B22]/80 to-transparent"></div>
                </div>
                <div className="relative z-10 flex flex-col items-start gap-6 p-8 md:p-12 lg:p-16 max-w-2xl">
                   <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      <span className="material-symbols-outlined text-[16px]">school</span> Góc Kiến Thức
                   </div>
                   <h1 className="font-display text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">Nghệ Thuật <br/>Pha Trà Đạo</h1>
                   <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">Khám phá những bí quyết và công thức độc đáo để đánh thức trọn vẹn hương vị tinh túy từ lá trà xanh tự nhiên ngay tại gian bếp của bạn.</p>
                   <div className="flex flex-wrap gap-4 pt-2">
                       <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#228B22] hover:bg-gray-50 transition-colors shadow-lg">
                           <span className="material-symbols-outlined">play_circle</span> Xem Video Hướng Dẫn
                       </button>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#228B22]/10">
                <div className="lg:w-1/3 flex flex-col gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-[#228B22]"><span className="material-symbols-outlined">star</span><span className="text-sm font-bold uppercase tracking-wider">Mẹo hay hôm nay</span></div>
                        <h2 className="text-3xl font-black text-[#1b3a1b] font-display leading-tight mb-4">Cách Pha Trà Sencha Hoàn Hảo</h2>
                        <p className="text-[#4a6c4a] leading-relaxed">Sencha là loại trà phổ biến nhất tại Nhật Bản. Bí quyết nằm ở nhiệt độ nước - không bao giờ dùng nước vừa sôi già.</p>
                    </div>
                </div>
                <div className="lg:w-2/3">
                    <div className="grid gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl hover:bg-[#E8F5E9]/30 transition-colors border border-transparent hover:border-[#228B22]/10">
                            <div className="shrink-0"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#228B22]/10 text-xl font-bold text-[#228B22]">1</div></div>
                            <div className="flex-1"><h4 className="text-lg font-bold text-[#1b3a1b] mb-2">Chuẩn bị nước</h4><p className="text-[#4a6c4a] text-sm leading-relaxed mb-3">Đun sôi nước tinh khiết, sau đó mở nắp ấm và đợi khoảng 2-3 phút để nhiệt độ nước giảm xuống còn khoảng 80°C (176°F).</p></div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl hover:bg-[#E8F5E9]/30 transition-colors border border-transparent hover:border-[#228B22]/10">
                            <div className="shrink-0"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#228B22]/10 text-xl font-bold text-[#228B22]">2</div></div>
                            <div className="flex-1"><h4 className="text-lg font-bold text-[#1b3a1b] mb-2">Đánh thức ấm trà</h4><p className="text-[#4a6c4a] text-sm leading-relaxed mb-3">Tráng ấm trà bằng một ít nước nóng để làm ấm bình. Đổ nước đi. Bước này giúp duy trì nhiệt độ ổn định trong quá trình hãm trà.</p></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </main>
    </div>
  );
};

export default Guide;