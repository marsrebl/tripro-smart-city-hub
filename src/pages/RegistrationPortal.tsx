
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  UserPlus, 
  Building, 
  Users, 
  FileCheck, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Download
} from 'lucide-react';

const RegistrationPortal: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('birth');

  const registrationTypes = [
    {
      id: 'birth',
      title: 'Birth Registration',
      icon: UserPlus,
      description: 'Register newborn births and obtain birth certificates',
      color: 'bg-blue-500',
      requirements: [
        'Hospital birth certificate or midwife confirmation',
        'Parents\' citizenship certificates',
        'Marriage certificate of parents',
        'Two passport size photos'
      ],
      fee: 'NPR 100',
      timeline: '3-5 working days'
    },
    {
      id: 'marriage',
      title: 'Marriage Registration',
      icon: Users,
      description: 'Register marriages and obtain marriage certificates',
      color: 'bg-pink-500',
      requirements: [
        'Both parties\' citizenship certificates',
        'Age verification documents',
        'Two witnesses with citizenship',
        'Marriage ceremony photos'
      ],
      fee: 'NPR 200',
      timeline: '5-7 working days'
    },
    {
      id: 'death',
      title: 'Death Registration',
      icon: FileCheck,
      description: 'Register deaths and obtain death certificates',
      color: 'bg-gray-500',
      requirements: [
        'Hospital death certificate or medical report',
        'Deceased person\'s citizenship certificate',
        'Family member\'s citizenship certificate',
        'Witness statements'
      ],
      fee: 'NPR 100',
      timeline: '2-3 working days'
    },
    {
      id: 'business',
      title: 'Business Registration',
      icon: Building,
      description: 'Register new businesses and obtain licenses',
      color: 'bg-green-500',
      requirements: [
        'Business plan and proposal',
        'Owner\'s citizenship certificate',
        'Property ownership or rental agreement',
        'Tax clearance certificate'
      ],
      fee: 'NPR 500-2000',
      timeline: '7-15 working days'
    }
  ];

  const activeRegistration = registrationTypes.find(type => type.id === activeTab);

  const registrationSteps = [
    {
      step: 1,
      title: 'Document Preparation',
      description: 'Gather all required documents',
      status: 'completed'
    },
    {
      step: 2,
      title: 'Online Application',
      description: 'Fill out the registration form',
      status: 'current'
    },
    {
      step: 3,
      title: 'Document Verification',
      description: 'Submit documents for verification',
      status: 'pending'
    },
    {
      step: 4,
      title: 'Payment',
      description: 'Pay registration fees',
      status: 'pending'
    },
    {
      step: 5,
      title: 'Certificate Issuance',
      description: 'Receive your certificate',
      status: 'pending'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold text-municipal-blue mb-4 ${currentLanguage === 'ne' ? 'nepali' : ''}`}>
          Registration Portal
        </h1>
        <p className="text-xl text-municipal-gray max-w-3xl mx-auto">
          Register for various municipal services and obtain official certificates online
        </p>
      </div>

      {/* Registration Type Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 border-b border-gray-200">
          {registrationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-6 py-3 font-medium rounded-t-lg transition-colors flex items-center gap-2 ${
                activeTab === type.id
                  ? 'text-municipal-blue border-b-2 border-municipal-blue bg-municipal-blue/5'
                  : 'text-gray-600 hover:text-municipal-blue hover:bg-gray-50'
              }`}
            >
              <type.icon className="h-5 w-5" />
              {type.title}
            </button>
          ))}
        </div>
      </div>

      {/* Registration Content */}
      {activeRegistration && (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Registration Overview */}
            <div className="municipal-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`${activeRegistration.color} p-3 rounded-lg`}>
                  <activeRegistration.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-municipal-blue mb-2">
                    {activeRegistration.title}
                  </h2>
                  <p className="text-municipal-gray">
                    {activeRegistration.description}
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <span className="text-sm text-gray-600">Registration Fee</span>
                    <p className="font-semibold text-green-700">{activeRegistration.fee}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <span className="text-sm text-gray-600">Processing Time</span>
                    <p className="font-semibold text-blue-700">{activeRegistration.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Start Registration Button */}
              <button className="w-full bg-municipal-blue text-white py-4 px-6 rounded-lg hover:bg-municipal-blue-dark transition-colors font-medium text-lg">
                Start {activeRegistration.title}
              </button>
            </div>

            {/* Registration Process Steps */}
            <div className="municipal-card p-8">
              <h3 className="text-xl font-bold text-municipal-blue mb-6">Registration Process</h3>
              <div className="space-y-4">
                {registrationSteps.map((step, index) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.status === 'completed' 
                        ? 'bg-green-100 text-green-700'
                        : step.status === 'current'
                        ? 'bg-municipal-blue text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {step.status === 'completed' ? '✓' : step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-municipal-blue">{step.title}</h4>
                      <p className="text-sm text-municipal-gray">{step.description}</p>
                    </div>
                    {step.status === 'current' && (
                      <AlertCircle className="h-5 w-5 text-municipal-blue flex-shrink-0 mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Required Documents */}
            <div className="municipal-card p-6">
              <h3 className="text-xl font-bold text-municipal-blue mb-4">Required Documents</h3>
              <ul className="space-y-2">
                {activeRegistration.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-municipal-gray">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Forms */}
            <div className="municipal-card p-6">
              <h3 className="text-xl font-bold text-municipal-blue mb-4 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Forms
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 text-sm text-municipal-blue hover:bg-municipal-blue hover:text-white rounded transition-colors border border-municipal-blue">
                  {activeRegistration.title} Form
                </button>
                <button className="w-full text-left p-3 text-sm text-municipal-blue hover:bg-municipal-blue hover:text-white rounded transition-colors border border-municipal-blue">
                  Document Checklist
                </button>
                <button className="w-full text-left p-3 text-sm text-municipal-blue hover:bg-municipal-blue hover:text-white rounded transition-colors border border-municipal-blue">
                  Fee Structure
                </button>
              </div>
            </div>

            {/* Help & Support */}
            <div className="municipal-card p-6">
              <h3 className="text-xl font-bold text-municipal-blue mb-4">Need Help?</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-municipal-gray">Phone:</span>
                  <span className="font-medium ml-2">021-525252</span>
                </div>
                <div>
                  <span className="text-municipal-gray">Email:</span>
                  <span className="font-medium ml-2">registration@biratnagar.gov.np</span>
                </div>
                <div>
                  <span className="text-municipal-gray">Office Hours:</span>
                  <span className="font-medium ml-2">10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPortal;
