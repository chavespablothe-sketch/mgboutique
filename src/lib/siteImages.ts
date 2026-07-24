// URLs públicas das imagens hospedadas no Supabase Storage (bucket `site-images`).
// Funcionam em qualquer domínio (preview, lovable.app, minhagloria.com.br),
// sem depender de CDN interno do Lovable nem do fallback do React Router.

const BASE =
  "https://drjfkpgfqvtggxrhhuxp.supabase.co/storage/v1/object/public/site-images";

export const feriasJulhoImages = {
  bolhas: `${BASE}/ferias-julho/ferias-bolhas.jpg`,
  cisne: `${BASE}/ferias-julho/ferias-cisne.jpg`,
  cozinha: `${BASE}/ferias-julho/ferias-cozinha.jpg`,
  pintura: `${BASE}/ferias-julho/ferias-pintura.jpg`,
  piscina: `${BASE}/ferias-julho/ferias-piscina.jpg`,
  presente: `${BASE}/ferias-julho/ferias-presente.jpg`,
  recreacao: `${BASE}/ferias-julho/ferias-recreacao.jpg`,
  heroFerias: `${BASE}/ferias-julho/dias/hero-ferias.jpg`,
  feriasCover: `${BASE}/ferias-julho/dias/ferias-cover.jpg`,
  introSemana: `${BASE}/ferias-julho/dias/intro-semana.jpg`,
  segunda: `${BASE}/ferias-julho/dias/segunda.jpg`,
  terca: `${BASE}/ferias-julho/dias/terca.jpg`,
  quarta: `${BASE}/ferias-julho/dias/quarta.jpg`,
  quinta: `${BASE}/ferias-julho/dias/quinta.jpg`,
  sexta: `${BASE}/ferias-julho/dias/sexta.jpg`,
  sabado: `${BASE}/ferias-julho/dias/sabado.jpg`,
  domingo: `${BASE}/ferias-julho/dias/domingo.jpg`,
} as const;

export const pacoteImages = {
  criancas2026: `${BASE}/pacotes/criancas-2026.jpg`,
  finados2026: `${BASE}/pacotes/finados-2026.jpg`,
  setembro2026: `${BASE}/pacotes/setembro-2026.jpg`,
} as const;

export const agostoImages = {
  hero: `${BASE}/agosto/hero-agosto.jpg`,
} as const;

