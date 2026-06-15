## Diagnóstico

O problema real parece ser duplo:

1. **Seção quebrada:** não parece ser a foto em si. O app está tentando hidratar HTML pré-renderizado/estático dentro de `#root`, e há um aviso de hidratação no console. Isso pode deixar DOM antigo misturado com DOM novo, gerando exatamente o efeito da sua captura: texto “fantasma”/duplicado deslocado sobre a imagem.
2. **Deploy:** o build terminou com sucesso; o erro está só no passo **Deploy via FTP**: `Timeout (control socket)`. Isso é conexão FTP/Hostinger instável/lenta, não erro do site.

**Do I know what the issue is?** Sim: a seção precisa parar de depender de hidratação frágil + layout precisa ser simplificado; o deploy precisa parar de fazer uma publicação agressiva via FTP com timeout baixo.

## Plano de correção sem te onerar

### 1. Corrigir a origem do bug visual sem mexer em asset nem gerar imagem
- Alterar `src/main.tsx` para **não hidratar** o HTML antigo quando o JavaScript carrega.
- Em vez disso, limpar o conteúdo pré-renderizado de `#root` e montar o React do zero.
- Isso remove a chance de HTML antigo ficar “colado” por baixo/por cima do componente novo.
- Mantém o HTML estático útil para SEO/no-JS, mas evita hidratação quebrada para usuários reais.

### 2. Blindar a seção “Jogos do Brasil” com layout mais simples
- Reescrever apenas `src/components/sections/JogosBrasilSection.tsx` com estrutura estática e previsível:
  - desktop: texto e imagem lado a lado, sem camadas absolutas;
  - mobile: imagem e texto empilhados corretamente;
  - `min-w-0`, `overflow-hidden`, largura controlada e proporção fixa da imagem;
  - sem animações, sem efeitos de viewport e sem qualquer duplicação condicional.
- Não trocar a foto, não subir arquivo novo e não usar geração de imagem.

### 3. Corrigir deploy sem ficar gastando tentativas
- Ajustar `.github/workflows/deploy.yml` para reduzir chance de timeout:
  - aumentar timeout FTP para algo mais realista;
  - adicionar `timeout-minutes` no job para não travar indefinidamente;
  - remover `dangerous-clean-slate: true`, porque apagar tudo antes de subir força mais operações FTP e aumenta risco de falha;
  - manter deploy incremental do `dist/`.
- Não vou rodar deploy daqui; a validação local será visual/código. O próximo deploy acontece só quando você decidir publicar/rodar o workflow.

### 4. Validação antes de encerrar
- Conferir a seção no preview em desktop e mobile.
- Confirmar no console que o erro de hidratação sumiu ou deixou de afetar a árvore principal.
- Confirmar que o workflow ficou com deploy menos agressivo e mais tolerante.

## Resultado esperado

A seção deve aparecer uma única vez, sem texto fantasma, sem corte no desktop e sem quebrar no mobile. O próximo deploy deve ter menos chance de falhar por timeout FTP, sem precisar ficar tentando várias vezes.

<presentation-actions>
  <presentation-open-history>View History</presentation-open-history>
</presentation-actions>

<presentation-actions>
<presentation-link url="https://docs.lovable.dev/tips-tricks/troubleshooting">Troubleshooting docs</presentation-link>
</presentation-actions>