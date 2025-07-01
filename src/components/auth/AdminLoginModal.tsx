
import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-municipal-blue">Admin Access</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center py-8">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Administrator Login
            </h3>
            <p className="text-gray-600 text-sm">
              Access the admin dashboard and management tools
            </p>
          </div>

          <Link
            to="/login"
            onClick={onClose}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full flex items-center justify-center gap-2 mb-4"
          >
            <ExternalLink className="h-4 w-4" />
            Go to Login Page
          </Link>

          <div className="mt-4 text-xs text-gray-500">
            <p>Press Shift + Alt + A to access this admin login</p>
            <p className="mt-2">Admin credentials: admin@test.com / password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginModal;
