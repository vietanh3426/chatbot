import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Chatbot: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f8fcf9] text-[#0d1b10] antialiased min-h-screen flex flex-col relative overflow-hidden font-display">
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-[#e7f3e9] px-8 py-4 sticky top-0 z-10">
         <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
               <span className="material-symbols-outlined text-[#228B22] text-3xl">eco</span>
               <h1 className="text-2xl font-bold text-[#228B22] tracking-tight">Trà Xanh</h1>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-[#0d1b10]">
               <button onClick={() => onNavigate(Page.SHOP)} className="hover:text-[#228B22] transition-colors">Sản phẩm</button>
               <button onClick={() => onNavigate(Page.BLOG)} className="hover:text-[#228B22] transition-colors">Câu chuyện</button>
            </div>
         </div>
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0d1b10] leading-tight">Tinh hoa trà Việt <br/><span className="text-[#228B22]">cho sức khỏe vàng</span></h2>
         </div>
         <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd8oyNZ7VKcbhIzntOwXR4dgvuI7_Emilc8ZD8wTGeUvKKJNKXROLxvQlrbIuK3PpkZItLopmX7wi_Q3zknHzRsYsw756WJiHxXtC5CKxYi0YaMooGqE_wIwHsVGDBmzGbM54JcC0bJxwc1lXkQT54yhU0vyMHeKyoATLFVKBdWdY9LshGAthwcjpVfM_cGpe1Njbd1YhWlA7XaeP1DJAZQO7RwLBrqjdTTOvj6degGSSZSDCx1xHSq4_mTDi9msmlP5j9B68FrI4" alt="Tea background" />
         </div>
      </main>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-display">
         <div className="w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#e7f3e9] ring-1 ring-black/5">
            <header className="bg-white border-b border-[#e7f3e9] p-4 flex items-center justify-between shrink-0 relative">
               <div className="flex items-center gap-3">
                  <div className="relative">
                     <div className="w-10 h-10 rounded-full bg-[#e7f3e9] flex items-center justify-center text-[#228B22] overflow-hidden ring-2 ring-white shadow-sm"><span className="material-symbols-outlined text-2xl">smart_toy</span></div>
                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#13ec37] border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                     <h3 className="text-[#0d1b10] font-bold text-base leading-tight">Trà Xanh Bot</h3>
                     <p className="text-xs text-gray-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#13ec37] animate-pulse"></span> Luôn sẵn sàng hỗ trợ</p>
                  </div>
               </div>
               <button className="p-2 text-gray-400 hover:text-[#0d1b10] hover:bg-gray-50 rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">close</span></button>
            </header>
            <div className="flex-1 bg-[#f8fcf9] overflow-y-auto p-4 flex flex-col gap-4">
               <div className="flex justify-center my-2"><span className="text-[11px] text-gray-400 font-medium bg-[#e7f3e9]/50 px-3 py-1 rounded-full">Hôm nay, 10:23 AM</span></div>
               <div className="flex items-end gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-[#e7f3e9] flex items-center justify-center text-[#228B22] shrink-0"><span className="material-symbols-outlined text-[16px]">smart_toy</span></div>
                  <div className="flex flex-col gap-1 items-start max-w-[85%]">
                     <span className="text-[11px] text-gray-500 ml-1">Trà Xanh Bot</span>
                     <div className="bg-white border border-[#e7f3e9] text-[#0d1b10] px-4 py-3 rounded-2xl rounded-bl-none shadow-sm text-[14px] leading-relaxed">Xin chào! Mình là trợ lý ảo Trà Xanh 🌿. <br/>Mình có thể giúp gì cho bạn hôm nay?</div>
                  </div>
               </div>
               <div className="flex flex-wrap gap-2 pl-10">
                  <button className="flex items-center gap-1.5 bg-white hover:bg-[#e7f3e9] border border-[#e7f3e9] text-[#228B22] text-xs font-medium px-3 py-2 rounded-lg transition-colors shadow-sm"><span className="material-symbols-outlined text-[16px]">local_shipping</span> Phí vận chuyển</button>
                  <button className="flex items-center gap-1.5 bg-white hover:bg-[#e7f3e9] border border-[#e7f3e9] text-[#228B22] text-xs font-medium px-3 py-2 rounded-lg transition-colors shadow-sm"><span className="material-symbols-outlined text-[16px]">psychology</span> Tư vấn chọn trà</button>
               </div>
               <div className="flex items-end gap-2 justify-end group">
                  <div className="flex flex-col gap-1 items-end max-w-[85%]">
                     <div className="bg-[#13ec37] text-[#0d1b10] px-4 py-3 rounded-2xl rounded-br-none shadow-md text-[14px] leading-relaxed font-medium">Mình muốn tìm loại trà giúp ngủ ngon ạ.</div>
                  </div>
               </div>
               <div className="flex items-end gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-[#e7f3e9] flex items-center justify-center text-[#228B22] shrink-0"><span className="material-symbols-outlined text-[16px]">smart_toy</span></div>
                  <div className="flex flex-col gap-1 items-start max-w-[85%]">
                     <div className="bg-white border border-[#e7f3e9] text-[#0d1b10] px-4 py-3 rounded-2xl rounded-bl-none shadow-sm text-[14px] leading-relaxed">Tuyệt vời! Đối với giấc ngủ ngon, mình gợi ý bạn dùng thử dòng <b>Trà Sen</b> hoặc <b>Trà Hoa Cúc</b>.</div>
                  </div>
               </div>
            </div>
            <div className="bg-white p-3 border-t border-[#e7f3e9] shrink-0">
               <div className="relative flex items-center bg-[#f8fcf9] rounded-xl border border-transparent focus-within:border-[#13ec37] focus-within:ring-2 focus-within:ring-[#13ec37]/20 transition-all">
                  <input className="w-full bg-transparent border-none text-sm text-[#0d1b10] placeholder-gray-400 h-11 pl-4 pr-12 focus:ring-0 rounded-xl" placeholder="Nhập tin nhắn..." type="text"/>
                  <div className="absolute right-1 flex items-center"><button className="p-2 text-[#228B22] hover:bg-[#13ec37] hover:text-[#0d1b10] rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">send</span></button></div>
               </div>
            </div>
         </div>
         <button className="h-14 w-14 rounded-full bg-[#13ec37] hover:bg-[#00d624] text-[#0d1b10] shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"><span className="material-symbols-outlined text-3xl">chat_bubble</span></button>
      </div>
    </div>
  );
};

export default Chatbot;