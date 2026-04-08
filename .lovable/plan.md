

## Atualizar Google Tag Manager

O arquivo `index.html` contém o GTM antigo com ID **GTM-M26SWWFZ** em dois lugares (head e body). Vamos substituir por **GTM-PCRCBQBX**.

### Alterações em `index.html`

1. **Linha 26** — Trocar `'GTM-M26SWWFZ'` por `'GTM-PCRCBQBX'` no script do `<head>`
2. **Linha 58** — Trocar `GTM-M26SWWFZ` por `GTM-PCRCBQBX` no noscript do `<body>`

Nenhum outro arquivo contém referências ao GTM antigo (o Meta Pixel permanece inalterado).

