
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { User, LogOut, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationBar: React.FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigationItems = [
    { key: 'home', path: '/', label: 'Home' },
    {
      key: 'egovservices',
      label: 'E-Gov Services',
      children: [
        { path: '/e-tax-payment', label: 'E-tax Payment' },
        { path: '/application-letter', label: 'Application Letter' },
        { path: '/registration-portal', label: 'Registration Portal' }
      ]
    },
    { key: 'reportissue', path: '/report', label: 'Report an Issue' },
    {
      key: 'notice',
      label: 'Notice/Information',
      children: [
        { path: '/procurement-notices', label: 'Public Procurement Notices' },
        { path: '/acts-laws', label: 'Acts, Laws, and Directives' },
        { path: '/tax-fees', label: 'Tax and Fees' },
        { path: '/council-decisions', label: 'Municipal Council Decisions' }
      ]
    },
    {
      key: 'finance',
      label: 'Finance',
      children: [
        { path: '/income-expenditure', label: 'Monthly Income & Expenditure' },
        { path: '/procurement-plan', label: 'Procurement Plan' }
      ]
    },
    {
      key: 'programs',
      label: 'Programs/Projects',
      children: [
        { path: '/budget-program', label: 'Budget and Program' },
        { path: '/plan-project', label: 'Plan and Project' },
        { path: '/program-schedule', label: 'Program Schedule' }
      ]
    },
    {
      key: 'reports',
      label: 'Reports',
      children: [
        { path: '/annual-report', label: 'Annual Progress Report' },
        { path: '/trimester-report', label: 'Trimester Progress Report' }
      ]
    },
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
          <NavigationMenu className="navigation-menu">
            <NavigationMenuList className="navigation-list">
              {navigationItems.map((item) => {
                if (item.children) {
                  return (
                    <NavigationMenuItem key={item.key}>
                      <NavigationMenuTrigger className="nav-trigger">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="nav-content">
                        <div className="dropdown-content">
                          {item.children.map((child) => (
                            <NavigationMenuLink key={child.path} asChild>
                              <Link to={child.path} className="dropdown-item">
                                {child.label}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else {
                  const isActive = location.pathname === item.path;
                  return (
                    <NavigationMenuItem key={item.key}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path!}
                          className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>

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

      <style>{`
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

        .navigation-menu {
          flex: 1;
        }

        .navigation-list {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .nav-trigger {
          background: transparent !important;
          color: white !important;
          border: none !important;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-trigger:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-2px);
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

        .nav-content {
          background: white !important;
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
          min-width: 200px !important;
          z-index: 50 !important;
        }

        .dropdown-content {
          padding: 0.5rem;
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #374151;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .dropdown-item:hover {
          background: #f3f4f6;
          color: #1f2937;
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
          .navigation-list {
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
