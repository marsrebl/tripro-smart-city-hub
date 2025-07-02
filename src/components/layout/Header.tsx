
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from '../auth/LoginModal';
import AdminLoginModal from '../auth/AdminLoginModal';
import logo from '../../images/logo.png';
import navbag from '../../images/navbag.jpeg';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && e.key === 'A') {
        e.preventDefault();
        setShowAdminLoginModal(true);
      }
    };

    const handleCustomLoginEvent = () => {
      setShowLoginModal(true);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('openLoginModal', handleCustomLoginEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('openLoginModal', handleCustomLoginEvent);
    };
  }, []);

  const navigationItems = [
    { key: 'home', path: '/', label: 'Home' },
    { key: 'egovservices', path: '/services', label: 'E-gov Services' },
    { key: 'reportissue', path: '/report', label: 'Report an Issue' },
    { key: 'notice', path: '/news', label: 'Notice/Information' },
    { key: 'finance', path: '/pay-taxes', label: 'Finance' },
    { key: 'programs', path: '/programs', label: 'Program/Project' },
    { key: 'reports', path: '/reports', label: 'Reports' },
    { key: 'gallery', path: '/gallery', label: 'Gallery' },
    { key: 'contact', path: '/contact', label: 'Contact us' }
  ];

  return (
    <>
      <header className="header-container">
        {/* Top Emergency Bar */}
        <div className="emergency-bar">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="emergency-numbers">
              <span>एम्बुलेन्स: 9865266142</span>
              <span>दमकल: 9865321455</span>
              <span>ट्राफिक प्रहरी: 9865324578</span>
              <span>नेपाल प्रहरी: 9865324512</span>
            </div>

            <div className="language-switcher">
              <Globe className="h-4 w-4" />
              <select
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-transparent border-none text-white text-sm focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-black">
                    {lang.nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="main-header">
          <div className="header-background">
            <img src={navbag} alt="Header Background" />
            <div className="header-overlay" />
          </div>

          <div className="container mx-auto px-5 py-6 relative z-10">
            <div className="header-content">
              <div className="logo-section">
                <div className="logo-container">
                  <img src={logo} alt="City Logo" />
                </div>
                <div className="title-section">
                  <h1 className="main-title">
                    Biratnagar Metropolitan Office Of Municipal Executive
                  </h1>
                  <p className="subtitle">Digital Government Services</p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="mobile-menu-btn lg:hidden"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="mobile-nav">
                {navigationItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.path}
                    className="mobile-nav-item"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                {user ? (
                  <div className="mobile-auth">
                    <span className="welcome-text">Welcome, {user.name}</span>
                    <button onClick={logout} className="mobile-logout-btn">
                      {t('logout')}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="mobile-login-btn"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Login Modals */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <AdminLoginModal isOpen={showAdminLoginModal} onClose={() => setShowAdminLoginModal(false)} />

      <style jsx>{`
        .header-container {
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .emergency-bar {
          background: #1e40af;
          color: white;
          padding: 0.5rem 0;
        }

        .emergency-numbers {
          display: flex;
          gap: 1.5rem;
        }

        .language-switcher {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .main-header {
          position: relative;
          height: 140px;
          overflow: hidden;
        }

        .header-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .header-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }

        .header-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .logo-container {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .logo-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }

        .title-section {
          color: white;
        }

        .main-title {
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .mobile-menu-btn {
          color: white;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-nav {
          background: rgba(30, 64, 175, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          margin-top: 1rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-nav-item {
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-nav-item:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .mobile-auth {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 0.75rem;
          margin-top: 0.5rem;
        }

        .welcome-text {
          color: white;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .mobile-logout-btn, .mobile-login-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .mobile-logout-btn:hover, .mobile-login-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 640px) {
          .emergency-numbers {
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.75rem;
          }

          .main-title {
            font-size: 1.25rem;
          }

          .logo-container {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
