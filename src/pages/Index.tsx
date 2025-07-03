
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import gate from '../images/biratnagar gate.png'
import { 
  FileText, 
  CreditCard, 
  MapPin, 
  Download, 
  MessageSquare,
  Building2,
  Users,
  TrendingUp,
  Phone,
  Clock,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Index: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [expandedWards, setExpandedWards] = useState<number[]>([]);

  const quickServices = [
    {
      icon: CreditCard,
      title: 'E-tax Payment',
      description: 'Pay your municipal taxes online securely',
      link: '/e-tax-payment',
      color: 'bg-municipal-green'
    },
    {
      icon: FileText,
      title: 'Procurement Notices',
      description: 'View latest public procurement announcements',
      link: '/procurement-notices',
      color: 'bg-municipal-blue'
    },
    {
      icon: MessageSquare,
      title: 'Report an Issue',
      description: 'Report civic issues with AI-powered classification',
      link: '/report',
      color: 'bg-municipal-red'
    },
    {
      icon: Download,
      title: 'Application Letter',
      description: 'Submit applications for municipal services',
      link: '/application-letter',
      color: 'bg-municipal-orange'
    }
  ];

  const stats = [
    { icon: Users, label: 'Total Population', value: '242,548' },
    { icon: MapPin, label: 'Total Area', value: '192.73 km²' },
    { icon: Building2, label: 'Total Wards', value: '19' },
    { icon: TrendingUp, label: 'Service Satisfaction', value: '94%' }
  ];

  // Sample ward data - this would typically come from an API
  const wards = Array.from({ length: 19 }, (_, i) => ({
    number: i + 1,
    head: `Ward Head ${i + 1}`,
    members: [
      `Member 1 - Ward ${i + 1}`,
      `Member 2 - Ward ${i + 1}`,
      `Member 3 - Ward ${i + 1}`,
      `Member 4 - Ward ${i + 1}`
    ]
  }));

  const toggleWard = (wardNumber: number) => {
    setExpandedWards(prev => 
      prev.includes(wardNumber) 
        ? prev.filter(w => w !== wardNumber)
        : [...prev, wardNumber]
    );
  };

  const latestUpdates = [
    {
      title: 'New E-governance Portal Launched',
      date: '2024-01-15',
      summary: 'Citizens can now access all municipal services online through our new digital platform.'
    },
    {
      title: 'Budget Allocation for Road Infrastructure',
      date: '2024-01-10',
      summary: 'Rs. 50 crores allocated for road development and maintenance across all wards.'
    },
    {
      title: 'Public Hearing on Development Projects',
      date: '2024-01-05',
      summary: 'Municipal council announces public consultation for upcoming development initiatives.'
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section 
        className="bg-hero-image bg-cover bg-center bg-no-repeat text-white py-32 md:py-48 relative overflow-hidden"
      >
        <img 
          src={gate}
          alt="Biratnagar Gate" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Biratnagar Municipality
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Building a Smart, Sustainable, and Prosperous City for All Citizens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/e-tax-payment"
              className="bg-white text-municipal-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Pay Taxes Online
            </Link>
            <Link
              to="/report"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-municipal-blue transition-colors shadow-lg"
            >
              Report an Issue
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-municipal-blue">
                About Biratnagar Municipality
              </h2>
              <div className="space-y-4 text-municipal-gray">
                <p>
                  <strong>Vision:</strong> To develop Biratnagar as a model smart city that provides quality services to citizens through transparent governance, sustainable development, and inclusive growth.
                </p>
                <p>
                  <strong>Mission:</strong> We are committed to delivering efficient municipal services, promoting economic development, preserving our cultural heritage, and ensuring environmental sustainability for present and future generations.
                </p>
                <p>
                  Biratnagar Metropolitan City is the commercial and industrial hub of eastern Nepal, serving as a gateway to India and a center for trade, education, and healthcare in the region.
                </p>
              </div>
            </div>
            
            <div className="bg-municipal-gradient rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Municipal Office Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>Main Road, Biratnagar-13, Morang, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+977-21-525001, 525002</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@biratnagarmun.gov.np</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p>Sunday - Thursday: 10:00 AM - 5:00 PM</p>
                    <p>Friday: 10:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-municipal-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-municipal-blue">
            Key Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="municipal-card text-center p-6">
                <div className="bg-municipal-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-municipal-blue mb-2">
                  {stat.value}
                </h3>
                <p className="text-municipal-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-municipal-blue">
            Quick Links to Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="municipal-card group hover:scale-105 transition-all duration-300 p-6"
              >
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-municipal-blue">
                  {service.title}
                </h3>
                <p className="text-municipal-gray text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ward-wise Representation */}
      <section className="py-16 bg-municipal-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-municipal-blue">
            Ward-wise Representation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wards.map((ward) => (
              <div key={ward.number} className="municipal-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-municipal-blue">
                    Ward {ward.number}
                  </h3>
                  <button
                    onClick={() => toggleWard(ward.number)}
                    className="text-municipal-blue hover:text-municipal-green transition-colors"
                  >
                    {expandedWards.includes(ward.number) ? 
                      <ChevronUp className="h-5 w-5" /> : 
                      <ChevronDown className="h-5 w-5" />
                    }
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="font-semibold text-municipal-blue">{ward.head}</p>
                  <p className="text-sm text-municipal-gray">Ward Chairperson</p>
                </div>
                
                {expandedWards.includes(ward.number) && (
                  <div className="space-y-2">
                    <p className="font-medium text-municipal-blue">Ward Members:</p>
                    {ward.members.map((member, index) => (
                      <p key={index} className="text-sm text-municipal-gray pl-4">
                        • {member}
                      </p>
                    ))}
                  </div>
                )}
                
                {!expandedWards.includes(ward.number) && (
                  <button
                    onClick={() => toggleWard(ward.number)}
                    className="text-sm text-municipal-blue hover:text-municipal-green transition-colors"
                  >
                    See More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-municipal-blue">
            Latest Updates
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestUpdates.map((update, index) => (
              <div key={index} className="municipal-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg text-municipal-blue">
                    {update.title}
                  </h3>
                  <span className="text-sm text-municipal-gray bg-municipal-gray-light px-2 py-1 rounded">
                    {update.date}
                  </span>
                </div>
                <p className="text-municipal-gray text-sm">
                  {update.summary}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/news"
              className="bg-municipal-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              View All Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
