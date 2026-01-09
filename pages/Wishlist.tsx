import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Wishlist: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f2fcf5] text-[#0d121b] antialiased min-h-screen flex flex-col font-work">
       <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e7ebf3] w-full">
          <div className="px-4 md:px-10 py-3 max-w-[1280px] mx-auto w-full">
             <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-8 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
                   <div className="flex items-center gap-3 text-[#228B22]"><span className="material-symbols-outlined text-3xl">eco</span><h2 className="text-[#0d121b] text-xl font-bold leading-tight tracking-tight">Trà Xanh</h2></div>
                   <nav className="hidden md:flex items-center gap-8">
                       <button onClick={() => onNavigate(Page.SHOP)} className="text-[#0d121b] text-sm font-medium hover:text-[#228B22] transition-colors">Trà</button>
                       <button className="text-[#0d121b] text-sm font-medium hover:text-[#228B22] transition-colors">Dụng Cụ</button>
                   </nav>
                </div>
                <div className="flex items-center gap-4 flex-1 justify-end">
                    <button className="relative flex items-center justify-center p-2 rounded-full hover:bg-[#f2fcf5] text-[#0d121b] transition-colors">
                        <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                        <span className="absolute top-1 right-1 flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#228B22] opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#228B22]"></span></span>
                    </button>
                </div>
             </div>
          </div>
       </header>

       <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-[#e7ebf3] pb-6">
             <div className="flex flex-col gap-2">
                <h1 className="text-[#0d121b] text-3xl md:text-4xl font-black leading-tight tracking-tight">Danh Sách Yêu Thích</h1>
                <p className="text-[#4c669a] text-base font-normal">Bạn đã lưu <span class="font-bold text-[#228B22]">4 sản phẩm</span> trà tuyệt vời.</p>
             </div>
             <button className="text-sm font-medium text-[#4c669a] hover:text-[#228B22] underline decoration-1 underline-offset-4 flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">delete</span> Xóa tất cả</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#228B22]/20 overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                   <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBpjqYl3-eFRM55gO_98kBgF_4iaBuw_vRIn6wFkCSX6gu2qijhNSzdqSWqzPO_V9Se5dAfLt_gfJMZxp2Hh01Csu0F9jVElkAI4Rl5IMJYcEmhbaQ8_U3sIaErNz9g8lP3lXZ6isLQ3EzLGGsc50EniZQl2IgDSD0sASXX5SeGvCHsbcYtK6G43rfjGjdN2adiU9i1H0jd3un0tdAv9dgccMQtSzj-vHSN9s4T8zbOVoXPBPGTSgn8ehJj4o8m7rOxhI891bVY8g')" }}></div>
                   <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"><span className="material-symbols-outlined text-[20px]">favorite</span></button>
                   <div className="absolute bottom-3 left-3 bg-[#228B22] text-white text-xs font-bold px-2 py-1 rounded">Mới</div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                   <div className="flex justify-between items-start mb-2"><p className="text-[#4c669a] text-xs font-medium uppercase tracking-wider">Trà Xanh</p><div className="flex items-center gap-1 text-amber-400"><span className="material-symbols-outlined text-[16px] fill-current">star</span><span className="text-xs font-medium text-gray-500">4.8</span></div></div>
                   <h3 className="text-[#0d121b] text-lg font-bold leading-tight mb-2 group-hover:text-[#228B22] transition-colors cursor-pointer">Trà Sen Tây Hồ - Premium</h3>
                   <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                      <div className="flex flex-col"><span className="text-xs text-[#4c669a] line-through">300.000₫</span><span className="text-[#228B22] text-lg font-bold">250.000₫</span></div>
                      <button className="bg-[#228B22] hover:bg-[#1a6b1a] text-white p-2 rounded-lg transition-colors flex items-center justify-center"><span className="material-symbols-outlined">add_shopping_cart</span></button>
                   </div>
                </div>
             </div>
             {/* Card 2 */}
             <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#228B22]/20 overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBw-pdfDlpj9RjiXK5TC-c-uqldBZGcEhqwj4iH1vHhgyOYg1MDFgW1f3zPnyGHX90VNWpMLbKfHWBsDKrBDf9ggcvgUlod2TLh6FT9nxfRXAKR10HWtyB7qaPcWja3WUL1NDKKWyAkBs6UUrOPJIeYnZr2g9CeTYNwdfVMB81Fb_Ox-CTW15ttSR0KwazQbgEBSsV5Ko-IB26XPByOSGy5NMOqqn6WYqtpSEs5ADu1OUI7Pr3Su-TTJCWWcsHfQxqo61DEc1B5ces')" }}></div>
                    <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 transition-colors shadow-sm"><span className="material-symbols-outlined text-[20px]">favorite</span></button>
                </div>
                <div className="p-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2"><p className="text-[#4c669a] text-xs font-medium uppercase tracking-wider">Matcha</p><div className="flex items-center gap-1 text-amber-400"><span className="material-symbols-outlined text-[16px] fill-current">star</span><span className="text-xs font-medium text-gray-500">5.0</span></div></div>
                    <h3 className="text-[#0d121b] text-lg font-bold leading-tight mb-2 group-hover:text-[#228B22] transition-colors cursor-pointer">Bột Matcha Ceremonial</h3>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                        <div className="flex flex-col"><span className="text-[#228B22] text-lg font-bold">450.000₫</span></div>
                        <button className="bg-[#228B22] hover:bg-[#1a6b1a] text-white p-2 rounded-lg transition-colors flex items-center justify-center"><span className="material-symbols-outlined">add_shopping_cart</span></button>
                    </div>
                </div>
             </div>
          </div>
       </main>
    </div>
  );
};

export default Wishlist;