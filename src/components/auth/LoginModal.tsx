
import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-municipal-blue">{t('login')}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center py-8">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-municipal-blue/10 rounded-full mb-4">
              <ExternalLink className="h-8 w-8 text-municipal-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Welcome to TriPro Municipality
            </h3>
            <p className="text-gray-600 text-sm">
              Sign in to access all municipal services and features
            </p>
          </div>

          <Link
            to="/login"
            onClick={onClose}
            className="municipal-button w-full flex items-center justify-center gap-2 mb-4"
          >
            <ExternalLink className="h-4 w-4" />
            Go to Login Page
          </Link>

          <div className="mt-4 text-xs text-gray-500">
            <p>Demo credentials:</p>
            <p>Citizen: citizen@test.com / password</p>
            <p>Admin: admin@test.com / password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
