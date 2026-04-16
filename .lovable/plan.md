

## Auditoria reforçada: gratuidade infantil "até 12 anos" → "até 06 anos"

Verifiquei novamente a home e todo o site. Confirmo as ocorrências, incluindo as da home.

### Ocorrências na HOME (`src/pages/Index.tsx` → componentes renderizados)

| Componente | Linha | Texto atual |
|---|---|---|
| `WelcomeSection.tsx` | 8 | `"1 criança até 12 anos grátis"` (highlight chip) |
| `BoutiqueSection.tsx` | 16 | `"1 criança até 12 anos grátis nos finais de semana..."` |
| `BenefitsSection.tsx` | 17 | título: `"1 criança até 12 anos grátis"` |
| `BenefitsSection.tsx` | 18 | descrição: `"1 criança até 12 anos se hospeda gratuitamente..."` |
| `CTASection.tsx` | 17 | `"...1 criança até 12 anos grátis..."` |
| `OffersSection.tsx` | — | sem menção ✅ |

### Demais arquivos (fora da home) — confirmados

- `src/pages/SobrePage.tsx` (L22)
- `src/pages/LazerPage.tsx` (L117, L182)
- `src/pages/ExperienciasPage.tsx` (L390)
- `src/pages/ChalePage.tsx` (L152)
- `src/pages/AcomodacoesPage.tsx` (L154, L169)
- `src/pages/PacotesPage.tsx` (L89)
- `src/pages/PacoteDetalhePage.tsx` (L175, L205)
- `src/pages/ContatoPage.tsx` (L22 — FAQ, duas ocorrências na mesma string)
- `src/pages/TarifasPage.tsx` (L92, L131, L314 com duas ocorrências)
- `src/data/packages.ts` — campo `kidsFeatures` em ~13 pacotes
- `.lovable/memory/index.md` → atualizar "Kids Policy"

### Regras de substituição

| De | Para |
|---|---|
| `1 criança até 12 anos grátis` | `1 criança até 06 anos grátis` |
| `1 criança até 12 anos se hospeda gratuitamente...` | `1 criança até 06 anos se hospeda gratuitamente...` |
| `Kid free até 12 anos (fim de semana)` | `Kid free até 06 anos (fim de semana)` |
| `crianças até 12 anos grátis` | `crianças até 06 anos grátis` |
| `Acima de 12 anos ou 2ª criança...` | `Acima de 06 anos ou 2ª criança...` |

⚠️ **Não alterar** ocorrências de `12` em horários (`12h`, `12h30`), classes Tailwind (`gap-12`, `mb-12`), datas (`12/10`) ou parcelamento (`10x`).

### Total
**4 componentes da home + 9 páginas + `packages.ts` + memória = 15 arquivos**

Após sua aprovação, executo todas as substituições string-por-string preservando o restante da copy.

