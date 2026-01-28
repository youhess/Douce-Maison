import React, { useEffect, useState } from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowUp } from 'lucide-react';

interface SiteChromeProps {
  children: React.ReactNode;
}

export const SiteChrome: React.FC<SiteChromeProps> = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>
      <Footer />
      <button
        type="button"
        aria-label="Haut de page"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed z-[110] right-6 bottom-6 h-10 w-10 rounded-md bg-black text-white flex items-center justify-center transition-all ${
          showBackToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </div>
  );
};