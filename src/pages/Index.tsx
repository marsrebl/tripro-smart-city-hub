
import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { NewsTicker } from '../components/NewsTicker';
import { Footer } from '../components/Footer';
import { AdminLogin } from '../components/AdminLogin';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'np'>('en');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setShowAdminLogin(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      <NewsTicker language={language} />
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <Footer language={language} />
      
      {showAdminLogin && (
        <AdminLogin 
          isOpen={showAdminLogin} 
          onClose={() => setShowAdminLogin(false)} 
        />
      )}
    </div>
  );
};

export default Index;
