
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Building, Receipt, Download } from 'lucide-react';

const ETaxPayment: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTaxType, setSelectedTaxType] = useState('property');
  const [taxpayerInfo, setTaxpayerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setTaxpayerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = () => {
    console.log('Processing payment for:', selectedTaxType, taxpayerInfo);
    // Payment processing logic would go here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            E-Tax Payment Portal
          </h1>
          <p className="text-gray-600">
            Pay your municipal taxes online quickly and securely
          </p>
        </div>

        <Tabs value={selectedTaxType} onValueChange={setSelectedTaxType} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="property" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Property Tax
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <Receipt className="w-4 h-4" />
              Business Tax
            </TabsTrigger>
            <TabsTrigger value="vehicle" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Vehicle Tax
            </TabsTrigger>
            <TabsTrigger value="other" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Other Taxes
            </TabsTrigger>
          </TabsList>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Taxpayer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Taxpayer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={taxpayerInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={taxpayerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={taxpayerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={taxpayerInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your address"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tax Payment Details */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <TabsContent value="property" className="space-y-4 m-0">
                  <div>
                    <Label htmlFor="property-id">Property ID</Label>
                    <Input id="property-id" placeholder="Enter property ID" />
                  </div>
                  <div>
                    <Label htmlFor="property-area">Property Area (sq ft)</Label>
                    <Input id="property-area" placeholder="Enter property area" />
                  </div>
                  <div>
                    <Label htmlFor="property-type">Property Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="business" className="space-y-4 m-0">
                  <div>
                    <Label htmlFor="business-license">Business License No.</Label>
                    <Input id="business-license" placeholder="Enter license number" />
                  </div>
                  <div>
                    <Label htmlFor="business-type">Business Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="vehicle" className="space-y-4 m-0">
                  <div>
                    <Label htmlFor="vehicle-number">Vehicle Number</Label>
                    <Input id="vehicle-number" placeholder="Enter vehicle number" />
                  </div>
                  <div>
                    <Label htmlFor="vehicle-type">Vehicle Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="motorcycle">Motorcycle</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="other" className="space-y-4 m-0">
                  <div>
                    <Label htmlFor="tax-type">Tax Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tax type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="permit">Permit Fee</SelectItem>
                        <SelectItem value="fine">Fine Payment</SelectItem>
                        <SelectItem value="miscellaneous">Miscellaneous</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <div className="pt-4">
                  <Button onClick={handlePayment} className="w-full">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ETaxPayment;
