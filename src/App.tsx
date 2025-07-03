
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import i18n from "./i18n/config";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ReportIssue from "./pages/ReportIssue";
import PayTaxes from "./pages/PayTaxes";
import MyApplications from "./pages/MyApplications";
import MyComplaints from "./pages/MyComplaints";
import Downloads from "./pages/Downloads";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ETaxPayment from "./pages/ETaxPayment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout><Index /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/services" element={<Layout><Services /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/report" element={<Layout><ReportIssue /></Layout>} />
                <Route path="/pay-taxes" element={<Layout><PayTaxes /></Layout>} />
                <Route path="/my-applications" element={<Layout><MyApplications /></Layout>} />
                <Route path="/my-complaints" element={<Layout><MyComplaints /></Layout>} />
                <Route path="/downloads" element={<Layout><Downloads /></Layout>} />
                <Route path="/news" element={<Layout><News /></Layout>} />
                <Route path="/news/:id" element={<Layout><News /></Layout>} />
                <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
                <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
                
                {/* E-Gov Services */}
                <Route path="/e-tax-payment" element={<Layout><ETaxPayment /></Layout>} />
                <Route path="/application-letter" element={<Layout><Services /></Layout>} />
                <Route path="/registration-portal" element={<Layout><Services /></Layout>} />
                
                {/* Notice/Information */}
                <Route path="/procurement-notices" element={<Layout><News /></Layout>} />
                <Route path="/acts-laws" element={<Layout><Downloads /></Layout>} />
                <Route path="/tax-fees" element={<Layout><Downloads /></Layout>} />
                <Route path="/council-decisions" element={<Layout><News /></Layout>} />
                
                {/* Finance */}
                <Route path="/income-expenditure" element={<Layout><Downloads /></Layout>} />
                <Route path="/procurement-plan" element={<Layout><Downloads /></Layout>} />
                
                {/* Programs/Projects */}
                <Route path="/budget-program" element={<Layout><Downloads /></Layout>} />
                <Route path="/plan-project" element={<Layout><Services /></Layout>} />
                <Route path="/program-schedule" element={<Layout><News /></Layout>} />
                
                {/* Reports */}
                <Route path="/annual-report" element={<Layout><Downloads /></Layout>} />
                <Route path="/trimester-report" element={<Layout><Downloads /></Layout>} />
                
                <Route path="*" element={<Layout><NotFound /></Layout>} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </LanguageProvider>
    </I18nextProvider>
  </QueryClientProvider>
);

export default App;
