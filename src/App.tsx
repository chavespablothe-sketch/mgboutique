import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobrePage from "./pages/SobrePage";
import ChalesPage from "./pages/ChalesPage";
import LazerPage from "./pages/LazerPage";
import GastronomiaPage from "./pages/GastronomiaPage";
import PacotesPage from "./pages/PacotesPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/chales" element={<ChalesPage />} />
          <Route path="/lazer" element={<LazerPage />} />
          <Route path="/gastronomia" element={<GastronomiaPage />} />
          <Route path="/pacotes" element={<PacotesPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
