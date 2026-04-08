

## Destaque de Feriados na Home — Plano Final

### Posicionamento

Mover a `OffersSection` para logo após `WelcomeSection` na home:

```text
Header → Hero → Welcome → ▶ OFFERS (nova posição) ◀ → Boutique → Accommodations → Amenities → Testimonials → CTA → Footer
```

Alteração em `Index.tsx`: mover `<OffersSection />` da linha 28 para logo após `<WelcomeSection />` (linha 25).

### Estrutura da nova OffersSection

**Arquivo:** `src/components/sections/OffersSection.tsx` — reescrever

#### Parte 1 — Banner slim de urgência
- Fundo suave, texto com countdown: "Corpus Christi em X dias · Últimos quartos"
- CTA: "Garantir minha vaga →"

#### Parte 2 — Destaque editorial do próximo feriado
- **Desktop**: 2 colunas (foto 4/3 à esquerda, texto à direita)
- **Mobile**: empilhado (foto em cima, texto embaixo)
- Inclui: nome, período, noites, badge de urgência, selo de desconto, CTA

#### Parte 3 — Grid dos próximos feriados
- **Desktop**: 3 colunas | **Mobile**: 1 coluna empilhada
- Cada card com foto, período, badge de urgência, selo de desconto, CTA

### Selos de desconto

Badge visual em cada card e no destaque: **"Desconto já aplicado na tarifa"** — selo discreto em tom dourado/secondary, estilo pill, posicionado sobre ou abaixo da foto. Reforça que o preço no motor de reservas já inclui o desconto sem mostrar valores (respeitando a política de não exibir preços).

### Badges de urgência (automáticos por data)

| Dias até check-in | Badge |
|---|---|
| < 15 dias | 🔴 "Últimas vagas" |
| 15–30 dias | 🟠 "Últimos quartos" |
| 30–60 dias | 🟡 "Vagas limitadas" |
| > 60 dias | Sem badge |

### Lógica

- Parsear `checkIn` (DDMMYYYY) de cada pacote, calcular dias até a data
- Filtrar apenas pacotes futuros, ordenar por proximidade
- Primeiro da lista → destaque editorial; próximos 3 → grid
- Excluir "Fim de Semana" (sem checkIn fixo) desta seção

### Layout Mobile

```text
┌─────────────────────────┐
│ ● Corpus Christi em 57d │
│   Últimos quartos       │
│  [Garantir vaga →]      │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │   Foto (4/3)        │ │
│ │   "Desconto aplicado│ │
│ ├─────────────────────┤ │
│ │ CORPUS CHRISTI       │ │
│ │ 🔴 Últimas vagas     │ │
│ │ [Reservar agora →]  │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ São João            │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Independência       │ │
│ └─────────────────────┘ │
│                         │
│ [Ver todos os pacotes →]│
└─────────────────────────┘
```

### Arquivos alterados

1. **`src/components/sections/OffersSection.tsx`** — reescrever com lógica de datas, badges, selo de desconto e layout responsivo
2. **`src/pages/Index.tsx`** — mover `<OffersSection />` para após `<WelcomeSection />`

