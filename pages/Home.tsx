import React from 'react';
import { Page } from '../App';
import { NavigationProps } from '../types';

const Home: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#eff7ef] dark:bg-[#131f13] text-[#101910] font-display min-h-screen flex flex-col overflow-x-hidden transition-colors duration-300">
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#228c22 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="relative z-10 flex flex-col flex-grow w-full max-w-[1440px] mx-auto bg-transparent">
        {/* Navigation */}
        <header className="w-full px-5 py-4 lg:px-10 border-b border-[#dcecdc]/50 bg-[#eff7ef]/90 backdrop-blur-sm dark:bg-[#131f13]/90 sticky top-0 z-50">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
              <div className="size-8 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined !text-[32px]">emoji_nature</span>
              </div>
              <h2 className="text-[#101910] dark:text-white text-xl font-bold tracking-tight">Trà Xanh</h2>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => onNavigate(Page.SHOP)} className="text-[#101910] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Shop</button>
              <button onClick={() => onNavigate(Page.BLOG)} className="text-[#101910] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Story</button>
              <button onClick={() => onNavigate(Page.CONTACT)} className="text-[#101910] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Contact</button>
            </div>
            {/* Icons */}
            <div className="flex gap-3">
              <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 text-[#101910] dark:text-white transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button onClick={() => onNavigate(Page.WISHLIST)} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 text-[#101910] dark:text-white transition-colors relative">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center w-full px-5 py-12 md:py-20 lg:px-10">
          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
                  <span className="material-symbols-outlined !text-sm">eco</span>
                  <span>Premium Quality</span>
                </div>
                <h1 className="text-[#101910] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  Essence of Nature in Every Cup
                </h1>
                <p className="text-[#3a4d3a] dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Welcome to a world of purity. Experience Vietnam's finest hand-picked green tea, sustainably grown and ethically sourced for your well-being.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => onNavigate(Page.SHOP)} className="flex items-center justify-center gap-2 h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-lg text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20">
                  <span>Explore Collection</span>
                  <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                </button>
                <button onClick={() => onNavigate(Page.BLOG)} className="flex items-center justify-center gap-2 h-12 px-8 bg-white border border-[#d3e4d3] hover:bg-[#f0f9f0] text-[#101910] rounded-lg text-base font-bold transition-colors">
                  <span>Our Story</span>
                </button>
              </div>
              {/* Trust Indicators */}
              <div className="pt-8 mt-4 border-t border-[#d3e4d3]/60 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <span className="material-symbols-outlined text-primary !text-[28px]">spa</span>
                  <span className="text-xs font-bold text-[#101910] dark:text-white uppercase tracking-wide">100% Organic</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <span className="material-symbols-outlined text-primary !text-[28px]">handshake</span>
                  <span className="text-xs font-bold text-[#101910] dark:text-white uppercase tracking-wide">Direct Trade</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <span className="material-symbols-outlined text-primary !text-[28px]">volunteer_activism</span>
                  <span className="text-xs font-bold text-[#101910] dark:text-white uppercase tracking-wide">Hand Picked</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#dcfce7] rounded-full blur-3xl opacity-60 scale-90 lg:scale-100 z-0 dark:bg-primary/20"></div>
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700 ease-out" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3phMTj792hdszAvkls9kBBdB5Fwym0iWh1RFJ5JS02VDLspZiy45Vf3sUFy_byurBfQMiWWu3dGOBurumrcxdxe_j4j54h65edEKuGjga9L-1XFyUfJNFD7oXg0-n2RxPRgVXcHg1hLRzFUkHOkgWvHMB8QBpAfI2soDBK8SC6DainM1KkFtFDJCS8R-xlcwMVMnQ7P_128m5TAWsTg1-es2pgtqGy0dwIkF7ABxfQHLUCO_UaT0PfIVkMbAqxFsVzZem8sgbMDg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white dark:bg-[#1a2e1a] p-4 rounded-xl shadow-xl z-20 max-w-[200px] hidden md:flex flex-col gap-2 border border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full bg-gray-200 border-2 border-white" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALnMCvd-nfT62QfugKxPy9cH7Jc-jNCW7-gOTHR_ej3WCcQW1nY2uMKhlcZ-x7AdeSvhzLxLJpAZHIf9y4A8AVGnJEDk7aYhB2fYCAgO_3sli6qR6EM4Fhq2MmjNgMhIZ_HGnE4Qm3DL5580ghB4DGmRd4T3yKO7VkCOCij93u73jNkMAQV5JyrPYA40QRgcF6DYk7HihbG6zDhCIu8N0UBreHcwndovJyVd0a5dRDEldI5foSUafFjVachuZB1GhUcpfSaKIMHRE')", backgroundSize: 'cover' }}></div>
                    <div className="size-8 rounded-full bg-gray-200 border-2 border-white" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARxJ3MUyK2nXkhYh2AFnpLzgeIWH7BSwJO4RUucQI5SKjaft7kQQF6EpAvpARi65HmTTmL0HJ6r1lfcPxBeMfTw0OAFMHqbuzOTFPaTufpMPZrBlM5PTUANlNBXan-0opFi22i6sH571n7rktP0D3iLa_OjyCMYnNdklRXDOeMJQx8U77RLekmXR-YaWMdVpfWAW4neopeuQJfkWsU6lGFBJejJ3vivjYZkVdizU2w5vnrVO0kfaYs0nqkG5KWfSDhhmUqEqDckxM')", backgroundSize: 'cover' }}></div>
                    <div className="size-8 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">+2k</div>
                  </div>
                </div>
                <p className="text-xs font-medium text-[#101910] dark:text-gray-200">"Best tea I've ever tasted!" <br/><span className="text-primary font-bold">5.0/5 Rating</span></p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-10 px-5 lg:px-10 border-t border-[#dcecdc] bg-white/50 dark:bg-black/20 dark:border-white/10 mt-auto">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-[#578e57] dark:text-gray-400">
              © 2024 Trà Xanh. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a className="text-[#578e57] hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-[#578e57] hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">groups</span></a>
              <a className="text-[#578e57] hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            </div>
            <div className="flex items-center gap-6">
              <a className="text-[#578e57] text-sm font-medium hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="text-[#578e57] text-sm font-medium hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;