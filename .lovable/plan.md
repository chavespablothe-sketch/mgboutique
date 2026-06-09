Vou corrigir os pontos exatamente assim:

1. Hero section
- Deixar o destaque do próximo pacote mais suave/sofisticado.
- Remover textos de contagem como “em 3 dias” / “Faltam X dias”.
- Manter apenas uma urgência elegante, como “Últimos quartos”.
- Remover o botão/link “Reservar”.
- Deixar somente “Ver detalhes”, apontando para a página do pacote.

2. Cupom BIEL
- Garantir que o cupom BIEL apareça na página principal de ofertas (`/ofertas`), não na home.
- Ajustar a posição para ficar mais evidente e elegante na página de ofertas.
- Verificar se ele não está sendo renderizado indevidamente na home.

3. Validação
- Revisar os arquivos afetados para confirmar que a home não recebe o cupom e que `/ofertas` mostra o banner corretamente.
- Corrigir qualquer causa óbvia de hidratação ligada ao uso de data atual no destaque, se estiver no mesmo componente afetado.