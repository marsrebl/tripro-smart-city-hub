
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'np';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const text = {
    en: {
      title: "TriPro Municipality",
      subtitle: "Smart Public Services",
      description: "Dedicated to providing efficient, transparent, and accessible public services to our citizens through innovative digital solutions.",
      contact: {
        title: "Contact Information",
        address: "Ward No. 1, TriPro Municipality, Bagmati Province, Nepal",
        phone: "+977-1-4567890",
        email: "info@tripromunicipality.gov.np",
        hours: "Office Hours: Sunday - Friday, 10:00 AM - 5:00 PM"
      },
      quickLinks: {
        title: "Quick Links",
        links: ["Online Services", "Tax Payment", "Report Issues", "Download Forms", "Apply Online", "Track Applications"]
      },
      services: {
        title: "Popular Services",
        items: ["Citizenship Certificate", "Building Permits", "Business Registration", "Tax Clearance", "Birth Certificate", "Marriage Registration"]
      },
      copyright: "© 2024 TriPro Municipality. All rights reserved.",
      poweredBy: "Powered by Digital Nepal Initiative"
    },
    np: {
      title: "त्रिप्रो नगरपालिका",
      subtitle: "स्मार्ट सार्वजनिक सेवाहरू",
      description: "नवाचार डिजिटल समाधानहरूमार्फत हाम्रा नागरिकहरूलाई कुशल, पारदर्शी र पहुँचयोग्य सार्वजनिक सेवाहरू प्रदान गर्न प्रतिबद्ध।",
      contact: {
        title: "सम्पर्क जानकारी",
        address: "वार्ड नं. १, त्रिप्रो नगरपालिका, बागमती प्रदेश, नेपाल",
        phone: "+९७७-१-४५६७८९०",
        email: "info@tripromunicipality.gov.np",
        hours: "कार्यालय समय: आइतबार - शुक्रबार, बिहान १०:०० - बेलुका ५:००"
      },
      quickLinks: {
        title: "द्रुत लिंकहरू",
        links: ["अनलाइन सेवाहरू", "कर भुक्तानी", "समस्या रिपोर्ट", "फारम डाउनलोड", "अनलाइन आवेदन", "आवेदन ट्र्याक"]
      },
      services: {
        title: "लोकप्रिय सेवाहरू",
        items: ["नागरिकता प्रमाणपत्र", "भवन अनुमति", "व्यापार दर्ता", "कर क्लियरेन्स", "जन्म प्रमाणपत्र", "विवाह दर्ता"]
      },
      copyright: "© २०२४ त्रिप्रो नगरपालिका। सबै अधिकार सुरक्षित।",
      poweredBy: "डिजिटल नेपाल पहलद्वारा संचालित"
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Municipality Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{text[language].title}</h3>
                <p className="text-blue-300 text-sm">{text[language].subtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {text[language].description}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              {text[language].contact.title}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{text[language].contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{text[language].contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{text[language].contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{text[language].contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              {text[language].quickLinks.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {text[language].quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              {text[language].services.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {text[language].services.items.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {text[language].copyright}
          </p>
          <p className="text-gray-400 text-sm">
            {text[language].poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
};
