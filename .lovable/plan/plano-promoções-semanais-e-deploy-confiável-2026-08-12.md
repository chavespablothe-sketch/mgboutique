# Plano: promoções semanais e deploy confiável

## Objetivo
Automatizar a troca do destaque semanal no horário correto do Brasil, impedir pacotes vencidos na Home e encerrar o ciclo de falhas silenciosas do deploy para a Hostinger.

## 1. Regra semanal única para os pacotes
- Centralizar a decisão de datas em um helper compartilhado, usando explicitamente o fuso `America/Sao_Paulo`.
- Regra do destaque flutuante:
  - até sábado, 10h59 (horário de Brasília): mantém o pacote do fim de semana atual;
  - sábado, às 11h: troca automaticamente para o pacote do fim de semana seguinte.
- Remover a prioridade fixa atual do pacote de Dia dos Pais no `PromoSplash`; imagem, título, período, link e CTA passarão a vir do pacote semanal resolvido.
- Fazer o componente se atualizar mesmo se a página permanecer aberta durante a virada das 11h, sem exigir novo deploy ou recarregamento.
- Alterar a chave de dispensa do splash por campanha/período, para que fechar uma oferta não esconda indevidamente a oferta da semana seguinte.

## 2. Home sem pacotes vencidos
- Aplicar um único filtro de validade antes de montar destaques e carrossel.
- Pacotes com check-in já passado não serão renderizados na Home.
- Pacotes recorrentes só aparecerão quando houver um próximo fim de semana válido dentro da faixa cadastrada.
- Remover a seleção fixa do Arraiá como destaque; os cards principais serão os próximos pacotes válidos em ordem cronológica.
- Manter a página de ofertas usando o mesmo filtro, calculado durante a renderização, evitando uma lista congelada desde a abertura do site.

## 3. Testes de virada de data
Criar testes determinísticos para confirmar:
- sexta-feira e sábado antes das 11h;
- sábado exatamente às 11h e depois das 11h;
- mudança de mês/ano;
- fim de uma faixa recorrente;
- exclusão de pacote com check-in passado;
- ordenação cronológica dos próximos pacotes.

## 4. Corrigir o workflow de deploy
O erro confirmado é `ETIMEDOUT` antes da autenticação: o runner do GitHub não consegue abrir conexão com a Hostinger nas portas 21 e 990. As quatro tentativas atuais usam a mesma rota bloqueada, portanto apenas repetem a mesma falha.

Ajustes no workflow:
- Separar claramente `build` e `deploy`, preservando o `dist` como artefato quando a hospedagem estiver indisponível.
- Fazer um preflight curto nas portas 22, 21 e 990, registrando host resolvido, protocolo disponível e diagnóstico objetivo.
- Usar uma estratégia por protocolo disponível:
  1. SFTP na porta 22, se estiver acessível, usando os secrets já existentes;
  2. FTPS explícito passivo na porta 21, se estiver acessível;
  3. FTPS implícito na porta 990, apenas se estiver acessível.
- Trocar quatro tentativas longas e redundantes por retries curtos somente no protocolo que respondeu ao preflight.
- Nunca recorrer a FTP sem criptografia.
- Encerrar rapidamente com uma mensagem específica quando nenhuma porta responder, em vez de consumir quase todo o limite de 25 minutos.
- Manter o build aprovado e disponível como artefato mesmo quando a transmissão para a Hostinger falhar.

## Limite técnico do deploy
Nenhuma alteração no repositório consegue atravessar um bloqueio externo quando a Hostinger recusa todas as portas de transferência. O novo workflow tentará SFTP e FTPS de forma correta e identificará definitivamente o caminho disponível. Se 22, 21 e 990 continuarem bloqueadas, a solução permanente exigirá liberar um protocolo na hospedagem ou trocar o destino do domínio; o workflow não deverá mascarar essa condição como sucesso.

## 5. Validação final
- Rodar os testes focados de datas e pacotes.
- Validar a Home e o splash em horários simulados antes/depois do corte de sábado às 11h.
- Confirmar que nenhum card vencido aparece na Home ou em Ofertas.
- Validar o YAML e conferir que o artefato de build é gerado antes do deploy.
- Publicar somente depois dessas verificações.
