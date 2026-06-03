import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;

const tree = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// react-snap injeta HTML pré-renderizado em #root.
// Se já houver filhos, hidratamos (mantém SEO + interatividade).
// Caso contrário (dev / primeiro load sem snapshot), montamos do zero.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, tree);
} else {
  createRoot(rootEl).render(tree);
}
