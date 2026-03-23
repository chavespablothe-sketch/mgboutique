import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacidadePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-10">
              Política de <span className="italic text-secondary">Privacidade</span>
            </h1>

            <div className="space-y-8 text-muted-foreground font-body text-base leading-relaxed">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Informações que coletamos</h2>
                <p>Coletamos informações pessoais que você nos fornece diretamente, como nome, e-mail, telefone e dados de reserva. Também coletamos dados de navegação automaticamente através de cookies e tecnologias similares.</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Como usamos suas informações</h2>
                <p>Utilizamos seus dados para processar reservas, personalizar sua experiência, enviar comunicações sobre promoções e pacotes (com seu consentimento), e melhorar nossos serviços.</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Compartilhamento de dados</h2>
                <p>Não vendemos seus dados pessoais. Compartilhamos informações apenas com parceiros essenciais para a prestação dos serviços (sistema de reservas, gateway de pagamento) e quando exigido por lei.</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
                <p>Utilizamos cookies para análise de tráfego (Google Analytics), personalização de conteúdo e remarketing. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Seus direitos</h2>
                <p>Você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade dos seus dados pessoais, conforme previsto na Lei Geral de Proteção de Dados (LGPD). Para exercer esses direitos, entre em contato pelo e-mail contato@minhagloria.com.br.</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Segurança</h2>
                <p>Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, perda ou alteração.</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Contato</h2>
                <p>Para dúvidas sobre esta política, entre em contato:</p>
                <p className="mt-2">
                  <strong className="text-foreground">E-mail:</strong> contato@minhagloria.com.br<br />
                  <strong className="text-foreground">Telefone:</strong> (22) 99779-2023<br />
                  <strong className="text-foreground">Endereço:</strong> Estrada Rosário km 4,5 — Banquete, Bom Jardim/RJ
                </p>
              </div>

              <p className="text-sm text-muted-foreground/70 pt-4 border-t border-border">
                Última atualização: Março de 2026
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacidadePage;
