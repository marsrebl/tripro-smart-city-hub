
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '../../images/logo.png';

const Header: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <header className="header-container">
      <div className="container mx-auto px-4">
        <div className="header-content">
          {/* Logo and Title */}
          <div className="header-brand">
            <img src={logo} alt="Municipality Logo" className="header-logo" />
            <div className="header-text">
              <h1 className={`header-title ${currentLanguage === 'ne' ? 'nepali' : ''}`}>
                Biratnagar Metropolitan Office Of Municipal Executive
              </h1>
              <p className="header-subtitle">
                Smart City • Digital Services • Transparent Governance
              </p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="emergency-contact">
            <div className="emergency-item">
              <span className="emergency-label">Emergency:</span>
              <span className="emergency-number">100</span>
            </div>
            <div className="emergency-item">
              <span className="emergency-label">Police:</span>
              <span className="emergency-number">100</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .header-container {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 1rem 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

        .emergency-contact {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .emergency-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .emergency-label {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .emergency-number {
          font-size: 1.125rem;
          font-weight: 700;
          color: #fbbf24;
        }

        .nepali {
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
          }
          
          .header-title {
            font-size: 1.25rem;
          }
          
          .emergency-contact {
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
