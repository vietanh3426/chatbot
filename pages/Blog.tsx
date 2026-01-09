import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Blog: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f2f9f2] text-[#0e1b0e] dark:bg-[#0a1f0a] dark:text-white transition-colors duration-200 min-h-screen font-serif">
       <header className="sticky top-0 z-50 w-full border-b border-[#e7f3e7] bg-[#f2f9f2]/95 backdrop-blur-md px-4 py-3 dark:border-white/10 dark:bg-[#0a1f0a]/95 lg:px-10 font-sans">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between">
             <div className="flex items-center gap-8 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
                <div className="flex items-center gap-2 text-[#228B22] hover:opacity-80">
                   <span className="material-symbols-outlined text-3xl">spa</span>
                   <h2 className="text-xl font-bold tracking-tight text-[#228B22]">Trà Xanh</h2>
                </div>
                <nav className="hidden items-center gap-6 md:flex">
                   <button onClick={() => onNavigate(Page.SHOP)} className="text-sm font-medium text-[#0e1b0e] hover:text-[#14b814] transition-colors">Cửa hàng</button>
                   <button className="text-sm font-bold text-[#14b814] transition-colors">Blog</button>
                   <button onClick={() => onNavigate(Page.CONTACT)} className="text-sm font-medium text-[#0e1b0e] hover:text-[#14b814] transition-colors">Liên hệ</button>
                </nav>
             </div>
          </div>
       </header>

       <main className="flex-1">
          <section className="mx-auto max-w-[1200px] px-4 py-8 md:px-10 lg:py-12">
             <div className="relative overflow-hidden rounded-2xl bg-[#0a1f0a]">
                <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                   <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTdc2gFsXSk_TpvWRlifyFMOD9TcP6irrk7F0RwDYDzDFzICvn8hZNt7CDpngAJlOzAM93_bYPOKBfy9jWq8_M1t_Yu-WX6JwUz9D52wN3FA4WCLyxjEwhw-oFimANjBw3iu1kCjGIsZ2UVQtMIKfmPbsk4ReR76vKehxVIl4Otkaty7q2NLDyFdV7W6Gy_spL9EBYe9tRBaz0f947cNDOQmKycech-M0lTm83aHbLcF3EhEk-9shoWonXtpD9vmzKsLqB7TqYERg" alt="" />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 py-16 text-center text-white md:py-24">
                   <h1 className="font-display text-4xl font-black tracking-tight md:text-6xl text-white drop-shadow-sm">Chuyện Trà</h1>
                   <p className="max-w-2xl text-lg font-light text-white/90 md:text-xl font-sans">Khám phá văn hóa trà đạo, lợi ích sức khỏe và những câu chuyện chân thực từ những đồi chè bạt ngàn của Việt Nam.</p>
                   <button className="mt-4 flex h-12 items-center rounded-full bg-[#14b814] px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#228B22] font-sans">Đọc bài nổi bật</button>
                </div>
             </div>
          </section>

          <section className="mx-auto max-w-[1200px] px-4 pb-12 md:px-10">
             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                 <article className="group flex cursor-pointer flex-col gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-white/5">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                       <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJRWv6uEgP3hNGqQu5SJIh98S-L3bmYn2A5nr9l8deJwriV1tTIt02dIzg9y7xOBrhcQH6fSDOCK2Aj9Ar7MYGiocaCiG4Kc4GpvSmiBXuxnuOwcb7yu1jHWLNcQJQyiSjw4JeRVNkug8_3COZsf2poPmtnE-gt69d74A0-b2VerjSxPFc6VfEF1iBtukanUby1rjisKZg1mpIbgteisShLt8FV46OGEIekeQmAXusZhMstNXOkiXWUWhCiFGq3yHF_0Ip-6LXeZY')" }}></div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                       <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#14b814] font-sans"><span>Sức khỏe</span><span className="text-[#4e974e]">•</span><span className="text-[#4e974e]">12/10/2023</span></div>
                       <h3 className="font-display text-xl font-bold leading-tight text-[#0e1b0e] group-hover:text-[#228B22] dark:text-white">5 Lợi ích bất ngờ của trà xanh Thái Nguyên đối với tim mạch</h3>
                       <p className="line-clamp-3 text-sm leading-relaxed text-[#4e974e] dark:text-gray-400 font-sans">Trà xanh không chỉ là thức uống giải khát mà còn mang lại nhiều lợi ích sức khỏe tim mạch đã được khoa học chứng minh.</p>
                    </div>
                 </article>
                 <article className="group flex cursor-pointer flex-col gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-white/5">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                       <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm0KX4E3B2dIDSJYQ1iZRZdY7k5gv7_DDM1cpgeLqLB47u_N-zD6z__lEgsFqWJMHtEHEvv-r_U0n89NAObgPj8Cy-Nc_u25cG6W89NGk-0ykNv3Q72PN7QK57_zAndm3KW0OvwoS-Ig_omLB4CmnOuPuB8pp7e19jXgPpLw_1IPb2W2C3K3p1kxKwFXYJbU_ZYf7lusm1N3i-tInS26y1kscPVZydkrqZ3ysr9vzNLZXkZ5kjIMtsur5MJI3icTBjoc4G-F8bwn0')" }}></div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                       <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#14b814] font-sans"><span>Nhà nông</span><span className="text-[#4e974e]">•</span><span className="text-[#4e974e]">10/10/2023</span></div>
                       <h3 className="font-display text-xl font-bold leading-tight text-[#0e1b0e] group-hover:text-[#228B22] dark:text-white">Phỏng vấn bác Ba - 40 năm gắn bó với đồi chè sương mù</h3>
                    </div>
                 </article>
             </div>
          </section>
       </main>
    </div>
  );
};

export default Blog;