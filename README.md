# Gerador de QR Code e senhas no terminal

Ferramenta de estudo em Node.js com menu interativo para gerar QR Codes e senhas.

## Funcionalidades

- Escolha da operação pelo terminal.
- Geração de QR Code a partir de um texto ou link.
- Configuração dos caracteres e do tamanho das senhas por variáveis de ambiente.

## Tecnologias

Node.js, JavaScript, prompt, chalk e qrcode-terminal.

## Executar localmente

Use uma versão de Node.js com suporte à opção --env-file.

```bash
git clone https://github.com/chruscinskiDiego/node-qrcode-password-generator.git
cd node-qrcode-password-generator
npm ci
cp .env.example .env
npm start
```

## Organização

`src/prompts/` reúne as perguntas; `src/services/qr-code/` e `src/services/password/` implementam as operações.

## Escopo e limitações

Configure PASSWORD_LENGTH, UPPERCASE_LETTERS, LOWERCASE_LETTERS, NUMBERS e SPECIAL_CHARACTERS no .env. Consulte `src/services/password/util/permitted-characters.js` para os valores esperados. É um exercício de programação; a geração de senhas não foi auditada para uso de segurança.

