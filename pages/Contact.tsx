import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Contact: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f0fdf4] dark:bg-[#102210] text-slate-800 dark:text-slate-100 font-display min-h-screen flex flex-col">
       <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#1a2e1a] border-b border-[#cfe7cf] dark:border-[#2a422a] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-2 text-[#228B22] dark:text-[#0fbd0f] cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
                   <div className="size-8 text-[#0fbd0f]"><span className="material-symbols-outlined text-3xl">emoji_nature</span></div>
                   <h2 className="text-xl font-bold tracking-tight">Trà Xanh</h2>
                </div>
                <nav className="hidden md:flex gap-8">
                   <button onClick={() => onNavigate(Page.HOME)} className="text-slate-600 hover:text-[#0fbd0f] text-sm font-medium transition-colors">Trang chủ</button>
                   <button onClick={() => onNavigate(Page.SHOP)} className="text-slate-600 hover:text-[#0fbd0f] text-sm font-medium transition-colors">Sản phẩm</button>
                   <button className="text-[#0fbd0f] font-bold text-sm leading-normal">Liên hệ</button>
                </nav>
             </div>
          </div>
       </header>

       <main className="flex-grow">
          <section className="relative py-12 md:py-20 overflow-hidden">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 rounded-full bg-[#0fbd0f]/5 blur-3xl pointer-events-none"></div>
             <div className="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4">
                   <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0fbd0f]/10 text-[#0fbd0f] text-xs font-bold uppercase tracking-wider"><span className="material-symbols-outlined text-sm">mail</span> Hỗ trợ khách hàng</span>
                   <h1 className="text-[#228B22] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Liên Hệ Với Chúng Tôi</h1>
                </div>
             </div>
          </section>
          
          <section className="py-8 pb-20">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                   <div className="bg-white dark:bg-[#1a2e1a] rounded-2xl shadow-sm border border-[#cfe7cf] dark:border-[#2a422a] p-6 md:p-8 order-2 lg:order-1">
                      <div className="mb-6"><h3 className="text-xl font-bold text-[#228B22] dark:text-white mb-2">Gửi tin nhắn</h3></div>
                      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <label className="flex flex-col gap-1.5"><span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Họ và tên</span><input className="w-full rounded-lg border-[#cfe7cf] bg-[#f0fdf4]/50 px-4 py-3 focus:border-[#0fbd0f] outline-none" placeholder="Nguyễn Văn A" type="text"/></label>
                            <label className="flex flex-col gap-1.5"><span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span><input className="w-full rounded-lg border-[#cfe7cf] bg-[#f0fdf4]/50 px-4 py-3 focus:border-[#0fbd0f] outline-none" placeholder="example@email.com" type="email"/></label>
                         </div>
                         <button className="w-full flex items-center justify-center gap-2 bg-[#0fbd0f] hover:bg-[#0a8a0a] text-white font-bold py-3.5 px-6 rounded-lg transition-colors shadow-lg shadow-[#0fbd0f]/20" type="submit"><span>Gửi Tin Nhắn</span><span className="material-symbols-outlined text-lg">send</span></button>
                      </form>
                   </div>
                   <div className="flex flex-col gap-6 order-1 lg:order-2">
                       <div className="bg-white dark:bg-[#1a2e1a] rounded-2xl shadow-sm border border-[#cfe7cf] dark:border-[#2a422a] p-6 md:p-8">
                           <h3 className="text-xl font-bold text-[#228B22] dark:text-white mb-6">Thông tin liên hệ</h3>
                           <div className="space-y-6">
                               <div className="flex items-start gap-4">
                                   <div className="flex-shrink-0 size-10 rounded-full bg-[#0fbd0f]/10 flex items-center justify-center text-[#0fbd0f]"><span className="material-symbols-outlined">location_on</span></div>
                                   <div><p className="text-sm font-semibold text-slate-500 mb-1">Địa chỉ cửa hàng</p><p className="text-slate-800 font-medium">123 Đường Trà Xanh, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p></div>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
             </div>
          </section>
       </main>
    </div>
  );
};

export default Contact;