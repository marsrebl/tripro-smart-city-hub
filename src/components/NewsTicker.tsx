
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

interface NewsTickerProps {
  language: 'en' | 'np';
}

export const NewsTicker: React.FC<NewsTickerProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = {
    en: [
      "New online tax payment system now live! Pay your municipal taxes securely through eSewa.",
      "Road maintenance scheduled for Main Street from March 15-20. Please use alternate routes.",
      "Building permit applications can now be submitted online. Get approval faster!",
      "Community meeting scheduled for March 25 to discuss new development projects.",
      "Water supply will be temporarily disrupted in Ward 5 on March 18 from 6 AM to 2 PM."
    ],
    np: [
      "नयाँ अनलाइन कर भुक्तानी प्रणाली अब सुरु! eSewa मार्फत आफ्नो नगरपालिका कर सुरक्षित रूपमा तिर्नुहोस्।",
      "मुख्य सडकको मर्मतसम्भार मार्च १५-२० सम्म तालिकाबद्ध। कृपया वैकल्पिक मार्गहरू प्रयोग गर्नुहोस्।",
      "भवन अनुमति आवेदनहरू अब अनलाइन पेश गर्न सकिन्छ। छिटो अनुमोदन पाउनुहोस्!",
      "नयाँ विकास परियोजनाहरूको छलफलका लागि मार्च २५ मा सामुदायिक बैठक तालिकाबद्ध।",
      "वार्ड ५ मा मार्च १८ मा बिहान ६ बजेदेखि दिउँसो २ बजेसम्म पानी आपूर्ति अस्थायी रूपमा बन्द हुनेछ।"
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news[language].length);
    }, 5000);

    return () => clearInterval(interval);
  }, [language, news]);

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Bell className="w-5 h-5 animate-pulse" />
            <span className="font-semibold text-sm">
              {language === 'en' ? 'ANNOUNCEMENTS' : 'घोषणाहरू'}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div 
              className="animate-marquee whitespace-nowrap"
              style={{
                transform: `translateX(${currentIndex * -100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <span className="text-sm md:text-base">
                {news[language][currentIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
