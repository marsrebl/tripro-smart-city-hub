
import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'np';
  setLanguage: (lang: 'en' | 'np') => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = {
    en: {
      title: "TriPro Municipality",
      subtitle: "Smart Public Services",
      nav: ["Home", "Services", "E-Tax Payment", "Reports", "Forms", "Contact"],
      languageToggle: "नेपाली"
    },
    np: {
      title: "त्रिप्रो नगरपालिका",
      subtitle: "स्मार्ट सार्वजनिक सेवाहरू",
      nav: ["गृह", "सेवाहरू", "ई-कर भुक्तानी", "रिपोर्टहरू", "फारमहरू", "सम्पर्क"],
      languageToggle: "English"
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg relative overflow-hidden">
      {/* Animated Nepali Flag */}
      <div className="absolute top-4 right-4 animate-bounce">
        <div className="w-12 h-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-blue-600 to-red-600 rounded-sm shadow-md transform rotate-3"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{text[language].title}</h1>
              <p className="text-blue-200 text-sm md:text-base">{text[language].subtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {text[language].nav.map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'np' : 'en')}
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span>{text[language].languageToggle}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 border-t border-blue-700 pt-4">
            <div className="flex flex-col space-y-4">
              {text[language].nav.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-blue-200 transition-colors duration-200 font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'np' : 'en')}
                className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-200 w-fit"
              >
                <Globe className="w-4 h-4" />
                <span>{text[language].languageToggle}</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
