
import React from 'react';
import { ArrowRight, Shield, Users, Clock } from 'lucide-react';

interface HeroSectionProps {
  language: 'en' | 'np';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const text = {
    en: {
      title: "Digital Government Services",
      subtitle: "Transforming public services through technology",
      description: "Access municipal services, report civic issues, pay taxes, and apply for permits - all from one secure platform.",
      cta: "Explore Services",
      stats: [
        { icon: Users, value: "10,000+", label: "Citizens Served" },
        { icon: Shield, value: "99.9%", label: "Secure Platform" },
        { icon: Clock, value: "24/7", label: "Available Service" }
      ]
    },
    np: {
      title: "डिजिटल सरकारी सेवाहरू",
      subtitle: "प्रविधिमार्फत सार्वजनिक सेवाको रूपान्तरण",
      description: "नगरपालिका सेवाहरू पहुँच गर्नुहोस्, नागरिक समस्याहरू रिपोर्ट गर्नुहोस्, कर तिर्नुहोस्, र अनुमतिपत्रका लागि आवेदन दिनुहोस् - सबै एकै सुरक्षित प्लेटफर्मबाट।",
      cta: "सेवाहरू अन्वेषण गर्नुहोस्",
      stats: [
        { icon: Users, value: "१०,०००+", label: "नागरिकहरू सेवा प्राप्त" },
        { icon: Shield, value: "९९.९%", label: "सुरक्षित प्लेटफर्म" },
        { icon: Clock, value: "२४/७", label: "उपलब्ध सेवा" }
      ]
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            {text[language].title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-600 mb-8 font-medium">
            {text[language].subtitle}
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            {text[language].description}
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center space-x-2">
            <span>{text[language].cta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {text[language].stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
