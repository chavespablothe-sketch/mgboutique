## Plano

1. **Corrigir o layout quebrado da seção “Jogos do Brasil”**
   - Remover a estrutura que está permitindo a duplicação visual do bloco de texto.
   - Reorganizar a seção em um layout estável: texto à esquerda e 1 foto à direita no desktop; empilhado no mobile.

2. **Blindar contra overflow e sobreposição**
   - Ajustar largura máxima, grid, overflow e dimensões da imagem para impedir que o conteúdo invada outra coluna.
   - Manter a foto única já adicionada, sem voltar para `.asset.json` quebrado.

3. **Verificar o erro de hidratação relacionado**
   - Procurar a causa provável no componente/árvore da home e corrigir se estiver ligada à renderização da seção.
   - Validar no preview que a seção aparece uma vez, com texto legível e imagem carregando corretamente.

## Resultado esperado

A home deve exibir apenas uma seção “Torça com a gente nos jogos do Brasil”, sem duplicação de texto, sem cortes e com uma única foto carregada corretamente.