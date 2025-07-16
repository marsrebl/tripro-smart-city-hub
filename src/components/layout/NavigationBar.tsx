
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavigationBar: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const location = useLocation();
  const [eGovOpen, setEGovOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const eGovServices = [
    { key: 'e_tax_payment', path: '/e-tax-payment', label: 'E-tax Payment' },
    { key: 'application_letter', path: '/application-letter', label: 'Application Letter' },
    { key: 'registration_portal', path: '/registration-portal', label: 'Registration Portal' }
  ];

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'gallery', path: '/gallery' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-municipal-blue bg-municipal-blue/10'
                    : 'text-gray-700 hover:text-municipal-blue hover:bg-gray-100'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}

            {/* E-Gov Services Dropdown */}
            <DropdownMenu open={eGovOpen} onOpenChange={setEGovOpen}>
              <DropdownMenuTrigger className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-municipal-blue hover:bg-gray-100 flex items-center gap-1 transition-colors">
                E-Gov Services
                {eGovOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg">
                {eGovServices.map((service) => (
                  <DropdownMenuItem key={service.key} asChild>
                    <Link
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-municipal-blue hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-municipal-blue">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
