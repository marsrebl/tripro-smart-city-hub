
import React from 'react';
import { Camera, CreditCard, FileText, Users, AlertTriangle, Download, MapPin, BarChart3 } from 'lucide-react';

interface ServicesSectionProps {
  language: 'en' | 'np';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const text = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions for citizens",
      services: [
        {
          icon: Camera,
          title: "AI Issue Reporting",
          description: "Upload images of civic issues. Our AI automatically classifies and prioritizes reports.",
          features: ["AI Image Classification", "GPS Location", "Urgency Ranking"],
          color: "from-red-500 to-orange-500"
        },
        {
          icon: CreditCard,
          title: "E-Tax Payment",
          description: "Secure online tax payment through eSewa with automatic calculation.",
          features: ["eSewa Integration", "Auto Calculation", "Payment History"],
          color: "from-green-500 to-emerald-500"
        },
        {
          icon: FileText,
          title: "Application Portal",
          description: "Apply for citizenship, building permits, and business registration online.",
          features: ["Online Applications", "Status Tracking", "Document Upload"],
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Download,
          title: "Forms & Instructions",
          description: "Download official forms and access step-by-step service instructions.",
          features: ["PDF Downloads", "Service Guides", "Requirements List"],
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: BarChart3,
          title: "Admin Dashboard",
          description: "Comprehensive management system with analytics and reporting tools.",
          features: ["Real-time Charts", "Report Management", "User Analytics"],
          color: "from-indigo-500 to-blue-500"
        },
        {
          icon: AlertTriangle,
          title: "Complaint Tracking",
          description: "Track your complaint history and receive real-time status updates.",
          features: ["Status Updates", "History Tracking", "Notifications"],
          color: "from-yellow-500 to-orange-500"
        }
      ]
    },
    np: {
      title: "हाम्रा सेवाहरू",
      subtitle: "नागरिकहरूका लागि व्यापक डिजिटल समाधानहरू",
      services: [
        {
          icon: Camera,
          title: "एआई समस्या रिपोर्टिङ",
          description: "नागरिक समस्याका तस्बिरहरू अपलोड गर्नुहोस्। हाम्रो एआईले स्वचालित रूपमा वर्गीकरण र प्राथमिकता दिन्छ।",
          features: ["एआई छवि वर्गीकरण", "जीपीएस स्थान", "आकस्मिकता क्रमबद्धता"],
          color: "from-red-500 to-orange-500"
        },
        {
          icon: CreditCard,
          title: "ई-कर भुक्तानी",
          description: "स्वचालित गणनाको साथ eSewa मार्फत सुरक्षित अनलाइन कर भुक्तानी।",
          features: ["eSewa एकीकरण", "स्वतः गणना", "भुक्तानी इतिहास"],
          color: "from-green-500 to-emerald-500"
        },
        {
          icon: FileText,
          title: "आवेदन पोर्टल",
          description: "नागरिकता, भवन अनुमति, र व्यापार दर्ताका लागि अनलाइन आवेदन दिनुहोस्।",
          features: ["अनलाइन आवेदनहरू", "स्थिति ट्र्याकिङ", "कागजात अपलोड"],
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: Download,
          title: "फारमहरू र निर्देशनहरू",
          description: "आधिकारिक फारमहरू डाउनलोड गर्नुहोस् र चरणबद्ध सेवा निर्देशनहरू पहुँच गर्नुहोस्।",
          features: ["पीडीएफ डाउनलोड", "सेवा गाइडहरू", "आवश्यकताहरूको सूची"],
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: BarChart3,
          title: "प्रशासक ड्यासबोर्ड",
          description: "विश्लेषण र रिपोर्टिङ उपकरणहरूसहित व्यापक व्यवस्थापन प्रणाली।",
          features: ["वास्तविक समय चार्टहरू", "रिपोर्ट व्यवस्थापन", "प्रयोगकर्ता विश्लेषण"],
          color: "from-indigo-500 to-blue-500"
        },
        {
          icon: AlertTriangle,
          title: "उजुरी ट्र्याकिङ",
          description: "तपाईंको उजुरी इतिहास ट्र्याक गर्नुहोस् र वास्तविक समय स्थिति अपडेटहरू प्राप्त गर्नुहोस्।",
          features: ["स्थिति अपडेटहरू", "इतिहास ट्र्याकिङ", "सूचनाहरू"],
          color: "from-yellow-500 to-orange-500"
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {text[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text[language].services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200`}>
                  {language === 'en' ? 'Access Service' : 'सेवा पहुँच गर्नुहोस्'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
