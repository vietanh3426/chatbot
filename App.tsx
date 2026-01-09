import React, { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Promo from './pages/Promo';
import Guide from './pages/Guide';
import Account from './pages/Account';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';
import Chatbot from './pages/Chatbot';
import FAQ from './pages/FAQ';

export enum Page {
  HOME = 'HOME',
  SHOP = 'SHOP',
  PROMO = 'PROMO',
  GUIDE = 'GUIDE',
  ACCOUNT = 'ACCOUNT',
  CONTACT = 'CONTACT',
  BLOG = 'BLOG',
  WISHLIST = 'WISHLIST',
  CHATBOT = 'CHATBOT',
  FAQ = 'FAQ'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const navigate = (page: Page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={navigate} />;
      case Page.SHOP:
        return <Shop onNavigate={navigate} />;
      case Page.PROMO:
        return <Promo onNavigate={navigate} />;
      case Page.GUIDE:
        return <Guide onNavigate={navigate} />;
      case Page.ACCOUNT:
        return <Account onNavigate={navigate} />;
      case Page.CONTACT:
        return <Contact onNavigate={navigate} />;
      case Page.BLOG:
        return <Blog onNavigate={navigate} />;
      case Page.WISHLIST:
        return <Wishlist onNavigate={navigate} />;
      case Page.CHATBOT:
        return <Chatbot onNavigate={navigate} />;
      case Page.FAQ:
        return <FAQ onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen">
       {/* Global Navigation Overlay for Demo purposes (To switch pages easily) */}
       <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-md flex gap-4 text-xs overflow-x-auto max-w-[95vw]">
        {Object.values(Page).map((page) => (
          <button 
            key={page} 
            onClick={() => navigate(page)}
            className={`whitespace-nowrap ${currentPage === page ? 'text-[#228B22] font-bold' : 'hover:text-gray-300'}`}
          >
            {page}
          </button>
        ))}
      </div>
      {renderPage()}
    </div>
  );
};

export default App;