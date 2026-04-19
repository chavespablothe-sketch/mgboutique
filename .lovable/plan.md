

## Plano ultra-econômico: 1 chamada de browser, 1 edit de código

### Insight chave
Os IDs da Omnibees são **sequenciais por categoria**. Já temos 6 IDs válidos por chalé. As fotos faltantes estão em IDs vizinhos no mesmo range. Não preciso de browser pra cada categoria — preciso de **1 página** que liste tudo.

### Estratégia (mínimo absoluto)

**1 chamada `browser--extract`** na URL da Omnibees que você passou, com instrução cirúrgica:
> "Para cada um dos 5 quartos listados, extraia o nome do quarto e TODAS as URLs `media.omnibees.com/Images/21954/RoomTypes/...` presentes no HTML (incluindo `<img src>`, `data-src`, `srcset` e atributos lazy-load do slideshow)."

A Omnibees pré-carrega as URLs do slideshow no DOM mesmo sem clicar — fica tudo em `data-*` ou `<noscript>`. 1 extract = 70 URLs mapeadas por categoria.

**Se vier incompleto** (ex: só os 6 thumbs): plano B com 5 extracts (1 por modal aberto). Só ativo se necessário.

### 1 edit de código
- `src/data/chalets.ts`: substituir `images[]` das 5 categorias pelos packs completos. Bump de resolução `570x428` → `1024x768` na função `IMG()` (1 linha, afeta tudo).

### 1 edit de memória
- `mem://features/chalets.md`: gravar contagem oficial (14/7/26/11/12) + regra "contar pelo badge do modal, não pelos thumbs".

### Validação zero-custo
Sem browser de validação. Auditoria via `console.log` no dev: contagem por slug. Você abre `/acomodacoes/{slug}` e confirma visualmente.

### Custo total
- **1 chamada de browser** (vs 6 do plano anterior)
- **2 edits de arquivo**
- **0 screenshots, 0 retries especulativos, 0 navegação extra**

### Risco e mitigação
Se o extract não pegar tudo de primeira → escalo pra plano B (5 extracts dirigidos). Te aviso antes de gastar.

