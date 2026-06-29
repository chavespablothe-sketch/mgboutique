## Objetivo

Acabar de vez com o problema de imagens quebradas no `minhagloria.com.br` movendo as fotos do CDN interno do Lovable (`/__l5e/assets-v1/...`) para o **Supabase Storage do Lovable Cloud**, que entrega URLs absolutas públicas que funcionam em qualquer domínio.

## Por que isso resolve

- URLs do Supabase Storage são **absolutas e públicas** (`https://<projeto>.supabase.co/storage/v1/object/public/...`).
- Não passam pelo Hostinger → não caem no fallback do React Router → não viram `index.html`.
- Funcionam igual no preview, no domínio Lovable e no domínio próprio.
- Some a necessidade do helper `assetUrl()`, do postbuild que reescreve o `dist/`, e do redirect no `.htaccess`.

## Plano

1. **Criar bucket público no Lovable Cloud**
   - Nome: `site-images`, público (leitura aberta para qualquer visitante).
   - Política RLS: `SELECT` liberado para `anon` e `authenticated` no bucket; upload restrito a `service_role`.

2. **Subir as 16 fotos de Férias de Julho para o bucket**
   - Pasta `ferias-julho/` dentro do bucket, espelhando a estrutura atual de `src/assets/ferias-julho/`.
   - Inclui: `ferias-bolhas.jpg`, `ferias-cisne.jpg`, `ferias-cozinha.jpg`, `ferias-pintura.jpg`, `ferias-piscina.jpg`, `ferias-presente.jpg`, `ferias-recreacao.jpg`, e os 9 arquivos da pasta `dias/`.
   - As 3 imagens dos outros pacotes (`criancas-2026.jpg`, `finados-2026.jpg`, `setembro-2026.jpg`) entram junto, já que sofrem do mesmo problema.

3. **Trocar as referências no código**
   - Substituir os imports dos `.asset.json` por constantes com a URL pública do Supabase em:
     - `src/components/sections/FeriasJulhoBanner.tsx`
     - `src/pages/FeriasJulhoPage.tsx`
     - `src/data/packages.ts`
     - Qualquer outro componente que use essas 19 imagens.
   - Remover os arquivos `.asset.json` correspondentes da pasta `src/assets/`.

4. **Limpar a gambiarra**
   - Remover a função `makeLovableAssetUrlsAbsolute()` do `scripts/prerender.mjs`.
   - Remover a `RewriteRule` de `/__l5e/assets-v1/` do `public/.htaccess`.
   - Simplificar `src/lib/assets.ts` (ou remover se ninguém mais usar).

5. **Verificação**
   - Rodar o build local e confirmar que as imagens carregam direto da URL do Supabase.
   - Após deploy, abrir `minhagloria.com.br/ferias-de-julho` e confirmar `200 OK` + `content-type: image/jpeg` nas requisições das fotos.

## Observações técnicas

- O bucket público do Lovable Cloud serve as imagens com cache CDN e CORS corretos — não há configuração extra no Hostinger.
- A migração é reversível: se quiser voltar para `.asset.json` depois, é só desfazer.
- Esta abordagem também blinda **futuras imagens**: basta subir no mesmo bucket e referenciar pela URL pública, sem nunca mais passar pelo `/__l5e/`.

## Escopo NÃO incluído (a definir depois, se quiser)

- Migrar **todas** as outras imagens do site (chalés, gastronomia, hero, etc.) para o Supabase. Posso fazer num segundo passo se você confirmar que ficou bom só com Férias de Julho primeiro.
- Mexer no workflow do GitHub / FTP do Hostinger — isso é problema separado da hospedagem, não das imagens.

Confirma que sigo por esse caminho?