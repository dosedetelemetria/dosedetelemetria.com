
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Imprint from "./pages/Imprint";
import ImprintEn from "./pages/ImprintEn";
import TermsOfUse from "./pages/TermsOfUse";
import TermsOfUseEn from "./pages/TermsOfUseEn";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyEn from "./pages/PrivacyPolicyEn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="produtos" element={<Products />} />
            <Route path="produtos/:slug" element={<ProductDetail />} />
            <Route path="imprint" element={<Imprint />} />
            <Route path="imprint-en" element={<ImprintEn />} />
            <Route path="termos-de-uso" element={<TermsOfUse />} />
            <Route path="terms-of-use" element={<TermsOfUseEn />} />
            <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="privacy-policy" element={<PrivacyPolicyEn />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
