import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import SobrePage from "./pages/SobrePage";
import AcomodacoesPage from "./pages/AcomodacoesPage";
import ChalePage from "./pages/ChalePage";
import ExperienciasPage from "./pages/ExperienciasPage";
import GastronomiaPage from "./pages/GastronomiaPage";
import TarifasPage from "./pages/TarifasPage";
import PacoteDetalhePage from "./pages/PacoteDetalhePage";
import ContatoPage from "./pages/ContatoPage";
import RegiaoPage from "./pages/RegiaoPage";
import BlogPage from "./pages/BlogPage";
import PrivacidadePage from "./pages/PrivacidadePage";
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
          <Route path="/acomodacoes" element={<AcomodacoesPage />} />
          <Route path="/acomodacoes/chale-master" element={<Navigate to="/acomodacoes/chale-romantico" replace />} />
          <Route path="/acomodacoes/:slug" element={<ChalePage />} />
          <Route path="/experiencias" element={<ExperienciasPage />} />
          <Route path="/gastronomia" element={<GastronomiaPage />} />
          <Route path="/tarifas" element={<TarifasPage />} />
          <Route path="/tarifas/:slug" element={<PacoteDetalhePage />} />
          <Route path="/regiao" element={<RegiaoPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacidade" element={<PrivacidadePage />} />
          {/* Redirects from old routes */}
          <Route path="/chales" element={<Navigate to="/acomodacoes" replace />} />
          <Route path="/pacotes" element={<Navigate to="/tarifas" replace />} />
          <Route path="/pacotes/:slug" element={<Navigate to="/tarifas" replace />} />
          <Route path="/lazer" element={<Navigate to="/experiencias" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
