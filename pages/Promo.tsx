import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Promo: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f6f6f8] dark:bg-[#111521] text-[#0e111b] dark:text-white font-display min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7eaf3] bg-[#f6f6f8]/95 backdrop-blur-md px-10 py-3 dark:border-gray-800 dark:bg-[#111521]/95">
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#1745cf]" onClick={() => onNavigate(Page.HOME)}>
                <div className="size-8 flex items-center justify-center rounded bg-[#1745cf]/10">
                    <span className="material-symbols-outlined text-[#1745cf] text-2xl">emoji_nature</span>
                </div>
                <h2 className="text-[#0e111b] dark:text-white text-xl font-bold leading-tight tracking-tight">Trà Xanh</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
                <button onClick={() => onNavigate(Page.HOME)} className="text-[#0e111b] dark:text-gray-300 text-sm font-medium hover:text-[#1745cf] transition-colors">Trang chủ</button>
                <button onClick={() => onNavigate(Page.SHOP)} className="text-[#0e111b] dark:text-gray-300 text-sm font-medium hover:text-[#1745cf] transition-colors">Sản phẩm</button>
                <button className="text-[#1745cf] text-sm font-bold leading-normal">Khuyến mãi</button>
            </nav>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] py-6">
            <div className="relative w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-12 min-h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_pmAD-cnVt8WZGuoEYLC3WcQ62F3EjkaW_TvhXbFh0am1CJ5XD7SdHl60AA5o5Y2BNeWKc0w5efXARMju7MoC8ygvgmQqFA959rHokide64RdHmtBg5zWr8En95xFs5qIYRQ4a89D3KJjkqvc3KsZ-0YOxjP6LuQkM03ei_rnvxO_jmeUOiPg9MjBR0BCHc4njuh-tq3D7PtLDt7iYPY5LdHr-IOwRV97GgYu9hrc5GFz7z16N-b3tR0qlR1ayYVpMCGkruplf1E')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
                <div className="relative z-10 px-8 md:px-16 max-w-2xl text-white">
                    <span className="inline-block px-3 py-1 bg-[#1745cf] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Mùa hè sảng khoái</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Thưởng thức vị trà tươi mát, giảm ngay 50%</h1>
                    <p className="text-lg text-gray-200 mb-8 max-w-lg">Cơ hội tuyệt vời để sở hữu những set trà xanh cao cấp với mức giá ưu đãi chưa từng có. Số lượng có hạn.</p>
                    <button className="bg-[#1745cf] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#1745cf]/30 flex items-center gap-2">Mua ngay <span className="material-symbols-outlined">arrow_forward</span></button>
                </div>
            </div>

            <section className="mb-16">
                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-500 p-2 rounded-lg text-white"><span className="material-symbols-outlined text-3xl">bolt</span></div>
                        <div>
                            <h2 className="text-2xl font-bold dark:text-white">Ưu đãi chớp nhoáng</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Nhanh tay trước khi hết giờ!</p>
                        </div>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                            <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTWTX8Rpg7BHzjwBIlAuaJ57pnUZazd0uLu8CKIrG35CzyTdYfp5m6YIIn2kE7zvmrPHWVazTPgzFpmZXt1QZQWo2MHkMKLUJKRCP658Eua9puxx95fOzh47SvrG3w6lkDtIaUzC2NHwiRr_qYqJkCTUSKk4o8AQMEl6eVwiyx2xoLgTpXereosihNzAhwxp8FhYPxuhdRxkXocXPcRZvbz1dSK9fxsDuAUapoFcN5EBUTfQV0aEP3oSinoguhXU5XPS5k6AdicAU')" }}></div>
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-40%</div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium text-lg mb-1 truncate text-[#0e111b] dark:text-white">Bột Matcha Cao Cấp</h3>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#1745cf] font-bold text-lg">150.000đ</span>
                                <span className="text-gray-400 text-sm line-through">250.000đ</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-1"><div className="bg-red-500 h-1.5 rounded-full" style={{width: '85%'}}></div></div>
                        </div>
                    </div>
                     <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                            <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXjnJDnMphfVpv-t7e8baqjdyV2bjG1SageY7OpFqSzhhq15o9s1QebU51Exa3ZazQkl9ds2hg9yulgK6lmeuB0wRESXoIkR9ACBUI9RkMa4qQOG32rlqJnewUelGaxFB7e-d-VRIl25f_Vh4AHVSoWmtRLY-an9kzdwqxfoC5uujBPJpknRPa4QRXL4pzcfg_677cF2loVg5FPwUoTHmliguK8ZRSDmdYfjJ7gnT04TYkLCA-2oFeGnKGaafzW2tT6FLfCs9GFWk')" }}></div>
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-50%</div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium text-lg mb-1 truncate text-[#0e111b] dark:text-white">Bộ Ấm Trà Tử Sa</h3>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#1745cf] font-bold text-lg">450.000đ</span>
                                <span className="text-gray-400 text-sm line-through">900.000đ</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mb-1"><div className="bg-red-500 h-1.5 rounded-full" style={{width: '92%'}}></div></div>
                        </div>
                    </div>
                 </div>
            </section>
        </div>
      </main>
    </div>
  );
};

export default Promo;