import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import Index from "./pages/Index";
import AvilaPage from "./pages/Avila/Avila";
import CataniaPage from "./pages/Catania/Catania";
import CountryPage from "./pages/Country";
import POIDetail from "./pages/POIDetail";
import NotFound from "./pages/NotFound";
import RutaDeLosPalaciosPage from "./pages/Avila/RutaDeLosPalacios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="fixed top-0 right-0 z-50 p-4 pointer-events-none">
            <div className="pointer-events-auto">
              <LanguageSelector />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/spain/avila" element={<AvilaPage />} />
            <Route path="/italy/catania" element={<CataniaPage />} />
            <Route path="/spain/avila/rutadelospalacios" element={<RutaDeLosPalaciosPage />} />
            <Route path="/:countrySlug/:citySlug/poi/:id" element={<POIDetail />} />
            <Route path="/:countrySlug" element={<CountryPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
