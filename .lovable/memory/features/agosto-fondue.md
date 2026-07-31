---
name: Agosto & Festival de Fondue
description: Pacotes de Festival de Fondue (sábados de agosto/2026), banner da home, card da hero e conteúdo da página /agosto.
type: feature
---

- Festival de Fondue: sábados de agosto/2026, início 08/08. Pacotes `festival-fondue-{08,15,22,29}-08-2026` gerados em `src/data/packages.ts` (Fri–Sun).
- Cardápio e carta de vinhos em `src/data/fondue.ts`; renderizados por `src/components/sections/FondueSection.tsx` na página `/agosto`.
- Home: `AgostoBanner` substituiu `FeriasJulhoBanner`.
- Hero: `NextPackageHighlight` mostra o card de Agosto (link `/agosto`) em julho e agosto de 2026.
- Menu: item "Férias" removido; "Agosto" fica no desktop e no mobile.
