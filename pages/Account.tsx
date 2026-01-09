import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Account: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101522] font-display antialiased min-h-screen flex flex-col">
       <header className="sticky top-0 z-50 w-full border-b border-[#e7eaf3] bg-[#f6f6f8]/95 backdrop-blur dark:bg-[#101522]/95 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
                   <div className="flex size-8 items-center justify-center rounded-lg bg-[#0f3bbd]/10 text-[#0f3bbd]">
                      <span className="material-symbols-outlined">emoji_nature</span>
                   </div>
                   <h1 className="text-lg font-bold tracking-tight text-[#0d111b] dark:text-white">Trà Xanh</h1>
                </div>
                <div className="flex items-center gap-2">
                   <button className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"><div className="size-8 overflow-hidden rounded-full bg-[#0f3bbd]/10"><div className="size-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDG8EYxEYxHHXWBPuUL5BWP1tUGe767liVWe9-rr0WSbfdywYBeDsETIE3nIp8IAIJUMJcEETHyjay4SGc-FUIQTnaIO2PbalzqpcPWhDl99QojYgcb1BA4gEaRJTZuuCK9EbqM9i6K1WU4jsGOlFFSvHIkMVFu9EOm5LmDXVHZAA8IBUptAQPUKqvz0hHEF9StibI7v0aPO6_f6Nal9rI35CMa3LLY1LHK0xRD9PkS554WWGe6Va1u8SLR2fYI_Va0lKWDYMC_xtQ')" }}></div></div></button>
                </div>
             </div>
          </div>
       </header>

       <main className="flex-1 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-8 flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-[#0d111b] dark:text-white">Tài Khoản Của Tôi</h1>
                <p className="text-gray-500 dark:text-gray-400">Chào mừng trở lại, Minh Anh</p>
             </div>
             <div className="flex flex-col gap-8 lg:flex-row">
                <aside className="w-full lg:w-72 flex-shrink-0">
                   <div className="rounded-xl border border-[#e7eaf3] bg-white p-4 dark:border-gray-800 dark:bg-[#1a202c]">
                      <div className="mb-6 flex items-center gap-4 px-2">
                         <div className="size-12 overflow-hidden rounded-full border-2 border-white shadow-sm dark:border-gray-700">
                            <div className="size-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5inDJ11f6J6NrpKEbbiR86cdBPJ7yvAIBNpih6eIKWJCt0ReWmqbPVVLiSqZY8hopMvBrab-QxXblig87kvtPkzZFnWVj3mGkIi1IrPyb1_HshdhmAVQdVq9bao20wRD9ZuaheAp-5zON649z6F1bKhMwQEmlMoJfeLHSCbn8az4NMIeWqlh-BLo7zhW5UwEuqzz2FbA2PaKTmKIymiFZNxTeaZqc9G7unNtOUjRz6P1RC8KkTxYtAkUlT4Kkq0JTfDdlwZZh-Do')" }}></div>
                         </div>
                         <div>
                            <h3 className="font-bold text-[#0d111b] dark:text-white">Minh Anh</h3>
                            <p className="text-xs font-medium text-[#0f3bbd]">Thành viên hạng Vàng</p>
                         </div>
                      </div>
                      <nav className="flex flex-col gap-1">
                         <button className="flex items-center gap-3 rounded-lg bg-[#0f3bbd]/10 px-3 py-2.5 text-sm font-medium text-[#0f3bbd] w-full text-left"><span className="material-symbols-outlined">dashboard</span> Tổng quan</button>
                         <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 w-full text-left"><span className="material-symbols-outlined">shopping_bag</span> Đơn hàng</button>
                         <div className="my-2 border-t border-gray-100 dark:border-gray-700"></div>
                         <button onClick={() => onNavigate(Page.HOME)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 w-full text-left"><span className="material-symbols-outlined">logout</span> Đăng xuất</button>
                      </nav>
                   </div>
                </aside>
                <div className="flex-1">
                   <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="rounded-xl border border-[#e7eaf3] bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#1a202c]">
                         <div className="flex items-center justify-between">
                            <div><p className="text-sm font-medium text-gray-500 dark:text-gray-400">Đơn hàng đang giao</p><p className="mt-1 text-2xl font-bold text-[#0d111b] dark:text-white">2</p></div>
                            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50 text-[#0f3bbd] dark:bg-blue-900/20"><span className="material-symbols-outlined">local_shipping</span></div>
                         </div>
                      </div>
                      <div className="rounded-xl border border-[#e7eaf3] bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#1a202c]">
                         <div className="flex items-center justify-between">
                            <div><p className="text-sm font-medium text-gray-500 dark:text-gray-400">Tổng chi tiêu</p><p className="mt-1 text-2xl font-bold text-[#0d111b] dark:text-white">5.200.000₫</p></div>
                            <div className="flex size-10 items-center justify-center rounded-lg bg-green-50 text-green-600 dark:bg-green-900/20"><span className="material-symbols-outlined">payments</span></div>
                         </div>
                      </div>
                   </div>
                   <section className="mb-8">
                       <h2 className="text-lg font-bold text-[#0d111b] dark:text-white mb-4">Đơn hàng gần đây</h2>
                       <div className="overflow-hidden rounded-xl border border-[#e7eaf3] bg-white dark:border-gray-800 dark:bg-[#1a202c]">
                           <div className="overflow-x-auto">
                               <table className="w-full text-left text-sm">
                                   <thead className="bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                       <tr>
                                           <th className="px-6 py-4 font-medium">Mã đơn hàng</th>
                                           <th className="px-6 py-4 font-medium">Ngày đặt</th>
                                           <th className="px-6 py-4 font-medium">Tổng tiền</th>
                                           <th className="px-6 py-4 font-medium">Trạng thái</th>
                                       </tr>
                                   </thead>
                                   <tbody className="divide-y divide-[#e7eaf3] dark:divide-gray-700">
                                       <tr>
                                           <td className="px-6 py-4 font-medium text-[#0d111b] dark:text-white">#ORD-00123</td>
                                           <td className="px-6 py-4 text-gray-500">20/05/2024</td>
                                           <td className="px-6 py-4 font-medium text-[#0d111b] dark:text-white">590.000₫</td>
                                           <td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#0f3bbd]">Đang giao hàng</span></td>
                                       </tr>
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </section>
                </div>
             </div>
          </div>
       </main>
    </div>
  );
};

export default Account;