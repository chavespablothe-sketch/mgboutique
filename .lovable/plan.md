

# Melhorar legibilidade do texto na Hero Section

O texto está sobre uma foto aérea verde — precisa de mais contraste sem mexer na foto.

## Mudanças

1. **Text shadow no h1**: Adicionar `text-shadow` para destacar o texto do fundo (sombra suave escura)
2. **Text shadow no botão**: Leve sombra para legibilidade
3. **Aumentar opacidade do texto**: `text-primary-foreground` já é branco, mas garantir que o subtítulo (se houver) também tenha boa visibilidade

### Detalhes técnicos
- Adicionar `style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}` no `<motion.h1>`
- Opcionalmente adicionar um `drop-shadow` via classe Tailwind (`drop-shadow-lg`) como reforço

