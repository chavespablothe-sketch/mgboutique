import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;

// O HTML pré-renderizado dentro de #root é mantido para SEO/crawlers sem JS,
// mas para usuários reais o limpamos antes de montar o React, evitando
// erros de hidratação que deixavam DOM antigo "fantasma" sobre a página.
rootEl.innerHTML = "";

createRoot(rootEl).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
