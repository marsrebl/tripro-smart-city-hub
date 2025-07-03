
import React from 'react';
import { CreditCard, Shield, Clock, CheckCircle } from 'lucide-react';

const ETaxPayment: React.FC = () => {
  return (
    <div className="min-h-screen bg-municipal-gray-light py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-municipal-blue mb-4">
              E-Tax Payment Portal
            </h1>
            <p className="text-municipal-gray">
              Pay your municipal taxes securely online
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="municipal-card p-6">
              <h2 className="text-xl font-bold text-municipal-blue mb-6">
                Tax Payment
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-municipal-gray mb-2">
                    Tax Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-municipal-blue">
                    <option>Property Tax</option>
                    <option>Business Tax</option>
                    <option>Vehicle Tax</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-municipal-gray mb-2">
                    Tax ID / Property ID
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-municipal-blue"
                    placeholder="Enter your tax ID"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-municipal-gray mb-2">
                    Amount (NPR)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-municipal-blue"
                    placeholder="0.00"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-municipal-blue text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>

            {/* Payment Features */}
            <div className="space-y-6">
              <div className="municipal-card p-6">
                <h3 className="text-lg font-bold text-municipal-blue mb-4">
                  Payment Features
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-municipal-green" />
                    <span className="text-sm">Secure Payment Gateway</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-municipal-green" />
                    <span className="text-sm">24/7 Online Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-municipal-green" />
                    <span className="text-sm">Instant Payment Confirmation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-municipal-green" />
                    <span className="text-sm">Multiple Payment Options</span>
                  </div>
                </div>
              </div>

              <div className="municipal-card p-6">
                <h3 className="text-lg font-bold text-municipal-blue mb-4">
                  Accepted Payment Methods
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-municipal-gray-light rounded-lg">
                    <span className="text-sm font-medium">eSewa</span>
                  </div>
                  <div className="text-center p-4 bg-municipal-gray-light rounded-lg">
                    <span className="text-sm font-medium">Khalti</span>
                  </div>
                  <div className="text-center p-4 bg-municipal-gray-light rounded-lg">
                    <span className="text-sm font-medium">Bank Transfer</span>
                  </div>
                  <div className="text-center p-4 bg-municipal-gray-light rounded-lg">
                    <span className="text-sm font-medium">Credit Card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETaxPayment;
