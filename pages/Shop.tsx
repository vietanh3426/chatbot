import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Shop: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f8fcf8] dark:bg-[#102210] text-[#0d1b0d] flex flex-col min-h-screen font-display">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#f8fcf8]/95 backdrop-blur-md border-b border-[#e7f3e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
              <div className="size-8 text-[#0fbd0f]">
                <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fillRule="evenodd" clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/>
                   <path fillRule="evenodd" clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-[#228B22] text-xl font-bold tracking-tight">Trà Xanh</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <button onClick={() => onNavigate(Page.HOME)} className="text-[#0d1b0d] hover:text-[#0fbd0f] text-sm font-medium transition-colors">Trang chủ</button>
              <button className="text-[#0fbd0f] font-semibold text-sm transition-colors">Sản phẩm</button>
              <button onClick={() => onNavigate(Page.BLOG)} className="text-[#0d1b0d] hover:text-[#0fbd0f] text-sm font-medium transition-colors">Câu chuyện</button>
              <button onClick={() => onNavigate(Page.CONTACT)} className="text-[#0d1b0d] hover:text-[#0fbd0f] text-sm font-medium transition-colors">Liên hệ</button>
            </nav>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-[#e7f3e7] rounded-full px-3 py-1.5 w-64 focus-within:ring-2 focus-within:ring-[#0fbd0f]/50 transition-all">
                <span className="material-symbols-outlined text-[#228B22] text-xl">search</span>
                <input type="text" placeholder="Tìm kiếm trà..." className="bg-transparent border-none text-sm text-[#0d1b0d] placeholder:text-[#4c9a4c] focus:ring-0 w-full ml-2" />
              </div>
              <button className="relative p-2 text-[#0d1b0d] hover:text-[#0fbd0f] transition-colors hover:bg-[#e7f3e7] rounded-full">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute top-0 right-0 size-4 bg-[#0fbd0f] text-white text-[10px] font-bold flex items-center justify-center rounded-full">3</span>
              </button>
              <button onClick={() => onNavigate(Page.ACCOUNT)} className="p-2 text-[#0d1b0d] hover:text-[#0fbd0f] transition-colors hover:bg-[#e7f3e7] rounded-full">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5PMAe7VAAjdf8WI-qM63FkBfTx6AFZYYmJ75w5YDCdCCaf8pZ12LR0prC2AzZPST57m0_ivKhBVI_KcFQTqwPrS03nssQNlrt8FTdkqT3RSh51H4qK61AAyLsF-UImXSWBLEV8FQsFQCZnSVvRqCBCN9pkuZpDYXJFWI1AkOtPzLzvhx6_eDqtIHEYRsN-F_STWju_G_Fpv5y2lmxnZr5p1PYtkGB6Z7uj2kDqzsUaJ3W3vBsxBT_uNyBY42C5cCMUp7PmKRyiHQ')" }}></div>
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tất Cả Sản Phẩm</h1>
          <p className="text-white/90 text-sm md:text-base max-w-xl">Khám phá hương vị tinh túy từ những lá trà tươi ngon nhất, được tuyển chọn kỹ lưỡng từ các vùng trà danh tiếng.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="flex items-center text-sm font-medium">
            <button onClick={() => onNavigate(Page.HOME)} className="text-gray-500 hover:text-[#0fbd0f] transition-colors">Trang chủ</button>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#228B22] font-semibold">Cửa hàng</span>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-[#228B22] font-bold text-lg mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0fbd0f]">eco</span>
                Loại Trà
              </h3>
              <div className="space-y-3">
                {['Trà Xanh (Green Tea)', 'Hồng Trà (Black Tea)', 'Trà Thảo Mộc', 'Matcha Nhật Bản', 'Trà Ô Long'].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="size-4 rounded border-gray-300 text-[#0fbd0f] focus:ring-[#0fbd0f]/20" />
                    <span className="text-sm text-gray-700 group-hover:text-[#0fbd0f] transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>
             {/* Promo Banner in Sidebar */}
            <div className="rounded-xl overflow-hidden relative h-64 flex items-end p-4 group cursor-pointer" onClick={() => onNavigate(Page.PROMO)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk92GHEh5qc6yHgKTEK4Mk8TU-12D-PI891Pg3EbnMj7jGUSal7NnyNfJ3HhVllqKEdAebvQbattJCR1bbOBFGmDlXSwZsT99EnzE4lGWvD3galRFtLZe-TbBnJLIoAaVGJZ3ttb4F_rKP6MCbUbkyxm_gIjbz_b5tVzVwRRObufTgh26il0jwzAUSzBzubUizd7vZ6g76wzXLSvMEzKJFVnLbv3VkFgYZz2einspbthFtBuWfHTAP1QGhNJDLgenQW7yaehQh8Mc')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="relative z-10 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0fbd0f] mb-1">Bộ Sưu Tập Mới</p>
                <h4 className="text-lg font-bold leading-tight mb-2">Trà Đạo<br/>Thượng Hạng</h4>
                <span className="text-xs underline">Xem ngay</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                 {/* Product 1 */}
                 <div className="group bg-white rounded-xl overflow-hidden border border-[#e7f3e7] hover:shadow-lg hover:border-[#0fbd0f]/30 transition-all duration-300 flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-[#f8fcf8]">
                        <span className="absolute top-3 left-3 bg-[#0fbd0f] text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">BEST SELLER</span>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn_nCT9UFzSOHKjfahEPY1U8TNAZtsrgkyr_dnA3h497T9FOl3Q_7ufVVIqX09D4d_DTZVW65Nj35G8DDDOJIAwoDcEFUanyYgEyT5a0WiTjb51LdssnYELMriwrjOf1AvPxm16Zk_dzZ1swGdV3HBGNPQQceUiHarbSp4_tTrWPQ_ULXFeAOJcye3yo7O_04ZvmgREvhAAEEFu7umYRz6IaTVXgt9JjAplaWBtXODf1eUJs9_ptIMPxJqx8o4gBdnkPp5yP3-Osg" alt="Trà Xanh Thái Nguyên" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                        <p className="text-xs text-[#0fbd0f] font-medium mb-1">Trà Xanh</p>
                        <h3 className="text-[#0d1b0d] font-bold text-lg mb-1 group-hover:text-[#0fbd0f] transition-colors">Trà Xanh Thái Nguyên</h3>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-lg font-bold text-[#228B22]">150.000đ</span>
                            <span className="text-xs text-gray-400 line-through">180.000đ</span>
                        </div>
                    </div>
                 </div>
                 {/* Product 2 */}
                 <div className="group bg-white rounded-xl overflow-hidden border border-[#e7f3e7] hover:shadow-lg hover:border-[#0fbd0f]/30 transition-all duration-300 flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-[#f8fcf8]">
                        <span className="absolute top-3 left-3 bg-[#228B22] text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">ORGANIC</span>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-b52oc53Y96n924fo6GETI_XGOmHR4k6ad64fxP4bTWuZZLckrZDaUEJRt8sJ7upW8JedYLh4YIIy7_3yklzlv-M3JfrPFYZCWUeBMgHWQy4xWe1sRyLGtFOBGFwSXHTjHQPF8SO4X6AFNWO0Mu5trkmmwUsX_Y_wsd2zyOWXtcBJoHRVD2HPCDIpv3TeAfKOhyAjUixEBKh55QS1tKCAXOd4hOU53meMm4y8nq6O4FwKR849rKFe07fH4p6xM0dp9GJmbcvwnc" alt="Matcha" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                        <p className="text-xs text-[#0fbd0f] font-medium mb-1">Matcha</p>
                        <h3 className="text-[#0d1b0d] font-bold text-lg mb-1 group-hover:text-[#0fbd0f] transition-colors">Matcha Hữu Cơ Premium</h3>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-lg font-bold text-[#228B22]">350.000đ</span>
                        </div>
                    </div>
                 </div>
                 {/* Product 3 */}
                 <div className="group bg-white rounded-xl overflow-hidden border border-[#e7f3e7] hover:shadow-lg hover:border-[#0fbd0f]/30 transition-all duration-300 flex flex-col">
                    <div className="relative aspect-square overflow-hidden bg-[#f8fcf8]">
                         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWG65e8ZvLHTxphZly2_GV4AqLa5-8gNT5WEESsLUAvwejQcBYPIaNwk6mY2398wSHMZyVAekg0o26BLs1eVHj_kyJolhEYXAvf45f5SYdWGk1JB3QJ2_7OEP9symJdfxfxJ0_3S0jRpssUagwrbK_yRY-bWCtGMadUwT749xdzhq7YCqqI_tAalteBC_VuJw_XSCQplBV-tlWUGPr480KBekUMSt_cwc85VcXQhpVjhUiHrXiD-rsLjwLViip7So0J4vFUYnlAvw" alt="Trà Sen" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                        <p className="text-xs text-[#0fbd0f] font-medium mb-1">Trà Hoa</p>
                        <h3 className="text-[#0d1b0d] font-bold text-lg mb-1 group-hover:text-[#0fbd0f] transition-colors">Trà Sen Tây Hồ</h3>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-lg font-bold text-[#228B22]">200.000đ</span>
                        </div>
                    </div>
                 </div>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;