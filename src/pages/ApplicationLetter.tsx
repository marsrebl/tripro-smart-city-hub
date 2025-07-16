
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Download, Send, User, Calendar, MapPin } from 'lucide-react';

const ApplicationLetter: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    citizenshipNumber: '',
    address: '',
    phoneNumber: '',
    email: '',
    applicationDate: '',
    serviceType: '',
    purpose: '',
    additionalDetails: ''
  });

  const serviceTypes = [
    { id: 'birth_certificate', label: 'Birth Certificate', fee: 'NPR 100' },
    { id: 'marriage_certificate', label: 'Marriage Certificate', fee: 'NPR 200' },
    { id: 'death_certificate', label: 'Death Certificate', fee: 'NPR 100' },
    { id: 'business_license', label: 'Business License', fee: 'NPR 500' },
    { id: 'building_permit', label: 'Building Permit', fee: 'NPR 1000' },
    { id: 'citizenship_certificate', label: 'Citizenship Certificate', fee: 'NPR 300' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold text-municipal-blue mb-4 ${currentLanguage === 'ne' ? 'nepali' : ''}`}>
          Application Letter
        </h1>
        <p className="text-xl text-municipal-gray max-w-3xl mx-auto">
          Submit your application for various municipal certificates and services online
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Application Form */}
        <div className="lg:col-span-2">
          <div className="municipal-card p-8">
            <h2 className="text-2xl font-bold text-municipal-blue mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Application Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-municipal-gray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="citizenshipNumber" className="block text-sm font-medium text-municipal-gray mb-2">
                    Citizenship Number *
                  </label>
                  <input
                    type="text"
                    id="citizenshipNumber"
                    name="citizenshipNumber"
                    value={formData.citizenshipNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-municipal-gray mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-municipal-gray mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-municipal-gray mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-municipal-gray mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                  required
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.label} - {service.fee}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-municipal-gray mb-2">
                  Purpose of Application *
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                  placeholder="Please describe the purpose of your application"
                  required
                />
              </div>

              <div>
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-municipal-gray mb-2">
                  Additional Details
                </label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-municipal-blue focus:border-transparent"
                  placeholder="Any additional information or special requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-municipal-blue text-white py-3 px-6 rounded-md hover:bg-municipal-blue-dark transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Submit Application
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Required Documents */}
          <div className="municipal-card p-6">
            <h3 className="text-xl font-bold text-municipal-blue mb-4">Required Documents</h3>
            <ul className="space-y-2 text-sm text-municipal-gray">
              <li>• Original Citizenship Certificate</li>
              <li>• Passport Size Photographs (2 copies)</li>
              <li>• Supporting Documents (as applicable)</li>
              <li>• Previous Certificate (for renewal)</li>
              <li>• Proof of Address</li>
            </ul>
          </div>

          {/* Processing Time */}
          <div className="municipal-card p-6">
            <h3 className="text-xl font-bold text-municipal-blue mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Processing Time
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-municipal-gray">Birth Certificate</span>
                <span className="font-medium">3-5 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-municipal-gray">Marriage Certificate</span>
                <span className="font-medium">5-7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-municipal-gray">Business License</span>
                <span className="font-medium">7-10 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-municipal-gray">Building Permit</span>
                <span className="font-medium">15-30 days</span>
              </div>
            </div>
          </div>

          {/* Download Forms */}
          <div className="municipal-card p-6">
            <h3 className="text-xl font-bold text-municipal-blue mb-4 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Forms
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 text-sm text-municipal-blue hover:bg-municipal-blue hover:text-white rounded transition-colors">
                Birth Certificate Form
              </button>
              <button className="w-full text-left p-2 text-sm text-municipal-blue hover:bg-municipal-blue hover:text-white rounded transition-colors">
                Marriage Certificate Form
              </button>
              <button className="w-full text-left p-2 text-sm text-municipal-blue hover:bg-municipal-blue hover:text-white rounded transition-colors">
                Business License Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLetter;
