import React from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';

interface SiteChromeProps {
  children: React.ReactNode;
}

export const SiteChrome: React.FC<SiteChromeProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};
