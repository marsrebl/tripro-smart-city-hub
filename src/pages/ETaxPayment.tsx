
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Building, Receipt, User } from 'lucide-react';

const ETaxPayment: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTaxType, setSelectedTaxType] = useState('');
  const [amount, setAmount] = useState('');
  const [taxpayerInfo, setTaxpayerInfo] = useState({
    name: '',
    panNumber: '',
    address: '',
    phone: ''
  });

  const taxTypes = [
    { value: 'property', label: 'Property Tax', icon: Building },
    { value: 'business', label: 'Business Tax', icon: Receipt },
    { value: 'vehicle', label: 'Vehicle Tax', icon: CreditCard },
    { value: 'other', label: 'Other Tax', icon: User }
  ];

  const handlePayment = () => {
    console.log('Processing payment:', { selectedTaxType, amount, taxpayerInfo });
    // Payment processing logic would go here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-municipal-blue mb-4">
            E-Tax Payment System
          </h1>
          <p className="text-gray-600">
            Pay your municipal taxes online securely and conveniently
          </p>
        </div>

        <Tabs defaultValue="payment" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payment">Make Payment</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>

          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Tax Payment Details
                </CardTitle>
                <CardDescription>
                  Select tax type and enter payment information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="taxType">Tax Type</Label>
                      <Select value={selectedTaxType} onValueChange={setSelectedTaxType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tax type" />
                        </SelectTrigger>
                        <SelectContent>
                          {taxTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center gap-2">
                                <type.icon className="h-4 w-4" />
                                {type.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="amount">Amount (NPR)</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Taxpayer Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter full name"
                        value={taxpayerInfo.name}
                        onChange={(e) => setTaxpayerInfo({...taxpayerInfo, name: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="pan">PAN Number</Label>
                      <Input
                        id="pan"
                        placeholder="Enter PAN number"
                        value={taxpayerInfo.panNumber}
                        onChange={(e) => setTaxpayerInfo({...taxpayerInfo, panNumber: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="Enter address"
                      value={taxpayerInfo.address}
                      onChange={(e) => setTaxpayerInfo({...taxpayerInfo, address: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter phone number"
                      value={taxpayerInfo.phone}
                      onChange={(e) => setTaxpayerInfo({...taxpayerInfo, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={handlePayment}
                    className="bg-municipal-blue hover:bg-municipal-blue/90"
                    disabled={!selectedTaxType || !amount || !taxpayerInfo.name}
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                  View your previous tax payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Receipt className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No payment history available</p>
                  <p className="text-sm">Your completed payments will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ETaxPayment;
