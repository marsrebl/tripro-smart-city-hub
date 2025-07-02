
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { User, LogOut } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const location = useLocation();

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

  const handleLogin = () => {
    const event = new Event('openLoginModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="navigation-container">
      <div className="container mx-auto px-4">
        <nav className="navigation-wrapper">
          {/* Navigation Links */}
          <div className="navigation-links">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
                >
                  <span className="nav-text">{item.label}</span>
                  <div className="nav-indicator"></div>
                </Link>
              );
            })}
          </div>

          {/* Auth Section */}
          <div className="auth-section">
            {user ? (
              <div className="user-menu">
                <div className="user-info">
                  <User className="h-4 w-4" />
                  <span className="user-name">{user.name}</span>
                </div>
                <button onClick={logout} className="logout-btn">
                  <LogOut className="h-4 w-4" />
                  <span>{t('logout')}</span>
                </button>
              </div>
            ) : (
              <button onClick={handleLogin} className="login-btn">
                <User className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
          </div>
        </nav>
      </div>

      <style jsx>{`
        .navigation-container {
          background: linear-gradient(135deg, 
            rgba(30, 64, 175, 0.95) 0%, 
            rgba(59, 130, 246, 0.95) 30%, 
            rgba(5, 150, 105, 0.95) 70%, 
            rgba(16, 185, 129, 0.95) 100%
          );
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .navigation-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          gap: 2rem;
        }

        .navigation-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          color: white;
          font-weight: 500;
          font-size: 0.875rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          white-space: nowrap;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .nav-item-active {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .nav-text {
          position: relative;
          z-index: 2;
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover .nav-indicator,
        .nav-item-active .nav-indicator {
          width: 80%;
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
          color: white;
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
        }

        .logout-btn:hover, .login-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 1024px) {
          .navigation-links {
            display: none;
          }
          
          .navigation-wrapper {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default NavigationBar;
