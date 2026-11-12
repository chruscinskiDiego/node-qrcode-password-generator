# Terminal QR code and password generator

Node.js study tool with an interactive menu for generating QR codes and passwords.

## Features

- Selects an operation through the terminal.
- Generates a QR code from text or a URL.
- Configures password length and character sets through environment variables.

## Technologies

Node.js, JavaScript, prompt, chalk and qrcode-terminal.

## Run locally

Use a Node.js version that supports --env-file.

```bash
git clone https://github.com/chruscinskiDiego/node-qrcode-password-generator.git
cd node-qrcode-password-generator
npm ci
cp .env.example .env
npm start
```

## Configuration

Set PASSWORD_LENGTH, UPPERCASE_LETTERS, LOWERCASE_LETTERS, NUMBERS and SPECIAL_CHARACTERS in .env. See `src/services/password/util/permitted-characters.js` for the expected values.

## Structure

`src/prompts/` contains questions; `src/services/qr-code/` and `src/services/password/` implement the operations.

## Scope and limitations

This is a programming exercise. Password generation has not been audited for security-sensitive use.
