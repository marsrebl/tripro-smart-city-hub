
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, LogOut, Phone, Globe } from 'lucide-react';
import logo from '../../images/logo.png';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleLogin = () => {
    const event = new Event('openLoginModal');
    window.dispatchEvent(event);
  };

  return (
    <header className="header-container">
      {/* Emergency Contact Bar */}
      <div className="emergency-bar">
        <div className="container mx-auto px-4">
          <div className="emergency-content">
            <div className="emergency-contacts">
              <div className="emergency-item">
                <Phone className="h-4 w-4" />
                <span className="emergency-label">Emergency:</span>
                <span className="emergency-number">100</span>
              </div>
              <div className="emergency-item">
                <Phone className="h-4 w-4" />
                <span className="emergency-label">Police:</span>
                <span className="emergency-number">100</span>
              </div>
              <div className="emergency-item">
                <Phone className="h-4 w-4" />
                <span className="emergency-label">Fire:</span>
                <span className="emergency-number">101</span>
              </div>
            </div>
            
            {/* Language Switcher */}
            <div className="language-switcher">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="language-button"
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find(lang => lang.code === currentLanguage)?.nativeName}</span>
              </button>
              {showLanguageDropdown && (
                <div className="language-dropdown">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setShowLanguageDropdown(false);
                      }}
                      className={`language-option ${currentLanguage === language.code ? 'active' : ''}`}
                    >
                      {language.nativeName}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container mx-auto px-4">
          <div className="header-content">
            {/* Logo and Title */}
            <Link to="/" className="header-brand">
              <img src={logo} alt="Municipality Logo" className="header-logo" />
              <div className="header-text">
                <h1 className={`header-title ${currentLanguage === 'ne' ? 'nepali' : ''}`}>
                  Biratnagar Metropolitan Office Of Municipal Executive
                </h1>
                <p className="header-subtitle">
                  Smart City • Digital Services • Transparent Governance
                </p>
              </div>
            </Link>

            {/* Auth Section */}
            <div className="auth-section">
              {user ? (
                <div className="user-menu">
                  <div className="user-info">
                    <User className="h-5 w-5" />
                    <span className="user-name">{user.name}</span>
                  </div>
                  <button onClick={logout} className="logout-btn">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link to="/login" className="login-btn">
                  <User className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .header-container {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .emergency-bar {
          background: rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 0;
        }

        .emergency-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .emergency-contacts {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .emergency-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .emergency-label {
          opacity: 0.8;
        }

        .emergency-number {
          font-weight: 700;
          color: #fbbf24;
        }

        .language-switcher {
          position: relative;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .language-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .language-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          mt: 0.5rem;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          z-index: 50;
          min-width: 120px;
        }

        .language-option {
          display: block;
          width: 100%;
          padding: 0.75rem 1rem;
          color: #374151;
          text-align: left;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .language-option:hover {
          background: #f3f4f6;
        }

        .language-option.active {
          background: #3b82f6;
          color: white;
        }

        .language-option:first-child {
          border-radius: 8px 8px 0 0;
        }

        .language-option:last-child {
          border-radius: 0 0 8px 8px;
        }

        .main-header {
          padding: 1rem 0;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: white;
        }

        .header-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .header-text {
          display: flex;
          flex-direction: column;
        }

        .header-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }

        .header-subtitle {
          font-size: 0.875rem;
          opacity: 0.9;
          margin: 0.25rem 0 0 0;
        }

        .auth-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .logout-btn, .login-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          text-decoration: none;
        }

        .logout-btn:hover, .login-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .nepali {
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        @media (max-width: 768px) {
          .emergency-content {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          
          .emergency-contacts {
            gap: 1rem;
          }
          
          .header-content {
            flex-direction: column;
            text-align: center;
          }
          
          .header-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
